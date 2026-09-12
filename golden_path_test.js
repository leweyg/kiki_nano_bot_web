'use strict';
const assert = require('node:assert/strict');
const Kiki = require('./kiki/js/kiki.js');
const golden = require('./kiki/js/kiki_golden_paths.js');
assert.equal(Object.keys(golden).length, Kiki.levels.length, 'every level needs a completion audit');
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

// Exercise the browser worker's classification with the real shared game.
const fs = require('node:fs');
const vm = require('node:vm');
const messages=[];
const worker={Kiki,performance,importScripts(){},self:{postMessage(message){messages.push(structuredClone(message));}}};
vm.runInNewContext(fs.readFileSync('kiki/js/kiki_sim_worker.js','utf8'),worker);
for(const [id,audit] of Object.entries(golden)) {
  messages.length=0;
  worker.self.onmessage({data:{index:Kiki.getLevel(id).index}});
  const result=messages.at(-1);
  assert.equal(result.type,'result');
  assert.equal(result.status,audit.port_status==='ported'?'ok':'incomplete',id+' worker classification');
  if(audit.actions) {
    assert.equal(result.replay.step,audit.actions.length,id+' worker replay');
    assert(messages.some(m=>m.type==='progress'&&m.replay&&m.replay.trace.length),id+' replay progress');
  } else {
    assert.equal(result.replay,null,id+' must stop before searching missing mechanics');
    assert.equal(result.search,null);
  }
  if(audit.port_status==='semi-ported')assert(audit.notes.length,id+' shortcut needs explanation');
  if(audit.shortcutActions) {
    const game=new Kiki.Game(Kiki.getLevel(id));game.applyGravity();
    for(const action of audit.shortcutActions)assert(game.action(action));
    assert(game.won,id+' documented shortcut must replay');
  }
}
console.log('PASS worker route progress, incomplete classification, and documented shortcuts');
