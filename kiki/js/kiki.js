(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) module.exports = factory(root);
  else root.Kiki = factory(root);
}(typeof globalThis !== "undefined" ? globalThis : this, function (root) {
  "use strict";

  var staticData = root.KikiStaticData;
  if (!staticData && typeof require !== "undefined") staticData = require("./kiki_static_data.js");
  staticData = staticData || {};
  var themes = staticData.themes || ["mint", "copper", "sky", "violet", "lime", "coral"];
  var colorSchemes = staticData.colorSchemes || {};
  var levelTemplates = staticData.levelTemplates || {};
  var gameItems = staticData.gameItems || [];
  var sourceUrl = staticData.sourceUrl || "";
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
  var levelDefinitions = staticData.levelDefinitions || [];
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

  function applyDefinition(level, definition) {
    if (!definition) return level;
    level.id = definition.id || level.id;
    level.title = definition.title || level.title;
    level.index = definition.index;
    level.theme = definition.theme || level.theme || themes[level.index % themes.length];
    level.source = definition.source || level.source;
    level.screenshot = definition.screenshot || level.screenshot;
    level.scheme = definition.scheme || level.scheme || "default_scheme";
    return level;
  }

  function cloneColorSchemeValue(value) {
    if (Array.isArray(value)) return value.slice();
    var clone = {};
    Object.keys(value || {}).forEach(function (key) {
      clone[key] = cloneColorSchemeValue(value[key]);
    });
    return clone;
  }
  function mergeColorScheme(base, override) {
    var merged = cloneColorSchemeValue(base);
    Object.keys(override || {}).forEach(function (className) {
      if (!merged[className]) merged[className] = {};
      Object.keys(override[className]).forEach(function (partName) {
        merged[className][partName] = cloneColorSchemeValue(override[className][partName]);
      });
    });
    return merged;
  }
  function getColorScheme(name) {
    var defaultScheme = colorSchemes.default_scheme || {};
    var requestedScheme = colorSchemes[name] || defaultScheme;
    return mergeColorScheme(defaultScheme, requestedScheme);
  }

  function cloneValue(value) {
    if (Array.isArray(value)) return value.map(cloneValue);
    if (value && typeof value === "object") {
      var clone = {};
      Object.keys(value).forEach(function (key) { clone[key] = cloneValue(value[key]); });
      return clone;
    }
    return value;
  }

  function coordinatesFromTemplate(size, space, value) {
    if (value.coordinates) return copyPosition(value.coordinates);
    if (value.position) return decenter(size, value.position);
    if (space === "position") return decenter(size, value);
    return copyPosition(value);
  }

  function templateInstanceOverrides(value) {
    var overrides = {};
    Object.keys(value || {}).forEach(function (key) {
      if (key !== "coordinates" && key !== "position") overrides[key] = cloneValue(value[key]);
    });
    return overrides;
  }

  function expandTemplateInstances(size, groups) {
    var instances = [];
    (groups || []).forEach(function (group) {
      var clone = cloneValue(group.clone || {});
      (group.at || []).forEach(function (location) {
        var instance = cloneValue(clone);
        var overrides = templateInstanceOverrides(location);
        Object.keys(overrides).forEach(function (key) { instance[key] = overrides[key]; });
        instance.coordinates = coordinatesFromTemplate(size, group.space, location);
        instances.push(instance);
      });
    });
    return instances;
  }

  function compileTemplatePlayer(size, playerTemplate) {
    var player = cloneValue(playerTemplate || {});
    player.coordinates = coordinatesFromTemplate(size, player.coordinates ? "coordinates" : "position", player);
    delete player.position;
    return player;
  }

  function compileLevelTemplate(template, definition) {
    var size = cloneValue(template.size);
    var player = compileTemplatePlayer(size, template.player);
    var start = template.start ? coordinatesFromTemplate(size, template.start.coordinates ? "coordinates" : "position", template.start) : copyPosition(player.coordinates);
    var exits = expandTemplateInstances(size, template.exits);
    var objects = expandTemplateInstances(size, template.objects);
    return applyDefinition({
      id: definition.id,
      title: definition.title,
      index: definition.index,
      theme: definition.theme,
      source: definition.source,
      scheme: definition.scheme,
      size: size,
      intro: template.intro,
      powerCondition: template.powerCondition,
      switchConditions: cloneValue(template.switchConditions),
      solverActions: cloneValue(template.solverActions),
      help: cloneValue(template.help),
      player: player,
      start: start,
      exits: exits,
      exit: exits[0] && copyPosition(exits[0].coordinates),
      objects: objects,
      walls: objects.filter(function (object) { return object.type === "wall"; }).map(function (object) { return copyPosition(object.coordinates); })
    }, definition);
  }

  function makeGeneratedLevel(name, index, definition) {
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
    return applyDefinition({
      id: name, title: name, index: index, theme: themes[index % themes.length],
      source: definition && definition.source,
      scheme: definition && definition.scheme || "default_scheme",
      size: { x: width, y: 1, z: depth }, start: start, exit: exit, walls: walls,
      player: { coordinates: start, orientation: "rot0" },
      exits: [{ name: "exit", active: true, coordinates: exit }],
      objects: walls.map(function (wall) { return { type: "wall", coordinates: wall }; }),
      help: index < 6 ? "Reach the exit. Use the arrow keys or the controls below." : "Find a route through the arena and reach the glowing exit.",
      generated: true
    }, definition);
  }

  function makeLevelFromDefinition(definition) {
    var template = levelTemplates[definition.id];
    var level = template ? compileLevelTemplate(template, definition) : makeGeneratedLevel(definition.id, definition.index, definition);
    level.colorScheme = getColorScheme(level.scheme);
    return level;
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
  var faceIds = { PX: 0, PY: 1, PZ: 2, NX: 3, NY: 4, NZ: 5 };
  var faces = ["PX", "PY", "PZ", "NX", "NY", "NZ"];
  var allWireConnections = 15;
  function faceName(face) { return face === undefined ? "PZ" : (typeof face === "number" ? faces[face] : face); }
  function faceIndex(face) { return faceIds[faceName(face)] === undefined ? 2 : faceIds[faceName(face)]; }
  function faceNormal(face) {
    switch (faceName(face)) {
      case "PX": return vec(-1, 0, 0);
      case "PY": return vec(0, -1, 0);
      case "PZ": return vec(0, 0, -1);
      case "NX": return vec(1, 0, 0);
      case "NY": return vec(0, 1, 0);
      case "NZ": return vec(0, 0, 1);
    }
    return vec(0, 0, -1);
  }
  function rotateFaceVector(face, vector) {
    var name = faceName(face);
    if (name === "PX") return vec(vector.z, vector.y, -vector.x);
    if (name === "NX") return vec(-vector.z, vector.y, vector.x);
    if (name === "PY") return vec(vector.x, vector.z, -vector.y);
    if (name === "NY") return vec(vector.x, -vector.z, vector.y);
    if (name === "NZ") return vec(vector.x, -vector.y, -vector.z);
    return copyPosition(vector);
  }
  function connectionMask(connections) {
    if (connections === undefined || connections === "all") return allWireConnections;
    if (connections === "vertical") return 5;
    if (connections === "horizontal") return 10;
    return connections;
  }
  function validPosition(level, position) {
    return position.x >= 0 && position.y >= 0 && position.z >= 0 &&
      position.x < level.size.x && position.y < level.size.y && position.z < level.size.z;
  }
  function samePosition(a, b) {
    return a.x === b.x && (a.y || 0) === (b.y || 0) && a.z === b.z;
  }
  function wireConnectionPoints(object) {
    var points = [];
    var mask = connectionMask(object.connections);
    var border = mul(faceNormal(object.face), 0.5);
    function point(local) {
      points.push(add(add(object.coordinates, border), rotateFaceVector(object.face, local)));
    }
    if (mask & 2) point(vec(0.5, 0, 0));
    if (mask & 8) point(vec(-0.5, 0, 0));
    if (mask & 1) point(vec(0, 0.5, 0));
    if (mask & 4) point(vec(0, -0.5, 0));
    return points;
  }
  function roundedPointKey(point) {
    return [point.x, point.y, point.z].map(function (value) { return Math.round(value * 1000); }).join(",");
  }
  function gearNeighborDirections(face) {
    switch (faceIndex(face) % 3) {
      case 0: return [vec(0, 1, 0), vec(0, -1, 0), vec(0, 0, 1), vec(0, 0, -1)];
      case 1: return [vec(1, 0, 0), vec(-1, 0, 0), vec(0, 0, 1), vec(0, 0, -1)];
      default: return [vec(1, 0, 0), vec(-1, 0, 0), vec(0, 1, 0), vec(0, -1, 0)];
    }
  }
  function gearSpinSign(object) {
    var axis = faceIndex(object.face) % 3;
    var p = object.coordinates;
    var sum = (axis === 1 || axis === 2 ? p.x : 0) +
      (axis === 0 || axis === 2 ? (p.y || 0) : 0) +
      (axis === 0 || axis === 1 ? p.z : 0);
    return sum % 2 ? 1 : -1;
  }
  function isGearObject(object) {
    return object && (object.type === "gear" || object.type === "generator" || object.type === "motorGear");
  }
  function objectBlocks(object) {
    return object.type === "wall" || object.type === "stone" || object.type === "wireStone" ||
      object.type === "switch" || object.type === "gear" || object.type === "generator" ||
      object.type === "motorCylinder" || object.type === "motorGear" || object.type === "bomb" ||
      object.type === "mutant";
  }
  function isPushableObject(object) {
    return object && (object.type === "stone" || object.type === "wireStone" || object.type === "bomb" ||
      object.type === "gear" || object.type === "generator");
  }
  function conducts(object) {
    return object && (object.type === "wire" || object.type === "gear" ||
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
    ["face", "connections", "circuitPart", "powered", "splitted", "switchGroup"].forEach(function (name) {
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
    if (name === "roty90") return { dir: vec(1, 0, 0), up: vec(0, 1, 0) };
    if (name === "roty180") return { dir: vec(0, 0, -1), up: vec(0, 1, 0) };
    if (name === "roty270") return { dir: vec(-1, 0, 0), up: vec(0, 1, 0) };
    if (name === "rotx180") return { dir: vec(0, 0, -1), up: vec(0, -1, 0) };
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
  Game.prototype.canHostWireStoneWire = function (owner, position) {
    if (!validPosition(this.level, position)) return false;
    var occupant = this.objectAt(position);
    return !occupant || occupant === owner;
  };
  Game.prototype.wireStoneWires = function (owner) {
    var wires = [];
    faces.forEach(function (face) {
      var position = add(owner.coordinates, neg(faceNormal(face)));
      if (!this.canHostWireStoneWire(owner, position)) return;
      wires.push({
        type: "wire",
        face: face,
        connections: allWireConnections,
        coordinates: position,
        active: !!owner.powered,
        powered: !!owner.powered,
        owner: owner
      });
    }, this);
    return wires;
  };
  Game.prototype.dynamicWires = function () {
    var wires = [];
    this.objects.forEach(function (object) {
      if (object.type === "wireStone") wires = wires.concat(this.wireStoneWires(object));
    }, this);
    return wires;
  };
  Game.prototype.updateMechanicalGears = function () {
    var gearObjects = this.objects.filter(isGearObject);
    var gearsByPosition = {};
    var drivenGenerators = [];
    gearObjects.forEach(function (object) {
      object.mechanical = false;
      object.spinDirection = 0;
      gearsByPosition[key(object.coordinates.x, object.coordinates.y || 0, object.coordinates.z)] = object;
    });
    var queue = gearObjects.filter(function (object) { return object.type === "motorGear"; }).map(function (object) {
      return { object: object, spinDirection: gearSpinSign(object) };
    });
    var visitedGears = {};
    while (queue.length) {
      var entry = queue.shift();
      var gear = entry.object;
      var gearName = vectorKey(gear.coordinates) + ":" + gear.type;
      if (visitedGears[gearName]) continue;
      visitedGears[gearName] = true;
      gear.mechanical = true;
      gear.spinDirection = entry.spinDirection;
      if (gear.type === "generator" && gear.active !== false) drivenGenerators.push(gear);
      gearNeighborDirections(gear.face).forEach(function (direction) {
        var neighbor = gearsByPosition[key(gear.coordinates.x + direction.x, (gear.coordinates.y || 0) + direction.y, gear.coordinates.z + direction.z)];
        if (neighbor && faceName(neighbor.face) === faceName(gear.face)) queue.push({ object: neighbor, spinDirection: -entry.spinDirection });
      });
    }
    return drivenGenerators;
  };
  Game.prototype.updatePower = function () {
    this.objects.forEach(function (object) {
      if (conducts(object)) object.powered = false;
      if (object.type === "wire") object.active = false;
      if (object.type === "wireStone") object.powered = false;
    });
    var drivenGenerators = this.updateMechanicalGears();

    if (this.level.powerCondition === "elevatedCircuit") {
      var circuitParts = this.objects.filter(function (object) { return object.circuitPart; });
      var elevated = circuitParts.length > 0 && circuitParts.every(function (object) {
        return (object.coordinates.y || 0) >= 2;
      });
      var connected = elevated && circuitParts.every(function (object) { return object.mechanical; });
      this.setExitActive("exit", connected);
      this.objects.forEach(function (object) {
        if (object.circuitPart && isGearObject(object)) object.powered = connected;
        if (object.type === "wire") object.active = connected;
      });
      return;
    }

    if (this.level.powerCondition !== "connectedMotor") return;

    this.setExitActive("exit", false);
    drivenGenerators.forEach(function (generator) { generator.powered = true; });
    var reachesMotor = drivenGenerators.length > 0;

    var wireObjects = this.objects.filter(function (object) { return object.type === "wire" || object.type === "switch"; })
      .concat(this.dynamicWires());
    var pointIndex = {};
    var ownerIndex = {};
    wireObjects.forEach(function (object, index) {
      object.__powerIndex = index;
      wireConnectionPoints(object).forEach(function (point) {
        var name = roundedPointKey(point);
        if (!pointIndex[name]) pointIndex[name] = [];
        pointIndex[name].push(object);
      });
      if (object.owner) {
        var ownerName = vectorKey(object.owner.coordinates);
        if (!ownerIndex[ownerName]) ownerIndex[ownerName] = [];
        ownerIndex[ownerName].push(object);
      }
    });

    var queue = wireObjects.filter(function (wire) {
      return drivenGenerators.some(function (generator) {
        return samePosition(generator.coordinates, wire.coordinates);
      });
    });
    var visitedWires = {};
    function enqueueWire(wire) {
      if (visitedWires[wire.__powerIndex]) return;
      queue.push(wire);
    }
    while (queue.length) {
      var wire = queue.shift();
      if (visitedWires[wire.__powerIndex]) continue;
      visitedWires[wire.__powerIndex] = true;
      if (wire.owner) wire.owner.powered = true;
      else {
        wire.powered = true;
        if (wire.type === "wire") wire.active = true;
      }
      if (this.objects.some(function (object) {
        return (object.type === "motorGear" || object.type === "motorCylinder") && samePosition(object.coordinates, wire.coordinates);
      })) reachesMotor = true;
      wireConnectionPoints(wire).forEach(function (point) {
        (pointIndex[roundedPointKey(point)] || []).forEach(enqueueWire);
      });
      if (wire.owner) {
        (ownerIndex[vectorKey(wire.owner.coordinates)] || []).forEach(enqueueWire);
      }
    }

    this.objects.forEach(function (object) {
      if (object.type !== "motorCylinder") return;
      object.powered = this.objects.some(function (gear) {
        return gear.type === "motorGear" && gear.mechanical && samePosition(add(gear.coordinates, vec(0, 1, 0)), object.coordinates);
      });
    }, this);
    this.setExitActive("exit", reachesMotor);
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
    var pushedDown = neg(this.up);
    var forward = add(this.position, step);
    var object = this.objectAt(forward);
    if (!isPushableObject(object)) return false;
    var destination = add(forward, step);
    if (!this.isUnoccupied(destination)) return false;
    this.moveObjectTo(object, destination);
    if (this.isUnoccupied(add(forward, pushedDown))) this.rollClimbDown(step, sign);
    else this.position = forward;
    this.moves += 1;
    this.applyGravity();
    this.applyObjectGravity(object, pushedDown);
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
    (this.level.switchConditions || []).forEach(function (condition) {
      var activeCount = this.objects.filter(function (candidate) {
        return candidate.type === "switch" && candidate.switchGroup === condition.group && candidate.active;
      }).length;
      this.setExitActive(condition.exit || "exit", activeCount === condition.activeCount);
    }, this);
    this.rebuildOccupants();
  };
  Game.prototype.explodeBomb = function (bomb) {
    if (bomb.splitted) return;
    var origin = copyPosition(bomb.coordinates);
    bomb.splitted = true;
    var index = this.objects.indexOf(bomb);
    if (index >= 0) this.objects.splice(index, 1);
    this.rebuildOccupants();
    sixDirections.forEach(function (direction) {
      this.propagateBombBlast(origin, direction);
    }, this);
    this.updatePower();
  };
  Game.prototype.propagateBombBlast = function (origin, direction) {
    var cursor = add(origin, direction);
    var guard = 0;
    while (validPosition(this.level, cursor) && guard < 64) {
      guard += 1;
      var occupant = this.objectAt(cursor);
      if (!occupant) {
        cursor = add(cursor, direction);
        continue;
      }
      if (occupant.type === "bomb") {
        this.explodeBomb(occupant);
        return;
      }
      if (!isPushableObject(occupant)) return;
      var destination = cursor;
      var next = add(destination, direction);
      while (this.isUnoccupied(next)) {
        destination = next;
        next = add(destination, direction);
      }
      if (!samePosition(destination, cursor)) {
        this.moveObjectTo(occupant, destination);
      }
      return;
    }
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

  function solve(level, options) {
    options = options || {};
    var maxStates = options.maxStates || 0;
    var maxDepth = options.maxDepth || 0;
    var start = new Game(level);
    start.applyGravity();
    var queue = [{ game: start, path: [] }];
    var queueIndex = 0;
    var visited = {}; visited[start.stateKey()] = true;
    var actions = level.solverActions || solverActions;
    while (queueIndex < queue.length) {
      if (maxStates && queueIndex >= maxStates) return null;
      var current = queue[queueIndex];
      queue[queueIndex] = null;
      queueIndex += 1;
      if (current.game.won) return current.path;
      if (maxDepth && current.path.length >= maxDepth) continue;
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

  return {
    levels: levels,
    levelDefinitions: levelDefinitions,
    levelNames: levelNames,
    gameItems: gameItems,
    sourceUrl: sourceUrl,
    colorSchemes: colorSchemes,
    actionTimings: actionTimings,
    getColorScheme: getColorScheme,
    getLevel: getLevel,
    getLevelIndex: getLevelIndex,
    Game: Game,
    solve: solve
  };
}));
