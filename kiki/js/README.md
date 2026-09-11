
# JavaScript port of Kiki the Nano Bot

This folder contains a javascript version of the Kiki the nanobot. 

It is designed to be reusable both in a browser for the primary client, but also via Node.js for CI testing/validation.

The folder structure will be similar to the original src/, py/ and kodlib/ folders. 

`kiki_instances.js` batches opaque meshes by shared geometry and material. The
level geometry is compiled once, while game-object batches reuse their instance
buffers after state changes. Animated rotors and pistons retain hidden transform
handles; only batches whose transforms change are uploaded during animation.
Transparent parts keep ordinary mesh rendering to preserve depth sorting.

Run `node render_test.mjs` from the repository root for the instance lifecycle,
transform, animation, transparency, and resource-reuse checks (tested with Node.js 24).

`kiki_sound.js` plays the original relative `kiki/sound/*.wav` assets, with the
original sound aliases and volume ratios. Sound defaults on; the button below
Reset toggles it and remembers the choice for this tab's session, including level
navigation. Browser audio unlocks on the first touch/key gesture. Muting or hiding
the page cancels queued sounds and stops current playback. No audio update loop
is added.

Gameplay cues cover movement, jumping/landing, pushes, shooting/impacts, switches,
gear/generator transitions, bombs and gate activation/completion. Impact sounds
follow the bullet travel time, and landing sounds follow movement animation time.
Spatial attenuation and the original continuous motor sound are not implemented.
Health/death, energy depletion, atom and mutant-damage mechanics are still absent;
their original sound files/aliases are available but do not have gameplay triggers.
Original menu sounds have no matching web menus; enabling sound uses `menu_select`.
Run `node sound_test.js` for asset, cue and audio lifecycle checks.
