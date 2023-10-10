import * as THREE from 'three';

export function Raycast(e,mousePosition, raycaster, intersects, camera, planeMesh, highlightMesh, objects) {
    mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
  
    raycaster.setFromCamera(mousePosition, camera);
    intersects = raycaster.intersectObject(planeMesh);
    if(intersects.length > 0) {
        const intersect = intersects[0];
        const highlightPos = new THREE.Vector3().copy(intersect.point).floor().addScalar(0.5);
        highlightMesh.position.set(highlightPos.x, 0, highlightPos.z);
     

        const objectExist = objects.find(function(object) {
            return (object.position.x === mousePosition.x)
            && (object.position.z === mousePosition.z)
        });
        
        if(!objectExist)
            highlightMesh.material.color.setHex(0x96B6C5);
        else
            {
             
                highlightMesh.material.color.setHex(0xFCAEAE);
            }
    }


 
}

export function intersect(intersects, raycaster, planeMesh) {
    return intersects = raycaster.intersectObject(planeMesh)
}
