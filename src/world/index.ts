import * as THREE from 'three';
import { Player } from '../player';
import { ProceduralEnvironment } from './procedural-environment';

export class World {
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene, _player: Player) {
    this.scene = scene;
    
    // Clear previous content (if any)
    while(this.scene.children.length > 0) { 
      this.scene.remove(this.scene.children[0]); 
    }
    
    // Initialize procedural environment
    new ProceduralEnvironment(scene);
  }

  update() {
    // World update logic can go here
  }
}