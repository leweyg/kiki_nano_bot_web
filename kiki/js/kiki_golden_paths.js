(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) module.exports = factory();
  else root.KikiGoldenPaths = factory();
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return {
  "start": {
    "status": "solved",
    "port_status": "ported",
    "actions": [
      "turn left",
      "jump far forward",
      "jump forward",
      "jump forward",
      "jump forward",
      "jump far forward",
      "move forward",
      "jump forward"
    ],
    "method": "breadth-first search",
    "explored": 1057,
    "notes": [
      "Golden path replayed from the initial state through the active exit."
    ]
  },
  "steps": {
    "status": "solved",
    "port_status": "ported",
    "actions": [
      "turn right",
      "move backward",
      "move backward",
      "jump forward",
      "jump far forward"
    ],
    "method": "breadth-first search",
    "explored": 332,
    "notes": [
      "Golden path replayed from the initial state through the active exit."
    ]
  },
  "move": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 154,
    "attempts": [
      {
        "method": "breadth-first",
        "elapsedMs": 154,
        "reason": "found",
        "explored": 2166,
        "discovered": 3164,
        "actionChecks": 21650,
        "validTransitions": 17325,
        "queued": 998,
        "maxStates": 40000,
        "depth": 11
      }
    ],
    "actions": [
      "jump far forward",
      "jump far forward",
      "jump forward",
      "jump forward",
      "turn left",
      "turn left",
      "push backward",
      "move backward",
      "shoot",
      "move backward",
      "jump forward"
    ],
    "metrics": {
      "moves": 11,
      "pushes": 1,
      "shots": 1,
      "activeSwitches": 1,
      "objects": 10,
      "initiallyWon": false
    },
    "port_status": "ported",
    "notes": [
      "Golden path replayed from the initial state through the active exit; no known required mechanic gap."
    ]
  },
  "electro": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 26165,
    "attempts": [
      {
        "method": "breadth-first",
        "reason": "running",
        "elapsedMs": 12020,
        "explored": 10240,
        "discovered": 17794,
        "actionChecks": 81920,
        "validTransitions": 61262,
        "queued": 7554,
        "maxStates": 40000,
        "depth": 10,
        "stopped": "time/frontier budget"
      },
      {
        "method": "weighted-best-first",
        "weight": 4,
        "reason": "found",
        "explored": 11533,
        "discovered": 21376,
        "actionChecks": 92256,
        "elapsedMs": 14143
      }
    ],
    "actions": [
      "move backward",
      "move backward",
      "move backward",
      "jump forward",
      "turn right",
      "jump forward",
      "jump forward",
      "push backward",
      "move backward",
      "move backward",
      "turn right",
      "jump forward",
      "jump forward"
    ],
    "metrics": {
      "moves": 13,
      "pushes": 1,
      "shots": 0,
      "activeSwitches": 0,
      "objects": 60,
      "initiallyWon": false
    },
    "port_status": "semi-ported",
    "notes": [
      "Replay opens the exit with the simplified connected-motor check without powering the wire network; electrical fidelity is incomplete."
    ]
  },
  "elevate": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "Bomb-lift and elevated-circuit behavior remain approximate; stopped before claiming a faithful route.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "throw": {
    "status": "solved",
    "reason": "replay-verified",
    "actions": [
      "turn left",
      "turn left",
      "jump forward",
      "jump forward",
      "jump forward",
      "push backward",
      "move backward",
      "move backward",
      "turn right",
      "jump forward",
      "push backward",
      "move backward",
      "turn left",
      "move backward",
      "turn left",
      "move forward",
      "push backward",
      "jump forward",
      "move forward",
      "turn left",
      "move forward",
      "turn left",
      "push forward",
      "jump forward",
      "turn right",
      "jump forward",
      "push backward",
      "move backward",
      "turn left",
      "move forward",
      "turn left",
      "move forward",
      "push backward",
      "move backward",
      "turn left",
      "turn left",
      "jump forward",
      "move forward",
      "move forward",
      "jump forward",
      "jump forward",
      "move forward",
      "jump forward"
    ],
    "metrics": {
      "moves": 43,
      "pushes": 6,
      "shots": 0
    },
    "attempts": [
      {
        "method": "existing-scripted-regression-route",
        "reason": "replayed"
      }
    ],
    "port_status": "semi-ported",
    "notes": [
      "Hint uses the existing 43-action stone-stacking route. A four-action far-jump shortcut also wins without pushing either stone, bypassing the tutorial."
    ],
    "shortcutActions": [
      "turn right",
      "jump forward",
      "turn left",
      "jump far forward"
    ]
  },
  "gold": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 224,
    "attempts": [
      {
        "method": "breadth-first",
        "elapsedMs": 224,
        "reason": "found",
        "explored": 2873,
        "discovered": 5193,
        "actionChecks": 28720,
        "validTransitions": 20939,
        "queued": 2320,
        "maxStates": 40000,
        "depth": 10
      }
    ],
    "actions": [
      "jump forward",
      "move forward",
      "push forward",
      "move forward",
      "push forward",
      "push forward",
      "move forward",
      "push forward",
      "move forward",
      "push forward"
    ],
    "metrics": {
      "moves": 10,
      "pushes": 5,
      "shots": 0,
      "activeSwitches": 0,
      "objects": 16,
      "initiallyWon": false
    },
    "port_status": "ported",
    "notes": [
      "Golden path replayed from the initial state through the active exit; no known required mechanic gap."
    ]
  },
  "jump": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 89,
    "attempts": [
      {
        "method": "breadth-first",
        "elapsedMs": 89,
        "reason": "found",
        "explored": 1634,
        "discovered": 1815,
        "actionChecks": 16330,
        "validTransitions": 13019,
        "queued": 181,
        "maxStates": 40000,
        "depth": 11
      }
    ],
    "actions": [
      "turn left",
      "jump far forward",
      "jump far forward",
      "jump far forward",
      "jump far forward",
      "jump far forward",
      "jump forward",
      "jump forward",
      "jump forward",
      "jump far forward",
      "jump far forward"
    ],
    "metrics": {
      "moves": 11,
      "pushes": 0,
      "shots": 0,
      "activeSwitches": 0,
      "objects": 7,
      "initiallyWon": false
    },
    "port_status": "ported",
    "notes": [
      "Golden path replayed from the initial state through the active exit; no known required mechanic gap."
    ]
  },
  "escape": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 10808,
    "attempts": [
      {
        "method": "breadth-first",
        "elapsedMs": 6328,
        "reason": "limit",
        "explored": 40000,
        "discovered": 81272,
        "actionChecks": 400000,
        "validTransitions": 297335,
        "queued": 41272,
        "maxStates": 40000,
        "depth": 12
      },
      {
        "method": "weighted-best-first",
        "weight": 4,
        "reason": "found",
        "explored": 30631,
        "discovered": 25194,
        "actionChecks": 306300,
        "elapsedMs": 4480
      }
    ],
    "actions": [
      "move forward",
      "turn right",
      "move backward",
      "move backward",
      "push backward",
      "jump forward",
      "move backward",
      "jump far forward",
      "turn right",
      "move forward",
      "shoot",
      "move backward",
      "move backward",
      "move backward",
      "move backward",
      "move backward",
      "move backward"
    ],
    "metrics": {
      "moves": 17,
      "pushes": 1,
      "shots": 1,
      "activeSwitches": 1,
      "objects": 38,
      "initiallyWon": false
    },
    "port_status": "ported",
    "notes": [
      "Golden path replayed from the initial state through the active exit; no known required mechanic gap."
    ]
  },
  "gears": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "Circuit connectivity, exit activation and mechanical timing remain approximate.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "gamma": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "Mutant AI/damage and the source color-cycling callback are missing.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "cube": {
    "status": "unsolvable",
    "reason": "process-time-limit",
    "port_status": "not-ported",
    "notes": [
      "No route found within bounded time/state/frontier limits; search stopped.",
      "Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible."
    ]
  },
  "switch": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 1,
    "attempts": [
      {
        "method": "existing-route",
        "reason": "replayed"
      }
    ],
    "actions": [
      "move forward",
      "move forward",
      "jump forward",
      "move forward",
      "shoot",
      "jump far forward",
      "shoot",
      "turn left",
      "shoot",
      "turn left",
      "shoot",
      "turn left",
      "shoot",
      "jump forward"
    ],
    "metrics": {
      "moves": 14,
      "pushes": 0,
      "shots": 5,
      "activeSwitches": 4,
      "objects": 23,
      "initiallyWon": false
    },
    "port_status": "ported",
    "notes": [
      "Golden path replayed from the initial state through the active exit; no known required mechanic gap."
    ]
  },
  "borg": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "Mutant AI, damage and combat are missing.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "mini": {
    "status": "unsolvable",
    "reason": "bounded-search-limit",
    "elapsedMs": 13810,
    "attempts": [
      {
        "method": "breadth-first",
        "elapsedMs": 2316,
        "reason": "limit",
        "explored": 40000,
        "discovered": 54666,
        "actionChecks": 400000,
        "validTransitions": 291522,
        "queued": 14666,
        "maxStates": 40000,
        "depth": 21
      },
      {
        "method": "weighted-best-first",
        "weight": 4,
        "reason": "budget",
        "explored": 100000,
        "discovered": 88222,
        "actionChecks": 1000000,
        "elapsedMs": 5639
      },
      {
        "method": "weighted-best-first",
        "weight": 1.5,
        "reason": "budget",
        "explored": 100000,
        "discovered": 134000,
        "actionChecks": 1000000,
        "elapsedMs": 5855
      }
    ],
    "port_status": "not-ported",
    "notes": [
      "No route found within bounded time/state/frontier limits; search stopped.",
      "Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible."
    ]
  },
  "blocks": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "Slippery-stone grabbing rules are missing; slit visuals are also absent.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "bombs": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 56,
    "attempts": [
      {
        "method": "breadth-first",
        "elapsedMs": 55,
        "reason": "found",
        "explored": 1393,
        "discovered": 2763,
        "actionChecks": 13920,
        "validTransitions": 11155,
        "queued": 1370,
        "maxStates": 40000,
        "depth": 7
      }
    ],
    "actions": [
      "move backward",
      "turn left",
      "turn left",
      "jump far forward",
      "jump forward",
      "jump forward",
      "jump far forward"
    ],
    "metrics": {
      "moves": 7,
      "pushes": 0,
      "shots": 0,
      "activeSwitches": 0,
      "objects": 3,
      "initiallyWon": false
    },
    "port_status": "semi-ported",
    "notes": [
      "Seven actions reach the exit without pushing or shooting a bomb. This bypasses the bomb lesson; blast propagation and timing remain simplified."
    ]
  },
  "sandbox": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "The nine-cell occupancy callback is missing; the exit stays closed.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "energy": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "The four-switch exit works, but required mutant AI/damage are missing.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "maze": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 75,
    "attempts": [
      {
        "method": "breadth-first",
        "elapsedMs": 74,
        "reason": "found",
        "explored": 454,
        "discovered": 496,
        "actionChecks": 4530,
        "validTransitions": 2658,
        "queued": 42,
        "maxStates": 40000,
        "depth": 19
      }
    ],
    "actions": [
      "move forward",
      "move forward",
      "move forward",
      "turn left",
      "jump forward",
      "move forward",
      "move forward",
      "move forward",
      "turn left",
      "move forward",
      "move forward",
      "jump forward",
      "turn left",
      "move forward",
      "move forward",
      "move forward",
      "jump forward",
      "turn left",
      "move forward"
    ],
    "metrics": {
      "moves": 19,
      "pushes": 0,
      "shots": 0,
      "activeSwitches": 0,
      "objects": 30,
      "initiallyWon": false
    },
    "port_status": "ported",
    "notes": [
      "Golden path replayed from the initial state through the active exit; no known required mechanic gap.",
      "Original inside-camera layout retained; source point light remains data only."
    ]
  },
  "love": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "Mutant AI/damage and original bomb timing are incomplete.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "towers": {
    "status": "unsolvable",
    "reason": "bounded-search-limit",
    "elapsedMs": 9097,
    "attempts": [
      {
        "method": "breadth-first",
        "elapsedMs": 1468,
        "reason": "limit",
        "explored": 40000,
        "discovered": 63787,
        "actionChecks": 400000,
        "validTransitions": 316389,
        "queued": 23787,
        "maxStates": 40000,
        "depth": 12
      },
      {
        "method": "weighted-best-first",
        "weight": 4,
        "reason": "budget",
        "explored": 100000,
        "discovered": 143095,
        "actionChecks": 1000000,
        "elapsedMs": 3708
      },
      {
        "method": "weighted-best-first",
        "weight": 1.5,
        "reason": "budget",
        "explored": 100000,
        "discovered": 165430,
        "actionChecks": 1000000,
        "elapsedMs": 3921
      }
    ],
    "port_status": "not-ported",
    "notes": [
      "No route found within bounded time/state/frontier limits; search stopped.",
      "Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible."
    ]
  },
  "edge": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 2,
    "attempts": [
      {
        "method": "existing-route",
        "reason": "replayed"
      }
    ],
    "actions": [
      "move forward",
      "turn left",
      "move backward",
      "move backward",
      "jump forward",
      "push forward",
      "turn right",
      "push forward",
      "jump forward",
      "turn left",
      "move backward",
      "jump far forward"
    ],
    "metrics": {
      "moves": 12,
      "pushes": 2,
      "shots": 0,
      "activeSwitches": 0,
      "objects": 28,
      "initiallyWon": false
    },
    "port_status": "ported",
    "notes": [
      "Golden path replayed from the initial state through the active exit; no known required mechanic gap."
    ]
  },
  "random": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 6127,
    "attempts": [
      {
        "method": "breadth-first",
        "elapsedMs": 6126,
        "reason": "found",
        "explored": 7606,
        "discovered": 11532,
        "actionChecks": 76050,
        "validTransitions": 60444,
        "queued": 3926,
        "maxStates": 40000,
        "depth": 10
      }
    ],
    "actions": [
      "jump forward",
      "move forward",
      "turn right",
      "move backward",
      "jump far forward",
      "move backward",
      "jump forward",
      "turn right",
      "move backward",
      "jump forward"
    ],
    "metrics": {
      "moves": 10,
      "pushes": 0,
      "shots": 0,
      "activeSwitches": 0,
      "objects": 202,
      "initiallyWon": false
    },
    "port_status": "semi-ported",
    "notes": [
      "Conservative review flag: ten actions cross the large stone-field level without moving a stone. The surprisingly short bypass needs human review; source lights are data only."
    ]
  },
  "plate": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "Slippery-stone grabbing and original bomb timing are incomplete.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "nice": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 6324,
    "attempts": [
      {
        "method": "breadth-first",
        "elapsedMs": 6323,
        "reason": "found",
        "explored": 6698,
        "discovered": 12864,
        "actionChecks": 66970,
        "validTransitions": 49780,
        "queued": 6166,
        "maxStates": 40000,
        "depth": 8
      }
    ],
    "actions": [
      "push forward",
      "turn left",
      "move backward",
      "jump forward",
      "move forward",
      "push backward",
      "turn left",
      "jump far forward"
    ],
    "metrics": {
      "moves": 8,
      "pushes": 2,
      "shots": 0,
      "activeSwitches": 0,
      "objects": 208,
      "initiallyWon": false
    },
    "port_status": "ported",
    "notes": [
      "Golden path replayed from the initial state through the active exit; no known required mechanic gap."
    ]
  },
  "entropy": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "Slippery-stone grabbing rules are missing.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "slick": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "Slippery-stone grabbing rules are missing.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "bridge": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "Electrical exit activation is missing; the exit stays closed.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "flower": {
    "status": "unsolvable",
    "port_status": "not-ported",
    "reason": "missing-mechanics",
    "notes": [
      "Slippery-stone grabbing rules are missing.",
      "Search intentionally stopped at the known mechanic gap."
    ]
  },
  "stones": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 3466,
    "attempts": [
      {
        "method": "breadth-first",
        "elapsedMs": 3465,
        "reason": "found",
        "explored": 8266,
        "discovered": 18997,
        "actionChecks": 82650,
        "validTransitions": 61651,
        "queued": 10731,
        "maxStates": 40000,
        "depth": 8
      }
    ],
    "actions": [
      "move backward",
      "move backward",
      "move backward",
      "move backward",
      "push forward",
      "move forward",
      "jump forward",
      "jump far forward"
    ],
    "metrics": {
      "moves": 8,
      "pushes": 1,
      "shots": 0,
      "activeSwitches": 0,
      "objects": 88,
      "initiallyWon": false
    },
    "port_status": "ported",
    "notes": [
      "Golden path replayed from the initial state through the active exit; no known required mechanic gap."
    ]
  },
  "walls": {
    "status": "unsolvable",
    "reason": "bounded-search-limit",
    "elapsedMs": 48181,
    "attempts": [
      {
        "method": "breadth-first",
        "reason": "running",
        "elapsedMs": 12018,
        "explored": 31360,
        "discovered": 48716,
        "actionChecks": 313600,
        "validTransitions": 195340,
        "queued": 17356,
        "maxStates": 40000,
        "depth": 16,
        "stopped": "time/frontier budget"
      },
      {
        "method": "weighted-best-first",
        "weight": 4,
        "reason": "budget",
        "explored": 40045,
        "discovered": 65850,
        "actionChecks": 400450,
        "elapsedMs": 18114
      },
      {
        "method": "weighted-best-first",
        "weight": 1.5,
        "reason": "budget",
        "explored": 42483,
        "discovered": 73759,
        "actionChecks": 424830,
        "elapsedMs": 18049
      }
    ],
    "port_status": "not-ported",
    "notes": [
      "No route found within bounded time/state/frontier limits; search stopped.",
      "Unsolvable in this audit means unresolved within the budget, not proof that the original puzzle is impossible."
    ]
  },
  "grid": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 23001,
    "attempts": [
      {
        "method": "breadth-first",
        "reason": "running",
        "elapsedMs": 12002,
        "explored": 35008,
        "discovered": 52100,
        "actionChecks": 350080,
        "validTransitions": 254337,
        "queued": 17092,
        "maxStates": 40000,
        "depth": 17,
        "stopped": "time/frontier budget"
      },
      {
        "method": "weighted-best-first",
        "weight": 4,
        "reason": "found",
        "explored": 33257,
        "discovered": 39433,
        "actionChecks": 332560,
        "elapsedMs": 10997
      }
    ],
    "actions": [
      "jump far forward",
      "turn left",
      "move forward",
      "turn left",
      "move forward",
      "push forward",
      "jump forward",
      "move backward",
      "turn right",
      "jump forward",
      "move backward",
      "turn right",
      "move backward",
      "push backward",
      "move backward",
      "jump forward",
      "move forward",
      "turn left",
      "turn left",
      "move backward",
      "jump forward",
      "move forward",
      "move forward"
    ],
    "metrics": {
      "moves": 23,
      "pushes": 2,
      "shots": 0,
      "activeSwitches": 0,
      "objects": 74,
      "initiallyWon": false
    },
    "port_status": "ported",
    "notes": [
      "Golden path replayed from the initial state through the active exit; no known required mechanic gap."
    ]
  },
  "rings": {
    "status": "solved",
    "reason": "replay-verified",
    "elapsedMs": 2,
    "attempts": [
      {
        "method": "existing-route",
        "reason": "replayed"
      }
    ],
    "actions": [
      "push backward",
      "move forward",
      "move forward",
      "jump far forward"
    ],
    "metrics": {
      "moves": 4,
      "pushes": 1,
      "shots": 0,
      "activeSwitches": 0,
      "objects": 112,
      "initiallyWon": false
    },
    "port_status": "semi-ported",
    "notes": [
      "Conservative review flag: four actions, including one push, bypass most of the stacked rings. Replay succeeds, but this unusually short route needs human review."
    ]
  }
};
}));
