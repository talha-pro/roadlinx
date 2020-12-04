import React from 'react'
import { Image } from 'react-bootstrap'

import Img from 'gatsby-image'

const HalfCard = props => {
  const { type, image, icon, text, heading } = props

  const className = `half-card ${type}`

  return (
    <div className={className}>
      <Img fluid={image} alt="Study Image" className={`${className}__image`} />
      <div className={`${className}__ticket-wrapper`}>
        <Image src={icon} className={`${className}__icon`}></Image>
        <div className={`${className}__text`}>{text}</div>
        <div className={`${className}__heading`}>{heading}</div>
      </div>
    </div>
  )
}

export default HalfCard
