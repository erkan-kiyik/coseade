// Background paintings: dusk sky with low sun, drifting cloud bank, far
// industrial skyline dissolved in haze, and a mid-distance factory line with
// lit windows. Each layer is a wide painted strip that tiles horizontally and
// scrolls at its own parallax rate.

import { makeCanvas, lingrad, radgrad, shade, mix, withA, COL } from './paint.js';
import { makeRng } from '../engine/math.js';

const SKY_W = 1600, SKY_H = 900;

export function buildBackground() {
  return {
    sky: paintSky(),
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
  // subtle grain so the ramp never bands
  for (let i = 0; i < 3200; i++) {
    g.fillStyle = `rgba(255,255,255,${Math.random() * 0.02})`;
    g.fillRect(Math.random() * SKY_W, Math.random() * SKY_H, 1, 1);
  }
  return cv;
}

// ---------------- cloud bank (tiling strip) ----------------
function paintClouds() {
  const W = 2048, H = 460;
  const { cv, g } = makeCanvas(W, H);
  const rng = makeRng(808);
  const puff = (x, y, r, warm, a) => {
    g.fillStyle = radgrad(g, x, y, r, [
      [0, withA(warm ? '#c4a78e' : '#8b90a4', a)],
      [0.62, withA(warm ? '#a98a74' : '#767b8e', a * 0.45)],
      [1, 'rgba(110,110,130,0)'],
    ]);
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  };
  for (let c = 0; c < 6; c++) {
    const cx = (c / 6) * W + rng.range(-80, 80);
    const cy = rng.range(150, 330);
    const spread = rng.range(140, 240);
    const n = rng.int(8, 13);
    for (let i = 0; i < n; i++) {
      const px = cx + rng.range(-spread, spread);
      const py = cy + rng.range(-26, 24) - Math.abs(px - cx) * 0.1;
      const warm = py > cy + 2;      // undersides catch the sun
      puff(((px % W) + W) % W, py, rng.range(46, 95), warm, rng.range(0.05, 0.12));
    }
    // lit underside stroke
    g.fillStyle = withA('#e6b284', 0.07);
    g.beginPath();
    g.ellipse(cx, cy + 36, spread * 0.8, 14, 0, 0, Math.PI * 2);
    g.fill();
  }
  return cv;
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

// ---------------- mid factory line ----------------
function paintMid() {
  const W = 2048, H = 760;
  const { cv, g } = makeCanvas(W, H);
  const rng = makeRng(1213);
  const baseY = H - 10;

  const bodyCol = (t) => mix('#3f3e48', '#5b4f4c', t);

  let x = -40;
  while (x < W + 100) {
    const bw = rng.range(150, 320);
    const bh = rng.range(180, 420);
    const t = rng();
    const col = bodyCol(t * 0.6);
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

  // atmosphere: haze wash rising from the base
  g.fillStyle = lingrad(g, 0, H - 380, 0, H, [
    [0, 'rgba(190,140,100,0)'],
    [0.7, 'rgba(186,136,98,0.22)'],
    [1, 'rgba(178,132,100,0.42)'],
  ]);
  g.fillRect(0, 0, W, H);
  return cv;
}
