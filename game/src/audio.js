// Procedural WebAudio sound engine — no audio files needed.
// Every effect is synthesized: gunshots, reloads, footsteps, explosions, UI.

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.sfxBus = null;
    this.volume = 0.7;
    this.listener = { pos: null, fwd: null }; // set every frame by game
    this._noiseBuf = null;
    this._ambientNodes = [];
    this._heartbeatTimer = 0;
  }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    // gentle limiter so stacked gunshots don't clip harshly
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -12;
    comp.knee.value = 24;
    comp.ratio.value = 8;
    comp.attack.value = 0.002;
    comp.release.value = 0.15;
    this.sfxBus = this.ctx.createGain();
    this.sfxBus.connect(comp);
    comp.connect(this.master);
    this.master.connect(this.ctx.destination);
    this._noiseBuf = this._makeNoise(2);
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.value = v;
  }

  _makeNoise(seconds) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  _noiseSource() {
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuf;
    src.loop = true;
    src.loopStart = Math.random();
    return src;
  }

  // Spatialize a node chain relative to the listener; returns final gain to connect from.
  _spatial(pos, baseGain = 1, maxDist = 90) {
    const g = this.ctx.createGain();
    const pan = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
    let vol = baseGain;
    let panVal = 0;
    if (pos && this.listener.pos) {
      const dx = pos.x - this.listener.pos.x;
      const dz = pos.z - this.listener.pos.z;
      const dist = Math.sqrt(dx * dx + dz * dz + (pos.y - this.listener.pos.y) ** 2);
      vol = baseGain * Math.max(0, 1 - dist / maxDist) ** 1.4;
      if (this.listener.fwd && dist > 0.5) {
        const f = this.listener.fwd;
        // right vector = fwd × up
        const rx = -f.z, rz = f.x;
        panVal = Math.max(-1, Math.min(1, (dx * rx + dz * rz) / dist));
      }
    }
    g.gain.value = vol;
    if (pan) {
      pan.pan.value = panVal * 0.8;
      g.connect(pan);
      pan.connect(this.sfxBus);
    } else {
      g.connect(this.sfxBus);
    }
    return g;
  }

  // ---------- weapons ----------

  gunshot(kind, pos = null) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const spec = {
      rifle:   { dur: 0.16, freq: 900,  boom: 110, gain: 0.75, crack: 0.5 },
      pistol:  { dur: 0.12, freq: 1300, boom: 160, gain: 0.6,  crack: 0.45 },
      shotgun: { dur: 0.28, freq: 500,  boom: 70,  gain: 1.0,  crack: 0.7 },
      sniper:  { dur: 0.34, freq: 700,  boom: 60,  gain: 1.0,  crack: 0.8 },
      enemy:   { dur: 0.14, freq: 800,  boom: 120, gain: 0.5,  crack: 0.35 },
    }[kind] || { dur: 0.15, freq: 900, boom: 110, gain: 0.7, crack: 0.5 };

    const out = this._spatial(pos, spec.gain, 120);

    // crack — filtered noise burst
    const noise = this._noiseSource();
    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(spec.freq * 2.2, t);
    bp.frequency.exponentialRampToValueAtTime(spec.freq * 0.5, t + spec.dur);
    bp.Q.value = 0.8;
    const ng = this.ctx.createGain();
    ng.gain.setValueAtTime(spec.crack, t);
    ng.gain.exponentialRampToValueAtTime(0.001, t + spec.dur);
    noise.connect(bp); bp.connect(ng); ng.connect(out);
    noise.start(t); noise.stop(t + spec.dur + 0.02);

    // boom — sine thump
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(spec.boom, t);
    osc.frequency.exponentialRampToValueAtTime(spec.boom * 0.4, t + spec.dur * 1.4);
    const og = this.ctx.createGain();
    og.gain.setValueAtTime(spec.gain * 0.8, t);
    og.gain.exponentialRampToValueAtTime(0.001, t + spec.dur * 1.5);
    osc.connect(og); og.connect(out);
    osc.start(t); osc.stop(t + spec.dur * 1.6);

    // tail — quiet reverberant hiss
    const tail = this._noiseSource();
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1800;
    const tg = this.ctx.createGain();
    tg.gain.setValueAtTime(0.12 * spec.gain, t + spec.dur * 0.4);
    tg.gain.exponentialRampToValueAtTime(0.001, t + spec.dur * 3);
    tail.connect(lp); lp.connect(tg); tg.connect(out);
    tail.start(t + spec.dur * 0.3); tail.stop(t + spec.dur * 3.1);
  }

  dryFire() {
    this._click(1400, 0.05, 0.25);
  }

  weaponSwitch() {
    this._click(900, 0.05, 0.18);
    setTimeout(() => this._click(1300, 0.05, 0.22), 90);
  }

  reloadStage(stage) {
    // stage: 0 mag out, 1 mag in, 2 bolt/rack
    if (stage === 0) { this._click(700, 0.07, 0.3); this._click(400, 0.1, 0.2); }
    else if (stage === 1) { this._click(1000, 0.06, 0.35); }
    else { this._click(1600, 0.045, 0.4); setTimeout(() => this._click(1100, 0.05, 0.3), 70); }
  }

  _click(freq, dur, gain) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const noise = this._noiseSource();
    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = freq; bp.Q.value = 3;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    noise.connect(bp); bp.connect(g); g.connect(this.sfxBus);
    noise.start(t); noise.stop(t + dur + 0.02);
  }

  // ---------- movement ----------

  footstep(running) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const noise = this._noiseSource();
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = running ? 500 : 380;
    const g = this.ctx.createGain();
    const v = running ? 0.16 : 0.09;
    g.gain.setValueAtTime(v, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
    noise.connect(lp); lp.connect(g); g.connect(this.sfxBus);
    noise.start(t); noise.stop(t + 0.12);
  }

  land() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.exponentialRampToValueAtTime(50, t + 0.12);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.3, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
    osc.connect(g); g.connect(this.sfxBus);
    osc.start(t); osc.stop(t + 0.16);
    this.footstep(true);
  }

  // ---------- feedback ----------

  hitmarker(headshot) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.value = headshot ? 2200 : 1500;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.12, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    osc.connect(g); g.connect(this.sfxBus);
    osc.start(t); osc.stop(t + 0.06);
  }

  killConfirm() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [660, 880].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.value = f;
      const g = this.ctx.createGain();
      const t0 = t + i * 0.07;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.14, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.12);
      osc.connect(g); g.connect(this.sfxBus);
      osc.start(t0); osc.stop(t0 + 0.14);
    });
  }

  playerHurt() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(90, t + 0.18);
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 700;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.28, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
    osc.connect(lp); lp.connect(g); g.connect(this.sfxBus);
    osc.start(t); osc.stop(t + 0.24);
  }

  heartbeat() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [0, 0.16].forEach((off, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(i === 0 ? 62 : 52, t + off);
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.0001, t + off);
      g.gain.exponentialRampToValueAtTime(i === 0 ? 0.4 : 0.28, t + off + 0.015);
      g.gain.exponentialRampToValueAtTime(0.001, t + off + 0.12);
      osc.connect(g); g.connect(this.sfxBus);
      osc.start(t + off); osc.stop(t + off + 0.14);
    });
  }

  // ---------- explosions / grenades ----------

  explosion(pos) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const out = this._spatial(pos, 1.4, 160);

    const noise = this._noiseSource();
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(3000, t);
    lp.frequency.exponentialRampToValueAtTime(120, t + 0.9);
    const ng = this.ctx.createGain();
    ng.gain.setValueAtTime(1.0, t);
    ng.gain.exponentialRampToValueAtTime(0.001, t + 1.1);
    noise.connect(lp); lp.connect(ng); ng.connect(out);
    noise.start(t); noise.stop(t + 1.2);

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(70, t);
    osc.frequency.exponentialRampToValueAtTime(28, t + 0.8);
    const og = this.ctx.createGain();
    og.gain.setValueAtTime(1.1, t);
    og.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
    osc.connect(og); og.connect(out);
    osc.start(t); osc.stop(t + 1.0);
  }

  grenadeBounce(pos) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const out = this._spatial(pos, 0.5, 60);
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(700 + Math.random() * 200, t);
    osc.frequency.exponentialRampToValueAtTime(300, t + 0.06);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.4, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    osc.connect(g); g.connect(out);
    osc.start(t); osc.stop(t + 0.1);
  }

  grenadePin() {
    this._click(2000, 0.04, 0.3);
  }

  // ---------- pickups / UI ----------

  pickup(kind) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const freqs = kind === 'health' ? [520, 780] : [440, 660];
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = f;
      const g = this.ctx.createGain();
      const t0 = t + i * 0.08;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.16, t0 + 0.015);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.18);
      osc.connect(g); g.connect(this.sfxBus);
      osc.start(t0); osc.stop(t0 + 0.2);
    });
  }

  waveStart() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [196, 262, 330].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = f;
      const lp = this.ctx.createBiquadFilter();
      lp.type = 'lowpass'; lp.frequency.value = 1200;
      const g = this.ctx.createGain();
      const t0 = t + i * 0.16;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.18, t0 + 0.03);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.5);
      osc.connect(lp); lp.connect(g); g.connect(this.sfxBus);
      osc.start(t0); osc.stop(t0 + 0.55);
    });
  }

  waveClear() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [523, 659, 784, 1046].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.value = f;
      const g = this.ctx.createGain();
      const t0 = t + i * 0.11;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.15, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.35);
      osc.connect(g); g.connect(this.sfxBus);
      osc.start(t0); osc.stop(t0 + 0.4);
    });
  }

  gameOver() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [330, 262, 196, 131].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = f;
      const lp = this.ctx.createBiquadFilter();
      lp.type = 'lowpass'; lp.frequency.value = 900;
      const g = this.ctx.createGain();
      const t0 = t + i * 0.28;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.16, t0 + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.7);
      osc.connect(lp); lp.connect(g); g.connect(this.sfxBus);
      osc.start(t0); osc.stop(t0 + 0.75);
    });
  }

  ricochet(pos) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const out = this._spatial(pos, 0.35, 50);
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    const f0 = 1800 + Math.random() * 1500;
    osc.frequency.setValueAtTime(f0, t);
    osc.frequency.exponentialRampToValueAtTime(f0 * 0.35, t + 0.14);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.25, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    osc.connect(g); g.connect(out);
    osc.start(t); osc.stop(t + 0.17);
  }

  // low ambient wind bed
  startAmbient() {
    if (!this.ctx || this._ambientNodes.length) return;
    const noise = this._noiseSource();
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 260; lp.Q.value = 0.5;
    const g = this.ctx.createGain();
    g.gain.value = 0.045;
    // slow wind swell
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoG = this.ctx.createGain();
    lfoG.gain.value = 0.02;
    lfo.connect(lfoG); lfoG.connect(g.gain);
    noise.connect(lp); lp.connect(g); g.connect(this.master);
    noise.start(); lfo.start();
    this._ambientNodes = [noise, lfo];
  }

  stopAmbient() {
    this._ambientNodes.forEach((n) => { try { n.stop(); } catch (_) {} });
    this._ambientNodes = [];
  }
}
