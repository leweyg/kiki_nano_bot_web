(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) module.exports = factory();
  else root.Kiki = factory();
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var themes = ["mint", "copper", "sky", "violet", "lime", "coral"];
  var actionTimings = {
    "move forward": 200,
    "move backward": 200,
    "turn left": 200,
    "turn right": 200,
    "jump": 120,
    "jump forward": 200,
    "jump far forward": 400,
    "fall": 120,
    "fall forward": 200,
    "shoot": 200
  };
  var solverActions = ["move forward", "move backward", "turn left", "turn right", "jump forward", "jump far forward", "jump", "push forward", "push backward", "shoot"];
  var EXIT_TOUCH_RADIUS_SQUARED = 0.98 * 0.98;
  var levelDefinitions = [
    { index: 0, id: "start", title: "start", create: makeIndex00StartLevel },
    { index: 1, id: "steps", title: "steps", create: makeIndex01StepsLevel },
    { index: 2, id: "move", title: "move", create: makeIndex02MoveLevel },
    { index: 3, id: "electro", title: "electro", create: makeIndex03ElectroLevel },
    { index: 4, id: "elevate", title: "elevate", create: makeIndex04ElevateLevel },
    { index: 5, id: "throw", title: "throw", create: makeIndex05ThrowLevel },
    { index: 6, id: "gold", title: "gold" },
    { index: 7, id: "jump", title: "jump" },
    { index: 8, id: "escape", title: "escape" },
    { index: 9, id: "gears", title: "gears" },
    { index: 10, id: "gamma", title: "gamma" },
    { index: 11, id: "cube", title: "cube" },
    { index: 12, id: "switch", title: "switch" },
    { index: 13, id: "borg", title: "borg" },
    { index: 14, id: "mini", title: "mini" },
    { index: 15, id: "blocks", title: "blocks" },
    { index: 16, id: "bombs", title: "bombs" },
    { index: 17, id: "sandbox", title: "sandbox" },
    { index: 18, id: "energy", title: "energy" },
    { index: 19, id: "maze", title: "maze" },
    { index: 20, id: "love", title: "love" },
    { index: 21, id: "towers", title: "towers" },
    { index: 22, id: "edge", title: "edge" },
    { index: 23, id: "random", title: "random" },
    { index: 24, id: "plate", title: "plate" },
    { index: 25, id: "nice", title: "nice" },
    { index: 26, id: "entropy", title: "entropy" },
    { index: 27, id: "slick", title: "slick" },
    { index: 28, id: "bridge", title: "bridge" },
    { index: 29, id: "flower", title: "flower" },
    { index: 30, id: "stones", title: "stones" },
    { index: 31, id: "walls", title: "walls" },
    { index: 32, id: "grid", title: "grid" },
    { index: 33, id: "rings", title: "rings" },
    { index: 34, id: "core", title: "core" },
    { index: 35, id: "bronze", title: "bronze" },
    { index: 36, id: "pool", title: "pool" },
    { index: 37, id: "hidden", title: "hidden" },
    { index: 38, id: "church", title: "church" },
    { index: 39, id: "strange", title: "strange" },
    { index: 40, id: "mesh", title: "mesh" },
    { index: 41, id: "columns", title: "columns" },
    { index: 42, id: "machine", title: "machine" },
    { index: 43, id: "neutron", title: "neutron" },
    { index: 44, id: "captured", title: "captured" },
    { index: 45, id: "circuit", title: "circuit" },
    { index: 46, id: "regal", title: "regal" },
    { index: 47, id: "conductor", title: "conductor" },
    { index: 48, id: "evil", title: "evil" },
    { index: 49, id: "mutants", title: "mutants" }
  ];
  var levelNames = levelDefinitions.map(function (definition) { return definition.id; });

  function hash(name) {
    var value = 0;
    for (var index = 0; index < name.length; index += 1) value = (value * 31 + name.charCodeAt(index)) >>> 0;
    return value;
  }

  function decenter(size, position) {
    return {
      x: position.x + Math.floor(size.x / 2),
      y: position.y + Math.floor(size.y / 2),
      z: position.z + Math.floor(size.z / 2)
    };
  }

  function pos(x, y, z) { return { x: x, y: y, z: z }; }
  function center(size) { return pos(Math.floor(size.x / 2), Math.floor(size.y / 2), Math.floor(size.z / 2)); }
  function inside(size, position) {
    return position.x >= 0 && position.y >= 0 && position.z >= 0 &&
      position.x < size.x && position.y < size.y && position.z < size.z;
  }
  function objectSpec(type, coordinates, extra) {
    var object = { type: type, coordinates: copyPosition(coordinates) };
    if (extra) Object.keys(extra).forEach(function (name) { object[name] = extra[name]; });
    return object;
  }
  function addObjectLine(size, objects, type, start, end, extra) {
    var dx = end.x - start.x;
    var dy = end.y - start.y;
    var dz = end.z - start.z;
    var steps = Math.max(Math.abs(dx), Math.abs(dy), Math.abs(dz));
    for (var index = 0; index <= steps; index += 1) {
      var coordinates = pos(
        Math.round(start.x + dx * index / steps),
        Math.round(start.y + dy * index / steps),
        Math.round(start.z + dz * index / steps)
      );
      if (inside(size, coordinates)) objects.push(objectSpec(type, coordinates, extra));
    }
  }

  function makeIndex00StartLevel(index) {
    var size = { x: 7, y: 7, z: 11 };
    var objectSpecs = [
      { type: "wall", position: { x: 0, y: 0, z: -2 } },
      { type: "wall", position: { x: 0, y: 0, z: -4 } },
      { type: "wall", position: { x: 0, y: 0, z: 1 } }
    ];
    var exits = [{ name: "exit", active: true, position: { x: 0, y: 0, z: 3 } }];
    objectSpecs.forEach(function (object) { object.coordinates = decenter(size, object.position); });
    exits.forEach(function (exit) { exit.coordinates = decenter(size, exit.position); });
    return {
      id: "start",
      title: "start",
      index: index,
      theme: "mint",
      source: "kiki/py/levels/start.py",
      scheme: "default_scheme",
      size: size,
      intro: "start",
      help: [
        "$scale(1.5)mission:\nget to the exit!\n\nto get to the exit,\njump on the stones",
        "to jump,\npress \"$key(jump)\"\nwhile moving",
        "to move, press \"$key(move forward)\" or \"$key(move backward)\",\n\nto turn, press \"$key(turn left)\" or \"$key(turn right)\""
      ],
      player: {
        coordinates: { x: 3, y: 0, z: 3 },
        orientation: "roty90",
        nostatus: false
      },
      start: { x: 3, y: 0, z: 3 },
      exits: exits,
      exit: exits[0].coordinates,
      objects: objectSpecs,
      walls: objectSpecs.map(function (object) { return object.coordinates; })
    };
  }

  function makeIndex01StepsLevel(index) {
    var size = { x: 7, y: 7, z: 13 };
    var objectSpecs = [
      { type: "wall", position: { x: 0, y: 0, z: 3 } },
      { type: "wall", position: { x: 0, y: -1, z: 1 } },
      { type: "wall", position: { x: 0, y: -2, z: -1 } },
      { type: "wall", position: { x: 0, y: -3, z: -3 } }
    ];
    var exits = [{ name: "exit", active: true, position: { x: 0, y: 1, z: 3 } }];
    objectSpecs.forEach(function (object) { object.coordinates = decenter(size, object.position); });
    exits.forEach(function (exit) { exit.coordinates = decenter(size, exit.position); });
    return {
      id: "steps",
      title: "steps",
      index: index,
      theme: "sky",
      source: "kiki/py/levels/steps.py",
      scheme: "blue_scheme",
      size: size,
      intro: "steps",
      help: [
        "$scale(1.5)mission:\nget to the exit!\n\nto get to the exit,\njump on the stones",
        "to jump,\npress \"$key(jump)\"\nwhile moving",
        "to move, press \"$key(move forward)\" or \"$key(move backward)\",\n\nto turn, press \"$key(turn left)\" or \"$key(turn right)\""
      ],
      player: { coordinates: { x: 3, y: 0, z: 6 }, nostatus: false },
      start: { x: 3, y: 0, z: 6 },
      exits: exits,
      exit: exits[0].coordinates,
      objects: objectSpecs,
      walls: objectSpecs.map(function (object) { return object.coordinates; })
    };
  }

  function makeIndex02MoveLevel(index) {
    var size = { x: 7, y: 7, z: 7 };
    var stones = [
      { x: 2, y: 4, z: 0 }, { x: 4, y: 4, z: 0 }, { x: 4, y: 2, z: 0 }, { x: 2, y: 2, z: 0 },
      { x: 2, y: 3, z: 0 }, { x: 4, y: 3, z: 0 }, { x: 3, y: 2, z: 0 }, { x: 3, y: 4, z: 0 },
      { x: 3, y: 3, z: 1 }
    ];
    var objects = stones.map(function (coordinates) { return { type: "stone", coordinates: coordinates }; });
    objects.push({ type: "switch", name: "exit switch", active: false, toggles: ["exit"], coordinates: { x: 3, y: 3, z: 0 } });
    var exits = [{ name: "exit", active: false, position: { x: 0, y: 0, z: 0 } }];
    exits.forEach(function (exit) { exit.coordinates = decenter(size, exit.position); });
    return {
      id: "move",
      title: "move",
      index: index,
      theme: "coral",
      source: "kiki/py/levels/move.py",
      scheme: "red_scheme",
      size: size,
      intro: "move",
      help: [
        "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit,\nactivate the switch\n\nto activate the switch,\nshoot it\n\nto be able to shoot the switch,\nmove the stone",
        "to move a stone, press \"$key(push)\" while moving\n\nto shoot, press \"$key(shoot)\""
      ],
      player: { coordinates: { x: 3, y: 5, z: 5 }, orientation: "roty180", nostatus: false },
      start: { x: 3, y: 5, z: 5 },
      exits: exits,
      exit: exits[0].coordinates,
      objects: objects,
      walls: []
    };
  }

  function makeIndex03ElectroLevel(index) {
    var size = { x: 9, y: 7, z: 9 };
    var c = center(size);
    var objects = [];
    var exits = [{ name: "exit", active: false, position: pos(0, 0, 0) }];
    exits.forEach(function (exit) { exit.coordinates = decenter(size, exit.position); });

    addObjectLine(size, objects, "wireStone", decenter(size, pos(-2, Math.floor(size.y / 2), 0)), decenter(size, pos(-2, 0, 0)));
    addObjectLine(size, objects, "wireStone", decenter(size, pos(2, Math.floor(size.y / 2), 0)), decenter(size, pos(2, 0, 0)));
    addObjectLine(size, objects, "wireStone", decenter(size, pos(2, 0, 0)), decenter(size, pos(0, 0, 0)));
    addObjectLine(size, objects, "wireStone", decenter(size, pos(-2, 0, 0)), decenter(size, pos(0, 0, 0)));

    objects.push(objectSpec("gear", pos(c.x - 1, 0, c.z - 1), { face: "PY" }));
    objects.push(objectSpec("generator", pos(c.x + 1, 0, c.z + 1), { face: "PY", active: true }));
    objects.push(objectSpec("motorCylinder", pos(c.x, 1, c.z), { face: "PY" }));
    objects.push(objectSpec("motorGear", pos(c.x, 0, c.z), { face: "PY" }));

    addObjectLine(size, objects, "wire", pos(c.x - 1, 0, c.z - 2), pos(c.x + 2, 0, c.z - 2), { face: "PY", connections: 10 });
    addObjectLine(size, objects, "wire", pos(c.x - 1, 0, c.z + 2), pos(c.x + 2, 0, c.z + 2), { face: "PY", connections: 10 });
    addObjectLine(size, objects, "wire", pos(c.x - 2, 0, c.z - 1), pos(c.x - 2, 0, c.z + 2), { face: "PY", connections: 5 });
    addObjectLine(size, objects, "wire", pos(c.x + 2, 0, c.z - 1), pos(c.x + 2, 0, c.z + 2), { face: "PY", connections: 5 });
    objects.push(objectSpec("wire", pos(c.x - 2, 0, c.z - 2), { face: "PY", connections: 6 }));
    objects.push(objectSpec("wire", pos(c.x - 2, 0, c.z + 2), { face: "PY", connections: 3 }));
    objects.push(objectSpec("wire", pos(c.x + 2, 0, c.z + 2), { face: "PY", connections: 9 }));
    objects.push(objectSpec("wire", pos(c.x + 2, 0, c.z - 2), { face: "PY", connections: 12 }));

    addObjectLine(size, objects, "wire", pos(0, 0, c.z), pos(0, size.y, c.z), { face: "PX", connections: 5 });
    addObjectLine(size, objects, "wire", pos(size.x - 1, 0, c.z), pos(size.x - 1, size.y, c.z), { face: "NX", connections: 5 });
    addObjectLine(size, objects, "wire", pos(0, size.y - 1, c.z), pos(c.x - 2, size.y - 1, c.z), { face: "NY", connections: 10 });
    addObjectLine(size, objects, "wire", pos(size.x - 2, size.y - 1, c.z), pos(size.x, size.y - 1, c.z), { face: "NY", connections: 10 });
    addObjectLine(size, objects, "wire", pos(0, 0, c.z), pos(c.x - 2, 0, c.z), { face: "PY", connections: 10 });
    addObjectLine(size, objects, "wire", pos(size.x - 2, 0, c.z), pos(size.x, 0, c.z), { face: "PY", connections: 10 });
    objects.push(objectSpec("wire", pos(c.x - 2, 0, c.z), { face: "PY", connections: 13 }));
    objects.push(objectSpec("wire", pos(c.x + 2, 0, c.z), { face: "PY", connections: 7 }));
    objects = objects.filter(function (object) {
      return !(object.type === "wireStone" && object.coordinates.x === exits[0].coordinates.x &&
        object.coordinates.y === exits[0].coordinates.y && object.coordinates.z === exits[0].coordinates.z);
    });

    return {
      id: "electro",
      title: "electro",
      index: index,
      theme: "lime",
      source: "kiki/py/levels/electro.py",
      scheme: "metal_scheme",
      size: size,
      intro: "electro",
      powerCondition: "connectedMotor",
      solverActions: ["move forward", "move backward", "turn left", "turn right", "jump forward", "jump"],
      help: "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit\nfeed it with electricity:\n\nconnect the generator\nwith the motor",
      player: { coordinates: pos(2, 0, 4), orientation: "rotz180", nostatus: false },
      start: pos(2, 0, 4),
      exits: exits,
      exit: exits[0].coordinates,
      objects: objects,
      walls: []
    };
  }

  function makeIndex04ElevateLevel(index) {
    var size = { x: 9, y: 5, z: 7 };
    var c = center(size);
    var objects = [];
    var exits = [{ name: "exit", active: false, position: pos(2, -2, 0) }];
    exits.forEach(function (exit) { exit.coordinates = decenter(size, exit.position); });

    objects.push(objectSpec("motorGear", pos(c.x - 3, size.y - 1, c.z), { face: "NY" }));
    objects.push(objectSpec("motorCylinder", pos(c.x - 3, size.y - 2, c.z), { face: "NY" }));
    objects.push(objectSpec("generator", pos(c.x + 2, 1, c.z - 1), { face: "NY", active: true, circuitPart: true }));
    objects.push(objectSpec("gear", pos(c.x + 1, 1, c.z + 1), { face: "NY", circuitPart: true }));
    objects.push(objectSpec("gear", pos(c.x, 1, c.z - 1), { face: "NY", circuitPart: true }));
    objects.push(objectSpec("gear", pos(c.x - 1, 1, c.z + 1), { face: "NY", circuitPart: true }));
    objects.push(objectSpec("gear", pos(c.x - 2, 1, c.z - 1), { face: "NY", circuitPart: true }));

    addObjectLine(size, objects, "wire", pos(c.x + 2, size.y - 1, 0), pos(c.x + 2, size.y - 1, size.z), { face: "NY", connections: "vertical" });
    addObjectLine(size, objects, "wire", pos(c.x + 2, 0, 0), pos(c.x + 2, 0, size.z), { face: "PY", connections: "vertical" });
    addObjectLine(size, objects, "wire", pos(c.x + 2, 0, 0), pos(c.x + 2, size.y, 0), { face: "PZ", connections: "vertical" });
    addObjectLine(size, objects, "wire", pos(c.x + 2, 0, size.z - 1), pos(c.x + 2, size.y, size.z - 1), { face: "NZ", connections: "vertical" });

    objects.push(objectSpec("bomb", pos(c.x + 2, 0, c.z - 1)));
    objects.push(objectSpec("bomb", pos(c.x + 1, 0, c.z + 1)));
    objects.push(objectSpec("bomb", pos(c.x, 0, c.z - 1)));
    objects.push(objectSpec("bomb", pos(c.x - 1, 0, c.z + 1)));
    objects.push(objectSpec("bomb", pos(c.x - 2, 0, c.z - 1)));

    return {
      id: "elevate",
      title: "elevate",
      index: index,
      theme: "copper",
      source: "kiki/py/levels/elevate.py",
      scheme: "bronze_scheme",
      size: size,
      intro: "elevate",
      powerCondition: "elevatedCircuit",
      solverActions: ["move forward", "move backward", "turn left", "turn right", "shoot"],
      help: "$scale(1.5)mission:\nactivate the exit!\n\nto activate the exit,\nfeed it with electricity\n\nuse the bombs\nto elevate the gears\nand the generator\n\nthe bombs will detonate\nif you shoot them",
      player: { coordinates: decenter(size, pos(3, -2, 0)), orientation: "roty90", nostatus: false },
      start: decenter(size, pos(3, -2, 0)),
      exits: exits,
      exit: exits[0].coordinates,
      objects: objects,
      walls: []
    };
  }

  function makeIndex05ThrowLevel(index) {
    var size = { x: 5, y: 7, z: 7 };
    var objects = [
      objectSpec("wall", decenter(size, pos(-2, 0, 2))),
      objectSpec("stone", decenter(size, pos(0, 1, 3))),
      objectSpec("stone", decenter(size, pos(0, -1, 3)))
    ];
    var exits = [{ name: "exit", active: true, position: pos(0, 0, 0) }];
    exits.forEach(function (exit) { exit.coordinates = decenter(size, exit.position); });
    return {
      id: "throw",
      title: "throw",
      index: index,
      theme: "violet",
      source: "kiki/py/levels/throw.py",
      scheme: "tron_scheme",
      size: size,
      intro: "throw",
      help: "$scale(1.5)mission:\nget to the exit!\n\nuse the stones to reach it\n\npush a stone and it will fall down\nif nothing is below it\n\nbut remember:\nyou decide where down and below is!",
      player: { coordinates: decenter(size, pos(0, 1, 2)), orientation: "throwStart", nostatus: false },
      start: decenter(size, pos(0, 1, 2)),
      exits: exits,
      exit: exits[0].coordinates,
      objects: objects,
      walls: objects.filter(function (object) { return object.type === "wall"; }).map(function (object) { return object.coordinates; })
    };
  }

  function makeGeneratedLevel(name, index) {
    var width = 9 + (index % 3) * 2;
    var depth = 9 + ((index * 2) % 3) * 2;
    var start = { x: 1, y: 0, z: 1 };
    var exit = { x: width - 2, y: 0, z: depth - 2 };
    var walls = [];
    var seed = hash(name);
    var route = {};
    var x = start.x;
    var z = start.z;
    route[x + "," + z] = true;
    while (x !== exit.x || z !== exit.z) {
      var moveHorizontal = x !== exit.x && (z === exit.z || (seed & 1));
      if (moveHorizontal) x += x < exit.x ? 1 : -1;
      else z += z < exit.z ? 1 : -1;
      route[x + "," + z] = true;
      seed = (seed * 1664525 + 1013904223) >>> 0;
    }
    for (z = 1; z < depth - 1; z += 1) {
      for (x = 1; x < width - 1; x += 1) {
        var key = x + "," + z;
        seed = (seed * 1664525 + 1013904223) >>> 0;
        if (!route[key] && (seed % 100) < Math.min(22 + index, 44)) walls.push({ x: x, y: 0, z: z });
      }
    }
    return {
      id: name, title: name, index: index, theme: themes[index % themes.length],
      size: { x: width, y: 1, z: depth }, start: start, exit: exit, walls: walls,
      player: { coordinates: start, orientation: "rot0" },
      exits: [{ name: "exit", active: true, coordinates: exit }],
      objects: walls.map(function (wall) { return { type: "wall", coordinates: wall }; }),
      help: index < 6 ? "Reach the exit. Use the arrow keys or the controls below." : "Find a route through the arena and reach the glowing exit.",
      generated: true
    };
  }

  function makeLevelFromDefinition(definition) {
    return definition.create ? definition.create(definition.index) : makeGeneratedLevel(definition.id, definition.index);
  }

  var levels = levelDefinitions.map(makeLevelFromDefinition);
  function getLevelIndex(identifier) {
    var index = parseInt(identifier, 10);
    if (String(index) === String(identifier) && levels[index]) return index;
    for (var i = 0; i < levelDefinitions.length; i += 1) {
      if (levelDefinitions[i].id === identifier) return i;
    }
    return 0;
  }
  function getLevel(identifier) {
    return levels[getLevelIndex(identifier)];
  }

  function key(x, y, z) { return x + "," + y + "," + z; }
  function copyPosition(position) { return { x: position.x, y: position.y || 0, z: position.z || 0 }; }
  function vec(x, y, z) { return { x: x, y: y, z: z }; }
  function add(a, b) { return vec(a.x + b.x, a.y + b.y, a.z + b.z); }
  function neg(a) { return vec(-a.x, -a.y, -a.z); }
  function mul(a, scalar) { return vec(a.x * scalar, a.y * scalar, a.z * scalar); }
  var sixDirections = [vec(1, 0, 0), vec(0, 1, 0), vec(0, 0, 1), vec(-1, 0, 0), vec(0, -1, 0), vec(0, 0, -1)];
  function objectBlocks(object) {
    return object.type === "wall" || object.type === "stone" || object.type === "wireStone" ||
      object.type === "switch" || object.type === "gear" || object.type === "generator" ||
      object.type === "motorCylinder" || object.type === "motorGear" || object.type === "bomb";
  }
  function isPushableObject(object) {
    return object && (object.type === "stone" || object.type === "wireStone" || object.type === "bomb");
  }
  function conducts(object) {
    return object && (object.type === "wire" || object.type === "wireStone" || object.type === "gear" ||
      object.type === "generator" || object.type === "motorCylinder" || object.type === "motorGear" ||
      object.type === "switch");
  }
  function cloneObject(object) {
    var clone = {
      type: object.type,
      name: object.name,
      active: object.active,
      toggles: object.toggles ? object.toggles.slice() : undefined,
      coordinates: copyPosition(object.coordinates || object.position || object)
    };
    ["face", "connections", "circuitPart", "powered", "splitted"].forEach(function (name) {
      if (object[name] !== undefined) clone[name] = object[name];
    });
    return clone;
  }
  function cross(a, b) {
    return vec(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
  }
  function same(a, b) { return a.x === b.x && a.y === b.y && a.z === b.z; }
  function vectorKey(a) { return a.x + "," + a.y + "," + a.z; }
  function orientationForName(name) {
    if (name === "rot0") return { dir: vec(0, 0, 1), up: vec(0, 1, 0) };
    if (name === "roty180") return { dir: vec(0, 0, -1), up: vec(0, 1, 0) };
    if (name === "roty270") return { dir: vec(-1, 0, 0), up: vec(0, 1, 0) };
    if (name === "rotz180") return { dir: vec(-1, 0, 0), up: vec(0, -1, 0) };
    if (name === "throwStart") return { dir: vec(0, 0, -1), up: vec(1, 0, 0) };
    return { dir: vec(1, 0, 0), up: vec(0, 1, 0) };
  }
  function cloneOrientation(orientation) {
    return { dir: copyPosition(orientation.dir), up: copyPosition(orientation.up) };
  }
  function cleanText(text) {
    return String(text || "")
      .replace(/\$scale\([^)]+\)/g, "")
      .replace(/\$key\(([^)]+)\)/g, "$1")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }
  function levelHelp(level) {
    var help = Array.isArray(level.help) ? level.help[0] : level.help;
    return cleanText(help);
  }

  function Game(level) {
    this.level = (typeof level === "number" || typeof level === "string") ? getLevel(level) : (level || levels[0]);
    var playerStart = this.level.player && this.level.player.coordinates ? this.level.player.coordinates : this.level.start;
    var orientation = orientationForName(this.level.player && this.level.player.orientation);
    this.position = copyPosition(playerStart);
    this.dir = copyPosition(orientation.dir);
    this.up = copyPosition(orientation.up);
    this.moves = 0;
    this.won = false;
    this.lastShot = null;
    this.objects = (this.level.objects || (this.level.walls || []).map(function (wall) { return { type: "wall", coordinates: wall }; })).map(cloneObject);
    this.exits = (this.level.exits || [{ active: true, coordinates: this.level.exit }]).map(function (exit) {
      return { name: exit.name || "exit", active: exit.active !== false, coordinates: copyPosition(exit.coordinates || exit.position || exit) };
    });
    this.rebuildOccupants();
    this.updatePower();
    this.help = levelHelp(this.level);
  }

  Game.prototype.clone = function () {
    var clone = new Game(this.level);
    clone.position = copyPosition(this.position);
    clone.dir = copyPosition(this.dir);
    clone.up = copyPosition(this.up);
    clone.moves = this.moves;
    clone.won = this.won;
    clone.lastShot = null;
    clone.objects = this.objects.map(cloneObject);
    clone.exits = this.exits.map(function (exit) {
      return { name: exit.name, active: exit.active, coordinates: copyPosition(exit.coordinates) };
    });
    clone.rebuildOccupants();
    clone.updatePower();
    return clone;
  };
  Game.prototype.rebuildOccupants = function () {
    this.walls = {};
    this.occupants = {};
    this.objects.forEach(function (object) {
      var position = object.coordinates;
      if (object.type === "wall") this.walls[key(position.x, position.y || 0, position.z || 0)] = true;
      if (objectBlocks(object)) this.occupants[key(position.x, position.y || 0, position.z || 0)] = object;
    }, this);
  };
  Game.prototype.objectAt = function (position) {
    return this.occupants[key(position.x, position.y || 0, position.z || 0)] || null;
  };
  Game.prototype.moveObjectTo = function (object, position) {
    object.coordinates = copyPosition(position);
    this.rebuildOccupants();
    this.updatePower();
  };
  Game.prototype.objectsAt = function (position) {
    return this.objects.filter(function (object) {
      return object.coordinates.x === position.x && (object.coordinates.y || 0) === (position.y || 0) && object.coordinates.z === position.z;
    });
  };
  Game.prototype.setExitActive = function (name, active) {
    this.exits.forEach(function (exit) {
      if (exit.name === name) exit.active = active;
    });
  };
  Game.prototype.updatePower = function () {
    this.objects.forEach(function (object) {
      if (conducts(object) && object.type !== "generator") object.powered = false;
      if (object.type === "wire") object.active = false;
    });

    if (this.level.powerCondition === "elevatedCircuit") {
      var ready = this.objects.filter(function (object) { return object.circuitPart; }).every(function (object) {
        return (object.coordinates.y || 0) >= 2;
      });
      this.setExitActive("exit", ready);
      this.objects.forEach(function (object) {
        if (conducts(object)) object.powered = ready;
        if (object.type === "wire") object.active = ready;
      });
      return;
    }

    if (this.level.powerCondition !== "connectedMotor") return;

    if (this.objects.some(function (object) { return object.type === "generator" && object.active !== false; }) &&
        this.objects.some(function (object) { return object.type === "motorGear" || object.type === "motorCylinder"; })) {
      this.setExitActive("exit", true);
    }

    var conductiveObjects = this.objects.filter(conducts);
    var byPosition = {};
    conductiveObjects.forEach(function (object) {
      var name = key(object.coordinates.x, object.coordinates.y || 0, object.coordinates.z || 0);
      if (!byPosition[name]) byPosition[name] = [];
      byPosition[name].push(object);
    });

    var queue = conductiveObjects.filter(function (object) { return object.type === "generator" && object.active !== false; });
    var visited = {};
    var reachesMotor = false;
    function enqueue(position) {
      var entries = byPosition[key(position.x, position.y || 0, position.z || 0)] || [];
      entries.forEach(function (object) {
        var name = object.type + ":" + vectorKey(object.coordinates) + ":" + (object.name || "");
        if (!visited[name]) {
          visited[name] = true;
          queue.push(object);
        }
      });
    }
    while (queue.length) {
      var object = queue.shift();
      object.powered = true;
      if (object.type === "wire") object.active = true;
      if (object.type === "motorGear" || object.type === "motorCylinder") reachesMotor = true;
      var p = object.coordinates;
      enqueue(p);
      enqueue(add(p, vec(1, 0, 0)));
      enqueue(add(p, vec(-1, 0, 0)));
      enqueue(add(p, vec(0, 1, 0)));
      enqueue(add(p, vec(0, -1, 0)));
      enqueue(add(p, vec(0, 0, 1)));
      enqueue(add(p, vec(0, 0, -1)));
    }
    this.setExitActive("exit", reachesMotor || this.objects.some(function (object) { return object.type === "generator" && object.active !== false; }));
  };
  Game.prototype.stateKey = function () {
    return vectorKey(this.position) + "|" + vectorKey(this.dir) + "|" + vectorKey(this.up) + "|" +
      this.objects.map(function (object) {
        return object.type + ":" + (object.name || "") + ":" + vectorKey(object.coordinates) + ":" + (object.active ? 1 : 0);
      }).join(";") + "|" +
      this.exits.map(function (exit) { return exit.name + ":" + (exit.active ? 1 : 0); }).join(";");
  };
  Game.prototype.getRight = function () {
    return cross(this.up, this.dir);
  };
  Game.prototype.isBlocked = function (x, y, z) {
    if (z === undefined) { z = y; y = 0; }
    return x < 0 || y < 0 || z < 0 ||
      x >= this.level.size.x || y >= this.level.size.y || z >= this.level.size.z ||
      this.occupants[key(x, y, z)];
  };
  Game.prototype.isUnoccupied = function (position) {
    return !this.isBlocked(position.x, position.y, position.z);
  };
  Game.prototype.isExit = function (x, y, z) {
    return this.exits.some(function (exit) {
      return exit.active && exit.coordinates.x === x && exit.coordinates.y === y && exit.coordinates.z === z;
    });
  };
  Game.prototype.checkExitAt = function (position) {
    if (this.isExit(Math.round(position.x), Math.round(position.y || 0), Math.round(position.z))) this.won = true;
  };
  Game.prototype.checkExitTouchAt = function (position) {
    this.checkExitAt(position);
    if (this.won) return;
    this.exits.some(function (exit) {
      if (!exit.active) return false;
      var dx = position.x - exit.coordinates.x;
      var dy = (position.y || 0) - exit.coordinates.y;
      var dz = position.z - exit.coordinates.z;
      if (dx * dx + dy * dy + dz * dz <= EXIT_TOUCH_RADIUS_SQUARED) {
        this.won = true;
        return true;
      }
      return false;
    }, this);
  };
  Game.prototype.checkExit = function (position) {
    this.checkExitAt(position || this.position);
  };
  Game.prototype.checkPathExit = function (sampler, samples, allowTouch) {
    for (var sample = 0; sample <= samples; sample += 1) {
      if (sample === 0 || !allowTouch) this.checkExitAt(sampler(sample / samples));
      else this.checkExitTouchAt(sampler(sample / samples));
      if (this.won) return true;
    }
    return false;
  };
  Game.prototype.checkLineExit = function (start, end, allowTouch) {
    return this.checkPathExit(function (t) {
      return {
        x: start.x + (end.x - start.x) * t,
        y: (start.y || 0) + ((end.y || 0) - (start.y || 0)) * t,
        z: start.z + (end.z - start.z) * t
      };
    }, 24, !!allowTouch);
  };
  Game.prototype.checkJumpArcExit = function (start, step, up) {
    return this.checkPathExit(function (t) {
      return {
        x: start.x + (1 - Math.cos(Math.PI / 2 * t)) * step.x + Math.sin(Math.PI / 2 * t) * up.x,
        y: (start.y || 0) + (1 - Math.cos(Math.PI / 2 * t)) * (step.y || 0) + Math.sin(Math.PI / 2 * t) * (up.y || 0),
        z: start.z + (1 - Math.cos(Math.PI / 2 * t)) * step.z + Math.sin(Math.PI / 2 * t) * up.z
      };
    }, 48, true);
  };
  Game.prototype.checkFallForwardArcExit = function (start, step, down) {
    return this.checkPathExit(function (t) {
      return {
        x: start.x + Math.sin(Math.PI / 2 * t) * step.x + (1 - Math.cos(Math.PI / 2 * t)) * down.x,
        y: (start.y || 0) + Math.sin(Math.PI / 2 * t) * (step.y || 0) + (1 - Math.cos(Math.PI / 2 * t)) * (down.y || 0),
        z: start.z + Math.sin(Math.PI / 2 * t) * step.z + (1 - Math.cos(Math.PI / 2 * t)) * down.z
      };
    }, 48, true);
  };
  Game.prototype.applyGravity = function (holdStep, sign, maxForwardFalls, allowTouchFalls) {
    var down = neg(this.up);
    var moved = false;
    var forwardFalls = 0;
    var guard = 0;
    while (this.isUnoccupied(add(this.position, down)) && guard < 64) {
      guard += 1;
      if (holdStep) {
        var forward = add(this.position, holdStep);
        if (!this.isUnoccupied(forward)) {
          this.rollClimbUp(holdStep, sign || 1);
          this.checkExit();
          moved = true;
          break;
        }
        if (!this.isUnoccupied(add(forward, down))) {
          var lineReachedExit = this.checkLineExit(this.position, forward, true);
          this.position = forward;
          if (lineReachedExit) return true;
          this.checkExit();
          if (this.won) return true;
          moved = true;
          continue;
        }
        if (maxForwardFalls === undefined || forwardFalls < maxForwardFalls) {
          var forwardDown = add(forward, down);
          var fallForwardReachedExit = this.checkFallForwardArcExit(this.position, holdStep, down);
          this.position = forwardDown;
          if (fallForwardReachedExit) return true;
          forwardFalls += 1;
          this.checkExit();
          if (this.won) return true;
          moved = true;
          continue;
        }
      }
      var target = add(this.position, down);
      var fallReachedExit = this.checkLineExit(this.position, target, allowTouchFalls);
      this.position = target;
      if (fallReachedExit) return true;
      this.checkExit();
      if (this.won) return true;
      moved = true;
    }
    if (moved) this.checkExit();
    return moved;
  };
  Game.prototype.jumpAlong = function (sign, maxForwardFalls) {
    if (this.won) return false;
    var start = copyPosition(this.position);
    var step = mul(this.dir, sign);
    var above = add(this.position, this.up);
    var forward = add(this.position, step);
    var jumpStep = vec(0, 0, 0);
    if (!this.isUnoccupied(above)) return false;
    if (this.isUnoccupied(forward) && this.isUnoccupied(add(forward, this.up))) {
      this.position = add(forward, this.up);
      jumpStep = step;
    } else {
      this.position = above;
    }
    this.checkJumpArcExit(start, jumpStep, this.up);
    if (this.won) {
      this.moves += 1;
      return true;
    }
    this.applyGravity(step, sign, maxForwardFalls || 0, true);
    this.moves += 1;
    this.checkExit();
    return true;
  };
  Game.prototype.turn = function (sign) {
    if (this.won) return false;
    this.dir = sign > 0 ? cross(this.up, this.dir) : cross(this.dir, this.up);
    this.moves += 1;
    this.applyGravity();
    return true;
  };
  Game.prototype.rollClimbUp = function (step, sign) {
    var oldUp = this.up;
    this.up = neg(step);
    this.dir = mul(oldUp, sign);
  };
  Game.prototype.rollClimbDown = function (step, sign) {
    var oldUp = this.up;
    this.position = add(add(this.position, step), neg(oldUp));
    this.up = step;
    this.dir = mul(oldUp, -sign);
  };
  Game.prototype.applyObjectGravity = function (object, down) {
    var guard = 0;
    while (this.isUnoccupied(add(object.coordinates, down)) && guard < 64) {
      this.moveObjectTo(object, add(object.coordinates, down));
      guard += 1;
    }
  };
  Game.prototype.pushAlong = function (sign) {
    if (this.won) return false;
    var step = mul(this.dir, sign);
    var forward = add(this.position, step);
    var object = this.objectAt(forward);
    if (!isPushableObject(object)) return false;
    var destination = add(forward, step);
    if (!this.isUnoccupied(destination)) return false;
    this.moveObjectTo(object, destination);
    if (this.isUnoccupied(add(forward, neg(this.up)))) this.rollClimbDown(step, sign);
    else this.position = forward;
    this.moves += 1;
    this.applyGravity();
    this.applyObjectGravity(object, neg(this.up));
    this.checkExit();
    return true;
  };
  Game.prototype.toggleExit = function (name) {
    this.exits.forEach(function (exit) {
      if (exit.name === name) exit.active = !exit.active;
    });
  };
  Game.prototype.toggleSwitch = function (object) {
    object.active = !object.active;
    (object.toggles || []).forEach(function (targetName) { this.toggleExit(targetName); }, this);
    this.rebuildOccupants();
  };
  Game.prototype.explodeBomb = function (bomb) {
    if (bomb.splitted) return;
    bomb.splitted = true;
    var index = this.objects.indexOf(bomb);
    if (index >= 0) this.objects.splice(index, 1);
    this.rebuildOccupants();
    sixDirections.forEach(function (direction) {
      var adjacent = add(bomb.coordinates, direction);
      var occupant = this.objectAt(adjacent);
      if (!occupant) return;
      if (occupant.type === "bomb") {
        this.explodeBomb(occupant);
        return;
      }
      var destination = add(adjacent, direction);
      if (this.isUnoccupied(destination)) {
        this.moveObjectTo(occupant, destination);
      }
    }, this);
    this.updatePower();
  };
  Game.prototype.bulletImpact = function (object) {
    if (!object) return;
    if (object.type === "switch") this.toggleSwitch(object);
    else if (object.type === "bomb") this.explodeBomb(object);
    else this.updatePower();
  };
  Game.prototype.shoot = function () {
    if (this.won) return false;
    var direction = copyPosition(this.dir);
    var cell = add(this.position, direction);
    var start = add(this.position, mul(direction, 0.5));
    var guard = 0;
    this.lastShot = {
      start: start,
      end: start,
      impact: null,
      direction: direction,
      flyDuration: 0,
      explodeDuration: 200
    };
    while (guard < 64) {
      if (this.isBlocked(cell.x, cell.y, cell.z)) {
        var object = this.objectAt(cell);
        this.lastShot.end = add(cell, mul(direction, -0.5));
        this.lastShot.impact = copyPosition(cell);
        this.lastShot.flyDuration = guard * 40;
        this.bulletImpact(object);
        return true;
      }
      this.lastShot.end = add(cell, mul(direction, 0.5));
      cell = add(cell, direction);
      guard += 1;
    }
    this.lastShot.flyDuration = guard * 40;
    return true;
  };
  Game.prototype.moveAlong = function (sign, jump) {
    if (this.won) return false;
    var step = mul(this.dir, sign);
    var above = add(this.position, this.up);
    var forward = add(this.position, step);
    var moved = false;

    if (jump) {
      return this.jumpAlong(sign, 0);
    } else if (this.isUnoccupied(forward)) {
      if (this.isUnoccupied(add(forward, neg(this.up)))) {
        this.rollClimbDown(step, sign);
      } else {
        var moveReachedExit = this.checkLineExit(this.position, forward, true);
        this.position = forward;
        if (moveReachedExit) return true;
      }
      this.checkExit();
      moved = true;
    } else {
      this.rollClimbUp(step, sign);
      moved = true;
    }

    if (!moved) return false;
    this.moves += 1;
    this.applyGravity();
    this.checkExit();
    return true;
  };
  Game.prototype.jumpInPlace = function () {
    if (this.won) return false;
    var above = add(this.position, this.up);
    if (!this.isUnoccupied(above)) return false;
    var jumpReachedExit = this.checkJumpArcExit(this.position, vec(0, 0, 0), this.up);
    this.position = above;
    if (jumpReachedExit) {
      this.moves += 1;
      return true;
    }
    this.moves += 1;
    this.checkExit();
    if (!this.won) this.applyGravity(null, null, undefined, true);
    return true;
  };
  Game.prototype.move = function (dx, dy, dz) {
    if (dz === undefined) { dz = dy; dy = 0; }
    if (same(vec(dx, dy, dz), this.dir)) return this.moveAlong(1, false);
    if (same(vec(dx, dy, dz), neg(this.dir))) return this.moveAlong(-1, false);
    if (same(vec(dx, dy, dz), this.up)) return this.jumpInPlace();
    return false;
  };
  Game.prototype.action = function (name) {
    this.lastShot = null;
    if (name === "move forward" || name === "up") return this.moveAlong(1, false);
    if (name === "move backward" || name === "down") return this.moveAlong(-1, false);
    if (name === "push forward") return this.pushAlong(1);
    if (name === "push backward") return this.pushAlong(-1);
    if (name === "turn left" || name === "left") return this.turn(1);
    if (name === "turn right" || name === "right") return this.turn(-1);
    if (name === "jump forward") return this.moveAlong(1, true);
    if (name === "jump far forward") return this.jumpAlong(1, 2);
    if (name === "jump") return this.jumpInPlace();
    if (name === "shoot") return this.shoot();
    return false;
  };
  Game.prototype.actionDuration = function (name) {
    return actionTimings[name] || actionTimings[{
      up: "move forward",
      down: "move backward",
      left: "turn left",
      right: "turn right"
    }[name]] || 200;
  };
  Game.prototype.reset = function () { return new Game(this.level); };

  function solve(level) {
    var start = new Game(level);
    start.applyGravity();
    var queue = [{ game: start, path: [] }];
    var visited = {}; visited[start.stateKey()] = true;
    var actions = level.solverActions || solverActions;
    while (queue.length) {
      var current = queue.shift();
      if (current.game.won) return current.path;
      actions.forEach(function (action) {
        var next = current.game.clone();
        if (next.action(action)) {
          var nextKey = next.stateKey();
          if (!visited[nextKey]) {
            visited[nextKey] = true;
            queue.push({ game: next, path: current.path.concat([action]) });
          }
        }
      });
    }
    return null;
  }

  return { levels: levels, levelDefinitions: levelDefinitions, levelNames: levelNames, actionTimings: actionTimings, getLevel: getLevel, getLevelIndex: getLevelIndex, Game: Game, solve: solve };
}));
