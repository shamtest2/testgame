# FORGE_AUTOPILOT.md
# FORGE//SHIFT — ARENA AGENT PRODUCTION OPERATING SYSTEM

VERSION: ARENA-MAX-1.0

TARGET:
Premium TypeScript + Vite + Three.js WebGL game
Primary publishing target: CrazyGames HTML5

EXECUTION AGENT:
Arena.ai Agent Mode with connected GitHub repository

============================================================
0. CORE OPERATING PRINCIPLE
============================================================

This project is no longer operated as a micro-task coding exercise.

The previous 60+ tiny-task structure was created for a weaker local model with a limited context window.

Arena Agent Mode is capable of autonomous multi-step coding, bash execution, repository inspection, iteration, app preview, GitHub commits, pushes and pull requests.

Therefore:

DO NOT artificially fragment cohesive engineering work.

DO NOT create unnecessary one-file tasks.

DO NOT spend most of the run repeatedly planning trivial changes.

USE LARGE, COHESIVE PRODUCTION MILESTONES.

The agent must internally decompose each milestone into whatever implementation steps are necessary.

The user should NOT have to provide the next small instruction.

============================================================
1. AUTHORITATIVE SOURCES
============================================================

Priority order:

1. Actual running browser/application evidence
2. Current repository source
3. Successful Git commit state
4. STATE_MEMORY.md
5. Existing forge-shift project documentation
6. Previous AI reports

Never trust a previous AI claim over actual runtime evidence.

Existing project-bible documentation remains authoritative for:
- game concept
- gameplay architecture
- visual direction
- CrazyGames requirements
- asset philosophy
- progression design

When documentation is ambiguous:
choose the option that best preserves the established design direction,
record the decision internally,
and continue without unnecessary questioning.

============================================================
2. ARENA EXECUTION STYLE
============================================================

For each milestone:

A. Understand
B. Inspect
C. Plan internally
D. Implement cohesive feature set
E. Compile/type-check
F. Run the game
G. Perform real browser/preview verification
H. Inspect console/runtime errors
I. Take visual evidence
J. Fix discovered problems
K. Repeat verification
L. Commit checkpoint
M. Continue to the next milestone

The agent should continue autonomously.

Do not stop for confirmation after every implementation step.

Do not ask the user which file to edit.

Do not ask the user what task comes next.

Do not stop merely because a single feature has been implemented.

============================================================
3. MILESTONE SIZE
============================================================

A milestone should contain a coherent gameplay/system objective.

Preferred scope:

Several related files
Several related components
Hundreds of lines when genuinely required

Do NOT impose a 150-line maximum.

Do NOT impose a one-file restriction.

Instead enforce:

- no unrelated refactoring
- no unnecessary rewrites
- no architecture degradation
- no giant monolithic modules
- no fake implementations
- no uncontrolled dependencies

The agent may modify all necessary files for a milestone.

============================================================
4. INTERNAL DECOMPOSITION
============================================================

The agent may internally create substeps such as:

foundation
→ implementation
→ integration
→ compile
→ runtime
→ visual validation
→ correction

These substeps are INTERNAL.

Do not stop after each one.

Do not ask the user to approve each one.

Only report at meaningful milestone boundaries.

============================================================
5. CODE QUALITY
============================================================

Maintain:

- strict TypeScript
- modular systems
- SOLID principles
- clear ownership
- predictable state transitions
- resource disposal
- low allocation pressure
- reusable Three.js resources
- no circular dependencies
- no giant manager class
- no hidden globals

Avoid:

- any
- ts-ignore
- dead code
- fake functions
- TODO placeholders presented as complete
- unnecessary dependencies
- unnecessary DOM operations
- per-frame object creation
- repeated material/geometry creation
- uncontrolled listeners
- uncontrolled timers
- memory leaks

Architecture must improve as the game becomes larger.

============================================================
6. PERFORMANCE
============================================================

Protect:

- initial download
- runtime memory
- GPU memory
- draw calls
- shader complexity
- shadow cost
- texture memory
- startup time
- CPU frame time

Use:

- instancing
- shared materials
- shared geometries
- LOD
- compressed textures
- lazy loading
- bounded particle counts
- adaptive resolution/DPR
- explicit disposal

Never increase graphical complexity blindly.

Every expensive visual choice must provide visible value.

============================================================
7. CRAZYGAMES
============================================================

Respect official CrazyGames requirements.

Current hard limits include:

- total file size <= 250 MB
- <= 1500 files
- initial download <= 50 MB
- target <= 20 MB when pursuing mobile-home eligibility
- relative asset paths
- fast path to playable gameplay

Use CrazyGames SDK v3.

Integrate:

- initialization
- gameplay start
- gameplay stop
- loading lifecycle
- persistence where appropriate
- optional rewarded ads

Never depend on advertisements for core gameplay.

Never add an unrelated ad network.

Local development must survive SDK absence.

============================================================
8. VISUAL TARGET
============================================================

FORGE//SHIFT is NOT intended to remain a technical demo.

The final presentation must communicate:

premium futuristic world
authored architecture
believable scale
strong silhouettes
material depth
cinematic lighting
atmospheric depth
focused emissive accents
high-quality interaction feedback
responsive camera
polished UI
coherent audio
meaningful environmental changes

The cyan prototype capsule is temporary.

Primitive boxes/capsules are acceptable only during early development.

The final release must not visually depend on default Three.js primitives.

Avoid:

random neon
generic cyberpunk spam
giant glowing cubes
flat placeholder materials
meaningless particles
default-demo presentation

============================================================
9. REQUIRED INPUT MATRIX
============================================================

All four movement directions MUST support both keyboard layouts:

FORWARD:
W
ArrowUp

BACKWARD:
S
ArrowDown

LEFT:
A
ArrowLeft

RIGHT:
D
ArrowRight

Both mappings must behave identically.

Do not implement one layout and leave the other broken.

Physical browser verification is required.

============================================================
10. RUNTIME VERIFICATION POLICY
============================================================

Runtime verification is mandatory.

However, verification should happen at the RIGHT granularity.

Do NOT browser-test every tiny internal refactor.

Instead:

- build continuously during implementation
- run focused checks during development
- perform full browser verification at each cohesive milestone
- perform final regression across the entire product

This provides strong confidence without wasting the agent's execution budget on repetitive micro-tests.

============================================================
11. BROWSER VERIFICATION
============================================================

For every milestone:

1. Start the actual dev server.
2. Open the actual running application in the available browser/preview environment.
3. Wait until the WebGL canvas has initialized.
4. Wait at least 3 additional seconds before final visual capture.
5. Check runtime/page/console errors.
6. Physically interact with the new feature.
7. Capture a screenshot.
8. Inspect the visual result.
9. Fix anything discovered.
10. Repeat until the milestone genuinely passes.

A source-code inspection is NOT runtime proof.

A successful build is NOT gameplay proof.

============================================================
12. BROWSER INFRASTRUCTURE RECOVERY
============================================================

If the browser cannot reach the game:

First diagnose.

Check:

- server process
- actual port
- host binding
- localhost reachability
- forwarded port
- application startup errors

Use shell diagnostics such as:

ss -ltnp
curl
process inspection
Vite startup output

Do not falsely claim a runtime pass.

If the dedicated preview/browser tool is unavailable, use an available local browser automation mechanism if the environment supports one.

The final requirement is physical verification of the actual application.

============================================================
13. FAILURE RECOVERY
============================================================

Do not abandon a milestone after the first error.

The agent should autonomously:

1. inspect the failure
2. identify root cause
3. make a narrow fix
4. rerun build
5. rerun runtime verification

Repeat until solved or genuinely blocked.

Do not endlessly rewrite the architecture.

Use checkpoint commits so large milestones remain recoverable.

If a change corrupts the current implementation:

return to the last known-good checkpoint.

Do not leave the branch in a knowingly broken state.

============================================================
14. GIT STRATEGY
============================================================

Do NOT commit every microscopic change.

Commit at meaningful checkpoints:

Example:

feat: complete movement and camera foundation
feat: complete shift gameplay loop
feat: complete progression systems
feat: complete visual presentation pass
feat: complete platform integration
perf: complete production optimization

Push the work to the connected GitHub repository.

Before creating/finishing the PR:

- build
- type-check
- runtime verification
- final diff review

Do not make a PR from a knowingly broken branch.

============================================================
15. STATE MEMORY
============================================================

STATE_MEMORY.md is compressed state, not history.

Keep it concise.

After each meaningful milestone/checkpoint, overwrite it with the current verified state.

The format may remain machine-readable and compact.

Do not fill it with long explanations.

============================================================
16. PRODUCT DEVELOPMENT PHILOSOPHY
============================================================

Optimize for:

QUALITY × SPEED × COHESION

not:

NUMBER OF PROMPTS

not:

NUMBER OF COMMITS

not:

NUMBER OF FILES

not:

NUMBER OF TASK IDs

The agent should finish a cohesive feature completely before spending time on the next one.

============================================================
17. MASTER MILESTONE BACKLOG
============================================================

M0 — FOUNDATION REALITY CHECK
- inspect actual current repository
- fix verification/server setup
- verify WebGL runtime
- verify player visibility
- implement/fix WASD
- implement/fix Arrow keys
- verify all four directions physically
- verify camera follows
- remove false verification assumptions
- establish clean verified baseline

M1 — PLAYABLE CORE LOOP
- explicit game state
- run start
- traversal
- failure condition
- respawn
- instant retry
- finish condition
- run timer
- reliable gameplay lifecycle

M2 — SHIFT GAMEPLAY SYSTEM
- robust Shift Node representation
- interaction detection
- activation
- cooldown
- A/B environment state
- traversal consequences
- multiple node placements
- readable player feedback
- first complete playable route

M3 — CHALLENGE + REPLAYABILITY
- hazards
- route decisions
- controlled variation
- score
- combo
- rewards
- collectibles
- repeat-run differentiation

M4 — PROGRESSION
- persistence
- progression state
- unlocks
- collection
- reward feedback
- restart motivation
- progression UI

M5 — PREMIUM VISUAL PRESENTATION
- authored architecture
- environment composition
- materials
- lighting
- atmosphere
- player visual upgrade
- Shift VFX
- cinematic camera
- camera impact feedback
- visual hierarchy

M6 — PLAYER EXPERIENCE
- onboarding
- HUD
- start screen
- pause
- results
- retry
- mobile controls
- responsive layout

M7 — AUDIO
- audio manager
- movement SFX
- Shift SFX
- environment ambience
- gameplay-state audio transitions
- safe browser audio lifecycle

M8 — CRAZYGAMES PLATFORM
- SDK v3
- initialization
- gameplay start/stop
- loading events
- persistence integration
- rewarded ads
- graceful local fallback

M9 — PRODUCTION OPTIMIZATION
- asset audit
- bundle audit
- texture audit
- draw-call audit
- runtime-memory audit
- disposal audit
- adaptive quality
- mobile performance
- final startup optimization

M10 — FINAL RELEASE QA
- desktop regression
- keyboard regression
- Arrow-key regression
- mobile regression
- Shift regression
- scoring regression
- progression regression
- audio regression
- SDK regression
- console cleanliness
- visual inspection
- final bundle inspection
- CrazyGames readiness review

============================================================
18. END CONDITION
============================================================

DO NOT STOP BECAUSE:

"the feature works"

or

"the build passes"

or

"the page loads"

The project is complete only when:

CORE GAMEPLAY WORKS
+
SHIFT SYSTEM WORKS
+
ONE-MORE-RUN LOOP WORKS
+
PROGRESSION WORKS
+
VISUAL TARGET IS APPROACHED
+
UI/AUDIO WORK
+
MOBILE INPUT WORKS WHERE REQUIRED
+
CRAZYGAMES INTEGRATION WORKS
+
PERFORMANCE IS ACCEPTABLE
+
FINAL BROWSER REGRESSION PASSES
+
GIT STATE IS CLEAN

============================================================
19. AGENT BEHAVIOR
============================================================

Do the work.

Do not narrate every implementation thought.

Do not repeatedly ask permission.

Do not repeatedly ask what to build.

Do not invent requirements.

Do not optimize away necessary QA.

Do not over-plan simple changes.

Do not under-plan complex systems.

Use your available tools aggressively.

Inspect.
Implement.
Run.
Observe.
Correct.
Continue.

============================================================
20. OFFICIAL ARENA CONTEXT
============================================================

Arena Agent Mode is intended for complex multi-step autonomous workflows
and can work inside a sandboxed copy of a connected GitHub repository,
run commands, edit files, preview applications, and manage Git/PR workflow.

This rulebook is intentionally written to exploit those capabilities rather than
treat the agent like a low-context coding chatbot.