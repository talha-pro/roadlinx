import React from 'react'
import { Image } from 'react-bootstrap'

const SlideCard = props => {
  return (
    <div className="slide-card">
      <Image src={props.image} fluid={true} className="slide-card__image" />
      <div className="slide-card__overlay" />
      <div className="slide-card__icon-wrapper">
        <Image src={props.icon} fluid={true} className="slide-card__icon" />
        <div className="slide-card__text">{props.text}</div>
      </div>
      <div className="sec-overlay">
        <div className="sec-overlay-wrapper">
          <Image src={props.icon} fluid={true} className="sec-overlay-icon" />
          <div className="sec-overlay-text">{props.text}</div>
          <div className="sec-overlay-sub-text">{props.overlaytext}</div>
          <div className="sec-overlay-read-more">Read more</div>
        </div>
      </div>
    </div>
  )
}

export default SlideCard
