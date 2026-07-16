// Loads the external rigged enemy body (phoenix.fbx) once and hands back a
// normalized template that Enemy clones per-spawn. The FBX ships no textures
// and no animation clips (T-pose only), so we apply our own materials and
// drive the skeleton procedurally. Loading is best-effort: if anything fails
// the game falls back to the procedural box-soldier, so it can never break.

import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const TARGET_HEIGHT = 1.82; // metres, feet at y=0

// procedural camo so the untextured mesh still reads as a soldier
function camoTexture(base, spots) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = base;
  g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 70; i++) {
    g.fillStyle = spots[i % spots.length];
    g.globalAlpha = 0.55 + Math.random() * 0.35;
    const x = Math.random() * 128, y = Math.random() * 128;
    const r = 6 + Math.random() * 16;
    g.beginPath();
    g.ellipse(x, y, r, r * (0.6 + Math.random() * 0.5), Math.random() * 3, 0, 7);
    g.fill();
  }
  g.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export const ENEMY_TEXTURES = {
  assault: () => camoTexture('#3f4632', ['#2c3122', '#4b533b', '#20241a', '#5a624a']),
  rusher: () => camoTexture('#5a2b26', ['#3e1c19', '#6e3a30', '#241210', '#7a4438']),
  heavy: () => camoTexture('#4a4436', ['#332f25', '#5c5340', '#211f18', '#6b6250']),
};

let _loading = null;

// returns Promise<{ root:Object3D, forwardOffset:number } | null>
export function loadEnemyTemplate() {
  if (_loading) return _loading;
  const url = (import.meta.env.BASE_URL || '/') + 'models/phoenix.fbx';
  _loading = new Promise((resolve) => {
    try {
      new FBXLoader().load(
        url,
        (obj) => {
          try {
            const t = normalize(obj);
            console.info('[enemy model] loaded');
            resolve(t);
          } catch (e) {
            console.warn('[enemy model] normalize failed, using fallback', e);
            resolve(null);
          }
        },
        undefined,
        (err) => {
          console.warn('[enemy model] load failed, using fallback', err);
          resolve(null);
        }
      );
    } catch (e) {
      console.warn('[enemy model] loader threw, using fallback', e);
      resolve(null);
    }
  });
  return _loading;
}

function normalize(obj) {
  // scale so the model stands TARGET_HEIGHT tall and its feet rest on y=0,
  // centred on the origin in x/z.
  obj.updateWorldMatrix(true, true);
  const box = new THREE.Box3().setFromObject(obj);
  const size = new THREE.Vector3();
  box.getSize(size);
  const h = size.y || 1;
  const s = TARGET_HEIGHT / h;
  obj.scale.setScalar(s);
  obj.updateWorldMatrix(true, true);
  const box2 = new THREE.Box3().setFromObject(obj);
  const centre = new THREE.Vector3();
  box2.getCenter(centre);
  obj.position.x -= centre.x;
  obj.position.z -= centre.z;
  obj.position.y -= box2.min.y;

  // strip the untextured phong materials; Enemy re-materialises per type
  obj.traverse((m) => {
    if (m.isMesh || m.isSkinnedMesh) {
      m.castShadow = true;
      m.receiveShadow = true;
      m.frustumCulled = false;
    }
  });

  // the mesh's native front is +z, which matches how Enemy maps yaw onto the
  // model (local +z -> facing direction), so no extra yaw offset is needed.
  return { root: obj, forwardOffset: 0 };
}
