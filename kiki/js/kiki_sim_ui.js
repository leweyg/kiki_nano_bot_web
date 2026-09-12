(function () {
  'use strict';
  var levels = KikiStaticData.levelDefinitions;
  var rows = [];
  var worker = null;
  var nextTimer = null;
  var current = -1;
  var checked = 0;
  var counts = { ok: 0, fail: 0, incomplete: 0 };
  var runButton = document.getElementById('run');
  var stopButton = document.getElementById('stop');
  var summary = document.getElementById('summary');
  var progress = document.getElementById('progress');
  var body = document.getElementById('results');
  progress.max = levels.length;

  // Render the complete table before starting any searches.
  levels.forEach(function (level) {
    var row = document.createElement('tr');
    var name = document.createElement('td');
    var link = document.createElement('a');
    link.href = 'play.html?level=' + encodeURIComponent(level.id);
    link.textContent = String(level.index + 1).padStart(2, '0') + ' / ' + level.title;
    name.appendChild(link);
    var port = document.createElement('td');
    port.textContent = level.port_status;
    var result = document.createElement('td');
    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'row-toggle';
    var marker = document.createElement('span');
    marker.setAttribute('aria-hidden', 'true');
    var pinned = document.createElement('span');
    pinned.className = 'pin-label';
    pinned.textContent = ' · pinned';
    var status = document.createElement('span');
    status.textContent = 'Queued';
    var diagnostics = document.createElement('small');
    diagnostics.className = 'diagnostics';
    diagnostics.id = 'level-diagnostics-' + level.index;
    diagnostics.textContent = 'Waiting for this level to be checked.';
    toggle.setAttribute('aria-controls', diagnostics.id);
    toggle.append(marker, status, pinned);
    result.append(toggle, diagnostics);
    row.className = 'pending';
    row.append(name, port, result);
    body.appendChild(row);
    var entry = { row: row, result: status, diagnostics: diagnostics, toggle: toggle,
      marker: marker, pinned: pinned, autoExpanded: false, userExpanded: false, level: level };
    toggle.addEventListener('click', function () {
      entry.userExpanded = !entry.userExpanded;
      updateExpansion(entry);
    });
    rows.push(entry);
    updateExpansion(entry);
  });

  function updateExpansion(entry) {
    var expanded = entry.autoExpanded || entry.userExpanded;
    entry.diagnostics.hidden = !expanded;
    entry.toggle.setAttribute('aria-expanded', String(expanded));
    entry.marker.textContent = expanded ? '▾ ' : '▸ ';
    entry.pinned.hidden = !entry.userExpanded;
    entry.toggle.title = entry.userExpanded ? 'Unpin details (active checks stay open)' : 'Keep these details open';
  }
  function describePosition(stats) {
    var p = stats.position, d = stats.dir;
    var direction = d.x ? (d.x > 0 ? '+X' : '−X') : d.y ? (d.y > 0 ? '+Y' : '−Y') : (d.z > 0 ? '+Z' : '−Z');
    return '(' + p.x + ', ' + p.y + ', ' + p.z + '), facing ' + direction;
  }
  function updateDiagnostics(entry, result) {
    var lines = [], search = result.search, replay = result.replay;
    if (search) {
      lines.push(search.explored.toLocaleString() + ' states explored / ' + search.maxStates.toLocaleString() +
        ' limit · ' + search.actionChecks.toLocaleString() + ' movement/action checks');
      lines.push(search.discovered.toLocaleString() + ' unique states · ' + search.validTransitions.toLocaleString() +
        ' valid moves · ' + search.queued.toLocaleString() + ' queued');
      if (!replay) lines.push('Route depth ' + search.depth + ' · Search cell ' + describePosition(search));
    }
    if (replay) lines.push('Replay step ' + replay.step + ' / ' + replay.total + ' · ' + describePosition(replay));
    var trace = replay ? replay.trace : search ? search.trace : [];
    if (trace.length) lines.push('Recent route: ' + trace.join(' → '));
    if (lines.length) lines.push(result.elapsed.toLocaleString() + ' ms elapsed');
    var template = KikiStaticData.levelTemplates[entry.level.id];
    if (result.status === 'incomplete') {
      lines = lines.concat(template && template.portNotes && template.portNotes.length ? template.portNotes : ['This level is not certified playable; its completion check was skipped.']);
    }
    var audit = template && template.goldenPath;
    if (result.type === 'result' && audit && audit.attempts) {
      audit.attempts.forEach(function (attempt) {
        var detail = 'Offline ' + attempt.method + ': ' + (attempt.stopped || attempt.reason);
        if (attempt.explored != null) detail += ' · ' + attempt.explored.toLocaleString() + ' states';
        if (attempt.actionChecks != null) detail += ' · ' + attempt.actionChecks.toLocaleString() + ' action checks';
        if (attempt.elapsedMs != null) detail += ' · ' + attempt.elapsedMs.toLocaleString() + ' ms';
        lines.push(detail);
      });
    }
    entry.diagnostics.textContent = lines.join('\n') || 'No additional search details.';
  }
  function updateSummary(prefix) {
    progress.value = checked;
    summary.textContent = prefix + ' · ' + checked + ' / ' + levels.length + ' checked · ' +
      counts.ok + ' verified · ' + counts.incomplete + ' incomplete · ' + counts.fail + ' failed';
  }
  function stop(reason) {
    if (nextTimer !== null) clearTimeout(nextTimer);
    nextTimer = null;
    if (worker) worker.terminate();
    worker = null;
    rows.forEach(function (entry) {
      if (entry.row.className === 'running' || entry.row.className === 'pending') {
        entry.result.textContent = 'Not checked';
        entry.row.className = 'pending';
      }
      entry.autoExpanded = false;
      updateExpansion(entry);
    });
    runButton.disabled = false;
    stopButton.disabled = true;
    updateSummary(reason || 'Stopped');
  }
  function run() {
    if (worker) stop();
    current = -1;
    checked = 0;
    counts = { ok: 0, fail: 0, incomplete: 0 };
    rows.forEach(function (entry) {
      entry.row.className = 'pending';
      entry.result.textContent = 'Queued';
      entry.diagnostics.textContent = 'Waiting for this level to be checked.';
      entry.autoExpanded = false;
      updateExpansion(entry);
    });
    runButton.disabled = true;
    stopButton.disabled = false;
    updateSummary('Running');
    var activeWorker;
    try {
      activeWorker = new Worker('kiki/js/kiki_sim_worker.js');
      worker = activeWorker;
    } catch (error) {
      stop('Unable to start simulation: ' + error.message);
      return;
    }
    function next() {
      nextTimer = null;
      if (worker !== activeWorker) return;
      current += 1;
      if (current >= levels.length) { stop('Complete'); return; }
      rows[current].row.className = 'running';
      rows[current].result.textContent = 'Checking…';
      rows[current].autoExpanded = true;
      updateExpansion(rows[current]);
      updateSummary('Checking ' + levels[current].title);
      activeWorker.postMessage({ index: current });
    }
    activeWorker.onmessage = function (event) {
      if (worker !== activeWorker) return;
      var result = event.data;
      if (result.index !== current) return;
      updateDiagnostics(rows[current], result);
      if (result.type === 'progress') {
        rows[current].result.textContent = result.replay ? 'Replaying step ' + result.replay.step + ' / ' + result.replay.total + '…' : 'Searching…';
        return;
      }
      if (!Object.prototype.hasOwnProperty.call(counts, result.status)) return;
      rows[current].autoExpanded = false;
      updateExpansion(rows[current]);
      rows[current].row.className = result.status;
      rows[current].result.textContent = result.detail + (result.status === 'incomplete' ? '' : ' · ' + result.elapsed + ' ms');
      checked += 1;
      counts[result.status] += 1;
      updateSummary('Running');
      // Yield between results, including fast incomplete/known-route levels.
      nextTimer = setTimeout(next, 16);
    };
    activeWorker.onerror = function (event) {
      if (worker !== activeWorker) return;
      event.preventDefault();
      stop('Simulation interrupted: ' + event.message);
    };
    next();
  }
  runButton.addEventListener('click', run);
  stopButton.addEventListener('click', function () { stop(); });
  window.addEventListener('pagehide', function () { stop(); });
  window.addEventListener('pageshow', function (event) { if (event.persisted) updateSummary('Ready to run again'); });
  // Give the initial table a paint before automatically starting.
  requestAnimationFrame(function () { setTimeout(run, 0); });
}());
