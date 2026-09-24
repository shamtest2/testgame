import * as THREE from 'three';
import { Player } from './player';
import { Clock } from 'three';

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
document.body.appendChild(renderer.domElement);

// Add lights
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Add ground plane
const groundGeometry = new THREE.PlaneGeometry(100, 100);
const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a2e });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Add Player instance
const player = new Player();

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

// Render loop
const clock = new Clock();

function animate() {
  requestAnimationFrame(animate);
  
  const delta = clock.getDelta();
  
  // Handle player movement based on keyboard input
  if (keys['w']) player.moveForward(delta);
  if (keys['s']) player.moveBackward(delta);
  if (keys['a']) player.moveLeft(delta);
  if (keys['d']) player.moveRight(delta);
  
  // Update player
  player.update(delta);
  
  // Move camera behind player with offset
  const cameraOffset = new THREE.Vector3(0, 5, 10);
  camera.position.copy(player.getPosition()).add(cameraOffset);
  camera.lookAt(player.getPosition());
  
  renderer.render(scene, camera);
}

animate();