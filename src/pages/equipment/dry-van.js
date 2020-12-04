import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import CustomTabs from '../../components/CustomTabs'
import CallFurthur from '../../components/CallFurthur'
import Location from '../../components/Location'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import Hero from '../../components/Hero'
import TabOneContent from '../../components/DryVans/TabOneContent'
import TabTwoContent from '../../components/DryVans/TabTwoContent'
import TabThreeContent from '../../components/DryVans/TabThreeContent'
import { graphql, useStaticQuery } from 'gatsby'

const Dryvans = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "dryvansheader.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const dryvan = data.desktop.childImageSharp.fluid
  return (
    <>
      <Hero type="primary" image={dryvan} title="Dry Vans" />
      <Container className="dryvans-container" fluid={true}>
        <Row>
          <Col xl={12}>
            <section className="dryvans">
              <CustomTabs
                tabOneContent={<TabOneContent />}
                tabTwoContent={<TabTwoContent />}
                tabThreeContent={<TabThreeContent />}
                tabOneLabel="OVERVIEW"
                tabTwoLabel="BEST USES"
                tabThreeLabel="ADVANTAGE"
              />
            </section>
          </Col>
        </Row>
      </Container>
      <CallFurthur />
      <Location />
      <Footer />
    </>
  )
}

export default Dryvans
