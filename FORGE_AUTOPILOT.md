````md
# FORGE_AUTOPILOT.md

> FORGE//SHIFT — Autonomous Production Rulebook
> Version: 1.0
> Target execution agent: Cline / local 32B model
> Project type: TypeScript + Vite + Three.js WebGL
> Primary target: CrazyGames HTML5
>
> EXISTING PROJECT DOCUMENTATION AUTHORITY:
> The existing `forge-shift/*.md` documentation set is the design and architecture source of truth.
> Do not casually rewrite or contradict it.
> When a more-specific project document conflicts with a generic fallback rule here, the more-specific project document wins.
> Code must conform to the current documentation, not replace it.
>
> CURRENT BASELINE:
> - TASK-000 project scaffold: VERIFIED.
> - TASK-001 basic Three.js scene: VERIFIED.
> - TASK-002 player/ground implementation exists and a build has passed.
> - The visible cyan capsule proves rendering only.
> - Previous claims that WASD movement/camera-follow were "verified" without real browser interaction are NOT accepted as proof.
> - Interactive movement remains UNVERIFIED until Browser Tool automation physically interacts with the running game and produces evidence.
> - The cyan capsule is a prototype/debug player representation, NOT the final visual target.
>
> CORE PRODUCT TARGET:
> Build a premium, replayable futuristic 3D WebGL game with a strong "one more run" loop.
> The experience must feel authored, intentional, cinematic, responsive, and commercially presentable.
> Do not settle for generic primitive-based sci-fi visuals, random neon effects, or a technically functioning but visually unfinished prototype.

---

# 1. CRAZYGAMES LIMITS AND WEB PERFORMANCE

## 1.1 Hard platform limits

The following are hard constraints for the shipping build:

- Maximum total bundle/file size: 250 MB.
- Maximum file count: 1500 files.
- Initial download: <= 50 MB.
- Initial download target for mobile-home eligibility: <= 20 MB.
- Externally hosted/loaded resources must reach gameplay within the platform's <= 20-second evaluation window.
- Use relative paths for all game-bundle resources.
- Desktop must support Chrome and Edge.
- If mobile is supported, touch must work.
- The game should run smoothly enough for lower-end Chromium hardware/Chromebooks.
- Desktop gameplay should be landscape-oriented.
- Do not make orientation-lock logic unless genuinely required by the project.
- Avoid absolute asset URLs and filesystem paths in shipped code.

These limits are publisher requirements, not optimization suggestions.

## 1.2 Initial-load strategy

The first playable state is the measurement boundary.

The game must:
1. load only what is necessary to become playable,
2. enter an immediately understandable gameplay state,
3. trigger CrazyGames `Gameplay start`,
4. defer nonessential assets and expensive systems until after gameplay begins.

Do not create a fake loading sequence solely to manipulate the measurement boundary.
Do not trigger `Gameplay start` before the game is genuinely playable.

## 1.3 Bundle rules

Never add a dependency merely because it saves a small amount of coding.

Before adding a package:
- confirm it is necessary,
- estimate bundle cost,
- confirm it works in browser/WebGL,
- verify it has no unnecessary transitive weight,
- prefer existing Three.js/browser APIs.

Avoid:
- duplicate utility libraries,
- large general-purpose frameworks,
- unused icon libraries,
- unnecessary animation libraries,
- large post-processing packages,
- server dependencies,
- desktop-only packages,
- development-only packages accidentally shipped into production.

Production source maps must not be included in the final release bundle unless explicitly required for debugging.

## 1.4 Three.js performance rules

The renderer must be designed around constrained browser hardware.

Mandatory principles:

- Reuse objects inside animation loops.
- Do not allocate `Vector3`, `Quaternion`, arrays, strings, closures, or temporary objects every frame unless unavoidable.
- Cache frequently used references.
- Avoid repeated DOM queries.
- Avoid repeated material creation.
- Avoid duplicated geometries/materials when instances can share them.
- Use `InstancedMesh` for large groups of repeated static props where appropriate.
- Keep draw-call counts under control.
- Keep dynamic lights limited.
- Avoid large numbers of realtime shadow casters.
- Prefer baked/static-looking lighting where practical.
- Keep shadow map resolution modest until performance evidence justifies more.
- Prefer frustum culling.
- Use level-of-detail strategies for distant geometry.
- Keep distant objects visually useful but geometrically cheap.
- Avoid giant transparent surfaces.
- Avoid unnecessarily expensive physically based shader features.
- Avoid fullscreen post-processing unless the visual benefit justifies the GPU cost.
- Do not use high-resolution render targets by default.
- Cap device pixel ratio through the quality system.
- Prefer a dynamic quality system over a permanently extreme renderer configuration.

## 1.5 Textures

Texture memory is a first-class budget.

Rules:

- Never import a large texture blindly.
- Match texture resolution to visible screen-space importance.
- Use compressed web-friendly texture formats where practical.
- Prefer KTX2/Basis-compatible workflows for large 3D texture sets when the asset pipeline supports them.
- Use WebP/AVIF for suitable non-GPU/UI imagery.
- Avoid 4K textures unless there is a demonstrated visual requirement and the memory budget allows them.
- Avoid duplicate copies of the same texture.
- Share texture references when possible.
- Do not generate mipmaps for assets that genuinely do not need them.
- Do not generate unnecessary texture channels.
- Keep normal/roughness/metalness maps purposeful rather than adding maps cosmetically.
- Do not load every texture during startup.

## 1.6 Geometry and materials

Rules:

- Reuse geometry where possible.
- Prefer efficient topology.
- Use LOD for expensive assets.
- Use instancing for repeated structures.
- Do not create separate geometries for objects that can share a mesh.
- Reuse material definitions.
- Avoid dozens of nearly identical materials.
- Use material variation through controlled parameters instead of unnecessary material duplication.

## 1.7 Runtime memory and cleanup

Every created resource needs an ownership model.

Dispose:
- geometries,
- materials,
- textures,
- render targets,
- post-processing resources,
- audio nodes,
- event listeners,
- timers,
- intervals,
- animation frames,
- temporary asset references.

No module may silently accumulate:
- listeners,
- arrays,
- timers,
- promises,
- subscriptions,
- object references.

When destroying/reloading a system, its resources must become unreachable or be explicitly disposed.

## 1.8 Audio

- Keep audio files compressed.
- Use short high-impact SFX.
- Avoid dozens of simultaneously decoding large audio files.
- Reuse audio buffers.
- Avoid creating audio nodes continuously during gameplay.
- Handle browser audio activation rules.
- Resume suspended audio from an appropriate user gesture where required.
- Do not let audio failures crash gameplay.

## 1.9 Publisher integration

Use CrazyGames SDK v3.

The production implementation must:
- load SDK v3,
- initialize it asynchronously,
- use `Gameplay start`,
- use `Gameplay stop` for genuine gameplay breaks,
- optionally use loading start/stop where appropriate,
- use Data persistence where applicable,
- use rewarded ads only through the CrazyGames SDK,
- never depend on ads for core progression,
- never add external ad networks,
- degrade gracefully when the SDK is unavailable in localhost development.

Do not use deprecated v2 APIs.

## 1.10 CrazyGames quality target

Passing technical requirements is necessary but not sufficient.

The game must also:
- land directly in playable gameplay,
- communicate the core mechanic immediately,
- avoid long dead loading screens,
- avoid intrusive monetization,
- work with keyboard/mouse,
- work with touch when mobile is supported,
- look intentional at first screenshot,
- maintain a clean browser console,
- avoid obvious debug UI in production.

Official CrazyGames references used for this rulebook:
- Technical limits, device requirements, SDK requirements, and initial-download rules: :contentReference[oaicite:0]{index=0}
- SDK v3 initialization: :contentReference[oaicite:1]{index=1}
- Gameplay start/stop and loading events: :contentReference[oaicite:2]{index=2}
- CrazyGames optimization guidance covering compression, textures, LOD, batching, unused assets, and runtime memory: :contentReference[oaicite:3]{index=3}

---

# 2. STRICT CODE QUALITY — SOLID + NO SPAGHETTI

## 2.1 Absolute rule

The AI is not allowed to write bad architecture merely to make a task pass.

A passing build does NOT equal a passing task.

Code must remain:
- modular,
- understandable,
- deterministic,
- testable,
- performant,
- disposable,
- extensible.

## 2.2 SOLID enforcement

### Single Responsibility
One module/class owns one coherent responsibility.

Examples:
- player movement belongs to Player/Input systems,
- camera behavior belongs to CameraController,
- UI rendering belongs to UI,
- CrazyGames calls belong to CrazyGamesAdapter,
- resource cleanup belongs to the relevant owner/disposal boundary.

Do not create a "GameManager" that contains everything.

### Open/Closed
Prefer configuration, interfaces, and small strategies over constantly adding conditionals to giant functions.

Avoid:
```ts
if (type === "nodeA") ...
else if (type === "nodeB") ...
else if (type === "nodeC") ...
````

when a data-driven strategy is more appropriate.

### Liskov

Implementations must honor the contracts of their abstractions.

### Interface Segregation

Do not create huge interfaces containing unrelated capabilities.

### Dependency Inversion

High-level systems should not directly depend on random low-level browser/global objects when an adapter is appropriate.

Example:

* gameplay code should call `CrazyGamesAdapter`,
* not scatter `window.CrazyGames...` across ten files.

## 2.3 TypeScript rules

* `strict` TypeScript is mandatory.
* Avoid `any`.
* `any` is permitted only at unavoidable external API boundaries and must be narrowed immediately.
* No unexplained `@ts-ignore`.
* No unexplained `as any`.
* No silent type assertions hiding real errors.
* No unused imports.
* No unused variables.
* No dead functions.
* No duplicate constants.
* Prefer readonly data where practical.
* Use explicit return types for important public methods.
* Keep game state transitions explicit.

## 2.4 Architecture boundaries

Recommended conceptual layers:

```text
Boot
  ↓
Game/Application
  ↓
Game State
  ↓
Gameplay Systems
  ├─ Player
  ├─ Camera
  ├─ Shift
  ├─ Run
  ├─ Score
  ├─ Challenges
  └─ Progression
  ↓
Presentation
  ├─ Environment
  ├─ Materials
  ├─ Lighting
  ├─ VFX
  ├─ Audio
  └─ UI
  ↓
Platform Adapters
  └─ CrazyGames
```

Do not create circular imports.

## 2.5 Main loop rules

The render/update loop must remain small.

The main loop should orchestrate systems rather than contain their implementation.

Do not put:

* complete UI logic,
* complete player physics,
* complete shift mechanics,
* complete audio logic,
* complete progression logic,
* CrazyGames API calls

directly inside `animate()`.

## 2.6 Frame-loop allocation rules

Inside per-frame code:

Forbidden unless justified:

* `new Vector3()`
* `new Quaternion()`
* `new Color()`
* array creation
* object creation
* string concatenation
* DOM creation
* querySelector
* event registration
* material creation
* geometry creation

Cache reusable objects.

## 2.7 Event lifecycle

Every:

* `addEventListener`,
* interval,
* timeout,
* `requestAnimationFrame`,
* subscription,
* observer

must have an ownership/cleanup path when the owning system is destroyed.

## 2.8 No hidden global state

Do not create arbitrary globals.

Allowed:

* deliberate platform adapter state,
* deliberate diagnostics state,
* intentional singleton infrastructure with clear ownership.

Not allowed:

* random `window.someGameVariable`,
* uncontrolled mutable module globals,
* invisible cross-system coupling.

## 2.9 File-size discipline

No production source file should become a giant dumping ground.

Hard task-level rule:

* each task changes ONLY ONE primary repository file,
* `STATE_MEMORY.md` is the only control-plane exception,
* each task changes fewer than 150 added+removed lines in the primary file,
* a newly created source file must also remain under 150 lines,
* if a file approaches architectural bloat, create a dedicated extraction task.

A task that needs multiple gameplay files is NOT one task.
Split it.

## 2.10 No fake completion

Forbidden:

* "TODO" instead of implementation,
* placeholder functions silently returning success,
* empty catch blocks,
* fake timers,
* fake SDK success,
* fake movement,
* decorative UI pretending a system exists,
* hardcoded values masquerading as dynamic systems,
* comments claiming a feature works when it has not been browser-tested.

If a resource is missing and the design requires it:

* stop,
* report the missing resource,
* do not silently substitute an unrelated asset.

## 2.11 Prototype versus final quality

Prototype primitives are allowed during early tasks.

They are NOT allowed as final visual proof.

Before release:

* default cyan capsule must not remain as the final player representation,
* default grey boxes must not constitute the final environment,
* random emissive neon must not be used as a substitute for authored visual design,
* final screenshots must demonstrate the premium visual direction.

The reference images are visual-quality targets, not claims that concept art can be reproduced pixel-for-pixel.

---

# 3. MANDATORY VISUAL QA LOOP

Every task uses this exact loop.

No exceptions.

## 3.1 Step A — Scope

Before editing:

1. Read the task row.
2. Read only the relevant project documentation.
3. Read the target file.
4. Read only direct dependencies required to understand the change.
5. Run:

   * `git status --short`
   * `git rev-parse HEAD`
6. Store the current verified commit SHA as the rollback point.
7. Confirm the working tree is clean except for known ignored/generated files.

If there are unexpected uncommitted tracked changes:

* STOP.
* Do not overwrite user work.
* Report the dirty working tree.

## 3.2 Step B — One-file implementation

Edit only the specified primary file.

`STATE_MEMORY.md` is the mandatory control-plane exception.

Do not:

* refactor unrelated code,
* format the entire repository,
* rename unrelated variables,
* upgrade dependencies,
* rewrite unrelated modules,
* perform opportunistic cleanup.

## 3.3 Step C — Line-budget validation

Before validation:

```text
Primary-file changed lines < 150
Repository tracked changes = primary file + STATE_MEMORY.md only
```

If the task exceeds the line budget:

* reduce the change,
* split the work into another task,
* do not commit an oversized change.

## 3.4 Step D — Build/type-check

Run the project's appropriate checks.

At minimum:

```text
npm run build
```

If useful and available:

```text
npx tsc --noEmit
```

A build failure means FAIL.

Do not hide the error.

Do not remove functionality merely to make the build green.

## 3.5 Step E — Start the real browser target

Start the development server so it is reachable at:

```text
http://localhost:3000
```

Use the project's existing scripts when possible.

If necessary:

```text
npm run dev -- --host 0.0.0.0 --port 3000
```

Do not assume the default Vite port.

## 3.6 Step F — Browser Tool is mandatory

Use the available Browser Tool based on Puppeteer or Playwright.

Open:

```text
http://localhost:3000
```

Do not accept:

* source inspection,
* build success,
* DOM-only checks,
* static reasoning

as a substitute for seeing the game.

If Browser Tool access is unavailable:

* task status = BLOCKED,
* do not claim PASS,
* do not continue to the next task.

## 3.7 Step G — Wait for WebGL

After navigation:

1. wait for the page,
2. detect the canvas,
3. confirm the canvas has a non-zero size,
4. wait at least 3 full seconds,
5. only then perform the final screenshot.

This 3-second minimum exists to prevent false-positive blank screenshots caused by capturing before WebGL initialization.

## 3.8 Step H — Console verification

Capture:

* browser console messages,
* page errors,
* uncaught exceptions.

The application must have:

* no runtime errors,
* no uncaught exceptions,
* no repeated error spam.

Known third-party SDK behavior must not break the application.

Development-only warnings must not be mistaken for application runtime failures.

## 3.9 Step I — Functional interaction

For interactive tasks, use the Browser Tool to perform the action.

Examples:

Movement:

* press and hold W,
* release,
* press and hold A,
* release,
* test S,
* test D.

Touch:

* use a mobile viewport/touch interaction.

Shift:

* approach the node,
* activate it,
* observe state change.

Pause:

* activate pause,
* verify gameplay stops,
* resume,
* verify gameplay resumes.

Rewarded ad:

* test the local-safe adapter behavior,
* verify missing SDK does not crash localhost.

Never say "verified" because the code appears correct.

## 3.10 Step J — Screenshot

Capture a screenshot after the 3-second render wait.

The screenshot must visually prove:

* the canvas exists,
* the intended scene is visible,
* the camera is not inside geometry,
* the scene is not blank,
* major newly implemented visual behavior is visible when appropriate.

For visual tasks, screenshot quality is part of acceptance.

## 3.11 Step K — State memory

After EVERY successful task, overwrite:

```text
STATE_MEMORY.md
```

It must contain EXACTLY ONE LINE.

It must contain EXACTLY 15 whitespace-delimited machine-readable tokens.

Canonical format:

```text
TASK=003 STATUS=PASS FILE=src/main.ts ACTION=PLAYER_LOOP BUILD=PASS BROWSER=PASS CONSOLE=CLEAN SCREENSHOT=CAPTURED DIFF=OK NEXT=004 COMMIT=YES RISK=NONE VERIFY=PLAYWRIGHT STATE=SYNCED VERSION=V1
```

The 15 tokens are:

1. `TASK=`
2. `STATUS=`
3. `FILE=`
4. `ACTION=`
5. `BUILD=`
6. `BROWSER=`
7. `CONSOLE=`
8. `SCREENSHOT=`
9. `DIFF=`
10. `NEXT=`
11. `COMMIT=`
12. `RISK=`
13. `VERIFY=`
14. `STATE=`
15. `VERSION=`

Rules:

* never append history,
* always overwrite,
* no second line,
* no prose,
* no markdown,
* no spaces inside values,
* use `STATUS=BLOCKED` when blocked,
* use `STATUS=FAIL` when validation fails,
* preserve the previous successful state if the task fails,
* `ACTION=` must summarize what the task actually accomplished.

## 3.12 Step L — Git commit

Only after:

* build PASS,
* browser PASS,
* console CLEAN,
* screenshot CAPTURED,
* task acceptance PASS,
* STATE_MEMORY updated

create a commit:

```text
TASK-003: <short task description>
```

Every successful task receives its own commit.

The new commit becomes the new verified rollback point.

## 3.13 False-positive prevention

A task is NOT PASS when:

* the canvas is blank,
* the screenshot is taken before the render settles,
* the agent only inspected source code,
* the agent only saw a successful TypeScript build,
* the Browser Tool was unavailable,
* a movement system was never physically interacted with,
* the camera was never physically observed,
* runtime console errors exist,
* the wrong page loaded,
* the wrong dev server was tested,
* a visual task is "implemented" but the screenshot shows no visible result.

---

# 4. STATE MEMORY AND CONTEXT COMPRESSION

## 4.1 Purpose

The local model has a limited context window.

`STATE_MEMORY.md` exists to prevent repeated reading of the entire project.

It is not a design document.

It is the current verified machine state.

## 4.2 Read strategy

At the start of each batch:

1. Read `FORGE_AUTOPILOT.md`.
2. Read `STATE_MEMORY.md`.
3. Determine the next task.
4. Read only:

   * that task's project-bible section,
   * target file,
   * direct dependency files needed for the change.
5. Do not dump the complete source tree into context.

## 4.3 State authority

The order of truth is:

```text
Actual browser evidence
    ↓
Successful git commit
    ↓
STATE_MEMORY.md
    ↓
Project documentation
    ↓
Previous AI claims
```

Previous AI reports do not override physical evidence.

## 4.4 Recovery

If context is compressed:

* read `STATE_MEMORY.md`,
* inspect `git log --oneline -10`,
* continue from the first incomplete task,
* do not restart the entire project,
* do not rebuild already verified systems from scratch.

---

# 5. HARD-RESET FAILURE PROTOCOL

## 5.1 Attempt policy

Every task receives a maximum of 3 implementation attempts.

An attempt includes:

* code change,
* build/type-check,
* Browser Tool launch,
* 3-second WebGL wait,
* console check,
* screenshot,
* functional verification when relevant.

## 5.2 Before attempt 1

Store:

```text
VERIFIED_SHA = current HEAD
```

The current HEAD must represent the last verified task.

## 5.3 Attempt 1 fails

Diagnose the actual failure.

Fix ONLY the target task.

Run the full Visual QA Loop again.

## 5.4 Attempt 2 fails

Re-read:

* target file,
* direct dependencies,
* relevant project specification.

Do not widen scope unnecessarily.

Run the full Visual QA Loop again.

## 5.5 Attempt 3 fails

The task is failed.

Immediately:

```bash
git reset --hard "$VERIFIED_SHA"
```

This MUST happen after the third failed attempt.

Tracked changes from the failed task must be removed.

If the failed task created untracked files:

* remove only those files that were created exclusively by that failed attempt,
* do not perform a blind `git clean -fd`,
* never delete unrelated user assets.

Then verify:

```text
git status --short
git rev-parse HEAD
```

The repository must be returned to the last verified commit.

HALT.

Do not:

* attempt task 4,
* leave half-finished code,
* silently weaken acceptance criteria,
* claim success,
* create a workaround outside the task,
* continue autonomous execution.

## 5.6 Failure report

Report:

* task number,
* exact failure,
* attempt 1 result,
* attempt 2 result,
* attempt 3 result,
* rollback SHA,
* final repository status,
* recommended narrow next action.

Do not dump the entire repository.

---

# 6. MASTER MICRO-TASK BACKLOG

## Global backlog rules

Every task:

* modifies ONE primary file only,
* has a control-plane exception for `STATE_MEMORY.md`,
* changes fewer than 150 added+removed lines in the primary file,
* must complete the full Visual QA Loop,
* must commit after success,
* must stop after the third failed attempt,
* must not silently change unrelated architecture.

Existing project-bible decisions supersede generic descriptions below.

## Core Gameplay + Foundation

| Task | Primary file              | Scope + acceptance                                                                                                                                                      |
| ---- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 003  | `src/main.ts`             | Audit current player/camera wiring and physically verify/fix WASD movement. No false PASS. Browser Tool must move the player and show a visible position/camera change. |
| 004  | `src/player.ts`           | Stabilize movement update, delta handling, normalized directional input, and basic bounds behavior. No frame-loop allocations.                                          |
| 005  | `src/camera.ts`           | Create a focused follow-camera controller with smooth position/target interpolation and clear ownership.                                                                |
| 006  | `src/main.ts`             | Integrate `CameraController` into the actual render loop without changing unrelated systems.                                                                            |
| 007  | `src/input.ts`            | Create modular keyboard input handling with clean listener ownership and cleanup.                                                                                       |
| 008  | `src/main.ts`             | Replace ad-hoc keyboard wiring with the input module. Browser-test WASD after integration.                                                                              |
| 009  | `src/player.ts`           | Add acceleration/deceleration and movement-feel tuning while preserving stable input behavior.                                                                          |
| 010  | `src/gameState.ts`        | Create explicit game states: boot/loading/menu/gameplay/paused/results. No UI implementation yet.                                                                       |
| 011  | `src/runSystem.ts`        | Create the "one more run" lifecycle: start, active run, completed run, failed run, restart.                                                                             |
| 012  | `src/shiftNode.ts`        | Create Shift Node representation/configuration: location, interaction radius, visual state, activation state.                                                           |
| 013  | `src/shiftSystem.ts`      | Implement Shift Node activation/state transitions with deterministic update logic.                                                                                      |
| 014  | `src/shiftEnvironment.ts` | Define localized A/B environment-state data so node activation can affect traversal/visual state without hardcoded scene logic.                                         |
| 015  | `src/main.ts`             | Integrate the shift system into the live scene. Player must be able to approach and activate a node.                                                                    |
| 016  | `src/level1.ts`           | Build the first compact playable route with a beginning, traversal path, multiple Shift Nodes, and finish condition.                                                    |
| 017  | `src/collision.ts`        | Create lightweight collision/boundary handling suitable for the compact level. Avoid heavyweight physics dependencies.                                                  |
| 018  | `src/player.ts`           | Integrate collision constraints into player movement without rewriting the collision module.                                                                            |
| 019  | `src/gameState.ts`        | Add rapid respawn/restart state transitions after failure.                                                                                                              |
| 020  | `src/runSystem.ts`        | Add a run timer with pause-safe and restart-safe behavior.                                                                                                              |
| 021  | `src/scoreSystem.ts`      | Create deterministic scoring from traversal, node actions, completion, and relevant gameplay events.                                                                    |
| 022  | `src/scoreSystem.ts`      | Add combo/multiplier rules without duplicating score-state ownership.                                                                                                   |
| 023  | `src/collection.ts`       | Add lightweight in-run collectible/reward representation compatible with the progression design.                                                                        |
| 024  | `src/progression.ts`      | Create persistent progression definitions and unlock-state representation.                                                                                              |
| 025  | `src/saveSystem.ts`       | Add local browser persistence with versioned save data and corruption-safe fallback.                                                                                    |
| 026  | `src/tutorial.ts`         | Create a minimal onboarding sequence teaching movement, Shift interaction, and run completion.                                                                          |

## UI / Player Experience

| Task | Primary file | Scope + acceptance                                                                                                          |
| ---- | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| 027  | `src/ui.ts`  | Create a small UI shell with explicit ownership of DOM elements and cleanup.                                                |
| 028  | `src/ui.ts`  | Add live HUD for essential run information only.                                                                            |
| 029  | `src/ui.ts`  | Add immediate start/menu flow that does not delay gameplay unnecessarily.                                                   |
| 030  | `src/ui.ts`  | Add results screen with score, rewards, progression, and immediate retry path.                                              |
| 031  | `src/ui.ts`  | Add pause/restart controls synchronized with game state.                                                                    |
| 032  | `src/ui.ts`  | Add touch controls for mobile-compatible movement and interaction. Touch controls must not appear on desktop unnecessarily. |

## Visual Quality

| Task | Primary file             | Scope + acceptance                                                                                                                                           |
| ---- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 033  | `src/materials.ts`       | Create a premium material library: controlled metallic, matte, glass/emissive, and environmental surface treatments. Avoid random neon spam.                 |
| 034  | `src/environment.ts`     | Create an authored futuristic architectural kit using efficient reusable geometry and coherent silhouettes.                                                  |
| 035  | `src/lighting.ts`        | Establish cinematic key/fill/rim/environment lighting with controlled shadow cost.                                                                           |
| 036  | `src/lighting.ts`        | Add restrained atmospheric depth/fog and distance separation without destroying readability.                                                                 |
| 037  | `src/rendering.ts`       | Add lightweight render-quality configuration with DPR limits and quality tiers.                                                                              |
| 038  | `src/camera.ts`          | Add cinematic camera modes for traversal, interaction, and important gameplay moments.                                                                       |
| 039  | `src/camera.ts`          | Add controlled camera impact/shake system tied to meaningful gameplay events only.                                                                           |
| 040  | `src/shiftVFX.ts`        | Build premium Shift Node visual feedback: charge, activation, state transition, cooldown. Avoid excessive particles.                                         |
| 041  | `src/player.ts`          | Replace or upgrade the prototype capsule toward the project's final authored player representation. The prototype capsule may not remain the release visual. |
| 042  | `src/hazards.ts`         | Add readable traversal hazards that create gameplay tension and use the existing collision/run architecture.                                                 |
| 043  | `src/challengeSystem.ts` | Add controlled route/challenge variation so repeated runs are meaningfully different without becoming unpredictable or unfair.                               |

## Audio

| Task | Primary file   | Scope + acceptance                                                                                    |
| ---- | -------------- | ----------------------------------------------------------------------------------------------------- |
| 044  | `src/audio.ts` | Create an audio manager with lazy loading, reusable buffers, lifecycle cleanup, and graceful failure. |
| 045  | `src/audio.ts` | Add movement/traversal audio triggers tied to actual player state, not arbitrary frame counts.        |
| 046  | `src/audio.ts` | Add Shift Node activation/state-change SFX and feedback synchronization.                              |
| 047  | `src/audio.ts` | Add restrained ambient environment layer with pause/resume and browser-audio safety.                  |

## Loading + CrazyGames

| Task | Primary file          | Scope + acceptance                                                                                                                 |
| ---- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 048  | `src/loading.ts`      | Create a minimal loading system that reports real progress where possible and does not block gameplay unnecessarily.               |
| 049  | `index.html`          | Load CrazyGames SDK v3 in the correct order before game code. Keep local development functional if the SDK is unavailable.         |
| 050  | `src/crazyGames.ts`   | Create a single CrazyGames SDK adapter with v3 initialization, availability detection, and safe no-op behavior outside CrazyGames. |
| 051  | `src/gameState.ts`    | Wire gameplay start/stop events to actual playable/resume/pause/result/menu transitions through the adapter.                       |
| 052  | `src/crazyGames.ts`   | Add loadingStart/loadingStop integration with correct lifecycle timing.                                                            |
| 053  | `src/monetization.ts` | Add optional rewarded-ad flow through CrazyGames only. Core gameplay must remain functional without ads.                           |
| 054  | `src/crazyGames.ts`   | Add CrazyGames Data persistence adapter while keeping local save fallback functional.                                              |
| 055  | `src/crazyGames.ts`   | Add appropriate CrazyGames game-context/happytime integration only where it improves the actual game experience.                   |

## Device / Performance / Asset Systems

| Task | Primary file         | Scope + acceptance                                                                                                         |
| ---- | -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 056  | `src/main.ts`        | Harden responsive canvas sizing, resize handling, landscape desktop presentation, and mobile-safe viewport behavior.       |
| 057  | `src/performance.ts` | Add development-only performance diagnostics for FPS/frame-time/quality state without shipping noisy UI.                   |
| 058  | `src/disposal.ts`    | Perform a centralized resource-disposal audit and establish safe cleanup utilities for Three.js resources.                 |
| 059  | `src/assets.ts`      | Create a lazy asset loader with shared-cache ownership and explicit loading/unloading boundaries.                          |
| 060  | `src/quality.ts`     | Add adaptive quality scaling based on device class/performance while preserving a deliberate minimum visual quality floor. |

## Build / Release Optimization

| Task | Primary file                         | Scope + acceptance                                                                                                                                                                             |
| ---- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 061  | `package.json`                       | Audit scripts and dependencies. Remove unnecessary runtime dependencies. Keep build deterministic. Do not add packages without demonstrated need.                                              |
| 062  | `vite.config.ts`                     | Optimize production output: code splitting where beneficial, asset behavior, stable output, and no unnecessary source-map payload.                                                             |
| 063  | `src/ui.ts`                          | Final HUD/menu visual polish: hierarchy, spacing, readability, mobile scaling, and cohesive visual language. Remove placeholder-looking UI.                                                    |
| 064  | `src/main.ts`                        | Final integration cleanup. Remove prototype-only debug panels, temporary landmarks, dev-only visual artifacts, and accidental debug behavior from release mode.                                |
| 065  | `forge-shift/09_QA_TEST_MATRIX.md`   | Record the final verification matrix and required evidence: desktop, keyboard, touch, gameplay loop, shift mechanics, audio, loading, SDK, performance, visual quality, and regression checks. |
| 066  | `forge-shift/07_PROGRESS_TRACKER.md` | Update project progress using only physically verified results. Do not mark a subsystem complete from source inspection alone.                                                                 |

---

# RELEASE GATES

The game is NOT release-ready until ALL gates are true.

## Gameplay

* Player moves correctly.
* Camera follows correctly.
* Touch controls work when enabled.
* Shift Nodes activate correctly.
* Environment state changes correctly.
* Failure/respawn works.
* Runs can restart quickly.
* Score works.
* Combo works.
* Rewards/collection work.
* Progression persists.
* Tutorial communicates the core loop.
* Results flow naturally into another run.

## Visual

* No blank or broken WebGL views.
* No prototype-only cyan capsule in the final player presentation.
* No default primitive environment as the final visual identity.
* Architecture has intentional silhouettes and scale.
* Materials are coherent.
* Lighting is cinematic but performant.
* Atmosphere improves depth.
* Shift Nodes have strong visual readability.
* Camera behavior changes intelligently based on gameplay context.
* Screenshots look like a finished game rather than a technical demo.

## Performance

* Initial download <= 50 MB.
* Target <= 20 MB when pursuing mobile homepage eligibility.
* Total files <= 250 MB.
* File count <= 1500.
* Relative paths only.
* No obvious memory leaks.
* No unbounded runtime allocation patterns.
* No unnecessary high-resolution assets.
* No unnecessary post-processing cost.
* No runaway draw calls.
* Lower-end devices receive a reasonable quality tier.

## Browser QA

Every final subsystem must have:

* successful build,
* Browser Tool execution,
* minimum 3-second post-render wait,
* console inspection,
* screenshot evidence,
* interaction evidence where applicable.

## CrazyGames

* SDK v3 loaded correctly.
* SDK initialization awaited.
* Gameplay Start occurs when genuinely playable.
* Gameplay Stop occurs on genuine gameplay breaks.
* Loading events are correctly placed where used.
* Data persistence uses the appropriate adapter.
* Rewarded ads are optional and SDK-controlled.
* No external ad network is used.
* Localhost gracefully handles SDK absence.
* Production does not depend on localhost-only behavior.

## Git

Every completed micro-task has:

* exactly one primary source/document target,
* an associated `STATE_MEMORY.md` update,
* a successful verification,
* one task-specific git commit.

No failed task may remain partially applied.

---

# AUTONOMOUS EXECUTION RULE

The agent must execute tasks sequentially.

Never skip a failed task because a later task looks easier.

Never implement task N+1 before task N is verified and committed.

The only valid definition of "done" is:

```text
CODE → BUILD → REAL BROWSER → 3s WAIT → CONSOLE → SCREENSHOT → FUNCTIONAL CHECK → STATE MEMORY → COMMIT
```

Anything less is not a completed task.

````
