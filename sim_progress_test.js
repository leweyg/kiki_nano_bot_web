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
