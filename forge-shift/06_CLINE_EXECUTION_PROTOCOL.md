# 06 — CLINE EXECUTION PROTOCOL
## FORGE//SHIFT

This document controls how the coding agent works.

---

# 1. Cline's Role

Cline is the implementation engineer.

Cline receives a task from the Product Manager/Architect and executes it inside the repository.

Cline is not authorized to redesign the product.

---

# 2. Required Context

At the beginning of every task, Cline must inspect:
1. `00_MASTER_PROJECT_BIBLE.md`
2. `08_CURRENT_STATE.md`
3. the relevant architecture document;
4. only the source files required for the task.

Do not load the entire repository unnecessarily.

---

# 3. Task Contract

Every task supplied by the Architect must contain:
- objective;
- why it exists;
- scope;
- files likely affected;
- files that must not be changed;
- acceptance criteria;
- test procedure;
- completion/report format.

Cline should ask for clarification only when the task is impossible to execute from the supplied information. Otherwise make the smallest safe implementation.

---

# 4. Change Discipline

Rules:
- prefer focused diffs;
- do not rewrite stable systems without a reason;
- do not refactor unrelated code;
- do not rename public interfaces casually;
- do not add dependencies without approval;
- do not replace assets with invented substitutes;
- do not modify design documents except the required state/update files.

---

# 5. Context Efficiency

The project may eventually become large.

Do not make a later agent repeatedly read large files simply because they exist.

Use:
- modular source files;
- small configuration files;
- `08_CURRENT_STATE.md`;
- `AI_CONTEXT_INDEX.md`;
- task-specific reading.

Large logs must be filtered or summarized.

Do not paste giant terminal logs into project state.

---

# 6. Context Window Strategy

Target:
**64K context when the actual hardware supports it.**

Do not confuse:
- maximum model context;
- Cline context setting;
- Ollama allocated context;
- actual available VRAM/RAM.

Measure the real configuration.

Current Ollama guidance states that coding/agent tasks should use at least 64K context, but larger context requires more memory.

---

# 7. Cline Task Size

A task should generally change:
- one feature;
- one subsystem;
- or one tightly connected vertical slice.

A task should not simultaneously invent:
player + progression + UI + ads + audio.

When a task becomes too large, split it.

---

# 8. Self-Test Requirement

After implementation:
1. run the prescribed build/test command;
2. launch the local game;
3. test the changed behavior;
4. inspect console;
5. verify no obvious regression;
6. report result.

“No errors in my code editor” is not sufficient.

---

# 9. Visual Task Requirement

For visual work, Cline must:
- run the game;
- inspect the actual browser result;
- use screenshots if the tool workflow supports it;
- compare against the Visual Quality Bible;
- fix obvious quality regressions before reporting completion.

---

# 10. State Update Rule

After completing a task, update:
`08_CURRENT_STATE.md`

State update should be compact.

Maximum recommendation:
**50 words for the summary section**.

Include:
- task completed;
- files changed;
- tests run;
- known issues;
- next recommended task.

Do not copy code into the state file.

---

# 11. Git Checkpoint Rule

After each accepted milestone:
- create a clear commit;
- record commit ID in `08_CURRENT_STATE.md`;
- never continue from an unknown dirty state when switching AI agents.

Suggested commit:
`TASK-012: implement shiftable bridge`

---

# 12. Failure Rule

If a task fails:
- do not hide the failure;
- identify the exact failing system;
- keep the repository in the safest known state;
- report the failing test;
- do not perform unrelated “cleanup.”

---

# 13. Design Change Rule

If implementation reveals that the current design is technically unviable:
Cline should stop and report:
- what constraint was discovered;
- the smallest alternative;
- likely quality impact.

Only the Architect/PM changes the product direction.

---

# 14. No Fake Completion

Never report:
“Done.”

unless:
- code exists;
- build/test ran;
- target behavior was checked;
- known issues are listed.

---

# 15. Handoff Behavior

Before another AI takes over:
- commit current stable state;
- update `08_CURRENT_STATE.md`;
- update `CHANGELOG.md`;
- keep `AI_CONTEXT_INDEX.md` accurate.

A new AI should be able to understand the project in minutes rather than reconstruct months of chat history.
