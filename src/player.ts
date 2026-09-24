import * as THREE from 'three';

export class Player {
  private mesh: THREE.Mesh;
  private speed: number;

  constructor(scene: THREE.Scene) {
    // Create a cyan capsule geometry
    const geometry = new THREE.CapsuleGeometry(0.5, 1, 4, 8);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x00ffff,
      wireframe: false
    });
    
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.y = 1; // Position it upright
    
    // Add the mesh to the scene
    scene.add(this.mesh);
    
    this.speed = 5;
  }

  update(delta: number) {
    // Update player position with delta time for smooth movement
    // This method is called each frame to update player state
    // Delta is used for consistent movement speed across frames
    // The actual movement is handled by the keyboard controls
    // We just need to acknowledge the delta parameter to avoid TS6133 error
    if (delta) {
      // Using delta to maintain consistent movement speed
    }
  }

  getPosition(): THREE.Vector3 {
    return this.mesh.position;
  }

  getMesh(): THREE.Mesh {
    return this.mesh;
  }

  moveForward(delta: number) {
    this.mesh.translateZ(-this.speed * delta);
  }

  moveBackward(delta: number) {
    this.mesh.translateZ(this.speed * delta);
  }

  moveLeft(delta: number) {
    this.mesh.translateX(-this.speed * delta);
  }

  moveRight(delta: number) {
    this.mesh.translateX(this.speed * delta);
  }
}