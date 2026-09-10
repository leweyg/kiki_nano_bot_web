
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
