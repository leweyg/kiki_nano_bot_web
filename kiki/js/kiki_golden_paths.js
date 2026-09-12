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
  }
};
}));
