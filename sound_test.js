'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const Sound = require('./kiki/js/kiki_sound.js');
const Kiki = require('./kiki/js/kiki.js');
for (const name of Sound.names.concat(Object.keys(Sound.aliases))) {
  const bytes = fs.readFileSync(Sound.file(name));
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.toString('ascii', 8, 12), 'WAVE');
}
function scene(objects = [], exits = []) {
  return { position: {x:0,y:0,z:0}, dir: {x:1,y:0,z:0}, objects, exits, won:false };
}
const at = {x:1,y:0,z:0};
const before = scene([{type:'switch',active:false,coordinates:at}], [{active:false}]);
const after = scene([{type:'switch',active:true,coordinates:at}], [{active:true}]);
after.lastShot = {impact:at,flyDuration:120};
assert.deepEqual(Sound.cues(before,after,'shoot',[]), [
  {name:'bullet_shot',delay:0}, {name:'bullet_hit_object',delay:120},
  {name:'switch_on',delay:120}, {name:'gate_open',delay:120}
]);
const bombs = scene([{type:'bomb',coordinates:at}]);
const exploded = scene(); exploded.lastShot = {impact:at,flyDuration:80};
assert(Sound.cues(bombs,exploded,'shoot',[]).some(e=>e.name==='bomb_explode'&&e.delay===80));
const done=scene();done.won=true;
assert.deepEqual(Sound.cues(scene(),done,'jump',[{kind:'jump',duration:120},{kind:'fall',duration:240}]),[
  {name:'bot_jump',delay:0},{name:'bot_land',delay:360},{name:'gate_warp',delay:360}
]);
const game=new Kiki.Game('start'), initial=game.clone();
game.action('turn left');
assert(Sound.cues(initial,game,'turn left',[]).some(e=>e.name==='bot_move'));

(async()=>{
  let plays=0, stops=0, requests=0, resumes=0;
  const voices=[];
  const timers=new Map(); let serial=0;
  class Context {
    constructor(options){this.state='suspended';this.destination={};assert.equal(options.latencyHint,'interactive');}
    resume(){resumes++;this.state='running';return Promise.resolve();}
    suspend(){this.state='suspended';return Promise.resolve();}
    decodeAudioData(){return Promise.resolve({});}
    createGain(){return {gain:{value:0},connect(){},disconnect(){}};}
    createBufferSource(){const source={connect(){},disconnect(){},start(){plays++;},stop(){stops++;if(this.onended)this.onended();}};voices.push(source);return source;}
  }
  const host={AudioContext:Context,sessionStorage:{getItem(){return null;},setItem(){}},
    fetch(){requests++;return Promise.resolve({ok:true,arrayBuffer:()=>Promise.resolve(new ArrayBuffer(8))});},
    setTimeout(fn){timers.set(++serial,fn);return serial;},clearTimeout(id){timers.delete(id);}};
  const flush=()=>new Promise(resolve=>setImmediate(resolve));
  const player=new Sound.Player(host);
  assert(player.enabled); assert.equal(player.context.state,'suspended');
  await flush();assert.equal(requests,3,'only movement effects preload before input');
  assert.equal(resumes,0,'preloading does not unlock audio');assert.equal(plays,0);
  player.unlock();await flush();player.play('bot_move');await flush();assert.equal(plays,1);
  player.unlock();await flush();assert.equal(requests,Sound.names.length,'buffers cached across gestures');
  player.play('bot_land',200);assert.equal(timers.size,1);
  player.setEnabled(false);assert.equal(timers.size,0);assert.equal(stops,1);
  player.play('bot_move');await flush();assert.equal(plays,1);
  player.setEnabled(true);player.play('bot_jump');player.setEnabled(false);await flush();assert.equal(plays,1,'mute cancels pending decoded playback');
  player.setEnabled(true);player.play('bot_land',200);player.setHidden(true);assert.equal(timers.size,0);
  assert.equal(player.context.state,'suspended');
  player.setHidden(false);assert.equal(player.context.state,'suspended');player.unlock();assert.equal(player.context.state,'running');
  await flush();
  const priorPlays=plays, priorRequests=requests;
  player.play('bot_move');player.play('bot_jump');player.play('bot_land');player.play('bot_move');
  await flush();assert.equal(plays,priorPlays+4);assert.equal(requests,priorRequests);
  assert.equal(player.sources.size,4,'movement effects overlap on independent sources');
  assert.equal(voices.at(-1).buffer,voices.at(-4).buffer,'repeated walk reuses its decoded buffer');
  player.stop();
  const muted=new Sound.Player({...host,sessionStorage:{getItem(){return 'false';}}});
  await flush();assert.equal(muted.context,null);assert.equal(requests,priorRequests,'muted startup does not preload');
  const unavailable=new Sound.Player({...host,AudioContext:null});unavailable.unlock();unavailable.play('bot_move');
  const failing=new Sound.Player({...host,fetch:()=>Promise.reject(new Error('offline'))});failing.unlock();failing.play('bot_move');await flush();
  failing.host=host;failing.unlock();await flush();assert.equal(failing.buffers.size,Sound.names.length,'failed preloads can retry');
  const pendingFetches=[], paths=[];
  const slow=new Sound.Player({...host,fetch(path){paths.push(path);return new Promise(resolve=>pendingFetches.push(resolve));}});
  slow.unlock();await flush();
  assert.deepEqual(paths,['bot_move','bot_jump','bot_land'].map(Sound.file),'other preloads wait for critical effects');
  pendingFetches.slice().forEach(resolve=>resolve({ok:true,arrayBuffer:()=>Promise.resolve(new ArrayBuffer(8))}));
  await flush();assert.equal(paths.length,Sound.names.length,'remaining effects preload after critical effects decode');
  console.log('PASS WAV paths, gameplay cues/timing, early movement preload, parallel sources, caching, mute cancellation, hidden-page suspension and audio failure recovery');
})().catch(e=>{console.error(e);process.exitCode=1;});
