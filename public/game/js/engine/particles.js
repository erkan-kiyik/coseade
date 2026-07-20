// Pooled particle system. Kinds cover sparks, smoke, dust, brass casings,
// blood, debris and ambient ash. Casings/debris/blood collide with the world
// via a solidAt(x, y) callback; impacts are reported through onImpact so the
// game can stamp decals / play sounds.

import { rand, randSpread, TAU, clamp } from './math.js';

export const K = {
  SPARK: 0, SMOKE: 1, DUST: 2, CASING: 3, BLOOD: 4,
  DEBRIS: 5, ASH: 6, EMBER: 7, MUZZLE_SMOKE: 8,
};

const ADDITIVE = new Set([K.SPARK, K.EMBER]);

export class Particles {
  constructor(max = 2600) {
    this.pool = [];
    this.max = max;
    this.onImpact = null;   // (kind, x, y, vx, vy) => void
    this.solidAt = () => false;
  }

  spawn(kind, o) {
    if (this.pool.length >= this.max) this.pool.shift();
    this.pool.push({
      kind,
      x: o.x, y: o.y,
      vx: o.vx || 0, vy: o.vy || 0,
      life: o.life || 1, age: 0,
      size: o.size || 3,
      grow: o.grow || 0,
      grav: o.grav !== undefined ? o.grav : 0,
      drag: o.drag || 0,
      rot: o.rot || rand(0, TAU),
      vrot: o.vrot || 0,
      color: o.color || '#888',
      alpha: o.alpha !== undefined ? o.alpha : 1,
      bounce: o.bounce || 0,
      bounces: 0,
      seed: Math.random() * TAU,
    });
  }

  update(dt) {
    const pool = this.pool;
    for (let i = pool.length - 1; i >= 0; i--) {
      const p = pool[i];
      p.age += dt;
      if (p.age >= p.life) { pool.splice(i, 1); continue; }

      p.vy += p.grav * dt;
      if (p.drag) { const d = Math.exp(-p.drag * dt); p.vx *= d; p.vy *= d; }
      if (p.kind === K.ASH || p.kind === K.EMBER) {
        p.vx += Math.sin(p.age * 1.7 + p.seed) * 14 * dt;
      }
      const nx = p.x + p.vx * dt;
      const ny = p.y + p.vy * dt;

      if (p.bounce && p.vy > 0 && this.solidAt(nx, ny)) {
        if (this.onImpact) this.onImpact(p.kind, p.x, p.y, p.vx, p.vy, p.bounces);
        if (p.kind === K.BLOOD) { pool.splice(i, 1); continue; }
        p.vy = -p.vy * p.bounce;
        p.vx *= 0.6;
        p.vrot *= 0.5;
        p.bounces++;
        if (Math.abs(p.vy) < 30) { p.vy = 0; p.grav = 0; p.vx = 0; p.vrot = 0; }
      } else {
        p.x = nx; p.y = ny;
      }
      p.rot += p.vrot * dt;
      p.size += p.grow * dt;
    }
  }

  draw(g, additivePass) {
    for (const p of this.pool) {
      if (ADDITIVE.has(p.kind) !== additivePass) continue;
      const t = p.age / p.life;
      const fade = t > 0.65 ? 1 - (t - 0.65) / 0.35 : 1;
      const a = clamp(p.alpha * fade, 0, 1);
      if (a <= 0.01) continue;
      g.globalAlpha = a;

      switch (p.kind) {
        case K.SPARK: {
          const len = Math.min(14, Math.hypot(p.vx, p.vy) * 0.02 + 2);
          const ang = Math.atan2(p.vy, p.vx);
          g.strokeStyle = t < 0.4 ? '#ffe9b0' : '#ff9a4d';
          g.lineWidth = p.size * (1 - t * 0.6);
          g.beginPath();
          g.moveTo(p.x, p.y);
          g.lineTo(p.x - Math.cos(ang) * len, p.y - Math.sin(ang) * len);
          g.stroke();
          break;
        }
        case K.EMBER: {
          g.fillStyle = t < 0.5 ? '#ffb35c' : '#c2542e';
          g.beginPath();
          g.arc(p.x, p.y, p.size * (1 - t * 0.5), 0, TAU);
          g.fill();
          break;
        }
        case K.SMOKE: case K.MUZZLE_SMOKE: case K.DUST: {
          const r = Math.max(0.5, p.size);
          const grad = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
          grad.addColorStop(0, p.color);
          grad.addColorStop(1, 'rgba(0,0,0,0)');
          g.fillStyle = grad;
          g.globalAlpha = a * 0.55;
          g.beginPath();
          g.arc(p.x, p.y, r, 0, TAU);
          g.fill();
          break;
        }
        case K.CASING: {
          g.save();
          g.translate(p.x, p.y);
          g.rotate(p.rot);
          g.fillStyle = '#a8873c';
          g.fillRect(-p.size / 2, -p.size / 5, p.size, p.size / 2.5);
          g.fillStyle = '#e6c878';
          g.fillRect(-p.size / 2, -p.size / 5, p.size, p.size / 6);
          g.restore();
          break;
        }
        case K.BLOOD: {
          g.fillStyle = p.color;
          g.beginPath();
          g.arc(p.x, p.y, p.size * (1 - t * 0.3), 0, TAU);
          g.fill();
          break;
        }
        case K.DEBRIS: {
          g.save();
          g.translate(p.x, p.y);
          g.rotate(p.rot);
          g.fillStyle = p.color;
          g.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
          g.restore();
          break;
        }
        case K.ASH: {
          g.fillStyle = p.color;
          g.fillRect(p.x, p.y, p.size, p.size);
          break;
        }
      }
    }
    g.globalAlpha = 1;
  }
}

// ---- convenience spawners ----------------------------------------------

export function burstSparks(ps, x, y, ang, n, spread = 0.9, speed = 420) {
  for (let i = 0; i < n; i++) {
    const a = ang + randSpread(spread);
    const v = rand(0.3, 1) * speed;
    ps.spawn(K.SPARK, {
      x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v,
      life: rand(0.18, 0.5), size: rand(1.2, 2.4),
      grav: 1050, drag: 2.5, bounce: 0.35,
    });
  }
}

export function puffSmoke(ps, x, y, n, color = 'rgba(140,140,145,0.85)', opts = {}) {
  for (let i = 0; i < n; i++) {
    ps.spawn(K.SMOKE, {
      x: x + randSpread(4), y: y + randSpread(4),
      vx: (opts.vx || 0) + randSpread(28), vy: (opts.vy || -26) + randSpread(16),
      life: rand(0.7, 1.6) * (opts.lifeMul || 1),
      size: rand(4, 9) * (opts.sizeMul || 1),
      grow: rand(14, 30) * (opts.growMul || 1),
      drag: 1.6, color, alpha: opts.alpha || 0.75,
    });
  }
}

export function kickDust(ps, x, y, dir, n = 5) {
  for (let i = 0; i < n; i++) {
    ps.spawn(K.DUST, {
      x: x + randSpread(7), y: y - rand(0, 4),
      vx: dir * rand(15, 75) + randSpread(22), vy: -rand(8, 42),
      life: rand(0.4, 0.9), size: rand(3, 6), grow: rand(10, 22),
      drag: 2.4, color: 'rgba(122,110,96,0.8)', alpha: 0.5,
    });
  }
}
