import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Hero from '../components/Hero'
import SlideCard from '../components/SlideCard'
import Layout from '../components/Layout'
import equipmentheader from '../images/equipment-header.png'

import containers from '../images/containers.png'
import reefer from '../images/reefer-truck.png'
import tempcontainer from '../images/temp-container.png'
import mobilestorage from '../images/mobile-storage.png'
import flatbedsec from '../images/flatbed-sec.png'
import chassis from '../images/chassis-trailer.png'

import Freequote from '../components/Freequote'
import Location from '../components/Location'
import Footer from '../components/Footer'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const equipment = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "equipment-header.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const equipmentheader = data.desktop.childImageSharp.fluid
  return (
    <Layout>
      <Hero type="primary" image={equipmentheader} title="Equipment" />
      <section className="equipment">
        <Container className="equipment__container" fluid={true}>
          <Row>
            <Col className="equipment__col">
              <div className="equipment__sub-heading">
                International Freight Shipping Services
              </div>
              <div className="equipment__heading">
                Our Equipment – Storage Trailers
              </div>
              <div className="equipment__text">
                As a top Freight Trucking & International Shipping company in
                North America, RoadLINX brings you the best in shipping
                containers, trailers and equipment to ensure the safety and
                timely arrival of all your shipments. Choose from a wide range
                of shipping methods and compartments to solve all your freight
                logistics concerns. Our equipment includes:
              </div>
            </Col>
          </Row>
          <Row className="equipment__row">
            <Col className="equipment__col" xl={4}>
              <SlideCard
                image={containers}
                text="Intermodal Containers"
                overlaytext="Our intermodal containers are built to withstand even the toughest travelling conditions. Whether your shipment is making it across air, land, sea or all three, our containers will keep your items safe and dry."
              />
            </Col>
            <Col className="equipment__col" xl={4}>
              <SlideCard
                image={reefer}
                text="Dry Vans"
                overlaytext="One of the most popular ways to ship, these vans are designed to keep your items dry and secure by keeping out the elements. Dry vans freight shipping is also one of the most cost-effective ways to ship since they provide safety for travel over land without extra features like temperature control or intermodal containers."
              />
            </Col>
            <Col className="equipment__col" xl={4}>
              <SlideCard
                image={tempcontainer}
                text="Temperature Controlled Trailerss"
                overlaytext="Our temperature controlled trailers(Heated trucking transportation & Refrigerated Freight Shipping) have up to three different compartments with independent temperature control to allow you to ship multiple climate-sensitive items at once. These trailers are a popular choice for medical supplies and perishable items."
              />
            </Col>
          </Row>
          <Row className="equipment__row">
            <Col className="equipment__col" xl={4}>
              <SlideCard
                image={mobilestorage}
                text="Mobile Storage and Warehousing Trailers"
                overlaytext="We make warehousing easier than ever with our mobile storage trailers. Choose to park your trailer on your own property or on our secure lot for both long and short term storage solutions. Check out our warehousing solutions."
              />
            </Col>
            <Col className="equipment__col" xl={4}>
              <SlideCard
                image={flatbedsec}
                text="Flatbeds"
                overlaytext="Flatbed trailer shipping is one of the most common shipping options and for good reason. A variety of customizable options makes flatbeds ideal for a wide range of shipment types including full and less than truck loads and over dimensional loads."
              />
            </Col>
            <Col className="equipment__col" xl={4}>
              <SlideCard
                image={chassis}
                text="Chassis Trailers"
                overlaytext="Ranging from 20’ to 40’, our chassis trailers are designed to last and help you haul even the most difficult shipments. Choose from combo trailers, gooseneck trailers, and heavy duty 24-metric ton trailers."
              />
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

export default equipment
