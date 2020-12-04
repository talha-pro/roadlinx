import React from 'react'
import Hero from '../components/Hero'
import Freequote from '../components/Freequote'
import Location from '../components/Location'
import Footer from '../components/Footer'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { sortedUniq } from 'lodash'

const services = () => {
  const data = useStaticQuery(
    graphql`
      query {
        servicesHeader: file(relativePath: { eq: "servicesheader.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        truckLoad: file(relativePath: { eq: "truckload.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 394, maxHeight: 219) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        headerTruck: file(relativePath: { eq: "header-truck.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 394, maxHeight: 219) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tradeShow: file(relativePath: { eq: "trade-show.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 394, maxHeight: 219) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        truckLoadSec: file(relativePath: { eq: "truckload-sec.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 394, maxHeight: 219) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        crossDocking: file(relativePath: { eq: "cross-docking.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 394, maxHeight: 219) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        expedite: file(relativePath: { eq: "expedite-service.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 394, maxHeight: 219) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        reefer: file(relativePath: { eq: "reefer.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 394, maxHeight: 219) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        flatBed: file(relativePath: { eq: "flatbed-truck.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 394, maxHeight: 219) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        dryVan: file(relativePath: { eq: "dry-van.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 394, maxHeight: 219) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const servicesheader = data.servicesHeader.childImageSharp.fluid
  const truckload = data.truckLoad.childImageSharp.fluid
  const headertruck = data.headerTruck.childImageSharp.fluid
  const tradeshow = data.tradeShow.childImageSharp.fluid
  const truckloadsec = data.truckLoadSec.childImageSharp.fluid
  const crossdocking = data.crossDocking.childImageSharp.fluid
  const expedite = data.expedite.childImageSharp.fluid
  const reefer = data.reefer.childImageSharp.fluid
  const flatbed = data.flatBed.childImageSharp.fluid
  const dryvan = data.dryVan.childImageSharp.fluid

  return (
    <Layout>
      <Hero image={servicesheader} type="primary" title="Services" />
      <section className="services">
        <Container fluid={true}>
          <Row>
            <Col className="services__col">
              <div className="services__sub-heading">
                International Freight Shipping Services
              </div>
              <div className="services__heading">
                Container & freight shipping Company in Toronto, Canada
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="services__sub-col" xl={4}>
              <div className="services__wrapper">
                <Img fluid={truckload} className="services__sec-image" />
                <div>Truckload</div>
              </div>
              <div className="services__wrapper">
                <Img fluid={headertruck} className="services__sec-image" />
                <div>Header Trucks</div>
              </div>
              <div className="services__wrapper">
                <Img fluid={tradeshow} className="services__sec-image" />
                <div className="services__wrapper--text">
                  Trade Show Shipping
                </div>
              </div>
            </Col>
            <Col className="services__sub-col" xl={4}>
              <div className="services__wrapper">
                <Img fluid={truckloadsec} className="services__sec-image" />
                <div>Less Than Truckload</div>
              </div>
              <div className="services__wrapper">
                <Img fluid={crossdocking} className="services__sec-image" />
                <div>Warehousing & Crossdocking</div>
              </div>
              <div className="services__wrapper">
                <Img fluid={expedite} className="services__sec-image" />
                <div>Expedite Services</div>
              </div>
            </Col>
            <Col className="services__sub-col" xl={4}>
              <div className="services__wrapper">
                <Img fluid={reefer} className="services__sec-image" />
                <div>Reefer Freight</div>
              </div>
              <div className="services__wrapper">
                <Img fluid={flatbed} className="services__sec-image" />
                <div>Flatbed Trailer</div>
              </div>
              <div className="services__wrapper">
                <Img fluid={dryvan} className="services__sec-image" />
                <div>Dry Van Freight</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Freequote />
      <Location />
      <Footer />
    </Layout>
  )
}

export default services
