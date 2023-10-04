
import './App.css'
import "./UI/minimenu.css"
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
// import large_buildingAimg from './assets/modelsImg/city/largebuildingA.png'
// import detail_amingwidpng from './assets/modelsImg/city/detail_amingwid.png'
// import lowbuildingCpng from './assets/modelsImg/city/lowbuildingC.png'
// import skyscraperDpng from './assets/modelsImg/city/skyscraperD.png'
// import smallbuildingCpng from './assets/modelsImg/city/smallbuildingC.png'
// import tree_oak_fallpng from './assets/modelsImg/city/tree_oak_fall.png'
// import tree_palmTallpng from './assets/modelsImg/city/tree_palmTall.png'
// import tree_pineDefaultApng from './assets/modelsImg/city/tree_pineDefaultA.png'
// import tree_plateau_fallpng from './assets/modelsImg/city/tree_plateau_fall.png'


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
      addsmallBuildingmodel
     } from './scripts/selectModel';


import { Raycast } from './scripts/Raycast';
import {saveProgress} from './scripts/saveProgress';
import {addModel} from './scripts/addModel';
import { deleteModel } from './scripts/deleteModel';
import { loadSavedScene } from './scripts/loadSavedScene';
import { loadScene } from './scripts/loadScene';
import MiniMenu from './UI/MiniMenu';


function App() {
  let stag = []
    const renderer = new THREE.WebGLRenderer({antialias: true});

    const scene = new THREE.Scene();

      //principal camera
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
    camera.position.set(0, 30, 0);
    // camera.updateProjectionMatrix()
    scene.add(camera)


    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.enabled = true
      orbit.saveState()

      const ambientLight = new THREE.AmbientLight(0xFFFFFF);
      console.log(scene);
      ambientLight.intensity = 2;
      scene.add(ambientLight);
      
      const spotLight = new THREE.SpotLight( 0xffffff );
      spotLight.intensity = 2;
      spotLight.position.set( 1000, 1000, 1000 );
      spotLight.position.set( 1000, 1000, -1000 );
      
      
      scene.add(spotLight)
      
      const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
      directionalLight.position.set(-3, 3, -3);
      directionalLight.position.set(3, 3, 3);
      scene.add(directionalLight);
    
    

let getStorageItems = localStorage.getItem('listofobjects')
let getactiveStorage = localStorage.getItem('active')
   
const planeMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      visible: false
  })
);
planeMesh.rotation.x = Math.PI * - 0.5;
scene.add(planeMesh);


const grid = new THREE.GridHelper(20, 20);
scene.add(grid);

const highlightMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1),
  new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      transparent: true
  })
);

highlightMesh.rotation.x = Math.PI * - 0.5;
highlightMesh.position.set(0.5, 0, 0.5);
scene.add(highlightMesh);

const mousePosition = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
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
const roadSquare = new URL('./assets/road_square.glb', import.meta.url);


  let models = [largeBuilding, skyScraper, awing, lowBuilding, smallBuilding, oakTree, palmTree, pineTree, plateauFall, roadSquare ]

  let assetLoader = new GLTFLoader()

  let selectedModel = [models[0]] 
  
  // console.log(selectedModel);
  

  
if (getactiveStorage === null) {
   
window.addEventListener('load', ()=> {
  loadScene(selectedModel, stag)
})

}
else if (getactiveStorage === "active" && getStorageItems.length > 0) {

  loadSavedScene(scene, assetLoader, models )
  console.log('scene children at load time',scene.children);

}
const canvas = useRef()


  useEffect(()=> {

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor (0xEEE0C9, 1);
    canvas.current.appendChild(renderer.domElement);
  const loader = new THREE.TextureLoader();
  loader.load('/bgpixel.webp' , function(texture)
              {
               scene.background = texture
              });
  window.addEventListener('mousemove', function(e) {
    Raycast(e,mousePosition, raycaster, intersects, camera, planeMesh, highlightMesh, objects)
  });
  
  
  
  let objects = [];

//   const roadSquareBtn = document.getElementById('roadSquareBtn')
//   roadSquareBtn.addEventListener('click', ()=> {
//     addRoadSquare(selectedModel, stag, models)
//     loadScene( selectedModel, stag)

// })

  const largeBuildingBtn = document.getElementById('largeBuildingBtn')
  largeBuildingBtn.addEventListener('click', ()=> {
    addBuilding(selectedModel, stag, models)
    loadScene( selectedModel, stag)

})
 
const skyScraperBtn = document.getElementById('skyScraperBtn')
skyScraperBtn.addEventListener('click', ()=> {
addskyScraperBtn(selectedModel, stag, models)
loadScene( selectedModel, stag)

})

 
const detail_awningWide = document.getElementById('detail_awningWide')
detail_awningWide.addEventListener('click', ()=> {
    adddetail_awningWide(selectedModel, stag, models)
   loadScene( selectedModel, stag)

})

const lowBuildingmodel = document.getElementById('lowBuilding')
lowBuildingmodel.addEventListener('click', ()=> {
    addlowBuilding(selectedModel, stag, models)
    loadScene( selectedModel, stag)

})

const smallBuildingmodel = document.getElementById('smallBuilding')
smallBuildingmodel.addEventListener('click', ()=> {
    addsmallBuildingmodel(selectedModel, stag, models)
    loadScene( selectedModel, stag)

})

const oakTreemodel = document.getElementById('oakTree')
oakTreemodel.addEventListener('click', ()=> {
    addoakTreemodel(selectedModel, stag, models)
    loadScene( selectedModel, stag)

})

const palmTreemodel = document.getElementById('palmTree')
palmTreemodel.addEventListener('click', ()=> {
    addpalmTreemodel(selectedModel, stag, models)
    loadScene( selectedModel, stag)

})
const pineTreemodel = document.getElementById('pineTree')
pineTreemodel.addEventListener('click', ()=> {
    addpineTreemodel(selectedModel, stag, models)
    loadScene( selectedModel, stag)

})
const plateauFallmodel = document.getElementById('plateauFall')
plateauFallmodel.addEventListener('click', ()=> {
    addplateauFallmodel(selectedModel, stag, models)
    loadScene( selectedModel, stag)

})

  let selectedObj = []


  window.addEventListener('keypress', (e) => {
    deleteModel(e, intersects, raycaster, planeMesh, objects, highlightMesh, selectedObj)
  }
  
  
  );
  
  window.addEventListener('contextmenu', function() {
     
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
              highlightMesh.material.color.setHex(0x8BACAA);
             }
  console.log(selectedObj[0]);
  
  });

  

  
  window.addEventListener('keypress', function (event) {
  
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
  })
  
  window.addEventListener('keydown', function (event) {
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
  });

  let listofmodels = []
  window.addEventListener('dblclick', () => {
    addModel(scene,intersects, raycaster, planeMesh, objects, highlightMesh, stag, listofmodels)
  }
  );
  

  const saveBtn = document.getElementById("saveBtn")

  saveBtn.addEventListener('click', () => {
    saveProgress(scene, listofmodels, getactiveStorage)
     })

  })

 

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

function animate(time) {
      
  renderer.setAnimationLoop(animate);
  highlightMesh.material.opacity = 1 + Math.sin(time / 120);
  renderer.render(scene, camera);
  
}
animate()


window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
});

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
  
  
      item.addEventListener('click', (e)=> {
        itemTooltip.forEach((t) => {
          let x = e.clientX;
          let y = e.clientY;
      
          let newposX = x / 30;
          let newposY = y / 100;
          t.style.transform = "translate3d(" + newposX + "px," + newposY + "px,0px)";
        });
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
  }
  
  function dragOver(e) {
    e.preventDefault();
  }
  
      })


  return (
    <>
     <div className="marquee">
  <div className="clouds">
    <img src="/clouds.webp" alt="clouds" />
  </div>
  <div className="clouds">
    <img src="/clouds.webp" alt="clouds" />
  </div>
  <div className="clouds">
    <img src="/clouds.webp" alt="clouds" />
  </div>
  <div className="clouds">
    <img src="/clouds.webp" alt="clouds" />
  </div>
  <div className="clouds">
    <img src="/clouds.webp" alt="clouds" />
  </div>
  <div className="clouds">
    <img src="/clouds.webp" alt="clouds" />
  </div>
</div>
      <div ref={canvas}></div>

     
<MiniMenu />
    </>
   
  )
}

export default App
