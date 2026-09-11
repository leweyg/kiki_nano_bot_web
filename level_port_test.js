'use strict';
const assert = require('node:assert/strict');
const Kiki = require('./kiki/js/kiki.js');
const data = require('./kiki/js/kiki_static_data.js');
const actions = ['move forward', 'move backward', 'turn left', 'turn right', 'jump', 'jump forward', 'push forward', 'shoot'];
function inside(p, size) {
  return ['x', 'y', 'z'].every(k => Number.isInteger(p[k]) && p[k] >= 0 && p[k] < size[k]);
}
for (const level of Kiki.levels) {
  assert.equal(data.levelDefinitions[level.index].port_status, level.port_status, level.id + ' registry status');
  assert(['ported', 'being-ported', 'not-ported'].includes(level.port_status), level.id);
  assert(inside(level.player.coordinates, level.size), level.id + ' spawn');
  for (const object of level.objects.concat(level.exits)) {
    assert(inside(object.coordinates, level.size), level.id + ' object ' + JSON.stringify(object));
  }
  if (level.generated) {
    assert.equal(level.port_status, 'not-ported');
    continue;
  }
  assert(level.size.y > 1, level.id + ' must retain 3D volume');
  const game = new Kiki.Game(level);
  const original = game.stateKey();
  level.objects.forEach((object, i) => {
    if (object.color) {
      assert.deepEqual(game.objects[i].color, object.color, level.id + ' source color');
      assert.notEqual(game.objects[i].color, object.color, level.id + ' color isolation');
    }
    assert.equal(game.objects[i].slippery, object.slippery, level.id + ' slippery metadata');
  });
  for (const action of actions) {
    const copy = game.clone();
    copy.action(action);
    assert(inside(copy.position, level.size), level.id + ' action ' + action);
    assert.equal(game.stateKey(), original, level.id + ' clone isolation');
  }
  for (const exit of level.exits) assert.equal(typeof exit.active, 'boolean', level.id + ' exit state');
  if (level.index >= 9) {
    assert(level.portNotes.length, level.id + ' needs audit notes');
    if (level.port_status === 'ported') assert(Array.isArray(level.solution), level.id + ' needs verified route');
  }
}
// Landmarks independent of the capture tool: half-open lines, source deletions,
// even-sized centering, dense volumes, overlapping wire faces and mutant counts.
function check(id, fn) { if (data.levelTemplates[id]) fn(Kiki.getLevel(id)); }
check('mini', l => { assert.deepEqual(l.size, {x:5,y:5,z:7}); assert.equal(l.objects.length, 13); });
check('bombs', l => assert.deepEqual(l.objects.map(o => o.coordinates), [{x:4,y:0,z:6},{x:4,y:0,z:2},{x:1,y:2,z:4}]));
check('borg', l => assert.equal(l.objects.filter(o => o.type === 'mutant').length, 150));
check('maze', l => { assert.equal(l.objects.filter(o => o.type === 'wall').length, 29); assert.deepEqual(l.exits[0].coordinates,{x:3,y:3,z:1}); });
check('walls', l => assert.equal(l.objects.length, 75));
check('mesh', l => assert.equal(l.objects.length, 216));
check('neutron', l => assert.equal(l.objects.length, 6));
check('mutants', l => { assert.equal(l.objects.filter(o => o.type === 'mutant').length, 5); assert.equal(new Kiki.Game(l).exits[0].active, false); });
check('circuit', l => assert.equal(l.objects.filter(o => o.type === 'wire' && o.coordinates.x === 0 && o.coordinates.y === 0 && o.coordinates.z === 0).length, 2));
check('stones', l => { const g = new Kiki.Game(l); assert.deepEqual(g.dir,{x:0,y:1,z:0}); assert.deepEqual(g.up,{x:0,y:0,z:1}); });
console.log('PASS all level bounds, metadata, action smoke checks, clone isolation, and source landmarks');
