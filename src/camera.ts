import * as THREE from 'three';

export interface FollowTarget {
  getPosition(): Readonly<THREE.Vector3>;
}

export interface FollowCameraOptions {
  readonly offset?: Readonly<THREE.Vector3>;
  /** Exponential response rates in inverse seconds, not per-frame factors. */
  readonly positionSharpness?: number;
  readonly targetSharpness?: number;
}

/** Owns follow behavior, not the injected camera, target, or application loop. */
export class CameraController {
  private camera: THREE.PerspectiveCamera | null;
  private target: FollowTarget | null;
  private readonly offset = new THREE.Vector3(0, 5, 10);
  private readonly desiredPosition = new THREE.Vector3();
  private readonly lookTarget = new THREE.Vector3();
  private readonly positionSharpness: number;
  private readonly targetSharpness: number;

  constructor(
    camera: THREE.PerspectiveCamera,
    target: FollowTarget,
    options: FollowCameraOptions = {}
  ) {
    this.camera = camera;
    this.target = target;
    this.positionSharpness = options.positionSharpness ?? 8;
    this.targetSharpness = options.targetSharpness ?? 10;
    if (options.offset) this.offset.copy(options.offset);
    if (!Number.isFinite(this.positionSharpness) || this.positionSharpness <= 0 ||
        !Number.isFinite(this.targetSharpness) || this.targetSharpness <= 0) {
      throw new RangeError('Camera response rates must be finite and positive');
    }
    if (!Number.isFinite(this.offset.x) || !Number.isFinite(this.offset.y) ||
        !Number.isFinite(this.offset.z) || this.offset.lengthSq() === 0) {
      throw new RangeError('Camera offset must be finite and nonzero');
    }
    this.snapToTarget();
  }

  /** Explicit initialization/respawn snap; ordinary traversal always uses update. */
  snapToTarget(): void {
    if (!this.camera || !this.target) return;
    this.lookTarget.copy(this.target.getPosition());
    this.camera.position.copy(this.lookTarget).add(this.offset);
    this.camera.lookAt(this.lookTarget);
  }

  update(delta: number): void {
    if (!this.camera || !this.target || !Number.isFinite(delta) || delta <= 0) return;
    // Match movement's bounded hitch recovery; all scratch vectors are reused.
    const dt = Math.min(delta, 0.05);
    const position = this.target.getPosition();
    this.desiredPosition.copy(position).add(this.offset);
    this.camera.position.lerp(this.desiredPosition, 1 - Math.exp(-this.positionSharpness * dt));
    this.lookTarget.lerp(position, 1 - Math.exp(-this.targetSharpness * dt));
    this.camera.lookAt(this.lookTarget);
  }

  /** Releases borrowed references; there are no GPU resources or listeners here. */
  dispose(): void {
    this.camera = null;
    this.target = null;
  }
}
