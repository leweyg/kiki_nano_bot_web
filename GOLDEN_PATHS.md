# Golden path audit

Levels 1–13 audited. Saved paths are replay-verified in the shared game engine, not claims of optimality or complete source-engine equivalence. `ported` means a valid route without a known required mechanic gap; `semi-ported` means a route exists but bypasses the intended puzzle or uses approximate mechanics; `not-ported` means missing mechanics or an unsuccessful bounded search. Original 3D layouts remain available in all cases.

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
| 12 | cube | not-ported | — | — | No route found within bounded time/state/frontier limits; search stopped. Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible. |
| 13 | switch | ported | 14 | 0 / 5 | Golden path replayed from the initial state through the active exit; no known required mechanic gap. |

Recheck every saved route with `node golden_path_test.js`. To search an individually reviewed level again, run `node --max-old-space-size=900 kiki/js/tools/golden_solver.js LEVEL result.json`; it writes a candidate result, never changes published routes or port status. Existing saved solutions are replayed first. Only run searches after checking for missing mechanics; a simulated win cannot establish fidelity by itself.
