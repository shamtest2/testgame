import * as THREE from 'three';
import { Player } from './player';

export class Enemy {
  private mesh: THREE.Mesh;
  private speed: number = 0.02;
  private player: Player;

  constructor(player: Player) {
    this.player = player;
    
    // Create enemy geometry and material
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(geometry, material);
    
    // Position enemy randomly
    this.mesh.position.set(
      (Math.random() - 0.5) * 20,
      0,
      (Math.random() - 0.5) * 20
    );
  }

  update(delta: number) {
    // Move towards player
    const direction = new THREE.Vector3();
    direction.subVectors(this.player.getPosition(), this.mesh.position).normalize();
    this.mesh.position.add(direction.multiplyScalar(this.speed * delta * 60));
    
    // Rotate enemy to face player
    this.mesh.lookAt(this.player.getPosition());
  }

  getPosition(): THREE.Vector3 {
    return this.mesh.position;
  }

  getMesh(): THREE.Mesh {
    return this.mesh;
  }
}