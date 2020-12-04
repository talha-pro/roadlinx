import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Button from './Button'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "header-image.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage fluid={imageData}>
      <section className="header">
        <div className="header__title">
          Top Trucking Company & Freight Transportation In Toronto
        </div>
        <div className="header__text">
          RoadLinx is a proud provider of cross-border freight shipping and
          overall freight services in Canada and the U.S.
        </div>
        <Button type="primary" label="Get Free Estimate" />
      </section>
    </BackgroundImage>
  )
}

export default Header
