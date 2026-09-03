# kiki_nano_bot_web
kiki the nano bot, 3d puzzle game, ported to web

Play here: https://leweyg.github.io/kiki_nano_bot_web/

Downloaded from: https://sourceforge.net/projects/kiki/files/kiki-src/1.0.2

Direct port of original to web (original controls, menus, etc.): https://transmutrix.itch.io/kiki-the-nanobot

Navigate a chain of compact puzzle arenas, push movable blocks into shape, activate the chained components, and find the glowing exit. 
      This web version tunes gameplay for mobile via redesigned touch controls, URLs per level, and proper page idling your battery isn't overused.</p>

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

# Implementation Roadmap

The current web files provide a working scaffold: `index.html`, `play.html`, `sim.html`, `sim.js`, and `sim_test.sh`. The first levels are authored from the original sources, while later unported levels still fall back to deterministic placeholder layouts that are useful for testing the shared state and renderer.

General iteration loop will be:

- Port each level, starting at the first, check that required game world and control mechanics are working, and tested in sim, then check that the 3D rendering is as expected, and then move onto the next level. If it's clear that future feature should be implimented early do that.

# Current Porting Notes

The first authored JavaScript level-data pass now covers the original level sequence from `start` through `switch`, stopping before `borg`. These levels use static clone/instance groups in `kiki/js/kiki_static_data.js` rather than procedural runtime creation, and keep each level's original color scheme.

Known gaps from this pass:

- `escape`, `gamma`, `cube`, and `switch` have original 3D volume, but the headless solver is not yet authoritative for their full movement routes.
- `gears` uses the current simplified circuit model. Static circuit objects render, but original wire face connectivity and animated mechanical behavior are still approximate.
- `gamma` includes its early mutant as visible blocking volume only. Mutant AI, hazard/damage handling, and scripted behavior are deferred until the larger `borg` pass.
- `gamma`'s color-cycling switch is represented as a switch object, but arbitrary switch callbacks are not implemented yet.
- Multi-switch exit activation is now data-driven through declarative switch groups, but original event/action timing remains simplified.

The remaining implementation work is:

1. **Convert the level data**
	- Use `kiki/py/levels.py` as the authoritative progression list.
	- Port each level from `kiki/py/levels/` into JSON or JavaScript data under `kiki/js/`.
	- Preserve each level's size, player position and orientation, intro/help text, exits, and object creation instructions.
	- Replace the generated layouts in `kiki/js/kiki.js` with the converted level data.

2. **Build the shared 3D world model**
	- Represent grid positions, heights, orientations, occupancy, exits, and object identity in the shared state layer.
	- Add the original object types needed by the levels, including stones, walls, switches, gates, bombs, generators, gears, bullets, and mutant bots.
	- Keep the state model usable from both a browser and Node without browser or Three.js dependencies.
    - One major departure: the original used a continuously updating render loop, this version will idle correctly when not being interacted with (unless the level truely requires contiuous updating for something other than visual effects). All visual effects (such as rotation will pause and there will be a max time step when they start again. User motion will cause an continous update for only as long as it is required).

3. **Implement the core mechanics**
	- Add movement, turning, jumping, falling, collision, pushing, shooting, timed actions, switches, gates, hazards, and level completion.
	- Match the original action names and event behavior where practical.
	- Keep gameplay transitions deterministic so simulations are reproducible.
    - Ensure that the camera system is equivalent to the original, and game timing matches etc.

4. **Expand the Three.js client**
	- Render the shared world as the intended 3D arena instead of the current simple cube grid.
	- Port the relevant meshes and color schemes from the original C++ implementation in `kiki/src/items/`.
	- Connect keyboard and touch controls to the shared action system, including the move joystick, jump-and-move joystick, push, and shoot.
    - Make very sure that the system idles unless needed to complete interaction. The page should be idle of the time unless directly interacted with, or if the level absolutly requires animation. It is okay if idle animation stop, as they shouldn't effect fundamental game state.

5. **Make the simulator authoritative**
	- Extend `sim.js` with a basic search or scripted solver for each converted level.
	- Validate mechanics such as switches, gates, timed actions, hazards, and exits, not only geometric reachability.
	- Keep `sim_test.sh` dependency-free apart from Node and require every registered level to complete successfully.

6. **Verify the port**
	- Run `./sim_test.sh` after every mechanics or level-data change.
	- Compare converted level layouts and object behavior against the original Python/C++ sources.
	- Test `index.html`, `play.html`, and `sim.html` from a local static server on desktop and touch-sized viewports.
