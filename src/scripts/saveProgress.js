

export function saveProgress(scene, listofmodels, getactiveStorage) {
 
        // const json = scene.toJSON();
        // TO GET THE NAME OF THE MODEL
        let sceneContent = scene.children
        console.log("content of list of models",listofmodels);
        console.log("list of scene children",sceneContent);
       
    
        if (getactiveStorage === null) {
             localStorage.clear();
            localStorage.setItem('active', "active")
            localStorage.setItem("listofobjects", JSON.stringify(listofmodels))
            console.log("saved items when there's NO save", JSON.parse(localStorage.getItem("listofobjects")));
        }
        else if (getactiveStorage === "active") {
                // correct method
                  // "Producing Code" (May take some time)
                console.log("list of models to be added",listofmodels);
                  
                  let modelsInStorage = JSON.parse(localStorage.getItem("listofobjects"))
                console.log("models in storage before setting storage",modelsInStorage);
    
                  console.log("current models in storage",  modelsInStorage);
                  for (let i = 0; i < listofmodels.length; i++) {
                  modelsInStorage.push(listofmodels[i])
                  }
                  var result = modelsInStorage.reduce((unique, o) => {
                    if(!unique.some(obj => obj.name === o.name && obj.position.x === o.position.x && obj.position.z === o.position.z )) {
                      unique.push(o);
                    }
                console.log(result);
    
                console.log("clean models", unique);
                localStorage.setItem("listofobjects", JSON.stringify(unique))
    
                    return unique;
                    
                },[]);
        }
}
