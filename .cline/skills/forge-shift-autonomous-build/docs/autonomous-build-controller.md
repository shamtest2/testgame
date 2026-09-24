# Autonomous Build Controller

The core operating sequence for FORGE//SHIFT autonomous builds:

1. READ CURRENT STATE
2. SELECT BATCH  
3. SELECT ONE ACTIVE TASK
4. PLAN CURRENT TASK
5. IMPLEMENT
6. BUILD
7. RUN
8. TEST
9. VISUAL CHECK
10. REVIEW
11. FIX
12. RETEST
13. COMMIT
14. UPDATE LEDGER
15. SELECT NEXT TASK
16. CONTINUE

## Key Principles

- PLAN THE BATCH
- EXECUTE ONLY ONE TASK DEEPLY AT A TIME
- Do not deeply plan and implement ten tasks simultaneously
- Do not combine unrelated tasks
- Do not create artificial microtasks simply to reach ten tasks
- A task must represent a meaningful product increment