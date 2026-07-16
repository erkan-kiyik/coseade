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
    this.crouching = wantCrouch;
    this.targetHeight = wantCrouch ? CROUCH_HEIGHT : STAND_HEIGHT;
    this.height += (this.targetHeight - this.height) * Math.min(1, dt * 10);

    this.sprinting = !!keys.sprint && !wantCrouch && (keys.forward || 0) > 0;

    // desired horizontal direction from yaw + input
    const forward = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.sin(this.yaw + Math.PI / 2), 0, Math.cos(this.yaw + Math.PI / 2));
    const wish = new THREE.Vector3();
    wish.addScaledVector(forward, -(keys.forward || 0));
    wish.addScaledVector(right, keys.right || 0);
    if (wish.lengthSq() > 0) wish.normalize();

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

    // camera
    const eyeHeight = this.height - 0.12;
    this.camera.position.set(this.pos.x, this.pos.y + eyeHeight, this.pos.z);
    this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');

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
