'use strict';
const assert = require('node:assert/strict');
const Kiki = require('./kiki/js/kiki.js');
const level = {id:'progress-test',size:{x:7,y:7,z:7},player:{coordinates:{x:0,y:0,z:0}},objects:[],exits:[{active:false,coordinates:{x:3,y:3,z:3}}]};
const updates=[];
assert.equal(Kiki.solve(level,{maxStates:130,onProgress:stats=>updates.push(stats)}),null);
assert.deepEqual(updates.map(s=>s.explored),[0,64,128,130]);
assert.equal(updates.at(-1).reason,'limit');
assert.equal(updates.at(-1).actionChecks,1300);
for(let i=1;i<updates.length;i++){
 assert(updates[i].actionChecks>=updates[i-1].actionChecks);
 assert(updates[i].discovered>=updates[i-1].discovered);
 assert.equal(updates[i].queued,updates[i].discovered-updates[i].explored);
 assert(updates[i].validTransitions<=updates[i].actionChecks);
 assert(updates[i].trace.length<=6);
}
const found=[];
assert.deepEqual(Kiki.solve(Kiki.getLevel('start'),{maxStates:20000,onProgress:p=>found.push(p)}),Kiki.solve(Kiki.getLevel('start'),{maxStates:20000}));
assert.equal(found.at(-1).reason,'found');
const exhausted=[];
assert.equal(Kiki.solve(level,{maxDepth:1,onProgress:p=>exhausted.push(p)}),null);
assert.equal(exhausted.at(-1).reason,'exhausted');
console.log('PASS search progress counts, bounded traces, limits/exhaustion, and unchanged solver routes');

// Electro must solve the actual circuit within the live simulator's budget.
const electro = Kiki.getLevel('electro');
const circuitProgress = [];
const circuitPath = Kiki.solve(electro, {maxStates:20000,onProgress:s=>circuitProgress.push(s)});
assert(circuitPath, 'circuit-biased search must find an Electro route');
assert.equal(circuitProgress.at(-1).reason, 'found');
for (const stats of circuitProgress) assert.equal(stats.queued, stats.discovered - stats.explored);
const circuit = new Kiki.Game(electro);
circuit.applyGravity();
assert(!circuit.exits.some(e=>e.active));
for (const action of circuitPath) {
  assert(circuit.action(action));
  if (circuit.exits.some(e=>e.active)) {
    const generator = circuit.objects.find(o=>o.type==='generator');
    assert(generator.mechanical, 'generator must be driven by the motor');
    assert(circuit.objects.find(o=>o.type==='gear').mechanical, 'cog must join the motor chain');
    assert(circuit.objects.some(o=>o.type==='wire' && o.powered &&
      o.coordinates.x===generator.coordinates.x && o.coordinates.y===generator.coordinates.y &&
      o.coordinates.z===generator.coordinates.z), 'generator must charge a wire in its own cell');
  }
}
assert(circuit.won);
const shortcut = new Kiki.Game(electro);
shortcut.applyGravity();
['move backward','move backward','move backward','jump forward','turn right','jump forward',
 'jump forward','push backward'].forEach(a=>assert(shortcut.action(a)));
assert(shortcut.objects.find(o=>o.type==='generator').mechanical);
assert(!shortcut.objects.some(o=>o.type==='wire'&&o.powered));
assert(!shortcut.exits.some(e=>e.active), 'spinning generator without wire power must leave the exit closed');
console.log('PASS Electro circuit search, powered-wire replay, and rejected mechanical-only shortcut');

const elevate = Kiki.getLevel('elevate');
const liftProgress = [];
const liftPath = Kiki.solve(elevate, {maxStates:20000,onProgress:s=>liftProgress.push(s)});
assert(liftPath, 'Elevate must solve within the simulator budget');
assert.equal(liftProgress.at(-1).reason, 'found');
for (const stats of liftProgress) assert.equal(stats.queued, stats.discovered - stats.explored);
const lift = new Kiki.Game(elevate);
lift.applyGravity();
const cell = o=>JSON.stringify(o.coordinates);
const bombCells = lift.objects.filter(o=>o.type==='bomb').map(cell);
let shots = 0, raised = false;
for (const action of liftPath) {
  const before = lift.objects.filter(o=>o.type==='bomb').map(cell);
  assert(lift.action(action));
  const after = lift.objects.filter(o=>o.type==='bomb').map(cell);
  assert(after.every(p=>bombCells.includes(p)), 'bombs must stay in their original cells');
  if (after.length < before.length) {
    assert.equal(action, 'shoot', 'detonate bombs by shooting');
    shots++;
  }
  if (!after.length && !raised) {
    assert(lift.objects.filter(o=>o.circuitPart).every(o=>o.coordinates.y===4), 'blasts lift all parts to ceiling');
    raised = true;
    assert(!lift.exits.some(e=>e.active), 'lifting alone does not power the exit');
  }
  if (lift.exits.some(e=>e.active)) {
    assert(lift.objects.filter(o=>o.circuitPart).every(o=>o.mechanical));
    assert(lift.objects.filter(o=>o.type==='wire').every(o=>o.powered), 'entire exit loop receives generator power');
  }
}
assert(shots>0 && raised && lift.won);
// Break the drive chain: circuit and wire power must disappear together.
const broken = lift.clone();
const cog = broken.objects.find(o=>o.type==='gear');
broken.moveObjectTo(cog, {x:cog.coordinates.x,y:4,z:1});
broken.updatePower();
assert(!broken.exits.some(e=>e.active));
assert(!broken.objects.some(o=>o.type==='wire'&&o.powered));
console.log('PASS Elevate bomb shots without pushes, ceiling lift, powered loop, and disconnected circuit');
