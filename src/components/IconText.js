import React from 'react'
import { Image } from 'react-bootstrap'

const IconText = ({ icon, text, description, invert }) => (
  <div className="icon-text__wrapper">
    <span className="icon-text__icon">
      <Image src={icon} fluid={true} />
    </span>
    <span>
      <div className={`icon-text__text ${invert && 'invert'}`}>{text}</div>
      <div className={`icon-text__description ${invert && 'invert'} `}>
        {description}
      </div>
    </span>
  </div>
)

export default IconText
