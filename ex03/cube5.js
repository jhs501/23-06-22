// cube5.js
import * as THREE from '../three.module.js';

const GroundGeometry = new THREE.BoxGeometry(20, 0.2, 20);
const BoxGeometry = new THREE.BoxGeometry(1, 1, 1);
const SphereGeometry = new THREE.SphereGeometry (1,20,20);
const TorusGeometry = new THREE.TorusGeometry(1,0.3, 10, 32);
const CylinderGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
const ConeGeometry = new THREE.ConeGeometry(1, 2, 32); 
const geometry6 = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshBasicMaterial({ color: 0x555555 });
const material2 = new THREE.MeshDepthMaterial({ color: 0x555555 });
const material3 = new THREE.MeshLambertMaterial({ color: 0x666666 });
const material4 = new THREE.MeshMatcapMaterial({ color: 0x00ff00 });
const material5 = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
const material6 = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const material7 = new THREE.MeshPhysicalMaterial({ color: 0x00ff00 });
const material8 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const material9 = new THREE.MeshToonMaterial({ color: 0x00ff00 });
const cube1 = new THREE.Mesh(geometry6, material1);
const cube2 = new THREE.Mesh(geometry6, material2);
const cube3 = new THREE.Mesh(geometry6, material3);
const cube4 = new THREE.Mesh(geometry6, material4);
const cube5 = new THREE.Mesh(SphereGeometry, material5);
const cube6 = new THREE.Mesh(TorusGeometry, material6);
const cube7 = new THREE.Mesh(CylinderGeometry, material7);
const cube8 = new THREE.Mesh(ConeGeometry, material8);
const cube9 = new THREE.Mesh(geometry6, material9);
const Ground = new THREE.Mesh(GroundGeometry, material3);
cube1.castShadow = true;
cube2.castShadow = true;
cube3.castShadow = true;
cube4.castShadow = true;
cube5.castShadow = true;
cube6.castShadow = true;
cube7.castShadow = true;
cube8.castShadow = true;
cube9.castShadow = true;
Ground.castShadow = true;
cube1.receiveShadow = true;
cube2.receiveShadow = true;
cube3.receiveShadow = true;
cube4.receiveShadow = true;
cube5.receiveShadow = true;
cube6.receiveShadow = true;
cube7.receiveShadow = true;
cube8.receiveShadow = true;
cube9.receiveShadow = true;
Ground.receiveShadow = true;
Ground.position.y = -2;
cube6.position.x = -2;
cube8.position.x = -6;
cube5.position.x = -4;

export { Ground, cube5, cube6 ,cube7 ,cube8 };
