

export  function scaleObject(scene,  raycasterObj, mousePosition, camera, orbit) {

    let intersection = []
            raycasterObj.setFromCamera(mousePosition, camera)
          let   intersect = raycasterObj.intersectObjects(scene.children,  true)
          intersection.push(intersect[0])
            // TO GET THE FIRST INTERSECTION POINT AKA THE MODEL YOU'RE LOOKING FOR, YOU NEED
            // TO LOOK OUT FOR THE FURTHEST DISTANCE FROM CAMERA
  
  
      console.log(intersect[0].object);
      if (intersect[0].object.type === "Mesh" 
      && intersect[0].object.name !== "world_terrain"
      && intersect[0].object.name !== "model_terrain"
    && intersection[0].object.name !== "highlightmesh"
    && intersection[0].object.name !== "decoration"
      ) 
      {
    orbit.enableZoom = false;

        let selectedModelObj = intersect[0].object;
        // DELETE MODEL 
        let deletedModel = selectedModelObj.parent;
        return deletedModel
      }

      else orbit.enableZoom = true;

    }
  
            
        
  