import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
let assetLoader = new GLTFLoader()

export function addRoadSquare(selectedModel, stag, models) {
    
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[9])
    console.log(selectedModel);
}


export function addBuilding(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[0])
    console.log(selectedModel);

    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
            console.log("this is true");
        model.scale.set(0.5,0.5,0.5);
        let meshArr = model.children[0].children
        for (let i = 0; i < meshArr.length; i++) {
          meshArr[i].material.metalness = 0
        }
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addskyScraperBtn(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[1])
    console.log("adding skyscrapper", selectedModel);

assetLoader.load(selectedModel[0].href, function(gltf) {
    const model = gltf.scene;
        console.log("this is true");
    model.scale.set(0.5,0.5,0.5);
    let meshArr = model.children[0].children
    for (let i = 0; i < meshArr.length; i++) {
      meshArr[i].material.metalness = 0
    }
    stag.push(model);
    console.log(stag);
}, undefined, function(error) {
    console.error(error);
});
}


export function adddetail_awningWide(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[2])
}

export function addlowBuilding(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[3])

    
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
        model.scale.set(1,0.5,1);
        let meshArr = model.children[0].children
        for (let i = 0; i < meshArr.length; i++) {
          meshArr[i].material.metalness = 0
        }
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addsmallBuildingmodel(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[4])
}

export function addoakTreemodel(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[5])
}

export function addpalmTreemodel(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[6])
}


export function addpineTreemodel(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[7])
}


export function addplateauFallmodel(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[8])
}
