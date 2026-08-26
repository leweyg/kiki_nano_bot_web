# kiki_nano_bot_web
kiki the nano bot, 3d puzzle game, ported to web

Downloaded from: https://sourceforge.net/projects/kiki/files/kiki-src/1.0.2

# Web Structure

index.html - landing page, project intro, controls guide, links to levels, and guide to characters etc.
play.html - game in 3d
sim.html - text-based (headless) sim used to test game mechanics, includes an basic search mechanism to ensure that all levels are playable to completion. 

# Code Structure

The main pages (index, sim, play, all include the files in /kiki/js , and are designed to work in browser or be usable in offline Node.js tests.

Node is used purely for validation, it is not required for build (there is no build step, and static hosting of the HTML/JavaScript should be sufficient).

# Play user interface

The primary interface is an HTML page with three.js 3d rendering, and touch friendly controls at the bottom of the page (keyboard is also supported). The touch controls should have a "move" virtual-joystick in the middle (even though the key only uses digital forward/back/left/right signals), a "jump+move" joystick that jumps as it is touched and then adds directions (as the keyboard version uses move+jump combos, but we support single finger controls), and then two buttons for "push" and "shoot".

# Offline Sim

The fundamental state machine is setup so that it can be instanced and used to offline validate that all levels are completeable.

