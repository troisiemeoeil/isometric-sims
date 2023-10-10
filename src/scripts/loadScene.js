import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export  function loadScene( selectedModel, stag) {
    let assetLoader = new GLTFLoader()
        console.log("load scene", selectedModel);
        
        assetLoader.load(selectedModel[0].href, function(gltf) {
            const model = gltf.scene;
            console.log(model.children[0].name) 
            if (model.children[0].name === "snow_tile") {
                console.log("this is true");
            model.scale.set(1,1,1);
            let meshArr = model.children[0].children
            for (let i = 0; i < meshArr.length; i++) {
              meshArr[i].material.metalness = 0
            }
            stag.push(model);
            }
            else {
                model.scale.set(0.5,0.5,0.5);
                let meshArr = model.children[0].children
                for (let i = 0; i < meshArr.length; i++) {
                  meshArr[i].material.metalness = 0
                }
                stag.push(model);
            }
          
            console.log(stag);
        }, undefined, function(error) {
            console.error(error);
        });
}
