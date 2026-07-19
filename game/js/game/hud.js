// DOM HUD: crisp vector text at any DPI. Owns overlay visibility, bars,
// ammo readout, hitmarkers, damage vignette and the menu/pause/end screens.

const $ = (id) => document.getElementById(id);

export class Hud {
  constructor() {
    this.el = {
      hud: $('hud'), loading: $('loading'), menu: $('menu'),
      pause: $('pause'), end: $('end'),
      loadFill: $('load-fill'), loadLabel: $('load-label'),
      hpFill: $('hp-fill'), stFill: $('st-fill'),
      ammoMag: $('ammo-mag'), ammoRes: $('ammo-res'),
      weaponName: $('weapon-name'), reloadHint: $('reload-hint'),
      slots: [$('slot-1'), $('slot-2'), $('slot-3')],
      objCount: $('obj-count'),
      hitmark: $('hitmark'), damage: $('damage-flash'),
      endTitle: $('end-title'), endDetail: $('end-detail'),
    };
    this._lastAmmo = null;
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

  update(player) {
    const hpFrac = Math.max(0, player.hp / player.maxHp);
    this.el.hpFill.style.width = `${hpFrac * 100}%`;
    this.el.hpFill.classList.toggle('low', hpFrac < 0.35);
    this.el.stFill.style.width = `${player.stamina}%`;

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

    const slotOf = { rifle: 0, pistol: 1, knife: 2 };
    this.el.slots.forEach((s, i) => s.classList.toggle('active', i === slotOf[player.current]));

    // persistent low-hp vignette
    if (player.hurtT <= 0) {
      this.el.damage.style.opacity = String((1 - hpFrac) * 0.45);
    }
  }

  setObjective(done, total) {
    this.el.objCount.textContent = `${done} / ${total}`;
  }

  setAimScreen(x, y) { this._aimX = x; this._aimY = y; }

  hitmark(kill) {
    const el = this.el.hitmark;
    el.classList.remove('show');
    void el.offsetWidth;           // restart CSS animation
    if (this._aimX !== undefined) {
      el.style.left = `${this._aimX}px`;
      el.style.top = `${this._aimY}px`;
    }
    el.style.filter = kill ? 'drop-shadow(0 0 6px rgba(230,60,40,0.9))' : 'none';
    el.classList.add('show');
  }

  damageFlash(hpFrac) {
    this.el.damage.style.opacity = String(0.55 + (1 - hpFrac) * 0.3);
    clearTimeout(this._dmgT);
    this._dmgT = setTimeout(() => {
      this.el.damage.style.opacity = String((1 - hpFrac) * 0.45);
    }, 140);
  }

  end(win, stats) {
    this.el.endTitle.textContent = win ? 'SECTOR CLEARED' : 'K.I.A.';
    this.el.endTitle.style.color = win ? 'var(--amber)' : 'var(--red)';
    this.el.endDetail.innerHTML = stats;
  }
}
