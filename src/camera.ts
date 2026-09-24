import * as THREE from 'three';

export class CameraController {
  private camera: THREE.PerspectiveCamera;
  private targetOffset: THREE.Vector3;
  private cameraTarget: THREE.Vector3;

  constructor(camera: THREE.PerspectiveCamera, targetOffset: THREE.Vector3) {
    this.camera = camera;
    this.targetOffset = targetOffset;
    this.cameraTarget = new THREE.Vector3();
  }

  update(playerPosition: THREE.Vector3): void {
    // Calculate target position (player position + offset)
    this.cameraTarget.copy(playerPosition).add(this.targetOffset);
    
    // Use lerp for smooth camera movement
    this.camera.position.lerp(this.cameraTarget, 0.1);
    
    // Make camera look at player
    this.camera.lookAt(playerPosition);
  }
}