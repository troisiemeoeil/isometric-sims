import {intersect } from './Raycast';
import addModelSound from './audio/addModelSound';


export  function addModel(scene, intersects, raycaster, planeMesh, objects, highlightMesh, stag, listofmodels) {
    addModelSound()
        console.log(stag);
    intersect(intersects, raycaster, planeMesh)
        const objectExist = objects.find(function(object) {
            return (object.position.x === highlightMesh.position.x)
            && (object.position.z === highlightMesh.position.z)
        });
        const avengers = listofmodels.filter(modelPos => modelPos.position.x === highlightMesh.position.x)
     
     
            if(intersect(intersects, raycaster, planeMesh).length > 0 && objectExist) {
                const stagClone = stag[0].clone();
                console.log(" initial position of cube", stagClone.position);
                console.log("existing blocks in this mesh",avengers);
                console.log(listofmodels);
                stagClone.position.set(
                   highlightMesh.position.x,
                //   highlightMesh.position.y + ((avengers.length) * 0.8),
                  highlightMesh.position.y,

                  highlightMesh.position.z,
                );
                scene.add(stagClone);
                objects.push(stagClone);
                highlightMesh.material.color.setHex(0xFF6666);
                let addedModels = {
                  name: stagClone.children[0].name,
                  position: {
                      x: highlightMesh.position.x,
                    //   y: highlightMesh.position.y + ((avengers.length) * 0.8),
                      y: highlightMesh.position.y,
                      z: highlightMesh.position.z,
                  }
                }
                listofmodels.push(addedModels)
            }
            else if (intersect(intersects, raycaster, planeMesh).length > 0 && !objectExist) {
              const stagClone = stag[0].clone();
              console.log(" initial position of cube", stagClone.position);
  
              stagClone.position.set(
                 highlightMesh.position.x,
                //  highlightMesh.position.y + ((avengers.length) * 0.8),
                highlightMesh.position.y,

                highlightMesh.position.z,
              );
              scene.add(stagClone);
              objects.push(stagClone);
              highlightMesh.material.color.setHex(0xFF6666);
              console.log("position of cube", highlightMesh.position);
              console.log("details of cube", stagClone.children[0].name);
              let addedModels = {
                name: stagClone.children[0].name,
                position: {
                    x: highlightMesh.position.x,
                    // y: highlightMesh.position.y + ((avengers.length) * 0.8),
                    y: highlightMesh.position.y,

                    z: highlightMesh.position.z,
                }
              }
              listofmodels.push(addedModels)
          }
    }
