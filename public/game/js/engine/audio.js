// Procedural WebAudio SFX — no external samples. Everything is synthesized:
// gunshots (noise burst + sub thump + mech click), reload foley, footsteps,
// knife whooshes, impacts and a low ambient bed. Initialized on first user
// gesture to satisfy autoplay policy; every call is failure-safe.

import { rand } from './math.js';

class AudioSys {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.noiseBuf = null;
    this.enabled = true;
    this.ambientOn = false;
  }

  init() {
    if (this.ctx || !this.enabled) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      const comp = this.ctx.createDynamicsCompressor();
      comp.threshold.value = -18; comp.ratio.value = 6;
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.7;
      this.master.connect(comp);
      comp.connect(this.ctx.destination);

      const len = this.ctx.sampleRate;
      this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const d = this.noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    } catch (e) { this.enabled = false; }
  }

  resume() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  _noise({ dur, gain, f0, f1, type = 'lowpass', q = 1, t0 = 0 }) {
    if (!this.ctx) return;
    const c = this.ctx, now = c.currentTime + t0;
    const src = c.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    src.playbackRate.value = rand(0.9, 1.1);
    const filt = c.createBiquadFilter();
    filt.type = type; filt.Q.value = q;
    filt.frequency.setValueAtTime(f0, now);
    if (f1 !== undefined) filt.frequency.exponentialRampToValueAtTime(Math.max(30, f1), now + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(gain, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    src.connect(filt); filt.connect(g); g.connect(this.master);
    src.start(now); src.stop(now + dur + 0.02);
  }

  _tone({ freq, f1, dur, gain, type = 'sine', t0 = 0 }) {
    if (!this.ctx) return;
    const c = this.ctx, now = c.currentTime + t0;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, now);
    if (f1) o.frequency.exponentialRampToValueAtTime(f1, now + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(gain, now);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    o.connect(g); g.connect(this.master);
    o.start(now); o.stop(now + dur + 0.02);
  }

  // ---- weapons ----
  shot(kind, vol = 1) {
    if (!this.ctx) return;
    if (kind === 'pistol') {
      this._noise({ dur: 0.16, gain: 0.5 * vol, f0: 5200, f1: 700 });
      this._tone({ freq: 150, f1: 60, dur: 0.1, gain: 0.4 * vol });
      this._noise({ dur: 0.03, gain: 0.25 * vol, f0: 8000, type: 'highpass' });
    } else {
      this._noise({ dur: 0.22, gain: 0.62 * vol, f0: 4200, f1: 420 });
      this._tone({ freq: 120, f1: 45, dur: 0.16, gain: 0.55 * vol });
      this._noise({ dur: 0.04, gain: 0.3 * vol, f0: 6500, type: 'highpass' });
      this._noise({ dur: 0.5, gain: 0.1 * vol, f0: 900, f1: 200, t0: 0.03 });
    }
  }

  dryFire() { this._tone({ freq: 1600, dur: 0.04, gain: 0.12, type: 'square' }); }

  reload(stage) {
    // 0 mag out, 1 mag in, 2 bolt
    if (stage === 0) { this._noise({ dur: 0.07, gain: 0.2, f0: 1800, f1: 600 }); this._tone({ freq: 420, dur: 0.05, gain: 0.1, type: 'triangle' }); }
    if (stage === 1) { this._noise({ dur: 0.06, gain: 0.25, f0: 1200, f1: 500 }); this._tone({ freq: 300, dur: 0.06, gain: 0.16, type: 'triangle' }); }
    if (stage === 2) { this._noise({ dur: 0.05, gain: 0.28, f0: 2600, f1: 900 }); this._tone({ freq: 700, f1: 350, dur: 0.07, gain: 0.14, type: 'square' }); }
  }

  equip() { this._noise({ dur: 0.09, gain: 0.16, f0: 1500, f1: 500 }); }

  casingTink() {
    this._tone({ freq: rand(2800, 3600), dur: 0.08, gain: 0.05, type: 'triangle' });
    this._tone({ freq: rand(4200, 5200), dur: 0.05, gain: 0.03, type: 'sine', t0: 0.03 });
  }

  // ---- melee ----
  swish(heavy) {
    this._noise({ dur: heavy ? 0.22 : 0.13, gain: heavy ? 0.2 : 0.13, f0: 500, f1: heavy ? 3200 : 2400, type: 'bandpass', q: 1.6 });
  }
  stab() {
    this._noise({ dur: 0.1, gain: 0.32, f0: 700, f1: 150 });
    this._tone({ freq: 90, f1: 45, dur: 0.09, gain: 0.25 });
  }

  // ---- movement / hits ----
  footstep(runNorm = 0.5) {
    this._noise({ dur: 0.05, gain: 0.05 + runNorm * 0.06, f0: rand(380, 560), f1: 160 });
  }
  land(hard) {
    this._noise({ dur: hard ? 0.18 : 0.1, gain: hard ? 0.3 : 0.14, f0: 500, f1: 90 });
  }
  hitFlesh() {
    this._noise({ dur: 0.09, gain: 0.26, f0: 600, f1: 160 });
    this._tone({ freq: 140, f1: 70, dur: 0.07, gain: 0.16 });
  }
  hurt() {
    this._tone({ freq: 220, f1: 90, dur: 0.16, gain: 0.22, type: 'sawtooth' });
    this._noise({ dur: 0.12, gain: 0.18, f0: 800, f1: 200 });
  }
  impact() { this._noise({ dur: 0.06, gain: 0.14, f0: 2400, f1: 700 }); }

  explosion() {
    this._noise({ dur: 1.1, gain: 0.9, f0: 1500, f1: 60 });
    this._tone({ freq: 55, f1: 28, dur: 0.9, gain: 0.7 });
    this._noise({ dur: 0.25, gain: 0.4, f0: 6000, type: 'highpass', t0: 0.01 });
  }

  ui() { this._tone({ freq: 640, dur: 0.05, gain: 0.07, type: 'triangle' }); }

  // ---- awareness / progression ----
  detectionBeep(state) {
    if (state === 'suspicious') this._tone({ freq: 720, dur: 0.09, gain: 0.09, type: 'triangle' });
    else if (state === 'searching') this._tone({ freq: 560, dur: 0.1, gain: 0.11, type: 'triangle' });
    else if (state === 'detected') { this._tone({ freq: 880, dur: 0.1, gain: 0.14, type: 'square' }); this._tone({ freq: 660, dur: 0.1, gain: 0.1, type: 'square', t0: 0.08 }); }
    else if (state === 'combat') { this._tone({ freq: 980, dur: 0.08, gain: 0.16, type: 'square' }); this._tone({ freq: 980, dur: 0.08, gain: 0.14, type: 'square', t0: 0.12 }); }
    else this._tone({ freq: 420, dur: 0.12, gain: 0.07, type: 'sine' });
  }

  pickup(kind) {
    const f0 = kind === 'health' ? 480 : kind === 'armor' ? 380 : 560;
    this._tone({ freq: f0, f1: f0 * 1.8, dur: 0.14, gain: 0.16, type: 'triangle' });
    this._tone({ freq: f0 * 2, f1: f0 * 3, dur: 0.1, gain: 0.08, type: 'sine', t0: 0.06 });
  }

  levelUp() {
    this._tone({ freq: 520, dur: 0.12, gain: 0.18, type: 'triangle' });
    this._tone({ freq: 660, dur: 0.14, gain: 0.16, type: 'triangle', t0: 0.1 });
    this._tone({ freq: 880, dur: 0.22, gain: 0.16, type: 'triangle', t0: 0.2 });
  }

  startAmbience() {
    if (!this.ctx || this.ambientOn) return;
    this.ambientOn = true;
    const c = this.ctx;
    const src = c.createBufferSource();
    src.buffer = this.noiseBuf; src.loop = true; src.playbackRate.value = 0.4;
    const filt = c.createBiquadFilter();
    filt.type = 'lowpass'; filt.frequency.value = 220;
    const g = c.createGain(); g.gain.value = 0.045;
    // slow wind swell
    const lfo = c.createOscillator(); lfo.frequency.value = 0.07;
    const lfoG = c.createGain(); lfoG.gain.value = 0.02;
    lfo.connect(lfoG); lfoG.connect(g.gain);
    src.connect(filt); filt.connect(g); g.connect(this.master);
    src.start(); lfo.start();
  }
}

export const audio = new AudioSys();
