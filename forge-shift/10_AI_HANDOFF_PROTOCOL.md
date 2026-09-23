# 10 — AI HANDOFF PROTOCOL
## FORGE//SHIFT

Purpose:
Ensure another AI agent can continue the game without inheriting the entire conversation.

---

# 1. Required Handoff Package

Keep these files current:
- `00_MASTER_PROJECT_BIBLE.md`
- `02_TECHNICAL_ARCHITECTURE.md`
- `06_CLINE_EXECUTION_PROTOCOL.md`
- `07_PROGRESS_TRACKER.md`
- `08_CURRENT_STATE.md`
- `AI_CONTEXT_INDEX.md`
- `CHANGELOG.md`

---

# 2. What Another AI Must Learn

Within a few minutes, another AI must know:
- what the game is;
- what the player does;
- what the visual target is;
- what stack is used;
- what is complete;
- what is active;
- what is broken;
- which files matter;
- what not to change.

---

# 3. Do Not Rely on Chat History

Chat history is not the project's permanent memory.

Decisions that matter must become files.

---

# 4. Handoff Procedure

Before switching AI:
1. stop implementation at a stable point;
2. run relevant test;
3. commit;
4. update current state;
5. update changelog;
6. verify context index;
7. give the next AI only the necessary task.

---

# 5. Recovery Procedure

If the project becomes confusing:
- read Master Bible;
- read Current State;
- inspect Git status;
- inspect last accepted commit;
- run smoke test;
- identify the active subsystem;
- do not perform a large refactor.

---

# 6. Design Freeze

A design is considered frozen when:
- player loop is approved;
- visual bible is approved;
- stack is approved;
- first prototype passes;
- architecture interfaces are stable.

After freeze, changes should be recorded as explicit change requests.

---

# 7. Quality Transfer

The visual quality cannot live only in one AI's memory.

Therefore:
- reference prompts;
- visual rules;
- screenshots;
- acceptance criteria;
- camera rules;
- material rules;
- UI rules

must all be stored in the repository.

This is how a replacement AI can reproduce the intended product direction.
