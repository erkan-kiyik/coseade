// Visual effects: bullet tracers, impact particles (sparks/dust/blood),
// ejected shell casings, muzzle smoke, explosions and decals.

import * as THREE from 'three';

const UP = new THREE.Vector3(0, 1, 0);

function decalTexture(kind) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  if (kind === 'bullet') {
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(10,8,6,0.95)');
    grad.addColorStop(0.4, 'rgba(20,16,12,0.7)');
    grad.addColorStop(1, 'rgba(20,16,12,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
  } else {
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(90,4,4,0.9)');
    grad.addColorStop(0.5, 'rgba(70,4,4,0.55)');
    grad.addColorStop(1, 'rgba(70,4,4,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    g.fillStyle = 'rgba(60,2,2,0.7)';
    for (let i = 0; i < 6; i++) {
      const a = Math.random() * Math.PI * 2, r = 10 + Math.random() * 16;
      g.beginPath();
      g.ellipse(32 + Math.cos(a) * r, 32 + Math.sin(a) * r, 3 + Math.random() * 4, 2, a, 0, 7);
      g.fill();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  return tex;
}

export class Effects {
  constructor(scene, audio) {
    this.scene = scene;
    this.audio = audio;

    this.tracers = []; // { mesh, life, maxLife }
    this.shells = [];  // { mesh, vel, angVel, life }
    this.impacts = []; // particle bursts: { points, velocities, life, maxLife }
    this.decals = [];  // { mesh, life }
    this.explosions = []; // { light, sphere, life, maxLife, smoke:[] }
    this.smokePuffs = []; // standalone smoke sprites

    this.decalMatBullet = new THREE.MeshBasicMaterial({ map: decalTexture('bullet'), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
    this.decalMatBlood = new THREE.MeshBasicMaterial({ map: decalTexture('blood'), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });

    this.tracerGeo = new THREE.CylinderGeometry(0.006, 0.006, 1, 5, 1, true);
    this.tracerGeo.rotateX(Math.PI / 2);
    this.tracerGeo.translate(0, 0, -0.5);
    this.tracerMat = new THREE.MeshBasicMaterial({ color: 0xfff2c0, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });

    this.shellGeo = new THREE.CylinderGeometry(0.006, 0.006, 0.025, 6);
    this.shellMat = new THREE.MeshStandardMaterial({ color: 0xc9a24a, roughness: 0.3, metalness: 0.9 });

    this.sparkMat = new THREE.PointsMaterial({ color: 0xffd27a, size: 0.05, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    this.dustMat = new THREE.PointsMaterial({ color: 0xa89878, size: 0.09, transparent: true, opacity: 0.7, depthWrite: false });
    this.bloodMat = new THREE.PointsMaterial({ color: 0x8a1414, size: 0.06, transparent: true, depthWrite: false });

    this.smokeTex = (() => {
      const c = document.createElement('canvas'); c.width = c.height = 64;
      const g = c.getContext('2d');
      const grad = g.createRadialGradient(32, 32, 0, 32, 32, 30);
      grad.addColorStop(0, 'rgba(200,200,200,0.55)');
      grad.addColorStop(1, 'rgba(200,200,200,0)');
      g.fillStyle = grad; g.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    })();
    this.smokeMat = new THREE.SpriteMaterial({ map: this.smokeTex, transparent: true, depthWrite: false, opacity: 0.5 });
  }

  // ------------- shell casings (ejected from weapon rig) -------------
  ejectShell(camera, weapon) {
    const m = new THREE.Mesh(this.shellGeo, this.shellMat);
    const local = weapon.model.position.clone().add(new THREE.Vector3(0.045, -0.01, -0.15));
    const world = local.clone();
    camera.localToWorld(world);
    m.position.copy(world);
    m.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
    this.scene.add(m);
    const camQuat = camera.getWorldQuaternion(new THREE.Quaternion());
    const right = new THREE.Vector3(1, 0.3, 0).applyQuaternion(camQuat);
    const vel = right.multiplyScalar(1.2 + Math.random() * 0.8)
      .add(new THREE.Vector3(0, 1.6 + Math.random(), 0))
      .add(new THREE.Vector3((Math.random() - 0.5) * 0.6, 0, (Math.random() - 0.5) * 0.6));
    this.shells.push({
      mesh: m, vel, angVel: new THREE.Vector3(Math.random() * 12, Math.random() * 12, Math.random() * 12),
      life: 4, bounced: 0,
    });
    if (this.shells.length > 40) {
      const old = this.shells.shift();
      this.scene.remove(old.mesh);
    }
  }

  // ------------- tracer streak -------------
  spawnTracer(origin, dir, dist) {
    const m = new THREE.Mesh(this.tracerGeo, this.tracerMat.clone());
    m.position.copy(origin);
    m.scale.z = Math.min(dist, 40);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, -1), dir);
    m.quaternion.copy(q);
    this.scene.add(m);
    this.tracers.push({ mesh: m, life: 0.06, maxLife: 0.06 });
  }

  // ------------- impact bursts -------------
  spawnImpact(pos, normal, kind) {
    const count = kind === 'blood' ? 14 : 10;
    const mat = kind === 'blood' ? this.bloodMat : (kind === 'flesh' ? this.bloodMat : (kind === 'metal' ? this.sparkMat : this.dustMat));
    const positions = new Float32Array(count * 3);
    const velocities = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = pos.x; positions[i * 3 + 1] = pos.y; positions[i * 3 + 2] = pos.z;
      const spread = new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 1.6, (Math.random() - 0.5) * 2);
      const v = normal.clone().multiplyScalar(1.5 + Math.random() * 2.5).add(spread.multiplyScalar(1.4));
      velocities.push(v);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pts = new THREE.Points(geo, mat.clone());
    pts.material.transparent = true;
    this.scene.add(pts);
    this.impacts.push({ points: pts, velocities, life: 0.7, maxLife: 0.7, gravity: kind === 'spark' || kind === 'metal' ? 5 : 9 });

    // decal
    if (kind !== 'spark') {
      const decalMat = kind === 'blood' || kind === 'flesh' ? this.decalMatBlood : this.decalMatBullet;
      const size = kind === 'blood' || kind === 'flesh' ? 0.35 + Math.random() * 0.25 : 0.12 + Math.random() * 0.08;
      const d = new THREE.Mesh(new THREE.PlaneGeometry(size, size), decalMat.clone());
      d.position.copy(pos).add(normal.clone().multiplyScalar(0.01));
      d.lookAt(pos.clone().add(normal));
      d.rotation.z = Math.random() * Math.PI * 2;
      this.scene.add(d);
      this.decals.push({ mesh: d, life: 14 });
      if (this.decals.length > 60) {
        const old = this.decals.shift();
        this.scene.remove(old.mesh);
      }
    }

    if (kind === 'metal' || kind === 'spark') this.audio.ricochet(pos);
  }

  // ------------- muzzle / explosion smoke puff -------------
  spawnSmoke(pos, scale = 1) {
    const spr = new THREE.Sprite(this.smokeMat.clone());
    spr.position.copy(pos);
    spr.scale.setScalar(0.3 * scale);
    this.scene.add(spr);
    this.smokePuffs.push({ spr, life: 1.2, maxLife: 1.2, grow: 1.6 * scale, rise: 0.4 + Math.random() * 0.3 });
  }

  // ------------- explosion (grenade / barrel) -------------
  spawnExplosion(pos) {
    const light = new THREE.PointLight(0xffb35e, 60, 26, 2);
    light.position.copy(pos).add(new THREE.Vector3(0, 0.5, 0));
    this.scene.add(light);
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 12, 10),
      new THREE.MeshBasicMaterial({ color: 0xffcf7a, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    sphere.position.copy(pos).add(new THREE.Vector3(0, 0.4, 0));
    this.scene.add(sphere);
    this.explosions.push({ light, sphere, life: 0.4, maxLife: 0.4 });
    for (let i = 0; i < 5; i++) {
      setTimeout(() => this.spawnSmoke(pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 1.5, 0.3 + Math.random(), (Math.random() - 0.5) * 1.5)), 2.4), i * 90);
    }
    this.spawnImpact(pos.clone().add(new THREE.Vector3(0, 0.3, 0)), new THREE.Vector3(0, 1, 0), 'dust');
    this.audio.explosion(pos);
  }

  update(dt) {
    // tracers
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      t.life -= dt;
      t.mesh.material.opacity = Math.max(0, (t.life / t.maxLife) * 0.9);
      if (t.life <= 0) { this.scene.remove(t.mesh); this.tracers.splice(i, 1); }
    }

    // shells
    const GRAV = 9.8;
    for (let i = this.shells.length - 1; i >= 0; i--) {
      const s = this.shells[i];
      s.vel.y -= GRAV * dt;
      s.mesh.position.addScaledVector(s.vel, dt);
      s.mesh.rotation.x += s.angVel.x * dt;
      s.mesh.rotation.y += s.angVel.y * dt;
      s.mesh.rotation.z += s.angVel.z * dt;
      if (s.mesh.position.y < 0.02 && s.vel.y < 0) {
        if (s.bounced < 2) {
          s.vel.y *= -0.35; s.vel.x *= 0.5; s.vel.z *= 0.5; s.bounced++;
          s.mesh.position.y = 0.02;
        } else {
          s.vel.set(0, 0, 0);
        }
      }
      s.life -= dt;
      if (s.life <= 0) { this.scene.remove(s.mesh); this.shells.splice(i, 1); }
    }

    // impact particle bursts
    for (let i = this.impacts.length - 1; i >= 0; i--) {
      const im = this.impacts[i];
      im.life -= dt;
      const pos = im.points.geometry.attributes.position;
      for (let j = 0; j < im.velocities.length; j++) {
        const v = im.velocities[j];
        v.y -= im.gravity * dt;
        pos.array[j * 3] += v.x * dt;
        pos.array[j * 3 + 1] += v.y * dt;
        pos.array[j * 3 + 2] += v.z * dt;
      }
      pos.needsUpdate = true;
      im.points.material.opacity = Math.max(0, im.life / im.maxLife);
      if (im.life <= 0) { this.scene.remove(im.points); this.impacts.splice(i, 1); }
    }

    // decals fade out
    for (let i = this.decals.length - 1; i >= 0; i--) {
      const d = this.decals[i];
      d.life -= dt;
      if (d.life < 2) d.mesh.material.opacity = Math.max(0, d.life / 2);
      if (d.life <= 0) { this.scene.remove(d.mesh); this.decals.splice(i, 1); }
    }

    // explosions (light flash + fireball)
    for (let i = this.explosions.length - 1; i >= 0; i--) {
      const e = this.explosions[i];
      e.life -= dt;
      const t = 1 - e.life / e.maxLife;
      e.light.intensity = 60 * (1 - t) * (1 - t);
      e.sphere.scale.setScalar(1 + t * 9);
      e.sphere.material.opacity = Math.max(0, 1 - t * 1.3);
      if (e.life <= 0) {
        this.scene.remove(e.light); this.scene.remove(e.sphere);
        this.explosions.splice(i, 1);
      }
    }

    // smoke puffs
    for (let i = this.smokePuffs.length - 1; i >= 0; i--) {
      const sp = this.smokePuffs[i];
      sp.life -= dt;
      const t = 1 - sp.life / sp.maxLife;
      sp.spr.scale.setScalar((0.3 + t * sp.grow));
      sp.spr.position.y += sp.rise * dt;
      sp.spr.material.opacity = Math.max(0, 0.5 * (1 - t));
      if (sp.life <= 0) { this.scene.remove(sp.spr); this.smokePuffs.splice(i, 1); }
    }
  }
}
