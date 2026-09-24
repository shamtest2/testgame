import * as THREE from 'three';
import { Player } from './player';

export class ShiftNode {
    private mesh: THREE.Mesh;
    private player: Player;
    private nodeActive: boolean = false;
    private transformationEffect: THREE.Vector3;
    private rotationSpeed: number = 0.02;
    private glowIntensity: number = 0.8;
    private ringMesh: THREE.Mesh;
    
    constructor(player: Player, position: THREE.Vector3) {
        this.player = player;
        
        // Create a glowing orb as the shift node
        const geometry = new THREE.SphereGeometry(1.5, 32, 32);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x00ffff,
            emissive: 0x0088ff,
            emissiveIntensity: this.glowIntensity,
            transparent: true,
            opacity: 0.7
        });
        
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(position);
        this.mesh.castShadow = true;
        
        // Create a ring around the shift node for visual effect
        const ringGeometry = new THREE.RingGeometry(1.8, 2.2, 32);
        const ringMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x00aaff,
            emissive: 0x0044ff,
            emissiveIntensity: 0.5,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.6
        });
        this.ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
        this.ringMesh.rotation.x = Math.PI / 2;
        this.ringMesh.position.copy(position);
        this.ringMesh.castShadow = true;
        
        // Add the node and ring to a group for easier positioning
        this.transformationEffect = new THREE.Vector3(0, 0, 0);
    }
    
    update(delta: number) {
        if (this.nodeActive) {
            // Create a more pronounced pulsing effect when active
            const pulse = Math.sin(Date.now() * 0.008) * 0.3 + 0.85;
            this.mesh.scale.set(pulse, pulse, pulse);
            
            // Increase glow intensity and make it pulsate
            const glowPulse = Math.sin(Date.now() * 0.005) * 0.2 + 0.8;
            (this.mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = this.glowIntensity * glowPulse;
            
            // Make ring pulse with node  
            const ringPulse = Math.sin(Date.now() * 0.007) * 0.3 + 0.7;
            (this.ringMesh.material as THREE.MeshStandardMaterial).opacity = ringPulse;
            
            // Rotate the node and ring around the Y-axis faster when active
            this.mesh.rotation.y += this.rotationSpeed * 2;
        } else {
            // Slowly rotate when inactive  
            this.mesh.rotation.y += this.rotationSpeed;
            this.ringMesh.rotation.y += this.rotationSpeed;
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
    
    getRingMesh(): THREE.Mesh {
        return this.ringMesh;
    }
    
    activate() {
        this.nodeActive = true;
    }
    
    deactivate() {
        this.nodeActive = false;
        // Reset the glow to original strength
        (this.mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = this.glowIntensity;
        (this.ringMesh.material as THREE.MeshStandardMaterial).opacity = 0.6;
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