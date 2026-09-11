# Level port audit

Numbers follow the original 1-based progression. `ported` requires a replayed completion route and no known required mechanic gap. `being-ported` means original space/basic objects are available, but completion or behavior remains incomplete. `not-ported` means a placeholder remains.

This pass captures initial layouts, not Python callbacks. Source files remain unchanged. The capture tool under `kiki/js/tools/` reproduces Python 2 integer division, legacy range truncation, endpoint-exclusive lines, occupancy replacement, and polygon edges. Random mutant placement is a fixed seed per level for reproducibility. Initial orientations, dimensions, exits, help, object faces, colors, and slippery flags are retained.

Shared limitations: mutant AI/damage/deactivation is absent; source lights are data only; slippery stone grabbing and slit visuals are not implemented; circuit exit conditions and action timing remain approximate. A geometry-only route does not certify levels needing these features. The original `core` uses fractional range bounds, captured with legacy integer truncation.

| Level | Name | Status | Layout and remaining work |
| --- | --- | --- | --- |
| 10 | gears | being-ported | Original gear, generator, motor and wire layout retained. Circuit activation and mechanical timing remain approximate; no verified completion route. |
| 11 | gamma | being-ported | Original room, mutant and switches retained. Mutant AI/damage and color-cycling callback are missing; completion unverified. |
| 12 | cube | being-ported | Original nested cube walls and start/exit retained. No route certified within the bounded search; full puzzle completion remains unverified. |
| 13 | switch | ported | Original switches and declarative multi-switch exit condition retained. Completion route replay-verified in the shared simulator (14 actions). |
| 14 | borg | being-ported | 9×9×9 arena with 150 mutants and source light. Mutant AI, damage and combat are missing; light is data only. Fixed random seed. |
| 15 | mini | being-ported | 5×5×7 chamber with eight walls and five stones; original sideways start restored. No route certified within the bounded search; full puzzle completion remains unverified. |
| 16 | blocks | being-ported | Stepped walls and colored stones, including slippery stones. Slippery grabbing rules and slit visuals are missing. |
| 17 | bombs | being-ported | Three bombs in the original chamber. Blast propagation is simplified; original bomb-assisted route is unverified. |
| 18 | sandbox | being-ported | Sandbox border, twelve stones and switch retained. Nine-cell occupancy callback is missing; exit remains closed. |
| 19 | energy | being-ported | Tall cross-shaped room, eight mutants and four switches. Four-switch exit condition translated; mutant AI/damage are missing. |
| 20 | maze | being-ported | 4×4×4 maze with 29 walls and source light. Source inside-camera mode retained; point light is data only. |
| 21 | love | being-ported | Bomb and stone heart outlines, central mutant and peace exit. Mutant AI/damage and original bomb timing are incomplete. |
| 22 | towers | being-ported | Original two stone towers and sideways starting orientation. No route certified within the bounded search; full puzzle completion remains unverified. |
| 23 | edge | ported | Four colored corner stone clusters in the original cube. Completion route replay-verified in the shared simulator (12 actions). |
| 24 | random | being-ported | Original authored 21×21×21 stone field, eight corner walls and two source lights. Repeated source stone placements replace occupants; lights are data only. |
| 25 | plate | being-ported | Slippery 3×3 plate and five bombs; original inverted start restored. Slippery grabbing/slit visuals and bomb timing are incomplete. |
| 26 | nice | being-ported | Four diagonal wall lines and nested wall/stone polygons; center deletion retained. No route certified within the bounded search; full puzzle completion remains unverified. |
| 27 | entropy | being-ported | Dense patterned slippery stone volume. Slippery grabbing rules and slit visuals are missing. |
| 28 | slick | being-ported | Original slippery stone layers and central support. Slippery grabbing rules and slit visuals are missing. |
| 29 | bridge | being-ported | Original bridge stones, motor, generator and face-specific boundary wires. Electrical exit activation is missing; exit remains closed. |
| 30 | flower | being-ported | Original wall/stone columns and four slippery center stones. Slippery grabbing rules and slit visuals are missing. |
| 31 | stones | being-ported | Four stepped square wall rings and eight stones; compound starting rotation restored. No route certified within the bounded search; full puzzle completion remains unverified. |
