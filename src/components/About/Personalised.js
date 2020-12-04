import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import personalisedicon from '../../images/smartphone.svg'
import HalfCard from '../HalfCard'
import Button from '../Button'

const Personalised = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "personalised-freight.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 736, maxHeight: 634) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const personalised = data.desktop.childImageSharp.fluid
  return (
    <section className="about-half-card">
      <Container fluid={true}>
        <Row>
          <Col xl={6}>
            <HalfCard
              type="primary"
              image={personalised}
              icon={personalisedicon}
              text="100%"
              heading="Personalised approach"
            />
          </Col>
          <Col className="about-half-card__col" xl={6}>
            <div>
              <div className="about-half-card__sub-heading">
                Personalised solutions
              </div>
              <div className="about-half-card__heading">
                Personalized Transportation Canada Solutions
              </div>
              <div className="about-half-card__text">
                Unlike some other trucking companies, we work to provide
                personalized solutions to transportation Canada needs. This
                includes a wide range of trailers, trucks and specialty
                containers to allow for the most complete set of Toronto
                transportation services.
              </div>
              <Button type="primary" label="CONTACT US" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Personalised
