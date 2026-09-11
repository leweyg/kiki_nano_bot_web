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
    { index: 6, id: "gold", title: "gold", source: "kiki/py/levels/gold.py", scheme: "yellow_scheme", screenshot: "kiki/levels/images/level7.png" },
    { index: 7, id: "jump", title: "jump", source: "kiki/py/levels/jump.py", scheme: "red_scheme", screenshot: "kiki/levels/images/level8.png" },
    { index: 8, id: "escape", title: "escape", source: "kiki/py/levels/escape.py", scheme: "metal_scheme", screenshot: "kiki/levels/images/level9.png" },
    { index: 9, id: "gears", title: "gears", source: "kiki/py/levels/gears.py", scheme: "blue_scheme", screenshot: "kiki/levels/images/level10.png" },
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
  levelDefinitions.forEach(function (level) {
    level.port_status = level.index < 6 && level.id !== "elevate" ? "ported" : level.index < 13 ? "being-ported" : "not-ported";
  });

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

  // Source capture: gears
  levelTemplates.gears = {
  "size": { "x": 9, "y": 9, "z": 9 },
  "intro": "gears",
  "powerCondition": "connectedMotor",
  "solverActions": [
    "move forward",
    "move backward",
    "turn left",
    "turn right",
    "jump forward",
    "jump"
  ],
  "help": "$scale(1.5)mission:\nactivate the exit!\n\nconnect the generator with the motor and close the circuit with the wire stones",
  "player": {
    "position": { "x": 0, "y": 0, "z": 0 },
    "nostatus": false
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": false
      },
      "space": "position",
      "at": [
        { "x": 0, "y": 4, "z": 0 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "wireStone"
      },
      "space": "coordinates",
      "at": [
        { "x": 3, "y": 4, "z": 4 },
        { "x": 5, "y": 4, "z": 4 },
        { "x": 4, "y": 3, "z": 4 },
        { "x": 4, "y": 5, "z": 4 },
        { "x": 4, "y": 4, "z": 3 },
        { "x": 4, "y": 4, "z": 5 }
      ]
    },
    {
      "clone": {
        "type": "gear",
        "face": "PY"
      },
      "space": "coordinates",
      "at": [
        { "x": 3, "y": 0, "z": 3 },
        { "x": 5, "y": 0, "z": 3 },
        { "x": 3, "y": 0, "z": 5 }
      ]
    },
    {
      "clone": {
        "type": "generator",
        "face": "PY",
        "active": true
      },
      "space": "coordinates",
      "at": [
        { "x": 5, "y": 0, "z": 5 }
      ]
    },
    {
      "clone": {
        "type": "motorCylinder",
        "face": "PY"
      },
      "space": "coordinates",
      "at": [
        { "x": 4, "y": 1, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "motorGear",
        "face": "PY"
      },
      "space": "coordinates",
      "at": [
        { "x": 4, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 10
      },
      "space": "coordinates",
      "at": [
        { "x": 2, "y": 0, "z": 1 },
        { "x": 3, "y": 0, "z": 1 },
        { "x": 4, "y": 0, "z": 1 },
        { "x": 5, "y": 0, "z": 1 },
        { "x": 6, "y": 0, "z": 1 },
        { "x": 2, "y": 0, "z": 7 },
        { "x": 3, "y": 0, "z": 7 },
        { "x": 4, "y": 0, "z": 7 },
        { "x": 5, "y": 0, "z": 7 },
        { "x": 6, "y": 0, "z": 7 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 5
      },
      "space": "coordinates",
      "at": [
        { "x": 1, "y": 0, "z": 2 },
        { "x": 1, "y": 0, "z": 3 },
        { "x": 1, "y": 0, "z": 4 },
        { "x": 1, "y": 0, "z": 5 },
        { "x": 1, "y": 0, "z": 6 },
        { "x": 7, "y": 0, "z": 2 },
        { "x": 7, "y": 0, "z": 3 },
        { "x": 7, "y": 0, "z": 4 },
        { "x": 7, "y": 0, "z": 5 },
        { "x": 7, "y": 0, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 6
      },
      "space": "coordinates",
      "at": [
        { "x": 1, "y": 0, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 3
      },
      "space": "coordinates",
      "at": [
        { "x": 1, "y": 0, "z": 7 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 9
      },
      "space": "coordinates",
      "at": [
        { "x": 7, "y": 0, "z": 7 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 12
      },
      "space": "coordinates",
      "at": [
        { "x": 7, "y": 0, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PX",
        "connections": 1
      },
      "space": "coordinates",
      "at": [
        { "x": 0, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NX",
        "connections": 1
      },
      "space": "coordinates",
      "at": [
        { "x": 8, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PX",
        "connections": 5
      },
      "space": "coordinates",
      "at": [
        { "x": 0, "y": 1, "z": 4 },
        { "x": 0, "y": 2, "z": 4 },
        { "x": 0, "y": 3, "z": 4 },
        { "x": 0, "y": 4, "z": 4 },
        { "x": 0, "y": 5, "z": 4 },
        { "x": 0, "y": 6, "z": 4 },
        { "x": 0, "y": 7, "z": 4 },
        { "x": 0, "y": 8, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NX",
        "connections": 5
      },
      "space": "coordinates",
      "at": [
        { "x": 8, "y": 1, "z": 4 },
        { "x": 8, "y": 2, "z": 4 },
        { "x": 8, "y": 3, "z": 4 },
        { "x": 8, "y": 4, "z": 4 },
        { "x": 8, "y": 5, "z": 4 },
        { "x": 8, "y": 6, "z": 4 },
        { "x": 8, "y": 7, "z": 4 },
        { "x": 8, "y": 8, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NY",
        "connections": 10
      },
      "space": "coordinates",
      "at": [
        { "x": 0, "y": 8, "z": 4 },
        { "x": 1, "y": 8, "z": 4 },
        { "x": 2, "y": 8, "z": 4 },
        { "x": 3, "y": 8, "z": 4 },
        { "x": 4, "y": 8, "z": 4 },
        { "x": 5, "y": 8, "z": 4 },
        { "x": 6, "y": 8, "z": 4 },
        { "x": 7, "y": 8, "z": 4 },
        { "x": 8, "y": 8, "z": 4 }
      ]
    }
  ],
  "port_status": "being-ported",
  "portNotes": [
    "Original gear, generator, motor and wire layout retained. Circuit activation and mechanical timing remain approximate; no verified completion route."
  ]
};

  // Source capture: gamma
  levelTemplates.gamma = {
  "size": { "x": 10, "y": 10, "z": 10 },
  "intro": "gamma",
  "switchConditions": [
    {
      "group": "exitCounter",
      "exit": "exit",
      "activeCount": 4
    }
  ],
  "help": "$scale(1.5)mission:\nactivate the exit!\n\nshoot at the switches to activate the exit",
  "player": {
    "coordinates": { "x": 0, "y": 5, "z": 0 },
    "nostatus": false
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": false
      },
      "space": "coordinates",
      "at": [
        { "x": 2, "y": 7, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "switch",
        "name": "color switch",
        "active": false
      },
      "space": "coordinates",
      "at": [
        { "x": 9, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "switch",
        "active": false,
        "switchGroup": "exitCounter"
      },
      "space": "coordinates",
      "at": [
        { "x": 0, "y": 0, "z": 0 },
        { "x": 7, "y": 4, "z": 4 },
        { "x": 4, "y": 4, "z": 7 },
        { "x": 4, "y": 7, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "mutant"
      },
      "space": "coordinates",
      "at": [
        { "x": 5, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "wall"
      },
      "space": "coordinates",
      "at": [
        { "x": 0, "y": 0, "z": 1 },
        { "x": 1, "y": 0, "z": 1 },
        { "x": 2, "y": 0, "z": 1 },
        { "x": 3, "y": 0, "z": 1 },
        { "x": 4, "y": 0, "z": 1 },
        { "x": 5, "y": 0, "z": 1 },
        { "x": 6, "y": 0, "z": 1 },
        { "x": 7, "y": 0, "z": 1 },
        { "x": 8, "y": 0, "z": 1 },
        { "x": 9, "y": 0, "z": 1 },
        { "x": 0, "y": 1, "z": 0 },
        { "x": 1, "y": 1, "z": 0 },
        { "x": 2, "y": 1, "z": 0 },
        { "x": 3, "y": 1, "z": 0 },
        { "x": 4, "y": 1, "z": 0 },
        { "x": 5, "y": 1, "z": 0 },
        { "x": 6, "y": 1, "z": 0 },
        { "x": 7, "y": 1, "z": 0 },
        { "x": 8, "y": 1, "z": 0 },
        { "x": 9, "y": 1, "z": 0 },
        { "x": 0, "y": 2, "z": 2 },
        { "x": 1, "y": 2, "z": 2 },
        { "x": 2, "y": 2, "z": 2 },
        { "x": 3, "y": 2, "z": 2 },
        { "x": 4, "y": 2, "z": 2 },
        { "x": 5, "y": 2, "z": 2 },
        { "x": 6, "y": 2, "z": 2 },
        { "x": 2, "y": 2, "z": 3 },
        { "x": 2, "y": 2, "z": 4 },
        { "x": 2, "y": 2, "z": 5 },
        { "x": 2, "y": 2, "z": 6 },
        { "x": 2, "y": 3, "z": 4 },
        { "x": 2, "y": 4, "z": 4 },
        { "x": 2, "y": 5, "z": 4 },
        { "x": 2, "y": 6, "z": 4 },
        { "x": 3, "y": 4, "z": 4 },
        { "x": 4, "y": 4, "z": 4 },
        { "x": 5, "y": 4, "z": 4 },
        { "x": 4, "y": 4, "z": 5 },
        { "x": 4, "y": 4, "z": 6 },
        { "x": 4, "y": 5, "z": 6 }
      ]
    }
  ],
  "port_status": "being-ported",
  "portNotes": [
    "Original room, mutant and switches retained. Mutant AI/damage and color-cycling callback are missing; completion unverified."
  ]
};

  // Source capture: cube
  levelTemplates.cube = {
  "size": { "x": 5, "y": 5, "z": 5 },
  "intro": "cube",
  "help": "reach the exit!",
  "player": {
    "coordinates": { "x": 2, "y": 0, "z": 0 },
    "orientation": "rot0",
    "nostatus": false
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "space": "position",
      "at": [
        { "x": 0, "y": 2, "z": 2 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone"
      },
      "space": "coordinates",
      "at": [
        { "x": 0, "y": 0, "z": 1 },
        { "x": 0, "y": 0, "z": 3 },
        { "x": 0, "y": 1, "z": 0 },
        { "x": 0, "y": 1, "z": 2 },
        { "x": 0, "y": 1, "z": 4 },
        { "x": 0, "y": 2, "z": 1 },
        { "x": 0, "y": 2, "z": 3 },
        { "x": 0, "y": 3, "z": 0 },
        { "x": 0, "y": 3, "z": 2 },
        { "x": 0, "y": 3, "z": 4 },
        { "x": 0, "y": 4, "z": 1 },
        { "x": 0, "y": 4, "z": 3 },
        { "x": 1, "y": 0, "z": 0 },
        { "x": 1, "y": 0, "z": 2 },
        { "x": 1, "y": 0, "z": 4 },
        { "x": 1, "y": 1, "z": 1 },
        { "x": 1, "y": 1, "z": 3 },
        { "x": 1, "y": 2, "z": 0 },
        { "x": 1, "y": 2, "z": 2 },
        { "x": 1, "y": 2, "z": 4 },
        { "x": 1, "y": 3, "z": 1 },
        { "x": 1, "y": 3, "z": 3 },
        { "x": 1, "y": 4, "z": 0 },
        { "x": 1, "y": 4, "z": 2 },
        { "x": 1, "y": 4, "z": 4 },
        { "x": 2, "y": 0, "z": 1 },
        { "x": 2, "y": 0, "z": 3 },
        { "x": 2, "y": 1, "z": 0 },
        { "x": 2, "y": 1, "z": 2 },
        { "x": 2, "y": 1, "z": 4 },
        { "x": 2, "y": 2, "z": 1 },
        { "x": 2, "y": 2, "z": 3 },
        { "x": 2, "y": 3, "z": 0 },
        { "x": 2, "y": 3, "z": 2 },
        { "x": 2, "y": 3, "z": 4 },
        { "x": 2, "y": 4, "z": 1 },
        { "x": 2, "y": 4, "z": 3 },
        { "x": 3, "y": 0, "z": 0 },
        { "x": 3, "y": 0, "z": 2 },
        { "x": 3, "y": 0, "z": 4 },
        { "x": 3, "y": 1, "z": 1 },
        { "x": 3, "y": 1, "z": 3 },
        { "x": 3, "y": 2, "z": 0 },
        { "x": 3, "y": 2, "z": 2 },
        { "x": 3, "y": 2, "z": 4 },
        { "x": 3, "y": 3, "z": 1 },
        { "x": 3, "y": 3, "z": 3 },
        { "x": 3, "y": 4, "z": 0 },
        { "x": 3, "y": 4, "z": 2 },
        { "x": 3, "y": 4, "z": 4 },
        { "x": 4, "y": 0, "z": 1 },
        { "x": 4, "y": 0, "z": 3 },
        { "x": 4, "y": 1, "z": 0 },
        { "x": 4, "y": 1, "z": 2 },
        { "x": 4, "y": 1, "z": 4 },
        { "x": 4, "y": 2, "z": 1 },
        { "x": 4, "y": 2, "z": 3 },
        { "x": 4, "y": 3, "z": 0 },
        { "x": 4, "y": 3, "z": 2 },
        { "x": 4, "y": 3, "z": 4 },
        { "x": 4, "y": 4, "z": 1 },
        { "x": 4, "y": 4, "z": 3 }
      ]
    }
  ],
  "port_status": "being-ported",
  "portNotes": [
    "Original nested cube walls and start/exit retained.",
    "No route certified within the bounded search; full puzzle completion remains unverified."
  ]
};

  // Source capture: switch
  levelTemplates.switch = {
  "size": { "x": 7, "y": 7, "z": 7 },
  "intro": "switch",
  "switchConditions": [
    {
      "group": "exitCounter",
      "exit": "exit",
      "activeCount": 4
    }
  ],
  "help": [
    "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit,\nactivate the 4 switches\n\nto activate the switches,\nshoot them",
    "to move the center stone,\n\nuse the bomb.\n\nthe bomb will detonate if you shoot it"
  ],
  "player": {
    "coordinates": { "x": 3, "y": 0, "z": 3 },
    "nostatus": false
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": false
      },
      "space": "position",
      "at": [
        { "x": 0, "y": -1, "z": 0 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone"
      },
      "space": "coordinates",
      "at": [
        { "x": 3, "y": 3, "z": 3 },
        { "x": 3, "y": 5, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "bomb"
      },
      "space": "coordinates",
      "at": [
        { "x": 3, "y": 1, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "wall"
      },
      "space": "coordinates",
      "at": [
        { "x": 3, "y": 2, "z": 6 },
        { "x": 3, "y": 4, "z": 6 },
        { "x": 4, "y": 3, "z": 6 },
        { "x": 2, "y": 3, "z": 6 },
        { "x": 6, "y": 2, "z": 3 },
        { "x": 6, "y": 4, "z": 3 },
        { "x": 6, "y": 3, "z": 4 },
        { "x": 6, "y": 3, "z": 2 },
        { "x": 3, "y": 2, "z": 1 },
        { "x": 3, "y": 4, "z": 1 },
        { "x": 4, "y": 3, "z": 1 },
        { "x": 2, "y": 3, "z": 1 },
        { "x": 1, "y": 2, "z": 3 },
        { "x": 1, "y": 4, "z": 3 },
        { "x": 1, "y": 3, "z": 4 },
        { "x": 1, "y": 3, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "switch",
        "active": false,
        "switchGroup": "exitCounter"
      },
      "space": "coordinates",
      "at": [
        { "x": 1, "y": 3, "z": 3 },
        { "x": 6, "y": 3, "z": 3 },
        { "x": 3, "y": 3, "z": 1 },
        { "x": 3, "y": 3, "z": 6 }
      ]
    }
  ],
  "port_status": "ported",
  "portNotes": [
    "Original switches and declarative multi-switch exit condition retained.",
    "Completion route replay-verified in the shared simulator (14 actions)."
  ],
  "solution": [
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
  ]
};

  // Source capture: borg
  levelTemplates.borg = {
  "port_status": "being-ported",
  "portNotes": [
    "9\u00d79\u00d79 arena with 150 mutants and source light. Mutant AI, damage and combat are missing; light is data only. Fixed random seed."
  ],
  "size": { "x": 9, "y": 9, "z": 9 },
  "intro": "borg",
  "help": [
    "Believe me,\nthey are\nCRAZY!"
  ],
  "player": {
    "coordinates": { "x": 0, "y": 0, "z": 0 },
    "nostatus": 0
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "light"
      },
      "at": [
        { "x": 7, "y": 7, "z": 7 }
      ]
    },
    {
      "clone": {
        "type": "mutant"
      },
      "at": [
        { "x": 5, "y": 8, "z": 4 },
        { "x": 3, "y": 1, "z": 1 },
        { "x": 4, "y": 6, "z": 7 },
        { "x": 7, "y": 3, "z": 3 },
        { "x": 7, "y": 7, "z": 5 },
        { "x": 0, "y": 1, "z": 2 },
        { "x": 1, "y": 2, "z": 1 },
        { "x": 5, "y": 5, "z": 5 },
        { "x": 2, "y": 5, "z": 1 },
        { "x": 3, "y": 2, "z": 0 },
        { "x": 1, "y": 7, "z": 2 },
        { "x": 6, "y": 4, "z": 4 },
        { "x": 8, "y": 6, "z": 0 },
        { "x": 0, "y": 6, "z": 5 },
        { "x": 7, "y": 7, "z": 0 },
        { "x": 0, "y": 1, "z": 4 },
        { "x": 0, "y": 6, "z": 3 },
        { "x": 8, "y": 1, "z": 8 },
        { "x": 6, "y": 3, "z": 2 },
        { "x": 5, "y": 0, "z": 6 },
        { "x": 1, "y": 3, "z": 8 },
        { "x": 1, "y": 0, "z": 1 },
        { "x": 0, "y": 6, "z": 7 },
        { "x": 0, "y": 2, "z": 5 },
        { "x": 4, "y": 3, "z": 6 },
        { "x": 2, "y": 3, "z": 5 },
        { "x": 1, "y": 4, "z": 8 },
        { "x": 6, "y": 5, "z": 1 },
        { "x": 3, "y": 0, "z": 8 },
        { "x": 0, "y": 4, "z": 8 },
        { "x": 4, "y": 8, "z": 4 },
        { "x": 4, "y": 0, "z": 7 },
        { "x": 5, "y": 2, "z": 0 },
        { "x": 7, "y": 4, "z": 1 },
        { "x": 2, "y": 0, "z": 0 },
        { "x": 1, "y": 7, "z": 5 },
        { "x": 5, "y": 0, "z": 2 },
        { "x": 8, "y": 4, "z": 7 },
        { "x": 6, "y": 1, "z": 8 },
        { "x": 3, "y": 1, "z": 5 },
        { "x": 3, "y": 5, "z": 7 },
        { "x": 2, "y": 6, "z": 3 },
        { "x": 8, "y": 0, "z": 4 },
        { "x": 3, "y": 3, "z": 1 },
        { "x": 3, "y": 6, "z": 8 },
        { "x": 3, "y": 3, "z": 6 },
        { "x": 5, "y": 0, "z": 8 },
        { "x": 7, "y": 1, "z": 7 },
        { "x": 3, "y": 4, "z": 0 },
        { "x": 3, "y": 2, "z": 2 },
        { "x": 2, "y": 8, "z": 1 },
        { "x": 7, "y": 2, "z": 3 },
        { "x": 6, "y": 2, "z": 8 },
        { "x": 5, "y": 4, "z": 7 },
        { "x": 0, "y": 6, "z": 0 },
        { "x": 3, "y": 7, "z": 6 },
        { "x": 5, "y": 2, "z": 5 },
        { "x": 8, "y": 7, "z": 5 },
        { "x": 0, "y": 1, "z": 7 },
        { "x": 7, "y": 6, "z": 2 },
        { "x": 6, "y": 7, "z": 5 },
        { "x": 4, "y": 5, "z": 2 },
        { "x": 0, "y": 7, "z": 0 },
        { "x": 0, "y": 8, "z": 4 },
        { "x": 8, "y": 3, "z": 2 },
        { "x": 1, "y": 8, "z": 5 },
        { "x": 1, "y": 3, "z": 7 },
        { "x": 1, "y": 5, "z": 8 },
        { "x": 2, "y": 2, "z": 5 },
        { "x": 5, "y": 0, "z": 4 },
        { "x": 0, "y": 5, "z": 4 },
        { "x": 3, "y": 4, "z": 7 },
        { "x": 8, "y": 1, "z": 1 },
        { "x": 8, "y": 3, "z": 4 },
        { "x": 5, "y": 5, "z": 2 },
        { "x": 5, "y": 7, "z": 8 },
        { "x": 7, "y": 0, "z": 8 },
        { "x": 5, "y": 7, "z": 2 },
        { "x": 6, "y": 6, "z": 0 },
        { "x": 7, "y": 5, "z": 7 },
        { "x": 0, "y": 4, "z": 0 },
        { "x": 1, "y": 0, "z": 4 },
        { "x": 1, "y": 0, "z": 8 },
        { "x": 1, "y": 7, "z": 7 },
        { "x": 1, "y": 7, "z": 1 },
        { "x": 0, "y": 6, "z": 2 },
        { "x": 4, "y": 4, "z": 4 },
        { "x": 0, "y": 7, "z": 3 },
        { "x": 2, "y": 7, "z": 0 },
        { "x": 4, "y": 1, "z": 3 },
        { "x": 0, "y": 1, "z": 1 },
        { "x": 4, "y": 7, "z": 6 },
        { "x": 4, "y": 1, "z": 4 },
        { "x": 3, "y": 3, "z": 7 },
        { "x": 6, "y": 2, "z": 6 },
        { "x": 2, "y": 3, "z": 2 },
        { "x": 0, "y": 4, "z": 5 },
        { "x": 1, "y": 0, "z": 7 },
        { "x": 6, "y": 8, "z": 7 },
        { "x": 0, "y": 5, "z": 5 },
        { "x": 5, "y": 3, "z": 2 },
        { "x": 8, "y": 4, "z": 6 },
        { "x": 6, "y": 7, "z": 6 },
        { "x": 6, "y": 0, "z": 1 },
        { "x": 4, "y": 8, "z": 1 },
        { "x": 1, "y": 2, "z": 2 },
        { "x": 4, "y": 6, "z": 1 },
        { "x": 3, "y": 2, "z": 6 },
        { "x": 7, "y": 1, "z": 6 },
        { "x": 3, "y": 1, "z": 2 },
        { "x": 3, "y": 1, "z": 3 },
        { "x": 5, "y": 2, "z": 6 },
        { "x": 2, "y": 5, "z": 4 },
        { "x": 7, "y": 5, "z": 0 },
        { "x": 0, "y": 4, "z": 2 },
        { "x": 1, "y": 4, "z": 6 },
        { "x": 8, "y": 6, "z": 1 },
        { "x": 0, "y": 5, "z": 0 },
        { "x": 7, "y": 7, "z": 6 },
        { "x": 0, "y": 5, "z": 8 },
        { "x": 8, "y": 7, "z": 7 },
        { "x": 0, "y": 5, "z": 7 },
        { "x": 5, "y": 5, "z": 3 },
        { "x": 8, "y": 0, "z": 1 },
        { "x": 8, "y": 4, "z": 0 },
        { "x": 3, "y": 5, "z": 1 },
        { "x": 8, "y": 2, "z": 2 },
        { "x": 7, "y": 4, "z": 4 },
        { "x": 1, "y": 8, "z": 8 },
        { "x": 1, "y": 6, "z": 3 },
        { "x": 8, "y": 0, "z": 3 },
        { "x": 5, "y": 4, "z": 2 },
        { "x": 8, "y": 2, "z": 7 },
        { "x": 8, "y": 3, "z": 1 },
        { "x": 5, "y": 6, "z": 5 },
        { "x": 0, "y": 7, "z": 8 },
        { "x": 3, "y": 2, "z": 3 },
        { "x": 7, "y": 4, "z": 3 },
        { "x": 3, "y": 3, "z": 2 },
        { "x": 8, "y": 6, "z": 7 },
        { "x": 4, "y": 6, "z": 2 },
        { "x": 2, "y": 7, "z": 3 },
        { "x": 7, "y": 7, "z": 1 },
        { "x": 3, "y": 3, "z": 0 },
        { "x": 7, "y": 0, "z": 7 },
        { "x": 2, "y": 7, "z": 2 },
        { "x": 3, "y": 8, "z": 5 },
        { "x": 0, "y": 0, "z": 0 },
        { "x": 1, "y": 5, "z": 7 },
        { "x": 7, "y": 1, "z": 2 }
      ]
    }
  ]
};

  // Source capture: mini
  levelTemplates.mini = {
  "port_status": "being-ported",
  "portNotes": [
    "5\u00d75\u00d77 chamber with eight walls and five stones; original sideways start restored.",
    "No route certified within the bounded search; full puzzle completion remains unverified."
  ],
  "size": { "x": 5, "y": 5, "z": 7 },
  "intro": "mini",
  "help": [
    "$scale(1.5)mission:\nget to the exit!"
  ],
  "player": {
    "coordinates": { "x": 2, "y": 4, "z": 4 },
    "nostatus": 0,
    "orientation": "rotx90"
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 2, "y": 2, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 1, "y": 1, "z": 0 },
        { "x": 3, "y": 1, "z": 0 },
        { "x": 1, "y": 3, "z": 0 },
        { "x": 3, "y": 3, "z": 0 },
        { "x": 1, "y": 1, "z": 6 },
        { "x": 3, "y": 1, "z": 6 },
        { "x": 1, "y": 3, "z": 6 },
        { "x": 3, "y": 3, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 1, "y": 1, "z": 1 },
        { "x": 3, "y": 1, "z": 1 },
        { "x": 1, "y": 3, "z": 1 },
        { "x": 3, "y": 3, "z": 1 },
        { "x": 2, "y": 4, "z": 0 }
      ]
    }
  ]
};

  // Source capture: blocks
  levelTemplates.blocks = {
  "port_status": "being-ported",
  "portNotes": [
    "Stepped walls and colored stones, including slippery stones. Slippery grabbing rules and slit visuals are missing."
  ],
  "size": { "x": 18, "y": 12, "z": 5 },
  "intro": "blocks",
  "help": [
    "As you might know: you can grab\nmost stones by pressing forward\nwhile jumping or falling down\nnext to them.",
    "The stone with the slits is a\nspecial stone, that means that\nyou can't grab it while jumping\nor falling",
    "The color of a stone doesn't matter."
  ],
  "player": {
    "coordinates": { "x": 1, "y": 6, "z": 2 },
    "nostatus": 0
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 7, "y": 9, "z": 2 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 1, "y": 1, "z": 2 },
        { "x": 4, "y": 2, "z": 2 },
        { "x": 7, "y": 2, "z": 2 },
        { "x": 0, "y": 0, "z": 2 },
        { "x": 1, "y": 0, "z": 2 },
        { "x": 2, "y": 0, "z": 2 },
        { "x": 3, "y": 0, "z": 2 },
        { "x": 4, "y": 0, "z": 2 },
        { "x": 5, "y": 0, "z": 2 },
        { "x": 6, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 10, "y": 2, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "slippery": true
      },
      "at": [
        { "x": 13, "y": 2, "z": 2 },
        { "x": 15, "y": 4, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0,
          1,
          0,
          0.8
        ],
        "slippery": true
      },
      "at": [
        { "x": 13, "y": 7, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1,
          0,
          0,
          0.8
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 7, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0,
          0,
          1,
          0.8
        ],
        "slippery": true
      },
      "at": [
        { "x": 7, "y": 7, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.5,
          0,
          0.8
        ]
      },
      "at": [
        { "x": 4, "y": 7, "z": 2 }
      ]
    }
  ]
};

  // Source capture: bombs
  levelTemplates.bombs = {
  "port_status": "being-ported",
  "portNotes": [
    "Three bombs in the original chamber. Blast propagation is simplified; original bomb-assisted route is unverified."
  ],
  "size": { "x": 9, "y": 9, "z": 9 },
  "intro": "bombs",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nto get to the exit,\nuse the bombs"
  ],
  "player": {
    "coordinates": { "x": 4, "y": 0, "z": 4 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 4, "y": 6, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "bomb"
      },
      "at": [
        { "x": 4, "y": 0, "z": 6 },
        { "x": 4, "y": 0, "z": 2 },
        { "x": 1, "y": 2, "z": 4 }
      ]
    }
  ]
};

  // Source capture: sandbox
  levelTemplates.sandbox = {
  "port_status": "being-ported",
  "portNotes": [
    "Sandbox border, twelve stones and switch retained. Nine-cell occupancy callback is missing; exit remains closed."
  ],
  "size": { "x": 9, "y": 9, "z": 6 },
  "intro": "sandbox",
  "help": [
    "$scale(1.5)mission:\nactivate the exit!\n\nAll you have to do\nis to put nine stones\ninto the sandbox\nand shoot at the switch"
  ],
  "player": {
    "coordinates": { "x": 4, "y": 6, "z": 2 },
    "orientation": "rotx90"
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": false
      },
      "at": [
        { "x": 4, "y": 4, "z": 3 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "switch",
        "sourceEvents": [
          "switched"
        ]
      },
      "at": [
        { "x": 0, "y": 5, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 2, "y": 2, "z": 0 },
        { "x": 2, "y": 3, "z": 0 },
        { "x": 2, "y": 4, "z": 0 },
        { "x": 2, "y": 5, "z": 0 },
        { "x": 2, "y": 6, "z": 0 },
        { "x": 3, "y": 6, "z": 0 },
        { "x": 4, "y": 6, "z": 0 },
        { "x": 5, "y": 6, "z": 0 },
        { "x": 6, "y": 6, "z": 0 },
        { "x": 6, "y": 5, "z": 0 },
        { "x": 6, "y": 4, "z": 0 },
        { "x": 6, "y": 3, "z": 0 },
        { "x": 6, "y": 2, "z": 0 },
        { "x": 5, "y": 2, "z": 0 },
        { "x": 4, "y": 2, "z": 0 },
        { "x": 3, "y": 2, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 3, "y": 4, "z": 2 },
        { "x": 3, "y": 5, "z": 1 },
        { "x": 5, "y": 3, "z": 1 },
        { "x": 5, "y": 4, "z": 2 },
        { "x": 3, "y": 6, "z": 1 },
        { "x": 4, "y": 6, "z": 1 },
        { "x": 3, "y": 2, "z": 1 },
        { "x": 5, "y": 2, "z": 1 },
        { "x": 6, "y": 4, "z": 1 },
        { "x": 6, "y": 3, "z": 1 },
        { "x": 5, "y": 1, "z": 0 },
        { "x": 1, "y": 7, "z": 0 }
      ]
    }
  ]
};

  // Source capture: energy
  levelTemplates.energy = {
  "port_status": "being-ported",
  "portNotes": [
    "Tall cross-shaped room, eight mutants and four switches. Four-switch exit condition translated; mutant AI/damage are missing."
  ],
  "size": { "x": 9, "y": 17, "z": 9 },
  "intro": "energy",
  "help": [
    "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit,\nshoot the 4 switches"
  ],
  "player": {
    "orientation": "roty90",
    "coordinates": { "x": 4, "y": 9, "z": 4 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": false
      },
      "at": [
        { "x": 4, "y": 8, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 0, "y": 8, "z": 4 },
        { "x": 1, "y": 8, "z": 4 },
        { "x": 2, "y": 8, "z": 4 },
        { "x": 3, "y": 8, "z": 4 },
        { "x": 5, "y": 8, "z": 4 },
        { "x": 6, "y": 8, "z": 4 },
        { "x": 7, "y": 8, "z": 4 },
        { "x": 8, "y": 8, "z": 4 },
        { "x": 4, "y": 8, "z": 0 },
        { "x": 4, "y": 8, "z": 1 },
        { "x": 4, "y": 8, "z": 2 },
        { "x": 4, "y": 8, "z": 3 },
        { "x": 4, "y": 8, "z": 5 },
        { "x": 4, "y": 8, "z": 6 },
        { "x": 4, "y": 8, "z": 7 },
        { "x": 4, "y": 8, "z": 8 },
        { "x": 4, "y": 11, "z": 4 },
        { "x": 4, "y": 14, "z": 4 },
        { "x": 4, "y": 4, "z": 4 },
        { "x": 6, "y": 3, "z": 5 },
        { "x": 3, "y": 3, "z": 6 },
        { "x": 2, "y": 3, "z": 3 },
        { "x": 5, "y": 3, "z": 2 },
        { "x": 4, "y": 11, "z": 8 },
        { "x": 4, "y": 13, "z": 8 },
        { "x": 5, "y": 12, "z": 8 },
        { "x": 3, "y": 12, "z": 8 },
        { "x": 8, "y": 11, "z": 4 },
        { "x": 8, "y": 13, "z": 4 },
        { "x": 8, "y": 12, "z": 5 },
        { "x": 8, "y": 12, "z": 3 },
        { "x": 4, "y": 11, "z": 0 },
        { "x": 4, "y": 13, "z": 0 },
        { "x": 5, "y": 12, "z": 0 },
        { "x": 3, "y": 12, "z": 0 },
        { "x": 0, "y": 11, "z": 4 },
        { "x": 0, "y": 13, "z": 4 },
        { "x": 0, "y": 12, "z": 5 },
        { "x": 0, "y": 12, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "mutant"
      },
      "at": [
        { "x": 6, "y": 3, "z": 6 },
        { "x": 2, "y": 3, "z": 2 },
        { "x": 5, "y": 3, "z": 5 },
        { "x": 3, "y": 3, "z": 3 },
        { "x": 6, "y": 3, "z": 2 },
        { "x": 2, "y": 3, "z": 6 },
        { "x": 5, "y": 3, "z": 3 },
        { "x": 3, "y": 3, "z": 5 }
      ]
    },
    {
      "clone": {
        "type": "switch",
        "sourceEvents": [
          "switched"
        ],
        "switchGroup": "energy"
      },
      "at": [
        { "x": 0, "y": 12, "z": 4 },
        { "x": 8, "y": 12, "z": 4 },
        { "x": 4, "y": 12, "z": 0 },
        { "x": 4, "y": 12, "z": 8 }
      ]
    }
  ],
  "switchConditions": [
    {
      "group": "energy",
      "activeCount": 4,
      "exit": "exit"
    }
  ]
};

  // Source capture: maze
  levelTemplates.maze = {
  "port_status": "being-ported",
  "portNotes": [
    "4\u00d74\u00d74 maze with 29 walls and source light. Source inside-camera mode retained; point light is data only."
  ],
  "size": { "x": 4, "y": 4, "z": 4 },
  "intro": "maze",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nbut don't get confused :) !"
  ],
  "player": {
    "coordinates": { "x": 3, "y": 0, "z": 0 },
    "nostatus": 0,
    "orientation": "rotz90"
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 3, "y": 3, "z": 1 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 1, "y": 0, "z": 0 },
        { "x": 2, "y": 0, "z": 0 },
        { "x": 3, "y": 1, "z": 0 },
        { "x": 1, "y": 2, "z": 0 },
        { "x": 2, "y": 3, "z": 0 },
        { "x": 2, "y": 0, "z": 1 },
        { "x": 0, "y": 1, "z": 1 },
        { "x": 1, "y": 1, "z": 1 },
        { "x": 3, "y": 1, "z": 1 },
        { "x": 0, "y": 2, "z": 1 },
        { "x": 2, "y": 2, "z": 1 },
        { "x": 3, "y": 2, "z": 1 },
        { "x": 0, "y": 3, "z": 1 },
        { "x": 2, "y": 3, "z": 1 },
        { "x": 0, "y": 0, "z": 2 },
        { "x": 1, "y": 0, "z": 2 },
        { "x": 2, "y": 0, "z": 2 },
        { "x": 1, "y": 1, "z": 2 },
        { "x": 3, "y": 1, "z": 2 },
        { "x": 0, "y": 2, "z": 2 },
        { "x": 2, "y": 2, "z": 2 },
        { "x": 3, "y": 2, "z": 2 },
        { "x": 1, "y": 3, "z": 2 },
        { "x": 2, "y": 3, "z": 2 },
        { "x": 3, "y": 3, "z": 2 },
        { "x": 1, "y": 1, "z": 3 },
        { "x": 2, "y": 1, "z": 3 },
        { "x": 2, "y": 2, "z": 3 },
        { "x": 1, "y": 3, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "light"
      },
      "at": [
        { "x": 3, "y": 0, "z": 0 }
      ]
    }
  ],
  "cameraMode": "inside"
};

  // Source capture: love
  levelTemplates.love = {
  "port_status": "being-ported",
  "portNotes": [
    "Bomb and stone heart outlines, central mutant and peace exit. Mutant AI/damage and original bomb timing are incomplete."
  ],
  "size": { "x": 13, "y": 13, "z": 13 },
  "intro": "love",
  "help": [
    "$scale(1.5)mission:\nget to the exit!"
  ],
  "player": {
    "orientation": "rot0",
    "coordinates": { "x": 6, "y": 7, "z": 2 }
  },
  "exits": [
    {
      "clone": {
        "name": "peace",
        "active": true
      },
      "at": [
        { "x": 6, "y": 6, "z": 10 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "bomb"
      },
      "at": [
        { "x": 6, "y": 7, "z": 10 },
        { "x": 7, "y": 8, "z": 10 },
        { "x": 8, "y": 8, "z": 10 },
        { "x": 9, "y": 7, "z": 10 },
        { "x": 9, "y": 6, "z": 10 },
        { "x": 8, "y": 5, "z": 10 },
        { "x": 7, "y": 4, "z": 10 },
        { "x": 6, "y": 3, "z": 10 },
        { "x": 5, "y": 8, "z": 10 },
        { "x": 4, "y": 8, "z": 10 },
        { "x": 3, "y": 7, "z": 10 },
        { "x": 3, "y": 6, "z": 10 },
        { "x": 4, "y": 5, "z": 10 },
        { "x": 5, "y": 4, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 6, "y": 7, "z": 2 },
        { "x": 7, "y": 8, "z": 2 },
        { "x": 8, "y": 8, "z": 2 },
        { "x": 9, "y": 7, "z": 2 },
        { "x": 9, "y": 6, "z": 2 },
        { "x": 8, "y": 5, "z": 2 },
        { "x": 7, "y": 4, "z": 2 },
        { "x": 6, "y": 3, "z": 2 },
        { "x": 5, "y": 8, "z": 2 },
        { "x": 4, "y": 8, "z": 2 },
        { "x": 3, "y": 7, "z": 2 },
        { "x": 3, "y": 6, "z": 2 },
        { "x": 4, "y": 5, "z": 2 },
        { "x": 5, "y": 4, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "mutant"
      },
      "at": [
        { "x": 6, "y": 2, "z": 6 }
      ]
    }
  ]
};

  // Source capture: towers
  levelTemplates.towers = {
  "port_status": "being-ported",
  "portNotes": [
    "Original two stone towers and sideways starting orientation.",
    "No route certified within the bounded search; full puzzle completion remains unverified."
  ],
  "size": { "x": 9, "y": 9, "z": 15 },
  "intro": "towers",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nto get to the exit,\nmove the stones"
  ],
  "player": {
    "coordinates": { "x": 4, "y": 5, "z": 0 },
    "orientation": "rotx90"
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 3, "y": 5, "z": 0 },
        { "x": 3, "y": 5, "z": 1 },
        { "x": 3, "y": 5, "z": 2 },
        { "x": 5, "y": 5, "z": 0 },
        { "x": 5, "y": 5, "z": 1 },
        { "x": 5, "y": 5, "z": 2 },
        { "x": 5, "y": 5, "z": 3 }
      ]
    }
  ]
};

  // Source capture: edge
  levelTemplates.edge = {
  "port_status": "ported",
  "portNotes": [
    "Four colored corner stone clusters in the original cube.",
    "Completion route replay-verified in the shared simulator (12 actions)."
  ],
  "size": { "x": 7, "y": 7, "z": 7 },
  "intro": "edge",
  "help": [
    "$scale(1.5)mission:\nget to the exit!"
  ],
  "player": {
    "coordinates": { "x": 3, "y": 0, "z": 0 },
    "nostatus": 0,
    "orientation": "rot0"
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 3, "y": 3, "z": 3 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone",
        "color": [
          0.3,
          0,
          0.8999999999999999,
          0.8
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 1, "z": 2 },
        { "x": 5, "y": 5, "z": 4 },
        { "x": 5, "y": 1, "z": 2 },
        { "x": 1, "y": 5, "z": 4 },
        { "x": 1, "y": 2, "z": 1 },
        { "x": 5, "y": 4, "z": 5 },
        { "x": 5, "y": 2, "z": 1 },
        { "x": 1, "y": 4, "z": 5 },
        { "x": 2, "y": 1, "z": 1 },
        { "x": 4, "y": 5, "z": 5 },
        { "x": 4, "y": 1, "z": 1 },
        { "x": 2, "y": 5, "z": 5 },
        { "x": 2, "y": 2, "z": 2 },
        { "x": 4, "y": 4, "z": 4 },
        { "x": 4, "y": 2, "z": 2 },
        { "x": 2, "y": 4, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8999999999999999,
          0,
          0.3,
          0.8
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 2, "z": 2 },
        { "x": 5, "y": 4, "z": 4 },
        { "x": 5, "y": 2, "z": 2 },
        { "x": 1, "y": 4, "z": 4 },
        { "x": 2, "y": 1, "z": 2 },
        { "x": 4, "y": 5, "z": 4 },
        { "x": 4, "y": 1, "z": 2 },
        { "x": 2, "y": 5, "z": 4 },
        { "x": 2, "y": 2, "z": 1 },
        { "x": 4, "y": 4, "z": 5 },
        { "x": 4, "y": 2, "z": 1 },
        { "x": 2, "y": 4, "z": 5 }
      ]
    }
  ],
  "solution": [
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
  ]
};

  // Source capture: random
  levelTemplates.random = {
  "port_status": "being-ported",
  "portNotes": [
    "Original authored 21\u00d721\u00d721 stone field, eight corner walls and two source lights. Repeated source stone placements replace occupants; lights are data only."
  ],
  "size": { "x": 21, "y": 21, "z": 21 },
  "intro": "random",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\njump and try"
  ],
  "player": {
    "coordinates": { "x": 1, "y": 3, "z": 2 },
    "nostatus": 0
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 10, "y": 10, "z": 10 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 1, "y": 2, "z": 2 },
        { "x": 1, "y": 18, "z": 2 },
        { "x": 1, "y": 2, "z": 18 },
        { "x": 1, "y": 18, "z": 18 },
        { "x": 19, "y": 2, "z": 2 },
        { "x": 19, "y": 18, "z": 2 },
        { "x": 19, "y": 2, "z": 18 },
        { "x": 19, "y": 18, "z": 18 }
      ]
    },
    {
      "clone": {
        "type": "light"
      },
      "at": [
        { "x": 0, "y": 0, "z": 0 },
        { "x": 20, "y": 20, "z": 20 }
      ]
    },
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 3, "y": 2, "z": 6 },
        { "x": 5, "y": 2, "z": 6 },
        { "x": 12, "y": 4, "z": 6 },
        { "x": 14, "y": 16, "z": 6 },
        { "x": 2, "y": 16, "z": 4 },
        { "x": 2, "y": 14, "z": 15 },
        { "x": 2, "y": 12, "z": 13 },
        { "x": 4, "y": 4, "z": 13 },
        { "x": 6, "y": 4, "z": 11 },
        { "x": 8, "y": 4, "z": 13 },
        { "x": 8, "y": 6, "z": 11 },
        { "x": 6, "y": 6, "z": 4 },
        { "x": 8, "y": 5, "z": 4 },
        { "x": 10, "y": 6, "z": 4 },
        { "x": 8, "y": 17, "z": 4 },
        { "x": 10, "y": 15, "z": 4 },
        { "x": 8, "y": 15, "z": 6 },
        { "x": 6, "y": 13, "z": 12 },
        { "x": 5, "y": 15, "z": 12 },
        { "x": 5, "y": 15, "z": 14 },
        { "x": 3, "y": 17, "z": 14 },
        { "x": 15, "y": 15, "z": 14 },
        { "x": 9, "y": 13, "z": 14 },
        { "x": 7, "y": 13, "z": 14 },
        { "x": 7, "y": 13, "z": 7 },
        { "x": 7, "y": 12, "z": 5 },
        { "x": 5, "y": 12, "z": 11 },
        { "x": 7, "y": 7, "z": 11 },
        { "x": 5, "y": 7, "z": 13 },
        { "x": 3, "y": 17, "z": 13 },
        { "x": 18, "y": 17, "z": 11 },
        { "x": 18, "y": 7, "z": 9 },
        { "x": 15, "y": 9, "z": 9 },
        { "x": 17, "y": 11, "z": 9 },
        { "x": 15, "y": 11, "z": 5 },
        { "x": 13, "y": 11, "z": 3 },
        { "x": 2, "y": 11, "z": 5 },
        { "x": 2, "y": 13, "z": 18 },
        { "x": 7, "y": 11, "z": 18 },
        { "x": 7, "y": 9, "z": 18 },
        { "x": 3, "y": 11, "z": 18 },
        { "x": 3, "y": 9, "z": 10 },
        { "x": 3, "y": 11, "z": 4 },
        { "x": 3, "y": 8, "z": 8 },
        { "x": 3, "y": 6, "z": 16 },
        { "x": 3, "y": 4, "z": 5 },
        { "x": 18, "y": 6, "z": 5 },
        { "x": 15, "y": 8, "z": 5 },
        { "x": 10, "y": 6, "z": 6 },
        { "x": 8, "y": 6, "z": 10 },
        { "x": 8, "y": 4, "z": 7 },
        { "x": 5, "y": 4, "z": 14 },
        { "x": 8, "y": 6, "z": 14 },
        { "x": 7, "y": 4, "z": 14 },
        { "x": 7, "y": 6, "z": 16 },
        { "x": 8, "y": 8, "z": 16 },
        { "x": 8, "y": 10, "z": 7 },
        { "x": 8, "y": 13, "z": 9 },
        { "x": 8, "y": 15, "z": 4 },
        { "x": 8, "y": 13, "z": 10 },
        { "x": 8, "y": 7, "z": 8 },
        { "x": 8, "y": 13, "z": 6 },
        { "x": 4, "y": 13, "z": 8 },
        { "x": 4, "y": 15, "z": 15 },
        { "x": 4, "y": 18, "z": 17 },
        { "x": 6, "y": 18, "z": 2 },
        { "x": 10, "y": 18, "z": 4 },
        { "x": 4, "y": 18, "z": 2 },
        { "x": 18, "y": 16, "z": 2 },
        { "x": 18, "y": 18, "z": 4 },
        { "x": 16, "y": 5, "z": 4 },
        { "x": 16, "y": 3, "z": 4 },
        { "x": 3, "y": 5, "z": 4 },
        { "x": 3, "y": 7, "z": 2 },
        { "x": 13, "y": 9, "z": 2 },
        { "x": 8, "y": 9, "z": 4 },
        { "x": 2, "y": 9, "z": 2 },
        { "x": 2, "y": 11, "z": 2 },
        { "x": 4, "y": 11, "z": 12 },
        { "x": 17, "y": 9, "z": 12 },
        { "x": 17, "y": 7, "z": 14 },
        { "x": 15, "y": 7, "z": 8 },
        { "x": 17, "y": 13, "z": 15 },
        { "x": 6, "y": 11, "z": 15 },
        { "x": 6, "y": 13, "z": 10 },
        { "x": 6, "y": 2, "z": 12 },
        { "x": 12, "y": 4, "z": 10 },
        { "x": 14, "y": 4, "z": 11 },
        { "x": 14, "y": 2, "z": 12 },
        { "x": 3, "y": 4, "z": 12 },
        { "x": 5, "y": 14, "z": 12 },
        { "x": 7, "y": 7, "z": 12 },
        { "x": 7, "y": 5, "z": 2 },
        { "x": 3, "y": 3, "z": 2 },
        { "x": 3, "y": 5, "z": 9 },
        { "x": 5, "y": 5, "z": 7 },
        { "x": 7, "y": 6, "z": 7 },
        { "x": 10, "y": 4, "z": 7 },
        { "x": 12, "y": 10, "z": 7 },
        { "x": 3, "y": 12, "z": 7 },
        { "x": 5, "y": 12, "z": 7 },
        { "x": 13, "y": 12, "z": 5 },
        { "x": 8, "y": 12, "z": 3 },
        { "x": 8, "y": 10, "z": 2 },
        { "x": 8, "y": 8, "z": 13 },
        { "x": 8, "y": 10, "z": 15 },
        { "x": 8, "y": 12, "z": 17 },
        { "x": 10, "y": 3, "z": 17 },
        { "x": 11, "y": 3, "z": 15 },
        { "x": 13, "y": 3, "z": 13 },
        { "x": 13, "y": 5, "z": 12 },
        { "x": 14, "y": 7, "z": 12 },
        { "x": 16, "y": 18, "z": 12 },
        { "x": 14, "y": 18, "z": 6 },
        { "x": 12, "y": 18, "z": 14 },
        { "x": 16, "y": 18, "z": 16 },
        { "x": 2, "y": 18, "z": 14 },
        { "x": 10, "y": 18, "z": 16 },
        { "x": 7, "y": 18, "z": 14 },
        { "x": 5, "y": 18, "z": 5 },
        { "x": 3, "y": 18, "z": 12 },
        { "x": 5, "y": 16, "z": 12 },
        { "x": 5, "y": 16, "z": 14 },
        { "x": 5, "y": 14, "z": 2 },
        { "x": 8, "y": 12, "z": 2 },
        { "x": 10, "y": 12, "z": 12 },
        { "x": 12, "y": 6, "z": 12 },
        { "x": 14, "y": 6, "z": 12 },
        { "x": 14, "y": 9, "z": 14 },
        { "x": 14, "y": 3, "z": 12 },
        { "x": 11, "y": 3, "z": 10 },
        { "x": 9, "y": 3, "z": 12 },
        { "x": 7, "y": 3, "z": 12 },
        { "x": 7, "y": 5, "z": 3 },
        { "x": 7, "y": 7, "z": 14 },
        { "x": 7, "y": 15, "z": 12 },
        { "x": 18, "y": 17, "z": 12 },
        { "x": 17, "y": 17, "z": 10 },
        { "x": 17, "y": 15, "z": 15 },
        { "x": 10, "y": 13, "z": 15 },
        { "x": 8, "y": 11, "z": 15 },
        { "x": 8, "y": 7, "z": 17 },
        { "x": 18, "y": 9, "z": 17 },
        { "x": 16, "y": 7, "z": 17 },
        { "x": 14, "y": 3, "z": 17 },
        { "x": 16, "y": 6, "z": 17 },
        { "x": 15, "y": 8, "z": 14 },
        { "x": 17, "y": 8, "z": 12 },
        { "x": 14, "y": 8, "z": 14 },
        { "x": 16, "y": 2, "z": 14 },
        { "x": 14, "y": 6, "z": 14 },
        { "x": 16, "y": 6, "z": 14 },
        { "x": 18, "y": 6, "z": 12 },
        { "x": 18, "y": 4, "z": 12 },
        { "x": 3, "y": 6, "z": 12 },
        { "x": 3, "y": 6, "z": 14 },
        { "x": 6, "y": 6, "z": 12 },
        { "x": 10, "y": 4, "z": 12 },
        { "x": 3, "y": 2, "z": 12 },
        { "x": 3, "y": 2, "z": 10 },
        { "x": 2, "y": 2, "z": 8 },
        { "x": 2, "y": 4, "z": 13 },
        { "x": 15, "y": 4, "z": 15 },
        { "x": 13, "y": 4, "z": 15 },
        { "x": 13, "y": 2, "z": 7 },
        { "x": 11, "y": 15, "z": 7 },
        { "x": 9, "y": 11, "z": 7 },
        { "x": 7, "y": 2, "z": 7 },
        { "x": 9, "y": 2, "z": 14 },
        { "x": 9, "y": 4, "z": 18 },
        { "x": 9, "y": 2, "z": 15 },
        { "x": 7, "y": 2, "z": 4 },
        { "x": 5, "y": 4, "z": 4 },
        { "x": 5, "y": 6, "z": 2 },
        { "x": 12, "y": 4, "z": 2 },
        { "x": 3, "y": 4, "z": 4 },
        { "x": 3, "y": 12, "z": 6 },
        { "x": 2, "y": 12, "z": 4 },
        { "x": 15, "y": 14, "z": 4 },
        { "x": 7, "y": 12, "z": 4 },
        { "x": 9, "y": 12, "z": 2 },
        { "x": 14, "y": 12, "z": 4 },
        { "x": 12, "y": 3, "z": 4 },
        { "x": 14, "y": 10, "z": 4 },
        { "x": 16, "y": 10, "z": 13 },
        { "x": 15, "y": 8, "z": 13 },
        { "x": 15, "y": 6, "z": 8 },
        { "x": 17, "y": 15, "z": 8 },
        { "x": 6, "y": 15, "z": 10 },
        { "x": 3, "y": 13, "z": 10 },
        { "x": 15, "y": 15, "z": 10 },
        { "x": 19, "y": 4, "z": 4 }
      ]
    }
  ]
};

  // Source capture: plate
  levelTemplates.plate = {
  "port_status": "being-ported",
  "portNotes": [
    "Slippery 3\u00d73 plate and five bombs; original inverted start restored. Slippery grabbing/slit visuals and bomb timing are incomplete."
  ],
  "size": { "x": 7, "y": 7, "z": 9 },
  "intro": "plate",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nuse the bombs : )"
  ],
  "player": {
    "coordinates": { "x": 3, "y": 2, "z": 1 },
    "nostatus": 0,
    "orientation": "rotx270"
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 3, "y": 3, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.8,
          0.3
        ],
        "slippery": true
      },
      "at": [
        { "x": 3, "y": 3, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6,
          0.6,
          0.6
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 4 },
        { "x": 4, "y": 3, "z": 4 },
        { "x": 4, "y": 2, "z": 4 },
        { "x": 3, "y": 2, "z": 4 },
        { "x": 2, "y": 2, "z": 4 },
        { "x": 2, "y": 3, "z": 4 },
        { "x": 2, "y": 4, "z": 4 },
        { "x": 3, "y": 4, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "bomb"
      },
      "at": [
        { "x": 3, "y": 4, "z": 0 },
        { "x": 3, "y": 2, "z": 0 },
        { "x": 4, "y": 3, "z": 0 },
        { "x": 2, "y": 3, "z": 0 },
        { "x": 3, "y": 3, "z": 2 }
      ]
    }
  ]
};

  // Source capture: nice
  levelTemplates.nice = {
  "port_status": "being-ported",
  "portNotes": [
    "Four diagonal wall lines and nested wall/stone polygons; center deletion retained.",
    "No route certified within the bounded search; full puzzle completion remains unverified."
  ],
  "size": { "x": 11, "y": 11, "z": 11 },
  "intro": "nice",
  "help": [
    "$scale(1.5)mission:\nget to the exit!"
  ],
  "player": {
    "coordinates": { "x": 7, "y": 4, "z": 5 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 5, "y": 5, "z": 5 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 1, "y": 1, "z": 1 },
        { "x": 2, "y": 2, "z": 2 },
        { "x": 3, "y": 3, "z": 3 },
        { "x": 4, "y": 4, "z": 4 },
        { "x": 6, "y": 6, "z": 6 },
        { "x": 7, "y": 7, "z": 7 },
        { "x": 8, "y": 8, "z": 8 },
        { "x": 1, "y": 1, "z": 9 },
        { "x": 2, "y": 2, "z": 8 },
        { "x": 3, "y": 3, "z": 7 },
        { "x": 4, "y": 4, "z": 6 },
        { "x": 6, "y": 6, "z": 4 },
        { "x": 7, "y": 7, "z": 3 },
        { "x": 8, "y": 8, "z": 2 },
        { "x": 1, "y": 9, "z": 1 },
        { "x": 2, "y": 8, "z": 2 },
        { "x": 3, "y": 7, "z": 3 },
        { "x": 4, "y": 6, "z": 4 },
        { "x": 6, "y": 4, "z": 6 },
        { "x": 7, "y": 3, "z": 7 },
        { "x": 8, "y": 2, "z": 8 },
        { "x": 9, "y": 1, "z": 1 },
        { "x": 8, "y": 2, "z": 2 },
        { "x": 7, "y": 3, "z": 3 },
        { "x": 6, "y": 4, "z": 4 },
        { "x": 4, "y": 6, "z": 6 },
        { "x": 3, "y": 7, "z": 7 },
        { "x": 2, "y": 8, "z": 8 },
        { "x": 10, "y": 10, "z": 5 },
        { "x": 10, "y": 9, "z": 5 },
        { "x": 10, "y": 8, "z": 5 },
        { "x": 10, "y": 7, "z": 5 },
        { "x": 10, "y": 6, "z": 5 },
        { "x": 10, "y": 5, "z": 5 },
        { "x": 10, "y": 4, "z": 5 },
        { "x": 10, "y": 3, "z": 5 },
        { "x": 10, "y": 2, "z": 5 },
        { "x": 10, "y": 1, "z": 5 },
        { "x": 10, "y": 0, "z": 5 },
        { "x": 9, "y": 0, "z": 5 },
        { "x": 8, "y": 0, "z": 5 },
        { "x": 7, "y": 0, "z": 5 },
        { "x": 6, "y": 0, "z": 5 },
        { "x": 5, "y": 0, "z": 5 },
        { "x": 4, "y": 0, "z": 5 },
        { "x": 3, "y": 0, "z": 5 },
        { "x": 2, "y": 0, "z": 5 },
        { "x": 1, "y": 0, "z": 5 },
        { "x": 0, "y": 0, "z": 5 },
        { "x": 0, "y": 1, "z": 5 },
        { "x": 0, "y": 2, "z": 5 },
        { "x": 0, "y": 3, "z": 5 },
        { "x": 0, "y": 4, "z": 5 },
        { "x": 0, "y": 5, "z": 5 },
        { "x": 0, "y": 6, "z": 5 },
        { "x": 0, "y": 7, "z": 5 },
        { "x": 0, "y": 8, "z": 5 },
        { "x": 0, "y": 9, "z": 5 },
        { "x": 0, "y": 10, "z": 5 },
        { "x": 1, "y": 10, "z": 5 },
        { "x": 2, "y": 10, "z": 5 },
        { "x": 3, "y": 10, "z": 5 },
        { "x": 4, "y": 10, "z": 5 },
        { "x": 5, "y": 10, "z": 5 },
        { "x": 6, "y": 10, "z": 5 },
        { "x": 7, "y": 10, "z": 5 },
        { "x": 8, "y": 10, "z": 5 },
        { "x": 9, "y": 10, "z": 5 },
        { "x": 10, "y": 5, "z": 10 },
        { "x": 10, "y": 5, "z": 9 },
        { "x": 10, "y": 5, "z": 8 },
        { "x": 10, "y": 5, "z": 7 },
        { "x": 10, "y": 5, "z": 6 },
        { "x": 10, "y": 5, "z": 4 },
        { "x": 10, "y": 5, "z": 3 },
        { "x": 10, "y": 5, "z": 2 },
        { "x": 10, "y": 5, "z": 1 },
        { "x": 10, "y": 5, "z": 0 },
        { "x": 9, "y": 5, "z": 0 },
        { "x": 8, "y": 5, "z": 0 },
        { "x": 7, "y": 5, "z": 0 },
        { "x": 6, "y": 5, "z": 0 },
        { "x": 5, "y": 5, "z": 0 },
        { "x": 4, "y": 5, "z": 0 },
        { "x": 3, "y": 5, "z": 0 },
        { "x": 2, "y": 5, "z": 0 },
        { "x": 1, "y": 5, "z": 0 },
        { "x": 0, "y": 5, "z": 0 },
        { "x": 0, "y": 5, "z": 1 },
        { "x": 0, "y": 5, "z": 2 },
        { "x": 0, "y": 5, "z": 3 },
        { "x": 0, "y": 5, "z": 4 },
        { "x": 0, "y": 5, "z": 6 },
        { "x": 0, "y": 5, "z": 7 },
        { "x": 0, "y": 5, "z": 8 },
        { "x": 0, "y": 5, "z": 9 },
        { "x": 0, "y": 5, "z": 10 },
        { "x": 1, "y": 5, "z": 10 },
        { "x": 2, "y": 5, "z": 10 },
        { "x": 3, "y": 5, "z": 10 },
        { "x": 4, "y": 5, "z": 10 },
        { "x": 5, "y": 5, "z": 10 },
        { "x": 6, "y": 5, "z": 10 },
        { "x": 7, "y": 5, "z": 10 },
        { "x": 8, "y": 5, "z": 10 },
        { "x": 9, "y": 5, "z": 10 },
        { "x": 5, "y": 10, "z": 10 },
        { "x": 5, "y": 10, "z": 9 },
        { "x": 5, "y": 10, "z": 8 },
        { "x": 5, "y": 10, "z": 7 },
        { "x": 5, "y": 10, "z": 6 },
        { "x": 5, "y": 10, "z": 4 },
        { "x": 5, "y": 10, "z": 3 },
        { "x": 5, "y": 10, "z": 2 },
        { "x": 5, "y": 10, "z": 1 },
        { "x": 5, "y": 10, "z": 0 },
        { "x": 5, "y": 9, "z": 0 },
        { "x": 5, "y": 8, "z": 0 },
        { "x": 5, "y": 7, "z": 0 },
        { "x": 5, "y": 6, "z": 0 },
        { "x": 5, "y": 4, "z": 0 },
        { "x": 5, "y": 3, "z": 0 },
        { "x": 5, "y": 2, "z": 0 },
        { "x": 5, "y": 1, "z": 0 },
        { "x": 5, "y": 0, "z": 0 },
        { "x": 5, "y": 0, "z": 1 },
        { "x": 5, "y": 0, "z": 2 },
        { "x": 5, "y": 0, "z": 3 },
        { "x": 5, "y": 0, "z": 4 },
        { "x": 5, "y": 0, "z": 6 },
        { "x": 5, "y": 0, "z": 7 },
        { "x": 5, "y": 0, "z": 8 },
        { "x": 5, "y": 0, "z": 9 },
        { "x": 5, "y": 0, "z": 10 },
        { "x": 5, "y": 1, "z": 10 },
        { "x": 5, "y": 2, "z": 10 },
        { "x": 5, "y": 3, "z": 10 },
        { "x": 5, "y": 4, "z": 10 },
        { "x": 5, "y": 6, "z": 10 },
        { "x": 5, "y": 7, "z": 10 },
        { "x": 5, "y": 8, "z": 10 },
        { "x": 5, "y": 9, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 8, "y": 8, "z": 5 },
        { "x": 8, "y": 7, "z": 5 },
        { "x": 8, "y": 6, "z": 5 },
        { "x": 8, "y": 5, "z": 5 },
        { "x": 8, "y": 4, "z": 5 },
        { "x": 8, "y": 3, "z": 5 },
        { "x": 8, "y": 2, "z": 5 },
        { "x": 7, "y": 2, "z": 5 },
        { "x": 6, "y": 2, "z": 5 },
        { "x": 5, "y": 2, "z": 5 },
        { "x": 4, "y": 2, "z": 5 },
        { "x": 3, "y": 2, "z": 5 },
        { "x": 2, "y": 2, "z": 5 },
        { "x": 2, "y": 3, "z": 5 },
        { "x": 2, "y": 4, "z": 5 },
        { "x": 2, "y": 5, "z": 5 },
        { "x": 2, "y": 6, "z": 5 },
        { "x": 2, "y": 7, "z": 5 },
        { "x": 2, "y": 8, "z": 5 },
        { "x": 3, "y": 8, "z": 5 },
        { "x": 4, "y": 8, "z": 5 },
        { "x": 5, "y": 8, "z": 5 },
        { "x": 6, "y": 8, "z": 5 },
        { "x": 7, "y": 8, "z": 5 },
        { "x": 8, "y": 5, "z": 8 },
        { "x": 8, "y": 5, "z": 7 },
        { "x": 8, "y": 5, "z": 6 },
        { "x": 8, "y": 5, "z": 4 },
        { "x": 8, "y": 5, "z": 3 },
        { "x": 8, "y": 5, "z": 2 },
        { "x": 7, "y": 5, "z": 2 },
        { "x": 6, "y": 5, "z": 2 },
        { "x": 5, "y": 5, "z": 2 },
        { "x": 4, "y": 5, "z": 2 },
        { "x": 3, "y": 5, "z": 2 },
        { "x": 2, "y": 5, "z": 2 },
        { "x": 2, "y": 5, "z": 3 },
        { "x": 2, "y": 5, "z": 4 },
        { "x": 2, "y": 5, "z": 6 },
        { "x": 2, "y": 5, "z": 7 },
        { "x": 2, "y": 5, "z": 8 },
        { "x": 3, "y": 5, "z": 8 },
        { "x": 4, "y": 5, "z": 8 },
        { "x": 5, "y": 5, "z": 8 },
        { "x": 6, "y": 5, "z": 8 },
        { "x": 7, "y": 5, "z": 8 },
        { "x": 5, "y": 8, "z": 8 },
        { "x": 5, "y": 8, "z": 7 },
        { "x": 5, "y": 8, "z": 6 },
        { "x": 5, "y": 8, "z": 4 },
        { "x": 5, "y": 8, "z": 3 },
        { "x": 5, "y": 8, "z": 2 },
        { "x": 5, "y": 7, "z": 2 },
        { "x": 5, "y": 6, "z": 2 },
        { "x": 5, "y": 4, "z": 2 },
        { "x": 5, "y": 3, "z": 2 },
        { "x": 5, "y": 2, "z": 2 },
        { "x": 5, "y": 2, "z": 3 },
        { "x": 5, "y": 2, "z": 4 },
        { "x": 5, "y": 2, "z": 6 },
        { "x": 5, "y": 2, "z": 7 },
        { "x": 5, "y": 2, "z": 8 },
        { "x": 5, "y": 3, "z": 8 },
        { "x": 5, "y": 4, "z": 8 },
        { "x": 5, "y": 6, "z": 8 },
        { "x": 5, "y": 7, "z": 8 }
      ]
    }
  ]
};

  // Source capture: entropy
  levelTemplates.entropy = {
  "port_status": "being-ported",
  "portNotes": [
    "Dense patterned slippery stone volume. Slippery grabbing rules and slit visuals are missing."
  ],
  "size": { "x": 9, "y": 9, "z": 9 },
  "intro": "entropy",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nuse the stones to reach it"
  ],
  "player": {
    "coordinates": { "x": 4, "y": 3, "z": 4 },
    "nostatus": 0
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone",
        "color": [
          0,
          0.8,
          0.2,
          0.8
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 0, "z": 0 },
        { "x": 0, "y": 0, "z": 2 },
        { "x": 0, "y": 0, "z": 4 },
        { "x": 0, "y": 0, "z": 6 },
        { "x": 0, "y": 0, "z": 8 },
        { "x": 0, "y": 1, "z": 1 },
        { "x": 0, "y": 1, "z": 3 },
        { "x": 0, "y": 1, "z": 5 },
        { "x": 0, "y": 1, "z": 7 },
        { "x": 0, "y": 2, "z": 0 },
        { "x": 0, "y": 2, "z": 2 },
        { "x": 0, "y": 2, "z": 4 },
        { "x": 0, "y": 2, "z": 6 },
        { "x": 0, "y": 2, "z": 8 },
        { "x": 0, "y": 3, "z": 1 },
        { "x": 0, "y": 3, "z": 3 },
        { "x": 0, "y": 3, "z": 5 },
        { "x": 0, "y": 3, "z": 7 },
        { "x": 0, "y": 4, "z": 0 },
        { "x": 0, "y": 4, "z": 2 },
        { "x": 0, "y": 4, "z": 4 },
        { "x": 0, "y": 4, "z": 6 },
        { "x": 0, "y": 4, "z": 8 },
        { "x": 0, "y": 5, "z": 1 },
        { "x": 0, "y": 5, "z": 3 },
        { "x": 0, "y": 5, "z": 5 },
        { "x": 0, "y": 5, "z": 7 },
        { "x": 0, "y": 6, "z": 0 },
        { "x": 0, "y": 6, "z": 2 },
        { "x": 0, "y": 6, "z": 4 },
        { "x": 0, "y": 6, "z": 6 },
        { "x": 0, "y": 6, "z": 8 },
        { "x": 0, "y": 7, "z": 1 },
        { "x": 0, "y": 7, "z": 3 },
        { "x": 0, "y": 7, "z": 5 },
        { "x": 0, "y": 7, "z": 7 },
        { "x": 0, "y": 8, "z": 0 },
        { "x": 0, "y": 8, "z": 2 },
        { "x": 0, "y": 8, "z": 4 },
        { "x": 0, "y": 8, "z": 6 },
        { "x": 0, "y": 8, "z": 8 },
        { "x": 1, "y": 0, "z": 1 },
        { "x": 1, "y": 0, "z": 3 },
        { "x": 1, "y": 0, "z": 5 },
        { "x": 1, "y": 0, "z": 7 },
        { "x": 1, "y": 1, "z": 0 },
        { "x": 1, "y": 1, "z": 2 },
        { "x": 1, "y": 1, "z": 4 },
        { "x": 1, "y": 1, "z": 6 },
        { "x": 1, "y": 1, "z": 8 },
        { "x": 1, "y": 2, "z": 1 },
        { "x": 1, "y": 2, "z": 3 },
        { "x": 1, "y": 2, "z": 5 },
        { "x": 1, "y": 2, "z": 7 },
        { "x": 1, "y": 3, "z": 0 },
        { "x": 1, "y": 3, "z": 2 },
        { "x": 1, "y": 3, "z": 4 },
        { "x": 1, "y": 3, "z": 6 },
        { "x": 1, "y": 3, "z": 8 },
        { "x": 1, "y": 4, "z": 1 },
        { "x": 1, "y": 4, "z": 3 },
        { "x": 1, "y": 4, "z": 5 },
        { "x": 1, "y": 4, "z": 7 },
        { "x": 1, "y": 5, "z": 0 },
        { "x": 1, "y": 5, "z": 2 },
        { "x": 1, "y": 5, "z": 4 },
        { "x": 1, "y": 5, "z": 6 },
        { "x": 1, "y": 5, "z": 8 },
        { "x": 1, "y": 6, "z": 1 },
        { "x": 1, "y": 6, "z": 3 },
        { "x": 1, "y": 6, "z": 5 },
        { "x": 1, "y": 6, "z": 7 },
        { "x": 1, "y": 7, "z": 0 },
        { "x": 1, "y": 7, "z": 2 },
        { "x": 1, "y": 7, "z": 4 },
        { "x": 1, "y": 7, "z": 6 },
        { "x": 1, "y": 7, "z": 8 },
        { "x": 1, "y": 8, "z": 1 },
        { "x": 1, "y": 8, "z": 3 },
        { "x": 1, "y": 8, "z": 5 },
        { "x": 1, "y": 8, "z": 7 },
        { "x": 2, "y": 0, "z": 0 },
        { "x": 2, "y": 0, "z": 2 },
        { "x": 2, "y": 0, "z": 4 },
        { "x": 2, "y": 0, "z": 6 },
        { "x": 2, "y": 0, "z": 8 },
        { "x": 2, "y": 1, "z": 1 },
        { "x": 2, "y": 1, "z": 3 },
        { "x": 2, "y": 1, "z": 5 },
        { "x": 2, "y": 1, "z": 7 },
        { "x": 2, "y": 2, "z": 0 },
        { "x": 2, "y": 2, "z": 8 },
        { "x": 2, "y": 3, "z": 1 },
        { "x": 2, "y": 3, "z": 7 },
        { "x": 2, "y": 4, "z": 0 },
        { "x": 2, "y": 4, "z": 8 },
        { "x": 2, "y": 5, "z": 1 },
        { "x": 2, "y": 5, "z": 7 },
        { "x": 2, "y": 6, "z": 0 },
        { "x": 2, "y": 6, "z": 8 },
        { "x": 2, "y": 7, "z": 1 },
        { "x": 2, "y": 7, "z": 3 },
        { "x": 2, "y": 7, "z": 5 },
        { "x": 2, "y": 7, "z": 7 },
        { "x": 2, "y": 8, "z": 0 },
        { "x": 2, "y": 8, "z": 2 },
        { "x": 2, "y": 8, "z": 4 },
        { "x": 2, "y": 8, "z": 6 },
        { "x": 2, "y": 8, "z": 8 },
        { "x": 3, "y": 0, "z": 1 },
        { "x": 3, "y": 0, "z": 3 },
        { "x": 3, "y": 0, "z": 5 },
        { "x": 3, "y": 0, "z": 7 },
        { "x": 3, "y": 1, "z": 0 },
        { "x": 3, "y": 1, "z": 2 },
        { "x": 3, "y": 1, "z": 4 },
        { "x": 3, "y": 1, "z": 6 },
        { "x": 3, "y": 1, "z": 8 },
        { "x": 3, "y": 2, "z": 1 },
        { "x": 3, "y": 2, "z": 7 },
        { "x": 3, "y": 3, "z": 0 },
        { "x": 3, "y": 3, "z": 8 },
        { "x": 3, "y": 4, "z": 1 },
        { "x": 3, "y": 4, "z": 7 },
        { "x": 3, "y": 5, "z": 0 },
        { "x": 3, "y": 5, "z": 8 },
        { "x": 3, "y": 6, "z": 1 },
        { "x": 3, "y": 6, "z": 7 },
        { "x": 3, "y": 7, "z": 0 },
        { "x": 3, "y": 7, "z": 2 },
        { "x": 3, "y": 7, "z": 4 },
        { "x": 3, "y": 7, "z": 6 },
        { "x": 3, "y": 7, "z": 8 },
        { "x": 3, "y": 8, "z": 1 },
        { "x": 3, "y": 8, "z": 3 },
        { "x": 3, "y": 8, "z": 5 },
        { "x": 3, "y": 8, "z": 7 },
        { "x": 4, "y": 0, "z": 0 },
        { "x": 4, "y": 0, "z": 2 },
        { "x": 4, "y": 0, "z": 4 },
        { "x": 4, "y": 0, "z": 6 },
        { "x": 4, "y": 0, "z": 8 },
        { "x": 4, "y": 1, "z": 1 },
        { "x": 4, "y": 1, "z": 3 },
        { "x": 4, "y": 1, "z": 5 },
        { "x": 4, "y": 1, "z": 7 },
        { "x": 4, "y": 2, "z": 0 },
        { "x": 4, "y": 2, "z": 8 },
        { "x": 4, "y": 3, "z": 1 },
        { "x": 4, "y": 3, "z": 7 },
        { "x": 4, "y": 4, "z": 0 },
        { "x": 4, "y": 4, "z": 8 },
        { "x": 4, "y": 5, "z": 1 },
        { "x": 4, "y": 5, "z": 7 },
        { "x": 4, "y": 6, "z": 0 },
        { "x": 4, "y": 6, "z": 8 },
        { "x": 4, "y": 7, "z": 1 },
        { "x": 4, "y": 7, "z": 3 },
        { "x": 4, "y": 7, "z": 5 },
        { "x": 4, "y": 7, "z": 7 },
        { "x": 4, "y": 8, "z": 0 },
        { "x": 4, "y": 8, "z": 2 },
        { "x": 4, "y": 8, "z": 4 },
        { "x": 4, "y": 8, "z": 6 },
        { "x": 4, "y": 8, "z": 8 },
        { "x": 5, "y": 0, "z": 1 },
        { "x": 5, "y": 0, "z": 3 },
        { "x": 5, "y": 0, "z": 5 },
        { "x": 5, "y": 0, "z": 7 },
        { "x": 5, "y": 1, "z": 0 },
        { "x": 5, "y": 1, "z": 2 },
        { "x": 5, "y": 1, "z": 4 },
        { "x": 5, "y": 1, "z": 6 },
        { "x": 5, "y": 1, "z": 8 },
        { "x": 5, "y": 2, "z": 1 },
        { "x": 5, "y": 2, "z": 7 },
        { "x": 5, "y": 3, "z": 0 },
        { "x": 5, "y": 3, "z": 8 },
        { "x": 5, "y": 4, "z": 1 },
        { "x": 5, "y": 4, "z": 7 },
        { "x": 5, "y": 5, "z": 0 },
        { "x": 5, "y": 5, "z": 8 },
        { "x": 5, "y": 6, "z": 1 },
        { "x": 5, "y": 6, "z": 7 },
        { "x": 5, "y": 7, "z": 0 },
        { "x": 5, "y": 7, "z": 2 },
        { "x": 5, "y": 7, "z": 4 },
        { "x": 5, "y": 7, "z": 6 },
        { "x": 5, "y": 7, "z": 8 },
        { "x": 5, "y": 8, "z": 1 },
        { "x": 5, "y": 8, "z": 3 },
        { "x": 5, "y": 8, "z": 5 },
        { "x": 5, "y": 8, "z": 7 },
        { "x": 6, "y": 0, "z": 0 },
        { "x": 6, "y": 0, "z": 2 },
        { "x": 6, "y": 0, "z": 4 },
        { "x": 6, "y": 0, "z": 6 },
        { "x": 6, "y": 0, "z": 8 },
        { "x": 6, "y": 1, "z": 1 },
        { "x": 6, "y": 1, "z": 3 },
        { "x": 6, "y": 1, "z": 5 },
        { "x": 6, "y": 1, "z": 7 },
        { "x": 6, "y": 2, "z": 0 },
        { "x": 6, "y": 2, "z": 8 },
        { "x": 6, "y": 3, "z": 1 },
        { "x": 6, "y": 3, "z": 7 },
        { "x": 6, "y": 4, "z": 0 },
        { "x": 6, "y": 4, "z": 8 },
        { "x": 6, "y": 5, "z": 1 },
        { "x": 6, "y": 5, "z": 7 },
        { "x": 6, "y": 6, "z": 0 },
        { "x": 6, "y": 6, "z": 8 },
        { "x": 6, "y": 7, "z": 1 },
        { "x": 6, "y": 7, "z": 3 },
        { "x": 6, "y": 7, "z": 5 },
        { "x": 6, "y": 7, "z": 7 },
        { "x": 6, "y": 8, "z": 0 },
        { "x": 6, "y": 8, "z": 2 },
        { "x": 6, "y": 8, "z": 4 },
        { "x": 6, "y": 8, "z": 6 },
        { "x": 6, "y": 8, "z": 8 },
        { "x": 7, "y": 0, "z": 1 },
        { "x": 7, "y": 0, "z": 3 },
        { "x": 7, "y": 0, "z": 5 },
        { "x": 7, "y": 0, "z": 7 },
        { "x": 7, "y": 1, "z": 0 },
        { "x": 7, "y": 1, "z": 2 },
        { "x": 7, "y": 1, "z": 4 },
        { "x": 7, "y": 1, "z": 6 },
        { "x": 7, "y": 1, "z": 8 },
        { "x": 7, "y": 2, "z": 1 },
        { "x": 7, "y": 2, "z": 3 },
        { "x": 7, "y": 2, "z": 5 },
        { "x": 7, "y": 2, "z": 7 },
        { "x": 7, "y": 3, "z": 0 },
        { "x": 7, "y": 3, "z": 2 },
        { "x": 7, "y": 3, "z": 4 },
        { "x": 7, "y": 3, "z": 6 },
        { "x": 7, "y": 3, "z": 8 },
        { "x": 7, "y": 4, "z": 1 },
        { "x": 7, "y": 4, "z": 3 },
        { "x": 7, "y": 4, "z": 5 },
        { "x": 7, "y": 4, "z": 7 },
        { "x": 7, "y": 5, "z": 0 },
        { "x": 7, "y": 5, "z": 2 },
        { "x": 7, "y": 5, "z": 4 },
        { "x": 7, "y": 5, "z": 6 },
        { "x": 7, "y": 5, "z": 8 },
        { "x": 7, "y": 6, "z": 1 },
        { "x": 7, "y": 6, "z": 3 },
        { "x": 7, "y": 6, "z": 5 },
        { "x": 7, "y": 6, "z": 7 },
        { "x": 7, "y": 7, "z": 0 },
        { "x": 7, "y": 7, "z": 2 },
        { "x": 7, "y": 7, "z": 4 },
        { "x": 7, "y": 7, "z": 6 },
        { "x": 7, "y": 7, "z": 8 },
        { "x": 7, "y": 8, "z": 1 },
        { "x": 7, "y": 8, "z": 3 },
        { "x": 7, "y": 8, "z": 5 },
        { "x": 7, "y": 8, "z": 7 },
        { "x": 8, "y": 0, "z": 0 },
        { "x": 8, "y": 0, "z": 2 },
        { "x": 8, "y": 0, "z": 4 },
        { "x": 8, "y": 0, "z": 6 },
        { "x": 8, "y": 0, "z": 8 },
        { "x": 8, "y": 1, "z": 1 },
        { "x": 8, "y": 1, "z": 3 },
        { "x": 8, "y": 1, "z": 5 },
        { "x": 8, "y": 1, "z": 7 },
        { "x": 8, "y": 2, "z": 0 },
        { "x": 8, "y": 2, "z": 2 },
        { "x": 8, "y": 2, "z": 4 },
        { "x": 8, "y": 2, "z": 6 },
        { "x": 8, "y": 2, "z": 8 },
        { "x": 8, "y": 3, "z": 1 },
        { "x": 8, "y": 3, "z": 3 },
        { "x": 8, "y": 3, "z": 5 },
        { "x": 8, "y": 3, "z": 7 },
        { "x": 8, "y": 4, "z": 0 },
        { "x": 8, "y": 4, "z": 2 },
        { "x": 8, "y": 4, "z": 4 },
        { "x": 8, "y": 4, "z": 6 },
        { "x": 8, "y": 4, "z": 8 },
        { "x": 8, "y": 5, "z": 1 },
        { "x": 8, "y": 5, "z": 3 },
        { "x": 8, "y": 5, "z": 5 },
        { "x": 8, "y": 5, "z": 7 },
        { "x": 8, "y": 6, "z": 0 },
        { "x": 8, "y": 6, "z": 2 },
        { "x": 8, "y": 6, "z": 4 },
        { "x": 8, "y": 6, "z": 6 },
        { "x": 8, "y": 6, "z": 8 },
        { "x": 8, "y": 7, "z": 1 },
        { "x": 8, "y": 7, "z": 3 },
        { "x": 8, "y": 7, "z": 5 },
        { "x": 8, "y": 7, "z": 7 },
        { "x": 8, "y": 8, "z": 0 },
        { "x": 8, "y": 8, "z": 2 },
        { "x": 8, "y": 8, "z": 4 },
        { "x": 8, "y": 8, "z": 6 },
        { "x": 8, "y": 8, "z": 8 }
      ]
    }
  ]
};

  // Source capture: slick
  levelTemplates.slick = {
  "port_status": "being-ported",
  "portNotes": [
    "Original slippery stone layers and central support. Slippery grabbing rules and slit visuals are missing."
  ],
  "size": { "x": 9, "y": 11, "z": 15 },
  "intro": "slick",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nThe green stone is slicky\nyou can't grab it while falling"
  ],
  "player": {
    "coordinates": { "x": 4, "y": 10, "z": 0 },
    "orientation": "rotx90"
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 4, "y": 5, "z": 11 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone",
        "color": [
          0,
          1,
          0,
          0.5
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 2, "z": 3 },
        { "x": 2, "y": 3, "z": 3 },
        { "x": 2, "y": 4, "z": 3 },
        { "x": 2, "y": 5, "z": 3 },
        { "x": 2, "y": 6, "z": 3 },
        { "x": 2, "y": 7, "z": 3 },
        { "x": 2, "y": 8, "z": 3 },
        { "x": 3, "y": 2, "z": 3 },
        { "x": 3, "y": 3, "z": 3 },
        { "x": 3, "y": 4, "z": 3 },
        { "x": 3, "y": 5, "z": 3 },
        { "x": 3, "y": 6, "z": 3 },
        { "x": 3, "y": 7, "z": 3 },
        { "x": 3, "y": 8, "z": 3 },
        { "x": 4, "y": 2, "z": 3 },
        { "x": 4, "y": 3, "z": 3 },
        { "x": 4, "y": 4, "z": 3 },
        { "x": 4, "y": 5, "z": 3 },
        { "x": 4, "y": 6, "z": 3 },
        { "x": 4, "y": 7, "z": 3 },
        { "x": 4, "y": 8, "z": 3 },
        { "x": 5, "y": 2, "z": 3 },
        { "x": 5, "y": 3, "z": 3 },
        { "x": 5, "y": 4, "z": 3 },
        { "x": 5, "y": 5, "z": 3 },
        { "x": 5, "y": 6, "z": 3 },
        { "x": 5, "y": 7, "z": 3 },
        { "x": 5, "y": 8, "z": 3 },
        { "x": 6, "y": 2, "z": 3 },
        { "x": 6, "y": 3, "z": 3 },
        { "x": 6, "y": 4, "z": 3 },
        { "x": 6, "y": 5, "z": 3 },
        { "x": 6, "y": 6, "z": 3 },
        { "x": 6, "y": 7, "z": 3 },
        { "x": 6, "y": 8, "z": 3 },
        { "x": 3, "y": 3, "z": 6 },
        { "x": 3, "y": 4, "z": 6 },
        { "x": 3, "y": 5, "z": 6 },
        { "x": 3, "y": 6, "z": 6 },
        { "x": 3, "y": 7, "z": 6 },
        { "x": 4, "y": 3, "z": 6 },
        { "x": 4, "y": 4, "z": 6 },
        { "x": 4, "y": 5, "z": 6 },
        { "x": 4, "y": 6, "z": 6 },
        { "x": 4, "y": 7, "z": 6 },
        { "x": 5, "y": 3, "z": 6 },
        { "x": 5, "y": 4, "z": 6 },
        { "x": 5, "y": 5, "z": 6 },
        { "x": 5, "y": 6, "z": 6 },
        { "x": 5, "y": 7, "z": 6 },
        { "x": 4, "y": 4, "z": 9 },
        { "x": 4, "y": 5, "z": 9 },
        { "x": 4, "y": 6, "z": 9 },
        { "x": 4, "y": 5, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 4, "y": 5, "z": 0 }
      ]
    }
  ]
};

  // Source capture: bridge
  levelTemplates.bridge = {
  "port_status": "being-ported",
  "portNotes": [
    "Original bridge stones, motor, generator and face-specific boundary wires. Electrical exit activation is missing; exit remains closed."
  ],
  "size": { "x": 9, "y": 9, "z": 5 },
  "intro": "bridge",
  "help": [
    "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit,\nfeed it with electricity:\n\nconnect the generator\nwith the motor\n\nplace a wire stone\nnext to the exit"
  ],
  "player": {
    "coordinates": { "x": 4, "y": 1, "z": 3 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": false
      },
      "at": [
        { "x": 4, "y": 3, "z": 2 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "motorGear",
        "face": "NY"
      },
      "at": [
        { "x": 3, "y": 8, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "motorCylinder",
        "face": "NY"
      },
      "at": [
        { "x": 3, "y": 7, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "generator",
        "face": "NY"
      },
      "at": [
        { "x": 5, "y": 8, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NY",
        "connections": 5
      },
      "at": [
        { "x": 4, "y": 8, "z": 0 },
        { "x": 4, "y": 8, "z": 1 },
        { "x": 4, "y": 8, "z": 2 },
        { "x": 4, "y": 8, "z": 3 },
        { "x": 4, "y": 8, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 5
      },
      "at": [
        { "x": 4, "y": 0, "z": 0 },
        { "x": 4, "y": 0, "z": 1 },
        { "x": 4, "y": 0, "z": 2 },
        { "x": 4, "y": 0, "z": 3 },
        { "x": 4, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PZ",
        "connections": 5
      },
      "at": [
        { "x": 4, "y": 0, "z": 0 },
        { "x": 4, "y": 1, "z": 0 },
        { "x": 4, "y": 2, "z": 0 },
        { "x": 4, "y": 3, "z": 0 },
        { "x": 4, "y": 4, "z": 0 },
        { "x": 4, "y": 5, "z": 0 },
        { "x": 4, "y": 6, "z": 0 },
        { "x": 4, "y": 7, "z": 0 },
        { "x": 4, "y": 8, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NZ",
        "connections": 5
      },
      "at": [
        { "x": 4, "y": 0, "z": 4 },
        { "x": 4, "y": 1, "z": 4 },
        { "x": 4, "y": 2, "z": 4 },
        { "x": 4, "y": 3, "z": 4 },
        { "x": 4, "y": 4, "z": 4 },
        { "x": 4, "y": 5, "z": 4 },
        { "x": 4, "y": 6, "z": 4 },
        { "x": 4, "y": 7, "z": 4 },
        { "x": 4, "y": 8, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wireStone"
      },
      "at": [
        { "x": 7, "y": 0, "z": 2 },
        { "x": 1, "y": 0, "z": 2 },
        { "x": 6, "y": 1, "z": 2 },
        { "x": 2, "y": 1, "z": 2 },
        { "x": 5, "y": 2, "z": 2 },
        { "x": 3, "y": 2, "z": 2 }
      ]
    }
  ]
};

  // Source capture: flower
  levelTemplates.flower = {
  "port_status": "being-ported",
  "portNotes": [
    "Original wall/stone columns and four slippery center stones. Slippery grabbing rules and slit visuals are missing."
  ],
  "size": { "x": 7, "y": 7, "z": 11 },
  "intro": "flower",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nthe green stone is slickyyou can't grab it while falling"
  ],
  "player": {
    "coordinates": { "x": 3, "y": 0, "z": 1 },
    "nostatus": 0,
    "orientation": "rot0"
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 3, "y": 3, "z": 5 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 2, "y": 2, "z": 0 },
        { "x": 2, "y": 2, "z": 1 },
        { "x": 2, "y": 2, "z": 2 },
        { "x": 2, "y": 2, "z": 8 },
        { "x": 2, "y": 2, "z": 9 },
        { "x": 2, "y": 2, "z": 10 },
        { "x": 2, "y": 4, "z": 0 },
        { "x": 2, "y": 4, "z": 1 },
        { "x": 2, "y": 4, "z": 2 },
        { "x": 2, "y": 4, "z": 8 },
        { "x": 2, "y": 4, "z": 9 },
        { "x": 2, "y": 4, "z": 10 },
        { "x": 4, "y": 2, "z": 0 },
        { "x": 4, "y": 2, "z": 1 },
        { "x": 4, "y": 2, "z": 2 },
        { "x": 4, "y": 2, "z": 8 },
        { "x": 4, "y": 2, "z": 9 },
        { "x": 4, "y": 2, "z": 10 },
        { "x": 4, "y": 4, "z": 0 },
        { "x": 4, "y": 4, "z": 1 },
        { "x": 4, "y": 4, "z": 2 },
        { "x": 4, "y": 4, "z": 8 },
        { "x": 4, "y": 4, "z": 9 },
        { "x": 4, "y": 4, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 1, "y": 1, "z": 0 },
        { "x": 1, "y": 1, "z": 1 },
        { "x": 1, "y": 1, "z": 2 },
        { "x": 1, "y": 1, "z": 8 },
        { "x": 1, "y": 1, "z": 9 },
        { "x": 1, "y": 1, "z": 10 },
        { "x": 1, "y": 5, "z": 0 },
        { "x": 1, "y": 5, "z": 1 },
        { "x": 1, "y": 5, "z": 2 },
        { "x": 1, "y": 5, "z": 8 },
        { "x": 1, "y": 5, "z": 9 },
        { "x": 1, "y": 5, "z": 10 },
        { "x": 5, "y": 1, "z": 0 },
        { "x": 5, "y": 1, "z": 1 },
        { "x": 5, "y": 1, "z": 2 },
        { "x": 5, "y": 1, "z": 8 },
        { "x": 5, "y": 1, "z": 9 },
        { "x": 5, "y": 1, "z": 10 },
        { "x": 5, "y": 5, "z": 0 },
        { "x": 5, "y": 5, "z": 1 },
        { "x": 5, "y": 5, "z": 2 },
        { "x": 5, "y": 5, "z": 8 },
        { "x": 5, "y": 5, "z": 9 },
        { "x": 5, "y": 5, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0,
          1,
          0,
          0.5
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 3, "z": 5 },
        { "x": 2, "y": 3, "z": 5 },
        { "x": 3, "y": 4, "z": 5 },
        { "x": 3, "y": 2, "z": 5 }
      ]
    }
  ]
};

  // Source capture: stones
  levelTemplates.stones = {
  "port_status": "being-ported",
  "portNotes": [
    "Four stepped square wall rings and eight stones; compound starting rotation restored.",
    "No route certified within the bounded search; full puzzle completion remains unverified."
  ],
  "size": { "x": 11, "y": 11, "z": 12 },
  "intro": "stones",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nto get to the exit,\nuse the stones",
    "to move a stone,\npress \"$key(push)\"\nwhile moving"
  ],
  "player": {
    "orientation": "rotx90*roty180",
    "coordinates": { "x": 5, "y": 4, "z": 5 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 5, "y": 5, "z": 6 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 4, "y": 4, "z": 0 },
        { "x": 5, "y": 4, "z": 0 },
        { "x": 6, "y": 4, "z": 0 },
        { "x": 6, "y": 5, "z": 0 },
        { "x": 6, "y": 6, "z": 0 },
        { "x": 5, "y": 6, "z": 0 },
        { "x": 4, "y": 6, "z": 0 },
        { "x": 4, "y": 5, "z": 0 },
        { "x": 3, "y": 3, "z": 1 },
        { "x": 4, "y": 3, "z": 1 },
        { "x": 5, "y": 3, "z": 1 },
        { "x": 6, "y": 3, "z": 1 },
        { "x": 7, "y": 3, "z": 1 },
        { "x": 7, "y": 4, "z": 1 },
        { "x": 7, "y": 5, "z": 1 },
        { "x": 7, "y": 6, "z": 1 },
        { "x": 7, "y": 7, "z": 1 },
        { "x": 6, "y": 7, "z": 1 },
        { "x": 5, "y": 7, "z": 1 },
        { "x": 4, "y": 7, "z": 1 },
        { "x": 3, "y": 7, "z": 1 },
        { "x": 3, "y": 6, "z": 1 },
        { "x": 3, "y": 5, "z": 1 },
        { "x": 3, "y": 4, "z": 1 },
        { "x": 2, "y": 2, "z": 2 },
        { "x": 3, "y": 2, "z": 2 },
        { "x": 4, "y": 2, "z": 2 },
        { "x": 5, "y": 2, "z": 2 },
        { "x": 6, "y": 2, "z": 2 },
        { "x": 7, "y": 2, "z": 2 },
        { "x": 8, "y": 2, "z": 2 },
        { "x": 8, "y": 3, "z": 2 },
        { "x": 8, "y": 4, "z": 2 },
        { "x": 8, "y": 5, "z": 2 },
        { "x": 8, "y": 6, "z": 2 },
        { "x": 8, "y": 7, "z": 2 },
        { "x": 8, "y": 8, "z": 2 },
        { "x": 7, "y": 8, "z": 2 },
        { "x": 6, "y": 8, "z": 2 },
        { "x": 5, "y": 8, "z": 2 },
        { "x": 4, "y": 8, "z": 2 },
        { "x": 3, "y": 8, "z": 2 },
        { "x": 2, "y": 8, "z": 2 },
        { "x": 2, "y": 7, "z": 2 },
        { "x": 2, "y": 6, "z": 2 },
        { "x": 2, "y": 5, "z": 2 },
        { "x": 2, "y": 4, "z": 2 },
        { "x": 2, "y": 3, "z": 2 },
        { "x": 1, "y": 1, "z": 3 },
        { "x": 2, "y": 1, "z": 3 },
        { "x": 3, "y": 1, "z": 3 },
        { "x": 4, "y": 1, "z": 3 },
        { "x": 5, "y": 1, "z": 3 },
        { "x": 6, "y": 1, "z": 3 },
        { "x": 7, "y": 1, "z": 3 },
        { "x": 8, "y": 1, "z": 3 },
        { "x": 9, "y": 1, "z": 3 },
        { "x": 9, "y": 2, "z": 3 },
        { "x": 9, "y": 3, "z": 3 },
        { "x": 9, "y": 4, "z": 3 },
        { "x": 9, "y": 5, "z": 3 },
        { "x": 9, "y": 6, "z": 3 },
        { "x": 9, "y": 7, "z": 3 },
        { "x": 9, "y": 8, "z": 3 },
        { "x": 9, "y": 9, "z": 3 },
        { "x": 8, "y": 9, "z": 3 },
        { "x": 7, "y": 9, "z": 3 },
        { "x": 6, "y": 9, "z": 3 },
        { "x": 5, "y": 9, "z": 3 },
        { "x": 4, "y": 9, "z": 3 },
        { "x": 3, "y": 9, "z": 3 },
        { "x": 2, "y": 9, "z": 3 },
        { "x": 1, "y": 9, "z": 3 },
        { "x": 1, "y": 8, "z": 3 },
        { "x": 1, "y": 7, "z": 3 },
        { "x": 1, "y": 6, "z": 3 },
        { "x": 1, "y": 5, "z": 3 },
        { "x": 1, "y": 4, "z": 3 },
        { "x": 1, "y": 3, "z": 3 },
        { "x": 1, "y": 2, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 3, "y": 5, "z": 3 },
        { "x": 7, "y": 5, "z": 3 },
        { "x": 5, "y": 7, "z": 3 },
        { "x": 5, "y": 3, "z": 3 },
        { "x": 4, "y": 5, "z": 2 },
        { "x": 6, "y": 5, "z": 2 },
        { "x": 5, "y": 6, "z": 2 },
        { "x": 5, "y": 4, "z": 2 }
      ]
    }
  ]
};

  // Source capture: walls
  levelTemplates.walls = {
  "port_status": "being-ported",
  "portNotes": [
    "Three full colored stone planes, including stone concealing the center exit.",
    "No route certified within the bounded search; full puzzle completion remains unverified."
  ],
  "size": { "x": 7, "y": 5, "z": 5 },
  "intro": "walls",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nThe exit is hidden\nin the middle of\nthe central wall"
  ],
  "player": {
    "coordinates": { "x": 0, "y": 0, "z": 2 },
    "nostatus": 0
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 3, "y": 2, "z": 2 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.0,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.0,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 0, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.0,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.0,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 0, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.0,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.1,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 1, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.1,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 1, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.1,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 1, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.1,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 1, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.1,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 1, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.2,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 2, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.2,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 2, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.2,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 2, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.2,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 2, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.2,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 2, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.30000000000000004,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 3, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.30000000000000004,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 3, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.30000000000000004,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 3, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.30000000000000004,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 3, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.30000000000000004,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 3, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.4,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 4, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.4,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 4, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.4,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 4, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.4,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 4, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.1,
          0.4,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 1, "y": 4, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.0,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.0,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 0, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.0,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.0,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 0, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.0,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.1,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 1, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.1,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 1, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.1,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 1, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.1,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 1, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.1,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 1, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.2,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 2, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.2,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 2, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.2,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 2, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.2,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 2, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.2,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 2, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.30000000000000004,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 3, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.30000000000000004,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 3, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.30000000000000004,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 3, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.30000000000000004,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 3, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.30000000000000004,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 3, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.4,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 4, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.4,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 4, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.4,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 4, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.4,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 4, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.30000000000000004,
          0.4,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 3, "y": 4, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.0,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.0,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 0, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.0,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.0,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 0, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.0,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.1,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 1, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.1,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 1, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.1,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 1, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.1,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 1, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.1,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 1, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.2,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 2, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.2,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 2, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.2,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 2, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.2,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 2, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.2,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 2, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.30000000000000004,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 3, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.30000000000000004,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 3, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.30000000000000004,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 3, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.30000000000000004,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 3, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.30000000000000004,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 3, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.4,
          0.0,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 4, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.4,
          0.1,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 4, "z": 1 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.4,
          0.2,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 4, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.4,
          0.30000000000000004,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 4, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.5,
          0.4,
          0.4,
          0.6
        ],
        "slippery": false
      },
      "at": [
        { "x": 5, "y": 4, "z": 4 }
      ]
    }
  ]
};

  // Source capture: grid
  levelTemplates.grid = {
  "port_status": "being-ported",
  "portNotes": [
    "Original interleaved 3D wall grids and six movable stones.",
    "No route certified within the bounded search; full puzzle completion remains unverified."
  ],
  "size": { "x": 9, "y": 9, "z": 9 },
  "intro": "grid",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nto get to the exit,\nuse the stones"
  ],
  "player": {
    "coordinates": { "x": 5, "y": 4, "z": 5 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 2, "y": 3, "z": 2 },
        { "x": 2, "y": 3, "z": 4 },
        { "x": 2, "y": 3, "z": 6 },
        { "x": 4, "y": 3, "z": 2 },
        { "x": 4, "y": 3, "z": 4 },
        { "x": 4, "y": 3, "z": 6 },
        { "x": 6, "y": 3, "z": 2 },
        { "x": 6, "y": 3, "z": 4 },
        { "x": 6, "y": 3, "z": 6 },
        { "x": 2, "y": 5, "z": 2 },
        { "x": 2, "y": 5, "z": 4 },
        { "x": 2, "y": 5, "z": 6 },
        { "x": 4, "y": 5, "z": 2 },
        { "x": 4, "y": 5, "z": 4 },
        { "x": 4, "y": 5, "z": 6 },
        { "x": 6, "y": 5, "z": 2 },
        { "x": 6, "y": 5, "z": 4 },
        { "x": 6, "y": 5, "z": 6 },
        { "x": 0, "y": 0, "z": 0 },
        { "x": 0, "y": 0, "z": 2 },
        { "x": 0, "y": 0, "z": 4 },
        { "x": 0, "y": 0, "z": 6 },
        { "x": 0, "y": 0, "z": 8 },
        { "x": 2, "y": 0, "z": 0 },
        { "x": 2, "y": 0, "z": 2 },
        { "x": 2, "y": 0, "z": 4 },
        { "x": 2, "y": 0, "z": 6 },
        { "x": 2, "y": 0, "z": 8 },
        { "x": 4, "y": 0, "z": 0 },
        { "x": 4, "y": 0, "z": 2 },
        { "x": 4, "y": 0, "z": 4 },
        { "x": 4, "y": 0, "z": 6 },
        { "x": 4, "y": 0, "z": 8 },
        { "x": 6, "y": 0, "z": 0 },
        { "x": 6, "y": 0, "z": 2 },
        { "x": 6, "y": 0, "z": 4 },
        { "x": 6, "y": 0, "z": 6 },
        { "x": 6, "y": 0, "z": 8 },
        { "x": 8, "y": 0, "z": 0 },
        { "x": 8, "y": 0, "z": 2 },
        { "x": 8, "y": 0, "z": 4 },
        { "x": 8, "y": 0, "z": 6 },
        { "x": 8, "y": 0, "z": 8 },
        { "x": 0, "y": 8, "z": 0 },
        { "x": 0, "y": 8, "z": 2 },
        { "x": 0, "y": 8, "z": 4 },
        { "x": 0, "y": 8, "z": 6 },
        { "x": 0, "y": 8, "z": 8 },
        { "x": 2, "y": 8, "z": 0 },
        { "x": 2, "y": 8, "z": 2 },
        { "x": 2, "y": 8, "z": 4 },
        { "x": 2, "y": 8, "z": 6 },
        { "x": 2, "y": 8, "z": 8 },
        { "x": 4, "y": 8, "z": 0 },
        { "x": 4, "y": 8, "z": 2 },
        { "x": 4, "y": 8, "z": 4 },
        { "x": 4, "y": 8, "z": 6 },
        { "x": 4, "y": 8, "z": 8 },
        { "x": 6, "y": 8, "z": 0 },
        { "x": 6, "y": 8, "z": 2 },
        { "x": 6, "y": 8, "z": 4 },
        { "x": 6, "y": 8, "z": 6 },
        { "x": 6, "y": 8, "z": 8 },
        { "x": 8, "y": 8, "z": 0 },
        { "x": 8, "y": 8, "z": 2 },
        { "x": 8, "y": 8, "z": 4 },
        { "x": 8, "y": 8, "z": 6 },
        { "x": 8, "y": 8, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 7, "y": 1, "z": 4 },
        { "x": 1, "y": 1, "z": 4 },
        { "x": 7, "y": 7, "z": 4 },
        { "x": 1, "y": 7, "z": 4 },
        { "x": 4, "y": 1, "z": 4 },
        { "x": 4, "y": 7, "z": 4 }
      ]
    }
  ]
};

  // Source capture: rings
  levelTemplates.rings = {
  "port_status": "ported",
  "portNotes": [
    "Original stacked square stone rings; endpoint-exclusive polygon construction retained.",
    "Completion route replay-verified in the shared simulator (4 actions)."
  ],
  "size": { "x": 9, "y": 7, "z": 9 },
  "intro": "rings",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nto get to the exit,\nuse the stones"
  ],
  "player": {
    "coordinates": { "x": 4, "y": 2, "z": 4 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 4, "y": 3, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 1, "y": 2, "z": 1 },
        { "x": 1, "y": 2, "z": 2 },
        { "x": 1, "y": 2, "z": 3 },
        { "x": 1, "y": 2, "z": 4 },
        { "x": 1, "y": 2, "z": 5 },
        { "x": 1, "y": 2, "z": 6 },
        { "x": 1, "y": 2, "z": 7 },
        { "x": 2, "y": 2, "z": 7 },
        { "x": 3, "y": 2, "z": 7 },
        { "x": 4, "y": 2, "z": 7 },
        { "x": 5, "y": 2, "z": 7 },
        { "x": 6, "y": 2, "z": 7 },
        { "x": 7, "y": 2, "z": 7 },
        { "x": 7, "y": 2, "z": 6 },
        { "x": 7, "y": 2, "z": 5 },
        { "x": 7, "y": 2, "z": 4 },
        { "x": 7, "y": 2, "z": 3 },
        { "x": 7, "y": 2, "z": 2 },
        { "x": 7, "y": 2, "z": 1 },
        { "x": 6, "y": 2, "z": 1 },
        { "x": 5, "y": 2, "z": 1 },
        { "x": 4, "y": 2, "z": 1 },
        { "x": 3, "y": 2, "z": 1 },
        { "x": 2, "y": 2, "z": 1 },
        { "x": 1, "y": 4, "z": 1 },
        { "x": 1, "y": 4, "z": 2 },
        { "x": 1, "y": 4, "z": 3 },
        { "x": 1, "y": 4, "z": 4 },
        { "x": 1, "y": 4, "z": 5 },
        { "x": 1, "y": 4, "z": 6 },
        { "x": 1, "y": 4, "z": 7 },
        { "x": 2, "y": 4, "z": 7 },
        { "x": 3, "y": 4, "z": 7 },
        { "x": 4, "y": 4, "z": 7 },
        { "x": 5, "y": 4, "z": 7 },
        { "x": 6, "y": 4, "z": 7 },
        { "x": 7, "y": 4, "z": 7 },
        { "x": 7, "y": 4, "z": 6 },
        { "x": 7, "y": 4, "z": 5 },
        { "x": 7, "y": 4, "z": 4 },
        { "x": 7, "y": 4, "z": 3 },
        { "x": 7, "y": 4, "z": 2 },
        { "x": 7, "y": 4, "z": 1 },
        { "x": 6, "y": 4, "z": 1 },
        { "x": 5, "y": 4, "z": 1 },
        { "x": 4, "y": 4, "z": 1 },
        { "x": 3, "y": 4, "z": 1 },
        { "x": 2, "y": 4, "z": 1 },
        { "x": 7, "y": 0, "z": 7 },
        { "x": 7, "y": 0, "z": 6 },
        { "x": 7, "y": 0, "z": 5 },
        { "x": 7, "y": 0, "z": 4 },
        { "x": 7, "y": 0, "z": 3 },
        { "x": 7, "y": 0, "z": 2 },
        { "x": 7, "y": 0, "z": 1 },
        { "x": 6, "y": 0, "z": 1 },
        { "x": 5, "y": 0, "z": 1 },
        { "x": 4, "y": 0, "z": 1 },
        { "x": 3, "y": 0, "z": 1 },
        { "x": 2, "y": 0, "z": 1 },
        { "x": 1, "y": 0, "z": 1 },
        { "x": 1, "y": 0, "z": 2 },
        { "x": 1, "y": 0, "z": 3 },
        { "x": 1, "y": 0, "z": 4 },
        { "x": 1, "y": 0, "z": 5 },
        { "x": 1, "y": 0, "z": 6 },
        { "x": 1, "y": 0, "z": 7 },
        { "x": 2, "y": 0, "z": 7 },
        { "x": 3, "y": 0, "z": 7 },
        { "x": 4, "y": 0, "z": 7 },
        { "x": 5, "y": 0, "z": 7 },
        { "x": 6, "y": 0, "z": 7 },
        { "x": 5, "y": 0, "z": 5 },
        { "x": 5, "y": 0, "z": 4 },
        { "x": 5, "y": 0, "z": 3 },
        { "x": 4, "y": 0, "z": 3 },
        { "x": 3, "y": 0, "z": 3 },
        { "x": 3, "y": 0, "z": 4 },
        { "x": 3, "y": 0, "z": 5 },
        { "x": 4, "y": 0, "z": 5 },
        { "x": 7, "y": 6, "z": 7 },
        { "x": 7, "y": 6, "z": 6 },
        { "x": 7, "y": 6, "z": 5 },
        { "x": 7, "y": 6, "z": 4 },
        { "x": 7, "y": 6, "z": 3 },
        { "x": 7, "y": 6, "z": 2 },
        { "x": 7, "y": 6, "z": 1 },
        { "x": 6, "y": 6, "z": 1 },
        { "x": 5, "y": 6, "z": 1 },
        { "x": 4, "y": 6, "z": 1 },
        { "x": 3, "y": 6, "z": 1 },
        { "x": 2, "y": 6, "z": 1 },
        { "x": 1, "y": 6, "z": 1 },
        { "x": 1, "y": 6, "z": 2 },
        { "x": 1, "y": 6, "z": 3 },
        { "x": 1, "y": 6, "z": 4 },
        { "x": 1, "y": 6, "z": 5 },
        { "x": 1, "y": 6, "z": 6 },
        { "x": 1, "y": 6, "z": 7 },
        { "x": 2, "y": 6, "z": 7 },
        { "x": 3, "y": 6, "z": 7 },
        { "x": 4, "y": 6, "z": 7 },
        { "x": 5, "y": 6, "z": 7 },
        { "x": 6, "y": 6, "z": 7 },
        { "x": 5, "y": 6, "z": 5 },
        { "x": 5, "y": 6, "z": 4 },
        { "x": 5, "y": 6, "z": 3 },
        { "x": 4, "y": 6, "z": 3 },
        { "x": 3, "y": 6, "z": 3 },
        { "x": 3, "y": 6, "z": 4 },
        { "x": 3, "y": 6, "z": 5 },
        { "x": 4, "y": 6, "z": 5 }
      ]
    }
  ],
  "solution": [
    "push backward",
    "move forward",
    "move forward",
    "jump far forward"
  ]
};

  // Source capture: core
  levelTemplates.core = {
  "port_status": "being-ported",
  "portNotes": [
    "Original layered stone core and carved cross passages. Fractional source range bounds use legacy integer truncation.",
    "No route certified within the bounded search; full puzzle completion remains unverified."
  ],
  "size": { "x": 9, "y": 9, "z": 9 },
  "intro": "core",
  "help": [
    "reach the exit\nto reach the exit, move the stones"
  ],
  "player": {
    "orientation": "rotz90",
    "coordinates": { "x": 5, "y": 5, "z": 5 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 1, "y": 1, "z": 1 },
        { "x": 1, "y": 1, "z": 2 },
        { "x": 1, "y": 1, "z": 3 },
        { "x": 1, "y": 1, "z": 4 },
        { "x": 1, "y": 1, "z": 5 },
        { "x": 1, "y": 1, "z": 6 },
        { "x": 1, "y": 1, "z": 7 },
        { "x": 2, "y": 1, "z": 1 },
        { "x": 2, "y": 1, "z": 2 },
        { "x": 2, "y": 1, "z": 3 },
        { "x": 2, "y": 1, "z": 4 },
        { "x": 2, "y": 1, "z": 5 },
        { "x": 2, "y": 1, "z": 6 },
        { "x": 2, "y": 1, "z": 7 },
        { "x": 3, "y": 1, "z": 1 },
        { "x": 3, "y": 1, "z": 2 },
        { "x": 3, "y": 1, "z": 3 },
        { "x": 3, "y": 1, "z": 4 },
        { "x": 3, "y": 1, "z": 5 },
        { "x": 3, "y": 1, "z": 6 },
        { "x": 3, "y": 1, "z": 7 },
        { "x": 4, "y": 1, "z": 1 },
        { "x": 4, "y": 1, "z": 2 },
        { "x": 4, "y": 1, "z": 3 },
        { "x": 4, "y": 1, "z": 5 },
        { "x": 4, "y": 1, "z": 6 },
        { "x": 4, "y": 1, "z": 7 },
        { "x": 5, "y": 1, "z": 1 },
        { "x": 5, "y": 1, "z": 2 },
        { "x": 5, "y": 1, "z": 3 },
        { "x": 5, "y": 1, "z": 4 },
        { "x": 5, "y": 1, "z": 5 },
        { "x": 5, "y": 1, "z": 6 },
        { "x": 5, "y": 1, "z": 7 },
        { "x": 6, "y": 1, "z": 1 },
        { "x": 6, "y": 1, "z": 2 },
        { "x": 6, "y": 1, "z": 3 },
        { "x": 6, "y": 1, "z": 4 },
        { "x": 6, "y": 1, "z": 5 },
        { "x": 6, "y": 1, "z": 6 },
        { "x": 6, "y": 1, "z": 7 },
        { "x": 7, "y": 1, "z": 1 },
        { "x": 7, "y": 1, "z": 2 },
        { "x": 7, "y": 1, "z": 3 },
        { "x": 7, "y": 1, "z": 4 },
        { "x": 7, "y": 1, "z": 5 },
        { "x": 7, "y": 1, "z": 6 },
        { "x": 7, "y": 1, "z": 7 },
        { "x": 1, "y": 3, "z": 1 },
        { "x": 1, "y": 3, "z": 2 },
        { "x": 1, "y": 3, "z": 3 },
        { "x": 1, "y": 3, "z": 4 },
        { "x": 1, "y": 3, "z": 5 },
        { "x": 1, "y": 3, "z": 6 },
        { "x": 1, "y": 3, "z": 7 },
        { "x": 2, "y": 3, "z": 1 },
        { "x": 2, "y": 3, "z": 2 },
        { "x": 2, "y": 3, "z": 3 },
        { "x": 2, "y": 3, "z": 5 },
        { "x": 2, "y": 3, "z": 6 },
        { "x": 2, "y": 3, "z": 7 },
        { "x": 3, "y": 3, "z": 1 },
        { "x": 3, "y": 3, "z": 2 },
        { "x": 3, "y": 3, "z": 6 },
        { "x": 3, "y": 3, "z": 7 },
        { "x": 4, "y": 3, "z": 1 },
        { "x": 4, "y": 3, "z": 7 },
        { "x": 5, "y": 3, "z": 1 },
        { "x": 5, "y": 3, "z": 2 },
        { "x": 5, "y": 3, "z": 6 },
        { "x": 5, "y": 3, "z": 7 },
        { "x": 6, "y": 3, "z": 1 },
        { "x": 6, "y": 3, "z": 2 },
        { "x": 6, "y": 3, "z": 3 },
        { "x": 6, "y": 3, "z": 5 },
        { "x": 6, "y": 3, "z": 6 },
        { "x": 6, "y": 3, "z": 7 },
        { "x": 7, "y": 3, "z": 1 },
        { "x": 7, "y": 3, "z": 2 },
        { "x": 7, "y": 3, "z": 3 },
        { "x": 7, "y": 3, "z": 4 },
        { "x": 7, "y": 3, "z": 5 },
        { "x": 7, "y": 3, "z": 6 },
        { "x": 7, "y": 3, "z": 7 },
        { "x": 1, "y": 5, "z": 1 },
        { "x": 1, "y": 5, "z": 2 },
        { "x": 1, "y": 5, "z": 3 },
        { "x": 1, "y": 5, "z": 4 },
        { "x": 1, "y": 5, "z": 5 },
        { "x": 1, "y": 5, "z": 6 },
        { "x": 1, "y": 5, "z": 7 },
        { "x": 2, "y": 5, "z": 1 },
        { "x": 2, "y": 5, "z": 2 },
        { "x": 2, "y": 5, "z": 3 },
        { "x": 2, "y": 5, "z": 5 },
        { "x": 2, "y": 5, "z": 6 },
        { "x": 2, "y": 5, "z": 7 },
        { "x": 3, "y": 5, "z": 1 },
        { "x": 3, "y": 5, "z": 2 },
        { "x": 3, "y": 5, "z": 6 },
        { "x": 3, "y": 5, "z": 7 },
        { "x": 4, "y": 5, "z": 1 },
        { "x": 4, "y": 5, "z": 7 },
        { "x": 5, "y": 5, "z": 1 },
        { "x": 5, "y": 5, "z": 2 },
        { "x": 5, "y": 5, "z": 6 },
        { "x": 5, "y": 5, "z": 7 },
        { "x": 6, "y": 5, "z": 1 },
        { "x": 6, "y": 5, "z": 2 },
        { "x": 6, "y": 5, "z": 3 },
        { "x": 6, "y": 5, "z": 5 },
        { "x": 6, "y": 5, "z": 6 },
        { "x": 6, "y": 5, "z": 7 },
        { "x": 7, "y": 5, "z": 1 },
        { "x": 7, "y": 5, "z": 2 },
        { "x": 7, "y": 5, "z": 3 },
        { "x": 7, "y": 5, "z": 4 },
        { "x": 7, "y": 5, "z": 5 },
        { "x": 7, "y": 5, "z": 6 },
        { "x": 7, "y": 5, "z": 7 },
        { "x": 1, "y": 7, "z": 1 },
        { "x": 1, "y": 7, "z": 2 },
        { "x": 1, "y": 7, "z": 3 },
        { "x": 1, "y": 7, "z": 4 },
        { "x": 1, "y": 7, "z": 5 },
        { "x": 1, "y": 7, "z": 6 },
        { "x": 1, "y": 7, "z": 7 },
        { "x": 2, "y": 7, "z": 1 },
        { "x": 2, "y": 7, "z": 2 },
        { "x": 2, "y": 7, "z": 3 },
        { "x": 2, "y": 7, "z": 4 },
        { "x": 2, "y": 7, "z": 5 },
        { "x": 2, "y": 7, "z": 6 },
        { "x": 2, "y": 7, "z": 7 },
        { "x": 3, "y": 7, "z": 1 },
        { "x": 3, "y": 7, "z": 2 },
        { "x": 3, "y": 7, "z": 3 },
        { "x": 3, "y": 7, "z": 4 },
        { "x": 3, "y": 7, "z": 5 },
        { "x": 3, "y": 7, "z": 6 },
        { "x": 3, "y": 7, "z": 7 },
        { "x": 4, "y": 7, "z": 1 },
        { "x": 4, "y": 7, "z": 2 },
        { "x": 4, "y": 7, "z": 3 },
        { "x": 4, "y": 7, "z": 5 },
        { "x": 4, "y": 7, "z": 6 },
        { "x": 4, "y": 7, "z": 7 },
        { "x": 5, "y": 7, "z": 1 },
        { "x": 5, "y": 7, "z": 2 },
        { "x": 5, "y": 7, "z": 3 },
        { "x": 5, "y": 7, "z": 4 },
        { "x": 5, "y": 7, "z": 5 },
        { "x": 5, "y": 7, "z": 6 },
        { "x": 5, "y": 7, "z": 7 },
        { "x": 6, "y": 7, "z": 1 },
        { "x": 6, "y": 7, "z": 2 },
        { "x": 6, "y": 7, "z": 3 },
        { "x": 6, "y": 7, "z": 4 },
        { "x": 6, "y": 7, "z": 5 },
        { "x": 6, "y": 7, "z": 6 },
        { "x": 6, "y": 7, "z": 7 },
        { "x": 7, "y": 7, "z": 1 },
        { "x": 7, "y": 7, "z": 2 },
        { "x": 7, "y": 7, "z": 3 },
        { "x": 7, "y": 7, "z": 4 },
        { "x": 7, "y": 7, "z": 5 },
        { "x": 7, "y": 7, "z": 6 },
        { "x": 7, "y": 7, "z": 7 },
        { "x": 4, "y": 0, "z": 4 },
        { "x": 4, "y": 8, "z": 4 }
      ]
    }
  ]
};

  // Source capture: bronze
  levelTemplates.bronze = {
  "port_status": "being-ported",
  "portNotes": [
    "Original two-sided wire loops, gears, generator, bomb and wire stones. Electrical exit activation is missing; exit remains closed. Bomb timing is approximate."
  ],
  "size": { "x": 9, "y": 6, "z": 9 },
  "intro": "bronze",
  "help": [
    "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit\nfeed it with electricity:\n\nconnect the generator\nwith the motor\nand close the circuit\nwith the wire stones"
  ],
  "player": {
    "coordinates": { "x": 4, "y": 4, "z": 4 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": false
      },
      "at": [
        { "x": 4, "y": 3, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "motorCylinder",
        "face": "PY"
      },
      "at": [
        { "x": 4, "y": 1, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "motorGear",
        "face": "PY"
      },
      "at": [
        { "x": 4, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "gear",
        "face": "PY"
      },
      "at": [
        { "x": 3, "y": 5, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "generator",
        "face": "PY"
      },
      "at": [
        { "x": 5, "y": 5, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "bomb"
      },
      "at": [
        { "x": 3, "y": 5, "z": 5 }
      ]
    },
    {
      "clone": {
        "type": "wireStone"
      },
      "at": [
        { "x": 4, "y": 5, "z": 4 },
        { "x": 5, "y": 4, "z": 4 },
        { "x": 3, "y": 4, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 10
      },
      "at": [
        { "x": 3, "y": 0, "z": 2 },
        { "x": 4, "y": 0, "z": 2 },
        { "x": 5, "y": 0, "z": 2 },
        { "x": 3, "y": 0, "z": 6 },
        { "x": 4, "y": 0, "z": 6 },
        { "x": 5, "y": 0, "z": 6 },
        { "x": 0, "y": 0, "z": 4 },
        { "x": 1, "y": 0, "z": 4 },
        { "x": 7, "y": 0, "z": 4 },
        { "x": 8, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 5
      },
      "at": [
        { "x": 2, "y": 0, "z": 5 },
        { "x": 2, "y": 0, "z": 3 },
        { "x": 6, "y": 0, "z": 5 },
        { "x": 6, "y": 0, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 13
      },
      "at": [
        { "x": 2, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 7
      },
      "at": [
        { "x": 6, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 6
      },
      "at": [
        { "x": 2, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 3
      },
      "at": [
        { "x": 2, "y": 0, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 9
      },
      "at": [
        { "x": 6, "y": 0, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 12
      },
      "at": [
        { "x": 6, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NY",
        "connections": 10
      },
      "at": [
        { "x": 3, "y": 5, "z": 2 },
        { "x": 4, "y": 5, "z": 2 },
        { "x": 5, "y": 5, "z": 2 },
        { "x": 3, "y": 5, "z": 6 },
        { "x": 4, "y": 5, "z": 6 },
        { "x": 5, "y": 5, "z": 6 },
        { "x": 0, "y": 5, "z": 4 },
        { "x": 1, "y": 5, "z": 4 },
        { "x": 7, "y": 5, "z": 4 },
        { "x": 8, "y": 5, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NY",
        "connections": 5
      },
      "at": [
        { "x": 2, "y": 5, "z": 5 },
        { "x": 2, "y": 5, "z": 3 },
        { "x": 6, "y": 5, "z": 5 },
        { "x": 6, "y": 5, "z": 3 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NY",
        "connections": 13
      },
      "at": [
        { "x": 2, "y": 5, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NY",
        "connections": 7
      },
      "at": [
        { "x": 6, "y": 5, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NY",
        "connections": 3
      },
      "at": [
        { "x": 2, "y": 5, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NY",
        "connections": 6
      },
      "at": [
        { "x": 2, "y": 5, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NY",
        "connections": 12
      },
      "at": [
        { "x": 6, "y": 5, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NY",
        "connections": 9
      },
      "at": [
        { "x": 6, "y": 5, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PX",
        "connections": 5
      },
      "at": [
        { "x": 0, "y": 0, "z": 4 },
        { "x": 0, "y": 1, "z": 4 },
        { "x": 0, "y": 2, "z": 4 },
        { "x": 0, "y": 3, "z": 4 },
        { "x": 0, "y": 4, "z": 4 },
        { "x": 0, "y": 5, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NX",
        "connections": 5
      },
      "at": [
        { "x": 8, "y": 0, "z": 4 },
        { "x": 8, "y": 1, "z": 4 },
        { "x": 8, "y": 2, "z": 4 },
        { "x": 8, "y": 3, "z": 4 },
        { "x": 8, "y": 4, "z": 4 },
        { "x": 8, "y": 5, "z": 4 }
      ]
    }
  ]
};

  // Source capture: pool
  levelTemplates.pool = {
  "port_status": "being-ported",
  "portNotes": [
    "Original pool shell and dense slippery stone fill. Slippery grabbing rules and slit visuals are missing."
  ],
  "size": { "x": 11, "y": 11, "z": 11 },
  "intro": "pool",
  "help": [
    "$scale(1.5)mission:\nget to the exit!"
  ],
  "player": {
    "coordinates": { "x": 5, "y": 10, "z": 5 },
    "nostatus": 0,
    "orientation": "rotx90"
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 5, "y": 5, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone",
        "color": [
          0.3,
          0.3,
          1.0,
          0.9
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 0, "z": 0 },
        { "x": 0, "y": 0, "z": 2 },
        { "x": 0, "y": 1, "z": 1 },
        { "x": 0, "y": 1, "z": 3 },
        { "x": 0, "y": 2, "z": 0 },
        { "x": 0, "y": 2, "z": 2 },
        { "x": 0, "y": 3, "z": 1 },
        { "x": 0, "y": 3, "z": 3 },
        { "x": 0, "y": 4, "z": 0 },
        { "x": 0, "y": 4, "z": 2 },
        { "x": 0, "y": 5, "z": 1 },
        { "x": 0, "y": 5, "z": 3 },
        { "x": 0, "y": 6, "z": 0 },
        { "x": 0, "y": 6, "z": 2 },
        { "x": 0, "y": 7, "z": 1 },
        { "x": 0, "y": 7, "z": 3 },
        { "x": 0, "y": 8, "z": 0 },
        { "x": 0, "y": 8, "z": 2 },
        { "x": 0, "y": 9, "z": 1 },
        { "x": 0, "y": 9, "z": 3 },
        { "x": 0, "y": 10, "z": 0 },
        { "x": 0, "y": 10, "z": 2 },
        { "x": 1, "y": 0, "z": 1 },
        { "x": 1, "y": 0, "z": 3 },
        { "x": 1, "y": 1, "z": 0 },
        { "x": 1, "y": 3, "z": 0 },
        { "x": 1, "y": 5, "z": 0 },
        { "x": 1, "y": 7, "z": 0 },
        { "x": 1, "y": 9, "z": 0 },
        { "x": 1, "y": 10, "z": 1 },
        { "x": 1, "y": 10, "z": 3 },
        { "x": 2, "y": 0, "z": 0 },
        { "x": 2, "y": 0, "z": 2 },
        { "x": 2, "y": 2, "z": 0 },
        { "x": 2, "y": 4, "z": 0 },
        { "x": 2, "y": 6, "z": 0 },
        { "x": 2, "y": 8, "z": 0 },
        { "x": 2, "y": 10, "z": 0 },
        { "x": 2, "y": 10, "z": 2 },
        { "x": 3, "y": 0, "z": 1 },
        { "x": 3, "y": 0, "z": 3 },
        { "x": 3, "y": 1, "z": 0 },
        { "x": 3, "y": 3, "z": 0 },
        { "x": 3, "y": 5, "z": 0 },
        { "x": 3, "y": 7, "z": 0 },
        { "x": 3, "y": 9, "z": 0 },
        { "x": 3, "y": 10, "z": 1 },
        { "x": 3, "y": 10, "z": 3 },
        { "x": 4, "y": 0, "z": 0 },
        { "x": 4, "y": 0, "z": 2 },
        { "x": 4, "y": 2, "z": 0 },
        { "x": 4, "y": 4, "z": 0 },
        { "x": 4, "y": 6, "z": 0 },
        { "x": 4, "y": 8, "z": 0 },
        { "x": 4, "y": 10, "z": 0 },
        { "x": 4, "y": 10, "z": 2 },
        { "x": 5, "y": 0, "z": 1 },
        { "x": 5, "y": 0, "z": 3 },
        { "x": 5, "y": 1, "z": 0 },
        { "x": 5, "y": 3, "z": 0 },
        { "x": 5, "y": 5, "z": 0 },
        { "x": 5, "y": 7, "z": 0 },
        { "x": 5, "y": 9, "z": 0 },
        { "x": 5, "y": 10, "z": 1 },
        { "x": 5, "y": 10, "z": 3 },
        { "x": 6, "y": 0, "z": 0 },
        { "x": 6, "y": 0, "z": 2 },
        { "x": 6, "y": 2, "z": 0 },
        { "x": 6, "y": 4, "z": 0 },
        { "x": 6, "y": 6, "z": 0 },
        { "x": 6, "y": 8, "z": 0 },
        { "x": 6, "y": 10, "z": 0 },
        { "x": 6, "y": 10, "z": 2 },
        { "x": 7, "y": 0, "z": 1 },
        { "x": 7, "y": 0, "z": 3 },
        { "x": 7, "y": 1, "z": 0 },
        { "x": 7, "y": 3, "z": 0 },
        { "x": 7, "y": 5, "z": 0 },
        { "x": 7, "y": 7, "z": 0 },
        { "x": 7, "y": 9, "z": 0 },
        { "x": 7, "y": 10, "z": 1 },
        { "x": 7, "y": 10, "z": 3 },
        { "x": 8, "y": 0, "z": 0 },
        { "x": 8, "y": 0, "z": 2 },
        { "x": 8, "y": 2, "z": 0 },
        { "x": 8, "y": 4, "z": 0 },
        { "x": 8, "y": 6, "z": 0 },
        { "x": 8, "y": 8, "z": 0 },
        { "x": 8, "y": 10, "z": 0 },
        { "x": 8, "y": 10, "z": 2 },
        { "x": 9, "y": 0, "z": 1 },
        { "x": 9, "y": 0, "z": 3 },
        { "x": 9, "y": 1, "z": 0 },
        { "x": 9, "y": 3, "z": 0 },
        { "x": 9, "y": 5, "z": 0 },
        { "x": 9, "y": 7, "z": 0 },
        { "x": 9, "y": 9, "z": 0 },
        { "x": 9, "y": 10, "z": 1 },
        { "x": 9, "y": 10, "z": 3 },
        { "x": 10, "y": 0, "z": 0 },
        { "x": 10, "y": 0, "z": 2 },
        { "x": 10, "y": 1, "z": 1 },
        { "x": 10, "y": 1, "z": 3 },
        { "x": 10, "y": 2, "z": 0 },
        { "x": 10, "y": 2, "z": 2 },
        { "x": 10, "y": 3, "z": 1 },
        { "x": 10, "y": 3, "z": 3 },
        { "x": 10, "y": 4, "z": 0 },
        { "x": 10, "y": 4, "z": 2 },
        { "x": 10, "y": 5, "z": 1 },
        { "x": 10, "y": 5, "z": 3 },
        { "x": 10, "y": 6, "z": 0 },
        { "x": 10, "y": 6, "z": 2 },
        { "x": 10, "y": 7, "z": 1 },
        { "x": 10, "y": 7, "z": 3 },
        { "x": 10, "y": 8, "z": 0 },
        { "x": 10, "y": 8, "z": 2 },
        { "x": 10, "y": 9, "z": 1 },
        { "x": 10, "y": 9, "z": 3 },
        { "x": 10, "y": 10, "z": 0 },
        { "x": 10, "y": 10, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 0, "y": 0, "z": 4 },
        { "x": 1, "y": 0, "z": 4 },
        { "x": 2, "y": 0, "z": 4 },
        { "x": 3, "y": 0, "z": 4 },
        { "x": 4, "y": 0, "z": 4 },
        { "x": 5, "y": 0, "z": 4 },
        { "x": 6, "y": 0, "z": 4 },
        { "x": 7, "y": 0, "z": 4 },
        { "x": 8, "y": 0, "z": 4 },
        { "x": 9, "y": 0, "z": 4 },
        { "x": 10, "y": 0, "z": 4 },
        { "x": 10, "y": 1, "z": 4 },
        { "x": 10, "y": 2, "z": 4 },
        { "x": 10, "y": 3, "z": 4 },
        { "x": 10, "y": 4, "z": 4 },
        { "x": 10, "y": 5, "z": 4 },
        { "x": 10, "y": 6, "z": 4 },
        { "x": 10, "y": 7, "z": 4 },
        { "x": 10, "y": 8, "z": 4 },
        { "x": 10, "y": 9, "z": 4 },
        { "x": 10, "y": 10, "z": 4 },
        { "x": 9, "y": 10, "z": 4 },
        { "x": 8, "y": 10, "z": 4 },
        { "x": 7, "y": 10, "z": 4 },
        { "x": 6, "y": 10, "z": 4 },
        { "x": 5, "y": 10, "z": 4 },
        { "x": 4, "y": 10, "z": 4 },
        { "x": 3, "y": 10, "z": 4 },
        { "x": 2, "y": 10, "z": 4 },
        { "x": 1, "y": 10, "z": 4 },
        { "x": 0, "y": 10, "z": 4 },
        { "x": 0, "y": 9, "z": 4 },
        { "x": 0, "y": 8, "z": 4 },
        { "x": 0, "y": 7, "z": 4 },
        { "x": 0, "y": 6, "z": 4 },
        { "x": 0, "y": 5, "z": 4 },
        { "x": 0, "y": 4, "z": 4 },
        { "x": 0, "y": 3, "z": 4 },
        { "x": 0, "y": 2, "z": 4 },
        { "x": 0, "y": 1, "z": 4 },
        { "x": 0, "y": 0, "z": 6 },
        { "x": 1, "y": 0, "z": 6 },
        { "x": 2, "y": 0, "z": 6 },
        { "x": 3, "y": 0, "z": 6 },
        { "x": 4, "y": 0, "z": 6 },
        { "x": 5, "y": 0, "z": 6 },
        { "x": 6, "y": 0, "z": 6 },
        { "x": 7, "y": 0, "z": 6 },
        { "x": 8, "y": 0, "z": 6 },
        { "x": 9, "y": 0, "z": 6 },
        { "x": 10, "y": 0, "z": 6 },
        { "x": 10, "y": 1, "z": 6 },
        { "x": 10, "y": 2, "z": 6 },
        { "x": 10, "y": 3, "z": 6 },
        { "x": 10, "y": 4, "z": 6 },
        { "x": 10, "y": 5, "z": 6 },
        { "x": 10, "y": 6, "z": 6 },
        { "x": 10, "y": 7, "z": 6 },
        { "x": 10, "y": 8, "z": 6 },
        { "x": 10, "y": 9, "z": 6 },
        { "x": 10, "y": 10, "z": 6 },
        { "x": 9, "y": 10, "z": 6 },
        { "x": 8, "y": 10, "z": 6 },
        { "x": 7, "y": 10, "z": 6 },
        { "x": 6, "y": 10, "z": 6 },
        { "x": 5, "y": 10, "z": 6 },
        { "x": 4, "y": 10, "z": 6 },
        { "x": 3, "y": 10, "z": 6 },
        { "x": 2, "y": 10, "z": 6 },
        { "x": 1, "y": 10, "z": 6 },
        { "x": 0, "y": 10, "z": 6 },
        { "x": 0, "y": 9, "z": 6 },
        { "x": 0, "y": 8, "z": 6 },
        { "x": 0, "y": 7, "z": 6 },
        { "x": 0, "y": 6, "z": 6 },
        { "x": 0, "y": 5, "z": 6 },
        { "x": 0, "y": 4, "z": 6 },
        { "x": 0, "y": 3, "z": 6 },
        { "x": 0, "y": 2, "z": 6 },
        { "x": 0, "y": 1, "z": 6 },
        { "x": 0, "y": 0, "z": 10 },
        { "x": 0, "y": 0, "z": 9 },
        { "x": 0, "y": 0, "z": 8 },
        { "x": 0, "y": 2, "z": 10 },
        { "x": 0, "y": 2, "z": 9 },
        { "x": 0, "y": 2, "z": 8 },
        { "x": 0, "y": 4, "z": 10 },
        { "x": 0, "y": 4, "z": 9 },
        { "x": 0, "y": 4, "z": 8 },
        { "x": 0, "y": 6, "z": 10 },
        { "x": 0, "y": 6, "z": 9 },
        { "x": 0, "y": 6, "z": 8 },
        { "x": 0, "y": 8, "z": 10 },
        { "x": 0, "y": 8, "z": 9 },
        { "x": 0, "y": 8, "z": 8 },
        { "x": 0, "y": 10, "z": 10 },
        { "x": 0, "y": 10, "z": 9 },
        { "x": 0, "y": 10, "z": 8 },
        { "x": 1, "y": 1, "z": 10 },
        { "x": 1, "y": 1, "z": 9 },
        { "x": 1, "y": 1, "z": 8 },
        { "x": 1, "y": 3, "z": 10 },
        { "x": 1, "y": 3, "z": 9 },
        { "x": 1, "y": 3, "z": 8 },
        { "x": 1, "y": 5, "z": 10 },
        { "x": 1, "y": 5, "z": 9 },
        { "x": 1, "y": 5, "z": 8 },
        { "x": 1, "y": 7, "z": 10 },
        { "x": 1, "y": 7, "z": 9 },
        { "x": 1, "y": 7, "z": 8 },
        { "x": 1, "y": 9, "z": 10 },
        { "x": 1, "y": 9, "z": 9 },
        { "x": 1, "y": 9, "z": 8 },
        { "x": 2, "y": 0, "z": 10 },
        { "x": 2, "y": 0, "z": 9 },
        { "x": 2, "y": 0, "z": 8 },
        { "x": 2, "y": 2, "z": 10 },
        { "x": 2, "y": 2, "z": 9 },
        { "x": 2, "y": 2, "z": 8 },
        { "x": 2, "y": 4, "z": 10 },
        { "x": 2, "y": 4, "z": 9 },
        { "x": 2, "y": 4, "z": 8 },
        { "x": 2, "y": 6, "z": 10 },
        { "x": 2, "y": 6, "z": 9 },
        { "x": 2, "y": 6, "z": 8 },
        { "x": 2, "y": 8, "z": 10 },
        { "x": 2, "y": 8, "z": 9 },
        { "x": 2, "y": 8, "z": 8 },
        { "x": 2, "y": 10, "z": 10 },
        { "x": 2, "y": 10, "z": 9 },
        { "x": 2, "y": 10, "z": 8 },
        { "x": 3, "y": 1, "z": 10 },
        { "x": 3, "y": 1, "z": 9 },
        { "x": 3, "y": 1, "z": 8 },
        { "x": 3, "y": 3, "z": 10 },
        { "x": 3, "y": 3, "z": 9 },
        { "x": 3, "y": 3, "z": 8 },
        { "x": 3, "y": 5, "z": 10 },
        { "x": 3, "y": 5, "z": 9 },
        { "x": 3, "y": 5, "z": 8 },
        { "x": 3, "y": 7, "z": 10 },
        { "x": 3, "y": 7, "z": 9 },
        { "x": 3, "y": 7, "z": 8 },
        { "x": 3, "y": 9, "z": 10 },
        { "x": 3, "y": 9, "z": 9 },
        { "x": 3, "y": 9, "z": 8 },
        { "x": 4, "y": 0, "z": 10 },
        { "x": 4, "y": 0, "z": 9 },
        { "x": 4, "y": 0, "z": 8 },
        { "x": 4, "y": 2, "z": 10 },
        { "x": 4, "y": 2, "z": 9 },
        { "x": 4, "y": 2, "z": 8 },
        { "x": 4, "y": 4, "z": 10 },
        { "x": 4, "y": 4, "z": 9 },
        { "x": 4, "y": 4, "z": 8 },
        { "x": 4, "y": 6, "z": 10 },
        { "x": 4, "y": 6, "z": 9 },
        { "x": 4, "y": 6, "z": 8 },
        { "x": 4, "y": 8, "z": 10 },
        { "x": 4, "y": 8, "z": 9 },
        { "x": 4, "y": 8, "z": 8 },
        { "x": 4, "y": 10, "z": 10 },
        { "x": 4, "y": 10, "z": 9 },
        { "x": 4, "y": 10, "z": 8 },
        { "x": 5, "y": 1, "z": 10 },
        { "x": 5, "y": 1, "z": 9 },
        { "x": 5, "y": 1, "z": 8 },
        { "x": 5, "y": 3, "z": 10 },
        { "x": 5, "y": 3, "z": 9 },
        { "x": 5, "y": 3, "z": 8 },
        { "x": 5, "y": 5, "z": 10 },
        { "x": 5, "y": 5, "z": 9 },
        { "x": 5, "y": 5, "z": 8 },
        { "x": 5, "y": 7, "z": 10 },
        { "x": 5, "y": 7, "z": 9 },
        { "x": 5, "y": 7, "z": 8 },
        { "x": 5, "y": 9, "z": 10 },
        { "x": 5, "y": 9, "z": 9 },
        { "x": 5, "y": 9, "z": 8 },
        { "x": 6, "y": 0, "z": 10 },
        { "x": 6, "y": 0, "z": 9 },
        { "x": 6, "y": 0, "z": 8 },
        { "x": 6, "y": 2, "z": 10 },
        { "x": 6, "y": 2, "z": 9 },
        { "x": 6, "y": 2, "z": 8 },
        { "x": 6, "y": 4, "z": 10 },
        { "x": 6, "y": 4, "z": 9 },
        { "x": 6, "y": 4, "z": 8 },
        { "x": 6, "y": 6, "z": 10 },
        { "x": 6, "y": 6, "z": 9 },
        { "x": 6, "y": 6, "z": 8 },
        { "x": 6, "y": 8, "z": 10 },
        { "x": 6, "y": 8, "z": 9 },
        { "x": 6, "y": 8, "z": 8 },
        { "x": 6, "y": 10, "z": 10 },
        { "x": 6, "y": 10, "z": 9 },
        { "x": 6, "y": 10, "z": 8 },
        { "x": 7, "y": 1, "z": 10 },
        { "x": 7, "y": 1, "z": 9 },
        { "x": 7, "y": 1, "z": 8 },
        { "x": 7, "y": 3, "z": 10 },
        { "x": 7, "y": 3, "z": 9 },
        { "x": 7, "y": 3, "z": 8 },
        { "x": 7, "y": 5, "z": 10 },
        { "x": 7, "y": 5, "z": 9 },
        { "x": 7, "y": 5, "z": 8 },
        { "x": 7, "y": 7, "z": 10 },
        { "x": 7, "y": 7, "z": 9 },
        { "x": 7, "y": 7, "z": 8 },
        { "x": 7, "y": 9, "z": 10 },
        { "x": 7, "y": 9, "z": 9 },
        { "x": 7, "y": 9, "z": 8 },
        { "x": 8, "y": 0, "z": 10 },
        { "x": 8, "y": 0, "z": 9 },
        { "x": 8, "y": 0, "z": 8 },
        { "x": 8, "y": 2, "z": 10 },
        { "x": 8, "y": 2, "z": 9 },
        { "x": 8, "y": 2, "z": 8 },
        { "x": 8, "y": 4, "z": 10 },
        { "x": 8, "y": 4, "z": 9 },
        { "x": 8, "y": 4, "z": 8 },
        { "x": 8, "y": 6, "z": 10 },
        { "x": 8, "y": 6, "z": 9 },
        { "x": 8, "y": 6, "z": 8 },
        { "x": 8, "y": 8, "z": 10 },
        { "x": 8, "y": 8, "z": 9 },
        { "x": 8, "y": 8, "z": 8 },
        { "x": 8, "y": 10, "z": 10 },
        { "x": 8, "y": 10, "z": 9 },
        { "x": 8, "y": 10, "z": 8 },
        { "x": 9, "y": 1, "z": 10 },
        { "x": 9, "y": 1, "z": 9 },
        { "x": 9, "y": 1, "z": 8 },
        { "x": 9, "y": 3, "z": 10 },
        { "x": 9, "y": 3, "z": 9 },
        { "x": 9, "y": 3, "z": 8 },
        { "x": 9, "y": 5, "z": 10 },
        { "x": 9, "y": 5, "z": 9 },
        { "x": 9, "y": 5, "z": 8 },
        { "x": 9, "y": 7, "z": 10 },
        { "x": 9, "y": 7, "z": 9 },
        { "x": 9, "y": 7, "z": 8 },
        { "x": 9, "y": 9, "z": 10 },
        { "x": 9, "y": 9, "z": 9 },
        { "x": 9, "y": 9, "z": 8 },
        { "x": 10, "y": 0, "z": 10 },
        { "x": 10, "y": 0, "z": 9 },
        { "x": 10, "y": 0, "z": 8 },
        { "x": 10, "y": 2, "z": 10 },
        { "x": 10, "y": 2, "z": 9 },
        { "x": 10, "y": 2, "z": 8 },
        { "x": 10, "y": 4, "z": 10 },
        { "x": 10, "y": 4, "z": 9 },
        { "x": 10, "y": 4, "z": 8 },
        { "x": 10, "y": 6, "z": 10 },
        { "x": 10, "y": 6, "z": 9 },
        { "x": 10, "y": 6, "z": 8 },
        { "x": 10, "y": 8, "z": 10 },
        { "x": 10, "y": 8, "z": 9 },
        { "x": 10, "y": 8, "z": 8 },
        { "x": 10, "y": 10, "z": 10 },
        { "x": 10, "y": 10, "z": 9 },
        { "x": 10, "y": 10, "z": 8 }
      ]
    }
  ]
};

  // Source capture: hidden
  levelTemplates.hidden = {
  "port_status": "being-ported",
  "portNotes": [
    "Five concealed switches, stone covers and upper stone ring. Five-switch exit condition translated.",
    "No route certified within the bounded search; full puzzle completion remains unverified."
  ],
  "size": { "x": 9, "y": 9, "z": 9 },
  "intro": "hidden",
  "help": [
    "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit,\nactivate the 5 switches\n\nuse the stones to\nreach the exit"
  ],
  "player": {
    "coordinates": { "x": 4, "y": 1, "z": 5 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": false
      },
      "at": [
        { "x": 4, "y": 4, "z": 4 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 0, "y": 0, "z": 1 },
        { "x": 0, "y": 1, "z": 0 },
        { "x": 1, "y": 0, "z": 1 },
        { "x": 1, "y": 1, "z": 0 },
        { "x": 2, "y": 0, "z": 0 },
        { "x": 8, "y": 0, "z": 1 },
        { "x": 8, "y": 1, "z": 0 },
        { "x": 7, "y": 0, "z": 1 },
        { "x": 7, "y": 1, "z": 0 },
        { "x": 6, "y": 0, "z": 0 },
        { "x": 0, "y": 0, "z": 7 },
        { "x": 0, "y": 1, "z": 8 },
        { "x": 1, "y": 0, "z": 7 },
        { "x": 1, "y": 1, "z": 8 },
        { "x": 2, "y": 0, "z": 8 },
        { "x": 8, "y": 0, "z": 7 },
        { "x": 8, "y": 1, "z": 8 },
        { "x": 7, "y": 0, "z": 7 },
        { "x": 7, "y": 1, "z": 8 },
        { "x": 6, "y": 0, "z": 8 },
        { "x": 3, "y": 8, "z": 3 },
        { "x": 3, "y": 8, "z": 4 },
        { "x": 3, "y": 8, "z": 5 },
        { "x": 4, "y": 8, "z": 5 },
        { "x": 5, "y": 8, "z": 5 },
        { "x": 5, "y": 8, "z": 4 },
        { "x": 5, "y": 8, "z": 3 },
        { "x": 4, "y": 8, "z": 3 },
        { "x": 4, "y": 7, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "switch",
        "sourceEvents": [
          "switched"
        ],
        "switchGroup": "hidden"
      },
      "at": [
        { "x": 1, "y": 0, "z": 0 },
        { "x": 7, "y": 0, "z": 0 },
        { "x": 1, "y": 0, "z": 8 },
        { "x": 7, "y": 0, "z": 8 },
        { "x": 4, "y": 8, "z": 4 }
      ]
    }
  ],
  "switchConditions": [
    {
      "group": "hidden",
      "activeCount": 5,
      "exit": "exit"
    }
  ]
};

  // Source capture: church
  levelTemplates.church = {
  "port_status": "being-ported",
  "portNotes": [
    "Original wire-stone pillars, generator, motor and bomb. Electrical exit activation is missing; exit remains closed."
  ],
  "size": { "x": 5, "y": 7, "z": 5 },
  "intro": "church",
  "help": [
    "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit,\nfeed it with electricity:\n\nconnect the generator\nwith the motor\n\nplace a wire stone\nnext to the exit"
  ],
  "player": {
    "coordinates": { "x": 3, "y": 3, "z": 2 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": false
      },
      "at": [
        { "x": 2, "y": 2, "z": 2 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "wireStone"
      },
      "at": [
        { "x": 0, "y": 0, "z": 0 },
        { "x": 0, "y": 1, "z": 0 },
        { "x": 0, "y": 2, "z": 0 },
        { "x": 0, "y": 3, "z": 0 },
        { "x": 0, "y": 4, "z": 0 },
        { "x": 4, "y": 0, "z": 0 },
        { "x": 4, "y": 1, "z": 0 },
        { "x": 4, "y": 2, "z": 0 },
        { "x": 4, "y": 3, "z": 0 },
        { "x": 4, "y": 4, "z": 0 },
        { "x": 4, "y": 0, "z": 4 },
        { "x": 4, "y": 1, "z": 4 },
        { "x": 4, "y": 2, "z": 4 },
        { "x": 4, "y": 3, "z": 4 },
        { "x": 4, "y": 4, "z": 4 },
        { "x": 0, "y": 0, "z": 4 },
        { "x": 0, "y": 1, "z": 4 },
        { "x": 0, "y": 2, "z": 4 },
        { "x": 0, "y": 3, "z": 4 },
        { "x": 0, "y": 4, "z": 4 },
        { "x": 1, "y": 5, "z": 1 },
        { "x": 3, "y": 5, "z": 1 },
        { "x": 1, "y": 5, "z": 3 },
        { "x": 3, "y": 5, "z": 3 },
        { "x": 2, "y": 6, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "bomb"
      },
      "at": [
        { "x": 2, "y": 5, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "generator",
        "face": "PY"
      },
      "at": [
        { "x": 2, "y": 3, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "motorGear",
        "face": "PY"
      },
      "at": [
        { "x": 2, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "motorCylinder",
        "face": "PY"
      },
      "at": [
        { "x": 2, "y": 1, "z": 0 }
      ]
    }
  ]
};

  // Source capture: strange
  levelTemplates.strange = {
  "port_status": "being-ported",
  "portNotes": [
    "Original bomb arrays, wire stones, motor and boundary wires. Electrical exit activation is missing; exit remains closed. Bomb timing is approximate."
  ],
  "size": { "x": 9, "y": 9, "z": 9 },
  "intro": "strange",
  "help": [
    "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit,\nfeed it with electricity:\n\nconnect the generator\nwith the motor\n\nplace a wire stone\nnext to the exit"
  ],
  "player": {
    "coordinates": { "x": 5, "y": 6, "z": 4 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": false
      },
      "at": [
        { "x": 4, "y": 4, "z": 2 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "bomb"
      },
      "at": [
        { "x": 4, "y": 4, "z": 4 },
        { "x": 1, "y": 1, "z": 2 },
        { "x": 7, "y": 7, "z": 2 },
        { "x": 7, "y": 1, "z": 2 },
        { "x": 1, "y": 7, "z": 2 },
        { "x": 1, "y": 1, "z": 7 },
        { "x": 7, "y": 7, "z": 7 },
        { "x": 7, "y": 1, "z": 7 },
        { "x": 1, "y": 7, "z": 7 },
        { "x": 4, "y": 4, "z": 7 },
        { "x": 4, "y": 1, "z": 7 },
        { "x": 1, "y": 4, "z": 7 },
        { "x": 4, "y": 7, "z": 7 },
        { "x": 7, "y": 4, "z": 7 }
      ]
    },
    {
      "clone": {
        "type": "wireStone"
      },
      "at": [
        { "x": 5, "y": 4, "z": 4 },
        { "x": 4, "y": 5, "z": 4 },
        { "x": 3, "y": 4, "z": 4 },
        { "x": 4, "y": 3, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 3, "y": 1, "z": 2 },
        { "x": 5, "y": 1, "z": 2 },
        { "x": 3, "y": 7, "z": 2 },
        { "x": 5, "y": 7, "z": 2 },
        { "x": 1, "y": 3, "z": 2 },
        { "x": 1, "y": 5, "z": 2 },
        { "x": 7, "y": 3, "z": 2 },
        { "x": 7, "y": 5, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "motorGear",
        "face": "NZ"
      },
      "at": [
        { "x": 5, "y": 4, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "motorCylinder",
        "face": "NZ"
      },
      "at": [
        { "x": 5, "y": 4, "z": 7 }
      ]
    },
    {
      "clone": {
        "type": "generator",
        "face": "NZ"
      },
      "at": [
        { "x": 4, "y": 4, "z": 5 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NY",
        "connections": 5
      },
      "at": [
        { "x": 4, "y": 8, "z": 0 },
        { "x": 4, "y": 8, "z": 1 },
        { "x": 4, "y": 8, "z": 2 },
        { "x": 4, "y": 8, "z": 3 },
        { "x": 4, "y": 8, "z": 4 },
        { "x": 4, "y": 8, "z": 5 },
        { "x": 4, "y": 8, "z": 6 },
        { "x": 4, "y": 8, "z": 7 },
        { "x": 4, "y": 8, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PY",
        "connections": 5
      },
      "at": [
        { "x": 4, "y": 0, "z": 0 },
        { "x": 4, "y": 0, "z": 1 },
        { "x": 4, "y": 0, "z": 2 },
        { "x": 4, "y": 0, "z": 3 },
        { "x": 4, "y": 0, "z": 4 },
        { "x": 4, "y": 0, "z": 5 },
        { "x": 4, "y": 0, "z": 6 },
        { "x": 4, "y": 0, "z": 7 },
        { "x": 4, "y": 0, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "PZ",
        "connections": 5
      },
      "at": [
        { "x": 4, "y": 0, "z": 0 },
        { "x": 4, "y": 1, "z": 0 },
        { "x": 4, "y": 2, "z": 0 },
        { "x": 4, "y": 3, "z": 0 },
        { "x": 4, "y": 4, "z": 0 },
        { "x": 4, "y": 5, "z": 0 },
        { "x": 4, "y": 6, "z": 0 },
        { "x": 4, "y": 7, "z": 0 },
        { "x": 4, "y": 8, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "wire",
        "face": "NZ",
        "connections": 5
      },
      "at": [
        { "x": 4, "y": 0, "z": 8 },
        { "x": 4, "y": 1, "z": 8 },
        { "x": 4, "y": 2, "z": 8 },
        { "x": 4, "y": 3, "z": 8 },
        { "x": 4, "y": 4, "z": 8 },
        { "x": 4, "y": 5, "z": 8 },
        { "x": 4, "y": 6, "z": 8 },
        { "x": 4, "y": 7, "z": 8 },
        { "x": 4, "y": 8, "z": 8 }
      ]
    }
  ]
};

  // Source capture: mesh
  levelTemplates.mesh = {
  "port_status": "being-ported",
  "portNotes": [
    "216 colored slippery stones in the original 11\u00d711\u00d711 lattice. Slippery grabbing rules and slit visuals are missing."
  ],
  "size": { "x": 11, "y": 11, "z": 11 },
  "intro": "mesh",
  "help": [
    "$scale(1.5)mission:\nget to the exit!"
  ],
  "player": {
    "coordinates": { "x": 0, "y": 0, "z": 5 },
    "nostatus": 0
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 5, "y": 5, "z": 5 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.0,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.0,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 0, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 0, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 0, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.2,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 2, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.2,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 2, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.2,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 2, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.2,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 2, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.2,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 2, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.2,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 2, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.4,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 4, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.4,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 4, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.4,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 4, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.4,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 4, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.4,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 4, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.4,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 4, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.6000000000000001,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 6, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.6000000000000001,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 6, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.6000000000000001,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 6, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.6000000000000001,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 6, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.6000000000000001,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 6, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.6000000000000001,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 6, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.8,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 8, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.8,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 8, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.8,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 8, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.8,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 8, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.8,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 8, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          0.8,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 8, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          1.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 10, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          1.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 10, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          1.0,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 10, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          1.0,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 10, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          1.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 10, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.0,
          1.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 0, "y": 10, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.0,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.0,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 0, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 0, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 0, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.2,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 2, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.2,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 2, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.2,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 2, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.2,
          0.6000000000000001,
          0.99
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 2, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.2,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 2, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.2,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 2, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.4,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 4, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.4,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 4, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.4,
          0.4,
          0.67
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 4, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.4,
          0.6000000000000001,
          0.59
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 4, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.4,
          0.8,
          0.83
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 4, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.4,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 4, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.6000000000000001,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 6, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.6000000000000001,
          0.2,
          0.99
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 6, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.6000000000000001,
          0.4,
          0.59
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 6, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.6000000000000001,
          0.6000000000000001,
          0.51
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 6, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.6000000000000001,
          0.8,
          0.75
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 6, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.6000000000000001,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 6, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.8,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 8, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.8,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 8, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.8,
          0.4,
          0.83
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 8, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.8,
          0.6000000000000001,
          0.75
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 8, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.8,
          0.8,
          0.99
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 8, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          0.8,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 8, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          1.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 10, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          1.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 10, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          1.0,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 10, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          1.0,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 10, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          1.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 10, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.2,
          1.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 2, "y": 10, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.0,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.0,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 0, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 0, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 0, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.2,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 2, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.2,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 2, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.2,
          0.4,
          0.67
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 2, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.2,
          0.6000000000000001,
          0.59
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 2, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.2,
          0.8,
          0.83
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 2, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.2,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 2, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.4,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.4,
          0.2,
          0.67
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.4,
          0.4,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.4,
          0.6000000000000001,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.4,
          0.8,
          0.43
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.4,
          1.0,
          0.99
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 4, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.6000000000000001,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 6, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.6000000000000001,
          0.2,
          0.59
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 6, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.6000000000000001,
          0.4,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 6, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.6000000000000001,
          0.6000000000000001,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 6, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.6000000000000001,
          0.8,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 6, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.6000000000000001,
          1.0,
          0.91
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 6, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.8,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 8, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.8,
          0.2,
          0.83
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 8, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.8,
          0.4,
          0.43
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 8, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.8,
          0.6000000000000001,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 8, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.8,
          0.8,
          0.59
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 8, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          0.8,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 8, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          1.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 10, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          1.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 10, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          1.0,
          0.4,
          0.99
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 10, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          1.0,
          0.6000000000000001,
          0.91
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 10, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          1.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 10, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.4,
          1.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 4, "y": 10, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.0,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.0,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 0, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 0, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 0, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.2,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 2, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.2,
          0.2,
          0.99
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 2, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.2,
          0.4,
          0.59
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 2, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.2,
          0.6000000000000001,
          0.51
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 2, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.2,
          0.8,
          0.75
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 2, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.2,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 2, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.4,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 4, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.4,
          0.2,
          0.59
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 4, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.4,
          0.4,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 4, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.4,
          0.6000000000000001,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 4, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.4,
          0.8,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 4, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.4,
          1.0,
          0.91
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 4, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.6000000000000001,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 6, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.6000000000000001,
          0.2,
          0.51
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 6, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.6000000000000001,
          0.4,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 6, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.6000000000000001,
          0.6000000000000001,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 6, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.6000000000000001,
          0.8,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 6, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.6000000000000001,
          1.0,
          0.83
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 6, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.8,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 8, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.8,
          0.2,
          0.75
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 8, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.8,
          0.4,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 8, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.8,
          0.6000000000000001,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 8, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.8,
          0.8,
          0.51
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 8, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          0.8,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 8, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          1.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 10, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          1.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 10, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          1.0,
          0.4,
          0.91
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 10, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          1.0,
          0.6000000000000001,
          0.83
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 10, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          1.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 10, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.6000000000000001,
          1.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 6, "y": 10, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.0,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.0,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 0, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 0, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 0, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.2,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 2, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.2,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 2, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.2,
          0.4,
          0.83
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 2, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.2,
          0.6000000000000001,
          0.75
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 2, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.2,
          0.8,
          0.99
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 2, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.2,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 2, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.4,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 4, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.4,
          0.2,
          0.83
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 4, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.4,
          0.4,
          0.43
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 4, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.4,
          0.6000000000000001,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 4, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.4,
          0.8,
          0.59
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 4, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.4,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 4, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.6000000000000001,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 6, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.6000000000000001,
          0.2,
          0.75
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 6, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.6000000000000001,
          0.4,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 6, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.6000000000000001,
          0.6000000000000001,
          0.4
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 6, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.6000000000000001,
          0.8,
          0.51
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 6, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.6000000000000001,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 6, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.8,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 8, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.8,
          0.2,
          0.99
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 8, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.8,
          0.4,
          0.59
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 8, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.8,
          0.6000000000000001,
          0.51
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 8, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.8,
          0.8,
          0.75
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 8, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          0.8,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 8, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          1.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 10, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          1.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 10, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          1.0,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 10, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          1.0,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 10, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          1.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 10, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          0.8,
          1.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 8, "y": 10, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 0, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 0, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.0,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 0, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.0,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 0, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 0, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 0, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.2,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 2, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.2,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 2, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.2,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 2, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.2,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 2, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.2,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 2, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.2,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 2, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.4,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 4, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.4,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 4, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.4,
          0.4,
          0.99
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 4, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.4,
          0.6000000000000001,
          0.91
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 4, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.4,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 4, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.4,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 4, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.6000000000000001,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 6, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.6000000000000001,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 6, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.6000000000000001,
          0.4,
          0.91
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 6, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.6000000000000001,
          0.6000000000000001,
          0.83
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 6, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.6000000000000001,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 6, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.6000000000000001,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 6, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.8,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 8, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.8,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 8, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.8,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 8, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.8,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 8, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.8,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 8, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          0.8,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 8, "z": 10 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          1.0,
          0.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 10, "z": 0 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          1.0,
          0.2,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 10, "z": 2 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          1.0,
          0.4,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 10, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          1.0,
          0.6000000000000001,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 10, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          1.0,
          0.8,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 10, "z": 8 }
      ]
    },
    {
      "clone": {
        "type": "stone",
        "color": [
          1.0,
          1.0,
          1.0,
          1.0
        ],
        "slippery": true
      },
      "at": [
        { "x": 10, "y": 10, "z": 10 }
      ]
    }
  ]
};

  // Source capture: columns
  levelTemplates.columns = {
  "port_status": "being-ported",
  "portNotes": [
    "Original stone columns, with four source cells removed.",
    "No route certified within the bounded search; full puzzle completion remains unverified."
  ],
  "size": { "x": 7, "y": 9, "z": 7 },
  "intro": "columns",
  "help": [
    "$scale(1.5)mission:\nget to the exit!\n\nto get to the exit,\nuse the stones"
  ],
  "player": {
    "coordinates": { "x": 3, "y": 3, "z": 3 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": true
      },
      "at": [
        { "x": 3, "y": 4, "z": 3 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "stone"
      },
      "at": [
        { "x": 0, "y": 0, "z": 0 },
        { "x": 0, "y": 0, "z": 2 },
        { "x": 0, "y": 0, "z": 4 },
        { "x": 0, "y": 0, "z": 6 },
        { "x": 2, "y": 0, "z": 0 },
        { "x": 2, "y": 0, "z": 2 },
        { "x": 2, "y": 0, "z": 4 },
        { "x": 2, "y": 0, "z": 6 },
        { "x": 4, "y": 0, "z": 0 },
        { "x": 4, "y": 0, "z": 2 },
        { "x": 4, "y": 0, "z": 4 },
        { "x": 4, "y": 0, "z": 6 },
        { "x": 6, "y": 0, "z": 0 },
        { "x": 6, "y": 0, "z": 2 },
        { "x": 6, "y": 0, "z": 4 },
        { "x": 6, "y": 0, "z": 6 },
        { "x": 0, "y": 1, "z": 0 },
        { "x": 0, "y": 1, "z": 2 },
        { "x": 0, "y": 1, "z": 4 },
        { "x": 0, "y": 1, "z": 6 },
        { "x": 2, "y": 1, "z": 0 },
        { "x": 2, "y": 1, "z": 2 },
        { "x": 2, "y": 1, "z": 4 },
        { "x": 2, "y": 1, "z": 6 },
        { "x": 4, "y": 1, "z": 0 },
        { "x": 4, "y": 1, "z": 2 },
        { "x": 4, "y": 1, "z": 4 },
        { "x": 4, "y": 1, "z": 6 },
        { "x": 6, "y": 1, "z": 0 },
        { "x": 6, "y": 1, "z": 2 },
        { "x": 6, "y": 1, "z": 4 },
        { "x": 6, "y": 1, "z": 6 },
        { "x": 0, "y": 2, "z": 0 },
        { "x": 0, "y": 2, "z": 2 },
        { "x": 0, "y": 2, "z": 4 },
        { "x": 0, "y": 2, "z": 6 },
        { "x": 2, "y": 2, "z": 0 },
        { "x": 2, "y": 2, "z": 2 },
        { "x": 2, "y": 2, "z": 4 },
        { "x": 2, "y": 2, "z": 6 },
        { "x": 4, "y": 2, "z": 0 },
        { "x": 4, "y": 2, "z": 2 },
        { "x": 4, "y": 2, "z": 4 },
        { "x": 4, "y": 2, "z": 6 },
        { "x": 6, "y": 2, "z": 0 },
        { "x": 6, "y": 2, "z": 2 },
        { "x": 6, "y": 2, "z": 4 },
        { "x": 6, "y": 2, "z": 6 },
        { "x": 0, "y": 3, "z": 0 },
        { "x": 0, "y": 3, "z": 2 },
        { "x": 0, "y": 3, "z": 4 },
        { "x": 0, "y": 3, "z": 6 },
        { "x": 2, "y": 3, "z": 0 },
        { "x": 2, "y": 3, "z": 2 },
        { "x": 2, "y": 3, "z": 4 },
        { "x": 2, "y": 3, "z": 6 },
        { "x": 4, "y": 3, "z": 0 },
        { "x": 4, "y": 3, "z": 2 },
        { "x": 4, "y": 3, "z": 4 },
        { "x": 4, "y": 3, "z": 6 },
        { "x": 6, "y": 3, "z": 0 },
        { "x": 6, "y": 3, "z": 2 },
        { "x": 6, "y": 3, "z": 4 },
        { "x": 6, "y": 3, "z": 6 },
        { "x": 0, "y": 4, "z": 0 },
        { "x": 0, "y": 4, "z": 2 },
        { "x": 0, "y": 4, "z": 4 },
        { "x": 0, "y": 4, "z": 6 },
        { "x": 2, "y": 4, "z": 0 },
        { "x": 2, "y": 4, "z": 6 },
        { "x": 4, "y": 4, "z": 0 },
        { "x": 4, "y": 4, "z": 6 },
        { "x": 6, "y": 4, "z": 0 },
        { "x": 6, "y": 4, "z": 2 },
        { "x": 6, "y": 4, "z": 4 },
        { "x": 6, "y": 4, "z": 6 },
        { "x": 0, "y": 5, "z": 0 },
        { "x": 0, "y": 5, "z": 2 },
        { "x": 0, "y": 5, "z": 4 },
        { "x": 0, "y": 5, "z": 6 },
        { "x": 2, "y": 5, "z": 0 },
        { "x": 2, "y": 5, "z": 2 },
        { "x": 2, "y": 5, "z": 4 },
        { "x": 2, "y": 5, "z": 6 },
        { "x": 4, "y": 5, "z": 0 },
        { "x": 4, "y": 5, "z": 2 },
        { "x": 4, "y": 5, "z": 4 },
        { "x": 4, "y": 5, "z": 6 },
        { "x": 6, "y": 5, "z": 0 },
        { "x": 6, "y": 5, "z": 2 },
        { "x": 6, "y": 5, "z": 4 },
        { "x": 6, "y": 5, "z": 6 },
        { "x": 0, "y": 6, "z": 0 },
        { "x": 0, "y": 6, "z": 2 },
        { "x": 0, "y": 6, "z": 4 },
        { "x": 0, "y": 6, "z": 6 },
        { "x": 2, "y": 6, "z": 0 },
        { "x": 2, "y": 6, "z": 2 },
        { "x": 2, "y": 6, "z": 4 },
        { "x": 2, "y": 6, "z": 6 },
        { "x": 4, "y": 6, "z": 0 },
        { "x": 4, "y": 6, "z": 2 },
        { "x": 4, "y": 6, "z": 4 },
        { "x": 4, "y": 6, "z": 6 },
        { "x": 6, "y": 6, "z": 0 },
        { "x": 6, "y": 6, "z": 2 },
        { "x": 6, "y": 6, "z": 4 },
        { "x": 6, "y": 6, "z": 6 },
        { "x": 0, "y": 7, "z": 0 },
        { "x": 0, "y": 7, "z": 2 },
        { "x": 0, "y": 7, "z": 4 },
        { "x": 0, "y": 7, "z": 6 },
        { "x": 2, "y": 7, "z": 0 },
        { "x": 2, "y": 7, "z": 2 },
        { "x": 2, "y": 7, "z": 4 },
        { "x": 2, "y": 7, "z": 6 },
        { "x": 4, "y": 7, "z": 0 },
        { "x": 4, "y": 7, "z": 2 },
        { "x": 4, "y": 7, "z": 4 },
        { "x": 4, "y": 7, "z": 6 },
        { "x": 6, "y": 7, "z": 0 },
        { "x": 6, "y": 7, "z": 2 },
        { "x": 6, "y": 7, "z": 4 },
        { "x": 6, "y": 7, "z": 6 },
        { "x": 0, "y": 8, "z": 0 },
        { "x": 0, "y": 8, "z": 2 },
        { "x": 0, "y": 8, "z": 4 },
        { "x": 0, "y": 8, "z": 6 },
        { "x": 2, "y": 8, "z": 0 },
        { "x": 2, "y": 8, "z": 2 },
        { "x": 2, "y": 8, "z": 4 },
        { "x": 2, "y": 8, "z": 6 },
        { "x": 4, "y": 8, "z": 0 },
        { "x": 4, "y": 8, "z": 2 },
        { "x": 4, "y": 8, "z": 4 },
        { "x": 4, "y": 8, "z": 6 },
        { "x": 6, "y": 8, "z": 0 },
        { "x": 6, "y": 8, "z": 2 },
        { "x": 6, "y": 8, "z": 4 },
        { "x": 6, "y": 8, "z": 6 }
      ]
    }
  ]
};

  // Source capture: machine
  levelTemplates.machine = {
  "port_status": "being-ported",
  "portNotes": [
    "Original motor, gear rows, generator and supporting walls. Electrical exit activation is missing; exit remains closed."
  ],
  "size": { "x": 5, "y": 5, "z": 9 },
  "intro": "machine",
  "help": [
    "$scale(1.5)mission:\nactivate the exit!"
  ],
  "player": {
    "orientation": "roty270",
    "coordinates": { "x": 2, "y": 2, "z": 4 }
  },
  "exits": [
    {
      "clone": {
        "name": "exit",
        "active": false
      },
      "at": [
        { "x": 1, "y": 2, "z": 8 }
      ]
    }
  ],
  "objects": [
    {
      "clone": {
        "type": "motorGear",
        "face": "PX"
      },
      "at": [
        { "x": 0, "y": 2, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wall"
      },
      "at": [
        { "x": 0, "y": 2, "z": 3 },
        { "x": 0, "y": 2, "z": 5 },
        { "x": 4, "y": 0, "z": 1 },
        { "x": 4, "y": 4, "z": 1 },
        { "x": 0, "y": 0, "z": 1 },
        { "x": 0, "y": 4, "z": 1 },
        { "x": 4, "y": 0, "z": 3 },
        { "x": 4, "y": 4, "z": 3 },
        { "x": 0, "y": 0, "z": 3 },
        { "x": 0, "y": 4, "z": 3 },
        { "x": 4, "y": 0, "z": 5 },
        { "x": 4, "y": 4, "z": 5 },
        { "x": 0, "y": 0, "z": 5 },
        { "x": 0, "y": 4, "z": 5 },
        { "x": 4, "y": 0, "z": 7 },
        { "x": 4, "y": 4, "z": 7 },
        { "x": 0, "y": 0, "z": 7 },
        { "x": 0, "y": 4, "z": 7 }
      ]
    },
    {
      "clone": {
        "type": "motorCylinder",
        "face": "PX"
      },
      "at": [
        { "x": 1, "y": 2, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "wireStone"
      },
      "at": [
        { "x": 0, "y": 2, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "gear",
        "face": "PX"
      },
      "at": [
        { "x": 0, "y": 1, "z": 2 },
        { "x": 0, "y": 3, "z": 2 },
        { "x": 0, "y": 1, "z": 6 },
        { "x": 0, "y": 3, "z": 6 }
      ]
    },
    {
      "clone": {
        "type": "gear",
        "face": "PX",
        "active": true
      },
      "at": [
        { "x": 0, "y": 1, "z": 4 },
        { "x": 0, "y": 3, "z": 4 }
      ]
    },
    {
      "clone": {
        "type": "generator",
        "face": "PX"
      },
      "at": [
        { "x": 0, "y": 2, "z": 2 }
      ]
    }
  ]
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
