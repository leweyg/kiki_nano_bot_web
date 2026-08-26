"use strict";

var Kiki = require("./kiki/js/kiki.js");
var failed = [];

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

if (failed.length) {
  console.error("\nFAILED: " + failed.join(", "));
  process.exitCode = 1;
} else {
  console.log("\nPASS: " + Kiki.levels.length + " levels are playable");
}
