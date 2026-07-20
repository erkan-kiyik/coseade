// Player progression: persistent XP/level, lifetime stats and unlocks.
// Stored in localStorage so it survives reloads; falls back to an in-memory
// object if storage is unavailable (private browsing, sandboxed iframe).

const KEY = 'cinderfall.progress.v1';

// Level thresholds: cumulative XP needed to reach level n (2..).
function xpForLevel(n) {
  return Math.round(120 * n * (n + 1) / 2 + Math.pow(n, 2.1) * 8);
}

// Unlock table: tier fires the first time player level reaches `level`.
export const UNLOCKS = [
  { level: 2, id: 'armor25', label: 'ARMOR PLATE — 25 CAP', kind: 'equipment' },
  { level: 3, id: 'smg', label: 'P-12 "WASP" SMG', kind: 'weapon' },
  { level: 4, id: 'rifleFinishUrban', label: 'VK-77 FINISH — URBAN', kind: 'finish' },
  { level: 5, id: 'phantomSkin', label: 'PHANTOM OPERATOR SKIN', kind: 'cosmetic' },
  { level: 6, id: 'knifeRavage', label: 'TALON-7 — RAVAGE BLADE', kind: 'finish' },
  { level: 7, id: 'armor50', label: 'ARMOR PLATE — 50 CAP', kind: 'equipment' },
  { level: 8, id: 'pistolFinishDesert', label: 'C-9 FINISH — DESERT', kind: 'finish' },
  { level: 10, id: 'rifleFinishCinder', label: 'VK-77 FINISH — CINDER', kind: 'finish' },
];

function defaultProgress() {
  return {
    level: 1, xp: 0,
    totalKills: 0, totalHeadshots: 0, shotsTotal: 0, hitsTotal: 0,
    longestSurvivalStage: 0, longestSurvivalTime: 0, gamesPlayed: 0,
    unlocked: {},
  };
}

export class Progression {
  constructor() {
    this.data = this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return { ...defaultProgress(), ...JSON.parse(raw) };
    } catch (e) { /* storage unavailable — play this session only */ }
    return defaultProgress();
  }

  save() {
    try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* ignore */ }
  }

  isUnlocked(id) { return !!this.data.unlocked[id]; }

  // Returns { leveledUp, newLevel, newUnlocks[] } for the caller to react to
  // (toasts, applying the unlock, sfx).
  addXp(amount) {
    const d = this.data;
    d.xp += amount;
    let leveledUp = false;
    const newUnlocks = [];
    while (d.xp >= xpForLevel(d.level + 1)) {
      d.level++;
      leveledUp = true;
      for (const u of UNLOCKS) {
        if (u.level === d.level && !d.unlocked[u.id]) {
          d.unlocked[u.id] = true;
          newUnlocks.push(u);
        }
      }
    }
    this.save();
    return { leveledUp, newLevel: d.level, newUnlocks };
  }

  xpProgress() {
    const d = this.data;
    const cur = xpForLevel(d.level);
    const next = xpForLevel(d.level + 1);
    return clamp01((d.xp - cur) / Math.max(1, next - cur));
  }

  recordKill(headshot) {
    this.data.totalKills++;
    if (headshot) this.data.totalHeadshots++;
    this.save();
  }

  recordShots(shots, hits) {
    this.data.shotsTotal += shots;
    this.data.hitsTotal += hits;
  }

  recordRun(stage, survivalTime) {
    const d = this.data;
    d.gamesPlayed++;
    if (stage > d.longestSurvivalStage) d.longestSurvivalStage = stage;
    if (survivalTime > d.longestSurvivalTime) d.longestSurvivalTime = survivalTime;
    this.save();
  }

  accuracy() {
    const d = this.data;
    return d.shotsTotal ? Math.round((d.hitsTotal / d.shotsTotal) * 100) : 0;
  }
}

function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
