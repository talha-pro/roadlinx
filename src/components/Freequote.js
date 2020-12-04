import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Button from './Button'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Freequote = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "freequoteback.png" }) {
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
      <section className="free-quote">
        <div className="free-quote__overlay" />
        <div className="free-quote__wrapper">
          <div className="free-quote__sub-wrapper">
            <div className="free-quote__text">
              Top Trucking Company & Freight Transportation In Toronto, Ontario
            </div>
            <span className="free-quote__heading">Proudly Canadian</span>
            <Button type="primary" label="get a free quote" />
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

export default Freequote
