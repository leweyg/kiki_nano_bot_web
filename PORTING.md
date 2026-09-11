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
