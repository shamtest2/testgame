import * as THREE from 'three';
import { Player } from './player';
import { World } from './world';
import { ShiftNode } from './shift-node';

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a0f);

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5);

// Create renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Add keyboard event listeners for WASD
const keys: { [key: string]: boolean } = {};

window.addEventListener('keydown', (event) => {
  keys[event.key.toLowerCase()] = true;
});

window.addEventListener('keyup', (event) => {
  keys[event.key.toLowerCase()] = false;
});

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Add Player instance
const player = new Player(scene);

// Add World instance
const world = new World(scene, player);

// Create shift nodes for vertical slice development
const shiftNodes: ShiftNode[] = [];
const nodePositions = [
  new THREE.Vector3(-3, 1, -2),
  new THREE.Vector3(4, 1, 3),
  new THREE.Vector3(-2, 1, 4),
  new THREE.Vector3(3, 1, -4)
];

// Add shift nodes to scene
nodePositions.forEach(position => {
  const node = new ShiftNode(player, position);
  scene.add(node.getMesh());
  shiftNodes.push(node);
});

// Raycaster for interaction detection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Mouse interaction for activating nodes (for demonstration)
window.addEventListener('click', (event) => {
  // Calculate mouse position in normalized device coordinates
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  // Calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(shiftNodes.map(node => node.getMesh()));

  if (intersects.length > 0) {
    const clickedNode = shiftNodes.find(node => node.getMesh() === intersects[0].object);
    if (clickedNode) {
      clickedNode.activate();
      console.log("Shift Node activated!");
    }
  }
});

// Render loop
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  
  const delta = clock.getDelta();
  
  // Handle player movement based on keyboard input
  if (keys['w']) player.moveForward(delta);
  if (keys['s']) player.moveBackward(delta);
  if (keys['a']) player.moveLeft(delta);
  if (keys['d']) player.moveRight(delta);
  
  // Update player and world
  player.update(delta);
  world.update();
  
  // Update all shift nodes
  shiftNodes.forEach(node => {
    node.update(delta);
  });
  
  // Move camera behind player with offset
  const cameraOffset = new THREE.Vector3(0, 5, 10);
  camera.position.copy(player.getPosition()).add(cameraOffset);
  camera.lookAt(player.getPosition());
  
  renderer.render(scene, camera);
}

animate();