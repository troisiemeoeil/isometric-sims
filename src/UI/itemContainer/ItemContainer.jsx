import PropTypes from 'prop-types';
import '../minimenu.css'
import {  useEffect, useRef } from 'react';

export default function ItemContainer({
    number,
    containerdraggable, 
    id,  
    imgUrl,
    alt,
    imgDrag,
    tooltipDrag,
    title,
    description
}) {

  let source = "./sounds/Menu-Selection-Click.mp3"
  function Playit() {
   
   var audio = new Audio(source);
   audio.play();
  }

 const selectedOption = useRef()

useEffect(()=> {
 const inventoryhotbar = document.querySelector('.inventory--hotbar')
 //Loop through all this div's children and set Selected to false
 for (const child of inventoryhotbar.children) {
  child.setAttribute("selected", "false")

}

  function select() {
      // Loop through the div's children
       for (const child of inventoryhotbar.children) {
        // If there's any element that is true other than the 
        // one clicked on, set it to false and make it transparent
        if (child.getAttribute("selected") === "true") {
          child.setAttribute("selected", "false")
          child.style.backgroundColor = "transparent"
          child.style.borderRadius = 0
        // Set the clicked option attribute to true
       selectedOption.current.setAttribute("selected", "true")
          //adjust the styling 
       selectedOption.current.style.backgroundColor = "#faebd7"
       selectedOption.current.style.borderRadius = 0
        }
        //if there's no other elemnent selected, just set selected to
        //true and adjust the styling 
        else {
       selectedOption.current.setAttribute("selected", "true")
       selectedOption.current.style.backgroundColor = "#faebd7"
       selectedOption.current.style.borderRadius = 0

        }
      }

     }
     selectedOption.current.addEventListener("click", select)

}, [])

  return (
    <div className="items__container" onMouseEnter={Playit}  ref={selectedOption}>
    <span className="items__number ">{number}</span>
    <div className="item__container" draggable={containerdraggable}  id={id}>
      <img className="item__img" src={imgUrl} alt={alt} draggable={imgDrag}  style={{maxWidth: "200px", width:"70px" , height:"70px"}}/>
      <div className="item__tooltip" draggable={tooltipDrag}>
        <div className="item__tooltip__title">
          <h2>{title}</h2>
        </div>
        <div className="item__tooltip__info">
          {description}
        </div>
      </div>
    </div>
  </div>
  )
}

ItemContainer.propTypes = {
  number: PropTypes.string,
  containerdraggable: PropTypes.string,
  id: PropTypes.string,
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  imgDrag: PropTypes.string,
  tooltipDrag: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}
