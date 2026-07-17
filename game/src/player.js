// First-person player controller: mouse look, WASD movement with
// acceleration/friction, sprint, crouch, jump/gravity, capsule collision,
// health with regen, and footstep/landing audio cadence.

import * as THREE from 'three';
import { resolveCharacterCollisions } from './world.js';

const STAND_HEIGHT = 1.75;
const CROUCH_HEIGHT = 1.15;
const RADIUS = 0.34;
const GRAVITY = 22;
const JUMP_SPEED = 7.4;
const WALK_SPEED = 4.6;
const SPRINT_MULT = 1.6;
const CROUCH_MULT = 0.5;
const ACCEL = 42;
const FRICTION = 12;
const SLIDE_SPEED = WALK_SPEED * 2.05;   // launch speed when a slide begins
const SLIDE_TIME = 0.62;                 // max slide duration (s)
const SLIDE_MIN = WALK_SPEED * 0.95;     // drop out of slide below this speed

export class Player {
  constructor(camera, world, audio) {
    this.camera = camera;
    this.world = world;
    this.audio = audio;

    this.pos = new THREE.Vector3(0, 0, 6);
    this.vel = new THREE.Vector3();
    this.yaw = Math.PI;
    this.pitch = 0;
    this.height = STAND_HEIGHT;
    this.targetHeight = STAND_HEIGHT;
    this.crouching = false;
    this.grounded = true;
    this.sprinting = false;
    this.wasGrounded = true;

    this.maxHp = 100;
    this.hp = this.maxHp;
    this.regenDelay = 0;
    this.dead = false;

    this.sensitivity = 1.0;
    this.baseFov = 80;

    this.lookDeltaX = 0;
    this.lookDeltaY = 0;
    this.stepDist = 0;
    this.bobT = 0;

    // jump feel: buffer a slightly-early press, and allow a jump for a
    // fraction of a second after leaving ground (coyote time). Works while
    // crouched so you can crouch-jump.
    this.jumpBuffer = 0;
    this.coyote = 0;
    this._wasJump = false;

    // tactical slide: crouch while carrying sprint momentum launches a low,
    // fast slide that bleeds off into a crouch.
    this.sliding = false;
    this.slideT = 0;
    this._wasCrouch = false;
    this.slideLean = 0;

    this.onDamage = null; // (amount, fromWorldPos) => void
    this.onDeath = null;

    this.input = { forward: 0, right: 0, jump: false, sprint: false, crouch: false };
  }

  applyMouseMovement(dx, dy) {
    const s = this.sensitivity * 0.0022;
    this.yaw -= dx * s;
    this.pitch -= dy * s;
    this.pitch = Math.max(-Math.PI / 2 + 0.02, Math.min(Math.PI / 2 - 0.02, this.pitch));
    this.lookDeltaX = dx;
    this.lookDeltaY = dy;
  }

  takeDamage(amount, fromPos) {
    if (this.dead) return;
    this.hp = Math.max(0, this.hp - amount);
    this.regenDelay = 4.5;
    this.audio.playerHurt();
    this.onDamage && this.onDamage(amount, fromPos);
    if (this.hp <= 0) {
      this.dead = true;
      this.onDeath && this.onDeath();
    }
  }

  heal(amount) {
    this.hp = Math.min(this.maxHp, this.hp + amount);
  }

  update(dt, keys) {
    // decay per-frame look delta (consumed by weapon sway each frame in main loop already; reset after)
    const wantCrouch = !!keys.crouch;
    const crouchPressed = wantCrouch && !this._wasCrouch;
    this._wasCrouch = wantCrouch;

    const horizSpeed0 = Math.hypot(this.vel.x, this.vel.z);
    // begin a slide: fresh crouch press while grounded and moving near sprint speed
    if (!this.sliding && crouchPressed && this.grounded && horizSpeed0 > WALK_SPEED * 1.15) {
      this.sliding = true;
      this.slideT = SLIDE_TIME;
      const inv = horizSpeed0 > 0.001 ? 1 / horizSpeed0 : 0;
      this.vel.x = this.vel.x * inv * SLIDE_SPEED;
      this.vel.z = this.vel.z * inv * SLIDE_SPEED;
      this.audio.footstep(true);
    }

    this.crouching = wantCrouch || this.sliding;
    this.targetHeight = this.crouching ? CROUCH_HEIGHT : STAND_HEIGHT;
    // slides dip the camera a touch faster than a normal crouch for punch
    this.height += (this.targetHeight - this.height) * Math.min(1, dt * (this.sliding ? 16 : 10));

    this.sprinting = !!keys.sprint && !this.crouching && (keys.forward || 0) > 0 && !this.sliding;

    // desired horizontal direction from yaw + input
    const forward = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.sin(this.yaw + Math.PI / 2), 0, Math.cos(this.yaw + Math.PI / 2));
    const wish = new THREE.Vector3();
    wish.addScaledVector(forward, -(keys.forward || 0));
    wish.addScaledVector(right, keys.right || 0);
    if (wish.lengthSq() > 0) wish.normalize();

    if (this.sliding) {
      // bleed momentum, allow a little steering, exit when slow/short/airborne/uncrouched
      this.slideT -= dt;
      const decay = Math.exp(-2.7 * dt);
      this.vel.x *= decay;
      this.vel.z *= decay;
      const s = Math.hypot(this.vel.x, this.vel.z);
      if (s > 0.001 && wish.lengthSq() > 0) {
        // steer the momentum vector slightly toward input without adding speed
        const nx = this.vel.x / s, nz = this.vel.z / s;
        const steer = 2.2 * dt;
        let vx = nx + wish.x * steer, vz = nz + wish.z * steer;
        const nl = Math.hypot(vx, vz) || 1;
        this.vel.x = (vx / nl) * s;
        this.vel.z = (vz / nl) * s;
      }
      this.slideLean = Math.min(1, this.slideLean + dt * 6);
      if (this.slideT <= 0 || s < SLIDE_MIN || !this.grounded || (!wantCrouch && !keys.sprint)) {
        this.sliding = false;
      }
    } else {
      this.slideLean = Math.max(0, this.slideLean - dt * 5);
      let targetSpeed = WALK_SPEED;
      if (wantCrouch) targetSpeed *= CROUCH_MULT;
      else if (this.sprinting) targetSpeed *= SPRINT_MULT;

      const wishVel = wish.multiplyScalar(targetSpeed);
      const horizVel = new THREE.Vector3(this.vel.x, 0, this.vel.z);
      const diff = wishVel.clone().sub(horizVel);
      const accel = wish.lengthSq() > 0 ? ACCEL : FRICTION;
      const maxDelta = accel * dt;
      if (diff.length() > maxDelta) diff.setLength(maxDelta);
      horizVel.add(diff);
      this.vel.x = horizVel.x;
      this.vel.z = horizVel.z;
    }

    // gravity + jump (buffered + coyote, independent of crouch state)
    const jumpPressed = !!keys.jump;
    if (jumpPressed && !this._wasJump) this.jumpBuffer = 0.12;
    this._wasJump = jumpPressed;
    this.jumpBuffer = Math.max(0, this.jumpBuffer - dt);
    this.coyote = this.grounded ? 0.1 : Math.max(0, this.coyote - dt);
    if (this.jumpBuffer > 0 && this.coyote > 0) {
      // a touch more lift out of a crouch so crouch-jumps clear cover
      this.vel.y = JUMP_SPEED * (wantCrouch ? 1.08 : 1);
      this.grounded = false;
      this.jumpBuffer = 0;
      this.coyote = 0;
      this.audio.footstep(true);
    }
    if (!this.grounded) this.vel.y -= GRAVITY * dt;

    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    this.pos.y += this.vel.y * dt;

    if (this.pos.y <= 0) {
      if (!this.grounded && this.vel.y < -6) this.audio.land();
      this.pos.y = 0;
      this.vel.y = 0;
      this.grounded = true;
    } else {
      this.grounded = false;
    }

    resolveCharacterCollisions(this.pos, RADIUS, this.height, this.world.colliders);

    // footsteps
    const speed = Math.hypot(this.vel.x, this.vel.z);
    if (this.grounded && speed > 0.6) {
      this.stepDist += speed * dt;
      const stepEvery = this.sprinting ? 2.2 : wantCrouch ? 3.6 : 2.8;
      if (this.stepDist > stepEvery) {
        this.stepDist = 0;
        this.audio.footstep(this.sprinting);
      }
    } else {
      this.stepDist = 0;
    }

    // regen
    if (this.regenDelay > 0) this.regenDelay -= dt;
    else if (this.hp < this.maxHp && !this.dead) this.hp = Math.min(this.maxHp, this.hp + dt * 8);

    // camera (subtle roll into an active slide)
    const eyeHeight = this.height - 0.12;
    this.camera.position.set(this.pos.x, this.pos.y + eyeHeight, this.pos.z);
    this.camera.rotation.set(this.pitch, this.yaw, -0.09 * this.slideLean, 'YXZ');

    this.speed = speed;
  }

  consumeLookDelta() {
    const d = { x: this.lookDeltaX, y: this.lookDeltaY };
    this.lookDeltaX = 0;
    this.lookDeltaY = 0;
    return d;
  }

  getEyePosition(out) {
    return out.set(this.pos.x, this.pos.y + this.height - 0.12, this.pos.z);
  }
}
