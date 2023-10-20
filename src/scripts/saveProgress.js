

export function saveProgress(scene, listofmodels, getactiveStorage) {
 
        // const json = scene.toJSON();
        // TO GET THE NAME OF THE MODEL
        let sceneContent = scene.children
        console.log("content of list of models",listofmodels);
        console.log("list of scene children",sceneContent);

    
        if (getactiveStorage === null) {
            let savedItems = []
            for (let i = 95; i < sceneContent.length; i++) {
              savedItems.push({
                name: sceneContent[i].children[0].name,
                position: {
                  x: sceneContent[i].position.x,
                  y: sceneContent[i].position.y,
                  z: sceneContent[i].position.z,
                }
              })
              }

              localStorage.clear();
              localStorage.setItem('active', "active")
              localStorage.setItem("listofobjects", JSON.stringify(savedItems))
            console.log("saved items when there's NO save", JSON.parse(localStorage.getItem("listofobjects")));
        }
        else if (getactiveStorage === "active") {
                // correct method
                  let savedItems = []
            for (let i = 95; i < sceneContent.length; i++) {
              savedItems.push({
                name: sceneContent[i].children[0].name,
                position: {
                  x: sceneContent[i].position.x,
                  y: sceneContent[i].position.y,
                  z: sceneContent[i].position.z,
                }
              })
              }

              localStorage.clear();
              localStorage.setItem('active', "active")
              localStorage.setItem("listofobjects", JSON.stringify(savedItems))
            console.log("saved items when there's NO save", JSON.parse(localStorage.getItem("listofobjects")));
        }
}
