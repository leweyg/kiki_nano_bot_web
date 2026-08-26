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
  var directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  function hash(name) {
    var value = 0;
    for (var index = 0; index < name.length; index += 1) value = (value * 31 + name.charCodeAt(index)) >>> 0;
    return value;
  }

  function makeLevel(name, index) {
    var width = 9 + (index % 3) * 2;
    var height = 9 + ((index * 2) % 3) * 2;
    var start = { x: 1, y: 1 };
    var exit = { x: width - 2, y: height - 2 };
    var walls = [];
    var seed = hash(name);
    var route = {};
    var x = start.x;
    var y = start.y;
    route[x + "," + y] = true;
    while (x !== exit.x || y !== exit.y) {
      var moveHorizontal = x !== exit.x && (y === exit.y || (seed & 1));
      if (moveHorizontal) x += x < exit.x ? 1 : -1;
      else y += y < exit.y ? 1 : -1;
      route[x + "," + y] = true;
      seed = (seed * 1664525 + 1013904223) >>> 0;
    }
    for (y = 1; y < height - 1; y += 1) {
      for (x = 1; x < width - 1; x += 1) {
        var key = x + "," + y;
        seed = (seed * 1664525 + 1013904223) >>> 0;
        if (!route[key] && (seed % 100) < Math.min(22 + index, 44)) walls.push({ x: x, y: y });
      }
    }
    return {
      id: name, title: name, index: index, theme: themes[index % themes.length],
      size: { x: width, y: height }, start: start, exit: exit, walls: walls,
      help: index < 6 ? "Reach the exit. Use the arrow keys or the controls below." : "Find a route through the arena and reach the glowing exit."
    };
  }

  var levels = levelNames.map(makeLevel);
  var byName = {};
  levels.forEach(function (level) { byName[level.id] = level; });

  function key(x, y) { return x + "," + y; }
  function copyPosition(position) { return { x: position.x, y: position.y }; }

  function Game(level) {
    this.level = typeof level === "string" ? byName[level] : (level || levels[0]);
    this.position = copyPosition(this.level.start);
    this.moves = 0;
    this.won = false;
    this.walls = {};
    this.level.walls.forEach(function (wall) { this.walls[key(wall.x, wall.y)] = true; }, this);
  }

  Game.prototype.isBlocked = function (x, y) {
    return x < 0 || y < 0 || x >= this.level.size.x || y >= this.level.size.y || this.walls[key(x, y)];
  };
  Game.prototype.move = function (dx, dy) {
    if (this.won) return false;
    var nextX = this.position.x + dx;
    var nextY = this.position.y + dy;
    if (this.isBlocked(nextX, nextY)) return false;
    this.position.x = nextX; this.position.y = nextY; this.moves += 1;
    if (nextX === this.level.exit.x && nextY === this.level.exit.y) this.won = true;
    return true;
  };
  Game.prototype.action = function (name) {
    if (name === "move forward" || name === "up") return this.move(0, -1);
    if (name === "move backward" || name === "down") return this.move(0, 1);
    if (name === "turn left" || name === "left") return this.move(-1, 0);
    if (name === "turn right" || name === "right") return this.move(1, 0);
    return false;
  };
  Game.prototype.reset = function () { return new Game(this.level); };

  function solve(level) {
    var game = new Game(level);
    var queue = [{ x: game.position.x, y: game.position.y, path: [] }];
    var visited = {}; visited[key(game.position.x, game.position.y)] = true;
    while (queue.length) {
      var current = queue.shift();
      if (current.x === level.exit.x && current.y === level.exit.y) return current.path;
      directions.forEach(function (direction) {
        var nextX = current.x + direction[0], nextY = current.y + direction[1], nextKey = key(nextX, nextY);
        if (!game.isBlocked(nextX, nextY) && !visited[nextKey]) {
          visited[nextKey] = true;
          queue.push({ x: nextX, y: nextY, path: current.path.concat([direction]) });
        }
      });
    }
    return null;
  }

  return { levels: levels, levelNames: levelNames, getLevel: function (name) { return byName[name] || levels[0]; }, Game: Game, solve: solve };
}));