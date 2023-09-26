
import { useEffect } from 'react'
import './App.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
function App() {
useEffect(()=> {

  
  const largeBuilding = new URL('./assets/large_buildingA.glb', import.meta.url);
  const skyScraper = new URL('./assets/skyscraperD.glb', import.meta.url);
  const awing = new URL('./assets/detail_awningWide.glb', import.meta.url);
  const lowBuilding = new URL('./assets/low_buildingC.glb', import.meta.url);
  const smallBuilding = new URL('./assets/small_buildingA.glb', import.meta.url);
  
  const oakTree = new URL('../assets/tree_oak_fall.glb', import.meta.url);
  const palmTree = new URL('../assets/tree_palmTall.glb', import.meta.url);
  const pineTree = new URL('../assets/tree_pineDefaultA.glb', import.meta.url);
  const plateauFall = new URL('../assets/tree_plateau_fall.glb', import.meta.url);
  
  
  let models = [largeBuilding, skyScraper, awing, lowBuilding, smallBuilding, oakTree, palmTree, pineTree, plateauFall ]
  
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor (0xEEE0C9, 1);
  document.body.appendChild(renderer.domElement);
  
  const scene = new THREE.Scene();
  
  const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
  );
  const ambientLight = new THREE.AmbientLight(0xFFFFFF);
  ambientLight.intensity = 4;
  scene.add(ambientLight);
  
  const spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.intensity = 2;
  spotLight.position.set( 1000, 1000, 1000 );
  spotLight.position.set( 1000, 1000, -1000 );
  
  
  scene.add(spotLight)
  
  const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
  scene.add(directionalLight);
  directionalLight.position.set(3, 3, 3);
  
  
  const orbit = new OrbitControls(camera, renderer.domElement);
  
  camera.position.set(10, 15, -22);
  
  orbit.update();
  
  let assetLoader = new GLTFLoader()
  let stag = []
  
  let selectedModel = [models[0]] 
  // console.log(selectedModel);
  
  function loadScene() {
      assetLoader.load(selectedModel[0].href, function(gltf) {
          const model = gltf.scene;
          model.scale.set(0.5, 0.5, 0.5);
          stag.push(model);
          console.log(stag);
      }, undefined, function(error) {
          console.error(error);
      });
  } 
  loadScene()
  
  const planeMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshBasicMaterial({
          side: THREE.DoubleSide,
          visible: false
      })
  );
  planeMesh.rotateX(-Math.PI / 2);
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
  highlightMesh.rotateX(-Math.PI / 2);
  highlightMesh.position.set(0.5, 0, 0.5);
  scene.add(highlightMesh);
  
  const mousePosition = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  let intersects;
  
  window.addEventListener('mousemove', function(e) {
      mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mousePosition, camera);
      intersects = raycaster.intersectObject(planeMesh);
      if(intersects.length > 0) {
          const intersect = intersects[0];
          const highlightPos = new THREE.Vector3().copy(intersect.point).floor().addScalar(0.5);
          highlightMesh.position.set(highlightPos.x, 0, highlightPos.z);
  
          const objectExist = objects.find(function(object) {
              return (object.position.x === highlightMesh.position.x)
              && (object.position.z === highlightMesh.position.z)
          });
  
          if(!objectExist)
              highlightMesh.material.color.setHex(0x96B6C5);
          else
              {
               
                  highlightMesh.material.color.setHex(0xFCAEAE);
              }
      }
  });
  
  
  
  
  
  
  const objects = [];
  
  window.addEventListener('dblclick', function() {
      // console.log(scene);
      const objectExist = objects.find(function(object) {
          return (object.position.x === highlightMesh.position.x)
          && (object.position.z === highlightMesh.position.z)
      });
  
      if(!objectExist) {
          if(intersects.length > 0) {
              console.log(stag[0]);
              const stagClone = stag[0].clone();
              stagClone.position.copy(highlightMesh.position);
              scene.add(stagClone);
              objects.push(stagClone);
              highlightMesh.material.color.setHex(0xFF6666);
          }
      }
      console.log(scene.children.length);
  });
  

  window.addEventListener('keypress', function (event) {
   
      switch (event.code) {
          case 'Numpad1':
              while(selectedModel.length > 0) {
                  selectedModel.pop();
              }
              while(stag.length > 0) {
                  stag.pop();
              }
              selectedModel.push(models[0])
              console.log(selectedModel[0].href);
              loadScene()
  
              break
              case 'Numpad2':
                  while(selectedModel.length > 0) {
                      selectedModel.pop();
                  }
                  while(stag.length > 0) {
                      stag.pop();
                  }
                  selectedModel.push(models[1])
                  console.log(selectedModel[0].href);
                  loadScene()
                  break
                  case 'Numpad3':
                      while(selectedModel.length > 0) {
                          selectedModel.pop();
                      }
                      while(stag.length > 0) {
                          stag.pop();
                      }
                      selectedModel.push(models[2])
                      console.log(selectedModel[0].href);
                      loadScene()
                      break
                  case 'Numpad4':
                      while(selectedModel.length > 0) {
                          selectedModel.pop();
                      }
                      while(stag.length > 0) {
                          stag.pop();
                      }
                      selectedModel.push(models[3])
                      console.log(selectedModel[0].href);
                      loadScene()
                      break
                  case 'Numpad5':
                      while(selectedModel.length > 0) {
                          selectedModel.pop();
                      }
                      while(stag.length > 0) {
                          stag.pop();
                      }
                      selectedModel.push(models[4])
                      console.log(selectedModel[0].href);
                      loadScene()
                      break
                  case 'Numpad6':
                      while(selectedModel.length > 0) {
                          selectedModel.pop();
                      }
                      while(stag.length > 0) {
                          stag.pop();
                      }
                      selectedModel.push(models[5])
                      console.log(selectedModel[0].href);
                      loadScene()
                      break
                  case 'Numpad7':
                      while(selectedModel.length > 0) {
                          selectedModel.pop();
                      }
                      while(stag.length > 0) {
                          stag.pop();
                      }
                      selectedModel.push(models[6])
                      console.log(selectedModel[0].href);
                      loadScene()
                      break
                  case 'Numpad8':
                      while(selectedModel.length > 0) {
                          selectedModel.pop();
                      }
                      while(stag.length > 0) {
                          stag.pop();
                      }
                      selectedModel.push(models[7])
                      console.log(selectedModel[0].href);
                      loadScene()
                      break
                  case 'Numpad9':
                      while(selectedModel.length > 0) {
                          selectedModel.pop();
                      }
                      while(stag.length > 0) {
                          stag.pop();
                      }
                      selectedModel.push(models[8])
                      console.log(selectedModel[0].href);
                      loadScene()
                      break
      }
  
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
  // window.addEventListener('keypress', function (event) {
  
  //     switch (event.code) {
  //         case 'Numpad0':
  //             selectedObj[0].rotation.y += 0.05
  //             console.log(selectedObj[0]);
  //             break
  //         // case 'KeyW':
  //         //     selectedObj[0].position.z += 1
  //         //     break
  //         //     case 'KeyD':
  //         //         selectedObj[0].position.x -= 1
  //         //     break
  //         //     case 'KeyA':
  //         //         selectedObj[0].position.x += 1
  //         //     break
  //         // case 'KeyS':
  //         //     controls.setMode('scale')
  //         //     break
  //     }
  // })
  
  function animate(time) {
      highlightMesh.material.opacity = 1 + Math.sin(time / 120);
      renderer.render(scene, camera);
  }
  
  renderer.setAnimationLoop(animate);
  
  window.addEventListener('resize', function() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
}, [])
  return (
    <>
    
    </>
  )
}

export default App
