'use strict';
const assert = require('node:assert/strict');
const Kiki = require('./kiki/js/kiki.js');
const golden = require('./kiki/js/kiki_golden_paths.js');
let solved=0;
for (const [id, audit] of Object.entries(golden)) {
  const level=Kiki.getLevel(id);
  assert.equal(level.id,id);
  assert.equal(level.port_status,audit.port_status);
  if (!audit.actions) { assert.notEqual(audit.port_status,'ported'); continue; }
  const game=new Kiki.Game(level);game.applyGravity();
  for (const [step,action] of audit.actions.entries()) {
    assert(!game.won,id+' extra action after completion at '+step);
    assert(game.action(action),id+' rejected action at '+step+': '+action);
  }
  assert(game.won,id+' route must reach an active exit');
  assert.deepEqual(level.solution,audit.actions);
  solved++;
}
console.log('PASS '+solved+' saved golden paths replay to an active exit; audit statuses match');
