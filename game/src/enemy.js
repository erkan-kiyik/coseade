// AI soldier enemies: procedural low-poly model, perception, state machine
// (patrol -> alert -> combat -> search -> dead), steering movement with
// wall sliding, burst-fire combat and ragdoll-lite death.

import * as THREE from 'three';
import { resolveCharacterCollisions, segmentBlocked } from './world.js';

const M = {
  cloth: new THREE.MeshStandardMaterial({ color: 0x3a3d33, roughness: 0.9, metalness: 0.05 }),
  clothDark: new THREE.MeshStandardMaterial({ color: 0x24261f, roughness: 0.9 }),
  vest: new THREE.MeshStandardMaterial({ color: 0x2c2e26, roughness: 0.85 }),
  skin: new THREE.MeshStandardMaterial({ color: 0xc79a72, roughness: 0.8 }),
  helmet: new THREE.MeshStandardMaterial({ color: 0x22241f, roughness: 0.5, metalness: 0.3 }),
  boot: new THREE.MeshStandardMaterial({ color: 0x18181a, roughness: 0.9 }),
  gun: new THREE.MeshStandardMaterial({ color: 0x1b1c1e, roughness: 0.5, metalness: 0.7 }),
  visor: new THREE.MeshStandardMaterial({ color: 0x0a0f14, roughness: 0.2, metalness: 0.6 }),
  eyeGlow: new THREE.MeshStandardMaterial({ color: 0xff3020, emissive: 0xff2010, emissiveIntensity: 1.4 }),
};

function box(sx, sy, sz, mat) {
  return new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
}

function buildSoldier() {
  const root = new THREE.Group();

  const hips = new THREE.Group();
  hips.position.y = 0.92;
  root.add(hips);
  hips.add(box(0.34, 0.24, 0.2, M.clothDark));

  // torso (bobs slightly, holds arms + head + gun)
  const torso = new THREE.Group();
  torso.position.y = 0.24;
  hips.add(torso);
  const chest = box(0.38, 0.46, 0.24, M.vest);
  chest.position.y = 0.23;
  torso.add(chest);
  const chestPlate = box(0.3, 0.28, 0.06, M.clothDark);
  chestPlate.position.set(0, 0.28, -0.15);
  torso.add(chestPlate);

  // head
  const neck = new THREE.Group();
  neck.position.y = 0.48;
  torso.add(neck);
  const head = box(0.2, 0.22, 0.2, M.skin);
  head.position.y = 0.12;
  neck.add(head);
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.62), M.helmet);
  helmet.position.y = 0.2;
  neck.add(helmet);
  const visor = box(0.16, 0.05, 0.03, M.visor);
  visor.position.set(0, 0.13, -0.1);
  neck.add(visor);
  const eyeL = box(0.03, 0.02, 0.01, M.eyeGlow); eyeL.position.set(-0.045, 0.13, -0.115); neck.add(eyeL);
  const eyeR = box(0.03, 0.02, 0.01, M.eyeGlow); eyeR.position.set(0.045, 0.13, -0.115); neck.add(eyeR);

  // arms (upper arm pivots at shoulder, forearm pivots at elbow)
  function buildArm(side) {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.22, 0.4, 0);
    const upper = box(0.09, 0.26, 0.09, M.cloth);
    upper.position.y = -0.13;
    shoulder.add(upper);
    const elbow = new THREE.Group();
    elbow.position.y = -0.26;
    shoulder.add(elbow);
    const fore = box(0.075, 0.24, 0.075, M.cloth);
    fore.position.y = -0.12;
    elbow.add(fore);
    const hand = box(0.07, 0.08, 0.08, M.skin);
    hand.position.y = -0.24;
    elbow.add(hand);
    torso.add(shoulder);
    return { shoulder, elbow };
  }
  const armL = buildArm(-1);
  const armR = buildArm(1);

  // rifle held across the body, parented to right forearm
  const rifle = new THREE.Group();
  const body = box(0.05, 0.06, 0.55, M.gun);
  rifle.add(body);
  const stockM = box(0.045, 0.05, 0.16, M.cloth);
  stockM.position.z = 0.33;
  rifle.add(stockM);
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 8), M.gun);
  barrel.rotation.x = Math.PI / 2;
  barrel.position.z = -0.4;
  rifle.add(barrel);
  const magM = box(0.035, 0.16, 0.05, M.gun);
  magM.position.set(0, -0.11, -0.05);
  magM.rotation.x = -0.2;
  rifle.add(magM);
  rifle.position.set(0.02, -0.14, -0.15);
  rifle.rotation.y = Math.PI / 2 + 0.08;
  armR.elbow.add(rifle);
  armR.shoulder.rotation.x = -1.35;
  armR.elbow.rotation.x = 0.3;
  armL.shoulder.rotation.x = -1.1;
  armL.shoulder.rotation.z = 0.35;
  armL.elbow.rotation.x = 1.15;

  // legs
  function buildLeg(side) {
    const hip = new THREE.Group();
    hip.position.set(side * 0.11, -0.1, 0);
    const thigh = box(0.11, 0.32, 0.12, M.clothDark);
    thigh.position.y = -0.16;
    hip.add(thigh);
    const knee = new THREE.Group();
    knee.position.y = -0.32;
    hip.add(knee);
    const shin = box(0.095, 0.3, 0.1, M.clothDark);
    shin.position.y = -0.15;
    knee.add(shin);
    const boot = box(0.11, 0.1, 0.18, M.boot);
    boot.position.set(0, -0.32, 0.04);
    knee.add(boot);
    hips.add(hip);
    return { hip, knee };
  }
  const legL = buildLeg(-1);
  const legR = buildLeg(1);

  root.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });

  // muzzle world-local marker (rifle local -> forearm -> torso -> hips -> root chain; approximate offset)
  const muzzleLocal = new THREE.Vector3(0.02, 1.02, -0.85);

  return { root, torso, neck, head, armL, armR, legL, legR, hips, muzzleLocal, rifleFlashAnchor: rifle };
}

const STATE = { IDLE: 'idle', HUNT: 'hunt', ALERT: 'alert', COMBAT: 'combat', SEARCH: 'search', DEAD: 'dead' };

let idCounter = 0;

export class Enemy {
  constructor(scene, world, effects, audio, spawnPos, difficulty = 1) {
    this.id = idCounter++;
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.difficulty = difficulty;

    const built = buildSoldier();
    this.parts = built;
    this.model = built.root;
    this.model.position.copy(spawnPos);
    scene.add(this.model);

    this.pos = spawnPos.clone();
    this.yaw = Math.random() * Math.PI * 2;
    this.radius = 0.35;
    this.height = 1.8;
    this.speed = 2.3 + Math.random() * 0.6 + difficulty * 0.06;

    this.maxHp = 70 + difficulty * 14;
    this.hp = this.maxHp;
    this.state = STATE.HUNT; // spawned attackers advance on the player immediately
    this.stuckT = 0;
    this.detourT = 0;
    this.detourDir = 1;
    this.alertTimer = 0;
    this.fireCooldown = 0;
    this.burstLeft = 0;
    this.burstPause = 0;
    this.reposTimer = 1 + Math.random() * 2;
    this.strafeDir = Math.random() < 0.5 ? -1 : 1;
    this.lastKnownPlayerPos = null;
    this.walkPhase = Math.random() * 10;
    this.dead = false;
    this.deathT = 0;
    this.removeAfter = null;
    this.hitFlashT = 0;
    this.accuracy = 0.55 + Math.min(0.3, difficulty * 0.04);
    this.combatRange = 34;
    this.giveUpSearchT = 0;

    this.onPlayerHit = null; // (damage) => void
    this.onDeath = null;     // (enemy) => void
    this.onAlert = null;     // () => void  (alerts other enemies)
  }

  headWorldPos(out) {
    return this.parts.head.getWorldPosition(out);
  }

  chestWorldPos(out) {
    return this.parts.torso.getWorldPosition(out).add(new THREE.Vector3(0, 0.05, 0));
  }

  takeDamage(amount, isHeadshot, hitPoint, hitDir) {
    if (this.dead) return;
    this.hp -= amount;
    this.hitFlashT = 0.15;
    const normal = hitDir.clone().multiplyScalar(-1);
    this.effects.spawnImpact(hitPoint, normal, 'blood');
    if (this.hp <= 0) {
      this.die(hitDir);
    } else {
      this.state = STATE.COMBAT;
      this.reactStagger = 0.18;
    }
  }

  die(hitDir) {
    this.dead = true;
    this.state = STATE.DEAD;
    this.deathT = 0;
    this.fallAxis = new THREE.Vector3(-hitDir.z, 0, hitDir.x).normalize();
    this.fallForward = Math.random() < 0.5;
    this.audio.killConfirm();
    this.onDeath && this.onDeath(this);
    this.removeAfter = 6;
  }

  // ---------- perception ----------
  canSeePlayer(playerPos) {
    const eye = new THREE.Vector3();
    this.parts.head.getWorldPosition(eye);
    const dist = eye.distanceTo(playerPos);
    if (dist > this.combatRange + 6) return false;
    const dir = playerPos.clone().sub(eye).normalize();
    const fwd = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const angle = fwd.angleTo(new THREE.Vector3(dir.x, 0, dir.z));
    const fov = this.state === STATE.IDLE ? Math.PI * 0.35 : Math.PI * 0.8;
    if (angle > fov && this.state !== STATE.COMBAT) return false;
    const blocked = segmentBlocked(eye, playerPos, this.world.colliders, 0.2, 2.2);
    return !blocked;
  }

  alert(fromPos) {
    if (this.dead) return;
    if (this.state === STATE.IDLE || this.state === STATE.HUNT) {
      this.state = STATE.ALERT;
      this.lastKnownPlayerPos = fromPos.clone();
      this.alertTimer = 2.5;
    }
  }

  // ---------- update ----------
  update(dt, playerPos, playerCrouching, enemies) {
    if (this.dead) {
      this.updateDeath(dt);
      return;
    }

    const seesPlayer = this.canSeePlayer(playerPos);
    const distToPlayer = this.pos.distanceTo(playerPos);

    if (seesPlayer && distToPlayer < this.combatRange) {
      if (this.state !== STATE.COMBAT) this.onAlert && this.onAlert(this.pos);
      this.state = STATE.COMBAT;
      this.lastKnownPlayerPos = playerPos.clone();
      this.giveUpSearchT = 3.5;
    } else if (this.state === STATE.COMBAT) {
      // lost line of sight → search the last spot, then resume the hunt
      this.state = STATE.SEARCH;
      this.giveUpSearchT = 3.0;
      this.lastKnownPlayerPos = playerPos.clone();
    } else if (this.state === STATE.SEARCH) {
      this.giveUpSearchT -= dt;
      if (this.giveUpSearchT <= 0) this.state = STATE.HUNT;
    } else if (this.state === STATE.ALERT) {
      this.alertTimer -= dt;
      if (this.alertTimer <= 0) this.state = STATE.HUNT;
    }

    let targetPos = null;
    let wantFace = null;
    let moveSpeed = this.speed;

    if (this.state === STATE.COMBAT) {
      const toPlayer = playerPos.clone().sub(this.pos);
      toPlayer.y = 0;
      const dist = toPlayer.length();
      wantFace = Math.atan2(toPlayer.x, toPlayer.z);

      this.reposTimer -= dt;
      if (this.reposTimer <= 0) {
        this.strafeDir = Math.random() < 0.5 ? -1 : 1;
        this.reposTimer = 1.2 + Math.random() * 1.8;
      }
      if (dist > this.combatRange * 0.7) {
        targetPos = playerPos.clone();
        moveSpeed = this.speed * 1.15;
      } else if (dist < 8) {
        // back off a bit while strafing
        const back = this.pos.clone().add(toPlayer.clone().normalize().multiplyScalar(-3));
        const side = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).normalize().multiplyScalar(this.strafeDir * 3);
        targetPos = back.add(side);
      } else {
        const side = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).normalize().multiplyScalar(this.strafeDir * 4);
        targetPos = this.pos.clone().add(side);
      }

      // fire control
      this.fireCooldown -= dt;
      if (this.burstLeft > 0) {
        this.burstPause -= dt;
        if (this.burstPause <= 0 && this.fireCooldown <= 0) {
          this.shootAt(playerPos, playerCrouching);
          this.burstLeft--;
          this.fireCooldown = 0.11 + Math.random() * 0.04;
        }
      } else if (this.fireCooldown <= 0) {
        this.burstLeft = 2 + Math.floor(Math.random() * 3);
        this.burstPause = 0;
        this.fireCooldown = 0.9 + Math.random() * 1.1 - this.difficulty * 0.05;
      }
    } else if (this.state === STATE.SEARCH && this.lastKnownPlayerPos) {
      targetPos = this.lastKnownPlayerPos;
      wantFace = Math.atan2(targetPos.x - this.pos.x, targetPos.z - this.pos.z);
      moveSpeed = this.speed;
      if (this.pos.distanceTo(targetPos) < 1.5) this.state = STATE.HUNT;
    } else {
      // HUNT / ALERT: march straight onto the player so they always close in
      targetPos = (this.state === STATE.ALERT && this.lastKnownPlayerPos) ? this.lastKnownPlayerPos : playerPos;
      moveSpeed = this.speed * (this.state === STATE.ALERT ? 0.95 : 1);
      wantFace = Math.atan2(targetPos.x - this.pos.x, targetPos.z - this.pos.z);
    }

    // movement: separation from squadmates + stuck-detour steering around cover
    let moved = false;
    if (targetPos) {
      const dir = targetPos.clone().sub(this.pos);
      dir.y = 0;
      const d = dir.length();
      if (d > 0.4) {
        dir.normalize();
        if (this.detourT > 0) {
          this.detourT -= dt;
          const side = new THREE.Vector3(-dir.z, 0, dir.x).multiplyScalar(this.detourDir);
          dir.addScaledVector(side, 1.2).normalize();
        }
        for (const other of enemies) {
          if (other === this || other.dead) continue;
          const away = this.pos.clone().sub(other.pos);
          away.y = 0;
          const od = away.length();
          if (od < 1.4 && od > 0.01) dir.add(away.normalize().multiplyScalar((1.4 - od) * 1.5));
        }
        dir.normalize();
        const px = this.pos.x, pz = this.pos.z;
        this.pos.addScaledVector(dir, moveSpeed * dt);
        resolveCharacterCollisions(this.pos, this.radius, this.height, this.world.colliders);
        // if a wall ate our movement, pick a side and slip around it
        const progressed = Math.hypot(this.pos.x - px, this.pos.z - pz);
        if (progressed < moveSpeed * dt * 0.35) {
          this.stuckT += dt;
          if (this.stuckT > 0.5 && this.detourT <= 0) {
            this.detourT = 0.6 + Math.random() * 0.4;
            this.detourDir = Math.random() < 0.5 ? -1 : 1;
          }
        } else {
          this.stuckT = 0;
        }
        if (wantFace === null) wantFace = Math.atan2(dir.x, dir.z);
        moved = true;
      } else {
        resolveCharacterCollisions(this.pos, this.radius, this.height, this.world.colliders);
      }
    } else {
      resolveCharacterCollisions(this.pos, this.radius, this.height, this.world.colliders);
    }
    this.pos.y = 0;

    if (wantFace !== null) {
      let diff = wantFace - this.yaw;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.yaw += diff * Math.min(1, dt * 8);
    }

    this.model.position.copy(this.pos);
    this.model.rotation.y = this.yaw;

    // walk animation
    if (moved) this.walkPhase += dt * moveSpeed * 3.2;
    const swing = Math.sin(this.walkPhase) * (moved ? 0.55 : 0);
    this.parts.legL.hip.rotation.x = swing;
    this.parts.legR.hip.rotation.x = -swing;
    this.parts.legL.knee.rotation.x = Math.max(0, -swing * 0.9);
    this.parts.legR.knee.rotation.x = Math.max(0, swing * 0.9);
    this.parts.hips.position.y = 0.92 + Math.abs(Math.cos(this.walkPhase)) * (moved ? 0.02 : 0);

    // hit reaction flash (emissive-ish via scale pulse substitute: skip material swap for perf)
    if (this.hitFlashT > 0) this.hitFlashT -= dt;
  }

  shootAt(playerPos, playerCrouching) {
    const muzzle = new THREE.Vector3();
    this.parts.rifleFlashAnchor.getWorldPosition(muzzle);
    const targetPoint = playerPos.clone().add(new THREE.Vector3(0, playerCrouching ? 0.1 : 0.35, 0));
    const dir = targetPoint.clone().sub(muzzle).normalize();
    const dist = muzzle.distanceTo(targetPoint);
    const missChance = 1 - Math.max(0.08, this.accuracy - dist * 0.004);
    const spread = 0.02 + missChance * 0.09;
    dir.x += (Math.random() - 0.5) * spread;
    dir.y += (Math.random() - 0.5) * spread * 0.6;
    dir.z += (Math.random() - 0.5) * spread;
    dir.normalize();

    this.audio.gunshot('enemy', muzzle);
    this.effects.spawnTracer(muzzle, dir, 40);

    // hit check via short raycast against player capsule (approximate as a point + radius)
    const toPlayer = playerPos.clone().sub(muzzle);
    const alongPlayer = toPlayer.dot(dir);
    if (alongPlayer > 0) {
      const closest = muzzle.clone().addScaledVector(dir, alongPlayer);
      const missDist = closest.distanceTo(playerPos.clone().add(new THREE.Vector3(0, 0.9, 0)));
      if (missDist < 0.5 && alongPlayer < this.combatRange + 10) {
        const dmg = 6 + Math.random() * 6 + this.difficulty * 0.8;
        this.onPlayerHit && this.onPlayerHit(dmg, muzzle);
        return;
      }
    }
    // miss: spark somewhere near player for feedback
    if (Math.random() < 0.4) {
      const missPoint = playerPos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 1.5, (Math.random() - 0.5) * 2));
      this.effects.spawnImpact(missPoint, new THREE.Vector3(0, 1, 0), 'dust');
    }
  }

  updateDeath(dt) {
    this.deathT += dt;
    const t = Math.min(1, this.deathT / 0.5);
    const fallRot = t * (Math.PI / 2) * (this.fallForward ? 1 : -1);
    this.model.rotation.x = this.fallForward ? fallRot : 0;
    this.model.rotation.z = this.fallForward ? 0 : fallRot;
    this.model.position.y = this.pos.y - t * 0.05;
    if (this.removeAfter !== null) {
      this.removeAfter -= dt;
      if (this.removeAfter <= 1) {
        this.model.traverse((m) => { if (m.isMesh) m.material.transparent = true; });
        const op = Math.max(0, this.removeAfter);
        this.model.traverse((m) => { if (m.isMesh) m.material.opacity = op; });
      }
    }
  }

  get expired() {
    return this.dead && this.removeAfter !== null && this.removeAfter <= 0;
  }

  destroy() {
    this.scene.remove(this.model);
  }
}
