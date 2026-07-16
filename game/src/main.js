import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

import { World, resolveCollisions } from './world.js';
import { AudioEngine } from './audio.js';
import { Effects } from './effects.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

import { WeaponSystem, WEAPON_DEFS } from './weapons.js';
import { Player } from './player.js';
import { Enemy, pickEnemyType } from './enemy.js';
import { loadEnemyTemplate } from './modelLoader.js';

// ============================================================ DOM refs
const $ = (id) => document.getElementById(id);
const appEl = $('app');
const hud = $('hud');
const crosshair = $('crosshair');
const hitmarker = $('hitmarker');
const healthBar = $('health-bar');
const healthNum = $('health-num');
const ammoMag = $('ammo-mag');
const ammoReserve = $('ammo-reserve');
const weaponName = $('weapon-name');
const fireMode = $('fire-mode');
const grenadeCountEl = $('grenade-count');
const reloadHint = $('reload-hint');
const waveNum = $('wave-num');
const scoreNum = $('score-num');
const enemiesNum = $('enemies-num');
const minimapCanvas = $('minimap');
const killfeed = $('killfeed');
const compassStrip = $('compass-strip');
const compassEl = $('compass');
const announce = $('announce');
const announceMain = $('announce-main');
const announceSub = $('announce-sub');
const hintEl = $('hint');
const damageVignette = $('damage-vignette');
const lowhpVignette = $('lowhp-vignette');
const screenFlash = $('screen-flash');
const scopeOverlay = $('scope-overlay');
const adsReticle = $('ads-reticle');
const loadingEl = $('loading');

const menuMain = $('menu-main');
const menuControls = $('menu-controls');
const menuSettings = $('menu-settings');
const menuPause = $('menu-pause');
const menuDeath = $('menu-death');

const setSens = $('set-sens'), setSensVal = $('set-sens-val');
const setFov = $('set-fov'), setFovVal = $('set-fov-val');
const setVol = $('set-vol'), setVolVal = $('set-vol-val');
const setQuality = $('set-quality');

const dsScore = $('ds-score'), dsKills = $('ds-kills'), dsHs = $('ds-hs'), dsAcc = $('ds-acc');
const deathWaveSub = $('death-wave-sub');

// ============================================================ renderer / scene
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.14;
renderer.outputColorSpace = THREE.SRGBColorSpace;
appEl.appendChild(renderer.domElement);
const canvas = renderer.domElement;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80, innerWidth / innerHeight, 0.05, 500);

let quality = 'high';
const audio = new AudioEngine();
const effects = new Effects(scene, audio);
let world = new World(scene, quality);
const weapons = new WeaponSystem(camera, audio, effects);
const player = new Player(camera, world, audio);

// the first-person weapon/hands are children of the camera, so the camera must
// be part of the scene graph for them to render.
scene.add(camera);

// external rigged enemy body — loaded once, cloned per spawn. Best-effort:
// stays null (procedural fallback) if the model can't be fetched/parsed.
let enemyTemplate = null;
const enemyTemplateReady = loadEnemyTemplate().then((t) => { enemyTemplate = t; }).catch(() => {});

// ---- post-processing ----
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.42, 0.55, 0.86);
composer.addPass(bloomPass);

const vignetteShader = {
  uniforms: { tDiffuse: { value: null }, amount: { value: 0.55 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      float vig = 1.0 - smoothstep(0.35, 0.9, length(d)) * amount;
      c.rgb *= vig;
      gl_FragColor = c;
    }`,
};
const vignettePass = new ShaderPass(vignetteShader);
composer.addPass(vignettePass);

// FXAA edge smoothing (the bloom composer path can't use MSAA)
const fxaaPass = new ShaderPass(FXAAShader);
const setFxaaRes = () => {
  const pr = renderer.getPixelRatio();
  fxaaPass.material.uniforms.resolution.value.set(1 / (innerWidth * pr), 1 / (innerHeight * pr));
};
setFxaaRes();
composer.addPass(fxaaPass);
composer.addPass(new OutputPass());

function applyQualityGraphics() {
  if (quality === 'low') {
    renderer.setPixelRatio(1);
    bloomPass.enabled = false;
    renderer.shadowMap.enabled = false;
  } else if (quality === 'medium') {
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    bloomPass.enabled = true;
    renderer.shadowMap.enabled = true;
  } else {
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    bloomPass.enabled = true;
    renderer.shadowMap.enabled = true;
  }
  if (typeof setFxaaRes === 'function') setFxaaRes();
}
applyQualityGraphics();

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
  bloomPass.setSize(innerWidth, innerHeight);
  setFxaaRes();
});

// ============================================================ game state
const G = {
  state: 'menu', // menu | playing | paused | dead
  wave: 0,
  score: 0,
  kills: 0,
  headshots: 0,
  shotsFired: 0,
  shotsHit: 0,
  grenades: 3,
  maxGrenades: 3,
  grenadeCooldown: 0,
  settingsReturnTo: 'main',
};

let enemies = [];
let grenadesActive = [];
let pickups = [];
let waveTimer = 0;
let waveState = 'incoming'; // incoming | active | clear
let waveClearTimer = 0;

const keys = { forward: 0, right: 0, jump: false, sprint: false, crouch: false };
const rawKeys = {};

// ============================================================ helpers
function showOverlay(el) { el.classList.remove('hidden'); }
function hideOverlay(el) { el.classList.add('hidden'); }

function announceText(main, sub, dur = 3000) {
  announceMain.textContent = main;
  announceSub.textContent = sub || '';
  announce.classList.remove('show');
  void announce.offsetWidth;
  announce.classList.add('show');
}

function showHint(text, ms = 1400) {
  hintEl.textContent = text;
  hintEl.classList.add('show');
  clearTimeout(showHint._t);
  showHint._t = setTimeout(() => hintEl.classList.remove('show'), ms);
}

function addKillfeed(name, headshot) {
  const row = document.createElement('div');
  row.className = 'kf-entry' + (headshot ? ' hs' : '');
  row.innerHTML = `<span class="who">SEN</span> ${headshot ? '➤ headshot ➤' : '➤'} ${name}`;
  killfeed.appendChild(row);
  setTimeout(() => row.remove(), 3600);
  while (killfeed.children.length > 5) killfeed.removeChild(killfeed.firstChild);
}

const dmgDirPool = [];
function flashDamageDirection(fromPos) {
  const toAttacker = new THREE.Vector2(fromPos.x - player.pos.x, fromPos.z - player.pos.z);
  if (toAttacker.lengthSq() < 0.0001) return;
  const worldAngle = Math.atan2(toAttacker.x, toAttacker.y);
  const screenAngle = worldAngle - player.yaw;
  let el = dmgDirPool.find((d) => !d.busy);
  if (!el) {
    const div = document.createElement('div');
    div.className = 'dmg-dir';
    hud.appendChild(div);
    el = { div, busy: false };
    dmgDirPool.push(el);
  }
  el.busy = true;
  el.div.style.transform = `rotate(${screenAngle}rad)`;
  el.div.style.opacity = '1';
  el.div.style.transition = 'none';
  requestAnimationFrame(() => {
    el.div.style.transition = 'opacity 0.9s ease';
    el.div.style.opacity = '0';
  });
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.busy = false; }, 950);
}

function raySphere(origin, dir, center, radius) {
  const oc = new THREE.Vector3().subVectors(origin, center);
  const b = 2 * dir.dot(oc);
  const c = oc.dot(oc) - radius * radius;
  const disc = b * b - 4 * c;
  if (disc < 0) return null;
  const t = (-b - Math.sqrt(disc)) / 2;
  return t > 0 ? t : null;
}

// ============================================================ HUD updates
function updateAmmoHud() {
  const w = weapons.current;
  const def = w.def;
  weaponName.textContent = def.name;
  fireMode.textContent = def.modeLabel;
  ammoMag.textContent = w.mag;
  ammoReserve.textContent = ' / ' + w.reserve;
  ammoMag.classList.toggle('low', w.mag <= Math.ceil(def.magSize * 0.25));
  reloadHint.style.display = (w.mag === 0 && w.reserve > 0 && !weapons.reloading) ? 'block' : 'none';
}
weapons.onAmmoChange = updateAmmoHud;
weapons.onRecoil = (pitch, yaw) => {
  player.pitch = Math.max(-Math.PI / 2 + 0.02, Math.min(Math.PI / 2 - 0.02, player.pitch + pitch));
  player.yaw += yaw;
};

function updateHealthHud() {
  const pct = Math.max(0, player.hp / player.maxHp) * 100;
  healthBar.style.width = pct + '%';
  healthBar.classList.toggle('low', pct < 30);
  healthNum.textContent = Math.ceil(player.hp);
  lowhpVignette.style.opacity = pct < 25 ? (0.4 + 0.3 * Math.abs(Math.sin(performance.now() / 300))) : 0;
}

function updateScoreHud() {
  waveNum.textContent = G.wave;
  scoreNum.textContent = G.score;
  enemiesNum.textContent = enemies.filter((e) => !e.dead).length;
}

function updateGrenadeHud() {
  grenadeCountEl.textContent = `✚ EL BOMBASI ×${G.grenades} [G]`;
}

// compass ticks built once
const DIRS = ['K', 'KD', 'D', 'GD', 'G', 'GB', 'B', 'KB'];
const PX_PER_DEG = 4;
(function buildCompass() {
  for (let d = -60; d <= 420; d += 15) {
    const tick = document.createElement('div');
    const major = d % 45 === 0;
    tick.className = 'tick' + (major ? ' major' : '');
    tick.style.left = ((d + 60) * PX_PER_DEG) + 'px';
    if (major) {
      const idx = (((d % 360) + 360) % 360) / 45;
      tick.textContent = DIRS[idx];
    } else {
      tick.textContent = '·';
    }
    compassStrip.appendChild(tick);
  }
})();
function updateCompass() {
  let deg = THREE.MathUtils.radToDeg(player.yaw) % 360;
  if (deg < 0) deg += 360;
  const containerW = compassEl.clientWidth || 320;
  compassStrip.style.transform = `translateX(${containerW / 2 - (deg + 60) * PX_PER_DEG}px)`;
}

// minimap
const mmCtx = minimapCanvas.getContext('2d');
const MM_RANGE = 55;
function drawMinimap() {
  const w = minimapCanvas.width, h = minimapCanvas.height;
  mmCtx.clearRect(0, 0, w, h);
  mmCtx.fillStyle = 'rgba(6,10,14,0.4)';
  mmCtx.fillRect(0, 0, w, h);
  const scale = (w / 2) / MM_RANGE;
  mmCtx.save();
  mmCtx.translate(w / 2, h / 2);
  // colliders as faint boxes
  mmCtx.fillStyle = 'rgba(140,150,160,0.28)';
  for (const c of world.colliders) {
    const cx = (c.min.x + c.max.x) / 2 - player.pos.x;
    const cz = (c.min.z + c.max.z) / 2 - player.pos.z;
    if (Math.abs(cx) > MM_RANGE + 10 || Math.abs(cz) > MM_RANGE + 10) continue;
    const sx = (c.max.x - c.min.x) * scale;
    const sz = (c.max.z - c.min.z) * scale;
    mmCtx.fillRect(cx * scale - sx / 2, cz * scale - sz / 2, sx, sz);
  }
  // enemies
  for (const e of enemies) {
    if (e.dead) continue;
    const ex = e.pos.x - player.pos.x, ez = e.pos.z - player.pos.z;
    if (Math.hypot(ex, ez) > MM_RANGE) continue;
    mmCtx.fillStyle = e.state === 'combat' ? '#ff4b3e' : '#ffb340';
    mmCtx.beginPath();
    mmCtx.arc(ex * scale, ez * scale, 3, 0, Math.PI * 2);
    mmCtx.fill();
  }
  mmCtx.restore();
  // player arrow (fixed north-up, center)
  mmCtx.save();
  mmCtx.translate(w / 2, h / 2);
  mmCtx.rotate(player.yaw);
  mmCtx.fillStyle = '#ffffff';
  mmCtx.beginPath();
  mmCtx.moveTo(0, -7);
  mmCtx.lineTo(5, 6);
  mmCtx.lineTo(-5, 6);
  mmCtx.closePath();
  mmCtx.fill();
  mmCtx.restore();
}

// ============================================================ shooting / hit detection
function processShots(shots) {
  const raycaster = new THREE.Raycaster();
  for (const shot of shots) {
    G.shotsFired++;
    const def = shot.def;
    let bestDist = def.range;
    let hitType = null; // 'enemy' | 'env' | 'barrel'
    let hitEnemy = null, hitHeadshot = false, hitPoint = null, hitNormal = null, hitObject = null;

    // enemies
    for (const e of enemies) {
      if (e.dead) continue;
      const head = new THREE.Vector3(); e.headWorldPos(head);
      const chest = new THREE.Vector3(); e.chestWorldPos(chest);
      const tHead = raySphere(shot.origin, shot.dir, head, 0.16);
      if (tHead !== null && tHead < bestDist) {
        bestDist = tHead; hitType = 'enemy'; hitEnemy = e; hitHeadshot = true;
        hitPoint = shot.origin.clone().addScaledVector(shot.dir, tHead);
      }
      const tChest = raySphere(shot.origin, shot.dir, chest, 0.32);
      if (tChest !== null && tChest < bestDist) {
        bestDist = tChest; hitType = 'enemy'; hitEnemy = e; hitHeadshot = false;
        hitPoint = shot.origin.clone().addScaledVector(shot.dir, tChest);
      }
    }

    // environment
    raycaster.set(shot.origin, shot.dir);
    raycaster.far = def.range;
    const envHits = raycaster.intersectObjects(world.raycastMeshes, false);
    if (envHits.length && envHits[0].distance < bestDist) {
      bestDist = envHits[0].distance;
      hitType = envHits[0].object.userData.barrel ? 'barrel' : 'env';
      hitPoint = envHits[0].point;
      hitNormal = envHits[0].face ? envHits[0].face.normal.clone().transformDirection(envHits[0].object.matrixWorld) : shot.dir.clone().negate();
      hitObject = envHits[0].object;
    }

    // tracer visual from muzzle
    const muzzleWorld = camera.localToWorld(weapons.muzzleWorldLocal().clone());
    effects.spawnTracer(muzzleWorld, shot.dir, hitPoint ? bestDist : def.range * 0.6);

    if (hitType === 'enemy') {
      G.shotsHit++;
      const dmg = def.damage * (hitHeadshot ? def.headshotMult : 1);
      const wasAlive = !hitEnemy.dead;
      hitEnemy.takeDamage(dmg, hitHeadshot, hitPoint, shot.dir);
      audio.hitmarker(hitHeadshot);
      hitmarker.classList.remove('show', 'kill');
      void hitmarker.offsetWidth;
      hitmarker.classList.add('show');
      if (hitEnemy.dead && wasAlive) {
        hitmarker.classList.add('kill');
        G.kills++;
        if (hitHeadshot) G.headshots++;
        G.score += hitHeadshot ? 150 : 100;
        addKillfeed('DÜŞMAN', hitHeadshot);
        updateScoreHud();
      }
    } else if (hitType === 'barrel') {
      const barrel = hitObject.userData.barrel;
      damageBarrel(barrel, def.damage);
      effects.spawnImpact(hitPoint, hitNormal, 'metal');
    } else if (hitType === 'env') {
      const kind = hitObject && hitObject.geometry && hitObject.geometry.type === 'PlaneGeometry' ? 'dust' : 'metal';
      effects.spawnImpact(hitPoint, hitNormal, kind);
    }
  }
}

function damageBarrel(barrel, dmg) {
  if (!barrel.alive) return;
  barrel.hp -= dmg;
  if (barrel.hp <= 0) detonateBarrel(barrel);
}

function detonateBarrel(barrel) {
  if (!barrel.alive) return;
  world.removeBarrel(barrel);
  explodeAt(barrel.pos, 7, 90);
  flashScreen();
}

function flashScreen() {
  screenFlash.style.transition = 'none';
  screenFlash.style.opacity = '0.85';
  requestAnimationFrame(() => {
    screenFlash.style.transition = 'opacity 0.4s ease';
    screenFlash.style.opacity = '0';
  });
}

function explodeAt(pos, radius, maxDamage) {
  effects.spawnExplosion(pos);
  // player
  const dPlayer = pos.distanceTo(player.pos.clone().add(new THREE.Vector3(0, 0.9, 0)));
  if (dPlayer < radius) {
    const dmg = maxDamage * (1 - dPlayer / radius);
    player.takeDamage(dmg, pos);
  }
  // enemies
  for (const e of enemies) {
    if (e.dead) continue;
    const d = pos.distanceTo(e.pos.clone().add(new THREE.Vector3(0, 0.9, 0)));
    if (d < radius) {
      const dmg = maxDamage * (1 - d / radius);
      const wasAlive = !e.dead;
      e.takeDamage(dmg, false, e.pos.clone().add(new THREE.Vector3(0, 0.9, 0)), pos.clone().sub(e.pos).normalize());
      if (e.dead && wasAlive) {
        G.kills++; G.score += 100;
        addKillfeed('DÜŞMAN (patlama)', false);
        updateScoreHud();
      }
    }
  }
  // chain barrels
  for (const b of world.barrels) {
    if (!b.alive) continue;
    const d = pos.distanceTo(b.pos);
    if (d < radius * 1.1 && d > 0.05) {
      setTimeout(() => detonateBarrel(b), 90 + Math.random() * 120);
    }
  }
}

// ============================================================ grenades
function throwGrenade() {
  if (G.grenades <= 0 || G.grenadeCooldown > 0) return;
  if (weapons.reloading || weapons.switching > 0) return;
  G.grenades--;
  G.grenadeCooldown = 0.6;
  updateGrenadeHud();
  audio.grenadePin();
  weapons.playThrow();
  const dir = new THREE.Vector3();
  camera.getWorldDirection(dir);
  const origin = new THREE.Vector3();
  camera.getWorldPosition(origin);
  origin.addScaledVector(dir, 0.4).add(new THREE.Vector3(0, -0.1, 0));
  const vel = dir.clone().multiplyScalar(16).add(new THREE.Vector3(0, 4.2, 0));
  const spin = new THREE.Vector3((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 12, 8 + Math.random() * 6);
  grenadesActive.push({ pos: origin, vel, spin, fuse: 1.7, mesh: makeGrenadeMesh(origin) });
}

function makeGrenadeMesh(pos) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.SphereGeometry(0.072, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0x323f2b, roughness: 0.7, metalness: 0.25 })
  );
  body.scale.y = 1.18;
  // segmentation grooves
  const bandMat = new THREE.MeshStandardMaterial({ color: 0x1e261a, roughness: 0.85 });
  for (const ry of [0.024, -0.024]) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.007, 6, 14), bandMat);
    band.rotation.x = Math.PI / 2;
    band.position.y = ry;
    g.add(band);
  }
  const bandV = new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.007, 6, 14), bandMat);
  g.add(bandV);
  // fuse cap + safety lever
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.036, 0.045, 8),
    new THREE.MeshStandardMaterial({ color: 0x5f5f56, roughness: 0.5, metalness: 0.6 }));
  cap.position.y = 0.088;
  const lever = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.085, 0.03),
    new THREE.MeshStandardMaterial({ color: 0x8a8a80, roughness: 0.4, metalness: 0.7 }));
  lever.position.set(0.036, 0.07, 0);
  g.add(body, cap, lever);
  g.position.copy(pos);
  g.traverse((m) => { if (m.isMesh) m.castShadow = true; });
  scene.add(g);
  return g;
}

function updateGrenades(dt) {
  G.grenadeCooldown = Math.max(0, G.grenadeCooldown - dt);
  for (let i = grenadesActive.length - 1; i >= 0; i--) {
    const g = grenadesActive[i];
    g.vel.y -= 9.8 * dt;
    g.pos.addScaledVector(g.vel, dt);
    if (g.pos.y < 0.08) {
      g.pos.y = 0.08;
      if (g.vel.y < -1) {
        g.vel.y *= -0.45;
        g.vel.x *= 0.7; g.vel.z *= 0.7;
        audio.grenadeBounce(g.pos);
      } else {
        g.vel.y = 0;
      }
    }
    resolveCollisions(g.pos, 0.08, 0.16, world.colliders, g.vel);
    g.mesh.position.copy(g.pos);
    // tumble through the air, settling as it slows on the ground
    const spinScale = g.pos.y < 0.12 ? 0.25 : 1;
    g.mesh.rotation.x += g.spin.x * dt * spinScale;
    g.mesh.rotation.y += g.spin.y * dt * spinScale;
    g.mesh.rotation.z += g.spin.z * dt * spinScale;
    g.fuse -= dt;
    if (g.fuse <= 0) {
      scene.remove(g.mesh);
      explodeAt(g.pos.clone(), 6.5, 130);
      grenadesActive.splice(i, 1);
    }
  }
}

// ============================================================ waves
function startWave(n) {
  G.wave = n;
  waveState = 'incoming';
  waveTimer = n === 1 ? 1.2 : 2.6;
  announceText(`DALGA ${n}`, 'DÜŞMANLAR YAKLAŞIYOR');
}

function spawnWaveEnemies() {
  const count = 3 + Math.floor(G.wave * 1.7);
  const difficulty = 1 + (G.wave - 1) * 0.18;
  const spawns = world.enemySpawns;
  for (let i = 0; i < count; i++) {
    const sp = spawns[Math.floor(Math.random() * spawns.length)].clone();
    sp.x += (Math.random() - 0.5) * 4;
    sp.z += (Math.random() - 0.5) * 4;
    const e = new Enemy(scene, world, effects, audio, sp, difficulty, {
      template: enemyTemplate,
      type: pickEnemyType(G.wave),
    });
    e.onPlayerHit = (dmg, fromPos) => { player.takeDamage(dmg, fromPos); flashDamageDirection(fromPos); };
    e.onAlert = (pos) => {
      for (const other of enemies) if (!other.dead) other.alert(pos);
    };
    e.onDeath = (en) => dropLoot(en.pos.clone());
    enemies.push(e);
  }
  audio.waveStart();
  updateScoreHud();
}

function updateWaves(dt) {
  if (waveState === 'incoming') {
    waveTimer -= dt;
    if (waveTimer <= 0) {
      spawnWaveEnemies();
      waveState = 'active';
    }
  } else if (waveState === 'active') {
    const alive = enemies.some((e) => !e.dead);
    if (!alive && enemies.length > 0) {
      waveState = 'clear';
      waveClearTimer = 3;
      audio.waveClear();
      announceText('DALGA TEMİZLENDİ', 'Bir sonraki dalga hazırlanıyor…');
      maybeSpawnPickup();
      G.grenades = Math.min(G.maxGrenades, G.grenades + 1);
      updateGrenadeHud();
    }
  } else if (waveState === 'clear') {
    waveClearTimer -= dt;
    if (waveClearTimer <= 0) {
      enemies = enemies.filter((e) => !e.expired);
      startWave(G.wave + 1);
    }
  }
}

// ============================================================ pickups
function maybeSpawnPickup() {
  const spawns = world.enemySpawns;
  const base = spawns[Math.floor(Math.random() * spawns.length)];
  if (player.hp < 75) spawnPickup(base.clone().add(new THREE.Vector3(2, 0, 2)), 'health');
  spawnPickup(base.clone().add(new THREE.Vector3(-2, 0, -2)), 'ammo');
}

function spawnPickup(pos, kind) {
  const color = kind === 'health' ? 0x4be05a : 0xffcf6b;
  const mesh = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.28, 0),
    new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.8, roughness: 0.3 })
  );
  mesh.position.copy(pos).add(new THREE.Vector3(0, 0.6, 0));
  const light = new THREE.PointLight(color, 3, 5);
  light.position.copy(mesh.position);
  scene.add(mesh, light);
  pickups.push({ mesh, light, kind, pos: mesh.position.clone(), t: 0, ground: false, ttl: Infinity });
}

// looted from a downed enemy: a small crate/med-kit lying on the ground.
function dropLoot(pos) {
  const r = Math.random();
  let kind;
  if (r < 0.14) kind = 'health';
  else if (r < 0.82) kind = 'ammo';
  else return; // some enemies drop nothing
  const g = new THREE.Group();
  if (kind === 'health') {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.2, 0.32),
      new THREE.MeshStandardMaterial({ color: 0xdadada, roughness: 0.6 })));
    const crossMat = new THREE.MeshStandardMaterial({ color: 0xd83b3b, emissive: 0x5a0f0f, emissiveIntensity: 0.6, roughness: 0.5 });
    const c1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 0.07), crossMat); c1.position.y = 0.11;
    const c2 = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.05, 0.2), crossMat); c2.position.y = 0.11;
    g.add(c1, c2);
  } else {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.22, 0.26),
      new THREE.MeshStandardMaterial({ color: 0x47502f, roughness: 0.75, metalness: 0.2 })));
    const lid = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.06, 0.28),
      new THREE.MeshStandardMaterial({ color: 0x373f26, roughness: 0.75 }));
    lid.position.y = 0.13;
    const band = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.24, 0.28),
      new THREE.MeshStandardMaterial({ color: 0xcaa63e, emissive: 0x2a2208, emissiveIntensity: 0.4, roughness: 0.5, metalness: 0.4 }));
    g.add(lid, band);
  }
  g.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 0.5, 0.22, (Math.random() - 0.5) * 0.5));
  g.rotation.y = Math.random() * Math.PI;
  g.traverse((m) => { if (m.isMesh) m.castShadow = true; });
  scene.add(g);
  pickups.push({ mesh: g, light: null, kind, pos: g.position.clone(), t: Math.random() * 3, ground: true, ttl: 22 });
}

function updatePickups(dt) {
  for (let i = pickups.length - 1; i >= 0; i--) {
    const p = pickups[i];
    p.t += dt;
    if (p.ground) {
      // sit on the ground with a slow spin and gentle bob; fade out near end of life
      p.mesh.rotation.y += dt * 1.1;
      p.mesh.position.y = p.pos.y + Math.sin(p.t * 2.2) * 0.04;
      p.ttl -= dt;
      if (p.ttl <= 0) { scene.remove(p.mesh); pickups.splice(i, 1); continue; }
    } else {
      p.mesh.rotation.y += dt * 2;
      p.mesh.position.y = p.pos.y + Math.sin(p.t * 2) * 0.08;
    }
    if (p.mesh.position.distanceTo(player.pos.clone().add(new THREE.Vector3(0, 1, 0))) < 1.4) {
      audio.pickup(p.kind);
      if (p.kind === 'health') {
        player.heal(p.ground ? 25 : 40);
        showHint(p.ground ? 'SAĞLIK KİTİ ALINDI' : 'SAĞLIK TOPLANDI');
      } else if (p.ground) {
        // loot refills the equipped weapon
        const def = weapons.current.def;
        weapons.addReserve(def.id, Math.ceil(def.magSize * 0.8));
        showHint('MERMİ YAĞMALANDI');
      } else {
        weapons.addReserve('all', 0);
        showHint('MÜHİMMAT TOPLANDI');
      }
      scene.remove(p.mesh);
      if (p.light) scene.remove(p.light);
      pickups.splice(i, 1);
    }
  }
}

// ============================================================ input
function setKeyState(code, down) {
  rawKeys[code] = down;
  keys.forward = (rawKeys['KeyW'] ? 1 : 0) - (rawKeys['KeyS'] ? 1 : 0);
  keys.right = (rawKeys['KeyD'] ? 1 : 0) - (rawKeys['KeyA'] ? 1 : 0);
  keys.jump = !!rawKeys['Space'];
  keys.sprint = !!rawKeys['ShiftLeft'] || !!rawKeys['ShiftRight'];
  keys.crouch = !!rawKeys['KeyC'];
}

addEventListener('keydown', (e) => {
  setKeyState(e.code, true);
  if (G.state !== 'playing') return;
  if (e.code === 'KeyR') weapons.startReload();
  if (e.code === 'KeyG') throwGrenade();
  if (e.code === 'Digit1') weapons.switchTo(0);
  if (e.code === 'Digit2') weapons.switchTo(1);
  if (e.code === 'Digit3') weapons.switchTo(2);
  if (e.code === 'Digit4') weapons.switchTo(3);
});
addEventListener('keyup', (e) => setKeyState(e.code, false));

addEventListener('mousedown', (e) => {
  if (G.state !== 'playing' || document.pointerLockElement !== canvas) return;
  if (e.button === 0) weapons.setTrigger(true);
  if (e.button === 2) weapons.setAds(true);
});
addEventListener('mouseup', (e) => {
  if (e.button === 0) weapons.setTrigger(false);
  if (e.button === 2) weapons.setAds(false);
});
addEventListener('contextmenu', (e) => e.preventDefault());
addEventListener('wheel', (e) => {
  if (G.state !== 'playing') return;
  weapons.cycle(e.deltaY > 0 ? 1 : -1);
});
addEventListener('mousemove', (e) => {
  if (G.state === 'playing' && document.pointerLockElement === canvas) {
    player.applyMouseMovement(e.movementX, e.movementY);
  }
});

document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement !== canvas && G.state === 'playing') {
    pauseGame();
  }
});

// ============================================================ menu wiring
$('btn-start').addEventListener('click', () => startGame());
$('btn-controls').addEventListener('click', () => { hideOverlay(menuMain); showOverlay(menuControls); });
$('btn-settings').addEventListener('click', () => { G.settingsReturnTo = 'main'; hideOverlay(menuMain); showOverlay(menuSettings); });
$('btn-resume').addEventListener('click', () => resumeGame());
$('btn-pause-settings').addEventListener('click', () => { G.settingsReturnTo = 'pause'; hideOverlay(menuPause); showOverlay(menuSettings); });
$('btn-quit').addEventListener('click', () => quitToMenu());
$('btn-retry').addEventListener('click', () => { hideOverlay(menuDeath); startGame(); });
$('btn-death-quit').addEventListener('click', () => { hideOverlay(menuDeath); quitToMenu(); });

document.querySelectorAll('[data-back]').forEach((btn) => {
  btn.addEventListener('click', () => {
    hideOverlay(menuControls);
    hideOverlay(menuSettings);
    if (G.settingsReturnTo === 'pause') showOverlay(menuPause);
    else showOverlay(menuMain);
  });
});

setSens.addEventListener('input', () => { player.sensitivity = parseFloat(setSens.value); setSensVal.textContent = setSens.value; });
setFov.addEventListener('input', () => { player.baseFov = parseFloat(setFov.value); setFovVal.textContent = setFov.value; });
setVol.addEventListener('input', () => { audio.setVolume(parseFloat(setVol.value)); setVolVal.textContent = Math.round(setVol.value * 100) + '%'; });
setQuality.addEventListener('change', () => { quality = setQuality.value; applyQualityGraphics(); rebuildWorldForQuality(); });

function rebuildWorldForQuality() {
  // lighting/shadow quality only; geometry stays (avoids disrupting live game state)
  world.sun.castShadow = quality !== 'low';
}

async function startGame() {
  audio.init();
  audio.resume();
  audio.startAmbient();
  resetGameState();
  hideOverlay(menuMain); hideOverlay(menuDeath); hideOverlay(menuPause);
  showOverlay(loadingEl);
  // let the rigged enemy model finish loading (capped) so wave 1 already uses it
  await Promise.race([enemyTemplateReady, new Promise((r) => setTimeout(r, 4000))]);
  hideOverlay(loadingEl);
  hud.classList.add('visible');
  G.state = 'playing';
  canvas.requestPointerLock();
  startWave(1);
}

function resetGameState() {
  enemies.forEach((e) => e.destroy());
  enemies = [];
  grenadesActive.forEach((g) => scene.remove(g.mesh));
  grenadesActive = [];
  pickups.forEach((p) => { scene.remove(p.mesh); scene.remove(p.light); });
  pickups = [];
  G.wave = 0; G.score = 0; G.kills = 0; G.headshots = 0;
  G.shotsFired = 0; G.shotsHit = 0;
  G.grenades = G.maxGrenades;
  player.hp = player.maxHp;
  player.dead = false;
  player.pos.set(0, 0, 6);
  player.vel.set(0, 0, 0);
  player.yaw = Math.PI;
  player.pitch = 0;
  updateGrenadeHud();
  updateAmmoHud();
}

function pauseGame() {
  if (G.state !== 'playing') return;
  G.state = 'paused';
  showOverlay(menuPause);
}
function resumeGame() {
  hideOverlay(menuPause);
  hideOverlay(menuSettings);
  G.state = 'playing';
  canvas.requestPointerLock();
}
function quitToMenu() {
  G.state = 'menu';
  hud.classList.remove('visible');
  hideOverlay(menuPause); hideOverlay(menuDeath);
  showOverlay(menuMain);
  audio.stopAmbient();
  if (document.pointerLockElement === canvas) document.exitPointerLock();
}

addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && G.state === 'playing') {
    if (document.pointerLockElement === canvas) document.exitPointerLock();
    else pauseGame();
  }
});

player.onDeath = () => {
  G.state = 'dead';
  audio.gameOver();
  if (document.pointerLockElement === canvas) document.exitPointerLock();
  deathWaveSub.textContent = `${G.wave}. dalgada düştün`;
  dsScore.textContent = G.score;
  dsKills.textContent = G.kills;
  dsHs.textContent = G.headshots;
  dsAcc.textContent = G.shotsFired ? Math.round((G.shotsHit / G.shotsFired) * 100) + '%' : '0%';
  showOverlay(menuDeath);
};

// ============================================================ main loop
const clock = new THREE.Clock();

function frame() {
  const dt = Math.min(0.05, clock.getDelta());

  if (G.state === 'playing') {
    player.update(dt, keys);

    const look = player.consumeLookDelta();
    weapons.update(dt, { lookDeltaX: look.x, lookDeltaY: look.y, speed: player.speed, grounded: player.grounded, crouch: player.crouching });

    const shots = weapons.tryFire(player.speed > 0.5);
    if (shots) processShots(shots);

    for (const e of enemies) e.update(dt, player.pos, player.crouching, enemies);
    enemies = enemies.filter((e) => !e.expired);

    updateGrenades(dt);
    updatePickups(dt);
    updateWaves(dt);
    effects.update(dt);

    camera.fov = player.baseFov * weapons.currentFovMult() * (player.sprinting ? 1.045 : 1);
    camera.updateProjectionMatrix();

    // right-click ADS shows a red-dot reticle on non-sniper weapons; the
    // sniper keeps its full scope overlay.
    const showReticle = !weapons.isScoped() && weapons.adsAmount > 0.5;
    crosshair.classList.toggle('hidden', weapons.isScoped() || showReticle);
    scopeOverlay.classList.toggle('active', weapons.isScoped());
    adsReticle.classList.toggle('active', showReticle);

    audio.listener.pos = camera.position;
    audio.listener.fwd = camera.getWorldDirection(new THREE.Vector3());

    updateHealthHud();
    updateScoreHud();
    updateCompass();
    drawMinimap();
  }

  composer.render();
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
