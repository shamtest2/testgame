# 12 — ASSET + BUDGET SPEC
## FORGE//SHIFT

Purpose:
Keep the visual target ambitious while protecting HTML5 performance and AI implementation reliability.

---

# 1. Budget Philosophy

Every asset has a budget.

Do not think:
“We can optimize it later.”

Think:
“Why does this asset deserve this cost?”

---

# 2. Geometry

Prefer:
- instanced modules;
- repeated architectural pieces;
- moderate polygon density;
- strong silhouette;
- detail through materials and lighting.

Avoid:
- unique geometry for every repeating wall;
- millions of triangles in unseen surfaces;
- tiny decorative meshes with no gameplay/visual value.

---

# 3. Textures

Prefer:
- reusable trim sheets;
- tileable textures;
- small material libraries;
- procedural/analytical details where practical.

Avoid:
- 4K/8K textures for everything;
- dozens of unique normal/roughness maps;
- embedded unused textures.

---

# 4. Hero Assets

Use high-detail assets selectively for:
- major landmarks;
- Hub focal point;
- player;
- critical Shift machine.

Secondary structures should be cheaper.

---

# 5. Audio Budget

Prefer:
- short reusable SFX;
- layered events;
- compressed music;
- a small ambient loop set.

Avoid:
- unnecessary long uncompressed WAV files in release.

---

# 6. VFX Budget

Particles must be bounded.

Every effect must have:
- maximum particle count;
- lifetime;
- cleanup behavior.

No effect may grow forever.

---

# 7. Initial Download Strategy

Initial playable state should contain only what the first gameplay segment requires.

Possible deferred assets:
- later cosmetics;
- later module families;
- deep Hub decorations;
- extra music;
- optional lore.

The exact asset loading plan must be measured against CrazyGames's current limits.

---

# 8. Placeholder Policy

Placeholders are allowed during development.

Before a visual milestone:
- placeholder geometry must be replaced or intentionally stylized;
- placeholder UI text must be finalized;
- missing content must be tracked in Progress Tracker.

No accidental placeholders in release.

---

# 9. Original Asset Rule

All public-facing assets must be:
- original;
- properly licensed;
- or generated/created in a way that permits the intended commercial use.

Store source/license notes for third-party assets.

---

# 10. Asset Registry

Maintain:
`assets/ASSET_REGISTRY.md`

For each significant asset:
- ID
- filename
- purpose
- source
- license
- size
- expected load stage
- owner system

---

# 11. Size Gate

Before release record:
- compressed ZIP size;
- uncompressed total;
- initial-download set size;
- file count.

Do not estimate.
Measure the actual build.
