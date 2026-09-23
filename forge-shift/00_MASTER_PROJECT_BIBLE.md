# 00 — MASTER PROJECT BIBLE
## FORGE//SHIFT

Version: 0.1
Status: PRE-PRODUCTION
Owner: Product Manager
Architect: Senior Game Architect / Lead Designer
Implementation: Cline or replacement coding agent

---

# 1. Product Vision

Create a premium-feeling, original 3D HTML5 browser game for CrazyGames that delivers:

> **“I understand it in seconds. I feel the world change under me. I want one more run.”**

The product must look substantially more premium than the average lightweight browser game without becoming a technically unmanageable AAA clone.

The visual target is:
- futuristic realism with stylized restraint;
- monumental modern architecture;
- physically believable materials;
- cinematic lighting and camera composition;
- detailed environments that communicate function;
- controlled accent lighting rather than neon overload;
- strong foreground/midground/background depth;
- readable gameplay at normal CrazyGames iframe sizes.

The game must remain original. Existing games may inform broad category conventions, but no recognizable game, character, asset, UI composition, level, name, weapon or mechanic may be copied.

---

# 2. Product Definition

Working title:
**FORGE//SHIFT**

Genre:
**3D run-based traversal + environmental reconfiguration + light roguelite progression**

Primary platform:
**HTML5 desktop browser first, mobile-aware architecture from the beginning**

Target session:
- first meaningful interaction: within seconds;
- first run: approximately 1–3 minutes;
- typical repeated run: 2–5 minutes;
- longer-term play: repeated runs with persistent unlocks and mastery.

Audience:
- players who enjoy immediate interaction, movement, exploration, risk/reward and progression;
- no assumption that the player has played a specific game before.

---

# 3. Core Experience

The player enters a colossal self-reconfiguring megastructure.

The environment is not a static level. Certain architectural modules can be reconfigured by the player's shift technology.

The player:
1. enters a run;
2. traverses the structure;
3. reaches Shift Nodes;
4. reconfigures selected environmental modules;
5. chooses between safer/shorter paths and riskier/rewarding paths;
6. collects Flux;
7. survives environmental hazards;
8. reaches an extraction gate;
9. converts run rewards into permanent unlocks;
10. equips a new tool loadout and runs again.

The defining fantasy is:

> **You are not merely navigating the architecture. You are learning to control the architecture.**

---

# 4. Signature Mechanic

The signature mechanic is **Architectural Reconfiguration**.

At specific readable interaction points, the player can apply a limited Shift charge to a compatible environmental module.

A module can expose a small number of authored transformations, for example:
- rotate;
- extend/retract;
- reverse movement;
- phase between solid/energy state;
- redirect a moving platform;
- open/close a route;
- stabilize an unstable object.

The important design principle is **controlled systemic choice**, not arbitrary construction.

We are not trying to simulate an entire physics sandbox.

We are creating a believable world that offers:
- understandable physical relationships;
- surprising outcomes;
- repeatable mastery;
- visual cause → effect feedback.

---

# 5. Why the Loop Is Replayable

Replayability comes from several layers:

### Run layer
The route presents different module arrangements and risk/reward choices.

### Loadout layer
The player chooses a limited set of Shift tools.

### Discovery layer
Optional side paths reveal upgrades, hidden terminals, lore fragments and rare cosmetic materials.

### Mastery layer
The player can improve completion time, damage taken, Flux earned and route efficiency.

### Meta progression layer
Successful runs unlock new environments, tools, module types and cosmetics.

### Visual novelty layer
The architecture visibly transforms, so replaying a route can produce different spatial situations.

---

# 6. Player Loadout

The player has a small configurable tool loadout.

Initial examples:
- **Shift Pulse** — performs the basic reconfiguration action.
- **Vector Anchor** — temporarily stabilizes a moving object.
- **Phase Lens** — allows one normally solid barrier to become traversable.
- **Redirector** — changes the direction of one compatible moving system.

The exact tools are not final until prototype testing proves they are fun.

Avoid traditional firearms as a core system. Tools should feel like advanced engineering equipment, keeping the game focused on architecture, movement and problem solving.

---

# 7. Progression

Between runs, the player returns to a compact **Forge Hub**.

The Hub is not a giant base-building simulator.

It is a clean management screen/world space where the player can:
- inspect discovered tools;
- equip a loadout;
- upgrade permanent capabilities;
- view discovered sectors;
- customize the player's shell/cosmetics;
- review records.

Permanent progression categories:
- traversal efficiency;
- Shift capacity;
- tool variety;
- risk/reward bonuses;
- access to new module families;
- cosmetic shell unlocks.

Do not create a huge skill tree until the core loop proves itself.

---

# 8. Camera

Default camera:
**Dynamic Cinematic**

The camera changes framing according to gameplay.

Examples:
- wider during traversal and route choices;
- slightly closer during precise interaction;
- dramatic pullback when architecture reconfigures;
- subtle tracking during fast movement;
- controlled framing at major landmarks.

Player-selectable modes:
1. Dynamic Cinematic
2. Precision Follow
3. Wide Explorer

These are camera behaviors, not three separate game modes.

Camera rules:
- never sacrifice gameplay readability for cinematics;
- never force a dramatic angle that hides hazards;
- camera movement must feel intentional and smooth;
- avoid excessive motion that causes discomfort.

---

# 9. Visual Identity

Material language:
- engineered metal;
- glass;
- concrete;
- ceramic/composite panels;
- structural stone;
- emissive energy lines used sparingly.

Color language:
- mostly neutral architectural materials;
- restrained cool accent color for interactive systems;
- reward moments may receive a second controlled accent;
- no rainbow neon;
- no generic cyberpunk purple/blue everywhere.

Lighting language:
- large soft key lights;
- practical architectural lights;
- volumetric atmosphere only where useful;
- high-quality reflections where affordable;
- clear separation between interactive and non-interactive objects.

World design:
Every major structure should look like it exists for a reason.

---

# 10. Originality Rules

Never:
- copy a famous game's mechanic one-to-one;
- use recognizable franchise characters;
- imitate another game's UI;
- use trademarked logos;
- recreate famous maps/levels;
- use stock asset packs whose visual identity makes the game look generic.

Always:
- combine original world rules;
- author our own terminology;
- use original level compositions;
- use a distinctive interaction language;
- keep the visual reference as a quality target, not a literal asset template.

---

# 11. Performance Philosophy

Performance is a design requirement, not a final patch.

We prefer:
- modular geometry;
- instancing;
- texture reuse;
- small material set;
- baked/static-lighting-style techniques where practical;
- local assets;
- lazy-loading nonessential content;
- deterministic update loops;
- limited dynamic shadows;
- controlled post-processing.

Initial launch target:
- fast first playable state;
- responsive controls;
- stable frame pacing;
- usable on lower-end Chromium/Chromebook-class hardware.

CrazyGames currently requires an initial download of no more than 50 MB for Basic Implementation, total bundle size no more than 250 MB, and a file count no greater than 1,500. Mobile-homepage eligibility has a 20 MB initial-download threshold. See `05_CRAZYGAMES_PUBLISHER_SPEC.md`.

---

# 12. AI Production Philosophy

The coding agent is not the designer.

The coding agent must:
- implement the current task;
- preserve existing stable behavior;
- test changes;
- report deviations;
- update project state.

The coding agent must not:
- replace the chosen engine/framework without approval;
- refactor unrelated modules because they appear imperfect;
- rewrite major systems during a small task;
- invent assets;
- silently substitute dependencies;
- claim success without testing.

---

# 13. Quality Contract

A feature passes only if it meets all relevant gates:

### Gameplay
The action is understandable and fun.

### Visual
It matches the established visual language.

### UX
The player knows what is happening.

### Performance
The feature does not create an unacceptable frame-rate or loading regression.

### Technical
No console errors, broken imports or unexplained warnings.

### Regression
Previously accepted systems still work.

### Publisher
The change does not violate known CrazyGames requirements.

---

# 14. Definition of “Finished”

A finished game must have:
- an immediately understandable onboarding sequence;
- a polished core run;
- visible progression;
- a satisfying retry loop;
- responsive controls;
- a coherent visual identity;
- robust save handling;
- CrazyGames SDK integration;
- compliant ad behavior;
- responsive layout;
- performance validation;
- final QA;
- submission-ready build.

The first playable prototype is **not** the finished game.
