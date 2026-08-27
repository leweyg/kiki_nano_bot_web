(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) module.exports = factory();
  else root.Kiki = factory();
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var levelNames = [
    "start", "steps", "move", "electro", "elevate", "throw", "gold", "jump", "escape", "gears", "gamma", "cube", "switch", "borg",
    "mini", "blocks", "bombs", "sandbox", "energy", "maze", "love", "towers", "edge", "random", "plate", "nice", "entropy",
    "slick", "bridge", "flower", "stones", "walls", "grid", "rings", "core", "bronze", "pool", "hidden", "church", "strange", "mesh", "columns", "machine",
    "neutron", "captured", "circuit", "regal", "conductor", "evil", "mutants"
  ];

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
    "fall forward": 200
  };
  var solverActions = ["move forward", "move backward", "turn left", "turn right", "jump forward", "jump far forward", "jump", "push forward", "push backward", "shoot"];

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

  function makeStartLevel(index) {
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

  function makeStepsLevel(index) {
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

  function makeMoveLevel(index) {
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

  function makeLevel(name, index) {
    if (name === "start") return makeStartLevel(index);
    if (name === "steps") return makeStepsLevel(index);
    if (name === "move") return makeMoveLevel(index);
    return makeGeneratedLevel(name, index);
  }

  var levels = levelNames.map(makeLevel);
  var byName = {};
  levels.forEach(function (level) { byName[level.id] = level; });

  function key(x, y, z) { return x + "," + y + "," + z; }
  function copyPosition(position) { return { x: position.x, y: position.y || 0, z: position.z || 0 }; }
  function vec(x, y, z) { return { x: x, y: y, z: z }; }
  function add(a, b) { return vec(a.x + b.x, a.y + b.y, a.z + b.z); }
  function neg(a) { return vec(-a.x, -a.y, -a.z); }
  function mul(a, scalar) { return vec(a.x * scalar, a.y * scalar, a.z * scalar); }
  function objectBlocks(object) { return object.type === "wall" || object.type === "stone" || object.type === "switch"; }
  function cloneObject(object) {
    return {
      type: object.type,
      name: object.name,
      active: object.active,
      toggles: object.toggles ? object.toggles.slice() : undefined,
      coordinates: copyPosition(object.coordinates || object.position || object)
    };
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
    this.level = typeof level === "string" ? byName[level] : (level || levels[0]);
    var playerStart = this.level.player && this.level.player.coordinates ? this.level.player.coordinates : this.level.start;
    var orientation = orientationForName(this.level.player && this.level.player.orientation);
    this.position = copyPosition(playerStart);
    this.dir = copyPosition(orientation.dir);
    this.up = copyPosition(orientation.up);
    this.moves = 0;
    this.won = false;
    this.objects = (this.level.objects || (this.level.walls || []).map(function (wall) { return { type: "wall", coordinates: wall }; })).map(cloneObject);
    this.exits = (this.level.exits || [{ active: true, coordinates: this.level.exit }]).map(function (exit) {
      return { name: exit.name || "exit", active: exit.active !== false, coordinates: copyPosition(exit.coordinates || exit.position || exit) };
    });
    this.rebuildOccupants();
    this.help = levelHelp(this.level);
  }

  Game.prototype.clone = function () {
    var clone = new Game(this.level);
    clone.position = copyPosition(this.position);
    clone.dir = copyPosition(this.dir);
    clone.up = copyPosition(this.up);
    clone.moves = this.moves;
    clone.won = this.won;
    clone.objects = this.objects.map(cloneObject);
    clone.exits = this.exits.map(function (exit) {
      return { name: exit.name, active: exit.active, coordinates: copyPosition(exit.coordinates) };
    });
    clone.rebuildOccupants();
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
  Game.prototype.checkExit = function (position) {
    this.checkExitAt(position || this.position);
  };
  Game.prototype.checkJumpArcExit = function (start, step, up) {
    var end = add(add(start, step), up);
    var minX = Math.min(start.x, end.x), maxX = Math.max(start.x, end.x);
    var minY = Math.min(start.y || 0, end.y || 0), maxY = Math.max(start.y || 0, end.y || 0);
    var minZ = Math.min(start.z, end.z), maxZ = Math.max(start.z, end.z);
    for (var x = minX; x <= maxX; x += 1) {
      for (var y = minY; y <= maxY; y += 1) {
        for (var z = minZ; z <= maxZ; z += 1) {
          this.checkExitAt({ x: x, y: y, z: z });
          if (this.won) return true;
        }
      }
    }
    for (var sample = 0; sample <= 24; sample += 1) {
      var t = sample / 24;
      this.checkExitAt({
        x: start.x + (1 - Math.cos(Math.PI / 2 * t)) * step.x + Math.sin(Math.PI / 2 * t) * up.x,
        y: (start.y || 0) + (1 - Math.cos(Math.PI / 2 * t)) * (step.y || 0) + Math.sin(Math.PI / 2 * t) * (up.y || 0),
        z: start.z + (1 - Math.cos(Math.PI / 2 * t)) * step.z + Math.sin(Math.PI / 2 * t) * up.z
      });
      if (this.won) return true;
    }
    return false;
  };
  Game.prototype.applyGravity = function (holdStep, sign, maxForwardFalls) {
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
          this.position = forward;
          this.checkExit();
          if (this.won) return true;
          moved = true;
          continue;
        }
        if (maxForwardFalls === undefined || forwardFalls < maxForwardFalls) {
          this.position = add(forward, down);
          forwardFalls += 1;
          this.checkExit();
          if (this.won) return true;
          moved = true;
          continue;
        }
      }
      this.position = add(this.position, down);
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
    if (!this.isUnoccupied(above)) return false;
    if (this.isUnoccupied(forward) && this.isUnoccupied(add(forward, this.up))) {
      this.position = add(forward, this.up);
    } else {
      this.position = above;
    }
    this.checkJumpArcExit(start, step, this.up);
    if (this.won) {
      this.moves += 1;
      return true;
    }
    this.applyGravity(step, sign, maxForwardFalls || 0);
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
    if (!object || object.type !== "stone") return false;
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
  Game.prototype.shoot = function () {
    if (this.won) return false;
    var halfStep = this.dir;
    var position = copyPosition(this.position);
    var guard = 0;
    while (guard < 64) {
      position = add(position, halfStep);
      if (this.isBlocked(position.x, position.y, position.z)) {
        var object = this.objectAt(position);
        if (object && object.type === "switch") this.toggleSwitch(object);
        return true;
      }
      guard += 1;
    }
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
        this.position = forward;
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
    this.position = above;
    this.moves += 1;
    this.checkExit();
    if (!this.won) this.applyGravity();
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
    var queue = [{ game: start, path: [] }];
    var visited = {}; visited[start.stateKey()] = true;
    while (queue.length) {
      var current = queue.shift();
      if (current.game.won) return current.path;
      solverActions.forEach(function (action) {
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

  return { levels: levels, levelNames: levelNames, actionTimings: actionTimings, getLevel: function (name) { return byName[name] || levels[0]; }, Game: Game, solve: solve };
}));
