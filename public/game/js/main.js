// CINDERFALL — bootstrap & orchestration.
// Owns the canvas stack (scene, light map, glow map), the fixed-timestep
// loop, game states (menu / play / pause / end), the lighting + bloom +
// grading composite, ambient particles and the attract-mode camera.

import { Input } from './engine/input.js';
import { Camera } from './engine/camera.js';
import { Particles, K, burstSparks, puffSmoke } from './engine/particles.js';
import { audio } from './engine/audio.js';
import { clamp, lerp, rand, randSpread, makeNoise1D } from './engine/math.js';
import { makeCanvas } from './art/paint.js';
import { buildSoldier, makeShadowSprite } from './art/soldier.js';
import { buildWeapons } from './art/weapons.js';
import { World, GROUND_Y, MAP_W } from './game/world.js';
import { FX } from './game/fx.js';
import { Player } from './game/player.js';
import { Enemy } from './game/enemy.js';
import { Hud } from './game/hud.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const hud = new Hud();
const params = new URLSearchParams(location.search);
const DEMO = params.has('demo');

let vw = 0, vh = 0, dpr = 1;
let lightCv, lightG, glowCv, glowG, grainCv;

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  vw = window.innerWidth; vh = window.innerHeight;
  canvas.width = vw * dpr; canvas.height = vh * dpr;
  const l = makeCanvas(vw * dpr, vh * dpr); lightCv = l.cv; lightG = l.g;
  const g = makeCanvas(vw * dpr, vh * dpr); glowCv = g.cv; glowG = g.g;
}
window.addEventListener('resize', resize);
resize();

// pre-rendered film grain
{
  const n = makeCanvas(256, 256);
  const img = n.g.createImageData(256, 256);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 118 + Math.random() * 22 | 0;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  n.g.putImageData(img, 0, 0);
  grainCv = n.cv;
}

const flickerNoise = makeNoise1D(7);

// scripted input for headless screenshots (?demo)
class DemoDriver {
  constructor() { this.t = 0; this.mouse = { x: 0, y: 0, down: false, clicked: false, rdown: false }; this._jump = false; }
  tick(dt) {
    this.t += dt;
    this.mouse.x = vw * 0.72; this.mouse.y = vh * 0.47;
    const t = this.t;
    this.mouse.down = (t > 1.2 && t < 2.0) || (t > 3.1 && t < 3.9);
    this._jump = t > 2.55 && t < 2.62 && !this._jumped;
    if (this._jump) this._jumped = true;
  }
  get moveX() { const t = this.t; return (t > 0.15 && t < 1.1) || (t > 2.05 && t < 2.75) ? 1 : 0; }
  get jump() { return this._jump; }
  get sprint() { return this.t > 2.05 && this.t < 2.75; }
  hit() { return false; }
  down() { return false; }
  endFrame() { this.mouse.clicked = false; }
}

const input = new Input(canvas);
const demoDriver = DEMO ? new DemoDriver() : null;

// ------------------------------------------------------------------ boot

const assets = {};
const raf = () => new Promise((r) => requestAnimationFrame(r));

async function boot() {
  hud.show('loading');
  hud.setLoad(0.05, 'PAINTING OPERATORS…');
  await raf();
  assets.ranger = buildSoldier('ranger');
  assets.phantom = buildSoldier('phantom');
  assets.shadow = makeShadowSprite();
  hud.setLoad(0.3, 'MACHINING WEAPONS…');
  await raf();
  assets.weapons = buildWeapons();
  hud.setLoad(0.5, 'BUILDING SECTOR 9…');
  await raf();
  assets.world = new World();
  hud.setLoad(0.9, 'CALIBRATING OPTICS…');
  await raf();
  game = new Game();
  hud.setLoad(1, 'READY');
  await raf();
  if (DEMO) game.deploy();
  else { hud.show('menu'); game.state = 'menu'; }
  requestAnimationFrame(frame);
}

// ------------------------------------------------------------------ game

const ENEMY_SPAWNS = [
  { x: 1080, min: 980, max: 1225, y: GROUND_Y - 40 },
  { x: 1650, min: 1440, max: 1690, y: GROUND_Y },
  { x: 2320, min: 2200, max: 2520, y: GROUND_Y },
  { x: 2950, min: 2760, max: 3050, y: GROUND_Y },
  { x: 3500, min: 3380, max: 3690, y: GROUND_Y },
  { x: 4080, min: 3960, max: 4140, y: GROUND_Y - 40 },
];

class Game {
  constructor() {
    this.world = assets.world;
    this.cam = new Camera();
    this.cam.zoom = parseFloat(params.get('zoom')) || 1.25;
    this.particles = new Particles();
    this.fx = new FX(this.particles, audio, this.cam, this.world);
    this.state = 'menu';
    this.time = 0;
    this.menuPanT = 0;
    this.emitT = { fire: 0, sparks: rand(1, 3), ash: 0 };
    this.endDelay = 0;
    this.chainQueue = [];
    this.reset();
    hud.bind({
      deploy: () => { audio.resume(); audio.ui(); this.deploy(); },
      resume: () => { audio.ui(); this.setState('play'); },
      restart: () => { audio.ui(); this.reset(); this.setState('play'); },
      quit: () => { audio.ui(); this.reset(); this.setState('menu'); },
    });
    canvas.addEventListener('mousedown', () => audio.resume(), { once: true });
  }

  reset() {
    this.player = new Player(assets.ranger, assets.shadow, assets.weapons, this.world, this.fx, this.cam, audio, hud);
    this.player.x = 260; this.player.y = GROUND_Y;
    this.enemies = ENEMY_SPAWNS.map((s) => {
      const e = new Enemy(assets.phantom, assets.shadow, assets.weapons.rifle, this.world, this.fx, audio, s.x, s.min, s.max);
      e.y = s.y;
      return e;
    });
    this.particles.pool.length = 0;
    this.fx.tracers.length = 0; this.fx.lights.length = 0; this.fx.slashes.length = 0;
    this.world.decalG.clearRect(0, 0, this.world.decalCv.width, this.world.decalCv.height);
    for (const b of this.world.barrels) { b.alive = true; b.hp = 30; }
    this.chainQueue.length = 0;
    this.endDelay = 0;
    this.startTime = this.time;
    this.cam.follow(this.player.x, this.player.y - 60, 0, 0, true);
    hud.setObjective(0, this.enemies.length);
  }

  deploy() {
    this.reset();
    this.setState('play');
    audio.resume();
    audio.startAmbience();
  }

  setState(s) {
    this.state = s;
    hud.show(s);
  }

  damageBarrel(b, dmg) {
    if (!b.alive) return;
    b.hp -= dmg;
    if (b.hp <= 0) this.explodeBarrel(b);
  }

  explodeBarrel(b) {
    if (!b.alive) return;
    b.alive = false;
    this.fx.explosion(b.x, b.y);
    const hurtRadius = 160;
    const blast = (ent, isPlayer) => {
      const d = Math.hypot(ent.x - b.x, (ent.y - 60) - (b.y - 10));
      if (d < hurtRadius) {
        const dmg = Math.round(lerp(95, 15, d / hurtRadius));
        const dir = Math.sign(ent.x - b.x) || 1;
        if (isPlayer) ent.hurt(dmg, dir); else ent.damage(dmg, dir, this.player);
        ent.vx += dir * lerp(420, 90, d / hurtRadius);
        ent.vy -= lerp(260, 40, d / hurtRadius);
        ent.onGround = false;
      }
    };
    blast(this.player, true);
    for (const e of this.enemies) if (e.deadT <= 0) blast(e, false);
    // chain nearby barrels with a short fuse
    for (const other of this.world.barrels) {
      if (other.alive && Math.abs(other.x - b.x) < 190) {
        this.chainQueue.push({ b: other, t: rand(0.12, 0.3) });
      }
    }
  }

  // ------------------------------------------------------------ update

  update(dt) {
    this.time += dt;
    const inp = DEMO ? demoDriver : input;
    if (DEMO) demoDriver.tick(dt);

    if (inp.hit && input.hit('Escape')) {
      if (this.state === 'play') this.setState('pause');
      else if (this.state === 'pause') this.setState('play');
    }
    if (this.state === 'pause') { input.endFrame(); return; }

    this.world.update(dt);
    this.fx.update(dt);
    this.particles.update(dt);
    this.ambient(dt);

    for (let i = this.chainQueue.length - 1; i >= 0; i--) {
      const c = this.chainQueue[i];
      if ((c.t -= dt) <= 0) { this.chainQueue.splice(i, 1); this.explodeBarrel(c.b); }
    }

    if (this.state === 'menu') {
      // attract mode: slow dolly across the block
      this.menuPanT += dt;
      const px = 900 + Math.sin(this.menuPanT * 0.06) * 620;
      this.cam.follow(px, GROUND_Y - 80, 0, dt);
      this.cam.update(dt, false, false);
      for (const e of this.enemies) e.update(dt, null, this);
      input.endFrame();
      return;
    }

    // play / end
    const p = this.player;
    hud.setAimScreen(inp.mouse.x, inp.mouse.y);
    if (this.state === 'play') {
      p.update(dt, { input: inp, enemies: this.enemies, game: this, vw, vh });
    } else {
      p.update(dt, { input: NULL_INPUT, enemies: this.enemies, game: this, vw, vh });
    }
    for (const e of this.enemies) e.update(dt, p, this);

    const kills = this.enemies.filter((e) => e.deadT > 0).length;
    hud.setObjective(kills, this.enemies.length);

    this.cam.follow(p.x, p.y - 60, Math.cos(p.aimWorld), dt);
    this.cam.update(dt, p.sprinting, Math.abs(p.vx) > 60);

    if (this.state === 'play') {
      if (p.deadT > 0) {
        this.endDelay += dt;
        if (this.endDelay > 2.4) this.finish(false);
      } else if (kills === this.enemies.length) {
        this.endDelay += dt;
        if (this.endDelay > 1.6) this.finish(true);
      }
    }
    input.endFrame();
  }

  finish(win) {
    const p = this.player;
    const acc = p.shots ? Math.round((p.hits / p.shots) * 100) : 0;
    const t = Math.round(this.time - this.startTime);
    hud.end(win, [
      `HOSTILES ELIMINATED — ${p.kills}`,
      `ACCURACY — ${acc}%`,
      `MISSION TIME — ${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`,
    ].join('<br>'));
    this.setState('end');
  }

  ambient(dt) {
    const E = this.emitT;
    // drifting ash
    E.ash -= dt;
    if (E.ash <= 0) {
      E.ash = 0.14;
      this.particles.spawn(K.ASH, {
        x: this.cam.x + randSpread(vw * 0.7), y: this.cam.y - vh * 0.55,
        vx: randSpread(9) - 5, vy: rand(9, 22),
        life: rand(7, 13), size: rand(0.8, 1.7),
        color: `rgba(196,190,182,${rand(0.25, 0.5)})`,
      });
    }
    // burn barrel
    for (const em of this.world.emitters) {
      if (em.kind === 'fire') {
        E.fire -= dt;
        if (E.fire <= 0) {
          E.fire = 0.07;
          this.particles.spawn(K.EMBER, {
            x: em.x + randSpread(5), y: em.y,
            vx: randSpread(14), vy: -rand(40, 90),
            life: rand(0.4, 1.1), size: rand(1.4, 2.8), drag: 1.5,
          });
          if (Math.random() < 0.3) {
            puffSmoke(this.particles, em.x, em.y - 8, 1, 'rgba(70,66,62,0.8)', { vy: -34, sizeMul: 0.8 });
          }
        }
      } else if (em.kind === 'sparks') {
        E.sparks -= dt;
        if (E.sparks <= 0) {
          E.sparks = rand(1.4, 3.6);
          burstSparks(this.particles, em.x, em.y, Math.PI / 2, 7, 0.7, 210);
          this.fx.addLight(em.x, em.y, 90, [180, 210, 255], 0.8, 0.12);
        }
      }
    }
  }

  // ------------------------------------------------------------ render

  render() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // background parallax stack (screen space)
    this.world.drawBackground(ctx, this.cam, vw, vh, this.time);

    // world layer
    ctx.save();
    this.cam.applyTransform(ctx, vw, vh);
    this.world.drawBack(ctx);
    for (const e of this.enemies) if (e.deadT > 0) e.draw(ctx);
    for (const e of this.enemies) if (e.deadT <= 0) e.draw(ctx);
    if (this.state !== 'menu') this.player.draw(ctx);
    this.particles.draw(ctx, false);
    this.fx.draw(ctx);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    this.particles.draw(ctx, true);
    ctx.restore();
    ctx.restore();

    // foreground silhouettes
    this.world.drawForeground(ctx, this.cam, vw, vh);

    this.compositeLighting();
    this.grade();
    if (this.state === 'play' && this.player.deadT <= 0) this.crosshair();
  }

  gatherLights() {
    const out = [];
    for (const l of this.world.getLights()) out.push(l);
    for (const l of this.fx.getLights()) out.push(l);
    return out;
  }

  compositeLighting() {
    const lights = this.gatherLights();
    // light map: ambient dusk level + additive lights, multiplied over scene.
    // Warmer and brighter toward street level — reads as the low sun's fill.
    lightG.setTransform(1, 0, 0, 1, 0, 0);
    lightG.globalCompositeOperation = 'source-over';
    const gsy = (vh / 2 + (GROUND_Y - this.cam.y) * this.cam.zoom) * dpr;
    const amb = lightG.createLinearGradient(0, 0, 0, Math.max(gsy, 1));
    amb.addColorStop(0, 'rgb(138,144,164)');
    amb.addColorStop(0.72, 'rgb(158,155,158)');
    amb.addColorStop(1, 'rgb(182,170,156)');
    lightG.fillStyle = amb;
    lightG.fillRect(0, 0, lightCv.width, lightCv.height);
    lightG.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.cam.applyTransform(lightG, vw, vh);
    lightG.globalCompositeOperation = 'lighter';

    glowG.setTransform(1, 0, 0, 1, 0, 0);
    glowG.globalCompositeOperation = 'source-over';
    glowG.clearRect(0, 0, glowCv.width, glowCv.height);
    glowG.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.cam.applyTransform(glowG, vw, vh);
    glowG.globalCompositeOperation = 'lighter';

    const t = this.time * 24;
    for (const l of lights) {
      let a = l.a;
      if (l.flicker) a *= 1 + flickerNoise(t + l.seed * 13) * l.flicker * 0.5;
      if (a <= 0.01) continue;
      // cheap view cull
      if (Math.abs(l.x - this.cam.x) > vw * 0.75 + l.r) continue;
      const [r, g2, b] = l.c;
      const grad = lightG.createRadialGradient(l.x, l.y, 0, l.x, l.y, l.r);
      grad.addColorStop(0, `rgba(${r},${g2},${b},${a})`);
      grad.addColorStop(1, `rgba(${r},${g2},${b},0)`);
      lightG.fillStyle = grad;
      lightG.beginPath(); lightG.arc(l.x, l.y, l.r, 0, Math.PI * 2); lightG.fill();
      const grad2 = glowG.createRadialGradient(l.x, l.y, 0, l.x, l.y, l.r * 0.7);
      grad2.addColorStop(0, `rgba(${r},${g2},${b},${a * 0.55})`);
      grad2.addColorStop(1, `rgba(${r},${g2},${b},0)`);
      glowG.fillStyle = grad2;
      glowG.beginPath(); glowG.arc(l.x, l.y, l.r * 0.7, 0, Math.PI * 2); glowG.fill();
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = 'multiply';
    ctx.drawImage(lightCv, 0, 0, canvas.width, canvas.height);
    // bloom
    ctx.globalCompositeOperation = 'screen';
    ctx.globalAlpha = 0.6;
    ctx.filter = 'blur(18px)';
    ctx.drawImage(glowCv, 0, 0, canvas.width, canvas.height);
    ctx.filter = 'none';
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  grade() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // warm key push
    ctx.globalCompositeOperation = 'overlay';
    ctx.fillStyle = 'rgba(255,176,108,0.09)';
    ctx.fillRect(0, 0, vw, vh);
    // cool shadow tint
    ctx.globalCompositeOperation = 'soft-light';
    ctx.fillStyle = 'rgba(52,72,120,0.12)';
    ctx.fillRect(0, 0, vw, vh);
    // vignette
    ctx.globalCompositeOperation = 'source-over';
    const v = ctx.createRadialGradient(vw / 2, vh / 2, Math.min(vw, vh) * 0.44, vw / 2, vh / 2, Math.max(vw, vh) * 0.74);
    v.addColorStop(0, 'rgba(5,6,10,0)');
    v.addColorStop(1, 'rgba(4,5,9,0.36)');
    ctx.fillStyle = v;
    ctx.fillRect(0, 0, vw, vh);
    // film grain
    ctx.globalCompositeOperation = 'overlay';
    ctx.globalAlpha = 0.05;
    const ox = (Math.random() * 256) | 0, oy = (Math.random() * 256) | 0;
    for (let x = -ox; x < vw; x += 256) {
      for (let y = -oy; y < vh; y += 256) ctx.drawImage(grainCv, x, y);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  crosshair() {
    const inp = DEMO ? demoDriver : input;
    const mx = inp.mouse.x, my = inp.mouse.y;
    const p = this.player;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.strokeStyle = 'rgba(235,232,222,0.9)';
    ctx.fillStyle = 'rgba(235,232,222,0.9)';
    ctx.lineWidth = 1.6;
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 2;
    if (p.cur.wpn.kind === 'gun') {
      const gap = 7 + p.visSpread * 300 + p.cur.ws.recoil * 2;
      const len = 7;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        ctx.beginPath();
        ctx.moveTo(mx + dx * gap, my + dy * gap);
        ctx.lineTo(mx + dx * (gap + len), my + dy * (gap + len));
        ctx.stroke();
      }
      ctx.beginPath(); ctx.arc(mx, my, 1.2, 0, Math.PI * 2); ctx.fill();
    } else {
      ctx.beginPath(); ctx.arc(mx, my, 3.4, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.shadowBlur = 0;
  }
}

const NULL_INPUT = {
  mouse: { x: 0, y: 0, down: false, clicked: false, rdown: false },
  moveX: 0, jump: false, sprint: false,
  hit: () => false, down: () => false, endFrame: () => {},
};

// ------------------------------------------------------------------ loop

let game = null;
let last = performance.now();
let acc = 0;
const STEP = 1 / 60;

function frame(now) {
  const dt = Math.min((now - last) / 1000, 0.06);
  last = now;
  acc += dt;
  let steps = 0;
  while (acc >= STEP && steps < 4) {
    game.update(STEP);
    acc -= STEP;
    steps++;
  }
  game.render();
  requestAnimationFrame(frame);
}

boot();
