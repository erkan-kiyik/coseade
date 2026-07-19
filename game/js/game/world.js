// World: level layout for "Sector 9 — Cinder Works", AABB physics,
// hitscan raycasts, persistent decals (blood, scorch, bullet holes), the
// parallax background composite and the dynamic light list.

import * as env from '../art/environment.js';
import { buildBackground } from '../art/background.js';
import { makeCanvas, drawSprite, lingrad, radgrad, rr } from '../art/paint.js';
import { clamp, rand, randSpread, makeRng } from '../engine/math.js';

export const GROUND_Y = 640;
export const MAP_W = 4600;
const GRAV = 2400;

export class World {
  constructor() {
    this.bg = buildBackground();
    this.ground = env.groundStrip(MAP_W + 500, 90);
    this.props = [];       // {spr,x,y} anchored sprites, gameplay depth
    this.facades = [];     // building strips behind props
    this.lights = [];      // {x,y,r,c:[r,g,b],a,flicker}
    this.barrels = [];     // explosive barrels (shootable)
    this.wires = [];       // catenary cables
    this.emitters = [];    // ambient particle sources
    this.time = 0;

    // decal surface covering the playfield
    this.decalTop = GROUND_Y - 300;
    const d = makeCanvas(MAP_W, 380);
    this.decalCv = d.cv; this.decalG = d.g;

    this.colliders = [
      { x: -500, y: GROUND_Y, w: MAP_W + 1000, h: 400 },   // ground
      { x: -60, y: GROUND_Y - 800, w: 60, h: 800 },        // map bounds
      { x: MAP_W, y: GROUND_Y - 800, w: 60, h: 800 },
      { x: 950, y: GROUND_Y - 40, w: 300, h: 40 },         // loading dock
      { x: 898, y: GROUND_Y - 20, w: 26, h: 20 },          // crate step
      { x: 1750, y: GROUND_Y - 38, w: 96, h: 38 },         // container
      { x: 1798, y: GROUND_Y - 76, w: 96, h: 38 },         // stacked container
      { x: 1702, y: GROUND_Y - 20, w: 26, h: 20 },
      { x: 2560, y: GROUND_Y - 20, w: 26, h: 20 },
      { x: 2596, y: GROUND_Y - 42, w: 26, h: 42 },
      { x: 3080, y: GROUND_Y - 38, w: 96, h: 38 },
      { x: 2250, y: GROUND_Y - 13, w: 42, h: 13 },         // sandbags (vault)
      { x: 3560, y: GROUND_Y - 13, w: 42, h: 13 },
      { x: 3900, y: GROUND_Y - 40, w: 260, h: 40 },        // second dock
      { x: 3848, y: GROUND_Y - 20, w: 26, h: 20 },
    ];

    this.buildLevel();
  }

  buildLevel() {
    const GY = GROUND_Y;
    const P = (spr, x, y = GY) => this.props.push({ spr, x, y });
    const L = (x, y, r, c, a, flicker = 0) => this.lights.push({ x, y, r, c, a, flicker, seed: rand(0, 100) });

    // -- building facades (near background wall) --
    const facadeDefs = [
      { x: 20, w: 540, h: 178, brick: false },
      { x: 620, w: 560, h: 188, brick: false },
      { x: 1180, w: 520, h: 205, brick: true },
      // 1700..2170: open gap — fence line with the skyline behind
      { x: 2170, w: 560, h: 192, brick: false },
      { x: 2730, w: 600, h: 212, brick: true },
      { x: 3330, w: 560, h: 182, brick: false },
      { x: 3890, w: 640, h: 200, brick: true },
    ];
    for (const f of facadeDefs) {
      this.facades.push({ spr: env.facade(f.w, f.h, { brick: f.brick }), x: f.x, y: GY });
      // baked-in emissives get matching runtime lights: bay lamp + door bulb
      L(f.x + f.w * 0.42, GY - 56, 95, [255, 196, 120], 0.5, 0.06);
      L(f.x + f.w - 48, GY - 56, 70, [255, 208, 140], 0.45, 0.03);
    }

    // -- street furniture & cover --
    P(env.sign('sector'), 700);
    P(env.sign('danger'), 2152);
    for (const lx of [560, 1470, 2440, 3420, 4240]) {
      P(env.lamp(), lx);
      L(lx + 14, GY - 84, 230, [255, 202, 128], 0.62, lx === 2440 ? 0.5 : 0.04);
    }
    const poles = [880, 1880, 2880, 3880];
    for (const px of poles) P(env.powerPole(), px);
    for (let i = 0; i < poles.length - 1; i++) {
      const a = poles[i], b = poles[i + 1];
      for (const dy of [0, 4, 12]) {
        this.wires.push({ x0: a - 12, y0: GY - 100 + dy, x1: b - 12, y1: GY - 100 + dy, sag: 16 + dy });
      }
    }
    this.wires.push({ x0: 880 - 12, y0: GY - 100, x1: 620 + 60, y1: GY - 175, sag: 8 });
    this.wires.push({ x0: 3880 - 12, y0: GY - 100, x1: 4240 + 14, y1: GY - 86, sag: 10 });

    P(env.dock(300, 40), 1100);            // matches collider at 950..1250
    P(env.crate(26, 20), 911);
    P(env.dock(260, 40), 4030);
    P(env.crate(26, 20), 3861);

    P(env.container('containerRed', 'HLC-407'), 1798);
    P(env.container('containerBlue', 'MSU-2213'), 1846, GY - 38);
    P(env.container('containerGreen', 'KDR-118'), 3128);
    P(env.crate(26, 20), 1715);
    P(env.crate(26, 20), 2573);
    P(env.crate(26, 22), 2609, GY);        // stack base
    P(env.crate(26, 20), 2609, GY - 22);
    P(env.sandbags(), 2271);
    P(env.sandbags(), 3581);

    P(env.dumpster(), 1590);
    P(env.tires(), 2330);
    P(env.rubble(), 2060);
    P(env.rubble(), 3300);
    P(env.barrel('rust'), 1310);
    P(env.barrel('blue'), 2700);
    P(env.barrel('rust'), 2712, GY - 1);
    P(env.barrel('blue'), 3730);
    for (const fx of [1720, 1930, 2070]) P(env.fence(70), fx + 35);
    P(env.fence(70), 4390); P(env.fence(70), 4460);
    P(env.crate(22, 16), 1140, GY - 40);   // crates up on the dock
    P(env.barrel('rust'), 1210, GY - 40);

    // explosive barrels (entities — shootable)
    for (const bx of [1685, 2620, 3260]) {
      this.barrels.push({ x: bx, y: GY, hp: 30, alive: true, spr: env.barrel('red') });
    }

    // burn barrel: painted barrel + fire emitter + strong flicker light
    P(env.barrel('rust'), 2390);
    this.emitters.push({ kind: 'fire', x: 2390, y: GY - 21 });
    L(2390, GY - 30, 150, [255, 150, 60], 0.85, 0.8);
    // shorted cable sparking above the road
    this.emitters.push({ kind: 'sparks', x: 3506, y: GY - 132 });

    this.foreground = paintForeground();
  }

  // ---------------- physics ----------------

  rectHit(x, y, w, h) {
    for (const c of this.colliders) {
      if (x < c.x + c.w && x + w > c.x && y < c.y + c.h && y + h > c.y) return c;
    }
    return null;
  }

  solidAt(x, y) {
    for (const c of this.colliders) {
      if (x >= c.x && x <= c.x + c.w && y >= c.y && y <= c.y + c.h) return true;
    }
    return false;
  }

  // ent: x,y feet-center, halfW, h, vx, vy, onGround
  moveEntity(ent, dt) {
    ent.vy = Math.min(ent.vy + GRAV * dt, 1500);
    let landed = 0;

    let nx = ent.x + ent.vx * dt;
    let c = this.rectHit(nx - ent.halfW, ent.y - ent.h, ent.halfW * 2, ent.h - 1);
    if (c) {
      nx = ent.vx > 0 ? c.x - ent.halfW : c.x + c.w + ent.halfW;
      ent.vx = 0;
    }
    ent.x = nx;

    let ny = ent.y + ent.vy * dt;
    c = this.rectHit(ent.x - ent.halfW, ny - ent.h, ent.halfW * 2, ent.h);
    const wasAir = !ent.onGround;
    ent.onGround = false;
    if (c) {
      if (ent.vy > 0 && ent.y <= c.y + 1) {   // landing on top
        if (wasAir) landed = ent.vy;
        ny = c.y;
        ent.vy = 0;
        ent.onGround = true;
      } else if (ent.vy < 0) {                 // ceiling
        ny = c.y + c.h + ent.h;
        ent.vy = 0;
      } else {                                 // stuck inside side — push up
        ny = c.y;
        ent.vy = 0;
        ent.onGround = true;
      }
    }
    ent.y = ny;
    // ground probe (walking off edges)
    if (!ent.onGround && ent.vy >= 0) {
      if (this.rectHit(ent.x - ent.halfW, ent.y - 2, ent.halfW * 2, 4)) {
        ent.onGround = true; ent.vy = 0;
      }
    }
    return landed;
  }

  // segment raycast vs colliders + explosive barrels
  raycast(x0, y0, x1, y1) {
    let best = null, bestT = 1;
    const dx = x1 - x0, dy = y1 - y0;
    const testRect = (rx, ry, rw, rh, tag, ref) => {
      let tmin = 0, tmax = 1, nx = 0, ny = 0;
      for (let axis = 0; axis < 2; axis++) {
        const o = axis ? y0 : x0, d = axis ? dy : dx;
        const lo = axis ? ry : rx, hi = axis ? ry + rh : rx + rw;
        if (Math.abs(d) < 1e-6) { if (o < lo || o > hi) return; continue; }
        let t1 = (lo - o) / d, t2 = (hi - o) / d;
        let n = -Math.sign(d);
        if (t1 > t2) { const tt = t1; t1 = t2; t2 = tt; }
        if (t1 > tmin) { tmin = t1; nx = axis ? 0 : n; ny = axis ? n : 0; }
        tmax = Math.min(tmax, t2);
        if (tmin > tmax) return;
      }
      if (tmin > 0 && tmin < bestT) {
        bestT = tmin;
        best = { x: x0 + dx * tmin, y: y0 + dy * tmin, nx, ny, tag, ref, t: tmin };
      }
    };
    for (const c of this.colliders) testRect(c.x, c.y, c.w, c.h, 'world', c);
    for (const b of this.barrels) {
      if (b.alive) testRect(b.x - 8, b.y - 21, 16, 21, 'barrel', b);
    }
    return best;
  }

  hasLineOfSight(x0, y0, x1, y1) {
    const hit = this.raycast(x0, y0, x1, y1);
    return !hit || hit.tag === 'barrel';
  }

  // ---------------- decals ----------------

  stamp(fn) {
    const g = this.decalG;
    g.save();
    g.translate(0, -this.decalTop);
    fn(g);
    g.restore();
  }

  bloodDecal(x, y, size = 8) {
    this.stamp((g) => {
      for (let i = 0; i < 5; i++) {
        g.fillStyle = `rgba(${86 + rand(0, 30)},${14 + rand(0, 8)},${12},${rand(0.25, 0.5)})`;
        g.beginPath();
        g.ellipse(x + randSpread(size), y + randSpread(size * 0.4), rand(1.5, size * 0.55), rand(1, size * 0.3), rand(0, 3), 0, Math.PI * 2);
        g.fill();
      }
    });
  }

  bulletHole(x, y) {
    this.stamp((g) => {
      g.fillStyle = 'rgba(14,13,12,0.75)';
      g.beginPath(); g.arc(x, y, rand(1.2, 1.9), 0, Math.PI * 2); g.fill();
      g.strokeStyle = 'rgba(210,205,190,0.2)';
      g.lineWidth = 0.7;
      g.beginPath(); g.arc(x, y, rand(2.2, 2.9), 0, Math.PI * 2); g.stroke();
    });
  }

  scorch(x, y, r = 30) {
    this.stamp((g) => {
      const gr = g.createRadialGradient(x, y, 2, x, y, r);
      gr.addColorStop(0, 'rgba(12,10,9,0.8)');
      gr.addColorStop(0.6, 'rgba(16,13,11,0.45)');
      gr.addColorStop(1, 'rgba(16,13,11,0)');
      g.fillStyle = gr;
      g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    });
  }

  // ---------------- rendering ----------------

  // Screen-space parallax composite (call with identity transform).
  drawBackground(g, cam, vw, vh, time) {
    const z = cam.zoom;
    const groundY = vh / 2 + (GROUND_Y - cam.y) * z;
    g.drawImage(this.bg.sky, 0, 0, vw, vh);

    const tile = (img, ox, y, s) => {
      const w = img.width * s, h = img.height * s;
      let x = ((ox % w) + w) % w - w;
      for (; x < vw; x += w) g.drawImage(img, x, y, w, h);
    };

    const cs = Math.max(vw / 2048, 0.72);
    tile(this.bg.clouds, -(cam.x * 0.05 + time * 3.5), groundY - 700 * cs, cs * 1.15);

    const fs = Math.max(vw / 2048, 0.72) * 1.02;
    tile(this.bg.far, -cam.x * 0.12, groundY - this.bg.far.height * fs + 30 * fs, fs);

    // warm haze between far and mid
    g.fillStyle = lingrad(g, 0, groundY - 320, 0, groundY, [
      [0, 'rgba(205,150,105,0)'], [1, 'rgba(205,150,105,0.18)'],
    ]);
    g.fillRect(0, groundY - 320, vw, 320);

    const ms = Math.max(vw / 2048, 0.72) * 1.06;
    tile(this.bg.mid, -cam.x * 0.3, groundY - (this.bg.mid.height - 8) * ms, ms);

    // cool fog settling at street level
    g.fillStyle = lingrad(g, 0, groundY - 150, 0, groundY + 30, [
      [0, 'rgba(150,155,175,0)'], [0.8, 'rgba(150,150,168,0.13)'], [1, 'rgba(150,150,168,0.05)'],
    ]);
    g.fillRect(0, groundY - 150, vw, 190);
  }

  // World-space layers behind entities (call inside camera transform).
  drawBack(g) {
    for (const f of this.facades) {
      drawSprite(g, f.spr, f.x, f.y);
    }
    // power cables
    g.strokeStyle = 'rgba(10,12,16,0.5)';
    g.lineWidth = 1.1;
    for (const w of this.wires) {
      g.beginPath();
      g.moveTo(w.x0, w.y0);
      g.quadraticCurveTo((w.x0 + w.x1) / 2, Math.max(w.y0, w.y1) + w.sag, w.x1, w.y1);
      g.stroke();
    }
    drawSprite(g, this.ground, -250, GROUND_Y);
    // solid earth below the painted street — never let the sky bleed through
    const under = lingrad(g, 0, GROUND_Y + 82, 0, GROUND_Y + 700, [
      [0, '#2b2a27'], [0.25, '#1b1a18'], [1, '#0c0c0d'],
    ]);
    g.fillStyle = under;
    g.fillRect(-1600, GROUND_Y + 84, MAP_W + 3200, 1400);
    for (const p of this.props) drawSprite(g, p.spr, p.x, p.y);
    for (const b of this.barrels) if (b.alive) drawSprite(g, b.spr, b.x, b.y);
    // decals over ground/props, under characters
    g.drawImage(this.decalCv, 0, this.decalTop);
  }

  // Foreground silhouettes, parallax > 1 (call with identity transform).
  drawForeground(g, cam, vw, vh) {
    const z = cam.zoom;
    const groundY = vh / 2 + (GROUND_Y - cam.y) * z;
    const s = Math.max(vw / 1400, 0.8) * 1.1;
    const w = this.foreground.width * s, h = this.foreground.height * s;
    let x = ((-cam.x * 1.3 % w) + w) % w - w;
    g.globalAlpha = 0.7;
    for (; x < vw; x += w) g.drawImage(this.foreground, x, groundY + 96 - h, w, h);
    g.globalAlpha = 1;
  }

  getLights() {
    return this.lights;
  }

  update(dt) {
    this.time += dt;
  }
}

// Near-camera out-of-focus silhouettes: two thin slack cables high in the
// frame and a low band of curb clutter hugging the bottom edge. Deliberately
// sparse and soft so it adds depth without reading as objects.
function paintForeground() {
  const W = 1400, H = 300;
  const { cv, g } = makeCanvas(W, H);
  const rng = makeRng(3131);
  const ink = (a) => `rgba(7,9,14,${a})`;

  g.strokeStyle = ink(0.5); g.lineWidth = 2.6;
  g.beginPath();
  g.moveTo(-10, 26);
  g.quadraticCurveTo(W * 0.3, 88, W * 0.62, 52);
  g.quadraticCurveTo(W * 0.85, 28, W + 10, 58);
  g.stroke();
  g.strokeStyle = ink(0.4); g.lineWidth = 1.8;
  g.beginPath();
  g.moveTo(-10, 38); g.quadraticCurveTo(W * 0.4, 108, W + 10, 74);
  g.stroke();

  // low curb clutter band along the very bottom
  for (let i = 0; i < 26; i++) {
    const tx = rng() * W, ts = rng.range(5, 15);
    g.fillStyle = ink(rng.range(0.4, 0.7));
    g.fillRect(tx, H - ts * 0.7, ts * rng.range(0.9, 2.2), ts);
  }
  // a couple of squat bollards
  for (const bx of [230, 890]) {
    g.fillStyle = ink(0.7);
    rr(g, bx, H - 34, 13, 34, 4); g.fill();
  }
  return cv;
}
