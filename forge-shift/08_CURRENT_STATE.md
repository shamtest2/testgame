# 08 — CURRENT STATE
## FORGE//SHIFT

This file is the compact handoff memory.

It must remain small.

---

# Project Status

Phase: PRE-BUILD
Current task: TASK-002
Last completed task: TASK-001

# Product

Working title: FORGE//SHIFT
Genre: 3D run-based traversal + architectural reconfiguration + progression
Visual target: premium futuristic, cinematic, stylized realism
Platform: HTML5 / CrazyGames

# Current Design Lock

Core loop:
enter run → traverse → Shift architecture → choose route → collect → extract → upgrade → repeat

Signature mechanic:
controlled environmental reconfiguration at readable Shift Nodes.

Camera:
default Dynamic Cinematic; player-selectable alternatives.

# Technical Preference

Preferred stack:
TypeScript + Vite + Three.js
Optional Rapier 3D for necessary rigid-body physics.

# Infrastructure

Model/runtime:
NOT YET VERIFIED

Cline:
VERIFIED - TASK-000 completed
VERIFIED - TASK-001 completed

Context:
Target 64K if the actual machine can sustain it.

# Code Status

PROJECT SCAFFOLD COMPLETE
- package.json created
- vite.config.ts created
- index.html created
- src/main.ts created (Three.js basic setup)
- build successful with zero errors

TASK-001: CORE 3D SCENE IMPLEMENTED
- Three.js scene with PerspectiveCamera looking at center
- Dark background (#0a0a0f)
- Directional and ambient lights
- Grey box in center (BoxGeometry) as placeholder
- OrbitControls for camera rotation
- Render loop using requestAnimationFrame

# Known Risks

1. Free Colab reliability/policy for the intended remote-agent architecture must be verified.
2. Hardware must be measured before selecting context size.
3. Visual quality may be too high for a first-pass 14B coding agent unless the scope is modular and tightly controlled.
4. CrazyGames platform requirements can change; re-check before release.

# Next Action

Complete TASK-002:
Implement architectural reconfiguration system with modular components

# Handoff Rule

A new AI must read this file first after `00_MASTER_PROJECT_BIBLE.md`.

Do not fill this file with code.
