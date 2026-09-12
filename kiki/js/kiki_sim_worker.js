/* The synchronous solver runs off the UI thread, one requested level at a time. */
'use strict';
importScripts('kiki_golden_paths.js', 'kiki_static_data.js', 'kiki.js');
self.onmessage = function (event) {
  var index = event.data.index;
  var level = Kiki.levels[index];
  if (!level) return;
  var started = performance.now(), lastProgress = -Infinity;
  var result = { type: 'result', index: index, search: null, replay: null };
  function progress(force) {
    var now = performance.now();
    if (!force && now - lastProgress < 100) return;
    lastProgress = now;
    self.postMessage({ type: 'progress', index: index, search: result.search, replay: result.replay, elapsed: Math.round(now - started) });
  }
  try {
    if (level.port_status !== 'ported' && !(level.goldenPath && level.goldenPath.actions)) {
      result.status = 'incomplete';
      result.detail = level.goldenPath ? (level.goldenPath.reason === 'missing-mechanics' ? 'Unsolvable · missing mechanics' : 'Unsolved · search budget reached') : 'Incomplete — not certified';
    } else {
      var path = level.solution || Kiki.solve(level, {
        maxStates: 20000,
        onProgress: function (stats) { result.search = stats; progress(stats.reason !== 'running'); }
      });
      var game = new Kiki.Game(level);
      game.applyGravity();
      var valid = Boolean(path);
      if (path) {
        result.replay = { step: 0, total: path.length, position: game.position, dir: game.dir, trace: [] };
        progress(true);
        for (var step = 0; step < path.length; step += 1) {
          valid = Boolean(game.action(path[step]));
          result.replay = { step: step + 1, total: path.length, position: game.position, dir: game.dir, trace: path.slice(Math.max(0, step - 5), step + 1) };
          progress(true);
          if (!valid) break;
        }
      }
      result.status = valid && game.won ? 'ok' : 'fail';
      result.detail = result.status === 'ok' ? 'PASS · ' + path.length + ' moves' : path ? 'FAIL · replay did not finish' :
        result.search && result.search.reason === 'limit' ? 'Search limit reached · no route found' : 'Search exhausted · no route found';
      if (result.status === 'ok' && level.port_status !== 'ported') {
        result.status = 'incomplete';
        result.detail = 'REPLAY OK · semi-ported · ' + path.length + ' moves';
      }
    }
  } catch (error) {
    result.status = 'fail';
    result.detail = 'Error · ' + error.message;
  }
  result.elapsed = Math.round(performance.now() - started);
  self.postMessage(result);
};
