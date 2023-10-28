import * as THREE from 'three'
import { DragControls } from 'three/addons/controls/DragControls.js';

export  function detectObject(scene,  raycasterObj, mousePosition, camera, renderer, orbit) {
  let controls
  let intersection = []
          raycasterObj.setFromCamera(mousePosition, camera)
        let   intersect = raycasterObj.intersectObjects(scene.children,  true)
        intersection.push(intersect[0])
        console.log(intersection);
      //  console.log(intersect);
          // TO GET THE FIRST INTERSECTION POINT AKA THE MODEL YOU'RE LOOKING FOR, YOU NEED
          // TO LOOK OUT FOR THE FURTHEST DISTANCE FROM CAMERA


  function parseObjects(i) {
    console.log(intersect[i].object);
    if (intersect[i].object.type === "Mesh" 
    && intersect[i].object.name !== "world_terrain"
    && intersect[i].object.name !== "model_terrain") {
      let selectedModelObj = intersect[i].object;
      console.log(selectedModelObj);
      
    
      // DELETE MODEL 
      let deletedModel = selectedModelObj.parent;
console.log(deletedModel);
console.log(scene);

      // scene.remove(box)
      deletedModel.parent.remove(deletedModel);
    }
  }

  function rotateObject() {
    console.log(intersection[0]);
    if (intersection[0].object.type === "Mesh" 
    && intersection[0].object.name !== "world_terrain"
    && intersection[0].object.name !== "model_terrain"
    && intersection[0].object.name !== "highlightmesh"
    && intersection[0].isPerspectiveCamera !== true
    ) {
      let selectedModelObj = intersection[0].object;
      console.log(selectedModelObj);
      
    
      // DELETE MODEL 
        let deletedModel = selectedModelObj.parent;
        console.log(deletedModel);
          deletedModel.rotation.y += 0.5

          //DRAG OBJECT
          controls = new DragControls( [deletedModel ], camera, renderer.domElement );
          controls.transformGroup = true  
          controls.addEventListener( 'drag', () => {
            orbit.enabled = false;
            render

            deletedModel.position.y = 0;
            deletedModel.traverse( function(child) {
              if (child instanceof THREE.Mesh) {
              
            child.material.opacity = "0.33"

                }
                });

          } );
          controls.addEventListener( 'dragend', function () { 
            // deletedModel.material.opacity = 1
            deletedModel.traverse( function(child) {
              console.log(child);
              if (child instanceof THREE.Mesh) {
                child.material.opacity = "1"

                }
                });
            orbit.enabled = true; 
          } );
                  
      
      

      // scene.remove(box)
    }
  }
  function render() {

    renderer.render( scene, camera );

  }
  rotateObject()

  window.addEventListener('keydown', function performActions(event) {
    event.preventDefault()
    event.stopPropagation()
    switch (event.code) {
        case 'KeyX':
          parseObjects(0)
            break
    }
   
    })
  }

          
      
