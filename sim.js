"use strict";

var Kiki = require("./kiki/js/kiki.js");
var failed = [];
var scriptedRoutes = {
  electro: ["move forward", "turn right", "jump forward", "turn right", "move forward", "move forward", "jump forward", "move forward", "push forward", "jump forward", "turn right", "jump forward", "jump forward"],
  throw: [
    "turn left", "turn left", "jump forward", "jump forward", "jump forward", "push backward",
    "move backward", "move backward", "turn right", "jump forward", "push backward", "move backward",
    "turn left", "move backward", "turn left", "move forward", "push backward",
    "jump forward", "move forward", "turn left", "move forward", "turn left", "push forward",
    "jump forward", "turn right", "jump forward", "push backward", "move backward", "turn left",
    "move forward", "turn left", "move forward", "push backward",
    "move backward", "turn left", "turn left", "jump forward", "move forward", "move forward",
    "jump forward", "jump forward", "move forward", "jump forward"
  ]
};

function sameCell(a, b) {
  return a.x === b.x && (a.y || 0) === (b.y || 0) && a.z === b.z;
}

function assertStartJumpExitSweep() {
  var level = Kiki.getLevel(0);
  var miss = new Kiki.Game(level);
  miss.position = { x: 3, y: 2, z: 6 };
  miss.dir = { x: 0, y: 0, z: 1 };
  miss.up = { x: 0, y: -1, z: 0 };
  miss.action("move forward");
  if (miss.won) {
    failed.push("start (adjacent walk/roll miss completed exit)");
    return;
  }

  var game = new Kiki.Game(level);
  var setup = ["turn left", "jump far forward", "jump forward", "jump forward", "jump forward", "jump far forward", "move forward"];
  setup.forEach(function (action) { game.action(action); });
  if (game.won) {
    failed.push("start (3D jump/fall sweep setup reached exit too early)");
    return;
  }
  var forwardFinish = game.clone();
  var farFinish = game.clone();
  if (!forwardFinish.action("jump forward") || !forwardFinish.won) {
    failed.push("start (3D jump/fall sweep missed forward-jump exit)");
    return;
  }
  if (!farFinish.action("jump far forward") || !farFinish.won) {
    failed.push("start (3D jump/fall sweep missed far-jump exit)");
    return;
  }
  if (sameCell(forwardFinish.position, level.exits[0].coordinates)) {
    failed.push("start (3D jump/fall sweep did not exercise in-flight completion)");
    return;
  }

  var earlyFarMiss = new Kiki.Game(level);
  ["turn left", "jump far forward", "jump forward", "jump forward", "jump forward", "jump far forward"].forEach(function (action) {
    earlyFarMiss.action(action);
  });
  earlyFarMiss.action("jump far forward");
  if (earlyFarMiss.won) {
    failed.push("start (early far-jump miss completed exit)");
    return;
  }
  console.log("OK  start      3D jump/fall exit sweep");
}

function stoneAt(game, position) {
  return game.objects.some(function (object) {
    return object.type === "stone" && sameCell(object.coordinates, position);
  });
}

function applyPath(game, path, label) {
  return path.every(function (action, index) {
    if (game.action(action)) return true;
    failed.push(label + " (scripted action failed at " + (index + 1) + ": " + action + ")");
    return false;
  });
}

function assertThrowPushFallStack() {
  var level = Kiki.getLevel("throw");
  var game = new Kiki.Game(level);
  var firstDrop = scriptedRoutes.throw.slice(0, 17);
  var secondStack = scriptedRoutes.throw.slice(17, 33);
  var finish = scriptedRoutes.throw.slice(33);

  game.applyGravity();
  if (!applyPath(game, firstDrop, "throw")) return;
  if (!stoneAt(game, { x: 2, y: 3, z: 0 })) {
    failed.push("throw (first pushed stone did not fall through the exit column to the opposite wall)");
    return;
  }

  if (!applyPath(game, secondStack, "throw")) return;
  if (!stoneAt(game, { x: 2, y: 3, z: 0 }) || !stoneAt(game, { x: 2, y: 3, z: 1 })) {
    failed.push("throw (second pushed stone did not stack on the first stone in the exit column)");
    return;
  }

  if (!applyPath(game, finish, "throw") || !game.won) {
    failed.push("throw (stacked-stone route did not finish)");
    return;
  }
  console.log("OK  throw      push-time gravity stack route");
}

function makeGeneratorWireTestLevel(wirePosition) {
  return {
    id: "generator-wire-test",
    size: { x: 5, y: 3, z: 5 },
    player: { coordinates: { x: 0, y: 0, z: 0 } },
    exits: [{ name: "exit", active: false, coordinates: { x: 4, y: 2, z: 4 } }],
    powerCondition: "connectedMotor",
    objects: [
      { type: "motorGear", face: "PY", coordinates: { x: 1, y: 0, z: 1 } },
      { type: "gear", face: "PY", coordinates: { x: 2, y: 0, z: 1 } },
      { type: "generator", face: "PY", active: true, coordinates: { x: 3, y: 0, z: 1 } },
      { type: "wire", face: "PY", connections: "all", coordinates: wirePosition }
    ]
  };
}

function assertGeneratorPowersOnlySameCellWires() {
  var adjacent = new Kiki.Game(makeGeneratorWireTestLevel({ x: 3, y: 0, z: 2 }));
  var adjacentWire = adjacent.objects.filter(function (object) { return object.type === "wire"; })[0];
  if (adjacentWire.powered || adjacentWire.active) {
    failed.push("generator (powered adjacent wire without sharing its cell)");
    return;
  }

  var sameCell = new Kiki.Game(makeGeneratorWireTestLevel({ x: 3, y: 0, z: 1 }));
  var sameCellWire = sameCell.objects.filter(function (object) { return object.type === "wire"; })[0];
  if (!sameCellWire.powered || !sameCellWire.active) {
    failed.push("generator (did not power wire in the same cell)");
    return;
  }
  console.log("OK  generator  same-cell wire power");
}

Kiki.levels.forEach(function (level) {
  var path = scriptedRoutes[level.id] || Kiki.solve(level, { maxStates: 20000 });
  var game = new Kiki.Game(level);
  game.applyGravity();
  if (!path) { failed.push(level.id + " (no route)"); return; }
  if (!applyPath(game, path, level.id)) return;
  if (!game.won) failed.push(level.id + " (route did not finish)");
  else {
    var ms = path.reduce(function (total, action) { return total + game.actionDuration(action); }, 0);
    console.log("OK  " + level.id.padEnd(10) + " " + path.length + " moves  " + ms + " ms");
  }
});

assertThrowPushFallStack();
assertGeneratorPowersOnlySameCellWires();
assertStartJumpExitSweep();

if (failed.length) {
  console.error("\nFAILED: " + failed.join(", "));
  process.exitCode = 1;
} else {
  console.log("\nPASS: " + Kiki.levels.length + " levels are playable");
}
