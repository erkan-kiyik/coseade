// Procedural map: a walled military compound at dusk.
// Builds all geometry, canvas-generated textures, lights, colliders and spawn points.

import * as THREE from 'three';

export const MAP_SIZE = 170; // playable square, walls at ±MAP_SIZE/2

// ---------- canvas texture helpers ----------

function canvasTexture(w, h, draw, repeatX = 1, repeatY = 1) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function asphaltTexture() {
  return canvasTexture(512, 512, (g, w, h) => {
    g.fillStyle = '#33363a';
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) {
      const v = 40 + Math.random() * 30;
      g.fillStyle = `rgba(${v},${v},${v + 4},${0.25 + Math.random() * 0.3})`;
      g.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
    }
    // cracks
    g.strokeStyle = 'rgba(18,20,22,0.55)';
    g.lineWidth = 1.2;
    for (let i = 0; i < 14; i++) {
      g.beginPath();
      let x = Math.random() * w, y = Math.random() * h;
      g.moveTo(x, y);
      for (let s = 0; s < 8; s++) {
        x += (Math.random() - 0.5) * 70; y += (Math.random() - 0.5) * 70;
        g.lineTo(x, y);
      }
      g.stroke();
    }
    // oil stains
    for (let i = 0; i < 6; i++) {
      const gr = g.createRadialGradient(0, 0, 0, 0, 0, 30 + Math.random() * 50);
      gr.addColorStop(0, 'rgba(10,12,14,0.5)');
      gr.addColorStop(1, 'rgba(10,12,14,0)');
      g.save();
      g.translate(Math.random() * w, Math.random() * h);
      g.fillStyle = gr;
      g.fillRect(-90, -90, 180, 180);
      g.restore();
    }
  }, 18, 18);
}

function concreteTexture(base = '#8a8377') {
  return canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = base;
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) {
      const a = 0.06 + Math.random() * 0.12;
      g.fillStyle = Math.random() > 0.5 ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`;
      g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
    g.strokeStyle = 'rgba(0,0,0,0.18)';
    g.lineWidth = 2;
    g.strokeRect(1, 1, w - 2, h - 2);
  }, 1, 1);
}

// building façade with lit/dark windows
function facadeTexture(floors, cols, hue) {
  return canvasTexture(256 * Math.max(1, Math.floor(cols / 3)), 128 * floors, (g, w, h) => {
    g.fillStyle = hue;
    g.fillRect(0, 0, w, h);
    // grime streaks
    for (let i = 0; i < 40; i++) {
      g.fillStyle = `rgba(0,0,0,${0.04 + Math.random() * 0.08})`;
      const x = Math.random() * w;
      g.fillRect(x, 0, 3 + Math.random() * 10, h);
    }
    const winW = w / cols, winH = h / floors;
    for (let f = 0; f < floors; f++) {
      for (let cIdx = 0; cIdx < cols; cIdx++) {
        const x = cIdx * winW + winW * 0.22;
        const y = f * winH + winH * 0.22;
        const ww = winW * 0.56, wh = winH * 0.5;
        const lit = Math.random() < 0.28;
        g.fillStyle = '#15181c';
        g.fillRect(x - 3, y - 3, ww + 6, wh + 6);
        if (lit) {
          const gr = g.createLinearGradient(x, y, x, y + wh);
          gr.addColorStop(0, '#ffd98a');
          gr.addColorStop(1, '#c98f3a');
          g.fillStyle = gr;
        } else {
          g.fillStyle = `rgba(${40 + Math.random() * 25},${52 + Math.random() * 25},${66 + Math.random() * 25},1)`;
        }
        g.fillRect(x, y, ww, wh);
        // frame divider
        g.fillStyle = 'rgba(10,12,14,0.8)';
        g.fillRect(x + ww / 2 - 1, y, 2, wh);
      }
    }
  }, 1, 1);
}

function containerTexture(color) {
  return canvasTexture(256, 128, (g, w, h) => {
    g.fillStyle = color;
    g.fillRect(0, 0, w, h);
    // corrugation
    for (let x = 0; x < w; x += 16) {
      g.fillStyle = 'rgba(0,0,0,0.22)';
      g.fillRect(x, 0, 4, h);
      g.fillStyle = 'rgba(255,255,255,0.07)';
      g.fillRect(x + 8, 0, 4, h);
    }
    // rust
    for (let i = 0; i < 30; i++) {
      g.fillStyle = `rgba(96,52,26,${0.15 + Math.random() * 0.3})`;
      const x = Math.random() * w, y = Math.random() * h;
      g.beginPath();
      g.ellipse(x, y, 4 + Math.random() * 14, 3 + Math.random() * 7, Math.random() * 3, 0, 7);
      g.fill();
    }
  }, 2, 1);
}

function crateTexture() {
  return canvasTexture(128, 128, (g, w, h) => {
    g.fillStyle = '#6e5636';
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < 500; i++) {
      g.fillStyle = `rgba(0,0,0,${Math.random() * 0.12})`;
      g.fillRect(Math.random() * w, Math.random() * h, 6, 1.5);
    }
    g.strokeStyle = '#4a3820';
    g.lineWidth = 6;
    g.strokeRect(3, 3, w - 6, h - 6);
    g.beginPath();
    g.moveTo(0, 0); g.lineTo(w, h); g.moveTo(w, 0); g.lineTo(0, h);
    g.lineWidth = 5;
    g.stroke();
  }, 1, 1);
}

// ---------- world ----------

export class World {
  constructor(scene, quality) {
    this.scene = scene;
    this.colliders = [];      // AABBs: { min, max }
    this.raycastMeshes = [];  // solid meshes bullets can hit
    this.barrels = [];        // explosive barrels: { mesh, pos, alive }
    this.enemySpawns = [];
    this.lampLights = [];
    this._build(quality);
  }

  addCollider(cx, cy, cz, sx, sy, sz) {
    this.colliders.push({
      min: new THREE.Vector3(cx - sx / 2, cy - sy / 2, cz - sz / 2),
      max: new THREE.Vector3(cx + sx / 2, cy + sy / 2, cz + sz / 2),
    });
  }

  _solidBox(sx, sy, sz, mat, x, y, z, opts = {}) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = opts.castShadow !== false;
    mesh.receiveShadow = true;
    if (opts.rotY) mesh.rotation.y = opts.rotY;
    this.scene.add(mesh);
    if (opts.collide !== false) {
      if (opts.rotY && Math.abs(Math.sin(opts.rotY)) > 0.05) {
        // approximate rotated box with expanded AABB
        const r = Math.abs(Math.cos(opts.rotY)), s = Math.abs(Math.sin(opts.rotY));
        this.addCollider(x, y, z, sx * r + sz * s, sy, sx * s + sz * r);
      } else {
        this.addCollider(x, y, z, sx, sy, sz);
      }
    }
    if (opts.raycast !== false) this.raycastMeshes.push(mesh);
    return mesh;
  }

  _build(quality) {
    const S = MAP_SIZE;
    const half = S / 2;

    // ----- sky & fog (clear bright daytime) -----
    // light distance haze only — keeps far cover readable without any gloom
    this.scene.fog = new THREE.Fog(0xbcd4ec, 130, 460);
    const skyGeo = new THREE.SphereGeometry(480, 24, 16);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        top: { value: new THREE.Color(0x2f74d0) },     // deep blue zenith
        mid: { value: new THREE.Color(0x74a9e6) },     // mid sky
        horizon: { value: new THREE.Color(0xdae8f4) },  // pale near the ground
      },
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform vec3 top; uniform vec3 mid; uniform vec3 horizon;
        varying vec3 vDir;
        void main() {
          float h = clamp(vDir.y, -0.1, 1.0);
          vec3 col = mix(horizon, mid, smoothstep(0.0, 0.30, h));
          col = mix(col, top, smoothstep(0.25, 0.9, h));
          // bright sun disk + glow high in the sky
          vec3 sunDir = normalize(vec3(-0.42, 0.72, -0.34));
          float d = max(dot(normalize(vDir), sunDir), 0.0);
          float disk = smoothstep(0.9975, 0.9992, d);
          float glow = pow(d, 220.0) * 0.6 + pow(d, 12.0) * 0.10;
          col += vec3(1.0, 0.97, 0.9) * (disk + glow);
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(sky);

    // drifting clouds — a few soft billboard puffs high overhead
    const cloudTex = canvasTexture(128, 128, (g, w, h) => {
      g.clearRect(0, 0, w, h);
      for (let i = 0; i < 26; i++) {
        const cx = w * (0.2 + Math.random() * 0.6);
        const cy = h * (0.35 + Math.random() * 0.3);
        const rr = 14 + Math.random() * 26;
        const gr = g.createRadialGradient(cx, cy, 0, cx, cy, rr);
        gr.addColorStop(0, 'rgba(255,255,255,0.9)');
        gr.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = gr;
        g.beginPath(); g.arc(cx, cy, rr, 0, 7); g.fill();
      }
    });
    const cloudMat = new THREE.MeshBasicMaterial({ map: cloudTex, transparent: true, opacity: 0.85, depthWrite: false, fog: false });
    for (let i = 0; i < 9; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 200 + Math.random() * 150;
      const cloud = new THREE.Mesh(new THREE.PlaneGeometry(120 + Math.random() * 90, 55 + Math.random() * 40), cloudMat);
      cloud.position.set(Math.cos(a) * r, 150 + Math.random() * 70, Math.sin(a) * r);
      cloud.lookAt(0, 40, 0);
      this.scene.add(cloud);
    }

    // ----- lights (midday sun) -----
    const hemi = new THREE.HemisphereLight(0xbcd8ff, 0x8a8171, 1.25);
    this.scene.add(hemi);

    // strong ambient floor so shadow-side faces stay a readable grey, never black
    this.scene.add(new THREE.AmbientLight(0x74869a, 0.68));

    // low fill from the shadow side so building faces turned away from the sun
    // still catch light instead of going flat black
    const shadowFill = new THREE.DirectionalLight(0x9fb0c4, 0.45);
    shadowFill.position.set(60, 30, -70);
    this.scene.add(shadowFill);

    const sun = new THREE.DirectionalLight(0xfff4e2, 2.6);
    sun.position.set(-84, 138, -66);   // high, matches the sky sun disk
    sun.castShadow = quality !== 'low';
    const shadowRes = quality === 'high' ? 2048 : 1024;
    sun.shadow.mapSize.set(shadowRes, shadowRes);
    sun.shadow.camera.left = -half - 10;
    sun.shadow.camera.right = half + 10;
    sun.shadow.camera.top = half + 10;
    sun.shadow.camera.bottom = -half - 10;
    sun.shadow.camera.near = 10;
    sun.shadow.camera.far = 320;
    sun.shadow.bias = -0.0013;
    this.scene.add(sun);
    this.sun = sun;

    // sky-blue bounce fill from the opposite side softens shadow interiors
    const skyFill = new THREE.DirectionalLight(0xaecbef, 0.5);
    skyFill.position.set(70, 90, 80);
    this.scene.add(skyFill);

    // ----- ground -----
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(S + 60, S + 60),
      new THREE.MeshStandardMaterial({ map: asphaltTexture(), roughness: 0.95, metalness: 0.02 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);
    this.raycastMeshes.push(ground);

    // road markings (center cross roads)
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xc9c47a, roughness: 0.9 });
    for (let i = -half + 10; i < half - 6; i += 12) {
      const dash = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.02, 5), lineMat);
      dash.position.set(0, 0.012, i);
      dash.receiveShadow = true;
      this.scene.add(dash);
      const dash2 = new THREE.Mesh(new THREE.BoxGeometry(5, 0.02, 0.35), lineMat);
      dash2.position.set(i, 0.012, 0);
      dash2.receiveShadow = true;
      this.scene.add(dash2);
    }

    // ----- perimeter walls -----
    const wallMat = new THREE.MeshStandardMaterial({ map: concreteTexture('#918a7d'), roughness: 0.9 });
    const wallH = 7, wallT = 1.6;
    this._solidBox(S + wallT, wallH, wallT, wallMat, 0, wallH / 2, -half, {});
    this._solidBox(S + wallT, wallH, wallT, wallMat, 0, wallH / 2, half, {});
    this._solidBox(wallT, wallH, S + wallT, wallMat, -half, wallH / 2, 0, {});
    this._solidBox(wallT, wallH, S + wallT, wallMat, half, wallH / 2, 0, {});
    // wall top razor-wire hint (thin dark cylinder lines)
    const wireMat = new THREE.MeshStandardMaterial({ color: 0x555b62, roughness: 0.55, metalness: 0.35 });
    [[0, -half], [0, half]].forEach(([x, z]) => {
      const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, S, 6), wireMat);
      wire.rotation.z = Math.PI / 2;
      wire.position.set(x, wallH + 0.3, z);
      this.scene.add(wire);
    });
    [[-half, 0], [half, 0]].forEach(([x, z]) => {
      const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, S, 6), wireMat);
      wire.rotation.x = Math.PI / 2;
      wire.position.set(x, wallH + 0.3, z);
      this.scene.add(wire);
    });

    // ----- buildings -----
    const buildings = [
      // [x, z, w, d, floors, hue]
      [-52, -52, 26, 20, 4, '#77705f'],
      [50, -55, 22, 26, 5, '#6a6e72'],
      [-55, 48, 24, 24, 3, '#7d6f5c'],
      [52, 52, 28, 18, 4, '#6f6a66'],
      [-18, -60, 16, 14, 3, '#736c60'],
      [22, 62, 18, 14, 3, '#6d6862'],
      [64, 8, 14, 22, 2, '#7a7264'],
      [-64, -8, 14, 20, 2, '#6e6960'],
    ];
    for (const [x, z, w, d, floors, hue] of buildings) {
      const h = floors * 3.4;
      const mat = new THREE.MeshStandardMaterial({ map: facadeTexture(floors, Math.max(3, Math.round(w / 4)), hue), roughness: 0.85 });
      const roofMat = new THREE.MeshStandardMaterial({ map: concreteTexture('#4a4740'), roughness: 0.95 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [mat, mat, roofMat, roofMat, mat, mat]);
      mesh.position.set(x, h / 2, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.addCollider(x, h / 2, z, w, h, d);
      this.raycastMeshes.push(mesh);
      // roof rim
      const rim = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, 0.5, d + 0.6), roofMat);
      rim.position.set(x, h + 0.25, z);
      rim.castShadow = true;
      this.scene.add(rim);
      // rooftop AC unit
      const ac = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 2), new THREE.MeshStandardMaterial({ color: 0x9aa0a4, roughness: 0.6, metalness: 0.4 }));
      ac.position.set(x + w * 0.2, h + 1.2, z - d * 0.15);
      ac.castShadow = true;
      this.scene.add(ac);
    }

    // ----- shipping containers -----
    const containerColors = ['#8a3b2a', '#2a5a7a', '#3d6b3a', '#7a6a2a', '#5a3a6a'];
    // all containers sit flat on the ground — never stacked
    const containers = [
      [-21, 20, 0.3], [-13, 21, -0.1], [-21, 27, 0.2],
      [28, -18, 1.4], [31, -25, 1.2], [38, -19, 1.3],
      [8, 38, -0.4], [-3, 41, 0.15],
      [-39, -18, 0.9], [-40, -10, 0.8],
      [16, -43, 2.2], [43, 31, 0.6], [-31, 60, 1.9],
    ];
    containers.forEach(([x, z, rot], i) => {
      const mat = new THREE.MeshStandardMaterial({
        map: containerTexture(containerColors[i % containerColors.length]),
        roughness: 0.75, metalness: 0.15,
      });
      this._solidBox(6.5, 2.6, 2.6, mat, x, 1.3, z, { rotY: rot });
    });

    // ----- crates & sandbags (cover) -----
    // single ground-level crates only — no stacks
    const crateMat = new THREE.MeshStandardMaterial({ map: crateTexture(), roughness: 0.9 });
    const cratePositions = [
      [-6, 12], [19, 8], [-12, -28], [36, 12], [5, -18],
      [-28, 34], [44, -38], [-45, 20], [10, 55], [-8, -48],
      [58, -20], [-58, 30], [24, -8], [-18, 46],
    ];
    for (const [x, z] of cratePositions) {
      this._solidBox(1.3, 1.3, 1.3, crateMat, x, 0.65, z, { rotY: Math.random() * 0.6 });
    }

    const sandMat = new THREE.MeshStandardMaterial({ color: 0x8f8266, roughness: 1 });
    const sandbagWalls = [
      [0, 22, 0], [12, -10, 1.2], [-16, -6, 0.5], [-2, -34, 0], [26, 28, 1.6],
      [-34, 8, 0.8], [48, 0, 1.57], [0, -22, 0.3],
    ];
    for (const [x, z, rot] of sandbagWalls) {
      const group = new THREE.Group();
      for (let row = 0; row < 3; row++) {
        const n = 5 - row;
        for (let i = 0; i < n; i++) {
          const bag = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 0.65, 3, 8), sandMat);
          bag.rotation.z = Math.PI / 2;
          bag.position.set((i - (n - 1) / 2) * 0.95, 0.25 + row * 0.42, (Math.random() - 0.5) * 0.08);
          bag.castShadow = true;
          bag.receiveShadow = true;
          group.add(bag);
        }
      }
      group.position.set(x, 0, z);
      group.rotation.y = rot;
      this.scene.add(group);
      const r = Math.abs(Math.cos(rot)), s = Math.abs(Math.sin(rot));
      this.addCollider(x, 0.7, z, 4.8 * r + 0.9 * s, 1.4, 4.8 * s + 0.9 * r);
      group.traverse((m) => { if (m.isMesh) this.raycastMeshes.push(m); });
    }

    // ----- explosive barrels -----
    const barrelMat = new THREE.MeshStandardMaterial({ color: 0xb3271e, roughness: 0.55, metalness: 0.35 });
    const barrelStripe = new THREE.MeshStandardMaterial({ color: 0xf0e6c8, roughness: 0.6 });
    const barrelSpots = [
      [-8, 18], [22, -14], [-24, -22], [14, 30], [38, 20], [-40, -30],
      [6, -40], [-30, 44], [46, -12], [-48, 6], [30, 48], [-12, 62],
    ];
    for (const [x, z] of barrelSpots) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.15, 14), barrelMat);
      body.castShadow = true; body.receiveShadow = true;
      const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.425, 0.425, 0.16, 14), barrelStripe);
      stripe.position.y = 0.2;
      g.add(body, stripe);
      g.position.set(x, 0.58, z);
      this.scene.add(g);
      const rec = { mesh: g, pos: new THREE.Vector3(x, 0.58, z), alive: true, hp: 25 };
      body.userData.barrel = rec;
      stripe.userData.barrel = rec;
      this.barrels.push(rec);
      this.raycastMeshes.push(body);
      this.addCollider(x, 0.58, z, 0.85, 1.15, 0.85);
    }

    // ----- watchtowers -----
    const towerMat = new THREE.MeshStandardMaterial({ color: 0x4c4438, roughness: 0.85 });
    for (const [x, z] of [[-half + 8, -half + 8], [half - 8, half - 8], [half - 8, -half + 8], [-half + 8, half - 8]]) {
      const legH = 7.5;
      for (const [ox, oz] of [[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4]]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.35, legH, 0.35), towerMat);
        leg.position.set(x + ox, legH / 2, z + oz);
        leg.castShadow = true;
        this.scene.add(leg);
      }
      this._solidBox(4.4, 0.4, 4.4, towerMat, x, legH + 0.2, z, {});
      this._solidBox(4.4, 1.1, 0.25, towerMat, x, legH + 1, z - 2.1, {});
      this._solidBox(4.4, 1.1, 0.25, towerMat, x, legH + 1, z + 2.1, {});
      this._solidBox(0.25, 1.1, 4.4, towerMat, x - 2.1, legH + 1, z, {});
      this._solidBox(0.25, 1.1, 4.4, towerMat, x + 2.1, legH + 1, z, {});
      const roof = new THREE.Mesh(new THREE.ConeGeometry(3.6, 1.6, 4), towerMat);
      roof.rotation.y = Math.PI / 4;
      roof.position.set(x, legH + 3, z);
      roof.castShadow = true;
      this.scene.add(roof);
      // block the space under the tower for simplicity
      this.addCollider(x, legH / 2, z, 3.4, legH, 3.4);
    }

    // ----- street lights -----
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x484d54, roughness: 0.6, metalness: 0.35 });
    const lampSpots = [[-14, -14], [14, 14], [-14, 40], [40, -14], [-40, 14], [14, -44], [-44, -40], [44, 44]];
    // daytime: fixtures stay as props but lamps are switched off (no glow / real lights)
    lampSpots.forEach(([x, z]) => {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 6.4, 8), poleMat);
      pole.position.set(x, 3.2, z);
      pole.castShadow = true;
      this.scene.add(pole);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.12, 0.12), poleMat);
      arm.position.set(x + 0.7, 6.3, z);
      this.scene.add(arm);
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 10, 8),
        new THREE.MeshStandardMaterial({ color: 0xcfd3d6, roughness: 0.4, metalness: 0.3 })
      );
      bulb.position.set(x + 1.35, 6.22, z);
      this.scene.add(bulb);
      this.addCollider(x, 3.2, z, 0.4, 6.4, 0.4);
      this.raycastMeshes.push(pole);
    });

    // ----- scattered debris / tires -----
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x2b2d30, roughness: 0.95 });
    for (const [x, z] of [[9, 3], [-22, 8], [33, -33], [-6, -14], [20, 44], [-52, -32]]) {
      const tire = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.17, 8, 16), tireMat);
      tire.rotation.x = Math.PI / 2;
      tire.position.set(x, 0.18, z);
      tire.castShadow = true;
      tire.receiveShadow = true;
      this.scene.add(tire);
    }

    // ----- wrecked car -----
    this._buildWreck(-2, -8, 0.6);
    this._buildWreck(30, 6, -1.1);

    // ----- foliage, barriers, fences, signs, poles -----
    this._addProps(half);

    // ----- enemy spawn points (near edges, outside player start) -----
    this.enemySpawns = [
      new THREE.Vector3(-half + 12, 0, -half + 20),
      new THREE.Vector3(half - 12, 0, -half + 16),
      new THREE.Vector3(-half + 14, 0, half - 14),
      new THREE.Vector3(half - 16, 0, half - 18),
      new THREE.Vector3(0, 0, -half + 10),
      new THREE.Vector3(0, 0, half - 10),
      new THREE.Vector3(-half + 10, 0, 0),
      new THREE.Vector3(half - 10, 0, 0),
      new THREE.Vector3(-34, 0, -half + 12),
      new THREE.Vector3(36, 0, half - 12),
    ];
  }

  _buildWreck(x, z, rot) {
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x37423f, roughness: 0.8, metalness: 0.3 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x243441, roughness: 0.35, metalness: 0.4 });
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.0, 1.9), bodyMat);
    body.position.y = 0.75;
    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.75, 1.7), glassMat);
    cab.position.set(-0.2, 1.55, 0);
    g.add(body, cab);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x121314, roughness: 0.95 });
    for (const [wx, wz] of [[-1.4, -0.95], [1.4, -0.95], [-1.4, 0.95], [1.4, 0.95]]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.3, 12), wheelMat);
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(wx, 0.38, wz);
      g.add(wheel);
    }
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    g.traverse((m) => {
      if (m.isMesh) {
        m.castShadow = true;
        m.receiveShadow = true;
        this.raycastMeshes.push(m);
      }
    });
    this.scene.add(g);
    const r = Math.abs(Math.cos(rot)), s = Math.abs(Math.sin(rot));
    this.addCollider(x, 0.9, z, 4.2 * r + 1.9 * s, 1.9, 4.2 * s + 1.9 * r);
  }

  // scatter foliage, cover and street dressing so the compound feels lived-in
  _addProps(half) {
    const bark = new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.95 });
    const leafA = new THREE.MeshStandardMaterial({ color: 0x3f6b2e, roughness: 0.95 });
    const leafB = new THREE.MeshStandardMaterial({ color: 0x4f7d38, roughness: 0.95 });
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x6f6f72, roughness: 0.98, metalness: 0.02 });
    const concreteMat = new THREE.MeshStandardMaterial({ map: concreteTexture('#9a9488'), roughness: 0.95 });
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0xd8b53a, roughness: 0.7 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x4a4f55, roughness: 0.55, metalness: 0.4 });
    const woodPole = new THREE.MeshStandardMaterial({ color: 0x6b5236, roughness: 0.9 });
    const wireMat = new THREE.MeshStandardMaterial({ color: 0x1c1e20, roughness: 0.6, metalness: 0.3 });
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x496b30, roughness: 1 });

    // --- trees (trunk collides, canopy is decorative) ---
    const treeSpots = [[-9, 52], [12, -54], [-63, -42], [61, -40], [-61, 61], [63, 57], [-42, -3], [45, 2], [-3, 66], [7, -66], [40, 40], [-38, 34]];
    for (const [x, z] of treeSpots) {
      const g = new THREE.Group();
      const h = 3.0 + Math.random() * 1.4;
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, h, 8), bark);
      trunk.position.y = h / 2; trunk.castShadow = true; g.add(trunk);
      for (let i = 0; i < 3; i++) {
        const r = 1.0 + Math.random() * 0.5;
        const blob = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 0), Math.random() < 0.5 ? leafA : leafB);
        blob.position.set((Math.random() - 0.5) * 0.9, h + 0.2 + i * 0.5, (Math.random() - 0.5) * 0.9);
        blob.castShadow = true; blob.receiveShadow = true; g.add(blob);
      }
      g.position.set(x, 0, z);
      this.scene.add(g);
      this.addCollider(x, h / 2, z, 0.5, h, 0.5);
      this.raycastMeshes.push(trunk);
    }

    // --- bushes ---
    for (const [x, z] of [[-14, 44], [18, 36], [-26, -10], [30, -28], [6, 20], [-46, 24], [50, -6], [-6, -30], [24, 52], [-52, -18], [42, 24], [-30, 58], [16, 8], [-18, 16]]) {
      const b = new THREE.Mesh(new THREE.IcosahedronGeometry(0.6 + Math.random() * 0.4, 0), Math.random() < 0.5 ? leafA : leafB);
      b.position.set(x, 0.45, z); b.scale.y = 0.75; b.castShadow = true; b.receiveShadow = true;
      this.scene.add(b);
    }

    // --- grass tufts (cheap billboards of crossed quads) ---
    for (let i = 0; i < 90; i++) {
      const x = (Math.random() - 0.5) * (half * 1.9);
      const z = (Math.random() - 0.5) * (half * 1.9);
      if (Math.hypot(x, z - 6) < 6) continue; // keep spawn clear
      const t = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.4, 4), grassMat);
      t.position.set(x, 0.2, z); t.rotation.y = Math.random() * Math.PI;
      this.scene.add(t);
    }

    // --- rocks ---
    for (const [x, z] of [[-11, 34], [26, -12], [-30, 20], [38, 30], [-48, -6], [8, 46], [52, 12], [-24, -26], [44, -30], [-40, 46]]) {
      const s = 0.4 + Math.random() * 0.7;
      const rk = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 0), rockMat);
      rk.position.set(x, s * 0.55, z); rk.rotation.set(Math.random(), Math.random(), Math.random());
      rk.castShadow = true; rk.receiveShadow = true;
      this.scene.add(rk); this.raycastMeshes.push(rk);
    }

    // --- concrete jersey barriers (cover, collide) ---
    const barrierRows = [[-12, 16, 0], [14, -8, 0], [-30, 0, Math.PI / 2], [28, 20, 0], [0, 34, 0], [-44, -14, Math.PI / 2], [48, -18, 0]];
    for (const [x, z, rot] of barrierRows) {
      const bar = new THREE.Group();
      const base = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.5, 0.72), concreteMat); base.position.y = 0.25;
      const top = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.5, 0.34), concreteMat); top.position.y = 0.72;
      bar.add(base, top);
      bar.position.set(x, 0, z); bar.rotation.y = rot;
      bar.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; this.raycastMeshes.push(m); } });
      this.scene.add(bar);
      const r = Math.abs(Math.cos(rot)), s = Math.abs(Math.sin(rot));
      this.addCollider(x, 0.5, z, 2.4 * r + 0.72 * s, 1.0, 2.4 * s + 0.72 * r);
    }

    // --- chain-link fence runs ---
    const meshTex = canvasTexture(64, 64, (gg, w, h) => {
      gg.clearRect(0, 0, w, h);
      gg.strokeStyle = 'rgba(150,155,160,0.9)'; gg.lineWidth = 2;
      for (let i = -w; i < w; i += 10) { gg.beginPath(); gg.moveTo(i, 0); gg.lineTo(i + h, h); gg.stroke(); gg.beginPath(); gg.moveTo(i + h, 0); gg.lineTo(i, h); gg.stroke(); }
    }, 6, 2);
    const fenceMat = new THREE.MeshStandardMaterial({ map: meshTex, transparent: true, alphaTest: 0.35, side: THREE.DoubleSide, metalness: 0.4, roughness: 0.6 });
    const fenceRuns = [[-half + 4, -30, -half + 4, 20], [half - 4, -20, half - 4, 30], [-30, half - 4, 24, half - 4]];
    for (const [x1, z1, x2, z2] of fenceRuns) {
      const len = Math.hypot(x2 - x1, z2 - z1);
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(len, 2.2), fenceMat);
      panel.position.set((x1 + x2) / 2, 1.1, (z1 + z2) / 2);
      panel.rotation.y = Math.atan2(x2 - x1, z2 - z1) + Math.PI / 2;
      this.scene.add(panel);
      const n = Math.round(len / 3);
      for (let i = 0; i <= n; i++) {
        const px = x1 + (x2 - x1) * (i / n), pz = z1 + (z2 - z1) * (i / n);
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.4, 6), metalMat);
        post.position.set(px, 1.2, pz); post.castShadow = true; this.scene.add(post);
      }
    }

    // --- warning signs ---
    for (const [x, z] of [[-8, 24], [20, 4], [-34, -6], [36, 34], [4, -22]]) {
      const g = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 2.2, 8), metalMat);
      pole.position.y = 1.1; pole.castShadow = true; g.add(pole);
      const board = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.5, 0.04), stripeMat);
      board.position.y = 1.9; g.add(board);
      const tri = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.24, 3), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.6 }));
      tri.rotation.x = Math.PI / 2; tri.position.set(0, 1.9, 0.03); g.add(tri);
      g.position.set(x, 0, z); this.scene.add(g);
      this.raycastMeshes.push(board);
    }

    // --- utility poles with hanging wires ---
    const poleSpots = [[-half + 6, -50], [-half + 6, -10], [-half + 6, 30], [-half + 6, 66]];
    let prev = null;
    for (const [x, z] of poleSpots) {
      const g = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 8.4, 8), woodPole);
      pole.position.y = 4.2; pole.castShadow = true; g.add(pole);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.14, 0.14), woodPole);
      arm.position.y = 7.6; g.add(arm);
      g.position.set(x, 0, z); this.scene.add(g);
      this.addCollider(x, 4.2, z, 0.4, 8.4, 0.4);
      this.raycastMeshes.push(pole);
      if (prev) {
        const dz = z - prev[1];
        const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, Math.abs(dz), 5), wireMat);
        wire.rotation.x = Math.PI / 2;
        wire.position.set(x - 0.05, 7.4, (z + prev[1]) / 2);
        this.scene.add(wire);
      }
      prev = [x, z];
    }
  }

  removeBarrel(rec) {
    rec.alive = false;
    this.scene.remove(rec.mesh);
    // remove its collider (closest match)
    const idx = this.colliders.findIndex(
      (c) => Math.abs((c.min.x + c.max.x) / 2 - rec.pos.x) < 0.6 && Math.abs((c.min.z + c.max.z) / 2 - rec.pos.z) < 0.6 && (c.max.y - c.min.y) < 1.6
    );
    if (idx >= 0) this.colliders.splice(idx, 1);
    rec.mesh.traverse((m) => {
      const i = this.raycastMeshes.indexOf(m);
      if (i >= 0) this.raycastMeshes.splice(i, 1);
    });
  }
}

// AABB collision resolve for a capsule approximated as a vertical AABB.
// Returns corrected position; mutates vel to zero blocked axes.
export function resolveCollisions(pos, radius, height, colliders, vel = null) {
  for (const c of colliders) {
    const pMinY = pos.y - height;
    const pMaxY = pos.y;
    if (pMaxY <= c.min.y || pMinY >= c.max.y) continue;
    const closestX = Math.max(c.min.x, Math.min(pos.x, c.max.x));
    const closestZ = Math.max(c.min.z, Math.min(pos.z, c.max.z));
    const dx = pos.x - closestX;
    const dz = pos.z - closestZ;
    const distSq = dx * dx + dz * dz;
    if (distSq < radius * radius) {
      if (distSq > 1e-8) {
        const dist = Math.sqrt(distSq);
        const push = radius - dist;
        pos.x += (dx / dist) * push;
        pos.z += (dz / dist) * push;
      } else {
        // center inside box: push out along smallest penetration axis
        const penXMin = pos.x - c.min.x + radius;
        const penXMax = c.max.x - pos.x + radius;
        const penZMin = pos.z - c.min.z + radius;
        const penZMax = c.max.z - pos.z + radius;
        const m = Math.min(penXMin, penXMax, penZMin, penZMax);
        if (m === penXMin) pos.x = c.min.x - radius;
        else if (m === penXMax) pos.x = c.max.x + radius;
        else if (m === penZMin) pos.z = c.min.z - radius;
        else pos.z = c.max.z + radius;
      }
      if (vel) { /* keep sliding: no hard velocity reset on XZ */ }
    }
  }
  return pos;
}

// Convenience wrapper for characters whose pos.y tracks feet/ground height
// rather than capsule top: shifts to the top-anchored convention resolveCollisions
// expects, resolves XZ, then writes the corrected X/Z back onto the caller's pos.
const _charColPos = new THREE.Vector3();
export function resolveCharacterCollisions(pos, radius, height, colliders) {
  _charColPos.set(pos.x, pos.y + height, pos.z);
  resolveCollisions(_charColPos, radius, height, colliders);
  pos.x = _charColPos.x;
  pos.z = _charColPos.z;
}

// Simple check whether a horizontal segment intersects any collider (used by AI line-of-sight fallback).
export function segmentBlocked(a, b, colliders, yMin = 0.4, yMax = 1.8) {
  const steps = 10;
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    const x = a.x + (b.x - a.x) * t;
    const z = a.z + (b.z - a.z) * t;
    const y = a.y + (b.y - a.y) * t;
    for (const c of colliders) {
      if (c.max.y < yMin || c.min.y > yMax) continue;
      if (x > c.min.x && x < c.max.x && z > c.min.z && z < c.max.z && y > c.min.y && y < c.max.y) return true;
    }
  }
  return false;
}
