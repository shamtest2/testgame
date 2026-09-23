# 09 — QA TEST MATRIX
## FORGE//SHIFT

Status: PRE-BUILD TEST PLAN

---

# 1. Smoke Test

[ ] Project launches
[ ] First scene loads
[ ] No console errors
[ ] Player appears
[ ] Input works
[ ] Camera works
[ ] Game can restart

---

# 2. Core Mechanic

[ ] Shift target is identifiable
[ ] Shift interaction works
[ ] Transformation is visually obvious
[ ] Transformation has audio feedback
[ ] Transformation has no impossible collision state
[ ] Player can continue after transformation
[ ] Resource is consumed correctly
[ ] Resource cannot become NaN/negative unexpectedly

---

# 3. Run

[ ] Run starts
[ ] Objective is visible
[ ] Main route is reachable
[ ] Optional route is reachable
[ ] Reward is granted
[ ] Extraction works
[ ] Completion state is correct
[ ] Retry is immediate

---

# 4. Failure

[ ] Hazard is readable
[ ] Failure has cause
[ ] Retry works
[ ] Save/progression state is safe
[ ] No dead-end menu
[ ] Optional ad path does not block normal retry

---

# 5. Progression

[ ] Reward persists
[ ] Upgrade costs work
[ ] Upgrade effects work
[ ] Loadout persists
[ ] Cosmetics persist
[ ] Unlock conditions work
[ ] Invalid save is handled

---

# 6. Visual

[ ] Materials coherent
[ ] Lighting coherent
[ ] Camera readable
[ ] No major clipping
[ ] No Z-fighting
[ ] No broken shaders
[ ] No placeholder geometry in release scenes
[ ] Interactive objects visually distinguishable
[ ] UI does not obscure gameplay

---

# 7. Performance

[ ] Initial load measured
[ ] First playable state measured
[ ] FPS/frame time checked
[ ] Memory growth checked
[ ] Repeated restart checked
[ ] Long session checked
[ ] Particle count stable
[ ] No obvious garbage-collection spikes
[ ] Low-end device test performed

---

# 8. CrazyGames

[ ] SDK initializes
[ ] Gameplay start correct
[ ] Gameplay stop/resume correct
[ ] Ads disabled mode works
[ ] Rewarded ad failure path works
[ ] Audio behavior around ads works
[ ] Save/account behavior works where implemented
[ ] Preview tool tested
[ ] No external ads
[ ] No prohibited cross-promotion
[ ] No custom fullscreen control
[ ] English localization complete
[ ] PEGI 12 review complete

---

# 9. Responsive

[ ] 907x510
[ ] 1216x684
[ ] 1077x606
[ ] 821x462
[ ] 1366x768
[ ] 1920x1080
[ ] 1280x720
[ ] 800x450
[ ] 1080x607

---

# 10. Handoff QA

[ ] Git commit exists
[ ] CURRENT_STATE updated
[ ] CHANGELOG updated
[ ] Context index current
[ ] No giant temporary files
[ ] No private credentials in repo
