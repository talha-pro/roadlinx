import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import truckicon from '../../images/truck-icon.svg'
import inhandicon from '../../images/in-hand.svg'

const Logistics = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "team.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const team = data.desktop.childImageSharp.fluid
  return (
    <section className="about-logistic">
      <Img fluid={team} className="about-logistic__image" />
      <Container fluid={true} className="about-logitic__container">
        <Row>
          <Col className="about-logistic__col" xl={12}>
            <div className="about-logistic__sub-heading">
              What is Logistics?
            </div>
            <div className="about-logistic__heading">What is Logistics?</div>
            <div className="about-logistic__text">
              Employees of premiere trucking companies like RoadLINX are all
              well-versed in logistics and work with us to provide the best
              system for our customers and workforce. Our expert team is key in
              providing logistically relevant solutions to transportation Canada
              can rely on.
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="about-logistic__col-bottom" xl={6}>
            <div>
              <Image src={truckicon} />
              <div className="about-logistic__sec-heading">
                What is Logistics to us?
              </div>
              <div className="about-logistic__sec-text">
                Employees of premiere trucking companies like RoadLINX are all
                well-versed in logistics and work with us to provide the best
                system for our customers and workforce. Our expert team is key
                in providing logistically relevant solutions to transportation
                Canada can rely on.
              </div>
            </div>
          </Col>
          <Col className="about-logistic__col-bottom" xl={6}>
            <div>
              <Image src={inhandicon} />
              <div className="about-logistic__sec-heading">
                What is logistics to our customers?
              </div>
              <div className="about-logistic__sec-text">
                “What is logistics” becomes “what is logistics going to do for
                me?” because the complex network of elements that go into
                logistics is everything when it comes to providing you the best
                Toronto transportation services.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Logistics
