# kiki_nano_bot_web
kiki the nano bot, 3d puzzle game, ported to web

Downloaded from: https://sourceforge.net/projects/kiki/files/kiki-src/1.0.2

# Web Structure

index.html - landing page, project intro, controls guide, links to levels, and guide to characters etc.
play.html - game in 3d
sim.js - text-based (headless) sim used to test game mechanics, includes an basic search mechanism to ensure that all levels are playable to completion. Requires that "node" (with no other dependancies) is installed to run.

# Code Structure

The main pages (index, sim, play, all include the files in /kiki/js , and are designed to work in browser or be usable in offline Node.js tests.

Node is used purely for validation, it is not required for build (there is no build step, and static hosting of the HTML/JavaScript should be sufficient).

Where possible levels and other core systems are re-expressed as .json files instead of straight code (converted from the code-based level files), but otherwise the original folder structures are generally matches. Note that unlike C, JavaScript does not support structures so dynamic objects should be used, however please avoid any per-frame allocations to reduce garbage collection. These new files should be under the "kiki/js" (JavaScript) folder, and the original python and C and other language files should NOT be modified.

# Play user interface

The primary interface is an HTML page with three.js 3d rendering, and touch friendly controls at the bottom of the page (keyboard is also supported). The touch controls should have a "move" virtual-joystick in the middle (even though the key only uses digital forward/back/left/right signals), a "jump+move" joystick that jumps as it is touched and then adds directions (as the keyboard version uses move+jump combos, but we support single finger controls), and then two buttons for "push" and "shoot".

# Offline Sim

The fundamental state machine is setup so that it can be instanced and used to offline validate that all levels are completeable.

# Porting Process

The proting should be firstly translating the level files into json or javascript files, and then build minimal game mechanics to ensure that the levels are completeable and consistent with the original game timings and controls. Don't both porting any menus or system unrelated to more gameplay mechanics (which should be validated ). Once those are in place, the play.html should be an interface to that shared state system, but using three.js for the visuals. Many of the meshes are in the C and Python files and need to be ported to equivalent javascript. Three.js is availble locally at kiki/js/threejs/three.core.js .
