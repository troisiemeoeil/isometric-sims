import PropTypes from 'prop-types';
import '../minimenu.css'

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
  return (
    <div className="items__container">
    <span className="items__number items__number--first">{number}</span>
    <div className="item__container" draggable={containerdraggable}  id={id}>
      <img className="item__img" src={imgUrl} alt={alt} draggable={imgDrag} />
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
  // You can declare that a prop is a specific JS primitive.
  // By default, these are all optional.
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
//1
// true
// largeBuildingBtn
// https://assets.codepen.io/7237686/infinity_blade.svg?format=auto
// infinity_blade
// false
// false
// Infinity Blade
// The true form of the Galaxy Sword