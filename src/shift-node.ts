import * as THREE from 'three';
import { Player } from './player';

export class ShiftNode {
    private mesh: THREE.Mesh;
    private player: Player;
    private nodeActive: boolean = false;
    private transformationEffect: THREE.Vector3;
    private rotationSpeed: number = 0.02;
    
    constructor(player: Player, position: THREE.Vector3) {
        this.player = player;
        
        // Create a glowing orb as the shift node
        const geometry = new THREE.SphereGeometry(1.5, 32, 32);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x00ffff,
            emissive: 0x0088ff,
            emissiveIntensity: 0.8,
            transparent: true,
            opacity: 0.7
        });
        
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(position);
        this.mesh.castShadow = true;
        
        // Add a ring around the shift node for visual effect
        const ringGeometry = new THREE.RingGeometry(1.8, 2.2, 32);
        const ringMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x00aaff,
            emissive: 0x0044ff,
            emissiveIntensity: 0.5,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.6
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.position.copy(position);
        ring.castShadow = true;
        
        // Add the node and ring to a group for easier positioning
        this.transformationEffect = new THREE.Vector3(0, 0, 0);
    }
    
    update(delta: number) {
        if (this.nodeActive) {
            // Create a subtle pulsing effect when active
            const pulse = Math.sin(Date.now() * 0.005) * 0.2 + 0.8;
            this.mesh.scale.set(pulse, pulse, pulse);
            
            // Rotate the node and ring around the Y-axis
            this.mesh.rotation.y += this.rotationSpeed;
        } else {
            // Slowly rotate when inactive  
            this.mesh.rotation.y += 0.005;
        }
        
        // Update transformation effect if active
        if (this.nodeActive) {
            this.transformationEffect.copy(this.player.getPosition()).sub(this.mesh.position).normalize();
            this.transformationEffect.multiplyScalar(10 * delta);
        }
    }
    
    getMesh(): THREE.Mesh {
        return this.mesh;
    }
    
    activate() {
        this.nodeActive = true;
    }
    
    deactivate() {
        this.nodeActive = false;
    }
    
    isActive(): boolean {
        return this.nodeActive;
    }
    
    // Method to check if a point is within the node's interaction range
    isInInteractionRange(position: THREE.Vector3): boolean {
        const distance = position.distanceTo(this.mesh.position);
        return distance < 5;
    }
    
    // Apply transformation effect to player when they interact with the node
    applyTransformation(): void {
        if (this.nodeActive) {
            // For now we'll implement a placeholder transformation
            console.log("Shift Node transformation applied");
        }
    }
}