import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export  function loadScene( selectedModel, stag) {
    let assetLoader = new GLTFLoader()
        console.log("load scene", selectedModel);
        
        assetLoader.load(selectedModel[0].href, function(gltf) {
            const model = gltf.scene;
            console.log(model.children[0].name) 
                model.scale.set(0.5,0.5,0.5);
                model.isDraggable = true;
                let object = model.children[0]
                object.traverse(function(child) {
                    if (child instanceof THREE.Mesh) {
                  child.material.metalness = 0

                        }
                      }
                  )
             
                stag.push(model);
            
          
            console.log(stag);
        }, undefined, function(error) {
            console.error(error);
        });
}
