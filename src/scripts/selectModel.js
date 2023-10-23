import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
let assetLoader = new GLTFLoader()




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
        model.isDraggable = true;

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              child.castShadow = true
              }
              });
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
    model.isDraggable = true;

    model.traverse( function(child) {
        if (child instanceof THREE.Mesh) {
          child.material.metalness = 0
          }
          });
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
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
            console.log("this is true");
    model.scale.set(0.5,0.5,0.5);
        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = -0.5
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
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
        model.scale.set(0.75,0.75,0.75);
        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = -0.25
              }
              });
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
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
    
    
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
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(1.5,1.5,1.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addfarmLevel13(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[9])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[10])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addBarrel(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[11])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(1.5,1.5,1.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addCrate_Big_Stack2(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[12])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(1,1,1);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addDock_FirstAge(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[13])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addFarm_FirstAge_Level2_Wheat(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[14])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addHouses_FirstAge_1_Level3(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[15])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addHouses_FirstAge_2_Level3(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[16])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addHouses_FirstAge_3_Level2(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[17])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addMarket_FirstAge_Level3(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[18])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addHouses_SecondAge_2_Level3(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[19])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addHouses_SecondAge_3_Level3(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[20])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addMarket_SecondAge_Level3(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[21])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addMine(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[22])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addPort_FirstAge_Level2(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[23])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              child.position.y = 0.40

              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addPort_FirstAge_Level3(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[24])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);

        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              child.position.y = 0.40

              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

export function addPort_SecondAge_Level3(selectedModel, stag, models) {
    while(selectedModel.length > 0) {
        selectedModel.pop();
    }
    while(stag.length > 0) {
        stag.pop();
    }
    selectedModel.push(models[25])
    assetLoader.load(selectedModel[0].href, function(gltf) {
        const model = gltf.scene;
    model.scale.set(0.5,0.5,0.5);


        model.traverse( function(child) {
            if (child instanceof THREE.Mesh) {
              child.material.metalness = 0
              child.position.y = 0.40

              }
              });
        stag.push(model);
        console.log(stag);
    }, undefined, function(error) {
        console.error(error);
    });
}

// export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
//     while(selectedModel.length > 0) {
//         selectedModel.pop();
//     }
//     while(stag.length > 0) {
//         stag.pop();
//     }
//     selectedModel.push(models[10])
//     assetLoader.load(selectedModel[0].href, function(gltf) {
//         const model = gltf.scene;
//     model.scale.set(0.5,0.5,0.5);

//         model.traverse( function(child) {
//             if (child instanceof THREE.Mesh) {
//               child.material.metalness = 0
//               }
//               });
//         stag.push(model);
//         console.log(stag);
//     }, undefined, function(error) {
//         console.error(error);
//     });
// }
//
// export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
//     while(selectedModel.length > 0) {
//         selectedModel.pop();
//     }
//     while(stag.length > 0) {
//         stag.pop();
//     }
//     selectedModel.push(models[10])
//     assetLoader.load(selectedModel[0].href, function(gltf) {
//         const model = gltf.scene;
//     model.scale.set(0.5,0.5,0.5);

//         model.traverse( function(child) {
//             if (child instanceof THREE.Mesh) {
//               child.material.metalness = 0
//               }
//               });
//         stag.push(model);
//         console.log(stag);
//     }, undefined, function(error) {
//         console.error(error);
//     });
// }

// export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
//     while(selectedModel.length > 0) {
//         selectedModel.pop();
//     }
//     while(stag.length > 0) {
//         stag.pop();
//     }
//     selectedModel.push(models[10])
//     assetLoader.load(selectedModel[0].href, function(gltf) {
//         const model = gltf.scene;
//     model.scale.set(0.5,0.5,0.5);

//         model.traverse( function(child) {
//             if (child instanceof THREE.Mesh) {
//               child.material.metalness = 0
//               }
//               });
//         stag.push(model);
//         console.log(stag);
//     }, undefined, function(error) {
//         console.error(error);
//     });
// }

// export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
//     while(selectedModel.length > 0) {
//         selectedModel.pop();
//     }
//     while(stag.length > 0) {
//         stag.pop();
//     }
//     selectedModel.push(models[10])
//     assetLoader.load(selectedModel[0].href, function(gltf) {
//         const model = gltf.scene;
//     model.scale.set(0.5,0.5,0.5);

//         model.traverse( function(child) {
//             if (child instanceof THREE.Mesh) {
//               child.material.metalness = 0
//               }
//               });
//         stag.push(model);
//         console.log(stag);
//     }, undefined, function(error) {
//         console.error(error);
//     });
// }

// export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
//     while(selectedModel.length > 0) {
//         selectedModel.pop();
//     }
//     while(stag.length > 0) {
//         stag.pop();
//     }
//     selectedModel.push(models[10])
//     assetLoader.load(selectedModel[0].href, function(gltf) {
//         const model = gltf.scene;
//     model.scale.set(0.5,0.5,0.5);

//         model.traverse( function(child) {
//             if (child instanceof THREE.Mesh) {
//               child.material.metalness = 0
//               }
//               });
//         stag.push(model);
//         console.log(stag);
//     }, undefined, function(error) {
//         console.error(error);
//     });
// }

// export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
//     while(selectedModel.length > 0) {
//         selectedModel.pop();
//     }
//     while(stag.length > 0) {
//         stag.pop();
//     }
//     selectedModel.push(models[10])
//     assetLoader.load(selectedModel[0].href, function(gltf) {
//         const model = gltf.scene;
//     model.scale.set(0.5,0.5,0.5);

//         model.traverse( function(child) {
//             if (child instanceof THREE.Mesh) {
//               child.material.metalness = 0
//               }
//               });
//         stag.push(model);
//         console.log(stag);
//     }, undefined, function(error) {
//         console.error(error);
//     });
// }

// export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
//     while(selectedModel.length > 0) {
//         selectedModel.pop();
//     }
//     while(stag.length > 0) {
//         stag.pop();
//     }
//     selectedModel.push(models[10])
//     assetLoader.load(selectedModel[0].href, function(gltf) {
//         const model = gltf.scene;
//     model.scale.set(0.5,0.5,0.5);

//         model.traverse( function(child) {
//             if (child instanceof THREE.Mesh) {
//               child.material.metalness = 0
//               }
//               });
//         stag.push(model);
//         console.log(stag);
//     }, undefined, function(error) {
//         console.error(error);
//     });
// }

// export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
//     while(selectedModel.length > 0) {
//         selectedModel.pop();
//     }
//     while(stag.length > 0) {
//         stag.pop();
//     }
//     selectedModel.push(models[10])
//     assetLoader.load(selectedModel[0].href, function(gltf) {
//         const model = gltf.scene;
//     model.scale.set(0.5,0.5,0.5);

//         model.traverse( function(child) {
//             if (child instanceof THREE.Mesh) {
//               child.material.metalness = 0
//               }
//               });
//         stag.push(model);
//         console.log(stag);
//     }, undefined, function(error) {
//         console.error(error);
//     });
// }

// export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
//     while(selectedModel.length > 0) {
//         selectedModel.pop();
//     }
//     while(stag.length > 0) {
//         stag.pop();
//     }
//     selectedModel.push(models[10])
//     assetLoader.load(selectedModel[0].href, function(gltf) {
//         const model = gltf.scene;
//     model.scale.set(0.5,0.5,0.5);

//         model.traverse( function(child) {
//             if (child instanceof THREE.Mesh) {
//               child.material.metalness = 0
//               }
//               });
//         stag.push(model);
//         console.log(stag);
//     }, undefined, function(error) {
//         console.error(error);
//     });
// }

// export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
//     while(selectedModel.length > 0) {
//         selectedModel.pop();
//     }
//     while(stag.length > 0) {
//         stag.pop();
//     }
//     selectedModel.push(models[10])
//     assetLoader.load(selectedModel[0].href, function(gltf) {
//         const model = gltf.scene;
//     model.scale.set(0.5,0.5,0.5);

//         model.traverse( function(child) {
//             if (child instanceof THREE.Mesh) {
//               child.material.metalness = 0
//               }
//               });
//         stag.push(model);
//         console.log(stag);
//     }, undefined, function(error) {
//         console.error(error);
//     });
// }

// export function addArcherySecondAgeLevel3(selectedModel, stag, models) {
//     while(selectedModel.length > 0) {
//         selectedModel.pop();
//     }
//     while(stag.length > 0) {
//         stag.pop();
//     }
//     selectedModel.push(models[10])
//     assetLoader.load(selectedModel[0].href, function(gltf) {
//         const model = gltf.scene;
//     model.scale.set(0.5,0.5,0.5);

//         model.traverse( function(child) {
//             if (child instanceof THREE.Mesh) {
//               child.material.metalness = 0
//               }
//               });
//         stag.push(model);
//         console.log(stag);
//     }, undefined, function(error) {
//         console.error(error);
//     });
// }