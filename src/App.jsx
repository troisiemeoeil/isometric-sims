
import './App.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { useEffect } from 'react';
import { addBuilding, 
      adddetail_awningWide,
      addlowBuilding,
      addoakTreemodel,
      addpalmTreemodel,
      addpineTreemodel,
      addplateauFallmodel,
      addskyScraperBtn,
      addsmallBuildingmodel
     } from './addModels';
import { Raycast, intersect } from './Raycast';

let stag = []
  
 

function App() {
    const renderer = new THREE.WebGLRenderer();

    const scene = new THREE.Scene();

      //principal camera
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
    camera.position.set(0, 30, 0);
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

  useEffect(()=> {
    
  const largeBuilding = new URL('./assets/large_buildingA.glb', import.meta.url);
  const skyScraper = new URL('./assets/skyscraperD.glb', import.meta.url);
  const awing = new URL('./assets/detail_awningWide.glb', import.meta.url);
  const lowBuilding = new URL('./assets/low_buildingC.glb', import.meta.url);
  const smallBuilding = new URL('./assets/small_buildingA.glb', import.meta.url);
  
  const oakTree = new URL('./assets/tree_oak_fall.glb', import.meta.url);
  const palmTree = new URL('./assets/tree_palmTall.glb', import.meta.url);
  const pineTree = new URL('./assets/tree_pineDefaultA.glb', import.meta.url);
  const plateauFall = new URL('./assets/tree_plateau_fall.glb', import.meta.url);
  
  
  let models = [largeBuilding, skyScraper, awing, lowBuilding, smallBuilding, oakTree, palmTree, pineTree, plateauFall ]

  let assetLoader = new GLTFLoader()

  assetLoader.load(largeBuilding.href, function(gltf) {
    const model = gltf.scene;
   model.name = "large_buildingA"
   console.log(model);
  })



  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor (0xEEE0C9, 1);
  document.body.appendChild(renderer.domElement);
  
  
  
  
 
 
  //controls camera



 



  let selectedModel = [models[0]] 
  
  // console.log(selectedModel);
  
  function loadScene() {
      assetLoader.load(selectedModel[0].href, function(gltf) {
          const model = gltf.scene;
          model.scale.set(0.5, 0.5, 0.5);
          let meshArr = model.children[0].children
          for (let i = 0; i < meshArr.length; i++) {
            meshArr[i].material.metalness = 0
          }
          stag.push(model);
          console.log(stag);
      }, undefined, function(error) {
          console.error(error);
      });
  } 




  function loadSavedScene() {
    const listofSavedModels =  JSON.parse(localStorage.getItem("listofobjects"))
    console.log('saved items on reload', listofSavedModels);
        for (let i = 0; i < listofSavedModels.length; i++) {
          //list of saved models returns an array of the name and position of each model
            if (listofSavedModels[i].name === "large_buildingA") {
                // camera.position.set(10,-15,22)
                assetLoader.load(selectedModel[0].href, function(gltf) {
                    const model = gltf.scene;
                    model.scale.set(0.5, 0.5, 0.5);
                    model.position.copy(listofSavedModels[i].position);
                    let meshArr = model.children[0].children
                    for (let i = 0; i < meshArr.length; i++) {
                      meshArr[i].material.metalness = 0
                    }
              scene.add(model);
                }, undefined, function(error) {
                    console.error(error);
                });
            }
            else if(listofSavedModels[i].name === "skyscraperD") {
                console.log("found a skycraper");
                
                assetLoader.load(models[1].href, function(gltf) {
                    const model = gltf.scene;
                    model.scale.set(0.5, 0.5, 0.5);
                    model.position.copy(listofSavedModels[i].position);
                    let meshArr = model.children[0].children
                    for (let i = 0; i < meshArr.length; i++) {
                      meshArr[i].material.metalness = 0
                    }
              scene.add(model);
                }, undefined, function(error) {
                    console.error(error);
                });
            }
            else if(listofSavedModels[i].name === "detail_awningWide") {
                assetLoader.load(models[2].href, function(gltf) {
                    const model = gltf.scene;
                    model.scale.set(0.5, 0.5, 0.5);
                    model.position.copy(listofSavedModels[i].position);
                    let meshArr = model.children[0].children
                    for (let i = 0; i < meshArr.length; i++) {
                      meshArr[i].material.metalness = 0
                    }
              scene.add(model);
                }, undefined, function(error) {
                    console.error(error);
                });
            }

            else if(listofSavedModels[i].name === "low_buildingC") {
                assetLoader.load(models[3].href, function(gltf) {
                    const model = gltf.scene;
                    model.scale.set(0.5, 0.5, 0.5);
                    model.position.copy(listofSavedModels[i].position);
                    let meshArr = model.children[0].children
                    for (let i = 0; i < meshArr.length; i++) {
                      meshArr[i].material.metalness = 0
                    }
              scene.add(model);
                }, undefined, function(error) {
                    console.error(error);
                });
            }
            
            else if(listofSavedModels[i].name === "small_buildingA") {
                assetLoader.load(models[4].href, function(gltf) {
                    const model = gltf.scene;
                    model.scale.set(0.5, 0.5, 0.5);
                    model.position.copy(listofSavedModels[i].position);
                    let meshArr = model.children[0].children
                    for (let i = 0; i < meshArr.length; i++) {
                      meshArr[i].material.metalness = 0
                    }
              scene.add(model);
                }, undefined, function(error) {
                    console.error(error);
                });
            }
            
            else if(listofSavedModels[i].name === "tree_oak_fall") {
                assetLoader.load(models[5].href, function(gltf) {
                    const model = gltf.scene;
                    model.scale.set(0.5, 0.5, 0.5);
                    model.position.copy(listofSavedModels[i].position);
                    let meshArr = model.children[0].children
                    for (let i = 0; i < meshArr.length; i++) {
                      meshArr[i].material.metalness = 0
                    }
              scene.add(model);
                }, undefined, function(error) {
                    console.error(error);
                });
            }
            else if(listofSavedModels[i].name === "tree_palmTall") {
                assetLoader.load(models[6].href, function(gltf) {
                    const model = gltf.scene;
                    model.scale.set(0.5, 0.5, 0.5);
                    model.position.copy(listofSavedModels[i].position);
                    let meshArr = model.children[0].children
                    for (let i = 0; i < meshArr.length; i++) {
                      meshArr[i].material.metalness = 0
                    }
              scene.add(model);
                }, undefined, function(error) {
                    console.error(error);
                });
            }
            else if(listofSavedModels[i].name === "tree_pineDefaultA") {
                assetLoader.load(models[7].href, function(gltf) {
                    const model = gltf.scene;
                    model.scale.set(0.5, 0.5, 0.5);
                    model.position.copy(listofSavedModels[i].position);
                    let meshArr = model.children[0].children
                    for (let i = 0; i < meshArr.length; i++) {
                      meshArr[i].material.metalness = 0
                    }
              scene.add(model);
                }, undefined, function(error) {
                    console.error(error);
                });
            }

            else if(listofSavedModels[i].name === "tree_plateau_fall") {
                assetLoader.load(models[8].href, function(gltf) {
                    const model = gltf.scene;
                    model.scale.set(0.5, 0.5, 0.5);
                    model.position.copy(listofSavedModels[i].position);
                    let meshArr = model.children[0].children
                    for (let i = 0; i < meshArr.length; i++) {
                      meshArr[i].material.metalness = 0
                    }
              scene.add(model);
                }, undefined, function(error) {
                    console.error(error);
                });
            }
        }
  }



if (getactiveStorage === null) {
  loadScene()
}
else if (getactiveStorage === "active" && getStorageItems !== "") {
  loadSavedScene()
}


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

  
  window.addEventListener('mousemove', function(e) {
    Raycast(e,mousePosition, raycaster, intersects, camera, planeMesh, highlightMesh, objects)
   
    
  });
  
  
  
  let objects = [];

  
  const largeBuildingBtn = document.getElementById('largeBuildingBtn')
  largeBuildingBtn.addEventListener('click', ()=> {
    addBuilding(selectedModel, stag, models)
    loadScene()
})
 
const skyScraperBtn = document.getElementById('skyScraperBtn')
skyScraperBtn.addEventListener('click', ()=> {
addskyScraperBtn(selectedModel, stag, models)
  loadScene()
})

 
const detail_awningWide = document.getElementById('detail_awningWide')
detail_awningWide.addEventListener('click', ()=> {
    adddetail_awningWide(selectedModel, stag, models)
  loadScene()
})

const lowBuildingmodel = document.getElementById('lowBuilding')
lowBuildingmodel.addEventListener('click', ()=> {
    addlowBuilding(selectedModel, stag, models)
  loadScene()
})

const smallBuildingmodel = document.getElementById('smallBuilding')
smallBuildingmodel.addEventListener('click', ()=> {
    addsmallBuildingmodel(selectedModel, stag, models)
  loadScene()
})

const oakTreemodel = document.getElementById('oakTree')
oakTreemodel.addEventListener('click', ()=> {
    addoakTreemodel(selectedModel, stag, models)
  loadScene()
})

const palmTreemodel = document.getElementById('palmTree')
palmTreemodel.addEventListener('click', ()=> {
    addpalmTreemodel(selectedModel, stag, models)
  loadScene()
})
const pineTreemodel = document.getElementById('pineTree')
pineTreemodel.addEventListener('click', ()=> {
    addpineTreemodel(selectedModel, stag, models)
  loadScene()
})
const plateauFallmodel = document.getElementById('plateauFall')
plateauFallmodel.addEventListener('click', ()=> {
    addplateauFallmodel(selectedModel, stag, models)
  loadScene()
})


  
  let selectedObj = []

  window.addEventListener('keypress', function(e) {
      switch (e.code) {
          case 'KeyX':
              if(intersects.length > 0) {
                  const objectExist = objects.find(function(object) {
                      return (object.position.x === highlightMesh.position.x)
                      && (object.position.z === highlightMesh.position.z)
                  });
          
                  if(!objectExist)
                     return
                  else
                      {
                          let objId = selectedObj[0].uuid
                          console.log(objId);
                          function removeObjectWithId(arr, id) {
                              const objWithIdIndex = arr.findIndex((objects) => objects.uuid === id);
                            
                              if (objWithIdIndex > -1) {
                                arr.splice(objWithIdIndex, 1);
                              }
                            
                              return arr;
                            }
                            removeObjectWithId(objects, objId);
                            console.log(objects);
                          selectedObj[0].removeFromParent()
                      }
              }
              break  
      }          
  });
  
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
  
  window.addEventListener('dblclick', function() {
      // console.log(scene);
  intersect(intersects, raycaster, planeMesh)
      const objectExist = objects.find(function(object) {
          return (object.position.x === highlightMesh.position.x)
          && (object.position.z === highlightMesh.position.z)
      });
      console.log(objectExist );
          if(intersect(intersects, raycaster, planeMesh).length > 0) {
              const stagClone = stag[0].clone();
              console.log(" initial position of cube", stagClone.position);

              stagClone.position.copy(highlightMesh.position);
              scene.add(stagClone);
              objects.push(stagClone);
              highlightMesh.material.color.setHex(0xFF6666);
              console.log("position of cube", highlightMesh.position);
              console.log("details of cube", stagClone.children[0].name);
              let addedModels = {
                name: stagClone.children[0].name,
                position: {
                    x: highlightMesh.position.x,
                    y: highlightMesh.position.y,
                    z: highlightMesh.position.z,
                }
              }
              console.log(addedModels);
              listofmodels.push(addedModels)
          }
  });


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

 
  
  })

  useEffect(()=> {

    const saveBtn = document.getElementById('saveBtn')
    console.log(saveBtn);
    let correctModelPosition = []
    function saveProgress() {
      // const json = scene.toJSON();
      // TO GET THE NAME OF THE MODEL
      let sceneContent = scene.children
      console.log(sceneContent);
      let arrModels = []
      for (let i = 10; i < sceneContent.length; i++) {
          arrModels.push({
              name: sceneContent[i].children[0].name,
              position: sceneContent[i].position
          });
         
    }
  
      if (getactiveStorage === null) {
           localStorage.clear();
  
          localStorage.setItem('active', "active")
          localStorage.setItem("listofobjects", JSON.stringify(arrModels))
          console.log("saved items when there's NO save", JSON.parse(localStorage.getItem("listofobjects")));
        console.log(correctModelPosition);
  
      }
      else if (getactiveStorage === "active") {
          localStorage.clear();
              // correct method
              for (let i = 10; i < scene.children.length; i++) {
                  correctModelPosition.push({
                      name: scene.children[i].children[0].name,
                      position: scene.children[i].position
                  });
            }
            console.log(correctModelPosition);
            localStorage.setItem('active', "active")
          localStorage.setItem("listofobjects", JSON.stringify(arrModels))
      }
    }
  
    saveBtn.addEventListener('click', ()=> {
      saveProgress()
    })
   
  })
  

  function reset() {
    localStorage.clear();
    location.reload()
  }

  function download(){
    const exporter = new GLTFExporter();
    exporter.parse(
        scene,
        function (result) {
            saveArrayBuffer(result, 'ThreejsScene.glb'); 
            console.log(result);
        },
        { 
            binary: true
        }
    );
}

function saveArrayBuffer(buffer, filename) {
    save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
}
   
function save(blob) {
  let scenelink = JSON.stringify(URL.createObjectURL(blob))
  var scenelinksanit = scenelink.replace('blob:','');
   console.log("link href",  URL.createObjectURL(blob), typeof(URL.createObjectURL(blob)));
   localStorage.setItem('scenelink', scenelink)
   console.log("link href", scenelinksanit);

}

function twoD() {
    orbit.enabled = false
  }

  function threeD() {
    orbit.reset()
    console.log("click");
  }
  
  return (
    <div>
      <div className='absolute w-[15%] m-8 border-solid border-sky-500 border-4 rounded-lg h-[90%]'>
        <div className='flex flex-row basis-full flex-wrap'>
        <button className=' text-sm p-1 m-1 rounded-lg bg-emerald-500 text-white' id='largeBuildingBtn'>Large Building</button>
        <button className='  text-sm p-1 m-1 rounded-lg bg-yellow-500 text-white' id='skyScraperBtn'>Sky Scraper</button>
        <button className=' text-sm p-1 m-1 rounded-lg bg-red-300 text-white' id="detail_awningWide">Chair</button>
        
        <button className=' text-sm p-1 m-1 rounded-lg bg-pink-500 text-white' id='lowBuilding'>Low Building</button>
        <button className='  text-sm p-1 m-1 rounded-lg bg-cyan-500 text-white' id='smallBuilding'>Small Building</button>
        <button className=' text-sm p-1 m-1 rounded-lg bg-blue-500 text-white' id="oakTree">Oak Tree</button>
        <button className=' text-sm p-1 m-1 rounded-lg bg-fuchsia-500 text-white' id='palmTree'>Palm Tree</button>
        <button className=' text-sm p-1 m-1 rounded-lg bg-purple-500 text-white' id='pineTree'>Pine Tree</button>
        <button className=' text-sm p-1 m-1 rounded-lg bg-cyan-800 text-white' id='plateauFall'>Fall Tree</button>

        </div>


        <div className='flex flex-col'>
        <button className=' p-1 m-3 rounded-lg bg-emerald-500 text-white' onClick={twoD}>Edit</button>
        <button className=' p-1 m-3 rounded-lg bg-orange-500 text-white' onClick={threeD}>View 3D</button>
        <button className=' p-1 m-3 rounded-lg bg-blue-300 text-white' id='saveBtn' >Save</button>
        <button className=' p-1 m-3 rounded-lg bg-red-600 text-white' onClick={reset}>Reset</button>
        <button id='link' className=' p-1 m-3 rounded-lg bg-green-300 text-white' onClick={download} >Export as GLTF</button>
        </div>

        </div>
      </div>
  )
}

export default App
