import * as THREE from 'three'


export  function detectObject(scene,  raycasterObj, mousePosition, camera) {
          raycasterObj.setFromCamera(mousePosition, camera)
          let intersect = raycasterObj.intersectObjects(scene.children, true)
        
          // TO GET THE FIRST INTERSECTION POINT AKA THE MODEL YOU'RE LOOKING FOR, YOU NEED
          // TO LOOK OUT FOR THE FURTHEST DISTANCE FROM CAMERA
          


  function parseObjects(i) {
    console.log(intersect[i].object);
    if (intersect[i].object.type === "Mesh") {
      let selectedModelObj = intersect[i].object;
      console.log("Found it!", intersect[i].object.name);
      console.log(selectedModelObj);
      let bbox = new THREE.Box3().setFromObject(selectedModelObj);
      // const box = new THREE.BoxHelper( selectedModelObj, 0xf5ebe0 );
      let size = bbox.getSize(new THREE.Vector3());
      // scene.add( box );
      console.log(size);
      // let worldPosition = intersect[0].object.getWorldPosition(new THREE.Vector3)
      // let localStorageItems = JSON.parse(localStorage.getItem('listofobjects'))
      // DELETE MODEL 
      let deletedModel = selectedModelObj.parent;

      deletedModel.parent.remove(deletedModel);
      // scene.remove(box)
    }
  }
  window.addEventListener('keypress', function translateObjects(event) {
  
    switch (event.code) {
        case 'KeyX':
          parseObjects(0)
            break
    }
    })
  }

          
      
