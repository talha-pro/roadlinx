import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

const Hero = props => {
  const { type, image, title } = props
  const className = `hero ${type}`

  return (
    <BackgroundImage fluid={image}>
      <section className={className}>
        {/* <Image src={image} className={`${className}__image`} fluid={true} /> */}
        <div className={`${className}__overlay`} />
        <div className={`${className}__title`}>{title}</div>
      </section>
    </BackgroundImage>
  )
}

export default Hero
