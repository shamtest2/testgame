import * as THREE from 'three';

export class Player {
  private mesh: THREE.Mesh;
  private speed: number;

  constructor() {
    // Create a cyan capsule geometry
    const geometry = new THREE.CapsuleGeometry(0.5, 1, 4, 8);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x00ffff,
      wireframe: false
    });
    
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.y = 1; // Position it upright
    
    this.speed = 5;
  }

  update() {
    // Update player position with delta time for smooth movement
    // Movement will be handled by keyboard controls
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