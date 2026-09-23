# 04 — GAMEPLAY SYSTEMS SPEC
## FORGE//SHIFT

Status: Prototype-ready design
Rule: mechanics may be revised after user playtest, but revisions must be documented.

---

# 1. Core Gameplay Principles

1. The player should always understand the immediate objective.
2. Every Shift interaction must visibly change the world.
3. Risk/reward choices should be optional where possible.
4. Failure should teach.
5. The game should become more interesting, not merely faster.
6. New content should introduce combinations, not just larger numbers.

---

# 2. Traversal

Traversal should initially be simple.

Required qualities:
- responsive acceleration;
- predictable stopping;
- clear collision;
- no sticky surfaces;
- readable jump/traversal timing if jumping is included.

Do not begin with advanced parkour.

---

# 3. Shift Interaction

Each Shift Node presents one or more compatible targets.

The player:
1. enters interaction range;
2. target becomes readable;
3. system shows available transformation;
4. player confirms;
5. object changes state;
6. world feedback confirms success.

Transformation should feel physical.

Example:
A bridge segment rotates from a wall position into a traversable ramp.

---

# 4. Shift Resource

Use a limited resource so decisions matter.

Possible resource:
**Flux Charge**

Player can:
- start with a small amount;
- recharge through successful traversal or pickups;
- spend on transformations.

Do not let resource management overpower movement.

---

# 5. Module Families

Initial module families:
- rotating bridge;
- extending platform;
- reversible conveyor;
- phase gate;
- moving lift;
- energy barrier.

Each family needs:
- readable idle state;
- readable interactive state;
- transformation;
- completion feedback;
- failure-safe behavior.

---

# 6. Route Design

Every main route should contain:
- obvious safe path;
- optional challenge path;
- visual destination.

The player should be able to choose.

Do not hide the only viable route behind an unintuitive puzzle.

---

# 7. Environmental Hazards

Initial hazards:
- moving machinery;
- energy fields;
- collapsing segments;
- timed shutters;
- unstable platforms.

Hazards must have anticipation.

The player should feel:
“I could have avoided that.”

not:
“The game randomly killed me.”

---

# 8. Reward Types

Run rewards:
- Flux;
- upgrade fragments;
- cosmetic materials;
- discovery logs;
- temporary modifiers.

Permanent:
- tool unlocks;
- capacity upgrades;
- new module interaction types;
- cosmetic collections.

---

# 9. Temporary Run Modifiers

Examples:
- higher Flux gain;
- longer Shift duration;
- faster recharge;
- safer hazard timing;
- extra interaction range.

Temporary modifiers should create interesting builds.

---

# 10. Permanent Upgrades

Start with a very small set.

Examples:
- +1 Shift charge;
- faster charge recovery;
- improved interaction range;
- one additional tool slot;
- safer first hazard;
- improved reward multiplier for optional routes.

Avoid complex RPG stats early.

---

# 11. Collection

Collection screen categories:
- Shells
- Visors
- Core styles
- Trails
- Shift effects
- Lore fragments

Collections should create reasons to explore optional areas.

---

# 12. Run Score

Possible score inputs:
- completion time;
- Flux collected;
- optional objectives;
- damage/failures avoided;
- uninterrupted traversal streak.

Score should not become more important than simply enjoying the core loop.

---

# 13. First Prototype Scope

The first real prototype should contain only:
- one playable character/machine;
- one environment;
- one Shift Node;
- one module transformation;
- one route choice;
- one reward;
- one extraction point;
- retry.

If that is not fun, do not expand.
