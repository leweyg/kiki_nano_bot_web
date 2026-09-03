(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) module.exports = factory();
  else root.KikiStaticData = factory();
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var themes = ["mint", "copper", "sky", "violet", "lime", "coral"];
  var levelDefinitions = [
    { index: 0, id: "start", title: "start", source: "kiki/py/levels/start.py", scheme: "default_scheme", theme: "mint", screenshot: "kiki/levels/images/level1.png" },
    { index: 1, id: "steps", title: "steps", source: "kiki/py/levels/steps.py", scheme: "blue_scheme", theme: "sky", screenshot: "kiki/levels/images/level2.png" },
    { index: 2, id: "move", title: "move", source: "kiki/py/levels/move.py", scheme: "red_scheme", theme: "coral", screenshot: "kiki/levels/images/level3.png" },
    { index: 3, id: "electro", title: "electro", source: "kiki/py/levels/electro.py", scheme: "metal_scheme", theme: "lime", screenshot: "kiki/levels/images/level4.png" },
    { index: 4, id: "elevate", title: "elevate", source: "kiki/py/levels/elevate.py", scheme: "bronze_scheme", theme: "copper", screenshot: "kiki/levels/images/level5.png" },
    { index: 5, id: "throw", title: "throw", source: "kiki/py/levels/throw.py", scheme: "tron_scheme", theme: "violet", screenshot: "kiki/levels/images/level6.png" },
    { index: 6, id: "gold", title: "gold", source: "kiki/py/levels/gold.py", scheme: "yellow_scheme" },
    { index: 7, id: "jump", title: "jump", source: "kiki/py/levels/jump.py", scheme: "red_scheme" },
    { index: 8, id: "escape", title: "escape", source: "kiki/py/levels/escape.py", scheme: "metal_scheme" },
    { index: 9, id: "gears", title: "gears", source: "kiki/py/levels/gears.py", scheme: "blue_scheme" },
    { index: 10, id: "gamma", title: "gamma", source: "kiki/py/levels/gamma.py", scheme: "tron_scheme" },
    { index: 11, id: "cube", title: "cube", source: "kiki/py/levels/cube.py", scheme: "default_scheme" },
    { index: 12, id: "switch", title: "switch", source: "kiki/py/levels/switch.py", scheme: "yellow_scheme" },
    { index: 13, id: "borg", title: "borg", source: "kiki/py/levels/borg.py", scheme: "default_scheme" },
    { index: 14, id: "mini", title: "mini", source: "kiki/py/levels/mini.py", scheme: "tron_scheme" },
    { index: 15, id: "blocks", title: "blocks", source: "kiki/py/levels/blocks.py", scheme: "default_scheme" },
    { index: 16, id: "bombs", title: "bombs", source: "kiki/py/levels/bombs.py", scheme: "red_scheme" },
    { index: 17, id: "sandbox", title: "sandbox", source: "kiki/py/levels/sandbox.py", scheme: "bronze_scheme" },
    { index: 18, id: "energy", title: "energy", source: "kiki/py/levels/energy.py", scheme: "default_scheme" },
    { index: 19, id: "maze", title: "maze", source: "kiki/py/levels/maze.py", scheme: "default_scheme" },
    { index: 20, id: "love", title: "love", source: "kiki/py/levels/love.py", scheme: "red_scheme" },
    { index: 21, id: "towers", title: "towers", source: "kiki/py/levels/towers.py", scheme: "metal_scheme" },
    { index: 22, id: "edge", title: "edge", source: "kiki/py/levels/edge.py", scheme: "candy_scheme" },
    { index: 23, id: "random", title: "random", source: "kiki/py/levels/random.py", scheme: "default_scheme" },
    { index: 24, id: "plate", title: "plate", source: "kiki/py/levels/plate.py", scheme: "blue_scheme" },
    { index: 25, id: "nice", title: "nice", source: "kiki/py/levels/nice.py", scheme: "tron_scheme" },
    { index: 26, id: "entropy", title: "entropy", source: "kiki/py/levels/entropy.py", scheme: "green_scheme" },
    { index: 27, id: "slick", title: "slick", source: "kiki/py/levels/slick.py", scheme: "tron_scheme" },
    { index: 28, id: "bridge", title: "bridge", source: "kiki/py/levels/bridge.py", scheme: "red_scheme" },
    { index: 29, id: "flower", title: "flower", source: "kiki/py/levels/flower.py", scheme: "metal_scheme" },
    { index: 30, id: "stones", title: "stones", source: "kiki/py/levels/stones.py", scheme: "blue_scheme" },
    { index: 31, id: "walls", title: "walls", source: "kiki/py/levels/walls.py", scheme: "default_scheme" },
    { index: 32, id: "grid", title: "grid", source: "kiki/py/levels/grid.py", scheme: "candy_scheme" },
    { index: 33, id: "rings", title: "rings", source: "kiki/py/levels/rings.py", scheme: "default_scheme" },
    { index: 34, id: "core", title: "core", source: "kiki/py/levels/core.py", scheme: "yellow_scheme" },
    { index: 35, id: "bronze", title: "bronze", source: "kiki/py/levels/bronze.py", scheme: "bronze_scheme" },
    { index: 36, id: "pool", title: "pool", source: "kiki/py/levels/pool.py", scheme: "green_scheme" },
    { index: 37, id: "hidden", title: "hidden", source: "kiki/py/levels/hidden.py", scheme: "metal_scheme" },
    { index: 38, id: "church", title: "church", source: "kiki/py/levels/church.py", scheme: "yellow_scheme" },
    { index: 39, id: "strange", title: "strange", source: "kiki/py/levels/strange.py", scheme: "default_scheme" },
    { index: 40, id: "mesh", title: "mesh", source: "kiki/py/levels/mesh.py", scheme: "default_scheme" },
    { index: 41, id: "columns", title: "columns", source: "kiki/py/levels/columns.py", scheme: "green_scheme" },
    { index: 42, id: "machine", title: "machine", source: "kiki/py/levels/machine.py", scheme: "tron_scheme" },
    { index: 43, id: "neutron", title: "neutron", source: "kiki/py/levels/neutron.py", scheme: "neutron_scheme" },
    { index: 44, id: "captured", title: "captured", source: "kiki/py/levels/captured.py", scheme: "default_scheme" },
    { index: 45, id: "circuit", title: "circuit", source: "kiki/py/levels/circuit.py", scheme: "tron_scheme" },
    { index: 46, id: "regal", title: "regal", source: "kiki/py/levels/regal.py", scheme: "bronze_scheme" },
    { index: 47, id: "conductor", title: "conductor", source: "kiki/py/levels/conductor.py", scheme: "default_scheme" },
    { index: 48, id: "evil", title: "evil", source: "kiki/py/levels/evil.py", scheme: "red_scheme" },
    { index: 49, id: "mutants", title: "mutants", source: "kiki/py/levels/mutants.py", scheme: "blue_scheme" }
  ];

  var commonIntroHelp = [
    "$scale(1.5)mission:\nget to the exit!\n\nto get to the exit,\njump on the stones",
    "to jump,\npress \"$key(jump)\"\nwhile moving",
    "to move, press \"$key(move forward)\" or \"$key(move backward)\",\n\nto turn, press \"$key(turn left)\" or \"$key(turn right)\""
  ];

  var levelTemplates = {
    start: {
      size: { x: 7, y: 7, z: 11 },
      intro: "start",
      help: commonIntroHelp,
      player: { coordinates: { x: 3, y: 0, z: 3 }, orientation: "roty90", nostatus: false },
      exits: [
        { clone: { name: "exit", active: true }, space: "position", at: [{ x: 0, y: 0, z: 3 }] }
      ],
      objects: [
        { clone: { type: "wall" }, space: "position", at: [
          { x: 0, y: 0, z: -2 },
          { x: 0, y: 0, z: -4 },
          { x: 0, y: 0, z: 1 }
        ] }
      ]
    },
    steps: {
      size: { x: 7, y: 7, z: 13 },
      intro: "steps",
      help: commonIntroHelp,
      player: { coordinates: { x: 3, y: 0, z: 6 }, nostatus: false },
      exits: [
        { clone: { name: "exit", active: true }, space: "position", at: [{ x: 0, y: 1, z: 3 }] }
      ],
      objects: [
        { clone: { type: "wall" }, space: "position", at: [
          { x: 0, y: 0, z: 3 },
          { x: 0, y: -1, z: 1 },
          { x: 0, y: -2, z: -1 },
          { x: 0, y: -3, z: -3 }
        ] }
      ]
    },
    move: {
      size: { x: 7, y: 7, z: 7 },
      intro: "move",
      help: [
        "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit,\nactivate the switch\n\nto activate the switch,\nshoot it\n\nto be able to shoot the switch,\nmove the stone",
        "to move a stone, press \"$key(push)\" while moving\n\nto shoot, press \"$key(shoot)\""
      ],
      player: { coordinates: { x: 3, y: 5, z: 5 }, orientation: "roty180", nostatus: false },
      exits: [
        { clone: { name: "exit", active: false }, space: "position", at: [{ x: 0, y: 0, z: 0 }] }
      ],
      objects: [
        { clone: { type: "stone" }, space: "coordinates", at: [
          { x: 2, y: 4, z: 0 }, { x: 4, y: 4, z: 0 },
          { x: 4, y: 2, z: 0 }, { x: 2, y: 2, z: 0 },
          { x: 2, y: 3, z: 0 }, { x: 4, y: 3, z: 0 },
          { x: 3, y: 2, z: 0 }, { x: 3, y: 4, z: 0 },
          { x: 3, y: 3, z: 1 }
        ] },
        { clone: { type: "switch", name: "exit switch", active: false, toggles: ["exit"] }, space: "coordinates", at: [
          { x: 3, y: 3, z: 0 }
        ] }
      ]
    },
    electro: {
      size: { x: 9, y: 7, z: 9 },
      intro: "electro",
      powerCondition: "connectedMotor",
      solverActions: ["move forward", "move backward", "turn left", "turn right", "jump forward", "jump", "push forward", "push backward"],
      help: "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit\nfeed it with electricity:\n\nconnect the generator\nwith the motor",
      player: { coordinates: { x: 2, y: 0, z: 4 }, orientation: "rotz180", nostatus: false },
      exits: [
        { clone: { name: "exit", active: false }, space: "position", at: [{ x: 0, y: 0, z: 0 }] }
      ],
      objects: [
        { clone: { type: "wireStone" }, space: "coordinates", at: [
          { x: 2, y: 6, z: 4 }, { x: 2, y: 5, z: 4 }, { x: 2, y: 4, z: 4 }, { x: 2, y: 3, z: 4 },
          { x: 6, y: 6, z: 4 }, { x: 6, y: 5, z: 4 }, { x: 6, y: 4, z: 4 }, { x: 6, y: 3, z: 4 },
          { x: 5, y: 3, z: 4 }, { x: 3, y: 3, z: 4 }
        ] },
        { clone: { type: "gear", face: "PY" }, space: "coordinates", at: [{ x: 3, y: 0, z: 3 }] },
        { clone: { type: "generator", face: "PY", active: true }, space: "coordinates", at: [{ x: 5, y: 0, z: 5 }] },
        { clone: { type: "motorCylinder", face: "PY" }, space: "coordinates", at: [{ x: 4, y: 1, z: 4 }] },
        { clone: { type: "motorGear", face: "PY" }, space: "coordinates", at: [{ x: 4, y: 0, z: 4 }] },
        { clone: { type: "wire", face: "PY", connections: 10 }, space: "coordinates", at: [
          { x: 3, y: 0, z: 2 }, { x: 4, y: 0, z: 2 }, { x: 5, y: 0, z: 2 }, { x: 6, y: 0, z: 2 },
          { x: 3, y: 0, z: 6 }, { x: 4, y: 0, z: 6 }, { x: 5, y: 0, z: 6 }, { x: 6, y: 0, z: 6 },
          { x: 0, y: 0, z: 4 }, { x: 1, y: 0, z: 4 }, { x: 2, y: 0, z: 4 },
          { x: 7, y: 0, z: 4 }, { x: 8, y: 0, z: 4 }
        ] },
        { clone: { type: "wire", face: "PY", connections: 5 }, space: "coordinates", at: [
          { x: 2, y: 0, z: 3 }, { x: 2, y: 0, z: 4 }, { x: 2, y: 0, z: 5 }, { x: 2, y: 0, z: 6 },
          { x: 6, y: 0, z: 3 }, { x: 6, y: 0, z: 4 }, { x: 6, y: 0, z: 5 }, { x: 6, y: 0, z: 6 }
        ] },
        { clone: { type: "wire", face: "PX", connections: 5 }, space: "coordinates", at: [
          { x: 0, y: 0, z: 4 }, { x: 0, y: 1, z: 4 }, { x: 0, y: 2, z: 4 }, { x: 0, y: 3, z: 4 },
          { x: 0, y: 4, z: 4 }, { x: 0, y: 5, z: 4 }, { x: 0, y: 6, z: 4 }
        ] },
        { clone: { type: "wire", face: "NX", connections: 5 }, space: "coordinates", at: [
          { x: 8, y: 0, z: 4 }, { x: 8, y: 1, z: 4 }, { x: 8, y: 2, z: 4 }, { x: 8, y: 3, z: 4 },
          { x: 8, y: 4, z: 4 }, { x: 8, y: 5, z: 4 }, { x: 8, y: 6, z: 4 }
        ] },
        { clone: { type: "wire", face: "NY", connections: 10 }, space: "coordinates", at: [
          { x: 0, y: 6, z: 4 }, { x: 1, y: 6, z: 4 }, { x: 2, y: 6, z: 4 },
          { x: 7, y: 6, z: 4 }, { x: 8, y: 6, z: 4 }
        ] },
        { clone: { type: "wire", face: "PY", connections: 6 }, space: "coordinates", at: [{ x: 2, y: 0, z: 2 }] },
        { clone: { type: "wire", face: "PY", connections: 3 }, space: "coordinates", at: [{ x: 2, y: 0, z: 6 }] },
        { clone: { type: "wire", face: "PY", connections: 9 }, space: "coordinates", at: [{ x: 6, y: 0, z: 6 }] },
        { clone: { type: "wire", face: "PY", connections: 12 }, space: "coordinates", at: [{ x: 6, y: 0, z: 2 }] },
        { clone: { type: "wire", face: "PY", connections: 13 }, space: "coordinates", at: [{ x: 2, y: 0, z: 4 }] },
        { clone: { type: "wire", face: "PY", connections: 7 }, space: "coordinates", at: [{ x: 6, y: 0, z: 4 }] }
      ]
    },
    elevate: {
      size: { x: 9, y: 5, z: 7 },
      intro: "elevate",
      powerCondition: "elevatedCircuit",
      solverActions: ["move forward", "move backward", "turn left", "turn right", "shoot"],
      help: "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit,\nfeed it with electricity\n\nuse the bombs\nto elevate the gears\nand the generator\n\nthe bombs will detonate\nif you shoot them",
      player: { position: { x: 3, y: -2, z: 0 }, orientation: "roty90", nostatus: false },
      exits: [
        { clone: { name: "exit", active: false }, space: "position", at: [{ x: 2, y: -2, z: 0 }] }
      ],
      objects: [
        { clone: { type: "motorGear", face: "NY" }, space: "coordinates", at: [{ x: 1, y: 4, z: 3 }] },
        { clone: { type: "motorCylinder", face: "NY" }, space: "coordinates", at: [{ x: 1, y: 3, z: 3 }] },
        { clone: { type: "generator", face: "NY", active: true, circuitPart: true }, space: "coordinates", at: [{ x: 6, y: 1, z: 2 }] },
        { clone: { type: "gear", face: "NY", circuitPart: true }, space: "coordinates", at: [
          { x: 5, y: 1, z: 4 }, { x: 4, y: 1, z: 2 }, { x: 3, y: 1, z: 4 }, { x: 2, y: 1, z: 2 }
        ] },
        { clone: { type: "wire", face: "NY", connections: "vertical" }, space: "coordinates", at: [
          { x: 6, y: 4, z: 0 }, { x: 6, y: 4, z: 1 }, { x: 6, y: 4, z: 2 }, { x: 6, y: 4, z: 3 },
          { x: 6, y: 4, z: 4 }, { x: 6, y: 4, z: 5 }, { x: 6, y: 4, z: 6 }
        ] },
        { clone: { type: "wire", face: "PY", connections: "vertical" }, space: "coordinates", at: [
          { x: 6, y: 0, z: 0 }, { x: 6, y: 0, z: 1 }, { x: 6, y: 0, z: 2 }, { x: 6, y: 0, z: 3 },
          { x: 6, y: 0, z: 4 }, { x: 6, y: 0, z: 5 }, { x: 6, y: 0, z: 6 }
        ] },
        { clone: { type: "wire", face: "PZ", connections: "vertical" }, space: "coordinates", at: [
          { x: 6, y: 0, z: 0 }, { x: 6, y: 1, z: 0 }, { x: 6, y: 2, z: 0 }, { x: 6, y: 3, z: 0 }, { x: 6, y: 4, z: 0 }
        ] },
        { clone: { type: "wire", face: "NZ", connections: "vertical" }, space: "coordinates", at: [
          { x: 6, y: 0, z: 6 }, { x: 6, y: 1, z: 6 }, { x: 6, y: 2, z: 6 }, { x: 6, y: 3, z: 6 }, { x: 6, y: 4, z: 6 }
        ] },
        { clone: { type: "bomb" }, space: "coordinates", at: [
          { x: 6, y: 0, z: 2 }, { x: 5, y: 0, z: 4 }, { x: 4, y: 0, z: 2 },
          { x: 3, y: 0, z: 4 }, { x: 2, y: 0, z: 2 }
        ] }
      ]
    },
    throw: {
      size: { x: 5, y: 7, z: 7 },
      intro: "throw",
      help: "$scale(1.5)mission:\nget to the exit!\n\nuse the stones to reach it\n\npush a stone and it will fall down\nif nothing is below it\n\nbut remember:\nyou decide where down and below is!",
      player: { position: { x: 0, y: 1, z: 2 }, orientation: "throwStart", nostatus: false },
      exits: [
        { clone: { name: "exit", active: true }, space: "position", at: [{ x: 0, y: 0, z: 0 }] }
      ],
      objects: [
        { clone: { type: "wall" }, space: "position", at: [{ x: -2, y: 0, z: 2 }] },
        { clone: { type: "stone" }, space: "position", at: [
          { x: 0, y: 1, z: 3 },
          { x: 0, y: -1, z: 3 }
        ] }
      ]
    },
    gold: {
      size: { x: 3, y: 11, z: 3 },
      intro: "gold",
      help: "$scale(1.5)mission:\nget to the exit!\n\njump up the gold blocks",
      player: { position: { x: 0, y: -4, z: 0 }, nostatus: false },
      exits: [
        { clone: { name: "exit", active: true }, space: "position", at: [{ x: 0, y: 4, z: 0 }] }
      ],
      objects: [
        { clone: { type: "stone" }, space: "coordinates", at: [
          { x: 1, y: 3, z: 1 }, { x: 1, y: 3, z: 2 }, { x: 2, y: 3, z: 1 }, { x: 2, y: 3, z: 2 },
          { x: 1, y: 5, z: 1 }, { x: 1, y: 5, z: 2 }, { x: 2, y: 5, z: 1 }, { x: 2, y: 5, z: 2 },
          { x: 1, y: 7, z: 1 }, { x: 1, y: 7, z: 2 }, { x: 2, y: 7, z: 1 }, { x: 2, y: 7, z: 2 },
          { x: 1, y: 9, z: 1 }, { x: 1, y: 9, z: 2 }, { x: 2, y: 9, z: 1 }, { x: 2, y: 9, z: 2 }
        ] }
      ]
    },
    jump: {
      size: { x: 7, y: 7, z: 13 },
      intro: "jump",
      help: "$scale(1.5)mission:\nget to the exit!\n\njump through the opening",
      player: { position: { x: 0, y: 0, z: 5 }, nostatus: false },
      exits: [
        { clone: { name: "exit", active: true }, space: "position", at: [{ x: 0, y: 0, z: 4 }] }
      ],
      objects: [
        { clone: { type: "wall" }, space: "coordinates", at: [
          { x: 3, y: 3, z: 1 }, { x: 3, y: 3, z: 3 }, { x: 3, y: 3, z: 6 },
          { x: 3, y: 4, z: 10 }, { x: 4, y: 3, z: 10 }, { x: 2, y: 3, z: 10 }, { x: 3, y: 2, z: 10 }
        ] }
      ]
    },
    escape: {
      size: { x: 7, y: 9, z: 7 },
      intro: "escape",
      help: "$scale(1.5)mission:\nactivate the exit!\n\nshoot the switch and escape the frame",
      player: { position: { x: 0, y: 0, z: 0 }, orientation: "rotx180", nostatus: false },
      exits: [
        { clone: { name: "exit", active: false }, space: "position", at: [{ x: 0, y: -3, z: 0 }] }
      ],
      objects: [
        { clone: { type: "switch", name: "exit switch", active: false, toggles: ["exit"] }, space: "position", at: [
          { x: 0, y: -2, z: 0 }
        ] },
        { clone: { type: "stone" }, space: "coordinates", at: [
          { x: 3, y: 8, z: 3 }, { x: 4, y: 8, z: 3 }, { x: 3, y: 8, z: 4 }, { x: 3, y: 8, z: 2 },
          { x: 2, y: 8, z: 3 }, { x: 1, y: 8, z: 1 }, { x: 2, y: 8, z: 1 }, { x: 3, y: 8, z: 1 },
          { x: 4, y: 8, z: 1 }, { x: 5, y: 8, z: 1 }, { x: 5, y: 8, z: 2 }, { x: 5, y: 8, z: 3 },
          { x: 5, y: 8, z: 4 }, { x: 5, y: 8, z: 5 }, { x: 4, y: 8, z: 5 }, { x: 3, y: 8, z: 5 },
          { x: 2, y: 8, z: 5 }, { x: 1, y: 8, z: 5 }, { x: 1, y: 8, z: 4 }, { x: 1, y: 8, z: 3 },
          { x: 1, y: 8, z: 2 }
        ] },
        { clone: { type: "wall" }, space: "coordinates", at: [
          { x: 4, y: 4, z: 3 }, { x: 3, y: 4, z: 4 }, { x: 2, y: 4, z: 3 }, { x: 3, y: 4, z: 2 },
          { x: 4, y: 3, z: 3 }, { x: 3, y: 3, z: 4 }, { x: 2, y: 3, z: 3 }, { x: 3, y: 3, z: 2 },
          { x: 4, y: 3, z: 4 }, { x: 2, y: 3, z: 4 }, { x: 2, y: 3, z: 2 }, { x: 4, y: 3, z: 2 },
          { x: 4, y: 2, z: 3 }, { x: 3, y: 2, z: 4 }, { x: 2, y: 2, z: 3 }, { x: 3, y: 2, z: 2 }
        ] }
      ]
    },
    gears: {
      size: { x: 9, y: 9, z: 9 },
      intro: "gears",
      powerCondition: "connectedMotor",
      solverActions: ["move forward", "move backward", "turn left", "turn right", "jump forward", "jump"],
      help: "$scale(1.5)mission:\nactivate the exit!\n\nconnect the generator with the motor and close the circuit with the wire stones",
      player: { position: { x: 0, y: 0, z: 0 }, nostatus: false },
      exits: [
        { clone: { name: "exit", active: false }, space: "position", at: [{ x: 0, y: 4, z: 0 }] }
      ],
      objects: [
        { clone: { type: "wireStone" }, space: "coordinates", at: [
          { x: 3, y: 4, z: 4 }, { x: 5, y: 4, z: 4 }, { x: 4, y: 3, z: 4 },
          { x: 4, y: 5, z: 4 }, { x: 4, y: 4, z: 3 }, { x: 4, y: 4, z: 5 }
        ] },
        { clone: { type: "gear", face: "PY" }, space: "coordinates", at: [
          { x: 3, y: 0, z: 3 }, { x: 5, y: 0, z: 3 }, { x: 3, y: 0, z: 5 }
        ] },
        { clone: { type: "generator", face: "PY", active: true }, space: "coordinates", at: [{ x: 5, y: 0, z: 5 }] },
        { clone: { type: "motorCylinder", face: "PY" }, space: "coordinates", at: [{ x: 4, y: 1, z: 4 }] },
        { clone: { type: "motorGear", face: "PY" }, space: "coordinates", at: [{ x: 4, y: 0, z: 4 }] },
        { clone: { type: "wire", face: "PY", connections: 10 }, space: "coordinates", at: [
          { x: 2, y: 0, z: 1 }, { x: 3, y: 0, z: 1 }, { x: 4, y: 0, z: 1 }, { x: 5, y: 0, z: 1 }, { x: 6, y: 0, z: 1 },
          { x: 2, y: 0, z: 7 }, { x: 3, y: 0, z: 7 }, { x: 4, y: 0, z: 7 }, { x: 5, y: 0, z: 7 }, { x: 6, y: 0, z: 7 }
        ] },
        { clone: { type: "wire", face: "PY", connections: 5 }, space: "coordinates", at: [
          { x: 1, y: 0, z: 2 }, { x: 1, y: 0, z: 3 }, { x: 1, y: 0, z: 4 }, { x: 1, y: 0, z: 5 }, { x: 1, y: 0, z: 6 },
          { x: 7, y: 0, z: 2 }, { x: 7, y: 0, z: 3 }, { x: 7, y: 0, z: 4 }, { x: 7, y: 0, z: 5 }, { x: 7, y: 0, z: 6 }
        ] },
        { clone: { type: "wire", face: "PY", connections: 6 }, space: "coordinates", at: [{ x: 1, y: 0, z: 1 }] },
        { clone: { type: "wire", face: "PY", connections: 3 }, space: "coordinates", at: [{ x: 1, y: 0, z: 7 }] },
        { clone: { type: "wire", face: "PY", connections: 9 }, space: "coordinates", at: [{ x: 7, y: 0, z: 7 }] },
        { clone: { type: "wire", face: "PY", connections: 12 }, space: "coordinates", at: [{ x: 7, y: 0, z: 1 }] },
        { clone: { type: "wire", face: "PX", connections: 1 }, space: "coordinates", at: [{ x: 0, y: 0, z: 4 }] },
        { clone: { type: "wire", face: "NX", connections: 1 }, space: "coordinates", at: [{ x: 8, y: 0, z: 4 }] },
        { clone: { type: "wire", face: "PX", connections: 5 }, space: "coordinates", at: [
          { x: 0, y: 1, z: 4 }, { x: 0, y: 2, z: 4 }, { x: 0, y: 3, z: 4 }, { x: 0, y: 4, z: 4 },
          { x: 0, y: 5, z: 4 }, { x: 0, y: 6, z: 4 }, { x: 0, y: 7, z: 4 }, { x: 0, y: 8, z: 4 }
        ] },
        { clone: { type: "wire", face: "NX", connections: 5 }, space: "coordinates", at: [
          { x: 8, y: 1, z: 4 }, { x: 8, y: 2, z: 4 }, { x: 8, y: 3, z: 4 }, { x: 8, y: 4, z: 4 },
          { x: 8, y: 5, z: 4 }, { x: 8, y: 6, z: 4 }, { x: 8, y: 7, z: 4 }, { x: 8, y: 8, z: 4 }
        ] },
        { clone: { type: "wire", face: "NY", connections: 10 }, space: "coordinates", at: [
          { x: 0, y: 8, z: 4 }, { x: 1, y: 8, z: 4 }, { x: 2, y: 8, z: 4 }, { x: 3, y: 8, z: 4 }, { x: 4, y: 8, z: 4 },
          { x: 5, y: 8, z: 4 }, { x: 6, y: 8, z: 4 }, { x: 7, y: 8, z: 4 }, { x: 8, y: 8, z: 4 }
        ] }
      ]
    },
    gamma: {
      size: { x: 10, y: 10, z: 10 },
      intro: "gamma",
      switchConditions: [{ group: "exitCounter", exit: "exit", activeCount: 4 }],
      help: "$scale(1.5)mission:\nactivate the exit!\n\nshoot at the switches to activate the exit",
      player: { coordinates: { x: 0, y: 5, z: 0 }, nostatus: false },
      exits: [
        { clone: { name: "exit", active: false }, space: "coordinates", at: [{ x: 2, y: 7, z: 4 }] }
      ],
      objects: [
        { clone: { type: "switch", name: "color switch", active: false }, space: "coordinates", at: [{ x: 9, y: 0, z: 0 }] },
        { clone: { type: "switch", active: false, switchGroup: "exitCounter" }, space: "coordinates", at: [
          { x: 0, y: 0, z: 0 }, { x: 7, y: 4, z: 4 }, { x: 4, y: 4, z: 7 }, { x: 4, y: 7, z: 6 }
        ] },
        { clone: { type: "mutant" }, space: "coordinates", at: [{ x: 5, y: 0, z: 0 }] },
        { clone: { type: "wall" }, space: "coordinates", at: [
          { x: 0, y: 0, z: 1 }, { x: 1, y: 0, z: 1 }, { x: 2, y: 0, z: 1 }, { x: 3, y: 0, z: 1 }, { x: 4, y: 0, z: 1 },
          { x: 5, y: 0, z: 1 }, { x: 6, y: 0, z: 1 }, { x: 7, y: 0, z: 1 }, { x: 8, y: 0, z: 1 }, { x: 9, y: 0, z: 1 },
          { x: 0, y: 1, z: 0 }, { x: 1, y: 1, z: 0 }, { x: 2, y: 1, z: 0 }, { x: 3, y: 1, z: 0 }, { x: 4, y: 1, z: 0 },
          { x: 5, y: 1, z: 0 }, { x: 6, y: 1, z: 0 }, { x: 7, y: 1, z: 0 }, { x: 8, y: 1, z: 0 }, { x: 9, y: 1, z: 0 },
          { x: 0, y: 2, z: 2 }, { x: 1, y: 2, z: 2 }, { x: 2, y: 2, z: 2 }, { x: 3, y: 2, z: 2 }, { x: 4, y: 2, z: 2 },
          { x: 5, y: 2, z: 2 }, { x: 6, y: 2, z: 2 }, { x: 2, y: 2, z: 3 }, { x: 2, y: 2, z: 4 }, { x: 2, y: 2, z: 5 },
          { x: 2, y: 2, z: 6 }, { x: 2, y: 3, z: 4 }, { x: 2, y: 4, z: 4 }, { x: 2, y: 5, z: 4 }, { x: 2, y: 6, z: 4 },
          { x: 3, y: 4, z: 4 }, { x: 4, y: 4, z: 4 }, { x: 5, y: 4, z: 4 }, { x: 4, y: 4, z: 5 }, { x: 4, y: 4, z: 6 },
          { x: 4, y: 5, z: 6 }
        ] }
      ]
    },
    cube: {
      size: { x: 5, y: 5, z: 5 },
      intro: "cube",
      help: "reach the exit!",
      player: { coordinates: { x: 2, y: 0, z: 0 }, orientation: "rot0", nostatus: false },
      exits: [
        { clone: { name: "exit", active: true }, space: "position", at: [{ x: 0, y: 2, z: 2 }] }
      ],
      objects: [
        { clone: { type: "stone" }, space: "coordinates", at: [
          { x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: 3 }, { x: 0, y: 1, z: 0 }, { x: 0, y: 1, z: 2 }, { x: 0, y: 1, z: 4 },
          { x: 0, y: 2, z: 1 }, { x: 0, y: 2, z: 3 }, { x: 0, y: 3, z: 0 }, { x: 0, y: 3, z: 2 }, { x: 0, y: 3, z: 4 },
          { x: 0, y: 4, z: 1 }, { x: 0, y: 4, z: 3 }, { x: 1, y: 0, z: 0 }, { x: 1, y: 0, z: 2 }, { x: 1, y: 0, z: 4 },
          { x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 3 }, { x: 1, y: 2, z: 0 }, { x: 1, y: 2, z: 2 }, { x: 1, y: 2, z: 4 },
          { x: 1, y: 3, z: 1 }, { x: 1, y: 3, z: 3 }, { x: 1, y: 4, z: 0 }, { x: 1, y: 4, z: 2 }, { x: 1, y: 4, z: 4 },
          { x: 2, y: 0, z: 1 }, { x: 2, y: 0, z: 3 }, { x: 2, y: 1, z: 0 }, { x: 2, y: 1, z: 2 }, { x: 2, y: 1, z: 4 },
          { x: 2, y: 2, z: 1 }, { x: 2, y: 2, z: 3 }, { x: 2, y: 3, z: 0 }, { x: 2, y: 3, z: 2 }, { x: 2, y: 3, z: 4 },
          { x: 2, y: 4, z: 1 }, { x: 2, y: 4, z: 3 }, { x: 3, y: 0, z: 0 }, { x: 3, y: 0, z: 2 }, { x: 3, y: 0, z: 4 },
          { x: 3, y: 1, z: 1 }, { x: 3, y: 1, z: 3 }, { x: 3, y: 2, z: 0 }, { x: 3, y: 2, z: 2 }, { x: 3, y: 2, z: 4 },
          { x: 3, y: 3, z: 1 }, { x: 3, y: 3, z: 3 }, { x: 3, y: 4, z: 0 }, { x: 3, y: 4, z: 2 }, { x: 3, y: 4, z: 4 },
          { x: 4, y: 0, z: 1 }, { x: 4, y: 0, z: 3 }, { x: 4, y: 1, z: 0 }, { x: 4, y: 1, z: 2 }, { x: 4, y: 1, z: 4 },
          { x: 4, y: 2, z: 1 }, { x: 4, y: 2, z: 3 }, { x: 4, y: 3, z: 0 }, { x: 4, y: 3, z: 2 }, { x: 4, y: 3, z: 4 },
          { x: 4, y: 4, z: 1 }, { x: 4, y: 4, z: 3 }
        ] }
      ]
    },
    switch: {
      size: { x: 7, y: 7, z: 7 },
      intro: "switch",
      switchConditions: [{ group: "exitCounter", exit: "exit", activeCount: 4 }],
      help: [
        "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit,\nactivate the 4 switches\n\nto activate the switches,\nshoot them",
        "to move the center stone,\n\nuse the bomb.\n\nthe bomb will detonate if you shoot it"
      ],
      player: { coordinates: { x: 3, y: 0, z: 3 }, nostatus: false },
      exits: [
        { clone: { name: "exit", active: false }, space: "position", at: [{ x: 0, y: -1, z: 0 }] }
      ],
      objects: [
        { clone: { type: "stone" }, space: "coordinates", at: [
          { x: 3, y: 3, z: 3 }, { x: 3, y: 5, z: 3 }
        ] },
        { clone: { type: "bomb" }, space: "coordinates", at: [{ x: 3, y: 1, z: 3 }] },
        { clone: { type: "wall" }, space: "coordinates", at: [
          { x: 3, y: 2, z: 6 }, { x: 3, y: 4, z: 6 }, { x: 4, y: 3, z: 6 }, { x: 2, y: 3, z: 6 },
          { x: 6, y: 2, z: 3 }, { x: 6, y: 4, z: 3 }, { x: 6, y: 3, z: 4 }, { x: 6, y: 3, z: 2 },
          { x: 3, y: 2, z: 1 }, { x: 3, y: 4, z: 1 }, { x: 4, y: 3, z: 1 }, { x: 2, y: 3, z: 1 },
          { x: 1, y: 2, z: 3 }, { x: 1, y: 4, z: 3 }, { x: 1, y: 3, z: 4 }, { x: 1, y: 3, z: 2 }
        ] },
        { clone: { type: "switch", active: false, switchGroup: "exitCounter" }, space: "coordinates", at: [
          { x: 1, y: 3, z: 3 }, { x: 6, y: 3, z: 3 }, { x: 3, y: 3, z: 1 }, { x: 3, y: 3, z: 6 }
        ] }
      ]
    }
  };

  var gameItems = [
    {
      id: "player",
      title: "Kiki",
      firstLevel: "start",
      status: "partial",
      statusLabel: "Playable",
      description: "The controlled bot. Movement, turning, jumping, falling, shooting, and pushing are implemented; energy, health, death, and richer status systems are still future work."
    },
    {
      id: "exit",
      title: "Exit gate",
      firstLevel: "start",
      status: "ported",
      statusLabel: "Ported",
      description: "The level goal. Active and inactive gates work, including activation by switches and simplified power checks."
    },
    {
      id: "wall",
      title: "Wall",
      type: "wall",
      firstLevel: "start",
      status: "ported",
      statusLabel: "Ported",
      description: "Static blocking cells used as floors, walls, ledges, and puzzle geometry."
    },
    {
      id: "stone",
      title: "Stone",
      type: "stone",
      firstLevel: "move",
      status: "partial",
      statusLabel: "Playable",
      description: "Pushable blocks with gravity. Core pushing and falling behavior is available; original per-stone colors and special variants are not complete yet."
    },
    {
      id: "switch",
      title: "Switch",
      type: "switch",
      firstLevel: "move",
      status: "partial",
      statusLabel: "Playable",
      description: "Shootable trigger. Direct exit toggles and declarative active-count switch groups work; arbitrary scripted callbacks, including color-cycling switches, are still simplified."
    },
    {
      id: "bullet",
      title: "Bullet",
      firstLevel: "move",
      status: "partial",
      statusLabel: "Playable",
      description: "Straight-line shots can hit switches and bombs and have a visible effect. Full original collision responses and sound behavior are still incomplete."
    },
    {
      id: "wireStone",
      title: "Wire stone",
      type: "wireStone",
      firstLevel: "electro",
      status: "partial",
      statusLabel: "Playable",
      description: "A pushable conductive stone. It participates in simplified circuit logic and block movement."
    },
    {
      id: "wire",
      title: "Wire",
      type: "wire",
      firstLevel: "electro",
      status: "partial",
      statusLabel: "Playable",
      description: "Conductive face segment. Static circuit propagation works, but original connection geometry and animation are only approximated."
    },
    {
      id: "gear",
      title: "Gear",
      type: "gear",
      firstLevel: "electro",
      status: "partial",
      statusLabel: "Playable",
      description: "Conductive circuit object with a simple visual mesh. Mechanical rotation and full original behavior are not complete."
    },
    {
      id: "generator",
      title: "Generator",
      type: "generator",
      firstLevel: "electro",
      status: "partial",
      statusLabel: "Playable",
      description: "Power source for circuit puzzles. It feeds the simplified power graph used by current JavaScript levels."
    },
    {
      id: "motorGear",
      title: "Motor gear",
      type: "motorGear",
      firstLevel: "electro",
      status: "partial",
      statusLabel: "Playable",
      description: "Powered circuit endpoint. It can satisfy current exit-power conditions, with simplified mechanics and visuals."
    },
    {
      id: "motorCylinder",
      title: "Motor cylinder",
      type: "motorCylinder",
      firstLevel: "electro",
      status: "partial",
      statusLabel: "Playable",
      description: "Powered circuit endpoint paired with motor gears. It has a basic powered visual state."
    },
    {
      id: "bomb",
      title: "Bomb",
      type: "bomb",
      firstLevel: "elevate",
      status: "partial",
      statusLabel: "Playable",
      description: "Shootable explosive object. It can push adjacent objects and chain into other bombs, but the original splitter/explosion details are simplified."
    },
    {
      id: "light",
      title: "Light",
      firstLevel: "borg",
      status: "missing",
      statusLabel: "Not ported",
      description: "Original level lighting object. Browser lighting currently comes from the renderer, not from level-authored light objects."
    },
    {
      id: "mutant",
      title: "Mutant bot",
      firstLevel: "gamma",
      status: "missing",
      statusLabel: "Placeholder",
      description: "Enemy bot from the original game. It now has visible blocking volume where early levels place it; movement AI, hazards, damage, and death behavior are not implemented yet."
    }
  ];

  var colorSchemes = {
    tron_scheme: {
      KikiWorld: { base: [0.0, 0.0, 0.3], plate: [0.05, 0.05, 0.2] },
      KikiLight: { base: [0.0, 0.0, 1.0], diffuse: [0.0, 0.0, 1.0], specular: [0.0, 0.0, 1.0], halo: [0.0, 0.0, 1.0] },
      KikiSpikes: { base: [0.5, 0.5, 0.5] },
      KikiStone: { base: [0.0, 0.0, 1.0, 1.0] },
      KikiMovesAtom: { base: [0.5, 0.5, 0.0, 0.4], neutron: [0.0, 0.5, 0.0, 0.2] },
      KikiSwitch: { base: [0.0, 0.0, 0.5, 0.8], sphere: [1.0, 1.0, 0.0, 0.8] },
      KikiGate: { base: [1.0, 1.0, 0.0, 0.8], sphere: [1.0, 1.0, 0.0, 0.8] },
      KikiPlayer: { base: [0.5, 0.5, 0.5], dead: [0.3, 0.1, 0.0], tire: [0.0, 0.0, 0.5] },
      KikiMutant: { base: [0.5, 0.0, 0.0], dead: [0.0, 0.0, 0.2, 0.4], tire: [0.0, 0.0, 0.2] },
      KikiGear: { base: [0.1, 0.1, 0.9, 0.9] },
      KikiValve: { base: [0.0, 0.0, 0.5, 0.9] },
      KikiGenerator: { base: [0.0, 0.0, 0.5, 0.9] },
      KikiMotorCylinder: { base: [0.0, 0.0, 0.6, 0.9] },
      KikiMotorGear: { base: [0.0, 0.0, 0.6, 0.9] },
      KikiBomb: { base: [0.5, 0.0, 0.0] },
      KikiWire: { base: [0.1, 0.1, 0.9, 0.6], light: [1.0, 1.0, 0.0] },
      KikiText: { base: [0.8, 0.8, 0.0], bright: [1.0, 1.0, 0.0], dark: [0.6, 0.4, 0.0] }
    },
    neutron_scheme: {
      KikiWorld: { base: [0.13, 0.13, 0.13], plate: [0.5, 0.5, 0.5] },
      KikiLight: { base: [0.0, 0.0, 0.0], diffuse: [1.0, 1.0, 1.0], specular: [1.0, 1.0, 1.0], halo: [1.0, 1.0, 1.0] },
      KikiSpikes: { base: [0.5, 0.5, 0.5] },
      KikiStone: { base: [0.0, 0.5, 0.5, 0.5] },
      KikiMovesAtom: { base: [1.0, 1.0, 0.0, 0.5], neutron: [0.0, 1.0, 0.0, 0.3] },
      KikiSwitch: { base: [0.0, 0.0, 0.5, 0.8], sphere: [1.0, 1.0, 0.0, 0.8] },
      KikiGate: { base: [1.0, 1.0, 0.0, 0.8], sphere: [1.0, 1.0, 0.0, 0.8] },
      KikiPlayer: { base: [1.0, 0.5, 0.0], dead: [0.3, 0.1, 0.0], tire: [0.5, 0.0, 0.0] },
      KikiMutant: { base: [0.5, 0.0, 0.0], dead: [0.0, 0.0, 0.2, 0.4], tire: [0.0, 0.0, 0.2] },
      KikiGear: { base: [1.0, 0.0, 0.0, 0.0] },
      KikiValve: { base: [1.0, 0.0, 0.0, 0.0] },
      KikiGenerator: { base: [0.0, 0.0, 0.5, 0.9] },
      KikiMotorCylinder: { base: [0.0, 0.0, 0.6, 0.9] },
      KikiMotorGear: { base: [0.0, 0.0, 0.6, 0.9] },
      KikiBomb: { base: [0.5, 0.0, 0.0] },
      KikiWire: { base: [0.1, 0.1, 0.9, 0.6], light: [1.0, 1.0, 0.0] },
      KikiText: { base: [0.8, 0.8, 0.0], bright: [1.0, 1.0, 0.0], dark: [0.6, 0.4, 0.0] }
    },
    test_scheme: {
      KikiWorld: { base: [1.0, 1.0, 1.0], plate: [0.08, 0.08, 0.08] },
      KikiLight: { base: [0.0, 0.0, 0.0], diffuse: [1.0, 1.0, 1.0], specular: [1.0, 1.0, 1.0], halo: [1.0, 1.0, 1.0] },
      KikiSpikes: { base: [0.5, 0.5, 0.5] },
      KikiStone: { base: [0.5, 0.5, 0.5, 0.5] },
      KikiMovesAtom: { base: [0.5, 0.0, 0.0, 0.8], neutron: [1.0, 0.5, 0.0, 0.8] },
      KikiSwitch: { base: [0.0, 0.0, 0.5, 0.8], sphere: [1.0, 1.0, 0.0, 0.8] },
      KikiGate: { base: [1.0, 1.0, 0.0, 0.8], sphere: [1.0, 1.0, 0.0, 0.8] },
      KikiPlayer: { base: [1.0, 0.5, 0.0], dead: [0.3, 0.1, 0.0], tire: [0.5, 0.0, 0.0] },
      KikiMutant: { base: [1.0, 0.5, 0.0], dead: [0.3, 0.1, 0.0], tire: [0.5, 0.0, 0.0] },
      KikiGear: { base: [0.1, 0.1, 0.9, 0.9] },
      KikiValve: { base: [0.0, 0.0, 0.5, 0.9] },
      KikiGenerator: { base: [0.0, 0.0, 0.5, 0.9] },
      KikiMotorCylinder: { base: [0.0, 0.0, 0.6, 0.9] },
      KikiMotorGear: { base: [0.0, 0.0, 0.6, 0.9] },
      KikiBomb: { base: [0.5, 0.0, 0.0] },
      KikiWire: { base: [0.1, 0.1, 0.9, 0.6], light: [1.0, 1.0, 0.0] },
      KikiText: { base: [0.8, 0.8, 0.0], bright: [1.0, 1.0, 0.0], dark: [0.6, 0.4, 0.0] }
    },
    candy_scheme: {
      KikiWorld: { base: [0.35, 0.0, 0.35], plate: [0.8, 0.0, 0.9] },
      KikiLight: { base: [0.0, 0.0, 0.0], diffuse: [1.0, 0.5, 0.0], specular: [1.0, 0.0, 1.0], halo: [1.0, 1.0, 1.0] },
      KikiSpikes: { base: [0.8, 0.0, 0.8] },
      KikiStone: { base: [0.85, 0.0, 0.95, 0.6] },
      KikiMovesAtom: { base: [0.5, 0.0, 0.5, 0.8], neutron: [1.0, 0.0, 1.0, 0.8] },
      KikiSwitch: { base: [0.3, 0.0, 0.3, 0.8], sphere: [1.0, 0.0, 1.0, 0.8] },
      KikiGate: { base: [1.0, 0.0, 1.0, 0.8], sphere: [1.0, 0.0, 1.0, 0.8] },
      KikiPlayer: { base: [0.7, 0.0, 0.7], tire: [0.3, 0.0, 0.3] },
      KikiMutant: { base: [0.3, 0.0, 0.3], dead: [0.2, 0.0, 0.45, 0.5], tire: [0.7, 0.0, 0.7] },
      KikiBotFume: { base: [1.0, 0.0, 1.0, 0.5] },
      KikiGear: { base: [0.7, 0.0, 0.7, 0.8] },
      KikiValve: { base: [0.5, 0.0, 0.5, 0.9] },
      KikiGenerator: { base: [0.5, 0.0, 0.5, 0.9] },
      KikiMotorCylinder: { base: [1.0, 0.0, 1.0, 0.9] },
      KikiMotorGear: { base: [1.0, 0.0, 1.0, 0.9] },
      KikiBomb: { base: [0.73, 0.0, 0.75] },
      KikiWire: { base: [1.0, 0.0, 1.0], light: [1.0, 1.0, 0.0] },
      KikiText: { base: [0.7, 0.0, 0.7], bright: [1.0, 0.0, 1.0], dark: [0.4, 0.0, 0.4] }
    },
    default_scheme: {
      KikiWorld: { base: [0.13, 0.13, 0.13], plate: [0.5, 0.5, 0.5] },
      KikiLight: { base: [0.0, 0.0, 0.0], diffuse: [1.0, 1.0, 1.0], specular: [1.0, 1.0, 1.0], halo: [1.0, 1.0, 1.0] },
      KikiSpikes: { base: [0.5, 0.5, 0.5] },
      KikiStone: { base: [0.5, 0.5, 0.5, 0.5] },
      KikiMovesAtom: { base: [0.5, 0.0, 0.0, 0.8], neutron: [1.0, 0.5, 0.0, 0.8] },
      KikiSwitch: { base: [0.0, 0.0, 0.5, 0.8], sphere: [1.0, 1.0, 0.0, 0.8] },
      KikiGate: { base: [1.0, 1.0, 0.0, 0.8], sphere: [1.0, 1.0, 0.0, 0.8] },
      KikiPlayer: { base: [1.0, 0.5, 0.0], dead: [0.3, 0.1, 0.0], tire: [0.5, 0.0, 0.0] },
      KikiMutant: { base: [0.5, 0.0, 0.0], dead: [0.0, 0.0, 0.2, 0.4], tire: [0.0, 0.0, 0.2] },
      KikiGear: { base: [0.1, 0.1, 0.9, 0.9] },
      KikiValve: { base: [0.0, 0.0, 0.5, 0.9] },
      KikiGenerator: { base: [0.0, 0.0, 0.5, 0.9] },
      KikiMotorCylinder: { base: [0.0, 0.0, 0.6, 0.9] },
      KikiMotorGear: { base: [0.0, 0.0, 0.6, 0.9] },
      KikiBomb: { base: [0.5, 0.0, 0.0] },
      KikiWire: { base: [0.1, 0.1, 0.9, 0.6], light: [1.0, 1.0, 0.0] },
      KikiText: { base: [0.8, 0.8, 0.0], bright: [1.0, 1.0, 0.0], dark: [0.6, 0.4, 0.0] }
    },
    bronze_scheme: {
      KikiWorld: { base: [0.25, 0.15, 0.05], plate: [0.8, 0.6, 0.2] },
      KikiLight: { base: [0.1, 0.1, 0.0], diffuse: [0.4, 0.2, 0.1], specular: [1.0, 1.0, 0.5], halo: [1.0, 0.9, 0.2] },
      KikiSpikes: { base: [0.8, 0.6, 0.2] },
      KikiStone: { base: [1.0, 0.8, 0.4, 0.8] },
      KikiMovesAtom: { base: [0.4, 0.4, 0.1, 0.8], neutron: [0.4, 0.4, 0.1, 0.8] },
      KikiSwitch: { base: [0.9, 0.7, 0.1, 0.8], sphere: [1.0, 1.0, 0.7, 0.8] },
      KikiGate: { base: [0.9, 0.7, 0.1], sphere: [1.0, 0.8, 0.1, 0.8] },
      KikiPlayer: { base: [0.8, 0.6, 0.3], dead: [0.4, 0.1, 0.0], tire: [0.5, 0.2, 0.1] },
      KikiMutant: { base: [0.5, 0.2, 0.1, 0.8], dead: [0.5, 0.2, 0.1, 0.4], tire: [0.3, 0.1, 0.0] },
      KikiBotFume: { base: [1.0, 0.5, 0.1, 0.5] },
      KikiGear: { base: [0.7, 0.4, 0.1, 0.9] },
      KikiValve: { base: [0.5, 0.2, 0.1, 0.9] },
      KikiGenerator: { base: [0.7, 0.5, 0.3, 0.9] },
      KikiMotorCylinder: { base: [0.8, 0.6, 0.2, 0.9] },
      KikiMotorGear: { base: [0.8, 0.6, 0.2, 0.9] },
      KikiBomb: { base: [0.9, 0.7, 0.1] },
      KikiWire: { base: [0.7, 0.5, 0.3, 0.9], light: [1.0, 1.0, 0.0] },
      KikiText: { base: [0.7, 0.5, 0.1], bright: [0.9, 0.7, 0.15], dark: [0.6, 0.4, 0.0] }
    },
    red_scheme: {
      KikiWorld: { base: [0.2, 0.0, 0.0], plate: [0.3, 0.0, 0.0] },
      KikiLight: { base: [0.1, 0.1, 0.1], diffuse: [1.0, 1.0, 0.0], specular: [1.0, 1.0, 0.0], halo: [1.0, 1.0, 0.0] },
      KikiSpikes: { base: [0.3, 0.0, 0.0] },
      KikiStone: { base: [0.5, 0.0, 0.0, 0.6] },
      KikiMovesAtom: { base: [0.4, 0.0, 0.0, 0.6], neutron: [0.5, 0.0, 0.0, 0.6] },
      KikiSwitch: { base: [0.8, 0.0, 0.0, 0.8], sphere: [1.0, 1.0, 0.1, 0.8] },
      KikiGate: { base: [1.0, 0.2, 0.0, 0.8], sphere: [1.0, 1.0, 0.1, 0.8] },
      KikiPlayer: { base: [0.7, 0.0, 0.0], tire: [0.3, 0.0, 0.0] },
      KikiMutant: { base: [0.3, 0.0, 0.0], dead: [0.2, 0.0, 0.0, 0.5], tire: [0.7, 0.0, 0.0] },
      KikiBotFume: { base: [1.0, 1.0, 0.0, 0.5] },
      KikiGear: { base: [1.0, 0.5, 0.0, 0.5] },
      KikiValve: { base: [0.5, 0.2, 0.0] },
      KikiGenerator: { base: [0.5, 0.0, 0.0] },
      KikiMotorCylinder: { base: [0.25, 0.0, 0.0] },
      KikiMotorGear: { base: [0.25, 0.0, 0.0] },
      KikiBomb: { base: [0.5, 0.0, 0.0] },
      KikiWire: { base: [0.5, 0.0, 0.0] },
      KikiText: { base: [1.0, 0.5, 0.0], bright: [1.0, 0.8, 0.0], dark: [0.4, 0.2, 0.0] }
    },
    blue_scheme: {
      KikiWorld: { base: [0.0, 0.0, 0.2], plate: [0.1, 0.1, 0.6] },
      KikiLight: { base: [0.1, 0.1, 0.1], diffuse: [1.0, 1.0, 1.0], specular: [1.0, 1.0, 1.0], halo: [1.0, 1.0, 1.0] },
      KikiSpikes: { base: [0.1, 0.1, 0.6, 0.8] },
      KikiStone: { base: [0.0, 0.0, 0.5, 0.6] },
      KikiMovesAtom: { base: [0.0, 0.0, 0.6, 0.6], neutron: [0.2, 0.2, 0.8, 0.6] },
      KikiSwitch: { base: [0.0, 0.0, 0.6, 0.8], sphere: [1.0, 1.0, 1.0, 0.8] },
      KikiGate: { base: [0.0, 0.2, 1.0], sphere: [1.0, 1.0, 1.0, 0.8] },
      KikiPlayer: { base: [0.0, 0.0, 0.7], tire: [0.0, 0.0, 0.3] },
      KikiMutant: { base: [0.0, 0.0, 0.3], dead: [0.0, 0.0, 0.2, 0.5], tire: [0.0, 0.0, 0.7] },
      KikiBotFume: { base: [0.5, 0.5, 1.0, 0.5] },
      KikiGear: { base: [0.1, 0.1, 0.9, 0.9] },
      KikiValve: { base: [0.0, 0.0, 0.5, 0.9] },
      KikiGenerator: { base: [0.0, 0.0, 0.5, 0.9] },
      KikiMotorCylinder: { base: [0.0, 0.0, 0.6, 0.9] },
      KikiMotorGear: { base: [0.0, 0.0, 0.6, 0.9] },
      KikiBomb: { base: [0.2, 0.2, 0.9, 0.8] },
      KikiWire: { base: [0.1, 0.1, 0.9, 0.6], light: [1.0, 0.5, 0.0] },
      KikiText: { base: [0.2, 0.4, 0.8], bright: [0.7, 0.8, 1.0], dark: [0.0, 0.0, 0.6] }
    },
    yellow_scheme: {
      KikiWorld: { base: [0.34, 0.34, 0.0], plate: [0.9, 0.9, 0.0] },
      KikiLight: { base: [0.0, 0.0, 0.0], diffuse: [1.0, 0.5, 0.0], specular: [1.0, 0.5, 0.0], halo: [1.0, 1.0, 0.0] },
      KikiSpikes: { base: [0.8, 0.8, 0.0] },
      KikiStone: { base: [0.8, 0.85, 0.0, 0.6] },
      KikiMovesAtom: { base: [0.5, 0.5, 0.0, 0.8], neutron: [1.0, 1.0, 0.0, 0.8] },
      KikiSwitch: { base: [0.8, 0.8, 0.0, 0.8], sphere: [1.0, 1.0, 0.0, 0.8] },
      KikiGate: { base: [1.0, 1.0, 0.0, 0.8], sphere: [1.0, 1.0, 0.0, 0.8] },
      KikiPlayer: { base: [0.7, 0.7, 0.0], tire: [0.3, 0.3, 0.0] },
      KikiMutant: { base: [0.3, 0.3, 0.0], dead: [0.2, 0.2, 0.0, 0.5], tire: [0.7, 0.7, 0.0] },
      KikiBotFume: { base: [1.0, 1.0, 0.0, 0.5] },
      KikiGear: { base: [0.7, 0.5, 0.0, 0.8] },
      KikiValve: { base: [0.5, 0.5, 0.0, 0.9] },
      KikiGenerator: { base: [0.5, 0.5, 0.0, 0.9] },
      KikiMotorCylinder: { base: [0.95, 0.95, 0.0] },
      KikiMotorGear: { base: [0.95, 0.95, 0.0] },
      KikiBomb: { base: [0.75, 0.75, 0.0] },
      KikiWire: { base: [1.0, 1.0, 0.0], light: [0.0, 0.0, 1.0] },
      KikiText: { base: [0.7, 0.7, 0.0], bright: [1.0, 1.0, 0.0], dark: [0.4, 0.4, 0.0] }
    },
    green_scheme: {
      KikiWorld: { base: [0.0, 0.2, 0.0], plate: [0.1, 0.6, 0.1] },
      KikiLight: { base: [0.0, 0.0, 0.0], diffuse: [0.5, 1.0, 0.5], specular: [0.7, 1.0, 0.7], halo: [1.0, 1.0, 1.0] },
      KikiSpikes: { base: [0.0, 0.6, 0.0, 0.8] },
      KikiStone: { base: [0.0, 0.5, 0.0, 0.6] },
      KikiMovesAtom: { base: [0.0, 0.6, 0.0, 0.6], neutron: [0.0, 0.8, 0.0, 0.6] },
      KikiSwitch: { base: [0.0, 0.6, 0.0, 0.8], sphere: [1.0, 1.0, 1.0, 0.8] },
      KikiGate: { base: [0.0, 0.5, 0.0], sphere: [1.0, 1.0, 1.0, 0.8] },
      KikiPlayer: { base: [0.0, 0.7, 0.0], tire: [0.0, 0.3, 0.0] },
      KikiMutant: { base: [0.0, 0.3, 0.0], dead: [0.0, 0.2, 0.0, 0.5], tire: [0.0, 0.7, 0.0] },
      KikiBotFume: { base: [0.5, 1.0, 0.5, 0.5] },
      KikiGear: { base: [0.0, 0.2, 0.0, 0.9] },
      KikiValve: { base: [0.0, 0.5, 0.0, 0.9] },
      KikiGenerator: { base: [0.0, 0.5, 0.0, 0.9] },
      KikiMotorCylinder: { base: [0.0, 0.6, 0.0, 0.9] },
      KikiMotorGear: { base: [0.0, 0.6, 0.0, 0.9] },
      KikiBomb: { base: [0.0, 0.2, 0.0, 0.8] },
      KikiWire: { base: [0.1, 0.9, 0.0, 0.6], light: [1.0, 1.0, 1.0] },
      KikiText: { base: [0.0, 0.4, 0.0], bright: [0.0, 0.6, 0.0], dark: [0.0, 0.2, 0.0] }
    },
    metal_scheme: {
      KikiWorld: { base: [0.2, 0.2, 0.2], plate: [1.0, 1.0, 1.0] },
      KikiLight: { base: [0.0, 0.0, 0.0], diffuse: [0.2, 0.2, 0.4], specular: [0.0, 0.0, 1.0], halo: [0.0, 0.0, 1.0] },
      KikiSpikes: { base: [1.0, 1.0, 1.0, 0.8] },
      KikiStone: { base: [1.0, 1.0, 1.0, 0.6] },
      KikiMovesAtom: { base: [0.3, 0.3, 0.35, 0.8], neutron: [0.7, 0.7, 0.75, 0.8] },
      KikiSwitch: { base: [0.9, 1.0, 0.9, 0.8], sphere: [0.5, 0.5, 1.0, 0.8] },
      KikiGate: { base: [1.0, 1.0, 1.0, 0.8], sphere: [0.5, 0.5, 1.0, 0.8] },
      KikiPlayer: { base: [0.6, 0.6, 0.6], tire: [0.3, 0.3, 0.3] },
      KikiMutant: { base: [0.8, 0.8, 0.8], dead: [1.0, 1.0, 1.0, 0.3], tire: [0.7, 0.7, 0.7] },
      KikiBotFume: { base: [0.8, 0.8, 0.8, 0.5] },
      KikiGear: { base: [0.2, 0.4, 0.5, 1.0] },
      KikiValve: { base: [0.4, 0.4, 0.5, 0.9] },
      KikiGenerator: { base: [1.0, 1.0, 1.0, 0.9] },
      KikiMotorCylinder: { base: [0.5, 0.5, 0.5, 0.9] },
      KikiMotorGear: { base: [0.5, 0.5, 0.5, 0.9] },
      KikiBomb: { base: [0.4, 0.4, 0.5, 0.9] },
      KikiWire: { base: [1.0, 1.0, 1.0, 0.9], light: [0.0, 0.0, 1.0] },
      KikiText: { base: [0.2, 0.4, 0.5], bright: [0.3, 0.9, 1.0], dark: [0.1, 0.3, 0.4] }
    }
  };

  return {
    themes: themes,
    levelDefinitions: levelDefinitions,
    levelTemplates: levelTemplates,
    gameItems: gameItems,
    sourceUrl: "https://github.com/leweyg/kiki_nano_bot_web",
    colorSchemes: colorSchemes
  };
}));
