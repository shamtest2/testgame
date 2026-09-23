# AI_CONTEXT_INDEX
## FORGE//SHIFT

This file tells an AI where to look instead of reading everything.

---

# Product

Game vision / decisions:
`00_MASTER_PROJECT_BIBLE.md`

Detailed mechanics:
`04_GAMEPLAY_SYSTEMS_SPEC.md`

Visual rules:
`03_VISUAL_QUALITY_BIBLE.md`

Reference prompts:
`11_REFERENCE_IMAGE_PROMPTS.md`

---

# Technical

Architecture:
`02_TECHNICAL_ARCHITECTURE.md`

CrazyGames:
`05_CRAZYGAMES_PUBLISHER_SPEC.md`

AI coding protocol:
`06_CLINE_EXECUTION_PROTOCOL.md`

---

# State

Progress:
`07_PROGRESS_TRACKER.md`

Current compact state:
`08_CURRENT_STATE.md`

QA:
`09_QA_TEST_MATRIX.md`

Handoff:
`10_AI_HANDOFF_PROTOCOL.md`

---

# Read by task

PLAYER:
- Master
- Current State
- Technical
- Gameplay

CAMERA:
- Master
- Visual
- Technical

SHIFT MECHANIC:
- Master
- Gameplay
- Technical
- Visual

UI:
- Master
- Visual
- CrazyGames
- Gameplay

ADS/SDK:
- Master
- CrazyGames
- Technical
- QA

PERFORMANCE:
- Technical
- CrazyGames
- Asset
- QA

---

# Context Rule

Do not read every source file unless required.

Find the smallest relevant context first.
