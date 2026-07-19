// Hostile soldier: patrol → alert → engage state machine on the same rig as
// the player. Burst fire with settling accuracy, animated reloads, flinch
// reactions, and a scripted collapse on death that leaves the body in the
// scene.

import { clamp, lerp, damp, rand, randSpread, easeInOutQuad } from '../engine/math.js';
import { newWeaponState, computePose, weaponAnchor, weaponPoint, toWorld, drawSoldier } from './rig.js';
import { segVsBox } from './player.js';

const WALK = 95, CHASE = 210;

export class Enemy {
  constructor(parts, shadow, rifle, world, fx, audio, x, patrolMin, patrolMax) {
    this.parts = parts; this.shadow = shadow;
    this.wpn = rifle; this.ws = newWeaponState();
    this.world = world; this.fx = fx; this.audio = audio;

    this.x = x; this.y = 0;
    this.vx = 0; this.vy = 0;
    this.halfW = 10; this.h = 126;
    this.onGround = false; this.airTime = 0;
    this.facing = rand() > 0.5 ? 1 : -1;
    this.aimLocal = 0; this.aimErr = 0.1;
    this.gaitPhase = rand(0, 6); this.speedNorm = 0;
    this.breathT = rand(0, 9); this.lean = 0;
    this.crouchSpring = 0; this.crouchVel = 0;
    this.hurtT = 0; this.deadT = 0;

    this.hp = 100;
    this.state = 'patrol';
    this.patrolMin = patrolMin; this.patrolMax = patrolMax;
    this.waitT = rand(0, 2);
    this.alertT = 0;
    this.flinchT = 0;
    this.mag = 30;
    this.reload = null;
    this.burstLeft = 0;
    this.burstGap = rand(0.6, 1.4);
    this.shotCd = 0;
    this.engagedT = 0;
  }

  damage(dmg, dirX, player, melee = false) {
    if (this.deadT > 0) return;
    this.hp -= dmg;
    this.hurtT = 0.35;
    this.flinchT = melee ? 0.55 : 0.3;
    this.vx += dirX * (melee ? 210 : 60);
    this.audio.hitFlesh();
    // getting shot reveals the shooter
    if (this.state === 'patrol') { this.state = 'alert'; this.alertT = 0; this.facing = -dirX || this.facing; }
    if (this.hp <= 0) {
      this.hp = 0;
      this.deadT = 0.001;
      this.fx.blood(this.x, this.y - 80, dirX);
      this.world.bloodDecal(this.x + dirX * 8, 0 + this.yGround(), 14);
      // dropped rifle
      this.fx.magDrop(this.x + dirX * 4, this.y - 60, -dirX);
      if (player) player.kills++;
    }
  }

  yGround() { return this.y; }

  canSee(player) {
    if (!player || player.deadT > 0) return false;
    const dx = player.x - this.x;
    const dist = Math.abs(dx);
    if (dist > 660) return false;
    const eyeY = this.y - 112;
    if (!this.world.hasLineOfSight(this.x, eyeY, player.x, player.y - 95)) return false;
    const facingHim = Math.sign(dx) === this.facing;
    const heard = player.time - player.lastShotT < 1.2 && dist < 560;
    return facingHim || dist < 150 || heard;
  }

  update(dt, player, game) {
    if (this.deadT > 0) {
      this.deadT += dt;
      this.vx = damp(this.vx, 0, 8, dt);
      this.world.moveEntity(this, dt);
      this.hurtT = Math.max(0, this.hurtT - dt);
      return;
    }

    this.breathT += dt;
    this.hurtT = Math.max(0, this.hurtT - dt);
    this.flinchT = Math.max(0, this.flinchT - dt);
    this.shotCd -= dt;

    // weapon recoil springs
    const ws = this.ws;
    ws.recoilVel += -ws.recoil * 240 * dt;
    ws.recoilVel *= Math.exp(-14 * dt);
    ws.recoil = Math.max(0, ws.recoil + ws.recoilVel * dt * 44);
    ws.recoilRotVel += -ws.recoilRot * 260 * dt;
    ws.recoilRotVel *= Math.exp(-13 * dt);
    ws.recoilRot += ws.recoilRotVel * dt * 40;
    ws.flashT = Math.max(0, ws.flashT - dt * 14);
    ws.boltBack = Math.max(0, ws.boltBack - dt * 9);

    let rot = Math.sin(this.breathT * 1.6) * 0.016;
    let offY = Math.sin(this.breathT * 1.6 + 1) * 0.4 + Math.abs(Math.sin(this.gaitPhase)) * 1.4 * this.speedNorm;

    // ---------- state machine
    if (this.state === 'patrol') {
      this.aimLocal = damp(this.aimLocal, 0.28, 4, dt);   // muzzle low
      rot += 0.35;
      if (this.waitT > 0) {
        this.waitT -= dt;
        this.vx = damp(this.vx, 0, 10, dt);
      } else {
        this.vx = damp(this.vx, this.facing * WALK, 6, dt);
        if (this.x > this.patrolMax) { this.facing = -1; this.waitT = rand(0.8, 2.2); }
        if (this.x < this.patrolMin) { this.facing = 1; this.waitT = rand(0.8, 2.2); }
      }
      if (this.canSee(player)) { this.state = 'alert'; this.alertT = 0; }
    } else if (this.state === 'alert') {
      // snap toward the threat, brief shoulder-up delay
      this.alertT += dt;
      this.vx = damp(this.vx, 0, 10, dt);
      if (player && player.deadT <= 0) this.facing = Math.sign(player.x - this.x) || this.facing;
      this.aimLocal = damp(this.aimLocal, 0, 8, dt);
      if (this.alertT > 0.32) { this.state = 'combat'; this.aimErr = 0.12; this.engagedT = 0; }
    } else if (this.state === 'combat') {
      if (!player || player.deadT > 0) {
        this.state = 'patrol'; this.waitT = 1;
      } else {
        this.engagedT += dt;
        const dx = player.x - this.x;
        const dist = Math.abs(dx);
        this.facing = Math.sign(dx) || this.facing;
        // hold useful range
        let move = 0;
        if (dist > 470) move = this.facing;
        else if (dist < 130) move = -this.facing;
        this.vx = damp(this.vx, move * CHASE, 5, dt);

        // aim at the player's chest with settling error
        this.aimErr = damp(this.aimErr, 0.028, 0.5, dt);
        const ty = (player.y - 92) - (this.y - 97);
        const targetAim = Math.atan2(ty, Math.abs(dx));
        this.aimLocal = damp(this.aimLocal, clamp(targetAim, -1, 1), 9, dt);

        // lost sight → go hunt at last position for a while
        if (!this.canSee(player) && this.engagedT > 1.5) {
          this.state = 'patrol'; this.waitT = 0.5;
        }

        // ---------- fire control
        if (this.reload) {
          this.updateReload(dt, ws);
        } else if (this.mag <= 0) {
          this.reload = { t: 0, T: 2.5, s0: false, s1: false, s2: false, dropped: false };
        } else if (this.flinchT <= 0 && this.alertT > 0.4) {
          if (this.burstLeft > 0) {
            if (this.shotCd <= 0) this.fireShot(player);
          } else {
            this.burstGap -= dt;
            if (this.burstGap <= 0 && dist < 620 && this.canSee(player)) {
              this.burstLeft = 3 + (rand() * 3 | 0);
              this.burstGap = rand(0.75, 1.5);
            }
          }
        }
      }
    }

    if (this.reload) { this.updateReload(dt, ws); rot += 0.3; }
    if (this.flinchT > 0) { rot += this.flinchT * 0.8; offY += this.flinchT * 3; }

    // physics + gait
    const landed = this.world.moveEntity(this, dt);
    if (landed > 300) { this.crouchVel += landed / 1000; this.fx.landDust(this.x, this.y, false); }
    this.airTime = this.onGround ? 0 : this.airTime + dt;
    const sp = Math.abs(this.vx);
    this.gaitPhase += sp * dt / 23;
    this.speedNorm = sp / 450;
    this.lean = damp(this.lean, (this.vx / 450) * 0.14 * this.facing, 6, dt);
    this.crouchVel += -this.crouchSpring * 120 * dt;
    this.crouchVel *= Math.exp(-10 * dt);
    this.crouchSpring = Math.max(0, this.crouchSpring + this.crouchVel * dt * 34);

    ws.offX = 0; ws.offY = offY; ws.rot = rot;
  }

  updateReload(dt, ws) {
    const r = this.reload;
    if (!r) return;
    r.t += dt;
    const k = clamp(r.t / r.T, 0, 1);
    if (k < 0.3) {
      const e = easeInOutQuad(k / 0.3);
      ws.magOffY = e * 15; ws.magRot = e * 0.45; ws.magHand = k > 0.08;
      if (!r.s0 && k > 0.1) { r.s0 = true; this.audio.reload(0); }
    } else if (k < 0.45) {
      if (!r.dropped) { r.dropped = true; ws.magVisible = false; this.fx.magDrop(this.x + this.facing * 8, this.y - 62, this.facing); }
    } else if (k < 0.66) {
      const e = 1 - easeInOutQuad((k - 0.45) / 0.21);
      ws.magVisible = true; ws.magOffY = e * 15; ws.magRot = e * -0.3; ws.magHand = true;
      if (!r.s1 && k > 0.6) { r.s1 = true; this.audio.reload(1); this.mag = 30; }
    } else {
      ws.magOffY = 0; ws.magRot = 0; ws.magHand = false;
      const bk = clamp((k - 0.7) / 0.3, 0, 1);
      ws.boltBack = Math.sin(bk * Math.PI);
      if (!r.s2 && k > 0.78) { r.s2 = true; this.audio.reload(2); }
    }
    if (k >= 1) this.reload = null;
  }

  fireShot(player) {
    const ws = this.ws;
    this.mag--;
    this.burstLeft--;
    this.shotCd = 60 / 640;

    const pose = computePose(this);
    const wa = weaponAnchor(pose, this.wpn, ws, this.aimLocal);
    const mzl = toWorld(this, weaponPoint(wa, this.wpn.muzzle));
    const ejl = toWorld(this, weaponPoint(wa, this.wpn.eject));
    let ang = this.facing === 1 ? wa.ang : Math.atan2(Math.sin(wa.ang), -Math.cos(wa.ang));
    ang += randSpread(this.aimErr + 0.025);

    const range = 1300;
    const ex = mzl.x + Math.cos(ang) * range;
    const ey = mzl.y + Math.sin(ang) * range;
    const wHit = this.world.raycast(mzl.x, mzl.y, ex, ey);
    let bestT = wHit ? wHit.t : 1;
    let hitPlayer = false;
    if (player.deadT <= 0) {
      const t = segVsBox(mzl.x, mzl.y, ex - mzl.x, ey - mzl.y, player.x - 12, player.y - 130, 24, 130);
      if (t !== null && t < bestT) { bestT = t; hitPlayer = true; }
    }
    const hx = mzl.x + (ex - mzl.x) * bestT;
    const hy = mzl.y + (ey - mzl.y) * bestT;

    if (hitPlayer) {
      player.hurt(7 + rand(0, 5) | 0, Math.sign(ex - mzl.x));
    } else if (wHit) {
      this.fx.impactWall(hx, hy, wHit.nx, wHit.ny);
    }

    ws.flashT = 1;
    ws.flashIdx = (Math.random() * this.wpn.flashes.length) | 0;
    ws.flashScale = rand(0.8, 1.15);
    ws.recoilVel += this.wpn.recoilKick * 3;
    ws.recoilRotVel -= this.wpn.recoilRot * 24;
    ws.boltBack = 1;
    const distVol = clamp(1 - Math.abs(this.x - player.x) / 900, 0.3, 0.85);
    this.audio.shot('rifle', distVol);
    this.fx.muzzle(mzl.x, mzl.y, ang, 0.85);
    this.fx.tracer(mzl.x + Math.cos(ang) * 14, mzl.y + Math.sin(ang) * 14, hx, hy);
    this.fx.casing(ejl.x, ejl.y, this.facing, 4.6);
  }

  draw(g) {
    drawSoldier(g, this.parts, this.shadow, this, { wpn: this.wpn, ws: this.ws });
  }
}
