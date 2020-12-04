import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const TabTwoContent = () => {
  const data = useStaticQuery(
    graphql`
      query {
        dryVanOne: file(relativePath: { eq: "service-carousel-reefer.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 561, maxHeight: 388) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        dryVanTwo: file(
          relativePath: { eq: "service-carousel-overweight.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 561, maxHeight: 388) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        dryVanThree: file(relativePath: { eq: "dryvans-reefer.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 561, maxHeight: 388) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const dryvanone = data.dryVanOne.childImageSharp.fluid
  const dryvantwo = data.dryVanTwo.childImageSharp.fluid
  const dryvanthree = data.dryVanThree.childImageSharp.fluid

  return (
    <div className="dryvans__wrapper">
      <div className="dryvans__heading">Best Uses of Dry Vans</div>
      <div className="dryvans__text">
        Dry van trailers are the perfect option for whenever you need to ship
        goods that don’t require temperature control. Clothing, non-perishable
        foods, and building products. While these trailers are capable of
        holding a wide range of products, they are best suited to items that can
        be palletized. Awkwardly shaped items that can’t be wrapped and put on a
        pallet or can’t have other items placed on top of them won’t fare well
        and will increase costs.
      </div>
      <div className="dryvans__images-wrapper">
        <Img fluid={dryvanone} className="dryvans__image" />
        <Img fluid={dryvantwo} className="dryvans__image" />
        <Img fluid={dryvanthree} className="dryvans__image" />
      </div>
    </div>
  )
}

export default TabTwoContent
