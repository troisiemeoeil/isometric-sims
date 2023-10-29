

export  function rotateObject(scene,  raycasterObj, mousePosition, camera) {
  
    let intersection = []
            raycasterObj.setFromCamera(mousePosition, camera)
          let   intersect = raycasterObj.intersectObjects(scene.children,  true)
          intersection.push(intersect[0])
          console.log(intersection);
        //  console.log(intersect);
            // TO GET THE FIRST INTERSECTION POINT AKA THE MODEL YOU'RE LOOKING FOR, YOU NEED
            // TO LOOK OUT FOR THE FURTHEST DISTANCE FROM CAMERA
  
  
      console.log(intersect[0].object);
      if (intersect[0].object.type === "Mesh" 
      && intersect[0].object.name !== "world_terrain"
      && intersect[0].object.name !== "model_terrain") {
        let selectedModelObj = intersect[0].object;
        console.log(selectedModelObj);
        // DELETE MODEL 
        let deletedModel = selectedModelObj.parent;
        // scene.remove(box)
        // deletedModel.parent.remove(deletedModel);
        return deletedModel
      }

    }
  
            
        
  