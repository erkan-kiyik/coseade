// Background paintings: dusk sky with low sun, drifting cloud bank, far
// industrial skyline dissolved in haze, and a mid-distance factory line with
// lit windows. Each layer is a wide painted strip that tiles horizontally and
// scrolls at its own parallax rate.

import { makeCanvas, lingrad, radgrad, shade, mix, withA, COL } from './paint.js';
import { makeRng, makeNoise1D } from '../engine/math.js';

const SKY_W = 1600, SKY_H = 900;

export function buildBackground() {
  return {
    sky: paintSky(),
    mountains: paintMountains(),
    clouds: paintClouds(),
    far: paintFar(),
    mid: paintMid(),
  };
}

// ---------------- sky ----------------
function paintSky() {
  const { cv, g } = makeCanvas(SKY_W, SKY_H);
  // vertical dusk ramp
  g.fillStyle = lingrad(g, 0, 0, 0, SKY_H, [
    [0, '#1c2331'],
    [0.34, '#3d4a63'],
    [0.62, '#77707e'],
    [0.78, '#b07a58'],
    [0.9, '#cf8f5c'],
    [1, '#daa268'],
  ]);
  g.fillRect(0, 0, SKY_W, SKY_H);
  // sun low on the horizon, screened through haze
  const sx = SKY_W * 0.62, sy = SKY_H * 0.82;
  g.fillStyle = radgrad(g, sx, sy, 340, [
    [0, 'rgba(255,214,150,0.55)'],
    [0.3, 'rgba(255,190,120,0.28)'],
    [1, 'rgba(255,170,100,0)'],
  ]);
  g.fillRect(0, 0, SKY_W, SKY_H);
  g.fillStyle = radgrad(g, sx, sy, 46, [
    [0, 'rgba(255,244,220,0.95)'],
    [0.6, 'rgba(255,214,150,0.55)'],
    [1, 'rgba(255,200,130,0)'],
  ]);
  g.beginPath(); g.arc(sx, sy, 46, 0, Math.PI * 2); g.fill();
  // high thin cirrus streaks
  const rng = makeRng(555);
  for (let i = 0; i < 9; i++) {
    const y = rng.range(40, SKY_H * 0.5);
    const x = rng() * SKY_W, w = rng.range(200, 500), h = rng.range(6, 16);
    g.fillStyle = lingrad(g, x, 0, x + w, 0, [
      [0, 'rgba(180,170,180,0)'],
      [0.5, `rgba(196,180,180,${rng.range(0.04, 0.1)})`],
      [1, 'rgba(180,170,180,0)'],
    ]);
    g.beginPath(); g.ellipse(x + w / 2, y, w / 2, h / 2, 0, 0, Math.PI * 2); g.fill();
  }
  // soft light-scatter rays fanning up from the low sun — very restrained,
  // additive, so it reads as atmospheric scattering rather than a starburst
  g.save();
  g.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 7; i++) {
    const ang = -Math.PI / 2 + (i - 3) * 0.2 + rng.range(-0.05, 0.05);
    const len = rng.range(260, 440);
    const halfW = rng.range(12, 28);
    const dx = Math.cos(ang), dy = Math.sin(ang);
    const px = -dy, py = dx;
    g.beginPath();
    g.moveTo(sx - px * halfW * 0.15, sy - py * halfW * 0.15);
    g.lineTo(sx + dx * len - px * halfW, sy + dy * len - py * halfW);
    g.lineTo(sx + dx * len + px * halfW, sy + dy * len + py * halfW);
    g.closePath();
    g.fillStyle = withA('#ffdca0', rng.range(0.02, 0.045));
    g.fill();
  }
  g.restore();
  // subtle grain so the ramp never bands
  for (let i = 0; i < 3200; i++) {
    g.fillStyle = `rgba(255,255,255,${Math.random() * 0.02})`;
    g.fillRect(Math.random() * SKY_W, Math.random() * SKY_H, 1, 1);
  }
  return cv;
}

// ---------------- distant mountains / hills (tiling strip) ----------------
// Two layered ridgelines built from smooth value noise (so silhouettes read
// as natural terrain, not sawtooth randomness), with atmospheric perspective
// — the back ridge is hazier and cooler, the front ridge darker and closer —
// plus sparse dark-forest clusters dusting the front ridge's lower slopes.
function paintMountains() {
  const W = 2048, H = 380;
  const { cv, g } = makeCanvas(W, H);
  const baseY = H;
  const noiseA = makeNoise1D(71);
  const noiseB = makeNoise1D(133);

  const ridgeHeight = (noiseFn, x, freq) =>
    noiseFn(x * freq) * 0.62 + noiseFn(x * freq * 2.3 + 40) * 0.24 + noiseFn(x * freq * 5.1 + 90) * 0.14;

  const ridge = (noiseFn, freq, amp, midY, color, aTop, aBase) => {
    g.beginPath();
    g.moveTo(-4, baseY + 4);
    for (let x = -4; x <= W + 4; x += 8) {
      g.lineTo(x, midY - ridgeHeight(noiseFn, x, freq) * amp);
    }
    g.lineTo(W + 4, baseY + 4);
    g.closePath();
    g.fillStyle = lingrad(g, 0, midY - amp, 0, baseY, [[0, withA(color, aTop)], [1, withA(color, aBase)]]);
    g.fill();
    return (x) => midY - ridgeHeight(noiseFn, x, freq) * amp;
  };

  // back ridge: far, hazy, cool blue-grey, low contrast
  ridge(noiseA, 0.0016, 118, H * 0.6, '#7f8aa0', 0.32, 0.48);
  // front ridge: closer, darker/warmer, higher contrast
  const frontY = ridge(noiseB, 0.0026, 152, H * 0.74, '#5c6478', 0.5, 0.66);

  // sparse forest clusters clinging to the front ridge's lower slopes
  const rng = makeRng(919);
  for (let i = 0; i < 46; i++) {
    const x = rng() * W;
    const y = frontY(x) + rng.range(8, 62);
    if (y > baseY - 2) continue;
    const r = rng.range(6, 15);
    g.fillStyle = withA('#37402f', rng.range(0.25, 0.45));
    for (let c = 0; c < 3; c++) {
      g.beginPath();
      g.ellipse(x + rng.range(-r, r), y + rng.range(-3, 3), r * rng.range(0.5, 0.8), r * rng.range(0.3, 0.45), 0, 0, Math.PI * 2);
      g.fill();
    }
  }

  // haze wash at the base, so it dissolves into whatever sits in front
  g.fillStyle = lingrad(g, 0, H - 150, 0, H, [
    [0, 'rgba(195,152,120,0)'], [1, 'rgba(195,152,120,0.34)'],
  ]);
  g.fillRect(0, H - 150, W, 150);
  return cv;
}

// ---------------- cloud bank (tiling strip) ----------------
// Painted as soft cumulus banks: cool blue-grey crowns, warm sun-lit
// undersides, a bright rim where the low sun grazes the base. Every puff is
// drawn again shifted by ±W when it crosses a seam so the strip tiles with no
// visible edge.
function paintClouds() {
  const W = 2048, H = 520;
  const { cv, g } = makeCanvas(W, H);
  const rng = makeRng(808);

  // wrap-aware soft blob: draws the puff plus a copy across whichever seam it
  // overlaps, so a cloud straddling x=0 / x=W is continuous when tiled.
  const blob = (x, y, rx, ry, stops) => {
    for (const ox of [0, -W, W]) {
      if (x + ox + rx < -4 || x + ox - rx > W + 4) continue;
      g.fillStyle = radgrad(g, x + ox, y, rx, stops);
      g.save();
      g.translate(x + ox, y);
      g.scale(1, ry / rx);
      g.beginPath(); g.arc(0, 0, rx, 0, Math.PI * 2); g.fill();
      g.restore();
    }
  };

  // three depth rows: high faint wisps, then two denser cloud banks lower down
  const rows = [
    { count: 5, cy: [70, 150], spread: [150, 240], puffs: [7, 11], rr: [42, 78], crown: 0.16, base: 0.12 },
    { count: 5, cy: [190, 300], spread: [180, 300], puffs: [9, 15], rr: [60, 120], crown: 0.30, base: 0.26 },
    { count: 4, cy: [320, 430], spread: [200, 340], puffs: [10, 16], rr: [70, 140], crown: 0.40, base: 0.34 },
  ];

  for (const row of rows) {
    for (let c = 0; c < row.count; c++) {
      const cx = (c + rng.range(-0.35, 0.35)) / row.count * W;
      const cy = rng.range(row.cy[0], row.cy[1]);
      const spread = rng.range(row.spread[0], row.spread[1]);
      const n = rng.int(row.puffs[0], row.puffs[1]);

      // soft ambient body first (cool), so individual puffs sit in a mass
      blob(((cx % W) + W) % W, cy, spread * 0.9, spread * 0.34, [
        [0, withA('#8790a6', row.crown * 0.5)],
        [0.7, withA('#6b7286', row.crown * 0.22)],
        [1, 'rgba(90,96,116,0)'],
      ]);

      for (let i = 0; i < n; i++) {
        const t = i / (n - 1) - 0.5;                    // -0.5..0.5 across cloud
        const px = cx + t * spread * 2;
        const dome = -Math.cos(t * Math.PI) * spread * 0.22;   // rounded top
        const py = cy + dome + rng.range(-12, 10);
        const r = rng.range(row.rr[0], row.rr[1]) * (1 - Math.abs(t) * 0.35);
        const wx = ((px % W) + W) % W;
        const under = py > cy + spread * 0.02;
        if (under) {
          // warm sun-lit underside
          blob(wx, py, r, r * 0.72, [
            [0, withA('#d8b48c', row.base)],
            [0.55, withA('#c1926e', row.base * 0.6)],
            [1, 'rgba(150,120,110,0)'],
          ]);
        } else {
          // cool shadowed crown
          blob(wx, py, r, r * 0.78, [
            [0, withA('#9aa2b6', row.crown)],
            [0.55, withA('#7b8296', row.crown * 0.55)],
            [1, 'rgba(105,112,132,0)'],
          ]);
        }
      }

      // bright rim where the low sun catches the cloud base
      blob(((cx % W) + W) % W, cy + spread * 0.22, spread * 0.75, spread * 0.09, [
        [0, withA('#f2c288', row.base * 0.7)],
        [0.6, withA('#e0a066', row.base * 0.3)],
        [1, 'rgba(210,150,100,0)'],
      ]);
    }
  }
  return cv;
}

// ---- far-layer landmark silhouettes: flat-fill (matches the haze-tinted
// silhouette language of the far skyline, unlike the lit/shaded mid-layer
// landmarks below) ----------------------------------------------------

function commTowerSil(g, cx, baseY, h, col) {
  const topY = baseY - h;
  g.fillStyle = col;
  g.fillRect(cx - 1.6, topY, 3.2, h);
  g.strokeStyle = col; g.lineWidth = 1.3;
  for (let i = 0; i < 5; i++) {
    const yy = topY + (h * i) / 5;
    const w = 3 + (i / 5) * 15;
    g.beginPath(); g.moveTo(cx - w, yy + h / 9); g.lineTo(cx + w, yy); g.stroke();
  }
  g.beginPath(); g.ellipse(cx + 9, topY + h * 0.26, 7, 3, -0.3, 0, Math.PI * 2); g.fill();
  g.fillStyle = withA('#e05a46', 0.75);
  g.beginPath(); g.arc(cx, topY - 2, 2.2, 0, Math.PI * 2); g.fill();
}

function transmissionPylonSil(g, cx, baseY, h, col) {
  const topY = baseY - h;
  g.fillStyle = col;
  g.beginPath();
  g.moveTo(cx - 3, baseY); g.lineTo(cx - 1.2, topY + h * 0.18); g.lineTo(cx, topY);
  g.lineTo(cx + 1.2, topY + h * 0.18); g.lineTo(cx + 3, baseY);
  g.closePath(); g.fill();
  for (const t of [0.24, 0.44]) {
    const yy = topY + h * t, armW = 17 - t * 15;
    g.fillRect(cx - armW, yy, armW * 2, 1.6);
  }
}

function waterTowerSil(g, cx, baseY, h, w, col) {
  const legH = h * 0.58, tankH = h - legH;
  g.fillStyle = col;
  for (const s of [-1, 1]) {
    g.beginPath();
    g.moveTo(cx + s * w * 0.12, baseY - legH);
    g.lineTo(cx + s * w * 0.4, baseY);
    g.lineTo(cx + s * w * 0.28, baseY);
    g.lineTo(cx + s * w * 0.08, baseY - legH);
    g.closePath(); g.fill();
  }
  g.beginPath();
  g.ellipse(cx, baseY - legH, w * 0.5, tankH * 0.16, 0, Math.PI, 0, true);
  g.lineTo(cx + w * 0.42, baseY - legH - tankH * 0.85);
  g.ellipse(cx, baseY - legH - tankH * 0.85, w * 0.42, tankH * 0.14, 0, 0, Math.PI);
  g.closePath(); g.fill();
}

function bridgeSpanSil(g, x0, x1, baseY, col) {
  const midY = baseY - 62;
  g.strokeStyle = col; g.lineWidth = 3;
  g.beginPath(); g.moveTo(x0, baseY - 8); g.lineTo(x1, baseY - 8); g.stroke();
  const piers = 2;
  g.fillStyle = col;
  for (let i = 0; i <= piers + 1; i++) {
    const x = x0 + ((x1 - x0) * i) / (piers + 1);
    g.fillRect(x - 2, midY, 4, baseY - midY - 8);
  }
  g.lineWidth = 1; g.strokeStyle = col;
  const apex = x0 + (x1 - x0) * 0.5;
  for (let i = 0; i <= 10; i++) {
    const x = x0 + ((x1 - x0) * i) / 10;
    g.beginPath(); g.moveTo(x, midY + 10); g.lineTo(apex, midY - 24); g.stroke();
  }
}

// ---------------- far skyline ----------------
function paintFar() {
  const W = 2048, H = 620;
  const { cv, g } = makeCanvas(W, H);
  const rng = makeRng(919);
  const hazeA = mix(COL.haze, '#b58a68', 0.45);
  const hazeB = mix(COL.haze, '#6a7086', 0.4);

  // two depth rows of silhouettes
  for (let row = 0; row < 2; row++) {
    const col = row === 0 ? withA(hazeA, 0.5) : withA(hazeB, 0.72);
    const baseY = H - 40 - row * 8;
    const top = row === 0 ? 320 : 230;
    g.fillStyle = col;
    let x = row * 90;
    while (x < W + 140) {
      const bw = rng.range(70, 190);
      const bh = rng.range(60, top);
      g.fillRect(x, baseY - bh, bw, bh + 40);
      // rooftop clutter: tanks, masts, AC
      if (rng.chance(0.6)) g.fillRect(x + bw * 0.2, baseY - bh - 12, bw * 0.18, 12);
      if (rng.chance(0.5)) {
        g.fillRect(x + bw * 0.65, baseY - bh - 26, 3, 26);
        g.fillRect(x + bw * 0.65 - 4, baseY - bh - 26, 11, 3);
      }
      // smokestack cluster occasionally
      if (rng.chance(0.3)) {
        const sw = rng.range(14, 22);
        g.fillRect(x + bw + 6, baseY - bh - rng.range(50, 120), sw, bh + 160);
      }
      x += bw + rng.range(24, 90);
    }
  }

  // landmark silhouettes: comm tower + beacon, a transmission line strung
  // between two pylons, a water tower, a distant truss bridge — hand-placed
  // so the skyline reads as a real district, not a repeating loop
  const landY = H - 40, landCol = withA(hazeB, 0.85);
  commTowerSil(g, W * 0.2, landY, 220, landCol);
  transmissionPylonSil(g, W * 0.4, landY, 128, landCol);
  transmissionPylonSil(g, W * 0.455, landY, 118, landCol);
  g.strokeStyle = landCol; g.lineWidth = 0.9;
  g.beginPath();
  g.moveTo(W * 0.4, landY - 128 * 0.82);
  g.quadraticCurveTo((W * 0.4 + W * 0.455) / 2 * 1, landY - 128 * 0.82 + 16, W * 0.455, landY - 118 * 0.82);
  g.stroke();
  waterTowerSil(g, W * 0.64, landY, 108, 44, landCol);
  bridgeSpanSil(g, W * 0.74, W * 0.92, landY - 2, landCol);

  // forest patches tucked into gaps between structures
  for (let i = 0; i < 10; i++) {
    const fx = rng() * W, fy = landY - rng.range(6, 34);
    const fr = rng.range(9, 24);
    g.fillStyle = withA('#37402f', rng.range(0.3, 0.5));
    for (let c = 0; c < 4; c++) {
      g.beginPath();
      g.ellipse(fx + rng.range(-fr, fr), fy + rng.range(-4, 4), fr * rng.range(0.4, 0.7), fr * rng.range(0.25, 0.4), 0, 0, Math.PI * 2);
      g.fill();
    }
  }

  // painted smoke plumes drifting from stacks
  for (let i = 0; i < 4; i++) {
    let px = rng() * W, py = rng.range(140, 260);
    for (let s = 0; s < 8; s++) {
      g.fillStyle = withA('#9a94a0', 0.05 + (7 - s) * 0.008);
      g.beginPath(); g.arc(px, py, 14 + s * 7, 0, Math.PI * 2); g.fill();
      px += rng.range(18, 40); py -= rng.range(4, 14);
    }
  }
  // haze wash at base so it sits into the atmosphere
  g.fillStyle = lingrad(g, 0, H - 240, 0, H, [
    [0, 'rgba(200,150,110,0)'],
    [1, 'rgba(206,150,106,0.4)'],
  ]);
  g.fillRect(0, 0, W, H);
  return cv;
}

// ---- industrial landmark silhouettes (drawn into the mid layer) ----------

// Hyperboloid cooling tower: characteristic waisted profile, vertical ribbing,
// a lit rim at the mouth and a faint standing steam wisp.
function coolingTower(g, cx, baseY, h, w, col) {
  const topY = baseY - h;
  const waistY = topY + h * 0.62;
  const rTop = w * 0.5, rWaist = w * 0.34, rBase = w * 0.5;
  const profile = (side) => {
    g.beginPath();
    g.moveTo(cx - side * rBase, baseY);
    g.quadraticCurveTo(cx - side * rWaist * 0.7, (baseY + waistY) / 2, cx - side * rWaist, waistY);
    g.quadraticCurveTo(cx - side * rTop * 0.9, (waistY + topY) / 2, cx - side * rTop, topY);
  };
  g.fillStyle = lingrad(g, cx - rBase, 0, cx + rBase, 0, [
    [0, shade(col, -0.28)], [0.4, shade(col, 0.08)], [0.6, col], [1, shade(col, -0.34)],
  ]);
  g.beginPath();
  profile(1);
  g.lineTo(cx + rTop, topY);
  g.quadraticCurveTo(cx + rWaist * 0.9, (waistY + topY) / 2, cx + rWaist, waistY);
  g.quadraticCurveTo(cx + rBase * 0.7, (baseY + waistY) / 2, cx + rBase, baseY);
  g.closePath(); g.fill();
  // vertical ribbing
  g.strokeStyle = 'rgba(0,0,0,0.14)'; g.lineWidth = 1.5;
  for (let i = -3; i <= 3; i++) {
    const fx = i / 3;
    g.beginPath();
    g.moveTo(cx + fx * rBase, baseY);
    g.quadraticCurveTo(cx + fx * rWaist * 0.85, waistY, cx + fx * rTop, topY);
    g.stroke();
  }
  // lit mouth rim + shadowed throat
  g.fillStyle = shade(col, 0.22);
  g.beginPath(); g.ellipse(cx, topY, rTop, rTop * 0.16, 0, 0, Math.PI * 2); g.fill();
  g.fillStyle = 'rgba(10,10,14,0.55)';
  g.beginPath(); g.ellipse(cx, topY + 2, rTop * 0.8, rTop * 0.12, 0, 0, Math.PI * 2); g.fill();
  // standing steam
  g.fillStyle = 'rgba(200,204,210,0.10)';
  for (let s = 0; s < 5; s++) {
    g.beginPath();
    g.arc(cx + Math.sin(s * 1.7) * rTop * 0.4, topY - 20 - s * 26, rTop * (0.55 - s * 0.05), 0, Math.PI * 2);
    g.fill();
  }
}

// Telescopic gasometer: banded cylinder in an external lattice guide frame.
function gasHolder(g, cx, baseY, h, w, col) {
  const topY = baseY - h, r = w * 0.5;
  g.fillStyle = lingrad(g, cx - r, 0, cx + r, 0, [
    [0, shade(col, -0.3)], [0.45, col], [1, shade(col, -0.36)],
  ]);
  rrRect(g, cx - r, topY + 14, w, h - 14, 4); g.fill();
  // domed crown
  g.beginPath(); g.ellipse(cx, topY + 14, r, 16, 0, Math.PI, 0); g.fill();
  // telescopic bands
  g.strokeStyle = 'rgba(0,0,0,0.22)'; g.lineWidth = 2;
  for (let i = 1; i < 4; i++) {
    const yy = topY + 14 + (h - 14) * (i / 4);
    g.beginPath(); g.moveTo(cx - r, yy); g.lineTo(cx + r, yy); g.stroke();
  }
  // external lattice guide columns
  g.strokeStyle = 'rgba(40,40,50,0.85)'; g.lineWidth = 3;
  for (const s of [-1, 1]) {
    g.beginPath(); g.moveTo(cx + s * (r + 6), baseY); g.lineTo(cx + s * (r + 6), topY - 8); g.stroke();
  }
  g.lineWidth = 1.4; g.strokeStyle = 'rgba(40,40,50,0.6)';
  for (let i = 0; i < 7; i++) {
    const yy = topY - 8 + (h) * (i / 7);
    g.beginPath(); g.moveTo(cx - r - 6, yy); g.lineTo(cx + r + 6, yy + 18); g.stroke();
  }
}

// Tower crane: mast + horizontal jib + counter-jib with a hanging load line.
function towerCrane(g, x, topY, h) {
  g.fillStyle = '#2e2d38';
  g.fillRect(x, topY, 7, h);                       // mast
  g.fillRect(x - 130, topY - 6, 300, 7);           // jib + counter-jib
  g.fillStyle = '#26252f';
  g.fillRect(x - 150, topY - 20, 26, 20);          // counterweight
  g.strokeStyle = 'rgba(46,45,56,0.9)'; g.lineWidth = 2;
  for (let i = 0; i < 9; i++) {                     // jib lattice
    g.beginPath(); g.moveTo(x + 10 + i * 18, topY - 5); g.lineTo(x + 20 + i * 18, topY + 8); g.stroke();
  }
  // hoist line + hook
  g.fillStyle = '#2e2d38';
  g.fillRect(x + 120, topY, 1.6, 60);
  g.fillRect(x + 116, topY + 60, 10, 6);
  // mast bracing
  g.strokeStyle = 'rgba(46,45,56,0.8)'; g.lineWidth = 1.6;
  for (let i = 0; i < Math.floor(h / 26); i++) {
    g.beginPath(); g.moveTo(x, topY + i * 26); g.lineTo(x + 7, topY + (i + 1) * 26); g.stroke();
  }
}

// small rounded-rect helper (kept local to avoid touching shared paint utils)
function rrRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

// ---- mid-layer landmark silhouettes: lit/shaded (these are closer, so they
// carry real form-shading, unlike the flat far-layer silhouettes above) ----

// Perspective road wedge receding toward a vanishing point, with a faint
// dashed centre line — drawn *before* the building row so structures that
// land on top of it naturally read as "glimpsed through a gap."
function roadToHorizonSil(g, cx, baseY, halfWidthNear, col) {
  const vanishY = baseY - 260;
  g.fillStyle = col;
  g.beginPath();
  g.moveTo(cx - halfWidthNear, baseY);
  g.lineTo(cx - 4, vanishY);
  g.lineTo(cx + 4, vanishY);
  g.lineTo(cx + halfWidthNear, baseY);
  g.closePath();
  g.fill();
  g.strokeStyle = withA('#c8a25a', 0.22); g.lineWidth = 1.4;
  g.setLineDash([6, 10]);
  g.beginPath(); g.moveTo(cx, baseY - 6); g.lineTo(cx, vanishY + 10); g.stroke();
  g.setLineDash([]);
}

// Fenced compound: low chain-link line, a stilted watchtower, a radar dish
// on a mast — reads as a military/comms facility tucked among the factories.
function militaryCompoundSil(g, cx, baseY, w, col) {
  g.strokeStyle = withA('#3a3d34', 0.7); g.lineWidth = 1.2;
  g.beginPath();
  for (let fx = cx - w / 2; fx <= cx + w / 2; fx += 8) { g.moveTo(fx, baseY); g.lineTo(fx, baseY - 30); }
  g.moveTo(cx - w / 2, baseY - 30); g.lineTo(cx + w / 2, baseY - 30);
  g.stroke();
  const twX = cx + w * 0.32, twH = 92;
  g.fillStyle = col;
  g.fillRect(twX - 1.8, baseY - twH, 3.6, twH - 18);
  g.fillRect(twX - 10, baseY - twH - 18, 20, 18);
  g.fillStyle = 'rgba(12,13,15,0.6)';
  g.fillRect(twX - 7, baseY - twH - 14, 14, 10);
  const rdX = cx - w * 0.22, rdH = 46;
  g.strokeStyle = col; g.lineWidth = 2;
  g.beginPath(); g.moveTo(rdX, baseY); g.lineTo(rdX, baseY - rdH); g.stroke();
  g.save(); g.translate(rdX, baseY - rdH); g.rotate(-0.5);
  g.fillStyle = col;
  g.beginPath(); g.ellipse(0, 0, 14, 5, 0, Math.PI, 0, true); g.fill();
  g.restore();
}

// ---------------- mid factory line ----------------
function paintMid() {
  const W = 2048, H = 760;
  const { cv, g } = makeCanvas(W, H);
  const rng = makeRng(1213);
  const baseY = H - 10;

  const bodyCol = (t) => mix('#3f3e48', '#5b4f4c', t);

  // road glimpsed through a gap in the skyline, painted before the buildings
  roadToHorizonSil(g, W * 0.465, baseY, 46, bodyCol(0.12));

  let x = -40;
  while (x < W + 100) {
    const bw = rng.range(150, 320);
    const isWarehouse = rng.chance(0.22);
    const bh = isWarehouse ? rng.range(140, 220) : rng.range(180, 420);
    const t = rng();
    const col = bodyCol(t * 0.6);

    if (isWarehouse) {
      // low, flat-roofed shed with banded roller doors — distinct massing
      // from the sawtooth factories so the skyline doesn't repeat
      g.fillStyle = lingrad(g, 0, baseY - bh, 0, baseY, [
        [0, shade(col, 0.14)], [0.3, col], [1, shade(col, -0.38)],
      ]);
      g.fillRect(x, baseY - bh, bw, bh);
      g.fillStyle = shade(col, -0.22);
      g.fillRect(x - 2, baseY - bh - 6, bw + 4, 6);
      let dx = x + 8;
      while (dx + 34 < x + bw - 8) {
        g.fillStyle = shade(col, -0.32);
        g.fillRect(dx, baseY - 46, 34, 46);
        g.fillStyle = 'rgba(0,0,0,0.25)';
        for (let ly = baseY - 42; ly < baseY - 6; ly += 6) g.fillRect(dx, ly, 34, 1.6);
        dx += 44;
      }
      for (let v = 0; v < 2; v++) {
        if (rng.chance(0.6)) {
          g.fillStyle = shade(col, -0.1);
          g.fillRect(x + bw * (0.25 + v * 0.4), baseY - bh - 16, 14, 10);
        }
      }
      x += bw + rng.range(30, 110);
      continue;
    }

    // main mass with vertical gradient (sky glow rims the top)
    g.fillStyle = lingrad(g, 0, baseY - bh, 0, baseY, [
      [0, shade(col, 0.16)],
      [0.2, col],
      [1, shade(col, -0.4)],
    ]);
    g.fillRect(x, baseY - bh, bw, bh);
    // sawtooth factory roof or parapet
    if (rng.chance(0.5)) {
      g.fillStyle = shade(col, 0.1);
      const teeth = Math.floor(bw / 46);
      for (let i = 0; i < teeth; i++) {
        const tx = x + i * 46;
        g.beginPath();
        g.moveTo(tx, baseY - bh);
        g.lineTo(tx + 30, baseY - bh - 26);
        g.lineTo(tx + 30, baseY - bh);
        g.closePath(); g.fill();
        // glazed north face catching sky
        g.fillStyle = withA('#c8935e', 0.5);
        g.beginPath();
        g.moveTo(tx + 30, baseY - bh - 25);
        g.lineTo(tx + 44, baseY - bh);
        g.lineTo(tx + 30, baseY - bh);
        g.closePath(); g.fill();
        g.fillStyle = shade(col, 0.1);
      }
    } else {
      g.fillStyle = shade(col, -0.25);
      g.fillRect(x - 3, baseY - bh - 8, bw + 6, 8);
    }
    // window grid — a scatter of warm lit cells
    const cols = Math.floor(bw / 34), rows = Math.floor(bh / 60);
    for (let cxi = 0; cxi < cols; cxi++) {
      for (let ry = 0; ry < rows; ry++) {
        const wx = x + 12 + cxi * 34, wy = baseY - bh + 22 + ry * 60;
        if (rng.chance(0.32)) {
          g.fillStyle = withA(rng.chance(0.8) ? '#e8a45e' : '#c8d2e0', rng.range(0.35, 0.8));
          g.fillRect(wx, wy, 16, 22);
          g.fillStyle = 'rgba(20,16,14,0.5)';
          g.fillRect(wx + 7, wy, 1.4, 22);
          g.fillRect(wx, wy + 10, 16, 1.4);
        } else {
          g.fillStyle = 'rgba(16,17,24,0.55)';
          g.fillRect(wx, wy, 16, 22);
        }
      }
    }
    // rooftop water tank / stack
    if (rng.chance(0.45)) {
      g.fillStyle = shade(col, -0.14);
      const tw = rng.range(26, 40);
      g.fillRect(x + bw * 0.55, baseY - bh - 34, tw, 34);
      g.beginPath();
      g.moveTo(x + bw * 0.55 - 3, baseY - bh - 34);
      g.lineTo(x + bw * 0.55 + tw / 2, baseY - bh - 48);
      g.lineTo(x + bw * 0.55 + tw + 3, baseY - bh - 34);
      g.closePath(); g.fill();
    }
    if (rng.chance(0.4)) {
      const sw = rng.range(16, 24);
      const sh = rng.range(80, 170);
      g.fillStyle = lingrad(g, x + bw + 10, 0, x + bw + 10 + sw, 0, [
        [0, shade(col, 0.1)], [0.5, shade(col, -0.1)], [1, shade(col, -0.4)],
      ]);
      g.fillRect(x + bw + 10, baseY - bh - sh, sw, bh + sh);
      // banding
      g.fillStyle = 'rgba(200,120,80,0.35)';
      g.fillRect(x + bw + 10, baseY - bh - sh + 14, sw, 5);
      g.fillStyle = 'rgba(230,230,235,0.2)';
      g.fillRect(x + bw + 10, baseY - bh - sh + 26, sw, 5);
    }
    x += bw + rng.range(30, 110);
  }

  // gantry crane silhouette
  const gx = W * 0.32, gy = baseY - 320;
  g.fillStyle = '#33323c';
  g.fillRect(gx, gy, 8, 320);
  g.fillRect(gx + 210, gy, 8, 320);
  g.fillRect(gx - 40, gy, 320, 10);
  g.fillRect(gx - 40, gy + 10, 6, 26);
  // cable + hook
  g.fillRect(gx + 120, gy + 10, 2.4, 74);
  g.fillRect(gx + 114, gy + 84, 14, 8);
  // truss cross-bracing
  g.strokeStyle = 'rgba(60,58,70,0.9)'; g.lineWidth = 3;
  for (let i = 0; i < 6; i++) {
    g.beginPath();
    g.moveTo(gx - 40 + i * 54, gy + 10);
    g.lineTo(gx + 14 + i * 54, gy);
    g.stroke();
  }

  // ---- landmark structures: cooling towers, a gasometer, tower cranes, a
  // fenced compound ---- Placed by hand at spread positions (not a uniform
  // loop) so the skyline has recognisable, non-repeating silhouettes.
  coolingTower(g, W * 0.08, baseY, 300, 150, bodyCol(0.35));
  coolingTower(g, W * 0.86, baseY, 250, 128, bodyCol(0.5));
  gasHolder(g, W * 0.58, baseY, 168, 150, bodyCol(0.42));
  towerCrane(g, W * 0.7, baseY - 250, 250);
  towerCrane(g, W * 0.19, baseY - 200, 200);
  militaryCompoundSil(g, W * 0.465, baseY, 150, bodyCol(0.3));

  // atmosphere: haze wash rising from the base
  g.fillStyle = lingrad(g, 0, H - 380, 0, H, [
    [0, 'rgba(190,140,100,0)'],
    [0.7, 'rgba(186,136,98,0.22)'],
    [1, 'rgba(178,132,100,0.42)'],
  ]);
  g.fillRect(0, 0, W, H);
  return cv;
}
