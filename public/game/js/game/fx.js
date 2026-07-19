// FX director: ties particles, audio, camera and decals together.
// Owns tracers, timed dynamic lights, melee slash trails and explosions.

import { K, burstSparks, puffSmoke, kickDust } from '../engine/particles.js';
import { rand, randSpread, clamp } from '../engine/math.js';

export class FX {
  constructor(particles, audio, camera, world) {
    this.ps = particles;
    this.audio = audio;
    this.cam = camera;
    this.world = world;
    this.tracers = [];    // {x0,y0,x1,y1,life,age}
    this.lights = [];     // {x,y,r,c,a,life,age}
    this.slashes = [];    // {x,y,a0,a1,r,life,age,facing}

    particles.solidAt = (x, y) => world.solidAt(x, y);
    particles.onImpact = (kind, x, y, vx, vy, bounces) => {
      if (kind === K.CASING && bounces === 0) this.audio.casingTink();
      if (kind === K.BLOOD) this.world.bloodDecal(x, y, 7);
    };
  }

  addLight(x, y, r, c, a, life = 0.08) {
    this.lights.push({ x, y, r, c, a, life, age: 0 });
  }

  // ---- weapon fire ----
  muzzle(x, y, ang, big = 1) {
    this.addLight(x, y, 190 * big, [255, 190, 110], 0.95, 0.055);
    puffSmoke(this.ps, x + Math.cos(ang) * 8, y + Math.sin(ang) * 8, 2, 'rgba(150,148,145,0.7)', {
      vx: Math.cos(ang) * 40, vy: Math.sin(ang) * 40 - 14, sizeMul: 0.8, lifeMul: 0.8,
    });
    if (Math.random() < 0.6) burstSparks(this.ps, x, y, ang, 2, 0.35, 300);
  }

  tracer(x0, y0, x1, y1) {
    this.tracers.push({ x0, y0, x1, y1, life: 0.09, age: 0 });
  }

  casing(x, y, facing, size) {
    this.ps.spawn(K.CASING, {
      x, y,
      vx: -facing * rand(60, 130) + randSpread(30),
      vy: -rand(150, 240),
      vrot: randSpread(22),
      life: rand(2.5, 4), size,
      grav: 1900, bounce: 0.4,
    });
  }

  magDrop(x, y, facing) {
    this.ps.spawn(K.DEBRIS, {
      x, y, vx: -facing * rand(10, 40), vy: rand(30, 80),
      vrot: randSpread(9), life: 3.2, size: 7, color: '#2c2e31',
      grav: 1800, bounce: 0.2,
    });
  }

  // ---- impacts ----
  impactWall(x, y, nx, ny) {
    const ang = Math.atan2(ny, nx);
    burstSparks(this.ps, x + nx * 2, y + ny * 2, ang, 5, 1, 380);
    puffSmoke(this.ps, x + nx * 3, y + ny * 3, 2, 'rgba(130,124,112,0.75)', { sizeMul: 0.7 });
    for (let i = 0; i < 3; i++) {
      this.ps.spawn(K.DEBRIS, {
        x, y, vx: nx * rand(40, 160) + randSpread(70), vy: ny * rand(40, 140) - rand(30, 110),
        vrot: randSpread(14), life: rand(0.5, 1.1), size: rand(1.4, 2.8),
        color: '#55524a', grav: 1500, bounce: 0.3,
      });
    }
    this.addLight(x + nx * 3, y + ny * 3, 40, [255, 200, 130], 0.4, 0.04);
    this.world.bulletHole(x, y);
    this.audio.impact();
  }

  blood(x, y, dirX) {
    for (let i = 0; i < 9; i++) {
      this.ps.spawn(K.BLOOD, {
        x: x + randSpread(3), y: y + randSpread(5),
        vx: dirX * rand(30, 210) + randSpread(60), vy: -rand(20, 170),
        life: rand(0.5, 1.3), size: rand(1.2, 2.6),
        color: `rgb(${110 + rand(0, 40) | 0},${16 + rand(0, 10) | 0},14)`,
        grav: 1500, bounce: 1,      // bounce flag routes impact → decal
      });
    }
    puffSmoke(this.ps, x, y, 2, 'rgba(120,26,22,0.5)', { sizeMul: 0.65, lifeMul: 0.5, vy: -8 });
  }

  footstep(x, y, dir, runNorm) {
    kickDust(this.ps, x, y, -dir, 2 + (runNorm > 0.7 ? 2 : 0));
    this.audio.footstep(runNorm);
  }

  landDust(x, y, hard) {
    kickDust(this.ps, x - 6, y, -1, hard ? 7 : 3);
    kickDust(this.ps, x + 6, y, 1, hard ? 7 : 3);
    this.audio.land(hard);
  }

  slash(x, y, a0, a1, r, facing) {
    this.slashes.push({ x, y, a0, a1, r, life: 0.16, age: 0, facing });
  }

  explosion(x, y) {
    this.audio.explosion();
    this.cam.addTrauma(0.75);
    this.cam.landBounce(6);
    this.addLight(x, y - 10, 420, [255, 180, 90], 1, 0.34);
    this.world.scorch(x, y - 2, 34);
    // fireball core
    for (let i = 0; i < 14; i++) {
      const a = rand(0, Math.PI * 2), v = rand(20, 260);
      this.ps.spawn(K.EMBER, {
        x: x + randSpread(8), y: y - 8 + randSpread(8),
        vx: Math.cos(a) * v, vy: Math.sin(a) * v - 120,
        life: rand(0.3, 0.8), size: rand(2.5, 5.5),
        grav: 600, drag: 2.2,
      });
    }
    burstSparks(this.ps, x, y - 10, -Math.PI / 2, 18, 2.6, 520);
    for (let i = 0; i < 10; i++) {
      this.ps.spawn(K.DEBRIS, {
        x, y: y - 6, vx: randSpread(320), vy: -rand(80, 380),
        vrot: randSpread(16), life: rand(0.8, 2), size: rand(2, 5),
        color: i % 3 ? '#4a4239' : '#6b3226', grav: 1600, bounce: 0.35,
      });
    }
    for (let i = 0; i < 12; i++) {
      this.ps.spawn(K.SMOKE, {
        x: x + randSpread(14), y: y - 10 - rand(0, 16),
        vx: randSpread(70), vy: -rand(30, 120),
        life: rand(1.2, 2.6), size: rand(9, 18), grow: rand(26, 46),
        drag: 1.4, color: 'rgba(64,58,52,0.9)', alpha: 0.85,
      });
    }
  }

  update(dt) {
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      if ((t.age += dt) >= t.life) this.tracers.splice(i, 1);
    }
    for (let i = this.lights.length - 1; i >= 0; i--) {
      const l = this.lights[i];
      if ((l.age += dt) >= l.life) this.lights.splice(i, 1);
    }
    for (let i = this.slashes.length - 1; i >= 0; i--) {
      const s = this.slashes[i];
      if ((s.age += dt) >= s.life) this.slashes.splice(i, 1);
    }
  }

  // additive world-space effects, drawn after characters
  draw(g) {
    if (this.tracers.length) {
      g.save();
      g.globalCompositeOperation = 'lighter';
      for (const t of this.tracers) {
        const a = clamp(1 - t.age / t.life, 0, 1);
        const gr = g.createLinearGradient(t.x0, t.y0, t.x1, t.y1);
        gr.addColorStop(0, `rgba(255,220,160,0)`);
        gr.addColorStop(0.7, `rgba(255,214,150,${0.5 * a})`);
        gr.addColorStop(1, `rgba(255,240,200,${0.85 * a})`);
        g.strokeStyle = gr;
        g.lineWidth = 1.4;
        g.beginPath(); g.moveTo(t.x0, t.y0); g.lineTo(t.x1, t.y1); g.stroke();
      }
      g.restore();
    }
    if (this.slashes.length) {
      g.save();
      g.globalCompositeOperation = 'lighter';
      for (const s of this.slashes) {
        const k = s.age / s.life;
        const a = (1 - k) * 0.7;
        g.fillStyle = `rgba(220,230,245,${a})`;
        g.beginPath();
        const sweep = s.a1 - s.a0;
        const a0 = s.a0 + sweep * k * 0.5;
        g.save();
        g.translate(s.x, s.y);
        g.scale(s.facing, 1);
        g.arc(0, 0, s.r, a0, s.a0 + sweep, false);
        g.arc(0, 0, s.r * 0.55, s.a0 + sweep, a0, true);
        g.closePath();
        g.fill();
        g.restore();
      }
      g.restore();
    }
  }

  getLights() {
    const out = [];
    for (const l of this.lights) {
      const a = l.a * clamp(1 - l.age / l.life, 0, 1);
      out.push({ x: l.x, y: l.y, r: l.r, c: l.c, a, flicker: 0, seed: 0 });
    }
    return out;
  }
}
