// DOM HUD: crisp vector text at any DPI. Owns overlay visibility, bars,
// ammo readout, hitmarkers, damage vignette, the detection meter, XP/level,
// directional damage indicators, elimination toasts and the menu/pause/end
// screens.

import { drawSprite } from '../art/paint.js';

const $ = (id) => document.getElementById(id);

const DET_LABEL = {
  hidden: 'HIDDEN', suspicious: 'SUSPICIOUS', searching: 'SEARCHING',
  detected: 'DETECTED', combat: 'COMBAT',
};

export class Hud {
  constructor() {
    this.el = {
      hud: $('hud'), loading: $('loading'), menu: $('menu'),
      pause: $('pause'), end: $('end'),
      loadFill: $('load-fill'), loadLabel: $('load-label'),
      hpFill: $('hp-fill'), stFill: $('st-fill'), armorFill: $('armor-fill'),
      armorRow: $('armor-row'),
      ammoMag: $('ammo-mag'), ammoRes: $('ammo-res'),
      weaponName: $('weapon-name'), reloadHint: $('reload-hint'),
      slots: [$('slot-1'), $('slot-2'), $('slot-3'), $('slot-4')],
      slotIcons: [$('slot-1-icon'), $('slot-2-icon'), $('slot-3-icon'), $('slot-4-icon')],
      objCount: $('obj-count'), stageLabel: $('stage-label'),
      hitmark: $('hitmark'), damage: $('damage-flash'),
      dmgLeft: $('dmg-left'), dmgRight: $('dmg-right'), dmgOmni: $('dmg-omni'),
      detBar: $('det-bar'), detFill: $('det-fill'), detLabel: $('det-label'),
      xpFill: $('xp-fill'), lvlLabel: $('lvl-label'),
      notify: $('notify'),
      endTitle: $('end-title'), endDetail: $('end-detail'),
    };
    this._lastAmmo = null;
    this._lastDetState = null;
  }

  bind(h) {
    $('btn-deploy').onclick = h.deploy;
    $('btn-resume').onclick = h.resume;
    $('btn-restart').onclick = h.restart;
    $('btn-quit').onclick = h.quit;
    $('btn-redeploy').onclick = h.restart;
    $('btn-menu').onclick = h.quit;
  }

  setLoad(p, label) {
    this.el.loadFill.style.width = `${Math.round(p * 100)}%`;
    if (label) this.el.loadLabel.textContent = label;
  }

  // 'loading' | 'menu' | 'play' | 'pause' | 'end'
  show(state) {
    this.el.loading.classList.toggle('hidden', state !== 'loading');
    this.el.menu.classList.toggle('hidden', state !== 'menu');
    this.el.pause.classList.toggle('hidden', state !== 'pause');
    this.el.end.classList.toggle('hidden', state !== 'end');
    this.el.hud.classList.toggle('hidden', !(state === 'play' || state === 'pause'));
  }

  // Draws a small preview of a weapon's painted body sprite into a slot's
  // icon canvas — reuses the real high-res art, no separate icon assets.
  // Uses fixed dimensions (matching .slot-icon's CSS size) rather than
  // clientWidth/Height: this runs while #hud is still display:none during
  // boot, where layout sizes read as zero.
  setWeaponIcons(arsenal) {
    const W = 22, H = 14;
    const specs = [
      ['slot-1-icon', arsenal.rifle?.wpn], ['slot-2-icon', arsenal.pistol?.wpn],
      ['slot-3-icon', arsenal.knife?.wpn], ['slot-4-icon', arsenal.smg?.wpn],
    ];
    for (const [id, wpn] of specs) {
      const cv = $(id);
      if (!cv || !wpn) continue;
      const g = cv.getContext('2d');
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = W * dpr; cv.height = H * dpr;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, W, H);
      const spr = wpn.body;
      const scale = (W * 0.82) / spr.w;
      g.save();
      g.translate(W / 2 + 2, H / 2);
      drawSprite(g, spr, 0, 0, 0, scale, scale);
      g.restore();
    }
  }

  update(player) {
    const hpFrac = Math.max(0, player.hp / player.maxHp);
    this.el.hpFill.style.width = `${hpFrac * 100}%`;
    this.el.hpFill.classList.toggle('low', hpFrac < 0.35);
    this.el.stFill.style.width = `${player.stamina}%`;

    const hasArmor = player.maxArmor > 0;
    this.el.armorRow.classList.toggle('hidden', !hasArmor);
    if (hasArmor) this.el.armorFill.style.width = `${(player.armor / player.maxArmor) * 100}%`;

    const cur = player.cur;
    const isGun = cur.wpn.kind === 'gun';
    const magTxt = isGun ? String(cur.mag) : '—';
    const resTxt = isGun ? String(cur.reserve) : '';
    if (this._lastAmmo !== magTxt + resTxt + cur.wpn.name) {
      this._lastAmmo = magTxt + resTxt + cur.wpn.name;
      this.el.ammoMag.textContent = magTxt;
      this.el.ammoRes.textContent = resTxt;
      this.el.weaponName.textContent = cur.wpn.name;
    }
    this.el.reloadHint.classList.toggle(
      'hidden',
      !(player.reload || (isGun && cur.mag === 0 && cur.reserve > 0))
    );
    this.el.reloadHint.textContent = player.reload ? 'RELOADING' : 'PRESS R — RELOAD';

    const slotOf = { rifle: 0, pistol: 1, knife: 2, smg: 3 };
    this.el.slots.forEach((s, i) => { if (s) s.classList.toggle('active', i === slotOf[player.current]); });

    // persistent low-hp vignette
    if (player.hurtT <= 0) {
      this.el.damage.style.opacity = String((1 - hpFrac) * 0.45);
    }
  }

  setObjective(done, total) {
    this.el.objCount.textContent = `${done} / ${total}`;
  }

  setStage(n) {
    this.el.stageLabel.textContent = `STAGE ${n}`;
  }

  setSlot4Visible(visible) {
    if (this.el.slots[3]) this.el.slots[3].classList.toggle('hidden', !visible);
  }

  // Detection meter: 5-state colour ramp with a distinct pulse on every
  // state change so escalation/de-escalation is always noticed.
  setDetection(state, value) {
    this.el.detFill.style.width = `${Math.round(value * 100)}%`;
    if (state !== this._lastDetState) {
      this._lastDetState = state;
      this.el.detLabel.textContent = DET_LABEL[state] || 'HIDDEN';
      // prefixed so the state name never collides with the generic .hidden
      // utility class (the "no threat" state is literally named 'hidden')
      this.el.detBar.className = `det-bar det-${state}`;
      this.el.detBar.classList.remove('pulse');
      void this.el.detBar.offsetWidth;
      this.el.detBar.classList.add('pulse');
    }
  }

  setProgress(level, xpFrac) {
    this.el.lvlLabel.textContent = `LVL ${level}`;
    this.el.xpFill.style.width = `${Math.round(xpFrac * 100)}%`;
  }

  setAimScreen(x, y) { this._aimX = x; this._aimY = y; }

  // kind: 'hit' | 'headshot' | 'kill'
  hitmark(kind = 'hit') {
    const el = this.el.hitmark;
    el.classList.remove('show', 'headshot', 'kill');
    void el.offsetWidth;           // restart CSS animation
    if (this._aimX !== undefined) {
      el.style.left = `${this._aimX}px`;
      el.style.top = `${this._aimY}px`;
    }
    if (kind === 'kill') el.classList.add('kill');
    else if (kind === 'headshot') el.classList.add('headshot');
    el.classList.add('show');
  }

  damageFlash(hpFrac) {
    this.el.damage.style.opacity = String(0.55 + (1 - hpFrac) * 0.3);
    clearTimeout(this._dmgT);
    this._dmgT = setTimeout(() => {
      this.el.damage.style.opacity = String((1 - hpFrac) * 0.45);
    }, 140);
  }

  // dx: world-space offset from player to the damage source (screen-left/
  // right map directly in this side view). omni: non-directional hazard.
  damageDirection(dx, omni) {
    const el = omni ? this.el.dmgOmni : (dx < 0 ? this.el.dmgLeft : this.el.dmgRight);
    if (!el) return;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
  }

  notify(text) {
    const el = this.el.notify;
    el.textContent = text;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
  }

  // The campaign is endless — the only way a run ends is the operator going
  // down, so this is always the K.I.A. screen with a run summary.
  end(stats) {
    this.el.endTitle.textContent = 'K.I.A.';
    this.el.endTitle.style.color = 'var(--red)';
    this.el.endDetail.innerHTML = stats;
  }
}
