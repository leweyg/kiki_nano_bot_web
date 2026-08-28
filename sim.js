"use strict";

var Kiki = require("./kiki/js/kiki.js");
var failed = [];

function sameCell(a, b) {
  return a.x === b.x && (a.y || 0) === (b.y || 0) && a.z === b.z;
}

function assertStartJumpExitSweep() {
  var level = Kiki.getLevel(0);
  var game = new Kiki.Game(level);
  var setup = ["turn left", "jump far forward", "jump forward", "jump forward", "jump forward", "jump far forward"];
  setup.forEach(function (action) { game.action(action); });
  if (game.won) {
    failed.push("start (3D jump/fall sweep setup reached exit too early)");
    return;
  }
  if (!game.action("jump forward") || !game.won) {
    failed.push("start (3D jump/fall sweep missed exit)");
    return;
  }
  if (sameCell(game.position, level.exits[0].coordinates)) {
    failed.push("start (3D jump/fall sweep did not exercise in-flight completion)");
    return;
  }
  console.log("OK  start      3D jump/fall exit sweep");
}

Kiki.levels.forEach(function (level) {
  var path = Kiki.solve(level);
  var game = new Kiki.Game(level);
  if (!path) { failed.push(level.id + " (no route)"); return; }
  path.forEach(function (action) { game.action(action); });
  if (!game.won) failed.push(level.id + " (route did not finish)");
  else {
    var ms = path.reduce(function (total, action) { return total + game.actionDuration(action); }, 0);
    console.log("OK  " + level.id.padEnd(10) + " " + path.length + " moves  " + ms + " ms");
  }
});

assertStartJumpExitSweep();

if (failed.length) {
  console.error("\nFAILED: " + failed.join(", "));
  process.exitCode = 1;
} else {
  console.log("\nPASS: " + Kiki.levels.length + " levels are playable");
}
