# BLACKOUT PROTOCOL — 3D FPS

A single-player, wave-survival first-person shooter that runs entirely in the
browser. Built with **Three.js** and vanilla JavaScript — no game engine, no
art assets: every model, texture and sound is generated procedurally at
runtime. Modern-military aesthetic in the spirit of Call of Duty.

## Play

```bash
cd game
npm install
npm run dev      # open the printed http://localhost:5173 URL
```

Click **GÖREVE BAŞLA** to lock the pointer and start. Best played with sound on.

Production build:

```bash
npm run build && npm run preview
```

## Features

### Gameplay
- **Wave survival** — each wave spawns more, tougher AI soldiers; clear one to
  advance. Score, kills, headshots and accuracy tracked to a death screen.
- **Enemy AI** — a full state machine (idle → alert → combat → search): line-of-
  sight perception with a vision cone, alert propagation between squadmates,
  strafing/flanking movement with mutual separation, and burst-fire combat with
  distance-based accuracy that scales with wave difficulty.
- **Health & regen** — take fire, break line of sight, and armor regenerates
  after a delay. Directional damage indicators, damage vignette, low-HP
  heartbeat and pulsing red screen edges.
- **Grenades** — physics-thrown frags that bounce, cook off, and deal
  falloff-scaled explosive damage.
- **Explosive barrels** — shoot to detonate; blasts chain-react and damage
  everything in radius.
- **Pickups** — health and ammo crates drop between waves.

### Weapons (4, with detailed procedural viewmodels)
| Weapon | Fire mode | Notes |
|---|---|---|
| **M4 Karabina** | Full-auto | All-round assault rifle |
| **SPAS Pompalı** | Pump-action | 8-pellet spread, close-quarters |
| **AX-50 Keskin** | Bolt-action | One-shot sniper with a full scope overlay |
| **M9 Tabanca** | Semi-auto | High-headshot-multiplier sidearm |

Each has hand-modeled geometry, muzzle flash + point-light, ejecting brass
shell casings, per-weapon recoil/spread, ADS with FOV zoom, weapon sway, view
bob, and staged reload/rack animations with matching audio.

### Graphics
- Deferred-look dusk lighting: shader skybox with a sun-glow gradient, stars,
  exponential fog, directional sun with soft shadow maps, and point-lit street
  lamps.
- **Post-processing** — ACES filmic tone mapping, Unreal-style bloom, and a
  vignette pass.
- Procedural canvas textures for asphalt, concrete, building façades with
  lit/dark windows, rusted shipping containers and crates.
- A large 170×170m walled military compound: multi-storey buildings, container
  stacks, sandbag cover, watchtowers, wrecked vehicles, debris.
- Bullet tracers, impact sparks/dust/blood particles, and fading bullet-hole /
  blood decals.

### Audio (fully synthesized, WebAudio — no files)
Spatialized, distance-attenuated gunshots (per weapon), reloads, footsteps,
explosions, ricochets, hit/kill confirms, UI stingers and a wind ambience bed.

## Controls
| Key | Action |
|---|---|
| `W A S D` | Move |
| Mouse | Look / aim |
| Left click | Fire |
| Right click | Aim down sights (scope on sniper) |
| `Shift` | Sprint |
| `Space` | Jump |
| `C` | Crouch |
| `R` | Reload |
| `G` | Throw grenade |
| `1 2 3 4` / Wheel | Switch weapon |
| `Esc` | Pause |

## Settings
In-game (main menu or pause → **Ayarlar**): mouse sensitivity, FOV, master
volume, and graphics quality (Düşük/Orta/Yüksek — toggles bloom, shadow maps
and pixel ratio).

## Architecture
```
game/
├── index.html      # HUD, menus, all CSS
└── src/
    ├── main.js      # renderer, post-processing, game loop, waves,
    │                #   hit detection, grenades, HUD, menu wiring
    ├── world.js     # procedural map, textures, lights, colliders
    ├── player.js    # FPS controller: look, movement, physics, health
    ├── enemy.js     # soldier model + AI state machine + combat
    ├── weapons.js   # 4 weapons, viewmodels, recoil, ADS, reloads
    ├── effects.js   # tracers, impacts, shells, explosions, decals
    └── audio.js     # procedural WebAudio sound engine
```

Character collision uses AABB colliders resolved as vertical capsules; bullets
use ray-vs-sphere against enemy head/chest hitboxes and Three.js raycasting
against world geometry.
