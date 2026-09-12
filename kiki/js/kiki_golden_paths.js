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
  }
};
}));
