// Premium mobile home shell: animated character + weapon showcase, currency
// counters, feature navigation and slide-up modal panels (missions, shop,
// battle pass, achievements, settings, etc.). Presentation only — it reads
// Progression and reuses the existing loadout/crate screens via MetaUI.

import { drawSprite } from '../art/paint.js';
import { drawSoldier } from './rig.js';
import { newWeaponState } from './rig.js';
import { CATALOG, itemById } from './meta.js';
import { BP_TIERS } from './progression.js';
import { icon, paintIcons } from './icons.js';

// Small inline currency glyph for use inside generated panel text.
const cur = (name) => icon(name, 'cur-sm');

const $ = (id) => document.getElementById(id);

export class HomeUI {
  constructor({ progression, audio, assets, metaUI }) {
    this.p = progression;
    this.audio = audio;
    this.assets = assets;
    this.metaUI = metaUI;
    this.active = false;
    this.t = 0;
    this._counters = {};

    // showcase entity + weapon state (rebuilt on refresh)
    this.ent = {
      x: 0, y: 0, facing: 1, aimLocal: -0.1, aimSmooth: -0.1, aimWorld: -0.1,
      gaitPhase: 0, speedNorm: 0, onGround: true, airTime: 0, vy: 0, vx: 0,
      crouchSpring: 0, breathT: 0, lean: 0, hurtT: 0, deadT: 0, sprintBlend: 0,
    };
    this.showWs = newWeaponState();
    this.showParts = assets.ranger;
    this.showWpn = assets.weapons.rifle;
  }

  mount() {
    // feature tiles / chips: data-tab switches the bottom tab; data-panel opens
    // a modal. Everything taps with a bounce + soft click.
    document.querySelectorAll('[data-panel], [data-tab]').forEach((el) => {
      if (el.classList.contains('home-tab')) return; // handled by MetaUI
      el.addEventListener('click', () => {
        this.bounce(el);
        this.audio && this.audio.pop && this.audio.pop();
        const panel = el.getAttribute('data-panel');
        const tab = el.getAttribute('data-tab');
        if (tab) this.metaUI.switchTab(tab);
        else if (panel === 'collection') this.metaUI.switchTab('crates');
        else if (panel) this.openPanel(panel);
      });
    });
    paintIcons(document);   // swap every [data-ic] placeholder for its glyph
    $('modal-close').addEventListener('click', () => this.closePanel());
    $('modal-host').querySelector('.modal-scrim').addEventListener('click', () => this.closePanel());
    // pop on the bottom tabs too
    document.querySelectorAll('.home-tab').forEach((b) =>
      b.addEventListener('click', () => { this.bounce(b); this.audio && this.audio.pop && this.audio.pop(); }));

    this.initParticles();
    requestAnimationFrame((ts) => this.loop(ts));
  }

  setActive(on) {
    this.active = on;
    if (on) this.refresh();
  }

  // ---- data → UI ----
  refresh() {
    const p = this.p;
    p.ensureMissions();
    this.animateCounter($('token-count'), p.coins);
    this.animateCounter($('gem-count'), p.gems);
    this.animateCounter($('energy-count'), p.energy);
    $('avatar-lvl').textContent = p.data.level;
    $('home-xp-fill').style.width = `${Math.round(p.xpProgress() * 100)}%`;
    const ready = (p.data.missions || []).filter((m) => !m.claimed && p.missionProgress(m) >= m.goal).length +
      (p.data.weekly || []).filter((m) => !m.claimed && p.missionProgress(m) >= m.goal).length;
    $('missions-badge').textContent = ready ? `${ready} ready` : 'In progress';
    $('bp-badge').textContent = `Tier ${p.bpTier}`;
    const mailDot = $('mail-dot'); if (mailDot) mailDot.style.display = this._mailClaimed ? 'none' : '';
    // deploy button reflects a resumable run (continue) vs a fresh deployment
    const run = p.loadRun && p.loadRun();
    const dl = document.querySelector('#btn-deploy .play-label');
    const ds = document.querySelector('#btn-deploy .play-sub');
    if (dl && ds) {
      if (run) { dl.textContent = 'CONTINUE'; ds.textContent = `Resume · Stage ${run.stage}`; }
      else { dl.textContent = 'DEPLOY'; ds.textContent = 'Sector 9 — Cinder Works'; }
    }
    // showcase reflects equipped loadout
    const opId = p.equipped('operator');
    const opItem = opId && itemById(opId);
    this.showParts = (opItem && this.assets[opItem.apply.variant]) || this.assets.ranger;
    const wid = p.equipped('wpn_primary');
    const wItem = wid && itemById(wid);
    this.showWpn = (wItem && this.assets.weapons[wItem.apply.weapon]) || this.assets.weapons.rifle;
  }

  animateCounter(el, to) {
    if (!el) return;
    const key = el.id;
    const from = this._counters[key] !== undefined ? this._counters[key] : to;
    if (from === to) { el.textContent = to; this._counters[key] = to; return; }
    const start = performance.now(), dur = 500;
    const step = (now) => {
      const k = Math.min(1, (now - start) / dur);
      const val = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      el.textContent = val;
      if (k < 1) requestAnimationFrame(step); else this._counters[key] = to;
    };
    this._counters[key] = to;
    requestAnimationFrame(step);
  }

  bounce(el) { el.classList.remove('tap-bounce'); void el.offsetWidth; el.classList.add('tap-bounce'); }

  toast(msg) {
    let t = $('home-toast');
    if (!t) { t = document.createElement('div'); t.id = 'home-toast'; t.className = 'home-toast'; $('menu').appendChild(t); }
    t.textContent = msg;
    t.classList.remove('show'); void t.offsetWidth; t.classList.add('show');
  }

  // ---- animated showcase + background ----
  loop(ts) {
    const dt = Math.min(0.05, (ts - (this._last || ts)) / 1000);
    this._last = ts;
    if (this.active) { this.t += dt; this.drawChar(dt); this.drawWeapon(); this.drawParticles(dt); }
    requestAnimationFrame((n) => this.loop(n));
  }

  drawChar(dt) {
    const cv = $('hero-char'); if (!cv) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = cv.clientWidth || 220, H = cv.clientHeight || 260;
    if (cv.width !== W * dpr) { cv.width = W * dpr; cv.height = H * dpr; }
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, H);
    const e = this.ent;
    e.breathT += dt;
    e.aimLocal = e.aimSmooth = e.aimWorld = -0.08 + Math.sin(e.breathT * 0.8) * 0.05;
    e.lean = Math.sin(e.breathT * 0.5) * 0.02;
    const scale = (H * 0.86) / 150;
    g.save();
    g.translate(W / 2, H * 0.98);
    g.scale(scale, scale);
    try { drawSoldier(g, this.showParts, this.assets.shadow, e, { wpn: this.showWpn, ws: this.showWs }); } catch (err) { /* showcase only */ }
    g.restore();
  }

  drawWeapon() {
    const cv = $('hero-weapon'); if (!cv) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = cv.clientWidth || 130, H = cv.clientHeight || 90;
    if (cv.width !== W * dpr) { cv.width = W * dpr; cv.height = H * dpr; }
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, H);
    const spr = this.showWpn && this.showWpn.body;
    if (!spr) return;
    const scale = Math.min((W * 0.8) / spr.w, (H * 0.8) / spr.h) * 1.6;
    g.save();
    g.translate(W / 2, H / 2);
    g.rotate(Math.sin(this.t * 0.7) * 0.28);      // slow rock
    g.scale(Math.cos(this.t * 0.5) * 0.25 + 0.9, 1); // subtle turn illusion
    drawSprite(g, spr, 0, 0, 0, scale, scale);
    g.restore();
  }

  // lightweight floating particle field behind the UI
  initParticles() {
    this.parts = [];
    for (let i = 0; i < 34; i++) {
      this.parts.push({ x: Math.random(), y: Math.random(), r: 1 + Math.random() * 2.4, s: 0.006 + Math.random() * 0.014, tw: Math.random() * 6 });
    }
  }
  drawParticles(dt) {
    const cv = $('home-particles'); if (!cv) return;
    const W = cv.clientWidth || window.innerWidth, H = cv.clientHeight || window.innerHeight;
    if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
    const g = cv.getContext('2d');
    g.clearRect(0, 0, W, H);
    for (const p of this.parts) {
      p.y -= p.s * dt * 60 / H * 60; p.tw += dt;
      if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
      const a = 0.18 + Math.abs(Math.sin(p.tw)) * 0.28;
      g.fillStyle = `rgba(150,210,255,${a})`;
      g.beginPath(); g.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2); g.fill();
    }
  }

  // ---- modal panels ----
  openPanel(name) {
    const host = $('modal-host'), title = $('modal-title'), body = $('modal-body');
    const b = this[`panel_${name}`] ? this[`panel_${name}`]() : { title: name.toUpperCase(), html: '<p class="m-note">Coming soon.</p>' };
    title.textContent = b.title;
    body.innerHTML = b.html;
    host.classList.remove('hidden', 'closing');
    if (b.after) b.after(body);
  }
  closePanel() {
    const host = $('modal-host');
    host.classList.add('closing');
    this.audio && this.audio.pop && this.audio.pop();
    setTimeout(() => host.classList.add('hidden'), 220);
  }

  panel_missions() {
    const p = this.p;
    const rowsFor = (list, key) => (p.data[key] || []).map((m, i) => {
      const prog = p.missionProgress(m), done = prog >= m.goal;
      const rw = this.rewardLabel(m.reward);
      return `<div class="m-row"><div class="m-ico">${icon('checklist')}</div><div class="m-main">
        <div class="m-title">${m.desc}</div>
        <div class="m-desc">${prog} / ${m.goal} · ${rw}</div>
        <div class="m-bar"><span style="width:${Math.round(prog / m.goal * 100)}%"></span></div>
      </div><button class="m-btn ${m.claimed ? '' : done ? '' : 'locked'}" data-claim="${key}:${i}" ${m.claimed || !done ? 'disabled' : ''}>${m.claimed ? 'DONE' : done ? 'CLAIM' : 'LOCKED'}</button></div>`;
    }).join('');
    return {
      title: 'MISSIONS',
      html: `<div class="m-sub">DAILY</div>${rowsFor('missions', 'missions')}
             <div class="m-sub">WEEKLY</div>${rowsFor('weekly', 'weekly')}`,
      after: (body) => this.wireClaims(body),
    };
  }

  wireClaims(body) {
    body.querySelectorAll('[data-claim]').forEach((btn) => {
      if (btn.disabled) return;
      btn.addEventListener('click', () => {
        const [list, idx] = btn.getAttribute('data-claim').split(':');
        const m = this.p.claimMission(list, +idx);
        if (m) { this.audio && this.audio.reward && this.audio.reward(); this.toast(`CLAIMED · ${this.rewardLabel(m.reward)}`); this.refresh(); this.openPanel('missions'); }
      });
    });
  }

  panel_battlepass() {
    const p = this.p;
    const nodes = BP_TIERS.map((row) => {
      const state = p.data.bpClaimed[row.tier] ? 'claimed' : p.bpClaimable(row.tier) ? 'ready' : '';
      const ico = icon(row.reward.item ? 'box' : row.reward.gems ? 'gem' : row.reward.energy ? 'bolt' : 'coin');
      return `<button class="bp-node ${state} ${row.premium ? 'premium' : ''}" data-bp="${row.tier}">
        <div class="bp-t">TIER ${row.tier}${row.premium ? ' ' + icon('star', 'inl') : ''}</div>
        <div class="bp-rw">${ico}</div><div class="bp-lbl">${row.label}</div>
        <div class="m-btn ${state === 'ready' ? '' : 'locked'}" style="margin-top:6px;pointer-events:none">${state === 'claimed' ? 'DONE' : state === 'ready' ? 'CLAIM' : 'LOCKED'}</div>
      </button>`;
    }).join('');
    return {
      title: 'BATTLE PASS',
      html: `<div class="bp-head"><div><div class="m-desc">SEASON 1 · CINDER PROTOCOL</div><div class="bp-tier-num">TIER ${p.bpTier}</div></div>
        <div style="text-align:right"><div class="m-desc">${p.data.bpXp % 1000} / 1000 XP</div>
        <div class="m-bar" style="width:120px"><span style="width:${Math.round(p.bpTierProgress() * 100)}%"></span></div></div></div>
        <div class="bp-track">${nodes}</div>
        <p class="m-note">Earn Pass XP from deployments. Premium tiers unlock with the season pass.</p>`,
      after: (body) => body.querySelectorAll('[data-bp]').forEach((n) => n.addEventListener('click', () => {
        const row = this.p.claimBpTier(+n.getAttribute('data-bp'));
        if (row) { this.audio && this.audio.reward && this.audio.reward(); this.toast(`UNLOCKED · ${row.label}`); this.refresh(); this.openPanel('battlepass'); }
        else { this.audio && this.audio.pop && this.audio.pop(); }
      })),
    };
  }

  panel_shop() {
    const offers = [
      { cls: 'shop-featured', ico: 'gift', name: 'Starter Bundle', price: `20 ${cur('gem')}`, act: () => { if (this.p.spendGems(20)) { this.p.grantReward({ coins: 500, item: 'rifle_cinder' }); return 'Bundle unlocked!'; } return 'Not enough gems'; } },
      { cls: 'shop-daily', ico: 'coin', name: 'Coin Pack · 400', price: `8 ${cur('gem')}`, act: () => { if (this.p.spendGems(8)) { this.p.grantReward({ coins: 400 }); return '+400 coins'; } return 'Not enough gems'; } },
      { cls: 'shop-bundle', ico: 'box', name: 'Supply Crate', price: `120 ${cur('coin')}`, act: () => { this.closePanel(); this.metaUI.switchTab('crates'); return null; } },
      { cls: 'shop-daily', ico: 'bolt', name: 'Energy Refill', price: `5 ${cur('gem')}`, act: () => { if (this.p.spendGems(5)) { this.p.refillEnergy(); return 'Energy refilled'; } return 'Not enough gems'; } },
    ];
    this._shopOffers = offers;
    const cards = offers.map((o, i) => `<div class="shop-card ${o.cls}" data-shop="${i}">
      <div class="shop-banner">${icon(o.ico)}</div>
      <div class="shop-info"><div class="shop-name">${o.name}</div><div class="shop-price">${o.price}</div></div></div>`).join('');
    return {
      title: 'SHOP',
      html: `<div class="m-sub">FEATURED &amp; DAILY DEALS</div><div class="shop-grid">${cards}</div>
        <p class="m-note">Gems ${cur('gem')} are premium currency · Coins ${cur('coin')} are earned in combat.</p>`,
      after: (body) => body.querySelectorAll('[data-shop]').forEach((c) => c.addEventListener('click', () => {
        this.bounce(c);
        const res = this._shopOffers[+c.getAttribute('data-shop')].act();
        if (res) { this.audio && this.audio.reward && this.audio.reward(); this.toast(res); this.refresh(); }
      })),
    };
  }

  panel_achievements() {
    const d = this.p.data;
    const list = [
      { ico: 'skull', name: 'Executioner', desc: 'Total eliminations', val: d.totalKills, goal: 500 },
      { ico: 'target', name: 'Marksman', desc: 'Total headshots', val: d.totalHeadshots, goal: 200 },
      { ico: 'wave', name: 'Survivor', desc: 'Best stage reached', val: d.longestSurvivalStage, goal: 15 },
      { ico: 'box', name: 'Collector', desc: 'Crates opened', val: d.cratesOpened, goal: 25 },
      { ico: 'star', name: 'Veteran', desc: 'Operator level', val: d.level, goal: 20 },
    ];
    return {
      title: 'ACHIEVEMENTS',
      html: list.map((a) => `<div class="m-row"><div class="m-ico">${icon(a.ico)}</div><div class="m-main">
        <div class="m-title">${a.name}</div><div class="m-desc">${a.desc} · ${Math.min(a.val, a.goal)} / ${a.goal}</div>
        <div class="m-bar"><span style="width:${Math.min(100, Math.round(a.val / a.goal * 100))}%"></span></div></div>
        <div class="m-btn ${a.val >= a.goal ? '' : 'locked'}" style="pointer-events:none">${a.val >= a.goal ? icon('check', 'inl') : ''}</div></div>`).join(''),
    };
  }

  panel_leaderboards() {
    const names = ['REAPER', 'NOVA', 'GHOST', 'VIPER', 'ONYX', 'HAVOC', 'STORM'];
    const you = { name: 'SGT. VANDAL (YOU)', score: this.p.data.totalKills * 10 + this.p.data.longestSurvivalStage * 50 };
    const rows = names.map((n, i) => ({ name: n, score: 4200 - i * 480 + (i % 2 ? 130 : 0) }));
    rows.push(you);
    rows.sort((a, b) => b.score - a.score);
    return {
      title: 'LEADERBOARDS',
      html: `<div class="m-sub">SECTOR 9 · WEEKLY</div>` + rows.map((r, i) => `<div class="m-row" ${r.name.includes('YOU') ? 'style="border-color:var(--c-gems)"' : ''}>
        <div class="m-ico">${i + 1}</div><div class="m-main"><div class="m-title">${r.name}</div></div>
        <div class="shop-price">${r.score.toLocaleString()}</div></div>`).join(''),
    };
  }

  panel_mail() {
    const claimed = this._mailClaimed;
    return {
      title: 'MAIL',
      html: `<div class="m-row"><div class="m-ico">${icon('gift')}</div><div class="m-main"><div class="m-title">Welcome, Operator</div>
        <div class="m-desc">A gift from Command to get you started.</div></div>
        <button class="m-btn ${claimed ? 'locked' : ''}" id="mail-claim" ${claimed ? 'disabled' : ''}>${claimed ? 'CLAIMED' : `CLAIM 15 ${cur('gem')}`}</button></div>
        <p class="m-note">You have no other messages.</p>`,
      after: (body) => {
        const b = body.querySelector('#mail-claim');
        if (b && !claimed) b.addEventListener('click', () => {
          this.p.addGems(15); this._mailClaimed = true;
          this.audio && this.audio.reward && this.audio.reward(); this.toast('+15 GEMS'); this.refresh(); this.openPanel('mail');
        });
      },
    };
  }

  panel_news() {
    const items = [
      ['rifle', 'Arsenal Expansion', 'Sci-fi weapons added: Plasma Rifle, Railgun, Ion Cannon, Laser SMG and more — with projectile, beam, charge and overheat mechanics.'],
      ['smoke', 'Atmosphere Overhaul', 'Volumetric wind-driven smoke, cinematic grading and a reworked industrial skyline with cooling towers and cranes.'],
      ['layout', 'New Interface', 'A fresh premium home with missions, battle pass, shop and daily rewards.'],
    ];
    return { title: 'NEWS', html: items.map((n) => `<div class="m-row"><div class="m-ico">${icon(n[0])}</div><div class="m-main"><div class="m-title">${n[1]}</div><div class="m-desc">${n[2]}</div></div></div>`).join('') };
  }

  panel_events() {
    return {
      title: 'EVENTS',
      html: `<div class="m-row" style="border-color:var(--c-violet)"><div class="m-ico">${icon('fire')}</div><div class="m-main">
        <div class="m-title">CINDER PROTOCOL</div><div class="m-desc">Limited-time surge · double Pass XP from deployments this week.</div></div></div>
        <div class="m-row"><div class="m-ico">${icon('skull')}</div><div class="m-main"><div class="m-title">Hostile Overrun</div>
        <div class="m-desc">Weekend event — denser enemy waves, bonus coins per kill.</div></div></div>
        <p class="m-note">Events rotate weekly. Play deployments to progress event goals.</p>`,
    };
  }

  panel_clan() {
    return { title: 'CLAN', html: `<p class="m-note">You are not in a clan yet.</p>
      <div class="m-row"><div class="m-ico">${icon('shield')}</div><div class="m-main"><div class="m-title">3RD RECON</div><div class="m-desc">Open · 22 / 30 members</div></div><button class="m-btn" onclick="return false">JOIN</button></div>
      <div class="m-row"><div class="m-ico">${icon('swords')}</div><div class="m-main"><div class="m-title">CINDER WOLVES</div><div class="m-desc">Invite only · 30 / 30 members</div></div><button class="m-btn locked" disabled>FULL</button></div>` };
  }

  panel_friends() {
    const f = [['NOVA', 'In lobby', 'on'], ['GHOST', 'In mission', 'away'], ['VIPER', 'Offline', 'off']];
    return { title: 'FRIENDS', html: f.map((x) => `<div class="m-row"><div class="m-ico">${icon('dot', 'st-' + x[2])}</div><div class="m-main"><div class="m-title">${x[0]}</div><div class="m-desc">${x[1]}</div></div><button class="m-btn ${x[1] === 'Offline' ? 'locked' : ''}" ${x[1] === 'Offline' ? 'disabled' : ''}>INVITE</button></div>`).join('') + `<p class="m-note">Add friends to squad up.</p>` };
  }

  panel_profile() {
    const p = this.p, d = p.data;
    const stat = (k, v) => `<div class="m-row"><div class="m-main"><div class="m-title">${v}</div><div class="m-desc">${k}</div></div></div>`;
    const mm = Math.floor(d.longestSurvivalTime / 60), ss = String(d.longestSurvivalTime % 60).padStart(2, '0');
    return {
      title: 'PROFILE',
      html: `<div class="m-row" style="border-color:var(--c-blue)"><div class="m-ico">${icon('medal')}</div><div class="m-main"><div class="m-title">SGT. "VANDAL" · LVL ${d.level}</div><div class="m-desc">3RD RECON · login streak ${d.loginStreak || 1}d</div></div></div>
        ${stat('Total eliminations', d.totalKills)}${stat('Headshots', d.totalHeadshots)}${stat('Lifetime accuracy', p.accuracy() + '%')}
        ${stat('Best stage', d.longestSurvivalStage)}${stat('Best survival', mm + ':' + ss)}${stat('Deployments', d.gamesPlayed)}`,
    };
  }

  panel_settings() {
    const muted = this.audio && this.audio.master && this.audio.master.gain.value === 0;
    return {
      title: 'SETTINGS',
      html: `<div class="m-row"><div class="m-ico">${icon('sound')}</div><div class="m-main"><div class="m-title">Sound</div><div class="m-desc">Master audio</div></div>
        <button class="m-btn" id="set-sound">${muted ? 'OFF' : 'ON'}</button></div>
        <div class="m-row"><div class="m-ico">${icon('gamepad')}</div><div class="m-main"><div class="m-title">Controls</div><div class="m-desc">On-screen controls appear automatically on touch devices</div></div></div>
        <div class="m-row"><div class="m-ico">${icon('reset')}</div><div class="m-main"><div class="m-title">Reset progress</div><div class="m-desc">Clears levels, currency and unlocks</div></div>
        <button class="m-btn" id="set-reset" style="background:var(--red);color:#fff">RESET</button></div>
        <p class="m-note">CINDERFALL · Sector 9 — build 2026.07</p>`,
      after: (body) => {
        const snd = body.querySelector('#set-sound');
        if (snd) snd.addEventListener('click', () => {
          if (this.audio && this.audio.master) {
            const on = this.audio.master.gain.value === 0;
            this.audio.master.gain.value = on ? 0.9 : 0;
            snd.textContent = on ? 'ON' : 'OFF';
          }
          this.audio && this.audio.pop && this.audio.pop();
        });
        const rst = body.querySelector('#set-reset');
        if (rst) rst.addEventListener('click', () => {
          if (rst.dataset.confirm) {
            try { localStorage.removeItem('cinderfall.progress.v1'); } catch (e) {}
            location.reload();
          } else { rst.dataset.confirm = '1'; rst.textContent = 'CONFIRM?'; }
        });
      },
    };
  }

  rewardLabel(r) {
    if (!r) return '';
    if (r.coins) return `${r.coins} ${cur('coin')}`;
    if (r.gems) return `${r.gems} ${cur('gem')}`;
    if (r.energy) return `+${r.energy} ${cur('bolt')}`;
    if (r.item) { const it = itemById(r.item); return it ? it.name : 'Item'; }
    return '';
  }
}
