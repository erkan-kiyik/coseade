// AI soldier enemies. The body is the external rigged model (phoenix.fbx)
// cloned per spawn and driven procedurally (no anim clips shipped); if the
// model isn't available we fall back to a procedural box-soldier so the game
// always runs. Perception + state machine (hunt -> alert -> combat -> search
// -> dead), steering with wall-detour, burst-fire combat, three enemy types.

import * as THREE from 'three';
import { clone as skeletonClone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { resolveCharacterCollisions, segmentBlocked } from './world.js';
import { ENEMY_TEXTURES } from './modelLoader.js';

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

// enemy archetypes: multipliers over the wave baseline
export const ENEMY_TYPES = {
  assault: { label: 'ASKER',  hp: 1.0, speed: 1.0,  dmg: 1.0, scale: 1.0,  acc: 0.0,  tex: 'assault', tint: 0x4b533b },
  rusher:  { label: 'AKINCI', hp: 0.6, speed: 1.55, dmg: 0.8, scale: 0.93, acc: -0.06, tex: 'rusher',  tint: 0x6e3a30 },
  heavy:   { label: 'AĞIR',   hp: 2.1, speed: 0.72, dmg: 1.45, scale: 1.13, acc: 0.04, tex: 'heavy',   tint: 0x5c5340 },
};

// weighted type pick — tougher/faster types appear more as waves climb
export function pickEnemyType(wave) {
  const r = Math.random();
  const heavyChance = Math.min(0.28, 0.05 + wave * 0.03);
  const rusherChance = Math.min(0.4, 0.12 + wave * 0.035);
  if (r < heavyChance) return 'heavy';
  if (r < heavyChance + rusherChance) return 'rusher';
  return 'assault';
}

function box(sx, sy, sz, mat) {
  return new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
}

// ---------------- procedural fallback body ----------------
function buildSoldier() {
  const root = new THREE.Group();
  const hips = new THREE.Group();
  hips.position.y = 0.92;
  root.add(hips);
  hips.add(box(0.34, 0.24, 0.2, M.clothDark));

  const torso = new THREE.Group();
  torso.position.y = 0.24;
  hips.add(torso);
  const chest = box(0.38, 0.46, 0.24, M.vest);
  chest.position.y = 0.23;
  torso.add(chest);
  const chestPlate = box(0.3, 0.28, 0.06, M.clothDark);
  chestPlate.position.set(0, 0.28, -0.15);
  torso.add(chestPlate);

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

  const rifle = new THREE.Group();
  rifle.add(box(0.05, 0.06, 0.55, M.gun));
  const stockM = box(0.045, 0.05, 0.16, M.cloth); stockM.position.z = 0.33; rifle.add(stockM);
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 8), M.gun);
  barrel.rotation.x = Math.PI / 2; barrel.position.z = -0.4; rifle.add(barrel);
  const magM = box(0.035, 0.16, 0.05, M.gun); magM.position.set(0, -0.11, -0.05); magM.rotation.x = -0.2; rifle.add(magM);
  rifle.position.set(0.02, -0.14, -0.15);
  rifle.rotation.y = Math.PI / 2 + 0.08;
  armR.elbow.add(rifle);
  armR.shoulder.rotation.x = -1.35; armR.elbow.rotation.x = 0.3;
  armL.shoulder.rotation.x = -1.1; armL.shoulder.rotation.z = 0.35; armL.elbow.rotation.x = 1.15;

  function buildLeg(side) {
    const hip = new THREE.Group();
    hip.position.set(side * 0.11, -0.1, 0);
    const thigh = box(0.11, 0.32, 0.12, M.clothDark); thigh.position.y = -0.16; hip.add(thigh);
    const knee = new THREE.Group(); knee.position.y = -0.32; hip.add(knee);
    const shin = box(0.095, 0.3, 0.1, M.clothDark); shin.position.y = -0.15; knee.add(shin);
    const boot = box(0.11, 0.1, 0.18, M.boot); boot.position.set(0, -0.32, 0.04); knee.add(boot);
    hips.add(hip);
    return { hip, knee };
  }
  const legL = buildLeg(-1);
  const legR = buildLeg(1);

  root.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; } });
  return { root, torso, neck, head, armL, armR, legL, legR, hips, rifleFlashAnchor: rifle };
}

// axis each limb group swings about for the walk cycle (tweak if a joint
// bends the wrong way on the imported rig)
const WALK_AXIS = { thigh: 'x', calf: 'x', arm: 'x' };

const STATE = { IDLE: 'idle', HUNT: 'hunt', ALERT: 'alert', COMBAT: 'combat', SEARCH: 'search', DEAD: 'dead' };

let idCounter = 0;

export class Enemy {
  constructor(scene, world, effects, audio, spawnPos, difficulty = 1, opts = {}) {
    this.id = idCounter++;
    this.scene = scene;
    this.world = world;
    this.effects = effects;
    this.audio = audio;
    this.difficulty = difficulty;

    this.typeKey = opts.type || 'assault';
    const T = ENEMY_TYPES[this.typeKey] || ENEMY_TYPES.assault;
    this.typeCfg = T;

    if (opts.template) {
      this._buildFromModel(opts.template, T);
      this.useModel = true;
    } else {
      const built = buildSoldier();
      this.parts = built;
      this.model = built.root;
      this.headRef = built.head;
      this.chestRef = built.torso;
      this.rifleFlashAnchor = built.rifleFlashAnchor;
      this.useModel = false;
    }
    this.model.position.copy(spawnPos);
    scene.add(this.model);

    this.pos = spawnPos.clone();
    this.yaw = Math.random() * Math.PI * 2;
    this.radius = 0.35;
    this.height = 1.8;
    this.speed = (2.3 + Math.random() * 0.6 + difficulty * 0.06) * T.speed;

    this.maxHp = (70 + difficulty * 14) * T.hp;
    this.hp = this.maxHp;
    this.dmgMult = T.dmg;
    this.state = STATE.HUNT;
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
    this.accuracy = 0.55 + Math.min(0.3, difficulty * 0.04) + T.acc;
    this.combatRange = 34;
    this.giveUpSearchT = 0;

    this.onPlayerHit = null;
    this.onDeath = null;
    this.onAlert = null;
  }

  // build a cloned, re-materialised phoenix and wire up bones for animation
  _buildFromModel(template, T) {
    const body = skeletonClone(template.root);
    const holder = new THREE.Group();     // steered by yaw
    const inner = new THREE.Group();       // model-forward offset + type scale
    inner.rotation.y = template.forwardOffset;
    inner.scale.setScalar(T.scale);
    inner.add(body);
    holder.add(inner);
    this.model = holder;
    this.inner = inner;

    // camo material (mesh ships no textures)
    const tex = (ENEMY_TEXTURES[T.tex] || ENEMY_TEXTURES.assault)();
    const mat = new THREE.MeshStandardMaterial({ map: tex, color: 0xffffff, roughness: 0.86, metalness: 0.08 });
    body.traverse((m) => {
      if (m.isMesh || m.isSkinnedMesh) {
        m.material = mat;
        m.castShadow = true;
        m.receiveShadow = true;
        m.frustumCulled = false;
      }
    });

    // collect bones by ValveBiped name
    const b = {};
    let weaponBone = null, rHand = null, head = null, chest = null, spine = null, neck = null;
    body.traverse((o) => {
      if (!o.isBone) return;
      const n = o.name.toLowerCase();
      if (n.includes('l_thigh')) b.lThigh = o;
      else if (n.includes('r_thigh')) b.rThigh = o;
      else if (n.includes('l_calf')) b.lCalf = o;
      else if (n.includes('r_calf')) b.rCalf = o;
      else if (n.includes('l_upperarm')) b.lArm = o;
      else if (n.includes('r_upperarm')) b.rArm = o;
      if (n.includes('head')) head = o;
      else if (n.includes('spine2') || n.includes('spine1')) { chest = chest || o; spine = o; }
      else if (n.includes('spine')) spine = spine || o;
      if (n.includes('neck')) neck = o;
      if (n.includes('weapon_bone') && !n.includes('clip') && !n.includes('hand')) weaponBone = o;
      if (n.includes('r_hand')) rHand = o;
    });
    this.bones = b;
    this.rest = {};
    for (const k of Object.keys(b)) this.rest[k] = b[k].rotation.clone();
    this.spineBone = spine || chest;
    this.spineRest = this.spineBone ? this.spineBone.rotation.clone() : null;

    // hitbox references (fall back to holder-relative points if a bone is missing)
    this.headRef = head || chest || holder;
    this.chestRef = chest || spine || holder;

    // give the enemy a rifle in-hand so muzzle flashes come from the right place
    const anchor = weaponBone || rHand;
    const rifle = new THREE.Group();
    const g = new THREE.MeshStandardMaterial({ color: 0x15161a, roughness: 0.5, metalness: 0.7 });
    const bodyM = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.09, 0.62), g);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.34, 8), g);
    barrel.rotation.x = Math.PI / 2; barrel.position.z = -0.44;
    const mag = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.06), g); mag.position.set(0, -0.13, -0.04);
    rifle.add(bodyM, barrel, mag);
    rifle.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.frustumCulled = false; } });
    if (anchor) {
      // scale the rifle back up out of the (small) bone space and orient it
      const inv = 1 / (template.root.scale.x * T.scale || 1);
      rifle.scale.setScalar(inv);
      anchor.add(rifle);
      this.rifleFlashAnchor = rifle;
    } else {
      rifle.position.set(0.25, 1.3, -0.3);
      holder.add(rifle);
      this.rifleFlashAnchor = rifle;
    }
  }

  headWorldPos(out) { return this.headRef.getWorldPosition(out); }
  chestWorldPos(out) { return this.chestRef.getWorldPosition(out).add(new THREE.Vector3(0, 0.05, 0)); }

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

  canSeePlayer(playerPos) {
    const eye = new THREE.Vector3();
    this.headRef.getWorldPosition(eye);
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
        const back = this.pos.clone().add(toPlayer.clone().normalize().multiplyScalar(-3));
        const side = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).normalize().multiplyScalar(this.strafeDir * 3);
        targetPos = back.add(side);
      } else {
        const side = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).normalize().multiplyScalar(this.strafeDir * 4);
        targetPos = this.pos.clone().add(side);
      }

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
      targetPos = (this.state === STATE.ALERT && this.lastKnownPlayerPos) ? this.lastKnownPlayerPos : playerPos;
      moveSpeed = this.speed * (this.state === STATE.ALERT ? 0.95 : 1);
      wantFace = Math.atan2(targetPos.x - this.pos.x, targetPos.z - this.pos.z);
    }

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

    if (moved) this.walkPhase += dt * moveSpeed * 3.2;
    if (this.useModel) this._animateModel(moved);
    else this._animateBox(moved);

    if (this.hitFlashT > 0) this.hitFlashT -= dt;
  }

  _animateBox(moved) {
    const swing = Math.sin(this.walkPhase) * (moved ? 0.55 : 0);
    this.parts.legL.hip.rotation.x = swing;
    this.parts.legR.hip.rotation.x = -swing;
    this.parts.legL.knee.rotation.x = Math.max(0, -swing * 0.9);
    this.parts.legR.knee.rotation.x = Math.max(0, swing * 0.9);
    this.parts.hips.position.y = 0.92 + Math.abs(Math.cos(this.walkPhase)) * (moved ? 0.02 : 0);
  }

  _animateModel(moved) {
    const b = this.bones, r = this.rest;
    const amp = moved ? 1 : 0;
    const sw = Math.sin(this.walkPhase) * 0.5 * amp;
    const swBack = Math.sin(this.walkPhase + Math.PI) * 0.5 * amp;
    const setAxis = (bone, rest, axis, v) => { if (bone) bone.rotation[axis] = rest[axis] + v; };
    setAxis(b.lThigh, r.lThigh, WALK_AXIS.thigh, sw);
    setAxis(b.rThigh, r.rThigh, WALK_AXIS.thigh, swBack);
    setAxis(b.lCalf, r.lCalf, WALK_AXIS.calf, Math.max(0, -sw) * 0.9);
    setAxis(b.rCalf, r.rCalf, WALK_AXIS.calf, Math.max(0, -swBack) * 0.9);
    setAxis(b.lArm, r.lArm, WALK_AXIS.arm, swBack * 0.6);
    setAxis(b.rArm, r.rArm, WALK_AXIS.arm, sw * 0.6);
    // subtle body bob so movement reads even if a joint axis is off
    if (this.inner) this.inner.position.y = Math.abs(Math.cos(this.walkPhase)) * 0.05 * amp;
  }

  shootAt(playerPos, playerCrouching) {
    const muzzle = new THREE.Vector3();
    this.rifleFlashAnchor.getWorldPosition(muzzle);
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

    const toPlayer = playerPos.clone().sub(muzzle);
    const alongPlayer = toPlayer.dot(dir);
    if (alongPlayer > 0) {
      const closest = muzzle.clone().addScaledVector(dir, alongPlayer);
      const missDist = closest.distanceTo(playerPos.clone().add(new THREE.Vector3(0, 0.9, 0)));
      if (missDist < 0.5 && alongPlayer < this.combatRange + 10) {
        const dmg = (6 + Math.random() * 6 + this.difficulty * 0.8) * this.dmgMult;
        this.onPlayerHit && this.onPlayerHit(dmg, muzzle);
        return;
      }
    }
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
        const op = Math.max(0, this.removeAfter);
        this.model.traverse((m) => {
          if (m.isMesh || m.isSkinnedMesh) { m.material.transparent = true; m.material.opacity = op; }
        });
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
