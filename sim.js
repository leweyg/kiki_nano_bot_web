"use strict";

var Kiki = require("./kiki/js/kiki.js");
var failed = [];

Kiki.levels.forEach(function (level) {
  var path = Kiki.solve(level);
  var game = new Kiki.Game(level);
  if (!path) { failed.push(level.id + " (no route)"); return; }
  path.forEach(function (direction) { game.move(direction[0], direction[1]); });
  if (!game.won) failed.push(level.id + " (route did not finish)");
  else console.log("OK  " + level.id.padEnd(10) + " " + path.length + " moves");
});

if (failed.length) {
  console.error("\nFAILED: " + failed.join(", "));
  process.exitCode = 1;
} else {
  console.log("\nPASS: " + Kiki.levels.length + " levels are playable");
}