# 05 — CRAZYGAMES PUBLISHER SPEC
## FORGE//SHIFT

Status: current-reference document
Last checked against public CrazyGames documentation: September 23, 2026

This document is a planning reference. Before submission, re-check the official CrazyGames documentation because platform rules can change.

---

# 1. Launch Model

CrazyGames uses a two-stage launch process:
- Basic Launch
- Full Launch

Basic Launch can go live without full SDK/monetization integration.
Full Launch requires the applicable integration requirements.

The project should be architected for Full Launch from the beginning so we do not retrofit platform systems late.

---

# 2. Current Technical Constraints

CrazyGames currently documents:
- maximum total file size: 250 MB;
- maximum file count: 1,500;
- initial download: <= 50 MB;
- mobile-homepage eligibility: <= 20 MB initial download;
- externally loaded files evaluated by time to gameplay, with a <=20-second target in the technical requirements;
- relative paths only for bundled files.

These are release gates.

Source:
https://docs.crazygames.com/requirements/technical/

---

# 3. Gameplay Start Event

The first `Gameplay start` event is used to determine the game's initial loading size when the SDK is integrated.

The event should occur when the game becomes genuinely playable, not while it is still showing menus or an artificial loading step.

Source:
https://docs.crazygames.com/sdk/game/

---

# 4. HTML5 SDK

Current CrazyGames documentation recommends the newer HTML5 v3 SDK.

Important current facts:
- v3 is manually initialized;
- initialization is asynchronous;
- SDK calls should occur after initialization;
- development can be tested on localhost;
- the CrazyGames preview tool provides a realistic platform environment.

Source:
https://docs.crazygames.com/sdk/intro/

The platform layer in this project must use the current official SDK documentation at implementation time.

---

# 5. Required Platform Events

Plan for:
- SDK initialization;
- loading start/stop as appropriate;
- gameplay start;
- gameplay stop;
- pause/resume;
- game over / level completion integration where useful;
- data/save integration where appropriate;
- user/account integration where appropriate;
- happy-time celebrations sparingly.

---

# 6. Ads

Only CrazyGames SDK ads may be used on the platform.

Important current rules:
- ads must not interrupt active gameplay;
- no deceptive ad triggers;
- no chained ads;
- the game must pause appropriately during video ads;
- gameplay audio must be handled correctly around video ads;
- ad failure/unfilled calls must allow the game to continue.

Rewarded ads should be optional and meaningful.

Source:
https://docs.crazygames.com/requirements/ads/

---

# 7. Ads Strategy for FORGE//SHIFT

Preferred design:
- no ad during active traversal;
- midgame ad opportunity at a natural run transition, according to CrazyGames SDK behavior;
- optional reward ad after a run for a bonus, when available;
- no “watch an ad or you cannot continue” design;
- no ad button on the active gameplay screen.

The game must remain functional when ads are disabled.

---

# 8. Gameplay / QA Requirements

Current CrazyGames gameplay requirements include:
- readable content;
- consistent physics;
- English localization;
- intuitive controls;
- smooth performance;
- originality;
- fullscreen behavior compatible with the platform;
- PEGI 12 suitability;
- no prohibited cross-promotion.

For Full Launch, new users should land directly in gameplay, or use at most one click when a direct landing is not feasible.

Source:
https://docs.crazygames.com/requirements/gameplay/

---

# 9. Readability Test Sizes

Current documented important iframe sizes include:
- 907 x 510
- 1216 x 684
- 1077 x 606
- 821 x 462
- 1366 x 768
- 1920 x 1080
- 1536 x 864
- 1280 x 720
- 800 x 450
- 1080 x 607

HUD and instructional text must remain readable across relevant sizes.

---

# 10. Browser / Hardware Planning

CrazyGames expects good behavior in current Chrome and Edge and notes a significant Chromebook audience.

The game must remain smooth on a 4 GB RAM Chromebook-class environment.

Therefore:
- no unnecessary large textures;
- controlled geometry;
- limited dynamic shadows;
- no unbounded particles;
- no runaway memory allocation;
- no per-frame object creation when avoidable.

---

# 11. Originality Gate

Before submission verify:
- original name;
- original art;
- original UI;
- original environments;
- original mechanics;
- no copyrighted logos;
- no recognizable game clone behavior.

---

# 12. Platform Preview Gate

Before submission:
1. create/update the Developer Portal game entry;
2. upload the build;
3. use CrazyGames Preview;
4. test loading;
5. test gameplay;
6. test ads/SDK behavior;
7. test mobile/responsive behavior;
8. inspect console/runtime errors.

Official documentation:
https://docs.crazygames.com/sdk/intro/

---

# 13. Pre-Submission Checklist

[ ] Initial download limit verified
[ ] Total package size verified
[ ] File count verified
[ ] Relative paths verified
[ ] Gameplay start event correct
[ ] Gameplay stop/resume behavior correct
[ ] Fullscreen compatible
[ ] English UI complete
[ ] Controls intuitive
[ ] Mobile behavior checked
[ ] No external ad network
[ ] Reward ads optional
[ ] Ads-disabled mode tested
[ ] Save/load tested
[ ] No console errors
[ ] Performance test completed
[ ] Originality review completed
[ ] PEGI 12 review completed
[ ] CrazyGames Preview completed
