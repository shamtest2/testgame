---
name: forge-shift-autonomous-build
description: Enables autonomous batch development for FORGE//SHIFT project
trigger: When project state requires meaningful product increments
---

# FORGE//SHIFT Autonomous Build Skill

FORGE//SHIFT uses autonomous batch development.

The agent creates a meaningful batch of approximately 8–10 tasks when appropriate.

The agent executes ONLY ONE ACTIVE TASK at a time.

After that task passes its gates:

verify
review
checkpoint
update state
commit
move to next task automatically.

Never wait for the human between normal tasks.

Never ask what task comes next when the repository already defines the product roadmap.