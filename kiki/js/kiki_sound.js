(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) module.exports = factory();
  else root.KikiSound = factory();
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  // Original KikiSound.cpp file aliases and relative volumes.
  var volumes = { bot_move: .2, bot_jump: .7, bot_land: .7, switch_off: .5 };
  var aliases = { switch_off: 'switch_on', bot_spiked: 'bot_move', spikes_start: 'bot_move', atom_birth: 'atom_digest', motor: 'bomb_splitter' };
  var names = ('bot_move bot_jump bot_land bot_health_alert bot_death bot_no_energy bullet_shot bullet_hit_wall bullet_hit_object bullet_hit_player bullet_hit_mutant stone_move stone_land switch_on atom_digest menu_fade menu_item menu_select menu_abort gate_open gate_close gate_warp bomb_explode bomb_splitter gear_on gear_off generator_on generator_off').split(' ');
  function file(name) { return 'kiki/sound/' + (aliases[name] || name) + '.wav'; }
  function cell(object) { var p = object.coordinates; return object.type + ':' + p.x + ',' + p.y + ',' + p.z; }
  function moved(a, b) { return a.x !== b.x || a.y !== b.y || a.z !== b.z; }

  // Presentation-only cues: the headless state and solver never create audio.
  function cues(before, after, action, segments) {
    var events = [], seen = {};
    var duration = (segments || []).reduce(function (sum, s) { return sum + s.duration; }, 0);
    var impact = after.lastShot ? after.lastShot.flyDuration : 0;
    function add(name, delay) {
      var key = name + ':' + (delay || 0);
      if (!seen[key]) events.push({ name: name, delay: delay || 0 });
      seen[key] = true;
    }
    if (action === 'shoot') {
      add('bullet_shot');
      var hit = after.lastShot && after.lastShot.impact;
      var target = hit && before.objects.find(function (o) { return !moved(o.coordinates, hit) && o.type !== 'wire' && o.type !== 'light'; });
      add(target && target.type === 'mutant' ? 'bullet_hit_mutant' : !target || target.type === 'wall' ? 'bullet_hit_wall' : 'bullet_hit_object', impact);
    } else if (action.indexOf('jump') === 0) add('bot_jump');
    else if (moved(before.position, after.position) || moved(before.dir, after.dir)) add('bot_move');
    if ((segments || []).some(function (s) { return /fall|jump/i.test(s.kind); })) add('bot_land', duration);
    var old = {};
    before.objects.forEach(function (o) { old[cell(o)] = o; });
    var stoneMoved = after.objects.some(function (o) { return /^(stone|wireStone|gear|generator|bomb)$/.test(o.type) && !old[cell(o)]; });
    if (stoneMoved) { add('stone_move', impact); add('stone_land', Math.max(duration, impact)); }
    var bombsBefore = before.objects.filter(function (o) { return o.type === 'bomb'; }).length;
    var bombsAfter = after.objects.filter(function (o) { return o.type === 'bomb'; }).length;
    if (bombsAfter < bombsBefore) { add('bomb_explode', impact); add('bomb_splitter', impact + 100); }
    after.objects.forEach(function (o) {
      var prev = old[cell(o)];
      if (!prev) return;
      if (o.type === 'switch' && !!prev.active !== !!o.active) add(o.active ? 'switch_on' : 'switch_off', impact);
      if (o.type === 'gear' || o.type === 'generator') {
        if (!!prev.mechanical !== !!o.mechanical) add(o.type + (o.mechanical ? '_on' : '_off'), impact);
      }
    });
    after.exits.forEach(function (exit, i) {
      if (before.exits[i] && !!before.exits[i].active !== !!exit.active) add(exit.active ? 'gate_open' : 'gate_close', impact);
    });
    if (!before.won && after.won) add('gate_warp', duration);
    return events;
  }

  function Player(host) {
    this.host = host;
    this.enabled = true;
    try { this.enabled = host.sessionStorage.getItem('kikiSoundEnabled') !== 'false'; } catch (_) {}
    this.context = null;
    this.buffers = new Map();
    this.sources = new Set();
    this.timers = new Set();
    this.generation = 0;
    this.hidden = false;
  }
  Player.prototype.load = function (name) {
    var path = file(name), self = this;
    if (!this.buffers.has(path)) {
      var pending = this.host.fetch(path).then(function (response) {
        if (!response.ok) throw new Error('Sound unavailable: ' + path);
        return response.arrayBuffer();
      }).then(function (bytes) { return self.context.decodeAudioData(bytes); });
      this.buffers.set(path, pending);
      pending.catch(function () { self.buffers.delete(path); });
    }
    return this.buffers.get(path);
  };
  Player.prototype.unlock = function () {
    if (!this.enabled || this.hidden) return;
    var Context = this.host.AudioContext || this.host.webkitAudioContext;
    if (!Context) return;
    try {
      if (!this.context) this.context = new Context();
      var resumed = this.context.resume();
      if (resumed) resumed.catch(function () {});
      // Cached once, on user input; no background audio or animation loop.
      names.forEach(function (name) { this.load(name).catch(function () {}); }, this);
    } catch (_) { /* Audio failure must never interrupt controls. */ }
  };
  Player.prototype.stop = function () {
    this.generation += 1;
    this.timers.forEach(function (timer) { this.host.clearTimeout(timer); }, this);
    this.timers.clear();
    this.sources.forEach(function (source) { try { source.stop(); } catch (_) {} });
    this.sources.clear();
  };
  Player.prototype.setEnabled = function (enabled) {
    this.enabled = enabled;
    try { this.host.sessionStorage.setItem('kikiSoundEnabled', String(enabled)); } catch (_) {}
    if (enabled) this.unlock();
    else this.stop();
  };
  Player.prototype.setHidden = function (hidden) {
    this.hidden = hidden;
    if (hidden) {
      this.stop();
      if (this.context) this.context.suspend().catch(function () {});
    }
    // Resume only on the next gesture; never replay sounds from a hidden page.
  };
  Player.prototype.play = function (name, delay) {
    if (!this.enabled || this.hidden || !this.context) return;
    var self = this, generation = this.generation;
    function start() {
      self.load(name).then(function (buffer) {
        if (generation !== self.generation || !self.enabled || self.hidden || self.context.state !== 'running') return;
        if (self.sources.size >= 16) {
          var oldest = self.sources.values().next().value;
          self.sources.delete(oldest);
          try { oldest.stop(); } catch (_) {}
        }
        var source = self.context.createBufferSource();
        var gain = self.context.createGain();
        source.buffer = buffer;
        gain.gain.value = .5 * (volumes[name] === undefined ? 1 : volumes[name]);
        source.connect(gain);
        gain.connect(self.context.destination);
        self.sources.add(source);
        source.onended = function () { self.sources.delete(source); source.disconnect(); gain.disconnect(); };
        source.start();
      }).catch(function () {});
    }
    if (delay > 0) {
      var timer = this.host.setTimeout(function () { self.timers.delete(timer); start(); }, delay);
      this.timers.add(timer);
    } else start();
  };
  Player.prototype.action = function (before, after, action, segments) {
    if (!this.enabled || this.hidden) return;
    cues(before, after, action, segments).forEach(function (cue) { this.play(cue.name, cue.delay); }, this);
  };
  return { Player: Player, cues: cues, file: file, names: names, aliases: aliases };
}));
