# FORGE//SHIFT — PROJECT BIBLE
Working title: **FORGE//SHIFT**
Document set version: **0.1 — Pre-Production Lock**
Status: **NO GAME CODE SHOULD BE WRITTEN YET**

## Purpose

This folder is the permanent source of truth for the game project.

The human Product Manager should not need to understand code. The AI coding agent (Cline or a replacement agent) must use these files as the operating manual.

The game must be built to the quality bar represented by the visual references and prompts stored in `11_REFERENCE_IMAGE_PROMPTS.md`, while remaining technically realistic for an HTML5/CrazyGames release.

## Read order for any new AI agent

1. `00_MASTER_PROJECT_BIBLE.md`
2. `08_CURRENT_STATE.md`
3. `02_TECHNICAL_ARCHITECTURE.md`
4. `03_VISUAL_QUALITY_BIBLE.md`
5. `06_CLINE_EXECUTION_PROTOCOL.md`
6. `04_GAMEPLAY_SYSTEMS_SPEC.md` only for gameplay work
7. `05_CRAZYGAMES_PUBLISHER_SPEC.md` only for platform work
8. The specific task supplied by the Product Manager

Do not force an AI agent to read the whole source tree just to make a small change.

## The three roles

### Product Manager
Owns final product decisions, playtesting, approvals and reporting visible problems.

### Lead AI Architect
Owns the design, architecture, sequencing, quality gates, task definitions and handoffs.

### Cline / coding agent
Owns implementation, local testing, focused file changes and state updates. It must not redesign the product without an explicit decision.

## Non-negotiable rule

**No feature is considered complete because the code runs.**
It is complete only when its product behavior, visual quality, performance, responsiveness and regression checks satisfy the relevant acceptance criteria.

## Pre-build gate

Before Task #1, verify:
- the chosen model actually runs reliably with the required context;
- the chosen runtime is allowed and practical for the intended workflow;
- the local/remote model connection survives tool calls;
- Cline can inspect/edit/test the project;
- Git checkpoints work;
- browser preview works;
- the project can be recovered by another AI from this folder alone.

Do not treat a free Google Colab runtime as a guaranteed permanent production server. Its current free tier has dynamic limits and restrictions; verify the intended setup before depending on it.

## Current status

The game concept and documentation foundation are being established.
**No production code is authorized yet.**
