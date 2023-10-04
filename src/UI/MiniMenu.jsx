

import "../miniMenu.css"


function MiniMenu() {


  function reset() {
    localStorage.clear();
    location.reload()
  }
  return (
    <div className="menu__content__inventory">
    <div className="inventory--hotbar">
      <div className="items__container">
        <span className="items__number items__number--first">1</span>
        <div className="item__container" draggable="true"  id='largeBuildingBtn'>
          <img className="item__img" src="https://assets.codepen.io/7237686/infinity_blade.svg?format=auto" alt="infinity_blade" draggable="false" />
          <div className="item__tooltip" draggable="false">
            <div className="item__tooltip__title">
              <h2>Infinity Blade</h2>
            </div>
            <div className="item__tooltip__info">
              The true form of the Galaxy Sword
            </div>
          </div>
        </div>
      </div>
      <div className="items__container" id='skyScraperBtn'>
        <span className="items__number">2</span>
        <div className="item__container" draggable="true">
          <img className="item__img" src="https://assets.codepen.io/7237686/iridium_pickaxe.svg?format=auto" alt="iridium_pickaxe" draggable="false" />
          <div className="item__tooltip" draggable="false">
            <div className="item__tooltip__title">
              <h2>Iridium Pickaxe</h2>
            </div>
            <div className="item__tooltip__info">Used to break stones.</div>
          </div>
        </div>
      </div>
      <div className="items__container" id="detail_awningWide" >
        <span className="items__number">3</span>
        <div className="item__container" draggable="true">
          <img className="item__img" src="https://assets.codepen.io/7237686/iridium_axe.svg?format=auto" alt="iridium_axe" draggable="false" />
          <div className="item__tooltip" draggable="false">
            <div className="item__tooltip__title">
              <h2>Iridium Axe</h2>
         
            </div>
            <div className="item__tooltip__info">Used to chop wood.</div>
          </div>
        </div>
      </div>
      <div className="items__container"  id="lowBuilding">
        <span className="items__number">4</span>
        <div className="item__container" draggable="true">
          <img className="item__img" src="https://assets.codepen.io/7237686/iridium_hoe.svg?format=auto" alt="iridium_hoe" draggable="false" />
          <div className="item__tooltip" draggable="false">
            <div className="item__tooltip__title">
              <h2>Iridium Hoe</h2>
          
            </div>
            <div className="item__tooltip__info">
              Used to dig and till soil.
            </div>
          </div>
        </div>
      </div>
      <div className="items__container" id="smallBuilding">
        <span className="items__number">5</span>
        <div className="item__container" draggable="true">
          <img className="item__img" src="https://assets.codepen.io/7237686/iridium_watering_can.svg?format=auto" alt="iridium_watering_can" draggable="false" />
          <div className="item__tooltip" draggable="false">
            <div className="item__tooltip__title">
              <h2>Iridium Hoe</h2>
            
            </div>
            <div className="item__tooltip__info">
              Used to water crops. It can be refilled at any water source
            </div>
          </div>
        </div>
      </div>
      <div className="items__container" id="oakTree">
        <span className="items__number">6</span>
        <div className="item__container" draggable="true">
          <img className="item__img" src="https://assets.codepen.io/7237686/golden_scythe.svg?format=auto" alt="golden_scythe" draggable="false" />
          <div className="item__tooltip" draggable="false">
            <div className="item__tooltip__title">
              <h2>Golden Scythe</h2>
           
            </div>
            <div className="item__tooltip__info">
              It is more powerful than a normal scythe.
            </div>
          </div>
        </div>
      </div>
      <div className="items__container" id="palmTree">
        <span className="items__number">7</span>
        <div className="item__container" draggable="true">
          <img className="item__img" src="https://assets.codepen.io/7237686/copper_pan.svg?format=auto" alt="copper_pan" draggable="false" />
          <div className="item__tooltip" draggable="false">
            <div className="item__tooltip__title">
              <h2>Copper Pan</h2>
             
            </div>
            <div className="item__tooltip__info">
              Use to gather ore from streams.
            </div>
          </div>
        </div>
      </div>
      <div className="items__container" id="pineTree">
        <span className="items__number">8</span>
        <div className="item__container"></div>
      </div>
      <div className="items__container" id="plateauFall">
        <span className="items__number">9</span>
        <div className="item__container"></div>
      </div>
      <div className="items__container" >
        <span className="items__number">0</span>
        <div className="item__container"></div>
      </div>
      <div className="items__container"  id="saveBtn">
        <span className="items__number">-</span>
        <div className="item__container"></div>
      </div>
      <div className="items__container" onClick={reset} >
        <span className="items__number">=</span>
        <div className="item__container"></div>
      </div>
    </div>
  
  </div>
  )
}

export default MiniMenu