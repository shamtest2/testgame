# 03 — VISUAL QUALITY BIBLE
## FORGE//SHIFT

This is the quality-control document for the visual target.

The reference prompts in `11_REFERENCE_IMAGE_PROMPTS.md` establish the intended visual direction. The objective is not to generate a picture that looks impressive while the actual game looks primitive.

The actual playable build must carry the same visual design principles into geometry, lighting, materials, camera and UI.

---

# 1. Visual Target

Target feeling:
**“This looks like a serious futuristic game, not an AI-generated generic browser demo.”**

The following five layers must agree:

1. geometry
2. materials
3. lighting
4. camera
5. interaction feedback

If only one layer is polished, the game will still look cheap.

---

# 2. Geometry Rules

Architecture must feel:
- engineered;
- modular;
- purposeful;
- monumental;
- physically plausible.

Use:
- large structural forms;
- repeating architectural language;
- service areas;
- rails;
- panels;
- vents;
- joints;
- support members;
- glass partitions;
- maintenance access;
- believable scale references.

Do not fill every surface with random detail.

Detail must communicate function.

---

# 3. Material Rules

Primary:
- dark/neutral metal;
- brushed/satin metal;
- concrete;
- coated composite;
- glass;
- stone/ceramic.

Interactive materials:
- subtle emissive strips;
- energy surfaces;
- edge highlights.

Avoid:
- plastic-looking everything;
- exaggerated metallic rainbow reflections;
- excessive bloom;
- glowing outlines around every object.

---

# 4. Lighting

Lighting should establish hierarchy.

Important path:
visible.

Interactive object:
recognizable.

Hazard:
readable.

Background:
dramatic but not distracting.

Use:
- large area-like lights where possible;
- strong key direction;
- ambient fill;
- selective emissive practicals;
- controlled atmospheric fog.

---

# 5. Color

Base:
mostly neutral.

Accent:
one primary interactive accent.

Secondary:
one optional reward/rare accent.

Rule:
Color should communicate information, not merely decoration.

---

# 6. Cinematic Camera

The camera must:
- show where the player is;
- show why the player should move;
- reveal important transformations;
- preserve control.

Preferred framing:
- third-person three-quarter;
- slightly elevated;
- strong depth;
- dynamic but controlled.

For transformation moments:
- subtle widen;
- controlled pullback;
- tiny focus shift;
- return to gameplay framing.

No gratuitous camera shake.

---

# 7. World Scale

Use architecture to create the “future-realistic” feeling.

The environment should contain:
- enormous structures;
- human-scale details;
- service machinery;
- distant lights;
- structural repetition.

The camera should sometimes reveal that the player is tiny relative to the facility.

---

# 8. VFX

Priority effects:
- Shift activation;
- structure movement;
- energy transfer;
- extraction;
- reward reveal.

Effects should:
- explain the action;
- add weight;
- avoid screen-filling noise.

---

# 9. UI

UI should feel like a physical extension of the world.

Rules:
- minimal;
- high contrast;
- large enough for CrazyGames iframe sizes;
- never cover hazards;
- never dominate the screen;
- use clear hierarchy.

CrazyGames requires readable content across multiple desktop and mobile iframe sizes, so readability is a release requirement, not an optional polish step.

---

# 10. Anti-Generic Checklist

Reject visual work that looks:
- like stock sci-fi;
- like cyberpunk template art;
- like a mobile game ad;
- like random floating neon blocks;
- like a tech demo;
- like a Unity/Three.js tutorial.

Accept visual work when:
- forms have functional logic;
- lighting has purpose;
- materials feel consistent;
- scale is believable;
- the game's unique mechanic is visible in the environment.

---

# 11. Golden Screenshot Gate

Before a milestone is declared visually complete, produce screenshots showing:
- gameplay at standard desktop size;
- close interaction;
- wide environment;
- Hub;
- upgrade/progression;
- failure/retry;
- extraction.

Compare them against the reference prompts.

The question is not:
“Is the screenshot pretty?”

The question is:
“Does this look like the same product?”

---

# 12. Visual Hierarchy

Every frame should contain:
- primary focus;
- secondary gameplay information;
- environment;
- background depth.

If the player cannot identify the primary action quickly, reduce visual noise.
