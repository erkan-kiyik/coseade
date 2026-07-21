// Meta-economy: item catalog, rarity tiers, crate rolls and loadout apply.
// Crate drops reuse the game's existing weapon-finish and operator-skin art
// (baked in weapons.js / soldier.js) plus a couple of new energy finishes,
// so the reward loop ships without a pile of one-off assets. All ownership
// and equip state lives in Progression (localStorage-backed).

export const RARITY = {
  common:    { key: 'common',    label: 'COMMON',    color: '#8b93a2', glow: 'rgba(139,147,162,0.6)', weight: 58 },
  rare:      { key: 'rare',      label: 'RARE',      color: '#4a90d9', glow: 'rgba(74,144,217,0.7)',  weight: 27 },
  epic:      { key: 'epic',      label: 'EPIC',      color: '#a55cd6', glow: 'rgba(165,92,214,0.7)', weight: 11 },
  legendary: { key: 'legendary', label: 'LEGENDARY', color: '#e0a13a', glow: 'rgba(224,161,58,0.85)', weight: 4 },
};

// Crate cost in tokens.
export const CRATE_COST = 120;
// Duplicate drops refund this fraction of the crate cost.
export const DUPLICATE_REFUND = 0.4;

// Every unlockable cosmetic. `apply` tells applyLoadout how to mutate the
// player when the item is equipped. slot = which loadout key it occupies
// (one equipped item per slot).
export const CATALOG = [
  // -- rifle finishes --
  { id: 'rifle_urban',  name: 'VK-77 · URBAN',    slot: 'rifleFinish', rarity: 'common', kind: 'Rifle Skin',
    apply: { type: 'finish', weapon: 'rifle', finish: 'urban' } },
  { id: 'rifle_cinder', name: 'VK-77 · CINDER',   slot: 'rifleFinish', rarity: 'rare', kind: 'Rifle Skin',
    apply: { type: 'finish', weapon: 'rifle', finish: 'cinder' } },
  { id: 'rifle_arc',    name: 'ARC-9 · PULSE',    slot: 'rifleFinish', rarity: 'legendary', kind: 'Ray Rifle', tag: 'ENERGY',
    apply: { type: 'finish', weapon: 'rifle', finish: 'arc' } },

  // -- pistol finishes --
  { id: 'pistol_desert', name: 'C-9 · DESERT',    slot: 'pistolFinish', rarity: 'common', kind: 'Pistol Skin',
    apply: { type: 'finish', weapon: 'pistol', finish: 'desert' } },
  { id: 'pistol_onyx',   name: 'C-9 · ONYX',      slot: 'pistolFinish', rarity: 'rare', kind: 'Pistol Skin',
    apply: { type: 'finish', weapon: 'pistol', finish: 'onyx' } },
  { id: 'pistol_gold',   name: 'C-9 · GILDED',    slot: 'pistolFinish', rarity: 'epic', kind: 'Pistol Skin',
    apply: { type: 'finish', weapon: 'pistol', finish: 'gold' } },

  // -- smg finishes --
  { id: 'smg_viper',  name: 'P-12 · VIPER',       slot: 'smgFinish', rarity: 'rare', kind: 'SMG Skin',
    apply: { type: 'finish', weapon: 'smg', finish: 'viper' } },
  { id: 'smg_arc',    name: 'P-12 · TESLA',       slot: 'smgFinish', rarity: 'epic', kind: 'SMG Skin', tag: 'ENERGY',
    apply: { type: 'finish', weapon: 'smg', finish: 'arc' } },

  // -- knife finishes (energy "sword" blade) --
  { id: 'knife_ravage', name: 'TALON-7 · RAVAGE', slot: 'knifeFinish', rarity: 'rare', kind: 'Blade',
    apply: { type: 'finish', weapon: 'knife', finish: 'ravage' } },
  { id: 'knife_volt',   name: 'VOLT EDGE',        slot: 'knifeFinish', rarity: 'legendary', kind: 'Energy Blade', tag: 'ENERGY',
    apply: { type: 'finish', weapon: 'knife', finish: 'volt' } },

  // -- operator skins --
  { id: 'op_phantom', name: 'PHANTOM OPERATOR',   slot: 'operator', rarity: 'epic', kind: 'Operator',
    apply: { type: 'operator', variant: 'phantom' } },
  { id: 'op_nomad',   name: 'NOMAD OPERATOR',     slot: 'operator', rarity: 'rare', kind: 'Operator',
    apply: { type: 'operator', variant: 'nomad' } },
];

const BY_ID = Object.fromEntries(CATALOG.map((i) => [i.id, i]));
export const itemById = (id) => BY_ID[id] || null;
export const itemsForSlot = (slot) => CATALOG.filter((i) => i.slot === slot);

// Ordered list of loadout slots for the loadout UI.
export const LOADOUT_SLOTS = [
  { key: 'operator',    label: 'OPERATOR' },
  { key: 'rifleFinish', label: 'RIFLE' },
  { key: 'pistolFinish',label: 'SIDEARM' },
  { key: 'smgFinish',   label: 'SMG' },
  { key: 'knifeFinish', label: 'BLADE' },
];

// Weighted rarity pick, then a uniform item of that rarity. Falls back to a
// lower rarity if a tier happens to be empty. Returns a catalog item.
export function rollCrate(rng = Math.random) {
  const order = ['legendary', 'epic', 'rare', 'common'];
  const total = Object.values(RARITY).reduce((s, r) => s + r.weight, 0);
  let pick = rng() * total;
  let chosen = 'common';
  for (const key of ['common', 'rare', 'epic', 'legendary']) {
    pick -= RARITY[key].weight;
    if (pick <= 0) { chosen = key; break; }
  }
  // resolve to a concrete item; step down rarities if empty
  for (let i = order.indexOf(chosen); i < order.length; i++) {
    const pool = CATALOG.filter((it) => it.rarity === order[i]);
    if (pool.length) return pool[Math.floor(rng() * pool.length)];
  }
  return CATALOG[0];
}

// Applies the player's saved loadout to a freshly-built Player. `assets` is
// the boot asset bag (needs .ranger/.phantom/.nomad operator part atlases).
export function applyLoadout(player, progression, assets) {
  // operator skin
  const opId = progression.equipped('operator');
  if (opId) {
    const item = itemById(opId);
    const parts = item && assets[item.apply.variant];
    if (parts) player.parts = parts;
  }
  // weapon finishes
  for (const slot of ['rifleFinish', 'pistolFinish', 'smgFinish', 'knifeFinish']) {
    const id = progression.equipped(slot);
    if (!id) continue;
    const item = itemById(id);
    if (item && item.apply.type === 'finish') {
      player.applyFinish(item.apply.weapon, item.apply.finish);
    }
  }
}
