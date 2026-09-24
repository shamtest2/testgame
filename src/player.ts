import * as THREE from 'three';

export class Player {
  private mesh: THREE.Mesh;
  private readonly speed = 5;
  private readonly radius = 0.5;
  private inputX = 0;
  private inputZ = 0;

  constructor(scene: THREE.Scene, private readonly groundHalfExtent = 25) {
    if (!Number.isFinite(groundHalfExtent) || groundHalfExtent <= this.radius) {
      throw new RangeError('Ground extent must exceed the player radius');
    }
    // Create a cyan capsule geometry
    const geometry = new THREE.CapsuleGeometry(this.radius, 1, 4, 8);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x00ffff,
      wireframe: false,
      roughness: 0.3,
      metalness: 0.7
    });
    
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.y = 1; // Position it upright
    this.mesh.castShadow = true;
    
    // Add the mesh to the scene
    scene.add(this.mesh);

  }

  // Movement calls queue frame-local intent; update alone applies displacement.
  update(delta: number): void {
    const x = this.inputX;
    const z = this.inputZ;
    this.inputX = 0;
    this.inputZ = 0;
    if (!Number.isFinite(delta) || delta <= 0) return;

    // Bound hitch recovery and normalize diagonals without temporary vectors.
    const distance = this.speed * Math.min(delta, 0.05) / Math.max(1, Math.hypot(x, z));
    const limit = this.groundHalfExtent - this.radius;
    const position = this.mesh.position;
    position.x = THREE.MathUtils.clamp(position.x + x * distance, -limit, limit);
    position.z = THREE.MathUtils.clamp(position.z + z * distance, -limit, limit);
  }

  getPosition(): THREE.Vector3 {
    return this.mesh.position;
  }

  getMesh(): THREE.Mesh {
    return this.mesh;
  }

  // Legacy delta arguments remain compatible; update owns simulation time.
  moveForward(_delta: number): void {
    this.inputZ -= 1;
  }

  moveBackward(_delta: number): void {
    this.inputZ += 1;
  }

  moveLeft(_delta: number): void {
    this.inputX -= 1;
  }

  moveRight(_delta: number): void {
    this.inputX += 1;
  }
}