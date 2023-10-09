import * as THREE from 'three'


export  function detectObject(scene,  raycasterObj, mousePosition, camera) {
          raycasterObj.setFromCamera(mousePosition, camera)
          let intersect = raycasterObj.intersectObjects(scene.children, true)
          console.log("world position of clicked model",intersect[0].object.getWorldPosition(new THREE.Vector3))
          // TO GET THE FIRST INTERSECTION POINT AKA THE MODEL YOU'RE LOOKING FOR, YOU NEED
          // TO LOOK OUT FOR THE FURTHEST DISTANCE FROM CAMERA
          console.log("intersect of clicked model",intersect)
          console.log("intersect uuid",intersect[0].object.uuid)
          var cloned = intersect[0].object.material.clone()
          cloned.emissive.r = 0.92; // or cloned.color
          cloned.emissive.g = 0.92;
          cloned.emissive.b = 1;
          intersect[0].object.material = cloned;
      }
