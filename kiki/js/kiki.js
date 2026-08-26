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
  var directions = [[0, 0, 1], [1, 0, 0], [0, 0, -1], [-1, 0, 0], [0, 1, 0], [0, -1, 0]];

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
      exits: [{ name: "exit", active: true, coordinates: exit }],
      objects: walls.map(function (wall) { return { type: "wall", coordinates: wall }; }),
      help: index < 6 ? "Reach the exit. Use the arrow keys or the controls below." : "Find a route through the arena and reach the glowing exit.",
      generated: true
    };
  }

  function makeLevel(name, index) {
    if (name === "start") return makeStartLevel(index);
    return makeGeneratedLevel(name, index);
  }

  var levels = levelNames.map(makeLevel);
  var byName = {};
  levels.forEach(function (level) { byName[level.id] = level; });

  function key(x, y, z) { return x + "," + y + "," + z; }
  function copyPosition(position) { return { x: position.x, y: position.y || 0, z: position.z || 0 }; }
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
    this.position = copyPosition(playerStart);
    this.moves = 0;
    this.won = false;
    this.walls = {};
    (this.level.walls || []).forEach(function (wall) { this.walls[key(wall.x, wall.y || 0, wall.z || 0)] = true; }, this);
    this.exits = (this.level.exits || [{ active: true, coordinates: this.level.exit }]).map(function (exit) {
      return { name: exit.name || "exit", active: exit.active !== false, coordinates: copyPosition(exit.coordinates || exit.position || exit) };
    });
    this.help = levelHelp(this.level);
  }

  Game.prototype.isBlocked = function (x, y, z) {
    if (z === undefined) { z = y; y = 0; }
    return x < 0 || y < 0 || z < 0 ||
      x >= this.level.size.x || y >= this.level.size.y || z >= this.level.size.z ||
      this.walls[key(x, y, z)];
  };
  Game.prototype.isExit = function (x, y, z) {
    return this.exits.some(function (exit) {
      return exit.active && exit.coordinates.x === x && exit.coordinates.y === y && exit.coordinates.z === z;
    });
  };
  Game.prototype.move = function (dx, dy, dz) {
    if (dz === undefined) { dz = dy; dy = 0; }
    if (this.won) return false;
    var nextX = this.position.x + dx;
    var nextY = this.position.y + dy;
    var nextZ = this.position.z + dz;
    if (this.isBlocked(nextX, nextY, nextZ)) return false;
    this.position.x = nextX; this.position.y = nextY; this.position.z = nextZ; this.moves += 1;
    if (this.isExit(nextX, nextY, nextZ)) this.won = true;
    return true;
  };
  Game.prototype.action = function (name) {
    if (name === "move forward" || name === "up") return this.move(0, 0, 1);
    if (name === "move backward" || name === "down") return this.move(0, 0, -1);
    if (name === "turn left" || name === "left") return this.move(-1, 0, 0);
    if (name === "turn right" || name === "right") return this.move(1, 0, 0);
    if (name === "jump") return this.move(0, 1, 0);
    if (name === "drop") return this.move(0, -1, 0);
    return false;
  };
  Game.prototype.reset = function () { return new Game(this.level); };

  function solve(level) {
    var game = new Game(level);
    var queue = [{ x: game.position.x, y: game.position.y, z: game.position.z, path: [] }];
    var visited = {}; visited[key(game.position.x, game.position.y, game.position.z)] = true;
    while (queue.length) {
      var current = queue.shift();
      if (game.isExit(current.x, current.y, current.z)) return current.path;
      directions.forEach(function (direction) {
        var nextX = current.x + direction[0], nextY = current.y + direction[1], nextZ = current.z + direction[2];
        var nextKey = key(nextX, nextY, nextZ);
        if (!game.isBlocked(nextX, nextY, nextZ) && !visited[nextKey]) {
          visited[nextKey] = true;
          queue.push({ x: nextX, y: nextY, z: nextZ, path: current.path.concat([direction]) });
        }
      });
    }
    return null;
  }

  return { levels: levels, levelNames: levelNames, getLevel: function (name) { return byName[name] || levels[0]; }, Game: Game, solve: solve };
}));
