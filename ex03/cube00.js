// cube00.js
import * as THREE from '../three.module.js';

// Geometry and material 배열
const geometries = [
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.SphereGeometry(1,20,20),
  new THREE.TorusGeometry(1,0.3, 10, 32),
  new THREE.CylinderGeometry(1, 1, 2, 32),
  new THREE.ConeGeometry(1, 2, 32)
];
const materials = [
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
  new THREE.MeshDepthMaterial({ color: 0x00ff00 }),
  new THREE.MeshLambertMaterial({ color:0x00ff00 }),
  new THREE.MeshMatcapMaterial({ color: 0x00ff00 }),
  new THREE.MeshNormalMaterial({ color: 0x00ff00 }),
  new THREE.MeshPhongMaterial({ color: 0x00ff00 }),
  new THREE.MeshPhysicalMaterial({ color: 0x00ff00 }),
  new THREE.MeshStandardMaterial({ color: 0x00ff00 }),
  new THREE.MeshToonMaterial({ color: 0x00ff00 }),
];

const GroundMaterial = new THREE.MeshPhysicalMaterial({ color: 0x666666 });

// Ground
const GroundGeometry = new THREE.BoxGeometry(30, 0.2, 30);
const Ground00 = new THREE.Mesh(GroundGeometry, GroundMaterial);
Ground00.castShadow = true;
Ground00.receiveShadow = true;
Ground00.position.y = -2;

// Group
const group00 = new THREE.Group();

// 45 meshes 생성
for(let i = 0; i < geometries.length; i++) {
  for(let j = 0; j < materials.length; j++) {
    const mesh = new THREE.Mesh(geometries[i], materials[j]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.x = j * 3 - 12; 
    mesh.position.z = i * 4 - 8; 
    group00.add(mesh);
  }
}

export { Ground00, group00 };
