import * as THREE from './threejs/three.module.js';

// Compile an opaque source hierarchy into persistent geometry/material batches.
// Animated source meshes remain hidden as transform handles; other source meshes
// are detached. Transparent meshes retain ordinary Three.js depth sorting.
export class InstanceBatches {
  constructor({ dynamic = false } = {}) {
    this.dynamic = dynamic;
    this.group = new THREE.Group();
    this.batches = new Map();
    this.root = null;
    this.inverseRoot = new THREE.Matrix4();
    this.matrix = new THREE.Matrix4();
  }

  // The caller supplies a freshly populated source hierarchy on each rebuild.
  // Geometry and materials are shared caches owned by the caller.
  rebuild(root, animatedRoots = []) {
    this.root = root;
    this.group.removeFromParent();
    root.updateWorldMatrix(true, true);
    this.inverseRoot.copy(root.matrixWorld).invert();
    const animated = new Set(animatedRoots);
    const sources = [];
    for (const batch of this.batches.values()) {
      batch.sources = [];
      batch.animated = [];
    }
    root.traverseVisible(source => {
      const material = source.material;
      if (!source.isMesh || source.isInstancedMesh || Array.isArray(material) || material.transparent) return;
      const key = source.geometry.uuid + ':' + material.uuid;
      let batch = this.batches.get(key);
      if (!batch) {
        batch = { geometry: source.geometry, material, mesh: null, sources: [], animated: [] };
        this.batches.set(key, batch);
      }
      let moves = false;
      for (let parent = source; parent && parent !== root; parent = parent.parent) {
        if (animated.has(parent)) moves = true;
      }
      batch.sources.push({ source, moves });
      sources.push({ source, moves });
    });
    for (const batch of this.batches.values()) {
      const count = batch.sources.length;
      if (!batch.mesh || batch.mesh.instanceMatrix.count < count) {
        if (batch.mesh) {
          batch.mesh.removeFromParent();
          batch.mesh.dispose(); // The shared geometry/material belong to the level.
        }
        batch.mesh = new THREE.InstancedMesh(batch.geometry, batch.material, Math.max(1, count * 2));
        batch.mesh.instanceMatrix.setUsage(this.dynamic ? THREE.DynamicDrawUsage : THREE.StaticDrawUsage);
        this.group.add(batch.mesh);
      }
      const mesh = batch.mesh;
      mesh.count = count;
      mesh.visible = count > 0;
      mesh.instanceMatrix.clearUpdateRanges();
      for (let index = 0; index < count; index++) {
        const { source, moves } = batch.sources[index];
        this.matrix.multiplyMatrices(this.inverseRoot, source.matrixWorld);
        mesh.setMatrixAt(index, this.matrix);
        if (moves) batch.animated.push({ source, index, previous: this.matrix.clone() });
      }
      if (count) {
        mesh.instanceMatrix.needsUpdate = true;
        mesh.computeBoundingSphere();
      }
      batch.sources = []; // Only animated transform handles need to survive.
    }
    for (const { source, moves } of sources) {
      if (moves) source.visible = false;
      else source.removeFromParent();
    }
    root.add(this.group);
  }

  updateAnimations() {
    if (!this.root) return;
    this.root.updateWorldMatrix(true, false);
    this.inverseRoot.copy(this.root.matrixWorld).invert();
    for (const batch of this.batches.values()) {
      let changed = false;
      for (const entry of batch.animated) {
        entry.source.updateWorldMatrix(true, false);
        this.matrix.multiplyMatrices(this.inverseRoot, entry.source.matrixWorld);
        if (this.matrix.equals(entry.previous)) continue;
        batch.mesh.setMatrixAt(entry.index, this.matrix);
        entry.previous.copy(this.matrix);
        changed = true;
      }
      if (changed) {
        batch.mesh.instanceMatrix.needsUpdate = true;
        // Moving pistons/rotors must remain visible when the camera reaches an edge.
        batch.mesh.computeBoundingSphere();
      }
    }
  }

  dispose() {
    this.group.removeFromParent();
    for (const batch of this.batches.values()) batch.mesh.dispose();
    this.group.clear();
    this.batches.clear();
    this.root = null;
  }
}
