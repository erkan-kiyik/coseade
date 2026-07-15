// Weapon system: 4 weapons with procedurally-built viewmodels,
// recoil, spread, ADS, reload animations, muzzle flash and fire modes.

import * as THREE from 'three';

// shared materials
const M = {
  gunmetal: new THREE.MeshStandardMaterial({ color: 0x23262a, roughness: 0.38, metalness: 0.85 }),
  darkSteel: new THREE.MeshStandardMaterial({ color: 0x17191c, roughness: 0.45, metalness: 0.9 }),
  polymer: new THREE.MeshStandardMaterial({ color: 0x2c2f33, roughness: 0.75, metalness: 0.15 }),
  grip: new THREE.MeshStandardMaterial({ color: 0x1e2023, roughness: 0.9, metalness: 0.05 }),
  tan: new THREE.MeshStandardMaterial({ color: 0x8a7a5c, roughness: 0.7, metalness: 0.1 }),
  accent: new THREE.MeshStandardMaterial({ color: 0xb84a2e, roughness: 0.5, metalness: 0.3 }),
  sightGlow: new THREE.MeshStandardMaterial({ color: 0x30ff70, emissive: 0x30ff70, emissiveIntensity: 2.2 }),
  scopeGlass: new THREE.MeshStandardMaterial({ color: 0x0a2030, roughness: 0.1, metalness: 0.9 }),
  brass: new THREE.MeshStandardMaterial({ color: 0xb8963e, roughness: 0.35, metalness: 0.95 }),
  glove: new THREE.MeshStandardMaterial({ color: 0x26282a, roughness: 0.85, metalness: 0.05 }),
  gloveKnuckle: new THREE.MeshStandardMaterial({ color: 0x333638, roughness: 0.7, metalness: 0.1 }),
  sleeve: new THREE.MeshStandardMaterial({ color: 0x39402e, roughness: 0.92, metalness: 0.03 }),
  skin: new THREE.MeshStandardMaterial({ color: 0xba8b64, roughness: 0.75 }),
};

function box(sx, sy, sz, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  return m;
}
function cyl(r1, r2, h, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, seg = 12) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  return m;
}

// ---------------- gloved hands (shared) ----------------
// A gripping hand: camouflage sleeve receding toward the camera (+z), a gloved
// palm and curled fingers wrapping forward (−z) around whatever it's placed on.
function buildHand() {
  const grp = new THREE.Group();
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.07, 0.36, 10), M.sleeve);
  sleeve.rotation.x = Math.PI / 2;
  sleeve.position.z = 0.2;
  grp.add(sleeve);
  const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.058, 0.05, 10), M.glove);
  cuff.rotation.x = Math.PI / 2;
  cuff.position.z = 0.04;
  grp.add(cuff);
  const palm = box(0.1, 0.062, 0.12, M.glove, 0, 0, -0.05);
  grp.add(palm);
  const knuckles = box(0.1, 0.03, 0.03, M.gloveKnuckle, 0, 0.03, -0.11);
  grp.add(knuckles);
  // four curled fingers wrapping down and forward
  for (let i = 0; i < 4; i++) {
    const seg = box(0.02, 0.055, 0.05, M.glove, -0.033 + i * 0.022, -0.028, -0.115, -0.95, 0, 0);
    grp.add(seg);
    const tip = box(0.02, 0.038, 0.028, M.glove, -0.033 + i * 0.022, -0.062, -0.09, -1.7, 0, 0);
    grp.add(tip);
  }
  const thumb = box(0.03, 0.052, 0.045, M.glove, 0.056, 0.0, -0.055, 0.2, 0, 0.7);
  grp.add(thumb);
  grp.traverse((m) => { if (m.isMesh) { m.castShadow = false; m.frustumCulled = false; } });
  return grp;
}

// place two hands onto a viewmodel; returns refs for animation.
// anchors/rots are [x,y,z]; leftParent lets the shotgun's support hand ride the pump.
function addHands(g, cfg) {
  const left = buildHand();
  left.position.set(...cfg.left);
  if (cfg.leftRot) left.rotation.set(...cfg.leftRot);
  (cfg.leftParent || g).add(left);
  const right = buildHand();
  right.position.set(...cfg.right);
  if (cfg.rightRot) right.rotation.set(...cfg.rightRot);
  g.add(right);
  return { left, right };
}

// ---------------- viewmodel builders (z- is forward / muzzle direction) ----------------

function buildRifle() {
  const g = new THREE.Group();
  const mag = new THREE.Group();

  g.add(box(0.055, 0.075, 0.46, M.gunmetal, 0, 0.015, -0.02));               // upper receiver
  g.add(box(0.05, 0.06, 0.3, M.polymer, 0, -0.04, 0.02));                    // lower
  g.add(box(0.06, 0.055, 0.34, M.polymer, 0, 0.02, -0.42));                  // handguard
  // handguard rails
  for (let i = 0; i < 6; i++) g.add(box(0.062, 0.008, 0.03, M.darkSteel, 0, 0.052, -0.3 - i * 0.05));
  g.add(cyl(0.014, 0.014, 0.34, M.darkSteel, 0, 0.015, -0.7, Math.PI / 2)); // barrel
  g.add(cyl(0.022, 0.022, 0.07, M.darkSteel, 0, 0.015, -0.85, Math.PI / 2)); // muzzle brake
  g.add(box(0.045, 0.05, 0.2, M.polymer, 0, 0.0, 0.24));                     // stock body
  g.add(box(0.05, 0.09, 0.05, M.grip, 0, -0.03, 0.32));                      // stock butt
  g.add(box(0.035, 0.09, 0.045, M.grip, 0, -0.095, 0.08, 0.25));             // pistol grip
  // front sight + rear sight (used for ADS alignment)
  g.add(box(0.008, 0.035, 0.008, M.darkSteel, 0, 0.075, -0.55));
  const frontDot = new THREE.Mesh(new THREE.SphereGeometry(0.005, 6, 6), M.sightGlow);
  frontDot.position.set(0, 0.095, -0.55);
  g.add(frontDot);
  g.add(box(0.016, 0.03, 0.012, M.darkSteel, -0.014, 0.075, 0.12));
  g.add(box(0.016, 0.03, 0.012, M.darkSteel, 0.014, 0.075, 0.12));
  // magazine (curved look via two segments), detachable for reload anim
  mag.add(box(0.042, 0.13, 0.075, M.polymer, 0, -0.065, 0, -0.12));
  mag.add(box(0.042, 0.08, 0.07, M.polymer, 0, -0.155, 0.018, -0.3));
  mag.position.set(0, -0.07, -0.06);
  g.add(mag);
  // charging handle + ejection port
  g.add(box(0.02, 0.015, 0.05, M.darkSteel, 0.033, 0.04, 0.1));
  g.add(box(0.002, 0.03, 0.08, M.brass, 0.029, 0.015, -0.05));
  const hands = addHands(g, {
    right: [0.0, -0.085, 0.11], rightRot: [0.42, 0, 0],
    left: [-0.01, -0.055, -0.34], leftRot: [0.22, 0, -0.15],
  });
  return { group: g, mag, muzzle: new THREE.Vector3(0, 0.015, -0.9), hands };
}

function buildPistol() {
  const g = new THREE.Group();
  const mag = new THREE.Group();
  g.add(box(0.042, 0.055, 0.24, M.gunmetal, 0, 0.02, -0.05));       // slide
  g.add(box(0.038, 0.05, 0.2, M.polymer, 0, -0.02, -0.03));         // frame
  g.add(cyl(0.011, 0.011, 0.06, M.darkSteel, 0, 0.025, -0.19, Math.PI / 2)); // barrel tip
  g.add(box(0.036, 0.1, 0.055, M.grip, 0, -0.085, 0.055, 0.18));    // grip
  g.add(box(0.03, 0.03, 0.03, M.darkSteel, 0, -0.035, -0.11));      // trigger guard front
  g.add(box(0.008, 0.02, 0.008, M.darkSteel, 0, 0.055, -0.16));     // front sight
  const dot = new THREE.Mesh(new THREE.SphereGeometry(0.004, 6, 6), M.sightGlow);
  dot.position.set(0, 0.068, -0.16);
  g.add(dot);
  g.add(box(0.014, 0.018, 0.01, M.darkSteel, -0.011, 0.055, 0.06));
  g.add(box(0.014, 0.018, 0.01, M.darkSteel, 0.011, 0.055, 0.06));
  // slide serrations
  for (let i = 0; i < 5; i++) g.add(box(0.044, 0.04, 0.006, M.darkSteel, 0, 0.02, 0.045 + i * 0.012));
  mag.add(box(0.028, 0.1, 0.045, M.darkSteel, 0, -0.04, 0));
  mag.position.set(0, -0.09, 0.055);
  g.add(mag);
  const hands = addHands(g, {
    right: [0.0, -0.07, 0.02], rightRot: [0.55, 0, 0],
    left: [-0.05, -0.075, 0.0], leftRot: [0.5, 0.5, 0.1],
  });
  return { group: g, mag, muzzle: new THREE.Vector3(0, 0.025, -0.23), hands };
}

function buildShotgun() {
  const g = new THREE.Group();
  const mag = new THREE.Group(); // pump acts as "mag" anim part
  g.add(box(0.055, 0.07, 0.36, M.gunmetal, 0, 0.01, 0.05));                    // receiver
  g.add(cyl(0.017, 0.017, 0.55, M.darkSteel, 0, 0.035, -0.4, Math.PI / 2));    // barrel
  g.add(cyl(0.019, 0.019, 0.48, M.gunmetal, 0, -0.015, -0.36, Math.PI / 2));   // mag tube
  mag.add(cyl(0.03, 0.03, 0.16, M.grip, 0, 0, 0, Math.PI / 2, 0, 0, 8));       // pump
  mag.position.set(0, -0.015, -0.38);
  g.add(mag);
  g.add(box(0.05, 0.055, 0.22, M.tan, 0, -0.005, 0.32));                       // stock
  g.add(box(0.052, 0.1, 0.05, M.tan, 0, -0.045, 0.42));
  g.add(box(0.035, 0.085, 0.045, M.grip, 0, -0.085, 0.17, 0.3));               // grip
  g.add(box(0.008, 0.025, 0.008, M.darkSteel, 0, 0.062, -0.62));               // bead sight
  const bead = new THREE.Mesh(new THREE.SphereGeometry(0.006, 6, 6), M.sightGlow);
  bead.position.set(0, 0.078, -0.62);
  g.add(bead);
  // shell holder on receiver side
  for (let i = 0; i < 4; i++) g.add(cyl(0.011, 0.011, 0.05, M.accent, 0.035, 0.01, 0.14 - i * 0.045, Math.PI / 2, 0, 0, 8));
  // right hand on the grip; support hand rides the pump so it racks with it
  const hands = addHands(g, {
    right: [0.0, -0.075, 0.16], rightRot: [0.45, 0, 0],
    left: [0.0, -0.055, 0.02], leftRot: [0.25, 0, 0], leftParent: mag,
  });
  return { group: g, mag, muzzle: new THREE.Vector3(0, 0.035, -0.68), hands };
}

function buildSniper() {
  const g = new THREE.Group();
  const mag = new THREE.Group();
  g.add(box(0.05, 0.07, 0.44, M.tan, 0, 0, 0.06));                              // body/stock
  g.add(box(0.05, 0.1, 0.06, M.tan, 0, -0.03, 0.34));                           // butt
  g.add(box(0.052, 0.05, 0.34, M.tan, 0, -0.005, -0.3));                        // fore-end
  g.add(cyl(0.016, 0.016, 0.6, M.darkSteel, 0, 0.02, -0.68, Math.PI / 2));      // barrel
  g.add(cyl(0.028, 0.028, 0.1, M.darkSteel, 0, 0.02, -0.95, Math.PI / 2));      // suppressor tip
  // scope
  g.add(cyl(0.032, 0.032, 0.22, M.gunmetal, 0, 0.085, -0.05, Math.PI / 2));
  g.add(cyl(0.04, 0.032, 0.05, M.gunmetal, 0, 0.085, -0.17, Math.PI / 2));
  g.add(cyl(0.036, 0.03, 0.04, M.gunmetal, 0, 0.085, 0.07, Math.PI / 2));
  const lens = new THREE.Mesh(new THREE.CircleGeometry(0.036, 16), M.scopeGlass);
  lens.position.set(0, 0.085, -0.195);
  lens.rotation.y = Math.PI;
  g.add(lens);
  g.add(box(0.012, 0.03, 0.03, M.darkSteel, 0, 0.05, -0.05));                   // scope mount
  g.add(box(0.012, 0.03, 0.03, M.darkSteel, 0, 0.05, 0.04));
  // bolt handle
  g.add(cyl(0.008, 0.008, 0.06, M.darkSteel, 0.045, 0.02, 0.12, 0, 0, Math.PI / 2, 8));
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.014, 8, 8), M.darkSteel);
  knob.position.set(0.075, 0.02, 0.12);
  g.add(knob);
  g.add(box(0.035, 0.085, 0.045, M.grip, 0, -0.08, 0.22, 0.28));                // grip
  // bipod (folded)
  g.add(cyl(0.006, 0.006, 0.14, M.darkSteel, -0.02, -0.02, -0.44, 0.5, 0, 0.3, 6));
  g.add(cyl(0.006, 0.006, 0.14, M.darkSteel, 0.02, -0.02, -0.44, 0.5, 0, -0.3, 6));
  mag.add(box(0.038, 0.09, 0.08, M.darkSteel, 0, -0.045, 0));
  mag.position.set(0, -0.04, -0.02);
  g.add(mag);
  const hands = addHands(g, {
    right: [0.0, -0.07, 0.2], rightRot: [0.4, 0, 0],
    left: [0.0, -0.04, -0.28], leftRot: [0.2, 0, 0],
  });
  return { group: g, mag, muzzle: new THREE.Vector3(0, 0.02, -1.0), hands };
}

// ---------------- weapon definitions ----------------

export const WEAPON_DEFS = [
  {
    id: 'rifle', name: 'M4 KARABİNA', mode: 'auto', modeLabel: 'TAM OTOMATİK',
    damage: 26, headshotMult: 2.1, rpm: 720, magSize: 30, reserveStart: 150, maxReserve: 270,
    reloadTime: 2.1, spreadHip: 0.028, spreadAds: 0.004, spreadMove: 0.03,
    recoilPitch: 0.011, recoilYaw: 0.004, kickback: 0.055, adsFovMult: 0.82, adsTime: 0.16,
    pellets: 1, range: 140, sound: 'rifle', build: buildRifle,
    hip: [0.26, -0.24, -0.5], ads: [0, -0.148, -0.32], scope: false,
  },
  {
    id: 'shotgun', name: 'SPAS POMPALI', mode: 'pump', modeLabel: 'POMPALI',
    damage: 13, headshotMult: 1.6, rpm: 68, magSize: 6, reserveStart: 30, maxReserve: 48,
    reloadTime: 2.6, spreadHip: 0.055, spreadAds: 0.038, spreadMove: 0.02,
    recoilPitch: 0.035, recoilYaw: 0.008, kickback: 0.13, adsFovMult: 0.88, adsTime: 0.19,
    pellets: 8, range: 40, sound: 'shotgun', build: buildShotgun,
    hip: [0.26, -0.25, -0.52], ads: [0, -0.175, -0.36], scope: false,
  },
  {
    id: 'sniper', name: 'AX-50 KESKİN', mode: 'bolt', modeLabel: 'SÜRGÜLÜ',
    damage: 130, headshotMult: 2.0, rpm: 42, magSize: 5, reserveStart: 25, maxReserve: 40,
    reloadTime: 3.0, spreadHip: 0.08, spreadAds: 0.0005, spreadMove: 0.05,
    recoilPitch: 0.05, recoilYaw: 0.01, kickback: 0.16, adsFovMult: 0.28, adsTime: 0.3,
    pellets: 1, range: 400, sound: 'sniper', build: buildSniper,
    hip: [0.26, -0.26, -0.55], ads: [0, -0.02, -0.3], scope: true,
  },
  {
    id: 'pistol', name: 'M9 TABANCA', mode: 'semi', modeLabel: 'YARI OTOMATİK',
    damage: 34, headshotMult: 2.4, rpm: 400, magSize: 15, reserveStart: 75, maxReserve: 120,
    reloadTime: 1.5, spreadHip: 0.022, spreadAds: 0.005, spreadMove: 0.02,
    recoilPitch: 0.014, recoilYaw: 0.005, kickback: 0.05, adsFovMult: 0.9, adsTime: 0.12,
    pellets: 1, range: 70, sound: 'pistol', build: buildPistol,
    hip: [0.24, -0.23, -0.45], ads: [0, -0.135, -0.3], scope: false,
  },
];

// ---------------- weapon system ----------------

export class WeaponSystem {
  constructor(camera, audio, effects) {
    this.camera = camera;
    this.audio = audio;
    this.effects = effects;

    this.rig = new THREE.Group(); // holds active viewmodel; attached to camera
    camera.add(this.rig);

    // dedicated fill light so the first-person weapon + hands stay readable at
    // night; short range keeps it off the world geometry behind the viewmodel.
    this.vmLight = new THREE.PointLight(0xcdd8e6, 3.4, 2.4, 2);
    this.vmLight.position.set(0.18, 0.12, -0.1);
    this.rig.add(this.vmLight);
    const vmFill = new THREE.DirectionalLight(0x9fb0c4, 0.6);
    vmFill.position.set(-0.3, 0.4, 0.5);
    this.rig.add(vmFill);
    this.rig.add(vmFill.target);

    this.weapons = WEAPON_DEFS.map((def) => {
      const built = def.build();
      built.group.visible = false;
      built.group.traverse((m) => { if (m.isMesh) { m.castShadow = false; m.frustumCulled = false; } });
      this.rig.add(built.group);
      return {
        def,
        model: built.group,
        magMesh: built.mag,
        magHome: built.mag.position.clone(),
        muzzleLocal: built.muzzle,
        leftHand: built.hands ? built.hands.left : null,
        leftHandHome: built.hands ? built.hands.left.position.clone() : null,
        // the shotgun's support hand rides the pump, so don't double-animate it on reload
        animateHand: !!built.hands && def.id !== 'shotgun',
        mag: def.magSize,
        reserve: def.reserveStart,
      };
    });

    this.index = 0;
    this.current = this.weapons[0];
    this.current.model.visible = true;

    // state
    this.cooldown = 0;
    this.reloading = false;
    this.reloadT = 0;
    this.reloadStagePlayed = [false, false, false];
    this.pumping = 0; // rechamber timer for pump/bolt
    this.switching = 0;
    this.switchTarget = -1;
    this.adsAmount = 0; // 0..1
    this.wantAds = false;
    this.triggerHeld = false;
    this.semiReady = true;

    // procedural motion
    this.swayPos = new THREE.Vector3();
    this.swayRot = new THREE.Euler();
    this.bobPhase = 0;
    this.kick = 0;         // backward kick amount
    this.recoilRot = 0;    // viewmodel pitch from recoil
    this.throwT = 0;       // grenade-throw viewmodel animation timer

    // muzzle flash
    this.flashLight = new THREE.PointLight(0xffb35e, 0, 7, 2);
    this.rig.add(this.flashLight);
    const flashGeo = new THREE.ConeGeometry(0.045, 0.16, 8, 1, true);
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xffd9a0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending,
      depthWrite: false, side: THREE.DoubleSide,
    });
    this.flashMesh = new THREE.Mesh(flashGeo, flashMat);
    this.flashMesh.rotation.x = Math.PI / 2;
    this.rig.add(this.flashMesh);
    this.flashTime = 0;

    // callbacks the game wires up
    this.onShot = null;       // ({origin, dir, def}) per pellet
    this.onRecoil = null;     // (pitch, yaw)
    this.onAmmoChange = null;
  }

  get def() { return this.current.def; }

  totalReserve() { return this.current.reserve; }

  addReserve(weaponId, amount) {
    for (const w of this.weapons) {
      if (weaponId === 'all' || w.def.id === weaponId) {
        w.reserve = Math.min(w.def.maxReserve, w.reserve + (weaponId === 'all' ? Math.ceil(w.def.magSize * 1.5) : amount));
      }
    }
    this.onAmmoChange && this.onAmmoChange();
  }

  switchTo(i) {
    if (i === this.index || i < 0 || i >= this.weapons.length) return;
    if (this.switching > 0) { this.switchTarget = i; return; }
    this.switchTarget = i;
    this.switching = 0.36;
    this.reloading = false;
    this.audio.weaponSwitch();
  }

  cycle(dir) {
    this.switchTo((this.index + dir + this.weapons.length) % this.weapons.length);
  }

  startReload() {
    const w = this.current;
    if (this.reloading || this.switching > 0) return;
    if (w.mag >= w.def.magSize || w.reserve <= 0) return;
    this.reloading = true;
    this.reloadT = 0;
    this.reloadStagePlayed = [false, false, false];
  }

  setAds(v) { this.wantAds = v; }

  playThrow() { this.throwT = 0.55; }

  setTrigger(v) {
    this.triggerHeld = v;
    if (!v) this.semiReady = true;
  }

  // Called by game each frame; fires if allowed. Returns array of shots or null.
  tryFire(moving) {
    const w = this.current;
    const def = w.def;
    if (!this.triggerHeld || this.reloading || this.switching > 0 || this.pumping > 0 || this.cooldown > 0) return null;
    if (def.mode === 'semi' || def.mode === 'pump' || def.mode === 'bolt') {
      if (!this.semiReady) return null;
      this.semiReady = false;
    }
    if (w.mag <= 0) {
      this.audio.dryFire();
      this.cooldown = 0.25;
      if (w.reserve > 0) this.startReload();
      return null;
    }

    w.mag--;
    this.cooldown = 60 / def.rpm;
    if (def.mode === 'pump' || def.mode === 'bolt') this.pumping = 0.55;

    // spread
    let spread = this.adsAmount > 0.6 ? def.spreadAds : def.spreadHip;
    if (moving) spread += def.spreadMove * (1 - this.adsAmount * 0.8);

    const origin = new THREE.Vector3();
    this.camera.getWorldPosition(origin);
    const baseDir = new THREE.Vector3();
    this.camera.getWorldDirection(baseDir);

    const shots = [];
    for (let p = 0; p < def.pellets; p++) {
      const dir = baseDir.clone();
      dir.x += (Math.random() - 0.5) * 2 * spread;
      dir.y += (Math.random() - 0.5) * 2 * spread;
      dir.z += (Math.random() - 0.5) * 2 * spread * 0.4;
      dir.normalize();
      shots.push({ origin: origin.clone(), dir, def });
    }

    // recoil & kick
    const adsFactor = 1 - this.adsAmount * 0.45;
    this.onRecoil && this.onRecoil(def.recoilPitch * adsFactor, (Math.random() - 0.5) * 2 * def.recoilYaw * adsFactor);
    this.kick = Math.min(0.2, this.kick + def.kickback);
    this.recoilRot = Math.min(0.3, this.recoilRot + def.recoilPitch * 6);

    // flash
    this.flashTime = 0.045;
    this.flashMesh.scale.set(0.8 + Math.random() * 0.7, 0.8 + Math.random() * 0.7, 0.8 + Math.random() * 0.6);
    this.flashMesh.rotation.z = Math.random() * Math.PI * 2;

    this.audio.gunshot(def.sound);
    this.effects.ejectShell(this.camera, this.current);
    this.onAmmoChange && this.onAmmoChange();
    return shots;
  }

  update(dt, ctx) {
    // ctx: { lookDeltaX, lookDeltaY, speed, grounded, crouch }
    const w = this.current;
    const def = w.def;

    this.cooldown = Math.max(0, this.cooldown - dt);

    // pump / bolt rechamber
    if (this.pumping > 0) {
      this.pumping = Math.max(0, this.pumping - dt);
      const t = 1 - this.pumping / 0.55;
      // pump slides back then forward; bolt: tilt
      const s = Math.sin(Math.min(1, t) * Math.PI);
      if (def.mode === 'pump') {
        w.magMesh.position.z = w.magHome.z + s * 0.12;
        if (t > 0.4 && t < 0.5 && !this._pumpSnd) { this.audio.reloadStage(2); this._pumpSnd = true; }
      } else {
        w.model.rotation.z = s * 0.12;
        if (t > 0.35 && t < 0.45 && !this._pumpSnd) { this.audio.reloadStage(2); this._pumpSnd = true; }
      }
      if (this.pumping === 0) {
        this._pumpSnd = false;
        if (def.mode === 'pump') w.magMesh.position.copy(w.magHome);
        w.model.rotation.z = 0;
      }
    }

    // switching animation: lower current, swap, raise new
    if (this.switching > 0) {
      this.switching = Math.max(0, this.switching - dt);
      const half = 0.18;
      if (this.switching > half) {
        this.rig.position.y = -((0.36 - this.switching) / half) * 0.35;
      } else {
        if (this.switchTarget >= 0 && this.index !== this.switchTarget) {
          this.current.model.visible = false;
          this.index = this.switchTarget;
          this.current = this.weapons[this.index];
          this.current.model.visible = true;
          this.onAmmoChange && this.onAmmoChange();
        }
        this.rig.position.y = -(this.switching / half) * 0.35;
      }
      if (this.switching === 0) { this.switchTarget = -1; this.rig.position.y = 0; }
    }

    // reload timeline
    if (this.reloading) {
      this.reloadT += dt;
      const T = def.reloadTime;
      const t = this.reloadT / T;
      const magY = w.magHome.y;
      if (t < 0.3) {
        // mag drops out
        const k = t / 0.3;
        w.magMesh.position.y = magY - k * 0.25;
        w.magMesh.rotation.x = -k * 0.5;
        if (!this.reloadStagePlayed[0] && t > 0.08) { this.audio.reloadStage(0); this.reloadStagePlayed[0] = true; }
      } else if (t < 0.65) {
        w.magMesh.visible = false;
      } else if (t < 0.9) {
        // new mag comes in
        w.magMesh.visible = true;
        const k = (t - 0.65) / 0.25;
        w.magMesh.position.y = magY - (1 - k) * 0.25;
        w.magMesh.rotation.x = -(1 - k) * 0.5;
        if (!this.reloadStagePlayed[1] && t > 0.72) { this.audio.reloadStage(1); this.reloadStagePlayed[1] = true; }
      } else {
        w.magMesh.position.y = magY;
        w.magMesh.rotation.x = 0;
        if (!this.reloadStagePlayed[2]) { this.audio.reloadStage(2); this.reloadStagePlayed[2] = true; }
      }
      // support hand leaves the foregrip, drops to the mag well and returns
      if (w.leftHand && w.animateHand) {
        let dip = 0;
        if (t < 0.3) dip = t / 0.3;
        else if (t < 0.65) dip = 1;
        else if (t < 0.92) dip = 1 - (t - 0.65) / 0.27;
        w.leftHand.position.y = w.leftHandHome.y - dip * 0.2;
        w.leftHand.position.z = w.leftHandHome.z + dip * 0.28;
      }
      // whole weapon dips + rolls during reload
      this.rig.rotation.z = Math.sin(Math.min(1, t) * Math.PI) * 0.22;
      this.rig.rotation.x = Math.sin(Math.min(1, t) * Math.PI) * 0.12;
      if (this.reloadT >= T) {
        const need = def.magSize - w.mag;
        const take = Math.min(need, w.reserve);
        w.mag += take;
        w.reserve -= take;
        this.reloading = false;
        this.rig.rotation.set(0, 0, 0);
        w.magMesh.position.copy(w.magHome);
        w.magMesh.rotation.x = 0;
        w.magMesh.visible = true;
        if (w.leftHand && w.leftHandHome) w.leftHand.position.copy(w.leftHandHome);
        this.onAmmoChange && this.onAmmoChange();
      }
    } else if (w.leftHand && w.leftHandHome && w.animateHand) {
      // ease the support hand back home if a reload was interrupted
      w.leftHand.position.y += (w.leftHandHome.y - w.leftHand.position.y) * Math.min(1, dt * 12);
      w.leftHand.position.z += (w.leftHandHome.z - w.leftHand.position.z) * Math.min(1, dt * 12);
    }

    // ADS lerp
    const adsSpeed = 1 / def.adsTime;
    if (this.wantAds && !this.reloading && this.switching === 0) {
      this.adsAmount = Math.min(1, this.adsAmount + dt * adsSpeed);
    } else {
      this.adsAmount = Math.max(0, this.adsAmount - dt * adsSpeed * 1.3);
    }
    const a = this.adsAmount * this.adsAmount * (3 - 2 * this.adsAmount); // smoothstep

    // position: hip → ads
    const hip = def.hip, ads = def.ads;
    const px = hip[0] + (ads[0] - hip[0]) * a;
    const py = hip[1] + (ads[1] - hip[1]) * a;
    const pz = hip[2] + (ads[2] - hip[2]) * a;

    // sway from mouse
    const swayScale = 1 - a * 0.85;
    this.swayPos.x += ((-ctx.lookDeltaX * 0.0016 * swayScale) - this.swayPos.x) * Math.min(1, dt * 9);
    this.swayPos.y += ((ctx.lookDeltaY * 0.0013 * swayScale) - this.swayPos.y) * Math.min(1, dt * 9);
    this.swayRot.z += ((-ctx.lookDeltaX * 0.0011 * swayScale) - this.swayRot.z) * Math.min(1, dt * 8);
    this.swayRot.x += ((-ctx.lookDeltaY * 0.0009 * swayScale) - this.swayRot.x) * Math.min(1, dt * 8);

    // bob from movement
    if (ctx.grounded && ctx.speed > 0.5) {
      this.bobPhase += dt * (4.5 + ctx.speed * 0.9);
    }
    const bobAmp = (0.006 + ctx.speed * 0.0016) * (1 - a * 0.9);
    const bobX = Math.sin(this.bobPhase) * bobAmp;
    const bobY = Math.abs(Math.cos(this.bobPhase)) * bobAmp * 1.15;

    // recoil recovery
    this.kick = Math.max(0, this.kick - dt * 0.55);
    this.recoilRot = Math.max(0, this.recoilRot - dt * 1.8);

    const model = this.current.model;
    model.position.set(
      px + this.swayPos.x + bobX,
      py + this.swayPos.y - bobY,
      pz + this.kick
    );
    model.rotation.set(this.swayRot.x - this.recoilRot, 0, this.swayRot.z);
    if (this.pumping > 0 && def.mode === 'bolt') model.rotation.z += Math.sin((1 - this.pumping / 0.55) * Math.PI) * 0.12;

    // grenade throw: pull the weapon down/left and rock it, like the off-hand lobs a frag
    if (this.throwT > 0) {
      this.throwT = Math.max(0, this.throwT - dt);
      const tt = 1 - this.throwT / 0.55;
      const s = Math.sin(tt * Math.PI);
      model.position.x -= s * 0.14;
      model.position.y -= s * 0.16;
      model.position.z += s * 0.05;
      model.rotation.x += s * 0.6;
      model.rotation.z -= s * 0.35;
    }

    // hide viewmodel when scoped in fully
    model.visible = !(def.scope && this.adsAmount > 0.85) && (this.switching === 0 || true);

    // muzzle flash
    if (this.flashTime > 0) {
      this.flashTime -= dt;
      const on = this.flashTime > 0;
      const mLocal = this.muzzleWorldLocal();
      this.flashMesh.position.copy(mLocal);
      this.flashMesh.visible = on;
      this.flashMesh.material.opacity = on ? 0.9 : 0;
      this.flashLight.position.copy(mLocal);
      this.flashLight.intensity = on ? 26 : 0;
    } else {
      this.flashMesh.visible = false;
      this.flashMesh.material.opacity = 0;
      this.flashLight.intensity = 0;
    }
  }

  // muzzle position in rig (camera) space
  muzzleWorldLocal() {
    const w = this.current;
    return w.muzzleLocal.clone().add(w.model.position);
  }

  currentFovMult() {
    const a = this.adsAmount * this.adsAmount * (3 - 2 * this.adsAmount);
    return 1 + (this.def.adsFovMult - 1) * a;
  }

  isScoped() {
    return this.def.scope && this.adsAmount > 0.85;
  }
}
