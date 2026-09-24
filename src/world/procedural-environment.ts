import * as THREE from 'three';

export class ProceduralEnvironment {
    private scene: THREE.Scene;
    
    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.generateTerrain();
    }
    
    private generateTerrain() {
        // Clear existing environment
        while(this.scene.children.length > 0) { 
            this.scene.remove(this.scene.children[0]); 
        }
        
        // Add a proper background
        this.scene.background = new THREE.Color(0x0a0a0f);
        
        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(ambientLight);
        
        // Add directional light for main illumination
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        this.scene.add(directionalLight);
        
        // Create ground plane
        const groundGeometry = new THREE.PlaneGeometry(50, 50);
        const groundMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x222233,
            roughness: 0.8,
            metalness: 0.2
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);
        
        // Create procedurally generated environment elements
        this.createProceduralElements();
    }
    
    private createProceduralElements() {
        // Generate a more interesting terrain using noise-like patterns
        const elementCount = 20;
        
        for (let i = 0; i < elementCount; i++) {
            // Random positions around the scene
            const x = (Math.random() - 0.5) * 40;
            const z = (Math.random() - 0.5) * 40;
            
            // Create different types of procedural elements
            if (i % 3 === 0) {
                // Pillar structure
                this.createPillar(x, 0, z);
            } else if (i % 3 === 1) {
                // Platform structure  
                this.createPlatform(x, 0, z);
            } else {
                // Obstacle/rock
                this.createObstacle(x, 0, z);
            }
        }
        
        // Add some decorative elements
        this.addDecorativeElements();
    }
    
    private createPillar(x: number, _y: number, z: number) {
        const height = 2 + Math.random() * 3;
        const radius = 0.5 + Math.random() * 1;
        
        const geometry = new THREE.CylinderGeometry(radius, radius, height, 16);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x446688,
            roughness: 0.6,
            metalness: 0.4
        });
        const pillar = new THREE.Mesh(geometry, material);
        pillar.position.set(x, height / 2, z);
        pillar.castShadow = true;
        pillar.receiveShadow = true;
        this.scene.add(pillar);
    }
    
    private createPlatform(x: number, _y: number, z: number) {
        const width = 3 + Math.random() * 4;
        const depth = 3 + Math.random() * 4;
        const height = 0.5;
        
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x334466,
            roughness: 0.7,
            metalness: 0.2
        });
        const platform = new THREE.Mesh(geometry, material);
        platform.position.set(x, height / 2, z);
        platform.castShadow = true;
        platform.receiveShadow = true;
        this.scene.add(platform);
    }
    
    private createObstacle(x: number, _y: number, z: number) {
        const size = 1 + Math.random() * 2;
        
        // Create an irregular obstacle (a rock)
        const geometry = new THREE.DodecahedronGeometry(size, 0);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x665544,
            roughness: 0.8,
            metalness: 0.1
        });
        const obstacle = new THREE.Mesh(geometry, material);
        obstacle.position.set(x, size / 2, z);
        obstacle.castShadow = true;
        obstacle.receiveShadow = true;
        this.scene.add(obstacle);
    }
    
    private addDecorativeElements() {
        // Add some glowing decorative elements 
        const decorationGeometry = new THREE.SphereGeometry(0.3, 16, 16);
        
        for (let i = 0; i < 15; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = 5 + Math.random() * 20;
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            
            const decorationMaterial = new THREE.MeshStandardMaterial({ 
                color: 0xff8800,
                roughness: 0.3,
                metalness: 0.7,
                emissive: 0xff4400,
                emissiveIntensity: 0.3
            });
            
            const decoration = new THREE.Mesh(decorationGeometry, decorationMaterial);
            decoration.position.set(x, 1, z);
            decoration.castShadow = true;
            this.scene.add(decoration);
        }
    }
}