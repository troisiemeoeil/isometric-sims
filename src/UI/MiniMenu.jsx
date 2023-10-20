

import { useEffect, useState } from "react";
import ItemContainer from "./itemContainer/ItemContainer";

import "./minimenu.css"


function MiniMenu() {
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setIsOn((prevState) => !prevState);
        console.log(isOn);

      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }

  }, [isOn]);
  

 
useEffect(()=> {
  
  const inventory = document.getElementById('inventory')
  
  const full_inventory = document.getElementById('full_inventory')
  const inventoryhotbar = document.querySelector('.inventory--hotbar')
  const menu = document.querySelector('.menu')
  const menu__tabs__container = document.querySelector('.menu__tabs__container')


  // const marquee = document.querySelector('.marquee')
  const canvas = document.querySelector('#canvas')

  if (isOn === false) {
    inventory.style.bottom = '20%'
    full_inventory.style.display = 'grid'
    menu.style.height = '100%'
    menu.style.top = '20vh'

    menu__tabs__container.style.top = "33%"
    // marquee.style.zIndex = '1'
  

    canvas.classList.add("addBlur");

    // marquee.classList.add("addBlur");
    // console.log(marquee);
  }
  else {
    inventory.style.bottom = '0%'
    full_inventory.style.display = 'none'
    menu.style.height = '25%'
    menu.style.top = '68vh'
    // marquee.style.zIndex = '0'
    // marquee.style.opacity = '1'

    canvas.classList.remove("addBlur");
    // marquee.classList.remove("addBlur");

  }

  for (const child of inventoryhotbar.children) {
    console.log(child.tagName);
  }




}, [isOn])

  function reset() {
    localStorage.clear();
    location.reload()
  }
  return (
 <div className="menu">
    <div className="menu__tabs__container">
    <div className="btn menu__tab menu__tab--active disabled">
      <img src="https://assets.codepen.io/7237686/backpack.svg?format=auto" className="menu__img" alt="inventory_tab_image" />
      <span className="tooltip" id="tp1">Inventory</span>
    </div>
    <div className="btn menu__tab disabled">
      <img src="https://assets.codepen.io/7237686/avatar.svg?format=auto" className="menu__img" alt="inventory_tab_image" />
      <span className="tooltip" id="tp2" >Skills</span>
    </div>
    <div className="btn menu__tab disabled">
      <img src="https://assets.codepen.io/7237686/heart.svg?format=auto" className="menu__img" alt="inventory_tab_image" />
      <span className="tooltip" id="tp3" >Socials</span>
    </div>
    <div className="btn menu__tab disabled">
      <img src="https://assets.codepen.io/7237686/map.svg?format=auto" className="menu__img" alt="inventory_tab_image" />
      <span className="tooltip" id="tp4" >Map</span>
    </div>
    <div className="btn menu__tab disabled">
      <img src="https://assets.codepen.io/7237686/tool.svg?format=auto" className="menu__img" alt="inventory_tab_image" />
      <span className="tooltip" id="tp5" >Crafting</span>
    </div>
    <div className="btn menu__tab disabled">
      <img src="https://assets.codepen.io/7237686/bag.svg?format=auto" className="menu__img" alt="inventory_tab_image" />
      <span className="tooltip" id="tp6" >Collection</span>
    </div>
    <div className="btn menu__tab disabled">
      <img src="https://assets.codepen.io/7237686/console.svg?format=auto" className="menu__img" alt="inventory_tab_image" />
      <span className="tooltip" id="tp7" >Options</span>
    </div>
    <div className="btn menu__tab disabled">
      <img src="https://assets.codepen.io/7237686/close.svg?format=auto" className="menu__img" alt="inventory_tab_image" />
      <span className="tooltip" id="tp8" >Exit Game</span>
    </div>
  </div>
      <div id="inventory"  className="menu__content__inventory" >
    <div className="inventory--hotbar">

      {/* {render} */}
        <ItemContainer
          
          number="1"
          containerdraggable="true"
          id="largeBuildingBtn"
          imgUrl="./Model_Images/house_type06.png"
          alt="infinity_blade"
          imgDrag="false"
          tooltipDrag="false"
          title="Infinity Blade"
          description="The true form of the Galaxy Sword"
        />
        <ItemContainer
          number="2"
          containerdraggable="true"
          id="skyScraperBtn"
          imgUrl="./Model_Images/Barracks_SecondAge_Level3.png"
          alt="infinity_blade"
          imgDrag="false"
          tooltipDrag="false"
          title="Iridium Pickaxe"
          description="Used to break stones."
        />
   <ItemContainer
          number="3"
          containerdraggable="true"
          id="detail_awningWide"
          imgUrl="./Model_Images/TownCenter_SecondAge_Level3.png"
          alt="iridium_axe"
          imgDrag="false"
          tooltipDrag="false"
          title="Iridium Axe"
          description="Used to chop wood."
        />
      <ItemContainer
          number="4"
          containerdraggable="true"
          id="lowBuilding"
          imgUrl="./Model_Images/Wonder_SecondAge_Level3.png"
          alt="iridium_hoe"
          imgDrag="false"
          tooltipDrag="false"
          title="Iridium Hoe"
          description="Used to dig and till soil."
        />
      
      <ItemContainer
          number="5"
          containerdraggable="true"
          id="smallBuilding"
          imgUrl="./Model_Images/Barracks_SecondAge_Level1.png"
          alt="iridium_watering_can"
          imgDrag="false"
          tooltipDrag="false"
          title="Iridium Watering Can"
          description="Used to water crops. It can be refilled at any water source"
        />
    
    <ItemContainer
          number="6"
          containerdraggable="true"
          id="oakTree"
          imgUrl="./Model_Images/Houses_SecondAge_2_Level2.png"
          alt="golden_scythe"
          imgDrag="false"
          tooltipDrag="false"
          title="Golden Scythe"
          description="It is more powerful than a normal scythe."
        />

      <ItemContainer
          number="7"
          containerdraggable="true"
          id="palmTree"
          imgUrl="./Model_Images/Resource_PineTree_Group.png"
          alt="copper_pan"
          imgDrag="false"
          tooltipDrag="false"
          title="Copper Pan"
          description="Use to gather ore from streams."
        />
 
    
       <ItemContainer
          number="8"
          containerdraggable="true"
          id="pineTree"
          imgUrl="./Model_Images/Farm_Dirt_Level3.png"
          alt="copper_pan"
          imgDrag="false"
          tooltipDrag="false"
          title="Pine Tree"
          description=" Use to gather ore from streams."
        />
   

       <ItemContainer
          number="9"
          containerdraggable="true"
          id="plateauFall"
          imgUrl="./Model_Images/Resource_Gold_3.png"
          alt="copper_pan"
          imgDrag="false"
          tooltipDrag="false"
          title="Plateau Fall"
          description=" Use to gather ore from streams."
        />
   
    
   
   <ItemContainer
          number="0"
          containerdraggable="true"
          id="farmLevel13"
          imgUrl="./Model_Images/Farm_SecondAge_Level3.png"
          alt="farmLevel13"
          imgDrag="false"
          tooltipDrag="false"
          title="Farm Level 13"
          description=" Use to gather ore from streams."
        />

      <div className="items__container" >
        <span className="items__number">-</span>
        <div className="item__container" draggable="true"  id="saveBtn">
          <img className="item__img" src="https://assets.codepen.io/7237686/console.svg?format=auto" alt="copper_pan" draggable="false" />
          <div className="item__tooltip" draggable="false">
            <div className="item__tooltip__title">
              <h2>Save Button</h2>
             
            </div>
            <div className="item__tooltip__info">
              Saves your progress in the game.
            </div>
          </div>
        </div>
      </div>
     
      <div className="items__container" onClick={reset}>
        <span className="items__number">=</span>
        <div className="item__container" draggable="true">
          <img className="item__img" src="https://assets.codepen.io/7237686/close.svg?format=auto" alt="menu__img" draggable="false" />
          <div className="item__tooltip" draggable="false">
            <div className="item__tooltip__title">
              <h2>Reset</h2>
             
            </div>
            <div className="item__tooltip__info">
              This action will delete your scene!
            </div>
          </div>
        </div>
      </div>
    </div>


    <div id="full_inventory" className="inventory--rows">
      
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/triple_shot_espresso.svg?format=auto" alt="triple_shot_espresso" draggable="false" />
            <span className="item__quantity">10</span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Triple Shot Espresso</h2>
                <h3 className="item__tooltip__category item__tooltip__category--cooking">
                  Cooking
                </h3>
              </div>
              <div className="item__tooltip__info">
                It s more potent than regular coffee!
                <ul className="health">
                  <li>
                    <img src="https://assets.codepen.io/7237686/energy.svg?format=auto" alt="energy" />
                    +8 Energy
                  </li>
                  <li>
                    <img src="https://assets.codepen.io/7237686/health.svg?format=auto" alt="health" />
                    +3 Health
                  </li>
                  <li>
                    <img src="https://assets.codepen.io/7237686/speed.svg?format=auto" alt="speed" />
                    +1 Speed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/coffee.svg?format=auto" alt="coffee" draggable="false" />
            <span className="item__quantity" draggable="false">120</span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Coffee</h2>
              </div>
              <div className="item__tooltip__info">
                It smells delicious. This is sure to give you a boost
                <ul className="health">
                  <li>
                    <img src="https://assets.codepen.io/7237686/energy.svg?format=auto" alt="energy" />
                    +3 Energy
                  </li>
                  <li>
                    <img src="https://assets.codepen.io/7237686/health.svg?format=auto" alt="health" />
                    +1 Health
                  </li>
                  <li>
                    <img src="https://assets.codepen.io/7237686/speed.svg?format=auto" alt="speed" />
                    +1 Speed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/cheese.svg?format=auto" alt="cheese" draggable="false" />
            <span className="item__quantity">8</span>
            <span className="item__quality">
              <img src="https://assets.codepen.io/7237686/gold_quality.svg?format=auto" alt="gold_quality" />
            </span>
            <div className="item__tooltip">
              <div className="item__tooltip__title">
                <h2>Cheese</h2>
                <h3 className="item__tooltip__category item__tooltip__category--goods">
                  Artisan Goods
                </h3>
              </div>
              <div className="item__tooltip__info">
                It s your basic cheese.
                <ul className="health">
                  <li>
                    <img src="https://assets.codepen.io/7237686/energy.svg?format=auto" alt="energy" />
                    +225 Energy
                  </li>
                  <li>
                    <img src="https://assets.codepen.io/7237686/health.svg?format=auto" alt="health" />
                    +101 Health
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/mango.svg?format=auto" alt="mango" draggable="false" />
            <span className="item__quantity">12</span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Mango</h2>
                <h3 className="item__tooltip__category item__tooltip__category--fruit">
                  Fruit
                </h3>
              </div>
              <div className="item__tooltip__info">
                A big, sweet tropical fruit with a unique flavor.
                <ul className="health">
                  <li>
                    <img src="https://assets.codepen.io/7237686/energy.svg?format=auto" alt="energy" />
                    +100 Energy
                  </li>
                  <li>
                    <img src="https://assets.codepen.io/7237686/health.svg?format=auto" alt="health" />
                    +45 Health
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/prismatic_shard.svg?format=auto" alt="prismatic_shard" draggable="false" />
            <span className="item__quantity">99</span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Prismatic Shard</h2>
                <h3 className="item__tooltip__category item__tooltip__category--mineral">
                  Mineral
                </h3>
              </div>
              <div className="item__tooltip__info">
                A very rare and powerful substance with unknown origins
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/sunflower.svg?format=auto" alt="sunflower" draggable="false" />
            <span className="item__quantity">10</span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Sunflower</h2>
                <h3 className="item__tooltip__category item__tooltip__category--flower">
                  Flower
                </h3>
              </div>

              <div className="item__tooltip__info">
                A tropical bloom that thrives in the humid summer air. Has a
                sweet, tangy aroma.
                <ul className="health">
                  <li>
                    <img src="https://assets.codepen.io/7237686/energy.svg?format=auto" alt="energy" />
                    +45 Energy
                  </li>
                  <li>
                    <img src="https://assets.codepen.io/7237686/health.svg?format=auto" alt="health" />
                    +20 Health
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/poppy_seeds.svg?format=auto" alt="poppy_seeds" draggable="false" />
            <span className="item__quantity">134</span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Poppy Seeds</h2>
                <h3 className="item__tooltip__category item__tooltip__category--seed">
                  Seed
                </h3>
              </div>
              <div className="item__tooltip__info">
                Plant in summer. Produces a bright red flower in 7 days.
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/tomato_seeds.svg?format=auto" alt="tomato_seeds" draggable="false" />
            <span className="item__quantity">56</span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Tomato Seeds</h2>
                <h3 className="item__tooltip__category item__tooltip__category--seed">
                  Seed
                </h3>
              </div>
              <div className="item__tooltip__info">
                Plant these in the summer. Takes 11 days to mature, and
                continues to produce after first harvest.
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/stone.svg?format=auto" alt="stone" draggable="false" />
            <span className="item__quantity">243</span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Stone</h2>
                <h3 className="item__tooltip__category item__tooltip__category--resource">
                  Resource
                </h3>
              </div>
              <div className="item__tooltip__info">
                A common material with many uses in crafting and building.
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/wood.svg?format=auto" alt="wood" draggable="false" />
            <span className="item__quantity">152</span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Wood</h2>
                <h3 className="item__tooltip__category item__tooltip__category--resource">
                  Resource
                </h3>
              </div>
              <div className="item__tooltip__info">
                A sturdy, yet flexible plant material with a wide variety of
                uses.
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/pink_cake.svg?format=auto" alt="pink_cake" draggable="false" />
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Pink Cake</h2>
                <h3 className="item__tooltip__category items__tooltip__category--cooking">
                  Cooking
                </h3>
              </div>
              <div className="item__tooltip__info">
                There s little heart candies on top.
                <ul className="health">
                  <li>
                    <img src="https://assets.codepen.io/7237686/energy.svg?format=auto" alt="energy" />
                    +250 Energy
                  </li>
                  <li>
                    <img src="https://assets.codepen.io/7237686/health.svg?format=auto" alt="health" />
                    +112 Health
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/strange_bun.svg?format=auto" alt="strange_bun" draggable="false" />
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Strange Bun</h2>
                <h3 className="item__tooltip__category item__tooltip__category--cooking">
                  Cooking
                </h3>
              </div>
              <div className="item__tooltip__info">
                What s inside?
                <ul className="health">
                  <li>
                    <img src="https://assets.codepen.io/7237686/energy.svg?format=auto" alt="energy" />
                    +100 Energy
                  </li>
                  <li>
                    <img src="https://assets.codepen.io/7237686/health.svg?format=auto" alt="health" />
                    +45 Health
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/mega_bomb.svg?format=auto" alt="mega_bomb" draggable="false" />
            <span className="item__quantity">16</span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Mega Bomb</h2>
                <h3 className="item__tooltip__category item__tooltip__category--crafting">
                  Crafting
                </h3>
              </div>
              <div className="item__tooltip__info">
                Generates a powerful explosion. Use with extreme caution.
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/corn.svg?format=auto" alt="corn" draggable="false" />
            <span className="item__quantity">30</span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Corn</h2>
                <h3 className="item__tooltip__category item__tooltip__category--vegetable">
                  Vegetable
                </h3>
              </div>
              <div className="item__tooltip__info">
                One of the most popular grains. The sweet, fresh cobs are a
                summer favorite.
                <ul className="health">
                  <li>
                    <img src="https://assets.codepen.io/7237686/energy.svg?format=auto" alt="energy" />
                    +25 Energy
                  </li>
                  <li>
                    <img src="https://assets.codepen.io/7237686/health.svg?format=auto" alt="health" />
                    +11 Health
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container" draggable="true">
            <img className="item__img" src="https://assets.codepen.io/7237686/tuna.svg?format=auto" alt="tuna" draggable="false" />
            <span className="item__quality">
              <img src="https://assets.codepen.io/7237686/gold_quality.svg?format=auto" alt="gold_quality" />
            </span>
            <div className="item__tooltip" draggable="false">
              <div className="item__tooltip__title">
                <h2>Tuna</h2>
                <h3 className="item__tooltip__category item__tooltip__category--fish">
                  Fish
                </h3>
              </div>
              <div className="item__tooltip__info">
                A large fish that lives in the ocean.
                <ul className="health">
                  <li>
                    <img src="https://assets.codepen.io/7237686/energy.svg?format=auto" alt="energy" />
                    +68 Energy
                  </li>
                  <li>
                    <img src="https://assets.codepen.io/7237686/health.svg?format=auto" alt="health" />
                    +30 Health
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="items__container">
          <div className="item__container"></div>
        </div>
        <div className="items__container">
          <div className="item__container"></div>
        </div>
        <div className="items__container">
          <div className="item__container"></div>
        </div>
        <div className="items__container">
          <div className="item__container"></div>
        </div>
        <div className="items__container">
          <div className="item__container"></div>
        </div>
        <div className="items__container">
          <div className="item__container"></div>
        </div>
        <div className="items__container">
          <div className="item__container"></div>
        </div>
        <div className="items__container">
          <div className="item__container"></div>
        </div>
        <div className="items__container">
          <div className="item__container"></div>
        </div>
      </div>
  
  </div>
  </div>

  )
}

export default MiniMenu