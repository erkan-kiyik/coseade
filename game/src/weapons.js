// Weapon system: 4 weapons with procedurally-built viewmodels,
// recoil, spread, ADS, reload animations, muzzle flash and fire modes.

import * as THREE from 'three';

// ---------------- procedural 2K PBR maps for gun surfaces ----------------
// Worn metal: brushed streaks, fine scratches, grunge blotches and lightly
// scuffed edges baked into a colour map + matching roughness map so the whole
// arsenal reads as real service-worn steel rather than flat plastic.
const TEX_SIZE = 2048;

function metalColorTexture(baseHex, scuffHex = '#7b828c', size = TEX_SIZE) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const base = '#' + new THREE.Color(baseHex).getHexString();
  g.fillStyle = base;
  g.fillRect(0, 0, size, size);
  // horizontal brushed-metal streaks
  for (let i = 0; i < 1400; i++) {
    const y = Math.random() * size;
    g.strokeStyle = `rgba(255,255,255,${0.015 + Math.random() * 0.03})`;
    g.lineWidth = Math.random() < 0.5 ? 1 : 2;
    g.beginPath(); g.moveTo(0, y); g.lineTo(size, y + (Math.random() - 0.5) * 6); g.stroke();
  }
  // dark grunge / oil blotches
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * size, y = Math.random() * size, r = 20 + Math.random() * 120;
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, `rgba(0,0,0,${0.12 + Math.random() * 0.18})`);
    gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // bright edge scratches (bare metal showing through)
  for (let i = 0; i < 260; i++) {
    g.strokeStyle = `rgba(${scuffFromHex(scuffHex)},${0.25 + Math.random() * 0.4})`;
    g.lineWidth = Math.random() < 0.7 ? 1 : 2;
    const x = Math.random() * size, y = Math.random() * size;
    const len = 8 + Math.random() * 90, a = Math.random() * Math.PI;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len); g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}
function scuffFromHex(hex) {
  const c = new THREE.Color(hex);
  return `${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)}`;
}
let _roughTex = null;
function metalRoughnessTexture(size = TEX_SIZE) {
  if (_roughTex) return _roughTex;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.fillStyle = '#8a8a8a'; // mid roughness base
  g.fillRect(0, 0, size, size);
  for (let i = 0; i < 900; i++) { // brushed streaks slightly smoother
    const y = Math.random() * size;
    g.strokeStyle = `rgba(60,60,60,${0.05 + Math.random() * 0.08})`;
    g.lineWidth = 1 + Math.random() * 2;
    g.beginPath(); g.moveTo(0, y); g.lineTo(size, y); g.stroke();
  }
  for (let i = 0; i < 260; i++) { // scratches read as polished (darker = smoother)
    g.strokeStyle = `rgba(30,30,30,${0.4 + Math.random() * 0.4})`;
    g.lineWidth = Math.random() < 0.7 ? 1 : 2;
    const x = Math.random() * size, y = Math.random() * size, len = 8 + Math.random() * 90, a = Math.random() * Math.PI;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len); g.stroke();
  }
  for (let i = 0; i < 90; i++) { // grunge reads rougher
    const x = Math.random() * size, y = Math.random() * size, r = 20 + Math.random() * 120;
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, `rgba(210,210,210,${0.2 + Math.random() * 0.2})`);
    gr.addColorStop(1, 'rgba(210,210,210,0)');
    g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.NoColorSpace;
  tex.anisotropy = 8;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  _roughTex = tex;
  return tex;
}
function wornMetal(baseHex, metalness = 0.72) {
  return new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: metalColorTexture(baseHex),
    roughnessMap: metalRoughnessTexture(),
    roughness: 1.0, metalness,
    envMapIntensity: 1.1,
  });
}

// shared materials
const M = {
  gunmetal: wornMetal(0x34383e, 0.7),
  darkSteel: wornMetal(0x24272c, 0.8),
  polymer: new THREE.MeshStandardMaterial({ color: 0x2c2f33, roughness: 0.75, metalness: 0.15 }),
  grip: new THREE.MeshStandardMaterial({ color: 0x1e2023, roughness: 0.9, metalness: 0.05 }),
  tan: new THREE.MeshStandardMaterial({ color: 0x8a7a5c, roughness: 0.7, metalness: 0.1 }),
  accent: new THREE.MeshStandardMaterial({ color: 0xb84a2e, roughness: 0.5, metalness: 0.3 }),
  sightGlow: new THREE.MeshStandardMaterial({ color: 0x30ff70, emissive: 0x30ff70, emissiveIntensity: 2.2 }),
  scopeGlass: new THREE.MeshStandardMaterial({ color: 0x1c4055, roughness: 0.15, metalness: 0.6 }),
  brass: new THREE.MeshStandardMaterial({ color: 0xc4a24a, roughness: 0.35, metalness: 0.7 }),
  glove: new THREE.MeshStandardMaterial({ color: 0x26282a, roughness: 0.85, metalness: 0.05 }),
  gloveKnuckle: new THREE.MeshStandardMaterial({ color: 0x333638, roughness: 0.7, metalness: 0.1 }),
  sleeve: new THREE.MeshStandardMaterial({ color: 0x39402e, roughness: 0.92, metalness: 0.03 }),
  skin: new THREE.MeshStandardMaterial({ color: 0xc79a72, roughness: 0.72, metalness: 0.02 }),
  skinDark: new THREE.MeshStandardMaterial({ color: 0xa6764f, roughness: 0.75, metalness: 0.02 }),
  nail: new THREE.MeshStandardMaterial({ color: 0xd8b79a, roughness: 0.4, metalness: 0.05 }),
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

// ---------------- human hands (shared) ----------------
// An anatomically-shaped gripping hand: a camouflage sleeve receding toward the
// camera (+z), a bare wrist, a rounded palm, four jointed tapered fingers that
// curl forward (−z) and an opposed thumb. Fingers are built from three phalanx
// segments on nested pivots so they read as real fingers, not blocks.

// one length-wise tapered segment pointing toward −z, joint at local origin
function phalanx(len, r1, r2, mat) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, len, 8), mat);
  m.rotation.x = -Math.PI / 2; // cylinder axis (Y) → −Z
  m.position.z = -len / 2;
  return m;
}

// a curled finger: base -> middle -> tip on nested joints; more curl = tighter
function buildFinger(x, z, len, curl, tipMat) {
  const j1 = new THREE.Group();
  j1.position.set(x, 0.006, z);
  j1.rotation.x = -(0.25 + curl * 0.55);
  j1.add(phalanx(len * 0.44, 0.0115, 0.0108, M.skin));
  const knuckle = new THREE.Mesh(new THREE.SphereGeometry(0.0125, 8, 6), M.skinDark);
  j1.add(knuckle);
  const j2 = new THREE.Group();
  j2.position.z = -len * 0.44;
  j2.rotation.x = -(0.35 + curl * 0.75);
  j2.add(phalanx(len * 0.33, 0.0106, 0.0098, M.skin));
  const j3 = new THREE.Group();
  j3.position.z = -len * 0.33;
  j3.rotation.x = -(0.3 + curl * 0.7);
  j3.add(phalanx(len * 0.26, 0.0097, 0.0075, M.skin));
  const nail = new THREE.Mesh(new THREE.BoxGeometry(0.011, 0.004, 0.013), tipMat || M.nail);
  nail.position.set(0, 0.007, -len * 0.16);
  j3.add(nail);
  j2.add(j3);
  j1.add(j2);
  return j1;
}

function buildHand(curl = 1) {
  const grp = new THREE.Group();
  // sleeve so it reads as an arm rather than a floating hand
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.075, 0.34, 12), M.sleeve);
  sleeve.rotation.x = Math.PI / 2;
  sleeve.position.z = 0.2;
  grp.add(sleeve);
  const cuffTrim = new THREE.Mesh(new THREE.TorusGeometry(0.052, 0.008, 6, 14), M.sleeve);
  cuffTrim.position.z = 0.04;
  grp.add(cuffTrim);
  // wrist + tapered forehand
  const wrist = new THREE.Mesh(new THREE.CylinderGeometry(0.044, 0.05, 0.08, 12), M.skin);
  wrist.rotation.x = Math.PI / 2;
  wrist.position.z = 0.02;
  grp.add(wrist);
  // palm — a rounded, slightly flattened block
  const palm = new THREE.Mesh(new THREE.BoxGeometry(0.088, 0.046, 0.1), M.skin);
  palm.position.set(-0.002, 0, -0.05);
  grp.add(palm);
  const heel = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), M.skin);
  heel.scale.set(1, 0.55, 0.9);
  heel.position.set(-0.002, -0.004, -0.01);
  grp.add(heel);
  // knuckle ridge across the top of the palm
  const knuckleRidge = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.086, 8), M.skinDark);
  knuckleRidge.rotation.z = Math.PI / 2;
  knuckleRidge.position.set(-0.002, 0.012, -0.098);
  grp.add(knuckleRidge);
  // four fingers, index→pinky, slightly staggered lengths and knuckle line
  const xs = [-0.032, -0.0105, 0.0105, 0.032];
  const lens = [0.092, 0.1, 0.095, 0.078];
  const zf = [-0.1, -0.104, -0.102, -0.096];
  for (let i = 0; i < 4; i++) grp.add(buildFinger(xs[i], zf[i], lens[i], curl, M.nail));
  // opposed thumb on the +x side, two segments angled across the grip
  const tBase = new THREE.Group();
  tBase.position.set(0.05, -0.004, -0.02);
  tBase.rotation.set(0.15, 0, 0.9);
  tBase.add(phalanx(0.05, 0.014, 0.012, M.skin));
  const tTip = new THREE.Group();
  tTip.position.z = -0.05;
  tTip.rotation.x = -(0.3 + curl * 0.35);
  tTip.add(phalanx(0.042, 0.012, 0.0085, M.skin));
  const tNail = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.004, 0.013), M.nail);
  tNail.position.set(0, 0.008, -0.026);
  tTip.add(tNail);
  tBase.add(tTip);
  grp.add(tBase);
  grp.traverse((m) => { if (m.isMesh) { m.castShadow = false; m.frustumCulled = false; } });
  return grp;
}

// place two hands onto a viewmodel; returns refs for animation.
// anchors/rots are [x,y,z]; leftParent lets the shotgun's support hand ride the pump.
function addHands(g, cfg) {
  let left = null;
  if (cfg.left) {
    left = buildHand();
    left.position.set(...cfg.left);
    if (cfg.leftRot) left.rotation.set(...cfg.leftRot);
    (cfg.leftParent || g).add(left);
  }
  const right = buildHand(cfg.rightCurl != null ? cfg.rightCurl : 1);
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
  // handguard side + bottom M-LOK slots
  for (let i = 0; i < 5; i++) {
    g.add(box(0.004, 0.02, 0.03, M.gunmetal, 0.031, 0.02, -0.32 - i * 0.05));
    g.add(box(0.004, 0.02, 0.03, M.gunmetal, -0.031, 0.02, -0.32 - i * 0.05));
  }
  // full-length flat-top Picatinny rail (teeth) across receiver + handguard
  addRail(g, -0.02, 0.058, 0.16, -0.58, 0.06);
  g.add(cyl(0.013, 0.013, 0.36, M.darkSteel, 0, 0.015, -0.7, Math.PI / 2));  // barrel
  g.add(cyl(0.016, 0.016, 0.05, M.darkSteel, 0, 0.015, -0.62, Math.PI / 2)); // gas block
  g.add(box(0.012, 0.04, 0.02, M.darkSteel, 0, 0.05, -0.62));                // gas block sight base
  addMuzzleBrake(g, 0, 0.015, -0.86);
  g.add(box(0.045, 0.05, 0.2, M.polymer, 0, 0.0, 0.24));                     // stock body
  g.add(box(0.055, 0.1, 0.06, M.grip, 0, -0.03, 0.33));                      // stock butt
  g.add(box(0.03, 0.02, 0.09, M.polymer, 0, 0.05, 0.25));                    // cheek riser
  addGrip(g, 0, -0.055, 0.09, 0.28);                                          // ergonomic pistol grip
  // flip-up iron sights (rear on receiver, front on gas block)
  g.add(box(0.02, 0.028, 0.014, M.darkSteel, 0, 0.078, 0.12));
  g.add(box(0.008, 0.03, 0.008, M.darkSteel, 0, 0.072, -0.62));
  // red-dot optic mounted on the rail
  const optic = buildRedDot(); optic.position.set(0, 0.075, -0.02); g.add(optic);
  // magazine (curved STANAG, two segments), detachable for reload anim
  mag.add(box(0.042, 0.13, 0.075, M.polymer, 0, -0.065, 0, -0.12));
  mag.add(box(0.042, 0.08, 0.07, M.polymer, 0, -0.155, 0.018, -0.3));
  mag.add(box(0.044, 0.02, 0.078, M.grip, 0, -0.196, 0.027, -0.3));          // baseplate
  mag.position.set(0, -0.07, -0.06);
  g.add(mag);
  // ejection port + dust cover + forward assist (right side)
  g.add(box(0.006, 0.032, 0.09, M.darkSteel, 0.03, 0.03, -0.02));
  g.add(cyl(0.012, 0.012, 0.02, M.darkSteel, 0.036, 0.012, 0.02, 0, 0, Math.PI / 2, 8));
  // selector switch (left side, above grip)
  g.add(cyl(0.006, 0.006, 0.024, M.darkSteel, -0.03, -0.01, 0.06, 0, 0, Math.PI / 2, 8));
  g.add(box(0.004, 0.008, 0.03, M.darkSteel, -0.04, -0.01, 0.065));
  // reciprocating charging handle (T-latch at the rear) — cycles on fire
  const bolt = new THREE.Group();
  bolt.add(box(0.03, 0.014, 0.05, M.darkSteel, 0, 0.045, 0.14));
  bolt.add(box(0.05, 0.012, 0.014, M.darkSteel, 0, 0.045, 0.165));
  g.add(bolt);
  // QD sling loops
  g.add(cyl(0.006, 0.006, 0.006, M.darkSteel, -0.03, -0.02, 0.3, Math.PI / 2, 0, 0, 8));
  g.add(cyl(0.006, 0.006, 0.006, M.darkSteel, -0.03, -0.01, -0.3, Math.PI / 2, 0, 0, 8));
  const hands = addHands(g, {
    right: [0.0, -0.085, 0.11], rightRot: [0.42, 0, 0],
    left: [-0.01, -0.055, -0.34], leftRot: [0.22, 0, -0.15],
  });
  return { group: g, mag, bolt, boltThrow: 0.05, muzzle: new THREE.Vector3(0, 0.015, -0.9), hands };
}

// ---- shared weapon detail helpers ----
function addRail(g, x, y, zFront, zBack, width = 0.06) {
  g.add(box(width, 0.01, Math.abs(zFront - zBack), M.gunmetal, x, y - 0.006, (zFront + zBack) / 2));
  const n = Math.round(Math.abs(zFront - zBack) / 0.018);
  for (let i = 0; i < n; i++) {
    g.add(box(width, 0.008, 0.008, M.darkSteel, x, y, zFront - i * 0.018));
  }
}
function addMuzzleBrake(g, x, y, z) {
  g.add(cyl(0.02, 0.02, 0.075, M.darkSteel, x, y, z, Math.PI / 2, 0, 0, 10));
  for (let i = 0; i < 3; i++) g.add(box(0.042, 0.006, 0.006, M.grip, x, y, z - 0.01 - i * 0.02)); // port slots
}
function addGrip(g, x, y, z, tilt) {
  g.add(box(0.036, 0.095, 0.05, M.grip, x, y, z, tilt));
  for (let i = 0; i < 3; i++) g.add(box(0.04, 0.008, 0.05, M.polymer, x, y - 0.02 - i * 0.022, z + (i - 1) * 0.01, tilt)); // finger grooves
}
function buildRedDot() {
  const o = new THREE.Group();
  o.add(box(0.03, 0.014, 0.05, M.darkSteel, 0, -0.006, 0));       // mount base
  o.add(cyl(0.017, 0.017, 0.05, M.gunmetal, 0, 0.02, 0, Math.PI / 2, 0, 0, 12)); // tube
  const lens = new THREE.Mesh(new THREE.CircleGeometry(0.013, 14), M.scopeGlass);
  lens.position.set(0, 0.02, 0.026); o.add(lens);
  const dot = new THREE.Mesh(new THREE.SphereGeometry(0.0035, 6, 6), M.sightGlow);
  dot.position.set(0, 0.02, 0.025); o.add(dot);
  return o;
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
  // slide serrations (front and rear)
  for (let i = 0; i < 5; i++) g.add(box(0.044, 0.04, 0.006, M.darkSteel, 0, 0.02, 0.045 + i * 0.012));
  for (let i = 0; i < 4; i++) g.add(box(0.044, 0.038, 0.005, M.darkSteel, 0, 0.02, -0.155 - i * 0.011));
  // accessory rail under the dust cover + takedown lever
  g.add(box(0.03, 0.012, 0.06, M.darkSteel, 0, -0.045, -0.1));
  for (let i = 0; i < 3; i++) g.add(box(0.032, 0.006, 0.01, M.gunmetal, 0, -0.04, -0.08 - i * 0.018));
  g.add(cyl(0.008, 0.008, 0.02, M.darkSteel, -0.02, -0.005, -0.03, 0, 0, Math.PI / 2, 8)); // takedown lever
  mag.add(box(0.028, 0.1, 0.045, M.darkSteel, 0, -0.04, 0));
  mag.add(box(0.03, 0.016, 0.048, M.grip, 0, -0.098, 0.002));            // baseplate
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
  // shell holder on receiver side + a second row along the stock strap
  for (let i = 0; i < 4; i++) g.add(cyl(0.011, 0.011, 0.05, M.accent, 0.035, 0.01, 0.14 - i * 0.045, Math.PI / 2, 0, 0, 8));
  for (let i = 0; i < 3; i++) g.add(cyl(0.01, 0.01, 0.044, M.accent, -0.032, -0.01, 0.34 - i * 0.05, Math.PI / 2, 0, 0, 8));
  // barrel heat shield ring + front sling swivel
  g.add(cyl(0.023, 0.023, 0.14, M.darkSteel, 0, 0.035, -0.58, Math.PI / 2, 0, 0, 10));
  g.add(cyl(0.006, 0.006, 0.006, M.darkSteel, 0, 0.01, -0.68, Math.PI / 2, 0, 0, 8));
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

// karambit hawkbill blade: a chain of shrinking, increasingly-curled segments
// (same joint-chain technique as buildFinger) so the blade reads as a single
// smooth claw-like curve rather than a straight bar.
function buildKarambitBlade(steelMat, edgeMat) {
  const root = new THREE.Group();
  let cur = root;
  const segs = 6;
  let curl = -0.02;
  const len = 0.052;
  for (let i = 0; i < segs; i++) {
    const w = 0.05 - i * 0.0062;
    const seg = new THREE.Group();
    seg.rotation.x = curl;
    cur.add(seg);
    const body = box(0.009, w, len, steelMat, 0, 0, -len / 2);
    seg.add(body);
    // sharpened edge on the concave (inside) face of the hook
    const edge = box(0.011, 0.008, len * 0.9, edgeMat, 0, -w / 2 + 0.004, -len / 2);
    seg.add(edge);
    if (i === segs - 1) {
      // hooked tip
      const tip = box(0.008, w * 0.4, len * 0.5, steelMat, 0, -w * 0.2, -len * 1.15);
      tip.rotation.x = -0.5;
      seg.add(tip);
    }
    const next = new THREE.Group();
    next.position.z = -len;
    seg.add(next);
    cur = next;
    curl -= 0.24; // each segment hooks a little more — builds the claw curve
  }
  return root;
}

function buildKarambit() {
  const g = new THREE.Group();
  const k = new THREE.Group();          // tilted blade assembly
  k.rotation.set(-0.15, 0.06, 0.16);
  g.add(k);
  const steel = M.gunmetal;
  const edge = new THREE.MeshStandardMaterial({ color: 0xc9ced4, roughness: 0.2, metalness: 0.95 });
  // short contoured grip with finger grooves
  k.add(box(0.026, 0.038, 0.12, M.grip, 0, -0.012, 0.115));
  for (let i = 0; i < 3; i++) k.add(box(0.03, 0.009, 0.012, M.polymer, 0, -0.012, 0.085 + i * 0.026));
  // bolster where handle meets blade (thumb ramp / choil)
  k.add(box(0.028, 0.042, 0.028, M.darkSteel, 0, -0.002, 0.05));
  k.add(box(0.02, 0.014, 0.02, M.darkSteel, 0, 0.024, 0.045));               // spine hump / thumb ramp
  // signature finger ring at the pommel end
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.0065, 8, 16), M.darkSteel);
  ring.position.set(0, -0.012, 0.2);
  ring.rotation.y = Math.PI / 2;
  k.add(ring);
  // curved hawkbill blade, hooking down and back toward the grip
  const blade = buildKarambitBlade(steel, edge);
  blade.position.set(0, 0.006, 0.03);
  blade.rotation.x = -0.15;
  k.add(blade);
  const hands = addHands(k, {
    right: [0.0, -0.03, 0.18], rightRot: [0.55, 0.05, 0.14], rightCurl: 1,
  });
  return { group: g, mag: new THREE.Group(), muzzle: new THREE.Vector3(0, 0, -0.3), hands, melee: true };
}

function buildAK() {
  const g = new THREE.Group();
  const mag = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: 0x6a4324, roughness: 0.72, metalness: 0.08 });
  g.add(box(0.056, 0.08, 0.42, M.gunmetal, 0, 0.015, 0.0));                    // receiver
  g.add(box(0.05, 0.05, 0.3, wood, 0, 0.01, -0.4));                           // wooden handguard
  g.add(box(0.052, 0.03, 0.12, wood, 0, 0.06, -0.36));                        // upper handguard
  g.add(cyl(0.013, 0.013, 0.4, M.darkSteel, 0, 0.02, -0.72, Math.PI / 2));    // barrel
  g.add(cyl(0.02, 0.02, 0.06, M.darkSteel, 0, 0.02, -0.93, Math.PI / 2));     // slant muzzle
  g.add(box(0.045, 0.05, 0.24, wood, 0, -0.01, 0.28));                        // wooden stock
  g.add(box(0.05, 0.085, 0.05, wood, 0, -0.04, 0.4));
  g.add(box(0.035, 0.09, 0.045, wood, 0, -0.095, 0.06, 0.22));                // pistol grip
  g.add(box(0.008, 0.03, 0.008, M.darkSteel, 0, 0.07, -0.6));                 // front sight post
  const frontDot = new THREE.Mesh(new THREE.SphereGeometry(0.005, 6, 6), M.sightGlow);
  frontDot.position.set(0, 0.088, -0.6); g.add(frontDot);
  g.add(box(0.02, 0.028, 0.014, M.darkSteel, 0, 0.072, 0.16));                // rear sight block
  // signature curved AK magazine (three angled segments)
  mag.add(box(0.04, 0.1, 0.07, M.darkSteel, 0, -0.05, 0.02, -0.15));
  mag.add(box(0.04, 0.09, 0.065, M.darkSteel, 0, -0.13, 0.04, -0.4));
  mag.add(box(0.04, 0.07, 0.06, M.darkSteel, 0, -0.2, 0.09, -0.62));
  mag.position.set(0, -0.06, -0.08);
  g.add(mag);
  // big AK safety/selector lever (right side) + dust-cover serrations
  g.add(box(0.006, 0.05, 0.02, M.darkSteel, 0.03, 0.02, 0.1));
  for (let i = 0; i < 5; i++) g.add(box(0.056, 0.006, 0.004, M.gunmetal, 0, 0.056, -0.02 + i * 0.03));
  // reciprocating charging handle attached to the bolt carrier (right side)
  const bolt = new THREE.Group();
  bolt.add(box(0.022, 0.016, 0.05, M.darkSteel, 0.033, 0.05, 0.02));
  bolt.add(box(0.012, 0.03, 0.03, M.darkSteel, 0.04, 0.05, 0.03));
  g.add(bolt);
  // sling loops (side-mount, AK style)
  g.add(cyl(0.006, 0.006, 0.006, M.darkSteel, -0.028, -0.02, 0.28, Math.PI / 2, 0, 0, 8));
  g.add(cyl(0.006, 0.006, 0.006, M.darkSteel, -0.028, -0.03, -0.28, Math.PI / 2, 0, 0, 8));
  const hands = addHands(g, {
    right: [0.0, -0.09, 0.08], rightRot: [0.42, 0, 0],
    left: [-0.01, -0.05, -0.36], leftRot: [0.24, 0, -0.12],
  });
  return { group: g, mag, bolt, boltThrow: 0.045, muzzle: new THREE.Vector3(0, 0.02, -0.98), hands };
}

function buildSMG() {
  const g = new THREE.Group();
  const mag = new THREE.Group();
  g.add(box(0.05, 0.075, 0.34, M.gunmetal, 0, 0.01, 0.02));                   // receiver
  g.add(cyl(0.026, 0.026, 0.2, M.polymer, 0, 0.012, -0.22, Math.PI / 2));     // slim handguard
  g.add(cyl(0.012, 0.012, 0.12, M.darkSteel, 0, 0.012, -0.4, Math.PI / 2));   // short barrel
  g.add(cyl(0.02, 0.02, 0.05, M.darkSteel, 0, 0.012, -0.47, Math.PI / 2));    // muzzle
  // retractable wire stock
  g.add(cyl(0.006, 0.006, 0.22, M.darkSteel, -0.02, 0.0, 0.26, Math.PI / 2, 0, 0, 6));
  g.add(cyl(0.006, 0.006, 0.22, M.darkSteel, 0.02, 0.0, 0.26, Math.PI / 2, 0, 0, 6));
  g.add(box(0.06, 0.055, 0.04, M.grip, 0, -0.02, 0.38));                      // butt pad
  g.add(box(0.034, 0.085, 0.045, M.grip, 0, -0.088, 0.08, 0.2));              // pistol grip
  // drum/iron sight ring (MP5 signature)
  g.add(cyl(0.018, 0.018, 0.02, M.darkSteel, 0, 0.055, -0.36, Math.PI / 2, 0, 0, 8));
  const dot = new THREE.Mesh(new THREE.SphereGeometry(0.004, 6, 6), M.sightGlow);
  dot.position.set(0, 0.062, -0.36); g.add(dot);
  g.add(box(0.02, 0.03, 0.03, M.darkSteel, 0, 0.058, 0.12));                  // rear diopter
  mag.add(box(0.03, 0.16, 0.05, M.darkSteel, 0, -0.09, 0, 0.08));            // curved stick mag
  mag.add(box(0.032, 0.02, 0.052, M.grip, 0, -0.17, 0.006, 0.08));           // baseplate
  mag.position.set(0, -0.05, -0.1);
  g.add(mag);
  // short top rail + compact red-dot
  addRail(g, 0, 0.052, -0.12, 0.12, 0.05);
  const optic = buildRedDot(); optic.position.set(0, 0.066, 0); optic.scale.setScalar(0.85); g.add(optic);
  // selector + reciprocating cocking handle (left, HK style)
  g.add(box(0.005, 0.014, 0.03, M.darkSteel, -0.028, -0.005, 0.08));
  const bolt = new THREE.Group();
  bolt.add(box(0.012, 0.03, 0.03, M.darkSteel, -0.036, 0.055, -0.28));
  bolt.add(cyl(0.006, 0.006, 0.14, M.darkSteel, -0.03, 0.055, -0.2, Math.PI / 2, 0, 0, 8));
  g.add(bolt);
  const hands = addHands(g, {
    right: [0.0, -0.085, 0.1], rightRot: [0.45, 0, 0],
    left: [-0.005, -0.045, -0.2], leftRot: [0.3, 0, -0.1],
  });
  return { group: g, mag, bolt, boltThrow: 0.04, muzzle: new THREE.Vector3(0, 0.012, -0.52), hands };
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
  {
    id: 'ak', name: 'AK-47', mode: 'auto', modeLabel: 'TAM OTOMATİK',
    damage: 32, headshotMult: 2.1, rpm: 600, magSize: 30, reserveStart: 150, maxReserve: 240,
    reloadTime: 2.4, spreadHip: 0.034, spreadAds: 0.006, spreadMove: 0.034,
    recoilPitch: 0.016, recoilYaw: 0.006, kickback: 0.07, adsFovMult: 0.82, adsTime: 0.18,
    pellets: 1, range: 130, sound: 'rifle', build: buildAK,
    hip: [0.26, -0.24, -0.5], ads: [0, -0.152, -0.32], scope: false,
  },
  {
    id: 'smg', name: 'MP5', mode: 'auto', modeLabel: 'TAM OTOMATİK',
    damage: 20, headshotMult: 1.9, rpm: 800, magSize: 30, reserveStart: 180, maxReserve: 300,
    reloadTime: 1.9, spreadHip: 0.03, spreadAds: 0.006, spreadMove: 0.026,
    recoilPitch: 0.008, recoilYaw: 0.004, kickback: 0.04, adsFovMult: 0.85, adsTime: 0.13,
    pellets: 1, range: 90, sound: 'pistol', build: buildSMG,
    hip: [0.25, -0.23, -0.47], ads: [0, -0.142, -0.3], scope: false,
  },
  {
    id: 'knife', name: 'KARAMBIT', mode: 'melee', modeLabel: 'YAKIN DÖVÜŞ',
    damage: 55, headshotMult: 1.4, rpm: 150, magSize: 0, reserveStart: 0, maxReserve: 0,
    reloadTime: 0, spreadHip: 0, spreadAds: 0, spreadMove: 0,
    recoilPitch: 0, recoilYaw: 0, kickback: 0, adsFovMult: 1.0, adsTime: 0.12,
    pellets: 0, range: 2.6, sound: 'pistol', build: buildKarambit,
    hip: [0.14, -0.12, -0.46], ads: [0.14, -0.12, -0.46], scope: false,
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
        boltMesh: built.bolt || null,
        boltHome: built.bolt ? built.bolt.position.clone() : null,
        boltThrow: built.boltThrow || 0,
        muzzleLocal: built.muzzle,
        leftHand: built.hands ? built.hands.left : null,
        leftHandHome: (built.hands && built.hands.left) ? built.hands.left.position.clone() : null,
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
    this.inspectT = 0;     // weapon-inspect animation timer (counts down)
    this.inspectDur = 2.4;
    this.meleeT = 0;       // knife swing timer (counts down)
    this.meleeDur = 0.42;
    this.meleeType = 0;    // 0 = slash, 1 = stab
    this.sprintAmt = 0;    // 0..1 tactical-sprint lowered-weapon blend
    this.emptyReload = false; // reload started on an empty chamber (adds bolt release)
    this.breatheT = Math.random() * 10; // idle breathing phase

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
    this.reloadStagePlayed = [false, false, false, false];
    // empty reloads take longer and end with a bolt/charging-handle release
    this.emptyReload = w.mag <= 0;
    this.inspectT = 0;
  }

  setAds(v) { this.wantAds = v; if (v) this.inspectT = 0; }

  playThrow() { this.throwT = 0.55; this.inspectT = 0; }

  // F: examine the weapon — rotates it to check the chamber then the magazine
  playInspect() {
    if (this.reloading || this.switching > 0 || this.inspectT > 0) return;
    this.inspectT = this.inspectDur;
  }

  isMelee() { return this.current.def.mode === 'melee'; }

  // full refill + cancel any in-flight animation state; used on match restart
  resetAll() {
    for (const w of this.weapons) {
      w.mag = w.def.magSize;
      w.reserve = w.def.reserveStart;
    }
    this.reloading = false;
    this.reloadT = 0;
    this.inspectT = 0;
    this.meleeT = 0;
    this.pumping = 0;
    this.switching = 0;
    this.cooldown = 0;
    this.throwT = 0;
    this.emptyReload = false;
    this.triggerHeld = false;
    this.wantAds = false;
    this.onAmmoChange && this.onAmmoChange();
  }

  // knife swing — returns true if a new swing started (main.js does the hit test).
  // heavy = stab (slower, more damage window), else slash.
  meleeSwing(heavy) {
    if (this.meleeT > 0 || this.switching > 0) return false;
    this.meleeType = heavy ? 1 : 0;
    this.meleeDur = heavy ? 0.5 : 0.36;
    this.meleeT = this.meleeDur;
    this.inspectT = 0;
    return true;
  }

  setTrigger(v) {
    this.triggerHeld = v;
    if (v) this.inspectT = 0; // firing cancels an inspect
    if (!v) this.semiReady = true;
  }

  // Called by game each frame; fires if allowed. Returns array of shots or null.
  tryFire(moving) {
    const w = this.current;
    const def = w.def;
    if (def.mode === 'melee') return null; // knife never fires bullets
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

    // flash — bigger, brighter, randomized
    this.flashTime = 0.05;
    const fs = 1.0 + Math.random() * 0.9;
    this.flashMesh.scale.set(fs, fs, 0.9 + Math.random() * 0.8);
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

    // reload timeline (empty reloads run longer and add a bolt release)
    if (this.reloading) {
      this.reloadT += dt;
      const T = def.reloadTime * (this.emptyReload ? 1.2 : 1);
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
      // empty reload: slap the bolt/charging handle home near the end
      if (this.emptyReload && t > 0.9) {
        const k = Math.sin(Math.min(1, (t - 0.9) / 0.1) * Math.PI);
        this.rig.position.z = k * 0.05;
        if (!this.reloadStagePlayed[3] && t > 0.94) { this.audio.reloadStage(2); this.reloadStagePlayed[3] = true; }
      }
      if (this.reloadT >= T) {
        const need = def.magSize - w.mag;
        const take = Math.min(need, w.reserve);
        w.mag += take;
        w.reserve -= take;
        this.reloading = false;
        this.emptyReload = false;
        this.rig.rotation.set(0, 0, 0);
        this.rig.position.set(0, 0, 0);
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

    // reciprocating charging handle / bolt carrier: slams rearward with recoil
    // and rides back forward as the kick recovers.
    const cur = this.current;
    if (cur.boltMesh) {
      const cycle = Math.min(1, this.kick / (def.kickback || 0.06));
      cur.boltMesh.position.z = cur.boltHome.z + cycle * cur.boltThrow;
    }

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

    // tactical sprint: lower and cant the weapon while running (raises the
    // instant you aim, fire, reload or inspect)
    const wantSprint = !!ctx.sprint && !this.wantAds && !this.triggerHeld &&
      !this.reloading && this.switching === 0 && this.inspectT <= 0 && this.pumping <= 0;
    this.sprintAmt += ((wantSprint ? 1 : 0) - this.sprintAmt) * Math.min(1, dt * 9);
    if (this.sprintAmt > 0.001) {
      const s = this.sprintAmt;
      model.position.x += s * 0.06;
      model.position.y += -s * 0.09;
      model.position.z += -s * 0.05;
      model.rotation.x += s * 0.5;
      model.rotation.z += -s * 0.5;
      model.rotation.y += s * 0.32;
    }

    // idle breathing — subtle rise/fall, a touch more present while aiming
    this.breatheT += dt;
    const breatheAmp = 0.0045 * (0.5 + this.adsAmount * 0.8) * (1 - this.sprintAmt);
    model.position.y += Math.sin(this.breatheT * 1.6) * breatheAmp;
    model.rotation.x += Math.sin(this.breatheT * 1.6 + 0.4) * breatheAmp * 0.6;

    // weapon inspect (F): raise + rotate to check the chamber, tilt to the
    // magazine, then settle back. Beats start/end at zero so cancelling (by
    // firing/aiming) can't pop.
    if (this.inspectT > 0) {
      this.inspectT = Math.max(0, this.inspectT - dt);
      const tt = 1 - this.inspectT / this.inspectDur;
      let ry = 0, rx = 0, rz = 0, py2 = 0, pz2 = 0;
      if (tt < 0.42) {
        const k = tt / 0.42;
        ry = k * 0.95; rz = k * 0.5; rx = -k * 0.3; py2 = k * 0.05; pz2 = k * 0.09;
      } else if (tt < 0.72) {
        const k = (tt - 0.42) / 0.3;
        ry = 0.95 - k * 0.45; rx = -0.3 + k * 1.05; rz = 0.5 - k * 0.2; py2 = 0.05 - k * 0.13; pz2 = 0.09 + k * 0.04;
      } else {
        const k = (tt - 0.72) / 0.28;
        ry = 0.5 * (1 - k); rx = 0.75 * (1 - k); rz = 0.3 * (1 - k); py2 = -0.08 * (1 - k); pz2 = 0.13 * (1 - k);
      }
      model.rotation.y += ry;
      model.rotation.x += rx;
      model.rotation.z += rz;
      model.position.y += py2;
      model.position.z += pz2;
    }

    // knife swing: a fast wind-up then a strike, easing back to guard.
    if (this.meleeT > 0) {
      this.meleeT = Math.max(0, this.meleeT - dt);
      const tt = 1 - this.meleeT / this.meleeDur;       // 0..1
      const strike = Math.sin(Math.min(1, tt / 0.55) * Math.PI); // peak mid-swing
      if (this.meleeType === 1) {
        // stab: thrust forward + slight downward angle
        model.position.z += -strike * 0.34;
        model.position.y += -strike * 0.03;
        model.rotation.x += -strike * 0.25;
      } else {
        // slash: sweep across from upper-right to lower-left
        model.position.x += (0.14 - strike * 0.34);
        model.position.y += strike * 0.05;
        model.rotation.z += (0.5 - strike * 1.1);
        model.rotation.y += strike * 0.5;
      }
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
      this.flashMesh.material.opacity = on ? 1.0 : 0;
      this.flashLight.position.copy(mLocal);
      this.flashLight.intensity = on ? 34 + Math.random() * 12 : 0;
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
