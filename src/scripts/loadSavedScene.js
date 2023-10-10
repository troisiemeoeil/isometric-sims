
export  function loadSavedScene(scene, assetLoader, models) {
 
        const listofSavedModels =  JSON.parse(localStorage.getItem("listofobjects"))
            for (let i = 0; i < listofSavedModels.length; i++) {
              //list of saved models returns an array of the name and position of each model
                if (listofSavedModels[i].name === "house_type06") {
                    // camera.position.set(10,-15,22)
                    assetLoader.load(models[0].href, function(gltf) {
                        const model = gltf.scene;
                        model.scale.set(0.5, 0.5, 0.5);
                        model.position.copy(listofSavedModels[i].position);
                        let meshArr = model.children[0].children
                        for (let i = 0; i < meshArr.length; i++) {
                          meshArr[i].material.metalness = 0
                        }
                  scene.add(model);
                    }, undefined, function(error) {
                        console.error(error);
                    });
                }
                else if(listofSavedModels[i].name === "house_type16") {    
                    assetLoader.load(models[1].href, function(gltf) {
                        const model = gltf.scene;
                        model.scale.set(0.5, 0.5, 0.5);
                        model.position.copy(listofSavedModels[i].position);
                        let meshArr = model.children[0].children
                        for (let i = 0; i < meshArr.length; i++) {
                          meshArr[i].material.metalness = 0
                        }
                  scene.add(model);
                    }, undefined, function(error) {
                        console.error(error);
                    });
                }
                else if(listofSavedModels[i].name === "house_type21") {
                    assetLoader.load(models[2].href, function(gltf) {
                        const model = gltf.scene;
                        model.scale.set(0.5, 0.5, 0.5);
                        model.position.copy(listofSavedModels[i].position);
                        let meshArr = model.children[0].children
                        for (let i = 0; i < meshArr.length; i++) {
                          meshArr[i].material.metalness = 0
                        }
                  scene.add(model);
                    }, undefined, function(error) {
                        console.error(error);
                    });
                }
    
                else if(listofSavedModels[i].name === "snow_tile") {
                    assetLoader.load(models[3].href, function(gltf) {
                        const model = gltf.scene;
                        model.scale.set(1, 0.5, 1);
                        model.position.copy(listofSavedModels[i].position);
                        let meshArr = model.children[0].children
                        for (let i = 0; i < meshArr.length; i++) {
                          meshArr[i].material.metalness = 0
                        }
                  scene.add(model);
                    }, undefined, function(error) {
                        console.error(error);
                    });
                }
                
                else if(listofSavedModels[i].name === "towerRound_crystals") {
                    assetLoader.load(models[4].href, function(gltf) {
                        const model = gltf.scene;
                        model.scale.set(0.5, 0.5, 0.5);
                        model.position.copy(listofSavedModels[i].position);
                        let meshArr = model.children[0].children
                        for (let i = 0; i < meshArr.length; i++) {
                          meshArr[i].material.metalness = 0
                        }
                  scene.add(model);
                    }, undefined, function(error) {
                        console.error(error);
                    });
                }
                
                else if(listofSavedModels[i].name === "tree_oak_fall") {
                    assetLoader.load(models[5].href, function(gltf) {
                        const model = gltf.scene;
                        model.scale.set(0.5, 0.5, 0.5);
                        model.position.copy(listofSavedModels[i].position);
                        let meshArr = model.children[0].children
                        for (let i = 0; i < meshArr.length; i++) {
                          meshArr[i].material.metalness = 0
                        }
                  scene.add(model);
                    }, undefined, function(error) {
                        console.error(error);
                    });
                }
                else if(listofSavedModels[i].name === "tree_palmTall") {
                    assetLoader.load(models[6].href, function(gltf) {
                        const model = gltf.scene;
                        model.scale.set(0.5, 0.5, 0.5);
                        model.position.copy(listofSavedModels[i].position);
                        let meshArr = model.children[0].children
                        for (let i = 0; i < meshArr.length; i++) {
                          meshArr[i].material.metalness = 0
                        }
                  scene.add(model);
                    }, undefined, function(error) {
                        console.error(error);
                    });
                }
                else if(listofSavedModels[i].name === "tree_pineDefaultA") {
                    assetLoader.load(models[7].href, function(gltf) {
                        const model = gltf.scene;
                        model.scale.set(0.5, 0.5, 0.5);
                        model.position.copy(listofSavedModels[i].position);
                        let meshArr = model.children[0].children
                        for (let i = 0; i < meshArr.length; i++) {
                          meshArr[i].material.metalness = 0
                        }
                  scene.add(model);
                    }, undefined, function(error) {
                        console.error(error);
                    });
                }
    
                else if(listofSavedModels[i].name === "tree_plateau_fall") {
                    assetLoader.load(models[8].href, function(gltf) {
                        const model = gltf.scene;
                        model.scale.set(0.5, 0.5, 0.5);
                        model.position.copy(listofSavedModels[i].position);
                        let meshArr = model.children[0].children
                        for (let i = 0; i < meshArr.length; i++) {
                          meshArr[i].material.metalness = 0
                        }
                  scene.add(model);
                    }, undefined, function(error) {
                        console.error(error);
                    });
                }
            }
      
}
