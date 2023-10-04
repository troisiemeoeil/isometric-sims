
import { useEffect } from "react"
import "./miniMenu.css"


function MiniMenu() {

    useEffect(()=> {
//=================TOOLTIP====================
let tooltip = document.querySelectorAll(".tooltip");
let itemTooltip = document.querySelectorAll(".item__tooltip");

document.addEventListener("mousemove", fn);

function fn(e) {
  tooltip.forEach((t) => {
    let x = e.clientX;
    let y = e.clientY;

    let newposX = x / 20;
    let newposY = y / 2;
    t.style.transform = "translate3d(" + newposX + "px," + newposY + "px,0px)";
  });

  itemTooltip.forEach((t) => {
    let x = e.clientX;
    let y = e.clientY;

    let newposX = x / 30;
    let newposY = y / 10;
    t.style.transform = "translate3d(" + newposX + "px," + newposY + "px,0px)";
  });
}

//=======DRAG AND DROP================
const items = document.querySelectorAll(".item__container");
const itemContainers = document.querySelectorAll(".items__container");

items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
});

itemContainers.forEach((square) => {
  square.addEventListener("dragover", dragOver);
  square.addEventListener("drop", dragDrop);
});

let beingDragged;

function dragStart(e) {
  beingDragged = e.target;

  let img = new Image();
  img.src =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
  e.dataTransfer.setDragImage(img, 0, 0);
}

function dragDrop(e) {
  if (e.target.tagName === "IMG") {
    return;
  }

  e.target.append(beingDragged);
}

function dragOver(e) {
  e.preventDefault();
}

    })


  return (
    <div className="menu">
    <div className="menu__content">
      <div className="menu__content__inventory">
        <div className="inventory--hotbar">
          <div className="items__container">
            <span className="items__number items__number--first">1</span>
            <div className="item__container" draggable="true">
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
          <div className="items__container">
            <span className="items__number">2</span>
            <div className="item__container" draggable="true">
              <img className="item__img" src="https://assets.codepen.io/7237686/iridium_pickaxe.svg?format=auto" alt="iridium_pickaxe" draggable="false" />
              <div className="item__tooltip" draggable="false">
                <div className="item__tooltip__title">
                  <h2>Iridium Pickaxe</h2>
                  <h3 className="item__tooltip__category item__tooltip__category--tool">
                    Tool
                  </h3>
                </div>
                <div className="item__tooltip__info">Used to break stones.</div>
              </div>
            </div>
          </div>
          <div className="items__container">
            <span className="items__number">3</span>
            <div className="item__container" draggable="true">
              <img className="item__img" src="https://assets.codepen.io/7237686/iridium_axe.svg?format=auto" alt="iridium_axe" draggable="false" />
              <div className="item__tooltip" draggable="false">
                <div className="item__tooltip__title">
                  <h2>Iridium Axe</h2>
                  <h3 className="item__tooltip__category item__tooltip__category--tool">
                    Tool
                  </h3>
                </div>
                <div className="item__tooltip__info">Used to chop wood.</div>
              </div>
            </div>
          </div>
          <div className="items__container">
            <span className="items__number">4</span>
            <div className="item__container" draggable="true">
              <img className="item__img" src="https://assets.codepen.io/7237686/iridium_hoe.svg?format=auto" alt="iridium_hoe" draggable="false" />
              <div className="item__tooltip" draggable="false">
                <div className="item__tooltip__title">
                  <h2>Iridium Hoe</h2>
                  <h3 className="item__tooltip__category item__tooltip__category--tool">
                    Tool
                  </h3>
                </div>
                <div className="item__tooltip__info">
                  Used to dig and till soil.
                </div>
              </div>
            </div>
          </div>
          <div className="items__container">
            <span className="items__number">5</span>
            <div className="item__container" draggable="true">
              <img className="item__img" src="https://assets.codepen.io/7237686/iridium_watering_can.svg?format=auto" alt="iridium_watering_can" draggable="false" />
              <div className="item__tooltip" draggable="false">
                <div className="item__tooltip__title">
                  <h2>Iridium Hoe</h2>
                  <h3 className="item__tooltip__category item__tooltip__category--tool">
                    Tool
                  </h3>
                </div>
                <div className="item__tooltip__info">
                  Used to water crops. It can be refilled at any water source
                </div>
              </div>
            </div>
          </div>
          <div className="items__container">
            <span className="items__number">6</span>
            <div className="item__container" draggable="true">
              <img className="item__img" src="https://assets.codepen.io/7237686/golden_scythe.svg?format=auto" alt="golden_scythe" draggable="false" />
              <div className="item__tooltip" draggable="false">
                <div className="item__tooltip__title">
                  <h2>Golden Scythe</h2>
                  <h3 className="item__tooltip__category item__tooltip__category--tool">
                    Tool
                  </h3>
                </div>
                <div className="item__tooltip__info">
                  It is more powerful than a normal scythe.
                </div>
              </div>
            </div>
          </div>
          <div className="items__container">
            <span className="items__number">7</span>
            <div className="item__container" draggable="true">
              <img className="item__img" src="https://assets.codepen.io/7237686/copper_pan.svg?format=auto" alt="copper_pan" draggable="false" />
              <div className="item__tooltip" draggable="false">
                <div className="item__tooltip__title">
                  <h2>Copper Pan</h2>
                  <h3 className="item__tooltip__category item__tooltip__category--tool">
                    Tool
                  </h3>
                </div>
                <div className="item__tooltip__info">
                  Use to gather ore from streams.
                </div>
              </div>
            </div>
          </div>
          <div className="items__container">
            <span className="items__number">8</span>
            <div className="item__container"></div>
          </div>
          <div className="items__container">
            <span className="items__number">9</span>
            <div className="item__container"></div>
          </div>
          <div className="items__container">
            <span className="items__number">0</span>
            <div className="item__container"></div>
          </div>
          <div className="items__container">
            <span className="items__number">-</span>
            <div className="item__container"></div>
          </div>
          <div className="items__container">
            <span className="items__number">=</span>
            <div className="item__container"></div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
  )
}

export default MiniMenu