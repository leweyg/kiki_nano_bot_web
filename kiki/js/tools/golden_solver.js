/* Dependency-free, bounded offline route search. Never changes game mechanics.
 * node kiki/js/tools/golden_solver.js LEVEL [output.json]
 */
'use strict';
const fs = require('node:fs');
const Kiki = require('../kiki.js');
const level = Kiki.getLevel(process.argv[2]);
if (level.id !== process.argv[2]) throw Error('Unknown level');
const started = Date.now();
const actions = level.solverActions || ['move forward','move backward','turn left','turn right','jump forward','jump far forward','jump','push forward','push backward','shoot'];
const originalKey = Kiki.Game.prototype.stateKey;
// Exact compact encoding: fixed room walls/lights do not change in this engine.
// Include type, position and activation for every other object, in identity order.
const types = {stone:'s',wireStone:'w',wire:'i',switch:'t',gear:'g',generator:'e',motorGear:'m',motorCylinder:'c',bomb:'b',mutant:'u'};
const cell = p => (p.x + level.size.x * (p.y + level.size.y * p.z)).toString(36);
const axis = p => p.x ? (p.x > 0 ? 0 : 1) : p.y ? (p.y > 0 ? 2 : 3) : p.z > 0 ? 4 : 5;
Kiki.Game.prototype.stateKey = function () {
  return cell(this.position)+':'+axis(this.dir)+axis(this.up)+'|'+this.objects.filter(o=>o.type!=='wall'&&o.type!=='light').map(o=>(types[o.type]||o.type)+cell(o.coordinates)+(o.active?'!':'.')).join('')+'|'+this.exits.map(e=>e.active?'1':'0').join('');
};
const attempts=[];
function replay(path) {
  if (!path) return null;
  const game = new Kiki.Game(level);game.applyGravity();
  const initial = game.clone();
  let pushes=0,shots=0,switches=0;
  for (const action of path) {
    if(game.won||!game.action(action))return null;
    if(action.startsWith('push'))pushes++;
    if(action==='shoot')shots++;
  }
  if(!game.won)return null;
  switches=game.objects.filter(o=>o.type==='switch'&&o.active).length;
  return {actions:path,metrics:{moves:path.length,pushes,shots,activeSwitches:switches,objects:level.objects.length,initiallyWon:initial.won}};
}
function bfs(budgetMs, limit) {
  let stats;
  const began=Date.now();
  try {
    const path=Kiki.solve(level,{maxStates:limit,onProgress:s=>{
      stats=s;
      if(Date.now()-began>budgetMs || s.discovered>180000)throw Error('budget');
    }});
    attempts.push({method:'breadth-first',elapsedMs:Date.now()-began,...stats});
    return path;
  } catch(error) {
    if(error.message!=='budget')throw error;
    attempts.push({method:'breadth-first',reason:'budget',elapsedMs:Date.now()-began,...stats,stopped:'time/frontier budget'});
    return null;
  }
}
class Heap {
 constructor(){this.a=[];}
 push(n){const a=this.a;let i=a.length;a.push(n);while(i){const p=(i-1)>>1;if(a[p].score<=n.score)break;a[i]=a[p];i=p;}a[i]=n;}
 pop(){const a=this.a,first=a[0],last=a.pop();if(a.length){let i=0;while(i*2+1<a.length){let c=i*2+1;if(c+1<a.length&&a[c+1].score<a[c].score)c++;if(a[c].score>=last.score)break;a[i]=a[c];i=c;}a[i]=last;}return first;}
}
function heuristic(game) {
 const active=game.exits.filter(e=>e.active);
 let targets=active.map(e=>e.coordinates);
 const unhit=game.objects.filter(o=>o.type==='switch'&&!o.active);
 if(!targets.length)targets=unhit.map(o=>o.coordinates);
 if(!targets.length)targets=game.exits.map(e=>e.coordinates);
 let distance=Infinity;
 for(const p of targets){const dx=p.x-game.position.x,dy=p.y-game.position.y,dz=p.z-game.position.z;distance=Math.min(distance,Math.sqrt(dx*dx+dy*dy+dz*dz));}
 return distance+(active.length?0:unhit.length*3);
}
function bestFirst(budgetMs, weight) {
 const began=Date.now(),start=new Kiki.Game(level);start.applyGravity();
 const open=new Heap(),seen=new Map();
 open.push({game:start,parent:null,action:null,depth:0,score:heuristic(start)*weight});seen.set(start.stateKey(),0);
 let explored=0,checks=0;
 while(open.a.length && explored<100000 && seen.size<180000 && Date.now()-began<budgetMs){
  const node=open.pop(), game=node.game;
  explored++;
  if(game.won){const route=[];let n=node;while(n.parent){route.push(n.action);n=n.parent;}route.reverse();attempts.push({method:'weighted-best-first',weight,reason:'found',explored,discovered:seen.size,actionChecks:checks,elapsedMs:Date.now()-began});return route;}
  if(node.depth>=100)continue;
  for(const action of actions){checks++;const next=game.clone();if(!next.action(action))continue;const key=next.stateKey(),depth=node.depth+1;if(seen.has(key)&&seen.get(key)<=depth)continue;seen.set(key,depth);open.push({game:next,parent:node,action,depth,score:depth+heuristic(next)*weight});}
  // Expanded nodes need only ancestry for route reconstruction, not game copies.
  node.game=null;
 }
 attempts.push({method:'weighted-best-first',weight,reason:open.a.length?'budget':'exhausted',explored,discovered:seen.size,actionChecks:checks,elapsedMs:Date.now()-began});
 return null;
}
let solution=replay(level.solution);
if(solution)attempts.push({method:'existing-route',reason:'replayed'});
if(!solution)solution=replay(bfs(12000,40000));
if(!solution && attempts.at(-1).reason!=='exhausted')solution=replay(bestFirst(18000,4));
if(!solution && attempts.at(-1).reason!=='exhausted')solution=replay(bestFirst(18000,1.5));
Kiki.Game.prototype.stateKey=originalKey;
// Replay with the unmodified public state-key implementation as well.
if(solution&&!replay(solution.actions))throw Error('Final replay failed');
const result={id:level.id,status:solution?'solved':'unsolvable',reason:solution?'replay-verified':attempts.at(-1).reason==='exhausted'?'search-exhausted':'bounded-search-limit',elapsedMs:Date.now()-started,attempts,...(solution||{})};
if(process.argv[3])fs.writeFileSync(process.argv[3],JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({id:result.id,status:result.status,moves:solution&&solution.actions.length,elapsedMs:result.elapsedMs,reason:result.reason}));
