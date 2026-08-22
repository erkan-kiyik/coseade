// Store catalog data and the category filter chips.
//
// Cinderfall has no real-money purchases: there are no Diamond packages and
// no paid bundles. Diamonds are an entirely earned currency — from play,
// crates, missions and the rewarded-ad loop — and the store spends them on
// cosmetics. Anything that used to take a TL price has been removed rather
// than priced at zero, so there is no dormant billing path to re-enable by
// accident.

export const DIAMOND_ICON = '◆';

export function formatCountdown(ms) {
  if (ms == null) return '';
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${sec}s`;
}

// ---- Store category filter chips ----
// `labelKey` resolves through i18n at render time; `label` is the English
// fallback.
export const STORE_CATEGORIES = [
  { key: 'featured', label: 'FEATURED', labelKey: 'cat.featured' },
  { key: 'weapons', label: 'WEAPONS', labelKey: 'cat.weapons' },
  { key: 'skins', label: 'CHARACTER SKINS', labelKey: 'cat.skins' },
  { key: 'knives', label: 'KNIFE SKINS', labelKey: 'cat.knives' },
  { key: 'limited', label: 'LIMITED TIME', labelKey: 'cat.limited' },
  { key: 'inventory', label: 'INVENTORY', labelKey: 'cat.inventory' },
];

// Maps a CATALOG item's `kind`/`slot` to the category chips it belongs to.
export function itemCategories(item) {
  const cats = new Set(['featured']);
  if (item.slot === 'operator') cats.add('skins');
  else if (item.slot === 'knifeFinish') cats.add('knives');
  else cats.add('weapons');
  if (item.rarity === 'ultraLimited') cats.add('limited');
  return cats;
}
