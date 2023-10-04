import {intersect } from './Raycast';


export  function deleteModel(e, intersects, raycaster, planeMesh, objects, highlightMesh, selectedObj) {
 
        switch (e.code) {
            case 'KeyX':
            
                if(intersect(intersects, raycaster, planeMesh).length > 0) {
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
    


}
