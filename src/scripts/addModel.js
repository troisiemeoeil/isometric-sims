import * as THREE from "three"
import {intersect } from './Raycast';


export  function addModel(scene, intersects, raycaster, planeMesh, objects, highlightMesh, stag, listofmodels ) {
        console.log(stag);
        
    intersect(intersects, raycaster, planeMesh)
        const objectExist = objects.find(function(object) {
            return (object.position.x === highlightMesh.position.x)
            && (object.position.z === highlightMesh.position.z)
        });
        console.log('does an object exist ?', objectExist);
        // raycasterObj.setFromCamera(mousePosition, camera)
        // let intersection = raycasterObj.intersectObjects(scene.children, true)
        // console.log("world position of clicked model", intersection[0].object.getWorldPosition(new THREE.Vector3))

        //RETURNS AN ARRAY OF EXISTING MODELS IN A SPECIFIC HIGHLIGHTED TERRAIN
        const avengers = listofmodels.filter(modelPos => modelPos.position.x === highlightMesh.position.x &&  modelPos.position.z === highlightMesh.position.z)
      
     
            // CASE 1 : THERE IS AN EXISTING OBJECT
     
            if(intersect(intersects, raycaster, planeMesh).length > 0 && objectExist) {
                //STEP 1: SUM THE HEIGHT
                //STEP 2: ADD THE TOTAL HEIGHT TO POSITION Y
                // eslint-disable-next-line no-inner-declarations
                function calculateSum(array, property) {
                  const total = array.reduce((accumulator, object) => {
                    return accumulator + object[property];
                  }, 0);
                
                  return total;
                }
                const totalHeigh = calculateSum(avengers, 'height');
                const totalHeight = totalHeigh.toFixed(2)
                // GET A COPY OF THE SELECTED MODEL
                const stagClone = stag[0].clone();
                // ASSIGN A BOX HELPER TO MEASURE ITS SIZE
                let bbox = new THREE.Box3().setFromObject(stagClone.children[0]);
                // FOR SOME REASON, IT'S GIVING THE DOUBLE SUM 
                // I NEED TO DIVIDE IT BY 2    
                let size = bbox.getSize(new THREE.Vector3());

                // ADD THE MODEL TO THE SCENE WITH THE CORRECT POSITION
                stagClone.position.set(
                   highlightMesh.position.x,
                  highlightMesh.position.y + totalHeight,
                  highlightMesh.position.z,
                );
                scene.add(stagClone);


                  // ADD THE MODEL TO A VARIBLE IN ORDER TO SAVE IT 
                // IN THE LOCAL STORAGE
                objects.push(stagClone);
                highlightMesh.material.color.setHex(0xFF6666);

                let addedModels = {
                  name: stagClone.children[0].name,
                  height: size.y / 2,
                  position: {
                      x: highlightMesh.position.x,
                      y: highlightMesh.position.y + totalHeight,
                      // y: highlightMesh.position.y,
                      z: highlightMesh.position.z,
                  }
                }
                listofmodels.push(addedModels)
              console.log("list of models in that mesh", listofmodels);
            }



            // CASE 2 : THERE IS NO EXISTING OBJECT
            else if (intersect(intersects, raycaster, planeMesh).length > 0 && !objectExist) {
              const stagClone = stag[0].clone();
              console.log(" initial position of cube", stagClone.position);
  
              stagClone.position.set(
                 highlightMesh.position.x,
                 highlightMesh.position.y,
                // highlightMesh.position.y,

                highlightMesh.position.z,
              );
              scene.add(stagClone);
              objects.push(stagClone);
              highlightMesh.material.color.setHex(0xFF6666);
              console.log("position of cube", highlightMesh.position);
              console.log("details of cube", stagClone.children[0].name);

              
              let bbox = new THREE.Box3().setFromObject(stagClone.children[0]);    
              let size = bbox.getSize(new THREE.Vector3());
              
              let addedModels = {
                name: stagClone.children[0].name,
                height: size.y / 2,
                position: {
                    x: highlightMesh.position.x,
                    y: highlightMesh.position.y ,

                    z: highlightMesh.position.z,
                }
              }
              listofmodels.push(addedModels)
              //TASK: THERE'S A BUG HAPPENING WHEN THE USER RELOAD THE PAGE AFTER SAVING
              // AND WANTING TO ADD MODELS IN AN EXISTING OCCUPIED SPACE, THE FUNCTION DONT ADD TO 
              // THE HIGHEST POINT BUT IT STARTS FROM THE BEGINING AS IF THERE S NO EXISTING OBJECT 
              console.log("list of models in that mesh", listofmodels);
          }
    }