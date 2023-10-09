


export  function deleteModel(e, scene, deletedModel, box) {
 
        switch (e.code) {
            case 'KeyX':
            
            deletedModel.parent.remove(deletedModel)
            scene.remove(box)
                break  
        }          
    


}
