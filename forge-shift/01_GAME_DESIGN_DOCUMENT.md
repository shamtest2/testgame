# 01 — GAME DESIGN DOCUMENT
## FORGE//SHIFT

Version: 0.1
Status: PRE-PRODUCTION DESIGN LOCK

---

# Game Title

**FORGE//SHIFT**
Working title only. Final public name must be checked for originality/trademark/search conflicts before publication.

# One-Sentence Pitch

A cinematic 3D run-based game where players traverse a colossal futuristic structure and physically reconfigure its architecture to create routes, exploit risk/reward opportunities and extract valuable Flux before the structure shifts again.

# Player Promise

The player should think:

> “I changed the world, survived it, found something valuable, and I want to try another route.”

---

# Core Loop

ENTER RUN
→ SEE ROUTE
→ MOVE
→ FIND SHIFT NODE
→ RECONFIGURE ARCHITECTURE
→ CHOOSE RISK/REWARD
→ TRAVERSE
→ DISCOVER
→ EXTRACT
→ SPEND/UPGRADE
→ EQUIP
→ RUN AGAIN

---

# First 30 Seconds

The first-time player should:
1. see the game world quickly;
2. move without reading a long manual;
3. receive one simple objective;
4. encounter one safe Shift interaction;
5. watch the environment visibly transform;
6. immediately understand the cause/effect relationship;
7. reach a small reward;
8. be invited naturally into the next part of the run.

No wall of text.

---

# Onboarding Design

Tutorial principle:

**Teach through one action at a time.**

Tutorial sequence:
- Move.
- Approach a Shift Node.
- Show the interaction affordance.
- Reconfigure one obvious module.
- Walk through the newly created route.
- Introduce a safe optional reward route.
- Finish the first micro-run.

Text should be short and contextual.

---

# Core Controls

Desktop first:
- WASD / Arrow keys: movement
- Mouse: camera/interaction aiming where relevant
- Space: jump / traversal action if required by prototype
- E: interact / Shift action
- 1/2/3: loadout tools if applicable
- Esc: pause

The exact control scheme may change after prototype testing.

Mobile:
- virtual movement control;
- context-sensitive interaction;
- touch camera controls;
- large readable buttons;
- no dependence on tiny keyboard-style HUD.

Controls must be designed so the desktop version does not need to be redesigned from scratch for mobile.

---

# Run Structure

A run is composed from authored module chunks.

A typical run contains:
- entry;
- 3–7 main traversal segments;
- 2–4 Shift Nodes;
- 1–3 risk/reward branches;
- 1 extraction zone.

Runs must feel authored and coherent rather than like random rooms.

Procedural variation should select among compatible authored pieces.

---

# Risk and Reward

Risk sources:
- unstable platforms;
- moving machinery;
- collapsing routes;
- timing windows;
- hazardous energy zones;
- route complexity;
- optional detours.

Rewards:
- Flux;
- tool charge;
- temporary run upgrades;
- rare cosmetic materials;
- discovery records.

Avoid punishment that feels random or unavoidable.

---

# Failure

Failure should be readable and quick.

A failed run:
- explains what caused failure;
- preserves permanent progression when appropriate;
- offers an immediate retry;
- optionally exposes a reward-based continuation only after the player understands the normal loop.

Do not force the player through menus after every minor mistake.

---

# Progression Philosophy

Permanent progression should expand choice rather than erase difficulty.

Good:
- new tools;
- new module interactions;
- alternate starting loadouts;
- cosmetic collections;
- new sectors.

Bad:
- huge stat inflation that trivializes content;
- mandatory grinding before the core experience becomes interesting.

---

# Cosmetics

The player can collect:
- shell skins;
- helmet/visor styles;
- energy-core appearances;
- traversal trails;
- interaction effect variants.

Cosmetics should not affect competitive balance.

Cosmetic philosophy:
- premium, restrained, futuristic;
- no rainbow clutter;
- no meme skins unless intentionally part of a later event.

---

# Hub

The Hub should communicate:
- what I have;
- what I unlocked;
- what I can equip;
- where I can go next.

It should be visually interesting but small enough to build reliably.

---

# Audio

Audio hierarchy:
1. gameplay feedback;
2. environmental machinery;
3. interaction feedback;
4. UI;
5. ambient music.

Every meaningful Shift action should have:
- anticipation;
- transformation sound;
- confirmation.

Sound should help teach the mechanic.

---

# Camera Design

Default:
Dynamic Cinematic.

Key transitions:
- normal traversal;
- interaction;
- architecture transformation;
- landmark reveal;
- extraction.

Avoid camera cuts unless the event clearly benefits from one.

---

# Content Roadmap

Initial release candidate content should prioritize depth of one excellent biome/sector rather than many shallow biomes.

Recommended initial content:
- 1 polished Hub;
- 1 main architectural sector;
- 6–10 reusable modular level pieces;
- 4–6 Shift-enabled module types;
- 4 core tools;
- 8–12 permanent upgrades;
- 12–20 cosmetics;
- 1 strong onboarding run;
- escalating run variations.

New biomes come only after this core is polished.

---

# 10-Step Modular Development Roadmap

## Step 1 — Infrastructure + Repository Foundation
Verify the AI model/runtime setup, create repository structure, documentation protocol, build pipeline and browser preview.

## Step 2 — Visual/Technical Foundation
Create the Three.js rendering foundation, responsive canvas, lighting baseline, camera system and minimal scene shell.

## Step 3 — Player Traversal
Build movement, collision, camera follow, interaction targeting and deterministic frame-rate-independent behavior.

## Step 4 — Signature Shift Mechanic
Build the first Shift Node and one reconfigurable architecture module. Make the transformation visually satisfying.

## Step 5 — Core Run
Create a complete 1–3 minute micro-run with entry, route choice, interaction, reward and extraction.

## Step 6 — Replayability + Progression
Add run variation, rewards, Hub, loadouts and permanent progression.

## Step 7 — Visual Quality Pass
Replace greybox presentation with finished architecture materials, lighting, VFX, animation, polish and camera choreography.

## Step 8 — Onboarding + UX + Audio
Add onboarding, menus, responsive controls, sound hierarchy, feedback and accessibility/readability work.

## Step 9 — CrazyGames Integration
Integrate current CrazyGames HTML5 SDK, gameplay state events, save/account features where appropriate, compliant ads and platform-safe behavior.

## Step 10 — Optimization + QA + Submission
Test target viewports, low-end hardware, input, loading, ads-disabled behavior, SDK, save persistence, console cleanliness and final package limits. Then create the submission build.

---

# MVP Gate

MVP is accepted only when a new player can:
- understand the objective;
- move;
- perform the Shift action;
- see a meaningful route change;
- complete a run;
- receive a reward;
- start another run.

The game must already look intentional at this point. Greybox-only quality is not the final visual target.
