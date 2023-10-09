import * as THREE from 'three'


export  function detectObject(scene,  raycasterObj, mousePosition, camera) {
          raycasterObj.setFromCamera(mousePosition, camera)
          let intersect = raycasterObj.intersectObjects(scene.children, true)
          console.log("world position of clicked model",intersect[0].object.getWorldPosition(new THREE.Vector3))
          // TO GET THE FIRST INTERSECTION POINT AKA THE MODEL YOU'RE LOOKING FOR, YOU NEED
          // TO LOOK OUT FOR THE FURTHEST DISTANCE FROM CAMERA
          console.log("intersect of clicked model",intersect)
          console.log("intersect uuid",intersect[0].object.parent.userData.id)
          let selectedModelObj = intersect[0].object.parent
        //   let selectedModelMesh = intersect[0].object

        console.log('selectedModelId',selectedModelObj);
        const box = new THREE.BoxHelper( selectedModelObj, 0xf5ebe0 );
        scene.add( box );

        // let worldPosition = intersect[0].object.getWorldPosition(new THREE.Vector3)

        // let localStorageItems = JSON.parse(localStorage.getItem('listofobjects'))
    
     
        // DELETE MODEL 
        let deletedModel = selectedModelObj.parent
        setTimeout(()=> {

            deletedModel.parent.remove(deletedModel)
            scene.remove(box)
        }, 2000)

          
      }
