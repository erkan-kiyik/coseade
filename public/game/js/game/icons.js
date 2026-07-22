// Clean line-icon set — replaces every emoji in the UI with a consistent,
// premium stroke-based glyph (24×24 grid, round joins, currentColor). One
// render path: fill:none, stroke:currentColor, so icons inherit text colour
// and sit crisply at any size. paintIcons() swaps [data-ic] placeholders in
// static markup; icon() returns an inline string for generated panels.

export const ICON = {
  // ---- navigation / features ----
  home: '<path d="M3.5 11.5 12 4l8.5 7.5"/><path d="M5.5 10.2V19h4v-5h5v5h4v-8.8"/>',
  shop: '<path d="M4 5h2l1.7 10.3a1 1 0 0 0 1 .8h7.9a1 1 0 0 0 1-.82L19 8.2H6.7"/><circle cx="10" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>',
  target: '<circle cx="12" cy="12" r="7.6"/><circle cx="12" cy="12" r="3"/><path d="M12 1.6v3.2M12 19.2v3.2M1.6 12h3.2M19.2 12h3.2"/>',
  box: '<path d="M12 3.2 4.2 7.1v9.8L12 20.8l7.8-3.9V7.1z"/><path d="M4.4 7.2 12 11l7.6-3.8M12 11v9.6"/>',
  medal: '<circle cx="12" cy="9" r="4.8"/><path d="M9 13.2 7.6 21 12 18.4 16.4 21 15 13.2"/>',
  trophy: '<path d="M7 4.5h10V9a5 5 0 0 1-10 0z"/><path d="M7 6H4.2v.9A3 3 0 0 0 7.2 10M17 6h2.8v.9A3 3 0 0 1 16.8 10"/><path d="M10 13.7V16h4v-2.3M8 20h8M10.2 20v-2.2h3.6V20"/>',
  ranks: '<path d="M5 20v-7M10 20V5M15 20v-9M20 20V8"/><path d="M3 20h18"/>',
  shield: '<path d="M12 3.2 5 6v5.2c0 4 3 6.9 7 8 4-1.1 7-4 7-8V6z"/>',
  users: '<circle cx="9" cy="8" r="3.1"/><path d="M3.4 19a5.6 5.6 0 0 1 11.2 0"/><path d="M16.4 5.4a3 3 0 0 1 0 5.9M17.2 19a5.6 5.6 0 0 0-2.2-4.4"/>',
  mail: '<rect x="3.2" y="5.6" width="17.6" height="12.8" rx="2"/><path d="m4.2 7 7.8 5.6L19.8 7"/>',
  news: '<path d="M4 5.2h13.2V19H5.6A1.6 1.6 0 0 1 4 17.4z"/><path d="M17.2 8.4h2.8v9a1.6 1.6 0 0 1-1.6 1.6"/><path d="M6.6 8.4h7M6.6 11.4h7M6.6 14.4h4.6"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.6v3M12 18.4v3M21.4 12h-3M5.6 12h-3M18.6 5.4l-2.1 2.1M7.5 16.5l-2.1 2.1M18.6 18.6l-2.1-2.1M7.5 7.5 5.4 5.4"/>',
  person: '<circle cx="12" cy="8" r="3.4"/><path d="M5.8 19.2a6.2 6.2 0 0 1 12.4 0"/>',
  checklist: '<path d="M9.5 6h9M9.5 12h9M9.5 18h9"/><path d="m3.5 6 1.3 1.3L7.2 4.8M3.5 12l1.3 1.3 2.4-2.5M3.5 18l1.3 1.3 2.4-2.5"/>',
  sparkle: '<path d="M12 3v3.6M12 17.4V21M3 12h3.6M17.4 12H21M6 6l2.4 2.4M15.6 15.6 18 18M18 6l-2.4 2.4M8.4 15.6 6 18"/>',
  star: '<path d="m12 3.4 2.5 5.4 5.7.5-4.3 3.8 1.3 5.6L12 21.3l-5-2.6 1.3-5.6-4.3-3.8 5.7-.5z"/>',
  ticket: '<path d="M4 8.2A1.8 1.8 0 0 1 5.8 6.4h12.4A1.8 1.8 0 0 1 20 8.2a1.8 1.8 0 0 0 0 3.6 1.8 1.8 0 0 1 0 3.6H5.8A1.8 1.8 0 0 1 4 13.6a1.8 1.8 0 0 0 0-3.6z"/><path d="M14 6.6v11"/>',

  // ---- currency ----
  coin: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.6"/>',
  gem: '<path d="M12 3.6 20 9.2 12 20.4 4 9.2z"/><path d="M4.4 9.4h15.2M9.2 3.8 12 9.4l2.8-5.6"/>',
  bolt: '<path d="M13 2.6 4.8 13H10l-1 8.4L19.2 11H13z"/>',

  // ---- panel content ----
  skull: '<path d="M6 11.2a6 6 0 1 1 12 0v3l-1.4 1.4v2.3H7.4v-2.3L6 14.2z"/><circle cx="9.6" cy="11.3" r="1.2"/><circle cx="14.4" cy="11.3" r="1.2"/><path d="M10.6 17.3v1.6M13.4 17.3v1.6"/>',
  wave: '<path d="M3 8.5c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 17.5c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>',
  check: '<path d="M4.6 12.6 9.6 17.4 19.4 6.8"/>',
  gift: '<rect x="4.2" y="9.4" width="15.6" height="10.4" rx="1.4"/><path d="M4.2 13.4h15.6M12 9.4v10.4M12 9.4C10.2 9.4 8.8 8.4 8.8 7S10.2 4.6 12 6.6c1.8-2 3.2-1 3.2.4S13.8 9.4 12 9.4z"/>',
  rifle: '<path d="M3 9.2h15.4v3.2H14l-1 2.8h-3.6l-1-2.8H3z"/><path d="M6.4 12.4v2.6M13.8 9.2V7.2h3.4"/>',
  smoke: '<path d="M4 8.8h9.2A2.4 2.4 0 1 0 10.9 6.4M4 12.8h13.2a2.4 2.4 0 1 1-2.3 2.4M4 16.8h7.4"/>',
  layout: '<rect x="3.4" y="4.4" width="17.2" height="15.2" rx="2"/><path d="M3.4 9.4h17.2M9 9.4v10.2"/>',
  fire: '<path d="M12 3.2s5 3.8 5 8.8a5 5 0 0 1-10 0c0-1.5.6-2.7 1.4-3.5.6 1.1.7 2.1 1.7 2.6C11.4 8.9 12 7 12 3.2z"/>',
  lock: '<rect x="5" y="10.4" width="14" height="9" rx="2"/><path d="M8 10.4V7.4a4 4 0 0 1 8 0v3"/>',
  swords: '<path d="M14.5 3.5H20v5.5l-6.5 6.5M9.5 15.5 3.5 21M4 3.5h3.5L14 10M15 16l-1.5 1.5M8 9l1.5-1.5"/>',
  sound: '<path d="M4 9.2v5.6h3.6L13 19V5L7.6 9.2z"/><path d="M16 9.4a3.2 3.2 0 0 1 0 5.2M18.4 7.2a6 6 0 0 1 0 9.6"/>',
  soundoff: '<path d="M4 9.2v5.6h3.6L13 19V5L7.6 9.2z"/><path d="m16.4 10 4.2 4M20.6 10l-4.2 4"/>',
  gamepad: '<rect x="3" y="8" width="18" height="9.4" rx="4.2"/><path d="M8 11v3.2M6.4 12.6h3.2"/><circle cx="15.6" cy="12" r="1"/><circle cx="18" cy="14" r="1"/>',
  reset: '<path d="M19.6 12a7.6 7.6 0 1 1-2.2-5.4M19.6 4.4v4.2h-4.2"/>',
  dot: '<circle cx="12" cy="12" r="4.4"/>',
  knife: '<path d="M4 20 13.5 10.5 17.5 6.5 16 8l-7.5 4L4 20z"/><path d="m9.2 14.8-3.4 3.4"/>',
  play: '<path d="M7 5.2 19 12 7 18.8z"/>',
  crouch: '<circle cx="12" cy="4.6" r="2.1"/><path d="M9.4 8.2h5.2l1.2 5-2.4 1.4V20M12.4 14.6 10 20M12 8.2 8.6 12"/>',
};

// Currency glyphs mapped to icon names, for reuse in generated markup.
export const CUR = { coins: 'coin', gems: 'gem', energy: 'bolt' };

export function icon(name, cls = '') {
  const body = ICON[name] || '';
  return `<svg class="ic${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" fill="none" ` +
    `stroke="currentColor" stroke-width="1.9" stroke-linecap="round" ` +
    `stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

// Replace every <span data-ic="name"> placeholder inside `root` with its glyph.
export function paintIcons(root = document) {
  root.querySelectorAll('[data-ic]').forEach((el) => {
    const name = el.getAttribute('data-ic');
    if (!ICON[name]) return;
    el.innerHTML = icon(name);
    el.classList.add('ic-host');
  });
}
