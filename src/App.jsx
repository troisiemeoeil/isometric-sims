
import './App.css'
import "./UI/minimenu.css"
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

import MiniMenu from './UI/MiniMenu';


import { useEffect, useRef } from 'react';
import { addBuilding, 
      // addRoadSquare, 
      adddetail_awningWide,
      addlowBuilding,
      addoakTreemodel,
      addpalmTreemodel,
      addpineTreemodel,
      addplateauFallmodel,
      addskyScraperBtn,
      addsmallBuildingmodel,
      addfarmLevel13,
      addArcherySecondAgeLevel3,
      addBarrel,
      addCrate_Big_Stack2,
      addDock_FirstAge,
      addFarm_FirstAge_Level2_Wheat,
      addHouses_FirstAge_1_Level3,
      addHouses_FirstAge_2_Level3,
      addHouses_FirstAge_3_Level2,
      addMarket_FirstAge_Level3,
      addHouses_SecondAge_2_Level3,
      addHouses_SecondAge_3_Level3,
      addMarket_SecondAge_Level3,
      addMine,
      addPort_FirstAge_Level2,
      addPort_FirstAge_Level3,
      addPort_SecondAge_Level3,
     } from './scripts/selectModel';


import { Raycast } from './scripts/Raycast';
import {saveProgress} from './scripts/saveProgress';
import {addModel} from './scripts/addModel';
// import { deleteModel } from './scripts/deleteModel';
import { loadSavedScene } from './scripts/loadSavedScene';
import { loadScene } from './scripts/loadScene';
import addModelSound from './scripts/audio/addModelSound';
import { detectObject } from './scripts/detectObject';


function App() {
  const assetLoader = new GLTFLoader()
  let stag = []

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      logarithmicDepthBuffer: true,
      depth: true
    });
    const scene = new THREE.Scene();
    scene.fog = true
		const color = 0xe0d6ff;
    const near = 40;
		const far = 50;
    // const density = 0.03;
		scene.fog = new THREE.Fog( color, near, far );
    // scene.fog = new THREE.FogExp2(color, density);
		scene.background = new THREE.Color( color );
      //principal camera
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      }

      /**
       * Camera
       */
      const resolution = new THREE.Vector2(20, 20)
      const fov = 20
      const camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height, 0.5, 1000)
      // camera.zoom.toFixed(5)
 
      const initialPosition = new THREE.Vector3(
        resolution.x - 50,
        6,
        resolution.y / 2 + 4
      )
      camera.position.copy(initialPosition)
    camera.updateProjectionMatrix()
    scene.add(camera)

    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.enabled = true
    orbit.enableDamping = true;
    // orbit.zoomSpeed = 0.5;
    // orbit.maxDistance = 30
    // orbit.maxPolarAngle = Math.PI / 2.5
    // orbit.enablePan = false
    orbit.saveState()

    const ambLight = new THREE.AmbientLight(0xffffff, 2)
    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff );
    hemiLight.position.set( 0, 30, 0 );
    scene.add( hemiLight );
    const dirLight = new THREE.DirectionalLight(0xffffff, 1)
    scene.add(ambLight)
    dirLight.position.set(20, 20, 18)
    dirLight.target.position.set(resolution.x , 0, resolution.y )

    scene.add(dirLight)

    
    

      // reactivate sound
    let source = "./sounds/backgroundmusic.mp3"
   window.addEventListener('click', function Playit(e) {
    e.currentTarget.removeEventListener(e.type, Playit);
    var audio = new Audio(source);
    audio.play();
    audio.loop()
  })


    assetLoader.load(
    // resource URL
    '/models/planeGround9.glb',
    // called when the resource is loaded
    function ( gltf ) {
      scene.add( gltf.scene );
      let model = gltf.scene
      model.position.set(0 ,-0.35, 0)
      model.scale.set(0.5,0.5, 0.5)

      

      // model.scale.setScalar(w)
     
      model.traverse( function(child) {
        if (child instanceof THREE.Mesh) {
          child.material.metalness = 0
          
            }
          });
     
  
    },
    // called while loading is progressing
    function ( xhr ) {
  
      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  
    },
    // called when loading has errors
  );


// const treeData = [
// 	new THREE.Vector4(-5, 0, 10, 1),
// 	new THREE.Vector4(-6, 0, 15, 1.2),
// 	new THREE.Vector4(-5, 0, 16, 0.8),
// 	new THREE.Vector4(-10, 0, 4, 1.3),
// 	// new THREE.Vector4(-5, 0, -3, 2),
// 	// new THREE.Vector4(-4, 0, -1, 1.5),
// 	new THREE.Vector4(-2, 0, -15, 1),
// 	new THREE.Vector4(5, 0, -20, 1.2),
// 	new THREE.Vector4(24, 0, -12, 1.2),
// 	// new THREE.Vector4(2, 0, -6, 1.2),
// 	new THREE.Vector4(3, 0, -7, 1.8),
// 	new THREE.Vector4(1, 0, -9, 1.0),
// 	new THREE.Vector4(15, 0, -8, 1.8),
// 	new THREE.Vector4(7, 0, -9, 1.1),
// 	// new THREE.Vector4(8, 0, -2, 1.3),
// 	new THREE.Vector4(12, 0, -1, 1.3),
// 	new THREE.Vector4(13, 0, 0, 1.8),
// 	new THREE.Vector4(15, 0, 0, 1),
// 	new THREE.Vector4(12, 0, 6, 1.7),
// 	new THREE.Vector4(19, 0, 15, 1.1),
// 	new THREE.Vector4(8, 0, 23, 1.1),
// 	new THREE.Vector4(4, 0, 24, 0.9),
// 	new THREE.Vector4(-3, 0, -13, 0.7),
// 	new THREE.Vector4(5, 0, 10, 0.7),
// ]


// treeData.forEach(({ x, y, z }) => {
//   assetLoader.load(
//     // resource URL
//     '/models/tree_plateau_fall.glb',
//     // called when the resource is loaded
//     function ( gltf ) {
//       scene.add( gltf.scene );
//       let model = gltf.scene
//       model.position.set(x ,y, z)
//       model.rotation.set(0 ,Math.random() * 10, 0)

//       // model.scale.setScalar(w)
     
//       model.traverse( function(child) {
//         if (child instanceof THREE.Mesh) {
//           child.material.metalness = 0
//             child.castShadow = true
//             child.receiveShadow = true
//             }
//           });
     
  
//     },
//     // called while loading is progressing
//     function ( xhr ) {
  
//       console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  
//     },
//     // called when loading has errors
//   );
	
//   assetLoader.load(
//     // resource URL
//     '/models/tree_oak_fall.glb',
//     // called when the resource is loaded
//     function ( gltf ) {
//       scene.add( gltf.scene );
//       let model = gltf.scene
//       model.position.set(x - 3,y  , z - 3)
//       // model.scale.setScalar(w)
     
//       model.traverse( function(child) {
//         if (child instanceof THREE.Mesh) {
//           child.material.metalness = 0
//             child.castShadow = true
//             }
//           });
    
  
//     },
//     // called while loading is progressing
//     function ( xhr ) {
  
//       console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  
//     },
//     // called when loading has errors
//   );
//   assetLoader.load(
//     // resource URL
//     '/models/tree_palmTall.glb',
//     // called when the resource is loaded
//     function ( gltf ) {
//       scene.add( gltf.scene );
//       let model = gltf.scene
//       model.position.set(x * 2,y  , z - 5)
//       // model.scale.setScalar(w)
     
//       model.traverse( function(child) {
//         if (child instanceof THREE.Mesh) {
//           child.material.metalness = 0
//             child.castShadow = true
//             }
//           });
  
  
//     },
//     // called while loading is progressing
//     function ( xhr ) {
  
//       console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  
//     },
//     // called when loading has errors
//   );

//   assetLoader.load( 
//     // resource URL
//     '/models/tree_pineDefaultA.glb',
//     // called when the resource is loaded
//     function ( gltf ) {
//       scene.add( gltf.scene );
//       let model = gltf.scene
//       model.position.set(x + 4,y  , z * 2)
//       // model.scale.setScalar(w)
     
//       model.traverse( function(child) {
//         if (child instanceof THREE.Mesh) {
//           child.material.metalness = 0
//             child.castShadow = true
//             }
//           });
  
  
//     },
//     // called while loading is progressing
//     function ( xhr ) {
  
//       console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  
//     },
//     // called when loading has errors
//   );
	
// })
 

let getStorageItems = localStorage.getItem('listofobjects')
let getactiveStorage = localStorage.getItem('active')

   
const planeMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10, 10, 10),
  new THREE.MeshStandardMaterial({
    
    color: 0xf5ebe0,
    visible: false,
    side: THREE.FrontSide,
    transparent:true, 
    depthWrite: false
})
);
planeMesh.renderOrder = 1
planeMesh.rotation.x = Math.PI * - 0.5;
planeMesh.receiveShadow = true

scene.add(planeMesh);

const planeMesh2 = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100),
  new THREE.MeshStandardMaterial({
    color: 0xdbe7ab,
    side: THREE.FrontSide,
    depthWrite: false
})
);
planeMesh2.rotation.x = Math.PI * - 0.5;
planeMesh2.position.y = 1 ;

planeMesh2.receiveShadow = true

scene.add(planeMesh2);



// const grid = new THREE.GridHelper(10, 10, 0xFFFFFF, 0xFFFFFF);
// scene.add(grid);


let map = new THREE.TextureLoader().load("./platformPack_tile009.png")
const highlightMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(1.1,1.1),
  new THREE.MeshBasicMaterial({
    map: map,
    transparent: true,
    depthWrite: true

  })
);

highlightMesh.rotation.x = Math.PI * - 0.5;
highlightMesh.position.set(0.9, 0, 0.9);
scene.add(highlightMesh);

const mousePosition = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const raycasterObj = new THREE.Raycaster();

let intersects;


    
const largeBuilding = new URL('./assets/large_buildingA.glb', import.meta.url);
const skyScraper = new URL('./assets/skyscraperD.glb', import.meta.url);
const awing = new URL('./assets/detail_awningWide.glb', import.meta.url);
const lowBuilding = new URL('./assets/low_buildingC.glb', import.meta.url);
const smallBuilding = new URL('./assets/small_buildingA.glb', import.meta.url);

const oakTree = new URL('./assets/tree_oak_fall.glb', import.meta.url);
const palmTree = new URL('./assets/tree_palmTall.glb', import.meta.url);
const pineTree = new URL('./assets/tree_pineDefaultA.glb', import.meta.url);
const plateauFall = new URL('./assets/tree_plateau_fall.glb', import.meta.url);
const farmLevel13 = new URL('./assets/Farm_SecondAge_Level3.glb', import.meta.url);
const ArcherySecondAgeLevel3 = new URL('./assets/Archery_SecondAge_Level3.glb', import.meta.url);
const Barrel = new URL('./assets/Barrel.glb', import.meta.url);
const Crate_Big_Stack2 = new URL('./assets/Crate_Big_Stack2.glb', import.meta.url);
const Dock_FirstAge = new URL('./assets/Dock_FirstAge.glb', import.meta.url);
const Farm_FirstAge_Level2_Wheat = new URL('./assets/Farm_FirstAge_Level2_Wheat.glb', import.meta.url);
const Houses_FirstAge_1_Level3 = new URL('./assets/Houses_FirstAge_1_Level3.glb', import.meta.url);
const Houses_FirstAge_2_Level3 = new URL('./assets/Houses_FirstAge_2_Level3.glb', import.meta.url);
const Houses_FirstAge_3_Level2 = new URL('./assets/Houses_FirstAge_3_Level2.glb', import.meta.url);
const Market_FirstAge_Level3 = new URL('./assets/Market_FirstAge_Level3.glb', import.meta.url);
const Houses_SecondAge_2_Level3 = new URL('./assets/Houses_SecondAge_2_Level3.glb', import.meta.url);
const Houses_SecondAge_3_Level3 = new URL('./assets/Houses_SecondAge_3_Level3.glb', import.meta.url);
const Market_SecondAge_Level3 = new URL('./assets/Market_SecondAge_Level3.glb', import.meta.url);
const Mine = new URL('./assets/Mine.glb', import.meta.url);
const Port_FirstAge_Level2 = new URL('./assets/Port_FirstAge_Level2.glb', import.meta.url);
const Port_FirstAge_Level3 = new URL('./assets/Port_FirstAge_Level3.glb', import.meta.url);
const Port_SecondAge_Level3 = new URL('./assets/Port_SecondAge_Level3.glb', import.meta.url);
// const ArcherySecondAgeLevel3 = new URL('./assets/Archery_SecondAge_Level3.glb', import.meta.url);
// const ArcherySecondAgeLevel3 = new URL('./assets/Archery_SecondAge_Level3.glb', import.meta.url);




  let models = [
    largeBuilding, 
    skyScraper, 
    awing, 
    lowBuilding, 
    smallBuilding, 
    oakTree, 
    palmTree, 
    pineTree, 
    plateauFall, 
    farmLevel13,
    ArcherySecondAgeLevel3,
    Barrel,
    Crate_Big_Stack2, 
    Dock_FirstAge,
    Farm_FirstAge_Level2_Wheat, 
    Houses_FirstAge_1_Level3,
    Houses_FirstAge_2_Level3,
    Houses_FirstAge_3_Level2,
    Market_FirstAge_Level3,
    Houses_SecondAge_2_Level3,
    Houses_SecondAge_3_Level3, 
    Market_SecondAge_Level3,
    Mine, 
    Port_FirstAge_Level2,
    Port_FirstAge_Level3,
    Port_SecondAge_Level3,

  ]

 
 
            

  let selectedModel = [models[0]] 
  
  // console.log(selectedModel);
  

  
if (getactiveStorage === null) {
   
window.addEventListener('load', function loadScene2() {
  loadScene(selectedModel, stag)
  return () => {
    window.removeEventListener("load", loadScene2);
  }
})

}
else if (getactiveStorage === "active" && getStorageItems.length > 0) {

  loadSavedScene(scene, assetLoader, models )
  console.log('scene children at load time',scene.children);

}
const canvas = useRef()


  useEffect(()=> {
    window.addEventListener('mousemove', function Raycasting(e) {
      Raycast(e,mousePosition, raycaster, intersects, camera, planeMesh, highlightMesh, objects)
}); 

  
  let objects = [];

//   const roadSquareBtn = document.getElementById('roadSquareBtn')
//   roadSquareBtn.addEventListener('click', ()=> {
//     addRoadSquare(selectedModel, stag, models)
//     loadScene( selectedModel, stag)

// })

 window.addEventListener("load", function loadAddedModels() {
  const largeBuildingBtn = document.getElementById('largeBuildingBtn')
  largeBuildingBtn.addEventListener('click', function loadLargeBuilding() {
    addBuilding(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      largeBuildingBtn.removeEventListener("click", loadLargeBuilding);
    }
})
 
const skyScraperBtn = document.getElementById('skyScraperBtn')
skyScraperBtn.addEventListener('click', function loadSkyScraper() {
addskyScraperBtn(selectedModel, stag, models)
loadScene( selectedModel, stag)
return () => {
  skyScraperBtn.removeEventListener("click", loadSkyScraper);
}
})

 
const detail_awningWide = document.getElementById('detail_awningWide')
detail_awningWide.addEventListener('click', function loadAmingWide() {
    adddetail_awningWide(selectedModel, stag, models)
   loadScene( selectedModel, stag)
   return () => {
    detail_awningWide.removeEventListener("click", loadAmingWide);
  }
})

const lowBuildingmodel = document.getElementById('lowBuilding')
lowBuildingmodel.addEventListener('click', function loadLowBuilding() {
    addlowBuilding(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      lowBuildingmodel.removeEventListener("click", loadLowBuilding);
    }
})

const smallBuildingmodel = document.getElementById('smallBuilding')
smallBuildingmodel.addEventListener('click', function loadSmallBuilding() {
    addsmallBuildingmodel(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      smallBuildingmodel.removeEventListener("click", loadSmallBuilding);
    }
})

const oakTreemodel = document.getElementById('oakTree')
oakTreemodel.addEventListener('click', function loadOakTree() {
    addoakTreemodel(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      oakTreemodel.removeEventListener("click", loadOakTree);
    }
})

const palmTreemodel = document.getElementById('palmTree')
palmTreemodel.addEventListener('click', function loadPalmTree() {
    addpalmTreemodel(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      palmTreemodel.removeEventListener("click", loadPalmTree);
    }
})
const pineTreemodel = document.getElementById('pineTree')
pineTreemodel.addEventListener('click', function loadPineTree() {
    addpineTreemodel(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      pineTreemodel.removeEventListener("click", loadPineTree);
    }
})
const plateauFallmodel = document.getElementById('plateauFall')
plateauFallmodel.addEventListener('click', function loadPlateauFall() {
    addplateauFallmodel(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      plateauFallmodel.removeEventListener("click", loadPlateauFall);
    }
})

const farmLevel13Model = document.getElementById('farmLevel13')
 farmLevel13Model.addEventListener('click', function loadFarmLevel13() {
  addfarmLevel13(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      farmLevel13Model.removeEventListener("click", loadFarmLevel13);
    }
}) 

const ArcherySecondAgeLevel3 = document.getElementById('ArcherySecondAgeLevel3')
ArcherySecondAgeLevel3.addEventListener('click', function loadArcherySecondAgeLevel3() {
  addArcherySecondAgeLevel3(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      ArcherySecondAgeLevel3.removeEventListener("click", loadArcherySecondAgeLevel3);
    }
})


const BarrelModel = document.getElementById('Barrel')
BarrelModel.addEventListener('click', function loadBarrel() {
  addBarrel(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      BarrelModel.removeEventListener("click", loadBarrel);
    }
})

const Crate_Big_Stack2Model = document.getElementById('Crate_Big_Stack2')
Crate_Big_Stack2Model.addEventListener('click', function loadCrate_Big_Stack2Model() {
  addCrate_Big_Stack2(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Crate_Big_Stack2Model.removeEventListener("click", loadCrate_Big_Stack2Model);
    }
})

const Dock_FirstAge = document.getElementById('Dock_FirstAge')
Dock_FirstAge.addEventListener('click', function loadDock_FirstAge() {
  addDock_FirstAge(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Dock_FirstAge.removeEventListener("click", loadDock_FirstAge);
    }
})

const Farm_FirstAge_Level2_Wheat = document.getElementById('Farm_FirstAge_Level2_Wheat')
Farm_FirstAge_Level2_Wheat.addEventListener('click', function loadFarm_FirstAge_Level2_Wheat() {
  addFarm_FirstAge_Level2_Wheat(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Dock_FirstAge.removeEventListener("click", loadFarm_FirstAge_Level2_Wheat);
    }
})

const Houses_FirstAge_1_Level3 = document.getElementById('Houses_FirstAge_1_Level3')
Farm_FirstAge_Level2_Wheat.addEventListener('click', function loadHouses_FirstAge_1_Level3() {
  addHouses_FirstAge_1_Level3(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Houses_FirstAge_1_Level3.removeEventListener("click", loadHouses_FirstAge_1_Level3);
    }
})


const Houses_FirstAge_2_Level3 = document.getElementById('Houses_FirstAge_2_Level3')
Houses_FirstAge_2_Level3.addEventListener('click', function loadHouses_FirstAge_2_Level3() {
  addHouses_FirstAge_2_Level3(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Houses_FirstAge_2_Level3.removeEventListener("click", loadHouses_FirstAge_2_Level3);
    }
})


const Houses_FirstAge_3_Level2 = document.getElementById('Houses_FirstAge_3_Level2')
Houses_FirstAge_3_Level2.addEventListener('click', function loadHouses_FirstAge_3_Level2() {
  addHouses_FirstAge_3_Level2(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Houses_FirstAge_3_Level2.removeEventListener("click", loadHouses_FirstAge_3_Level2);
    }
})

const Market_FirstAge_Level3 = document.getElementById('Market_FirstAge_Level3')
Market_FirstAge_Level3.addEventListener('click', function loadMarket_FirstAge_Level3() {
  addMarket_FirstAge_Level3(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      loadMarket_FirstAge_Level3.removeEventListener("click", loadMarket_FirstAge_Level3);
    }
})

const Houses_SecondAge_2_Level3 = document.getElementById('Houses_SecondAge_2_Level3')
Houses_SecondAge_2_Level3.addEventListener('click', function loadHouses_SecondAge_2_Level3() {
  addHouses_SecondAge_2_Level3(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Houses_SecondAge_2_Level3.removeEventListener("click", loadHouses_SecondAge_2_Level3);
    }
})

const Houses_SecondAge_3_Level3 = document.getElementById('Houses_SecondAge_3_Level3')
Houses_SecondAge_3_Level3.addEventListener('click', function loadHouses_SecondAge_3_Level3() {
  addHouses_SecondAge_3_Level3(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Houses_SecondAge_3_Level3.removeEventListener("click", loadHouses_SecondAge_3_Level3);
    }
})

const Market_SecondAge_Level3 = document.getElementById('Market_SecondAge_Level3')
Market_SecondAge_Level3.addEventListener('click', function loadMarket_SecondAge_Level3() {
  addMarket_SecondAge_Level3(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Market_SecondAge_Level3.removeEventListener("click", loadMarket_SecondAge_Level3);
    }
})

const Mine = document.getElementById('Mine')
Mine.addEventListener('click', function loadMine() {
  addMine(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Mine.removeEventListener("click", loadMine);
    }
})


const Port_FirstAge_Level2 = document.getElementById('Port_FirstAge_Level2')
Port_FirstAge_Level2.addEventListener('click', function loadPort_FirstAge_Level2() {
  addPort_FirstAge_Level2(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Port_FirstAge_Level2.removeEventListener("click", loadPort_FirstAge_Level2);
    }
})

const Port_FirstAge_Level3 = document.getElementById('Port_FirstAge_Level3')
Port_FirstAge_Level3.addEventListener('click', function loadPort_FirstAge_Level3() {
  addPort_FirstAge_Level3(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Port_FirstAge_Level3.removeEventListener("click", loadPort_FirstAge_Level3);
    }
})

const Port_SecondAge_Level3 = document.getElementById('Port_SecondAge_Level3')
Port_SecondAge_Level3.addEventListener('click', function loadPort_SecondAge_Level3() {
  addPort_SecondAge_Level3(selectedModel, stag, models)
    loadScene( selectedModel, stag)
    return () => {
      Port_SecondAge_Level3.removeEventListener("click", loadPort_SecondAge_Level3);
    }
})

return () => {
  window.removeEventListener("load", loadAddedModels);
}
 })

 
  let selectedObj = []
  window.addEventListener('contextmenu', function selectObject() {
      const objectExist = objects.find(function(object) {
             return (object.position.x === highlightMesh.position.x)
             && (object.position.z === highlightMesh.position.z)
         });
  
         if(!objectExist)
            return
         else
             {
              while(selectedObj.length > 0) {
                  selectedObj.pop();
              }
              selectedObj.push(objectExist)
              // highlightMesh.material.color.setHex(0x8BACAA);
             }
  console.log(selectedObj[0]);



  return () => {
    window.removeEventListener("contextmenu", selectObject);
  }
  });

  

  
  window.addEventListener('keypress', function translateObjects(event) {
  
          switch (event.code) {
              case 'KeyS':
                  selectedObj[0].position.z -= 1
                  console.log(selectedObj[0]);
                  break
              case 'KeyW':
                  selectedObj[0].position.z += 1
                  break
                  case 'KeyD':
                      selectedObj[0].position.x -= 1
                  break
                  case 'KeyA':
                      selectedObj[0].position.x += 1
                  break
              // case 'KeyS':
              //     controls.setMode('scale')
              //     break
          }
          return () => {
            window.removeEventListener("keypress", translateObjects);
          }
  })
  
  window.addEventListener('keydown', function rotateObjects(event) {
      if (event.ctrlKey  && event.code === 'KeyC') {
          selectedObj[0].rotation.y += 0.05
                  
      }
      else if (event.ctrlKey  && event.code === 'KeyX') {
          selectedObj[0].rotation.y -= 0.05
      }
      else if ( event.shiftKey ) {
          selectedObj[0].scale.x += 0.5
          selectedObj[0].scale.y += 0.5
          selectedObj[0].scale.z += 0.5
      }
      else if (event.altKey) {
          selectedObj[0].scale.x -= 0.5
          selectedObj[0].scale.y -= 0.5
          selectedObj[0].scale.z -= 0.5
      }
      return () => {
        window.removeEventListener("keydown", rotateObjects);
      }
  });

  


  let listofmodels = []
  window.addEventListener('dblclick', function insertSelectedModel(e) {
    e.stopPropagation()
    e.preventDefault()

    addModel(scene,intersects, raycaster, planeMesh, objects, highlightMesh, stag, listofmodels , mousePosition, camera)
    addModelSound()
   
  });


  window.addEventListener('auxclick', function detectObj() {
    detectObject(scene,  raycasterObj, mousePosition, camera)  
    return () => {
      window.removeEventListener("click", detectObj);
    }
  });


  

  const saveBtn = document.getElementById("saveBtn")

  saveBtn.addEventListener('click', function saveScene(e) {
    e.stopPropagation()
    e.preventDefault()

    saveProgress(scene, listofmodels, getactiveStorage)
     })

renderer.setSize(window.innerWidth, window.innerHeight);
canvas.current.appendChild(renderer.domElement);
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.2
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.VSMShadowMap

// const loader = new THREE.TextureLoader();
// loader.load('/bgpixel.webp' , function(texture)
//           {
//            scene.background = texture
//           });
})
window.addEventListener('resize', handleResize)

function handleResize() {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	renderer.setSize(sizes.width, sizes.height)

	const pixelRatio = Math.min(window.devicePixelRatio, 2)
	renderer.setPixelRatio(pixelRatio)
}
 

//   function download(){
//     const exporter = new GLTFExporter();
//     exporter.parse(
//         scene,
//         function (result) {
//             saveArrayBuffer(result, 'ThreejsScene.glb'); 
//             console.log(result);
//         },
//         { 
//             binary: true
//         }
//     );
// }

// function saveArrayBuffer(buffer, filename) {
//     save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
// }
   
// function save(blob) {
//   let scenelink = JSON.stringify(URL.createObjectURL(blob))
//   var scenelinksanit = scenelink.replace('blob:','');
//    console.log("link href",  URL.createObjectURL(blob), typeof(URL.createObjectURL(blob)));
//    localStorage.setItem('scenelink', scenelink)
//    console.log("link href", scenelinksanit);

// }


function animate() {
      
  renderer.setAnimationLoop(animate);
  renderer.render(scene, camera); 
  orbit.update();
}
animate()





useEffect(()=> {
  //=================TOOLTIP====================
  let tooltip = document.querySelectorAll(".tooltip");
  let itemTooltip = document.querySelectorAll(".item__tooltip");
  let items__container = document.querySelectorAll(".items__container");

  // document.addEventListener("mousemove", fn);
  tooltip.forEach((t, e) => {
    let x = e.clientX;
    let y = e.clientY;

    let newposX = x / 10;
    let newposY = y / 2;
    t.style.transform = "translate3d(" + newposX + "px," + newposY + "px,0px)";
  });
  items__container.forEach((item) => {
  
  
      item.addEventListener('click', function tooltipFollow (e) {
        itemTooltip.forEach((t) => {
          let x = e.clientX;
          let y = e.clientY;
      
          let newposX = x / 30;
          let newposY = y / 100;
          t.style.transform = "translate3d(" + newposX + "px," + newposY + "px,0px)";
        });

        return () => {
          item.removeEventListener("click", tooltipFollow);
        }
      })
      
    
  })
    
  //=======DRAG AND DROP================
  const items = document.querySelectorAll(".item__container");
  const itemContainers = document.querySelectorAll(".items__container");
 

  items.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
    
  });
  
  itemContainers.forEach((square) => {
    square.addEventListener("dragover", dragOver);
    square.addEventListener("drop", dragDrop);
  });
  


  let beingDragged;
 
  function dragStart(e) {
    beingDragged = e.target;
    console.log(e.target);

    let img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    e.dataTransfer.setDragImage(img, 0, 0);
  }
  
  function dragDrop(e) {
    if (e.target.tagName === "IMG") {
      return;
    }
    e.target.append(beingDragged);
    e.target.removeAttribute('id');
  }
  
  function dragOver(e) {
    e.preventDefault();
    
  }
  
      }, [])

   
  return (
    <>
<div id='canvas' ref={canvas}></div>

    
<MiniMenu />
    </>
   
  )
}

export default App
