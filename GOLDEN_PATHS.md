# Golden path audit

Levels 1–50 audited: **14 ported, 5 semi-ported, 31 not-ported**. Nineteen saved paths replay successfully; 24 levels stop at known mechanic gaps and seven stop at search/resource limits. Saved paths are replay-verified in the shared game engine, not claims of optimality or complete source-engine equivalence. `ported` means a valid route without a known required mechanic gap; `semi-ported` means a route exists but bypasses the intended puzzle or uses approximate mechanics; `not-ported` means missing mechanics or an unsuccessful bounded search. Original 3D layouts remain available in all cases.

`unsolvable` is an audit outcome, not a mathematical impossibility claim. Known missing mechanics stop the search immediately. The other searches used BFS (12 seconds / 40,000 expanded states), then weighted best-first (weights 4 and 1.5, up to 18 seconds / 100,000 states each), at most 180,000 discovered states per attempt and depth 100 for weighted search. Each process had a 900 MB heap and a 65-second outer deadline. Search metadata is stored beside the routes.

Hint is off by default, below KIKI. It displays the original route, including jumps and wall transitions, with dots offset toward the local supporting surface. Reset to follow it after changing the puzzle. Dots share the normal render loop and stop during idle. Semi-ported hints are review aids. No hint is shown for unresolved levels.

| # | Level | Port status | Actions | Pushes / shots | Audit |
| --- | --- | --- | ---: | --- | --- |
| 1 | start | ported | 8 | 0 / 0 | Golden path replayed from the initial state through the active exit. |
| 2 | steps | ported | 5 | 0 / 0 | Golden path replayed from the initial state through the active exit. |
| 3 | move | ported | 11 | 1 / 1 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. |
| 4 | electro | semi-ported | 13 | 1 / 0 | Replay opens the exit with the simplified connected-motor check without powering the wire network; electrical fidelity is incomplete. |
| 5 | elevate | not-ported | — | — | Bomb-lift and elevated-circuit behavior remain approximate; stopped before claiming a faithful route. Search intentionally stopped at the known mechanic gap. |
| 6 | throw | semi-ported | 43 | 6 / 0 | Hint uses the existing 43-action stone-stacking route. A four-action far-jump shortcut also wins without pushing either stone, bypassing the tutorial. |
| 7 | gold | ported | 10 | 5 / 0 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. |
| 8 | jump | ported | 11 | 0 / 0 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. |
| 9 | escape | ported | 17 | 1 / 1 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. |
| 10 | gears | not-ported | — | — | Circuit connectivity, exit activation and mechanical timing remain approximate. Search intentionally stopped at the known mechanic gap. |
| 11 | gamma | not-ported | — | — | Mutant AI/damage and the source color-cycling callback are missing. Search intentionally stopped at the known mechanic gap. |
| 12 | cube | not-ported | — | — | Worker aborted (SIGABRT) under the 900 MB heap limit before returning a route; no route certified. Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible. |
| 13 | switch | ported | 14 | 0 / 5 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. |
| 14 | borg | not-ported | — | — | Mutant AI, damage and combat are missing. Search intentionally stopped at the known mechanic gap. |
| 15 | mini | not-ported | — | — | No route found within bounded time/state/frontier limits; search stopped. Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible. |
| 16 | blocks | not-ported | — | — | Slippery-stone grabbing rules are missing; slit visuals are also absent. Search intentionally stopped at the known mechanic gap. |
| 17 | bombs | semi-ported | 7 | 0 / 0 | Seven actions reach the exit without pushing or shooting a bomb. This bypasses the bomb lesson; blast propagation and timing remain simplified. |
| 18 | sandbox | not-ported | — | — | The nine-cell occupancy callback is missing; the exit stays closed. Search intentionally stopped at the known mechanic gap. |
| 19 | energy | not-ported | — | — | The four-switch exit works, but required mutant AI/damage are missing. Search intentionally stopped at the known mechanic gap. |
| 20 | maze | ported | 19 | 0 / 0 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. Original inside-camera layout retained; source point light remains data only. |
| 21 | love | not-ported | — | — | Mutant AI/damage and original bomb timing are incomplete. Search intentionally stopped at the known mechanic gap. |
| 22 | towers | not-ported | — | — | No route found within bounded time/state/frontier limits; search stopped. Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible. |
| 23 | edge | ported | 12 | 2 / 0 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. |
| 24 | random | semi-ported | 10 | 0 / 0 | Conservative review flag: ten actions cross the large stone-field level without moving a stone. The surprisingly short bypass needs human review; source lights are data only. |
| 25 | plate | not-ported | — | — | Slippery-stone grabbing and original bomb timing are incomplete. Search intentionally stopped at the known mechanic gap. |
| 26 | nice | ported | 8 | 2 / 0 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. |
| 27 | entropy | not-ported | — | — | Slippery-stone grabbing rules are missing. Search intentionally stopped at the known mechanic gap. |
| 28 | slick | not-ported | — | — | Slippery-stone grabbing rules are missing. Search intentionally stopped at the known mechanic gap. |
| 29 | bridge | not-ported | — | — | Electrical exit activation is missing; the exit stays closed. Search intentionally stopped at the known mechanic gap. |
| 30 | flower | not-ported | — | — | Slippery-stone grabbing rules are missing. Search intentionally stopped at the known mechanic gap. |
| 31 | stones | ported | 8 | 1 / 0 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. |
| 32 | walls | not-ported | — | — | No route found within bounded time/state/frontier limits; search stopped. Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible. |
| 33 | grid | ported | 23 | 2 / 0 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. |
| 34 | rings | semi-ported | 4 | 1 / 0 | Conservative review flag: four actions, including one push, bypass most of the stacked rings. Replay succeeds, but this unusually short route needs human review. |
| 35 | core | ported | 12 | 1 / 0 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. Fractional source range bounds retain the previous capture’s legacy integer truncation. |
| 36 | bronze | not-ported | — | — | Electrical exit activation is missing; the exit stays closed. Search intentionally stopped at the known mechanic gap. |
| 37 | pool | not-ported | — | — | Slippery-stone grabbing rules are missing. Search intentionally stopped at the known mechanic gap. |
| 38 | hidden | not-ported | — | — | No route found within bounded time/state/frontier limits; search stopped. Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible. |
| 39 | church | not-ported | — | — | Electrical exit activation is missing; the exit stays closed. Search intentionally stopped at the known mechanic gap. |
| 40 | strange | not-ported | — | — | Electrical exit activation is missing; the exit stays closed. Search intentionally stopped at the known mechanic gap. |
| 41 | mesh | not-ported | — | — | Slippery-stone grabbing rules are missing. Search intentionally stopped at the known mechanic gap. |
| 42 | columns | ported | 9 | 1 / 0 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. |
| 43 | machine | not-ported | — | — | Electrical exit activation is missing; the exit stays closed. Search intentionally stopped at the known mechanic gap. |
| 44 | neutron | not-ported | — | — | No route found within bounded time/state/frontier limits; search stopped. Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible. |
| 45 | captured | not-ported | — | — | Worker aborted (SIGABRT) under the 900 MB heap limit before returning a route; no route certified. Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible. |
| 46 | circuit | not-ported | — | — | Electrical exit activation is missing; the exit stays closed. Search intentionally stopped at the known mechanic gap. |
| 47 | regal | not-ported | — | — | Electrical exit activation is missing; the exit stays closed. Search intentionally stopped at the known mechanic gap. |
| 48 | conductor | not-ported | — | — | Electrical exit activation is missing; the exit stays closed. Search intentionally stopped at the known mechanic gap. |
| 49 | evil | not-ported | — | — | Electrical exit activation is missing; the exit stays closed. Search intentionally stopped at the known mechanic gap. |
| 50 | mutants | not-ported | — | — | Mutant combat, the all-deactivated exit callback and the outro transition are missing. Search intentionally stopped at the known mechanic gap. |

Recheck every saved route with `node golden_path_test.js`. To search an individually reviewed level again, run `node --max-old-space-size=900 kiki/js/tools/golden_solver.js LEVEL result.json`; it writes a candidate result, never changes published routes or port status. Existing saved solutions are replayed first. Only run searches after checking for missing mechanics; a simulated win cannot establish fidelity by itself.
