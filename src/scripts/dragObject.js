import * as THREE from 'three'
import { DragControls } from 'three/addons/controls/DragControls.js';
import { gsap } from "gsap";

export  function dragObject(scene,  raycasterObj, mousePosition, camera, renderer, orbit) {
  let controls
  let intersection = []
          raycasterObj.setFromCamera(mousePosition, camera)
        let   intersect = raycasterObj.intersectObjects(scene.children,  true)
        intersection.push(intersect[0])
        console.log(intersection);
      //  console.log(intersect);
          // TO GET THE FIRST INTERSECTION POINT AKA THE MODEL YOU'RE LOOKING FOR, YOU NEED
          // TO LOOK OUT FOR THE FURTHEST DISTANCE FROM CAMERA




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


          gsap.timeline()
          .to(camera.position, {
            x: 0, 
            y: 45, 
            z: 0.0877576279430568,
            duration: 2,
          }, 0);
          camera.lookAt(deletedModel)
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

 


  function render() {

    renderer.render( scene, camera );

  }
  }

          
      
