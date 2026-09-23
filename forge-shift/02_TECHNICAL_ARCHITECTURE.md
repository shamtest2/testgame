# 02 — TECHNICAL ARCHITECTURE
## FORGE//SHIFT

Status: PRE-BUILD
Architecture preference: simple, modular, AI-maintainable

---

# 1. Default Technology Decision

Preferred stack:
- HTML5
- TypeScript
- Vite
- Three.js
- Rapier 3D only where actual rigid-body physics is necessary
- HTML/CSS UI overlay for menus/HUD
- local assets bundled in the project
- Git for versioning

Why:
- Three.js provides direct control over 3D presentation.
- TypeScript gives stronger AI-assisted refactoring safety than an untyped codebase.
- Vite provides a fast dev/build workflow.
- Rapier can provide deterministic physics where required.
- HTML/CSS keeps text-heavy UI readable and easy to iterate.

Do not add an engine/framework simply because it is popular.

---

# 2. Architecture Principle

The project is split by responsibility.

Recommended shape:

src/
- core/
- rendering/
- camera/
- player/
- world/
- modules/
- run/
- progression/
- tools/
- ui/
- audio/
- save/
- platform/
- debug/
- content/
- config/

Each system should have a clear owner.

---

# 3. Stable Interfaces

Avoid direct cross-system coupling.

Examples:
- Player asks InteractionSystem for a target.
- InteractionSystem asks ModuleSystem whether a target is compatible.
- ModuleSystem performs the transformation.
- CameraSystem receives an event and chooses a camera response.
- AudioSystem reacts to an event rather than being hard-coded into the module.

This allows systems to be changed independently.

---

# 4. Game State

Use explicit game states:

BOOT
LOADING
HUB
RUN_INTRO
RUN_ACTIVE
RUN_PAUSED
RUN_COMPLETE
RUN_FAILED
UPGRADE
SETTINGS

Only one authoritative state machine controls transitions.

Avoid hidden state scattered across random files.

---

# 5. Simulation

Gameplay simulation must be frame-rate independent.

Use a fixed-step or otherwise deterministic simulation for:
- movement;
- collision;
- timers;
- moving hazards;
- transformation timings.

Rendering can interpolate.

Do not tie movement to raw frame delta without a deliberate stability model.

---

# 6. Camera System

Camera has:
- target;
- desired distance;
- desired height;
- look-at target;
- smoothing;
- obstacle handling;
- cinematic impulses;
- context modes.

Events can request a camera emphasis, but the camera remains the final authority.

No system may teleport the camera arbitrarily without going through the camera controller.

---

# 7. World Module System

Every reconfigurable structure is a data-driven module.

A module should define:
- unique ID;
- visual configuration;
- collision configuration;
- supported transformations;
- default state;
- alternate states;
- interaction cost;
- feedback hooks.

The transformation data should be separate from the player controller.

---

# 8. Run Generator

Generation must choose compatible authored chunks.

Rules:
- no impossible routes;
- every required objective has a reachable path;
- optional rewards must not accidentally block the required route;
- variation should be seeded for reproducibility;
- a run seed should be recordable for QA.

Never use fully random generation for critical navigation.

---

# 9. Content Data

Numbers should live in configuration/data files where reasonable.

Examples:
- movement speed;
- Shift charge;
- reward values;
- upgrade costs;
- module timings;
- camera distances.

Avoid hard-coding large balance tables across many source files.

---

# 10. Rendering Budget

Target:
- reasonable draw calls;
- instance repeated architecture;
- reuse materials;
- atlas/reuse textures;
- avoid large unique textures for everything;
- limited dynamic lights;
- conservative shadow map sizes;
- optional post-processing.

Do not sacrifice the signature visual look, but choose where to spend rendering budget.

Priority:
1. world composition;
2. lighting;
3. materials;
4. animation;
5. effects;
6. secondary detail.

---

# 11. Asset Strategy

Phase 1:
Procedural primitives + authored materials.

Phase 2:
Small number of original GLB assets.

Phase 3:
Selective hero assets for landmarks.

Avoid:
- dozens of unique high-resolution models;
- large texture collections;
- unnecessary animation files;
- external runtime dependencies that can fail.

---

# 12. Loading Strategy

Initial playable state must be intentionally small.

Load first:
- player;
- first run module set;
- essential UI;
- essential audio;
- SDK initialization layer.

Load later:
- secondary cosmetics;
- later-run content;
- nonessential lore;
- extra audio;
- distant assets.

The exact loading split must be measured, not guessed.

---

# 13. CrazyGames SDK Boundary

All platform interaction belongs behind a platform adapter.

Example responsibilities:
- SDK initialization;
- gameplayStart/gameplayStop;
- ads;
- account/user state;
- persistent data;
- happy-time events;
- platform environment detection.

Gameplay systems should not directly call platform APIs everywhere.

This is essential for local testing and future maintenance.

---

# 14. Local Development Mode

The game must run correctly without CrazyGames being present.

The platform adapter must gracefully enter:
LOCAL / UNSUPPORTED PLATFORM

and provide safe no-op behavior where appropriate.

Never let a missing SDK break local gameplay.

---

# 15. Save Strategy

Use a versioned save schema.

Required principles:
- schema version;
- migration path;
- corrupted-save recovery;
- default fallback;
- explicit save events;
- no secret data dependence.

Where CrazyGames account/cloud persistence is used, local and platform save behavior must be reconciled safely.

---

# 16. Debug Tools

Development builds should have optional debug tools:
- FPS;
- frame time;
- current state;
- run seed;
- active module;
- collision debug;
- camera mode;
- Shift charge;
- asset loading state.

These must be removable/disabled for release.

---

# 17. Error Policy

No silent failure.

If an essential asset is missing:
- report the exact asset;
- identify the loading stage;
- fail visibly in development.

For nonessential cosmetic assets:
- graceful fallback is permitted only when documented.

Never invent a replacement asset silently.

---

# 18. Technical Quality Gates

Before each milestone:
- build succeeds;
- no import errors;
- no uncaught runtime errors;
- no new memory leak;
- no unbounded timers/listeners;
- save/load tested where applicable;
- responsive viewport tested;
- previous milestone regression tested.

---

# 19. Infrastructure Gate

The AI development pipeline must be tested before production:

VS Code
→ Cline
→ model API
→ model runtime
→ project filesystem
→ terminal
→ browser

Document:
- model name and quantization;
- context limit;
- actual allocated context;
- VRAM/RAM;
- model load speed;
- average tool response time;
- failures/restarts;
- API endpoint;
- Cline provider settings.

Never assume a stated context size is actually allocated.

Current Ollama guidance says agent/coding workloads should use at least 64K context, but larger context increases memory use. Measure actual runtime behavior before locking the setting.

---

# 20. Dependency Rule

Every dependency must answer:
- Why do we need it?
- Is it maintained?
- Does it increase bundle size materially?
- Can a 14B coding agent maintain it reliably?
- Does it complicate CrazyGames deployment?

Fewer dependencies are preferred.
