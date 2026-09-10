import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import * as THREE from './kiki/js/threejs/three.module.js';
import { InstanceBatches } from './kiki/js/kiki_instances.js';

const root = new THREE.Group();
root.position.set(3, 4, 5);
root.rotation.y = .3;
const geometry = new THREE.BoxGeometry();
const off = new THREE.MeshStandardMaterial();
const on = new THREE.MeshStandardMaterial({ color: 'red' });
const glass = new THREE.MeshStandardMaterial({ transparent: true, opacity: .5 });
const batches = new InstanceBatches({ dynamic: true });
function source(material, x = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = x;
  root.add(mesh);
  return mesh;
}
function batchFor(material) {
  return [...batches.batches.values()].find(batch => batch.material === material).mesh;
}
function assertMatrix(actual, expected) {
  actual.elements.forEach((value, i) => assert(Math.abs(value - expected.elements[i]) < 1e-5));
}
const first = source(off, 1);
first.scale.set(.9, .1, .5);
const second = source(off, 2);
const transparent = source(glass, 3);
root.updateMatrixWorld(true);
const expected = first.matrix.clone();
batches.rebuild(root);
const originalBatch = batchFor(off);
assert.equal(originalBatch.instanceMatrix.usage, THREE.DynamicDrawUsage);
assert.equal(originalBatch.count, 2);
assert.equal(first.parent, null);
assert.equal(second.parent, null);
assert.equal(transparent.parent, root);
assert(transparent.visible);
const matrix = new THREE.Matrix4();
originalBatch.getMatrixAt(0, matrix);
assertMatrix(matrix, expected);
assert.equal(batches.group.children.length, 1);

let disposed = 0;
originalBatch.addEventListener('dispose', () => disposed++);
let geometryDisposed = 0;
geometry.addEventListener('dispose', () => geometryDisposed++);
// Repeated state refreshes reuse GPU buffers, including after a material change.
for (let i = 0; i < 100; i++) {
  root.clear();
  source(i % 2 ? on : off, i);
  batches.rebuild(root);
  assert.equal(batchFor(off), originalBatch);
  assert.equal(batchFor(off).count, i % 2 ? 0 : 1);
  assert.equal(batchFor(off).visible, i % 2 === 0);
}
assert.equal(disposed, 0);
root.clear();
for (let i = 0; i < 10; i++) source(off, i);
batches.rebuild(root);
assert.equal(disposed, 1);
assert.equal(batchFor(off).count, 10);
assert.equal(geometryDisposed, 0);

// Parent rotation, piston translation, bounds, and unchanged-frame uploads.
root.clear();
const rotor = new THREE.Group();
rotor.position.set(2, 3, 4);
root.add(rotor);
const piston = new THREE.Mesh(geometry, off);
piston.position.z = 1;
rotor.add(piston);
batches.rebuild(root, [rotor]);
assert.equal(piston.visible, false);
assert.equal(piston.parent, rotor);
const animatedBatch = batchFor(off);
const initialVersion = animatedBatch.instanceMatrix.version;
batches.updateAnimations();
assert.equal(animatedBatch.instanceMatrix.version, initialVersion);
rotor.rotation.y = Math.PI / 2;
piston.position.z = 8;
batches.updateAnimations();
root.updateWorldMatrix(true, true);
const relative = new THREE.Matrix4().copy(root.matrixWorld).invert().multiply(piston.matrixWorld);
animatedBatch.getMatrixAt(0, matrix);
assertMatrix(matrix, relative);
assert(animatedBatch.boundingSphere.containsPoint(new THREE.Vector3().setFromMatrixPosition(relative)));
assert.equal(animatedBatch.instanceMatrix.version, initialVersion + 1);
batches.updateAnimations();
assert.equal(animatedBatch.instanceMatrix.version, initialVersion + 1);

// Removed objects disappear without stale instances or animated handles.
root.clear();
batches.rebuild(root);
assert([...batches.batches.values()].every(batch => batch.mesh.count === 0 && batch.animated.length === 0));
batches.dispose();
assert.equal(batches.batches.size, 0);
assert.equal(geometryDisposed, 0);
const staticBatches = new InstanceBatches();
root.clear();
source(off);
staticBatches.rebuild(root);
assert.equal(staticBatches.group.children[0].instanceMatrix.usage, THREE.StaticDrawUsage);
staticBatches.dispose();
const { createBot } = createRequire(import.meta.url)('./kiki/js/kiki_meshes.js');
const botA = createBot(THREE, { body: off, tire: off });
const botB = createBot(THREE, { body: on, tire: on });
assert.equal(botA.userData.leftTire.geometry, botB.userData.rightTire.geometry);
assert.equal(botA.children[2].geometry, botB.children[2].geometry);
assert.notEqual(botA.children[2].material, botB.children[2].material);
console.log('PASS instance transforms, transparency, buffer reuse/growth, material changes, animation bounds, removal, and disposal');
