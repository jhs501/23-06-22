//ex03.js
import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { GUI } from './lil-gui.module.min.js';
import { Ground00, group00 } from './ex03/cube00.js';
import createGuiForCube from './ex03/createGui.js';
import { createDomeBackground } from './ex05/domeBackground.js'; 

export function runEx03() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true; 
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    const controls = new OrbitControls(camera, renderer.domElement);

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
    const cube = new THREE.Mesh( geometry, material );
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.position.set(0,0,-2);
    const group = new THREE.Group();
    createDomeBackground(scene);
    group.add(cube);
    scene.add(group); 
    scene.add(Ground00); 
    scene.add(group00); 

    camera.position.x = -5;
    camera.position.y = 5;
    camera.position.z = 5;
    camera.lookAt(0,0,0);

    // GUI 생성
    const gui = new GUI();
    createGuiForCube(group, gui);

    // 라이트 추가 함수
    function addPointLight() {
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(0, 0, 0);
        pointLight.castShadow = true;
        const pointLightHelper = new THREE.PointLightHelper(pointLight);  // Helper 
        scene.add(pointLight, pointLightHelper);
        return pointLight;
    }

    function addDirectionalLight() {
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 0, 0);
        directionalLight.castShadow = true;
        const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);  
        scene.add(directionalLight, directionalLightHelper);
        return directionalLight;
    }

    function addAmbientLight() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);
        return ambientLight;
    }
    
    function addHemisphereLight() {
        const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        scene.add(hemisphereLight);
        return hemisphereLight;
    }
    
    const pointLight_05 = new THREE.PointLight(0xffffff, 1, 100);
    pointLight_05.position.set(0, 4, 0);
    scene.add(pointLight_05);

    // Light GUI 생성 함수
    function createGuiForLight(light) {
        const lightFolder = gui.addFolder(`Point Light ${light.id}`);
        lightFolder.add(light.position, 'x', -10, 10).name('X');
        lightFolder.add(light.position, 'y', -10, 10).name('Y');
        lightFolder.add(light.position, 'z', -10, 10).name('Z');
        lightFolder.addColor(new function() {
            this.color = '#' + light.color.getHexString();
        }, 'color').onChange(function (value) {
            light.color.set(value);
        });
        lightFolder.add(light, 'intensity', 0, 10).name('Intensity'); 
        lightFolder.add(light, 'castShadow').name('Cast Shadow'); 
        lightFolder.add({
            Remove: function() {
                scene.remove(light);  // 씬에서 light 제거
                lightFolder.close();  // GUI 폴더 닫기
            }
        }, 'Remove').name('Remove this light'); 
        lightFolder.open();
        return lightFolder;
    }

    function createGuiForDirectionalLight(light) {
        const lightFolder = gui.addFolder(`Directional Light ${light.id}`);
        lightFolder.add(light.position, 'x', -10, 10).name('X');
        lightFolder.add(light.position, 'y', -10, 10).name('Y');
        lightFolder.add(light.position, 'z', -10, 10).name('Z');
        lightFolder.addColor(new function() {
            this.color = '#' + light.color.getHexString();
        }, 'color').onChange(function (value) {
            light.color.set(value);
        });
        lightFolder.add(light, 'intensity', 0, 10).name('Intensity'); 
        lightFolder.add({
            Remove: function() {
                scene.remove(light);  // 씬에서 light 제거
                lightFolder.close();  // GUI 폴더 닫기
            }
        }, 'Remove').name('Remove this light');
        lightFolder.open();
        return lightFolder;
    }

    function createGuiForAmbientLight(light) {
        const lightFolder = gui.addFolder(`Ambient Light ${light.id}`);
        lightFolder.addColor(new function() {
            this.color = '#' + light.color.getHexString();
        }, 'color').onChange(function (value) {
            light.color.set(value);
        });
        lightFolder.add(light, 'intensity', 0, 10).name('Intensity'); 
        lightFolder.add({
            Remove: function() {
                scene.remove(light);  // 씬에서 light 제거
                lightFolder.close();  // GUI 폴더 닫기
            }
        }, 'Remove').name('Remove this light'); 
        lightFolder.open();
        return lightFolder;
    }
    
    function createGuiForHemisphereLight(light) {
        const lightFolder = gui.addFolder(`Hemisphere Light ${light.id}`);
        lightFolder.addColor(new function() {
            this.skyColor = '#' + light.color.getHexString();
        }, 'skyColor').onChange(function (value) {
            light.color.set(value);
        });
        lightFolder.addColor(new function() {
            this.groundColor = '#' + light.groundColor.getHexString();
        }, 'groundColor').onChange(function (value) {
            light.groundColor.set(value);
        });
        lightFolder.add(light, 'intensity', 0, 10).name('Intensity'); 
        lightFolder.add({
            Remove: function() {
                scene.remove(light);  // 씬에서 light 제거
                lightFolder.close();  // GUI 폴더 닫기
            }
        }, 'Remove').name('Remove this light');
        lightFolder.open();
        return lightFolder;
    }

    function addPointLightAndGui() {
        const light = addPointLight();
        createGuiForLight(light);
    }
    
    function addDirectionalLightAndGui() {
        const light = addDirectionalLight();
        createGuiForDirectionalLight(light);
    }

    function addAmbientLightAndGui() {
        const light = addAmbientLight();
        createGuiForAmbientLight(light);
    }
    
    function addHemisphereLightAndGui() {
        const light = addHemisphereLight();
        createGuiForHemisphereLight(light);
    }

    // Light 추가 버튼
    gui.add({Add_Point_Light: addPointLightAndGui},
        'Add_Point_Light').name('Add_Point_Light');
    gui.add({Add_Directional_Light: addDirectionalLightAndGui},
        'Add_Directional_Light').name('Add Directional Light');
    gui.add({Add_Ambient_Light: addAmbientLightAndGui},
         'Add_Ambient_Light').name('Add Ambient Light');
    gui.add({Add_Hemisphere_Light: addHemisphereLightAndGui}, 
        'Add_Hemisphere_Light').name('Add Hemisphere Light');
    
    function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    }

    animate();
}
