// Store screen: the free-Diamonds ad loop and a category-filtered browser
// for spending Diamonds on cosmetics (crates stay the token/RNG path; this
// is the deterministic "spend Diamonds, get exactly this skin" path).
//
// Diamonds are earned, never bought — there is no real-money purchase path
// in the game.

import { CATALOG, RARITY, itemById, RARITY_DIAMOND_PRICE } from './meta.js';
import { DIAMOND_ICON, STORE_CATEGORIES, itemCategories } from './store.js';
import { watchRewardedAd } from '../engine/ads.js';
import { paintDiamond, setupHiDpi } from '../art/currency.js';
import { playCurrencyGain, animateCount } from './currencyfx.js';
import { t, onLangChange } from '../engine/i18n.js';

const $ = (id) => document.getElementById(id);

// Store-purchasable cosmetics: anything with a rarity price, i.e. rare and
// above — commons are crate-only (never worth spending Diamonds on).
function purchasableCatalog() {
  return CATALOG.filter((i) => RARITY_DIAMOND_PRICE[i.rarity] != null);
}

function isRetired(item) {
  return item.retiredAfter != null && Date.now() > item.retiredAfter;
}

// Diamond art — delegates to the shared currency.js painter (same asset
// used everywhere else) so every Diamond in the game reads as the same icon.
function drawDiamondArt(cv, scale = 1) {
  const { g, w, h } = setupHiDpi(cv);
  paintDiamond(g, w, h, scale);
}

export class StoreUI {
  constructor(deps) {
    this.p = deps.progression;
    this.previewItem = deps.previewItem;
    this.audio = deps.audio || null;
    this.category = 'featured';
    this.busy = false;
    this._countdownTimer = null;
  }

  mount() {
    this.renderCategories();
    $('btn-watch-ad-diamond').addEventListener('click', () => this.watchAdForDiamond());
    this.refresh();
    // ad cooldown/status ticks every second
    this._countdownTimer = setInterval(() => this.renderFreeDiamonds(), 1000);
    onLangChange(() => this.refresh());
  }

  refresh() {
    this.renderDiamondBalance();
    this.renderFreeDiamonds();
    this.renderItemGrid();
    this.renderCategories();
  }

  renderDiamondBalance() {
    const el = $('diamond-count');
    if (!el) return;
    const n = this.p.diamonds;
    const prev = this._lastDiamondCount;
    this._lastDiamondCount = n;
    if (prev == null || n <= prev) { el.textContent = String(n); return; }   // init / spend: snap
    animateCount(el, prev, n);
    playCurrencyGain(document.querySelector('.diamond-pill'), 'diamond', this.audio);
  }

  // ---- category chips ----
  renderCategories() {
    const host = $('store-cats');
    host.innerHTML = '';
    for (const cat of STORE_CATEGORIES) {
      const chip = document.createElement('button');
      chip.className = 'store-cat-chip' + (cat.key === this.category ? ' active' : '');
      chip.textContent = t(cat.labelKey);
      chip.addEventListener('click', () => { this.category = cat.key; this.applyCategoryVisibility(); this.renderItemGrid(); this.renderCategories(); if (this.audio) this.audio.ui(); });
      host.appendChild(chip);
    }
    this.applyCategoryVisibility();
  }

  applyCategoryVisibility() {
    const c = this.category;
    const showFree = c === 'featured';
    $('store-section-free').classList.toggle('hidden', !showFree);
    $('store-section-items').classList.remove('hidden');
    const headMap = {
      featured: 'cat.featured', weapons: 'head.weapons', skins: 'head.skins',
      knives: 'head.knives', limited: 'head.limited', inventory: 'head.inventory',
    };
    const head = $('store-items-head');
    if (head) head.textContent = t(headMap[c] || 'head.items');
  }

  // ---- Free Diamonds: ad progress ----
  renderFreeDiamonds() {
    const prog = this.p.diamondAdProgress();
    const fill = $('diamond-ad-fill');
    if (fill) fill.style.width = `${Math.round((prog.watched / prog.required) * 100)}%`;
    const count = $('diamond-ad-count');
    if (count) count.textContent = String(prog.watched);
    const status = $('diamond-ad-status');
    const btn = $('btn-watch-ad-diamond');
    if (!status || !btn) return;
    if (prog.capped) {
      status.textContent = t('store.dailyLimit');
      status.className = 'ad-status warn';
      btn.disabled = true;
    } else if (prog.cooldownMs > 0) {
      status.textContent = t('store.nextAdIn', { n: Math.ceil(prog.cooldownMs / 1000) });
      status.className = 'ad-status';
      btn.disabled = true;
    } else {
      status.textContent = t('store.earnedToday', { n: prog.grantedToday, max: prog.dailyCap });
      status.className = 'ad-status ok';
      btn.disabled = false;
    }
  }

  watchAdForDiamond() {
    if (this.busy) return;
    const prog = this.p.diamondAdProgress();
    if (prog.capped || prog.cooldownMs > 0) return;
    this.busy = true;
    watchRewardedAd(
      () => {
        // Only the ad provider's real reward callback can credit a watch —
        // never a bare button click — so a skipped/failed ad grants nothing.
        const res = this.p.recordDiamondAdWatch();
        this.busy = false;
        this.renderFreeDiamonds();
        this.renderDiamondBalance();
        if (res.diamondGranted) {
          const status = $('diamond-ad-status');
          if (status) { status.textContent = t('store.diamondEarned'); status.className = 'ad-status ok'; }
          if (this.audio) this.audio.ui();
        }
      },
      () => { this.busy = false; }
    );
  }

  // ---- category-filtered item grid: direct Diamond purchase of cosmetics ----
  renderItemGrid() {
    const grid = $('store-item-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const c = this.category;
    let items;
    if (c === 'inventory') {
      items = CATALOG.filter((i) => this.p.owns(i.id));
    } else {
      items = purchasableCatalog().filter((i) => !isRetired(i));
      if (c === 'weapons') items = items.filter((i) => [...itemCategories(i)].includes('weapons'));
      else if (c === 'skins') items = items.filter((i) => [...itemCategories(i)].includes('skins'));
      else if (c === 'knives') items = items.filter((i) => [...itemCategories(i)].includes('knives'));
      else if (c === 'limited') items = items.filter((i) => i.rarity === 'ultraLimited');
    }
    for (const item of items) {
      const owned = this.p.owns(item.id);
      const rarity = RARITY[item.rarity];
      const price = RARITY_DIAMOND_PRICE[item.rarity];
      const card = document.createElement('div');
      card.className = 'item-card' + (owned ? ' equipped' : '');
      card.style.setProperty('--rarity', rarity.color);
      card.style.setProperty('--rarity-glow', rarity.glow);
      const cv = document.createElement('canvas');
      cv.className = 'item-preview';
      card.appendChild(cv);
      const name = document.createElement('div');
      name.className = 'item-name';
      name.textContent = item.name;
      card.appendChild(name);
      const r = document.createElement('div');
      r.className = 'item-rarity';
      r.style.color = rarity.color;
      r.textContent = t(rarity.labelKey);
      card.appendChild(r);
      if (item.retiredAfter) {
        const tag = document.createElement('div');
        tag.className = 'item-tag';
        const daysLeft = Math.max(0, Math.ceil((item.retiredAfter - Date.now()) / 86400000));
        tag.textContent = t('store.retiresIn', { n: daysLeft });
        card.appendChild(tag);
      }
      if (!owned && price != null && c !== 'inventory') {
        const buyBtn = document.createElement('button');
        buyBtn.className = 'btn quiet';
        buyBtn.style.marginTop = '4px'; buyBtn.style.width = '100%'; buyBtn.style.padding = '4px 0'; buyBtn.style.fontSize = '9px';
        buyBtn.textContent = `${DIAMOND_ICON} ${price}`;
        buyBtn.addEventListener('click', (e) => { e.stopPropagation(); this.buyItemWithDiamonds(item); });
        card.appendChild(buyBtn);
      } else if (owned) {
        const owned2 = document.createElement('div');
        owned2.className = 'item-tag';
        owned2.textContent = t('item.owned');
        card.appendChild(owned2);
      }
      requestAnimationFrame(() => this.previewItem(item, cv));
      grid.appendChild(card);
    }
  }

  buyItemWithDiamonds(item) {
    if (this.busy) return;
    const price = RARITY_DIAMOND_PRICE[item.rarity];
    if (this.p.owns(item.id)) return;
    if (!this.p.spendDiamonds(price)) {
      const status = $('diamond-ad-status');
      if (status) { status.textContent = t('store.notEnoughDiamonds'); status.className = 'ad-status warn'; }
      return;
    }
    this.p.grant(item.id);
    if (this.audio) this.audio.ui();
    this.renderDiamondBalance();
    this.renderItemGrid();
  }
}
