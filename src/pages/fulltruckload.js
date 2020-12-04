import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Carousel from 'react-elastic-carousel'
import CustomTabs from '../components/CustomTabs'
import CallFurthur from '../components/CallFurthur'
import Location from '../components/Location'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Hero from '../components/Hero'
import fulltruckload from '../images/fulltruckload.png'
import Getquote from '../components/Getquote'

import umbrella from '../images/umbrella-orange.svg'
import expedited from '../images/delivery-truck-orange.svg'
import escort from '../images/truck-escort-orange.svg'
import delivery from '../images/delivery-in-hand-orange.svg'

import servicereefer from '../images/service-carousel-reefer.png'
import serviceoverweight from '../images/service-carousel-overweight.png'

import Layout from '../components/Layout'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const TabOneContent = () => {
  return (
    <>
      <div className="fulltruckload__wrapper">
        <div className="fulltruckload__heading">
          Full Truckload Freight Transportation company in Toronto
        </div>
        <div className="fulltruckload__text">
          If you have large shipment and you need it shipped now, you need a
          full truckload carrier you can trust. RoadLINX is committed to
          providing the best FTL service for our customers and works hard to
          make this one of the fastest, most reliable shipping methods.
        </div>
        <Carousel itemsToShow={2} className="fulltruckload__carousel">
          <Image
            src={servicereefer}
            fluid={true}
            className="fulltruckload__carousel-image"
          />
          <Image
            src={serviceoverweight}
            fluid={true}
            className="fulltruckload__carousel-image"
          />
          <Image
            src={serviceoverweight}
            fluid={true}
            className="fulltruckload__carousel-image"
          />
        </Carousel>
        <div className="fulltruckload__sub-heading">
          What is a Full Truckload (ie. FTL )?
        </div>
        <div className="fulltruckload__text">
          As the name implies, an FTL is when a truck or intermodal container
          (full container load, FCL) is filled by one customer with their
          product. Typically, this shipment goes all to one place and is
          generally the most cost-effective method of shipping for larger volume
          shipments. With trucks able to carry in excess of 40,000 lbs, RoadLINX
          has space for a wide range of products.
        </div>
        <div className="fulltruckload__sub-heading">
          When to use Full Truckload?
        </div>
        <div className="fulltruckload__text">
          When you are shipping to a high-volume location, that is typically the
          best time to use an FTL. Also, if your shipment has enough volume to
          fill a full truckload then an FTL is worth considering.
        </div>
      </div>
    </>
  )
}

const TabTwoContent = () => {
  return (
    <>
      <div className="fulltruckload__wrapper">
        <div className="fulltruckload__sub-heading">
          Benefits of Full Truckload
        </div>
        <div className="fulltruckload__text">
          One of the biggest benefits of sending an FTL is that it is not
          handled en route, meaning it is safer and leaves even less room for
          error. This adds up to it being faster as well. Also, since an FTL’s
          rate is based on mileage and lane use rather than shipment
          classification, this can be cheaper for some items.
        </div>

        <div className="fulltruckload__sub-heading">Additional Services</div>
        <div className="fulltruckload__text">
          RoadLINX offers special services to make your FTL shipment go
          smoothly. Our crew can do the following to make your job easier:
        </div>
        <div className="fulltruckload__sub-wrapper">
          <div className="fulltruckload__ter-wrapper">
            <div className="fulltruckload__image-wrapper">
              <Image
                className="fulltruckload__image"
                src={umbrella}
                fluid={true}
              />
            </div>
            <div className="fulltruckload__label">Blanket Wrapping</div>
          </div>
          <div className="fulltruckload__ter-wrapper">
            <div className="fulltruckload__image-wrapper">
              <Image
                className="fulltruckload__image"
                src={expedited}
                fluid={true}
              />
            </div>
            <div className="fulltruckload__label">Expedited services</div>
          </div>
          <div className="fulltruckload__ter-wrapper">
            <div className="fulltruckload__image-wrapper">
              <Image
                className="fulltruckload__image"
                src={escort}
                fluid={true}
              />
            </div>
            <div className="fulltruckload__label">Trained Escort Handling</div>
          </div>
          <div className="fulltruckload__ter-wrapper">
            <div className="fulltruckload__image-wrapper">
              <Image
                className="fulltruckload__image"
                src={delivery}
                fluid={true}
              />
            </div>
            <div className="fulltruckload__label">
              Wrap and palletize your shipments
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const TabThreeContent = () => {
  return (
    <>
      <div className="fulltruckload__wrapper">
        <div className="fulltruckload__sub-heading">
          HOW MUCH DOES IT COST TO SHIP A FULL TRUCKLOAD?
        </div>
        <div className="fulltruckload__text">
          The cost to ship a full truckload depends on some factors:
        </div>
        <div className="fulltruckload__sub-text-wrapper">
          <div className="fulltruckload__sub-text">
            - the size of your freight shipment;
          </div>
          <div className="fulltruckload__sub-text">
            - the distance from pick up to delivery, destination;
          </div>
          <div className="fulltruckload__sub-text">
            - any special services required for a safe shipping experience
          </div>
        </div>
        <div className="fulltruckload__text">
          To find out just how affordable we can get you the full truckload
          shipping services you need, just reach out and contact us.
        </div>
        <div className="fulltruckload__text">
          Our experienced account manager will get you a reliable price that you
          can use to budget all the shipping services you require.
        </div>
        <div className="fulltruckload__text">
          Quote and schedule your truckload shipment Today!
        </div>
      </div>
    </>
  )
}

const Fulltruckload = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "fulltruckload.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const fulltruckload = data.desktop.childImageSharp.fluid
  return (
    <Layout>
      <Hero type="primary" image={fulltruckload} title="Full Truckload" />
      <Container className="fulltruckload-container" fluid={true}>
        <Row>
          <Col xl={8}>
            <section className="fulltruckload">
              <CustomTabs
                tabOneContent={<TabOneContent />}
                tabTwoContent={<TabTwoContent />}
                tabThreeContent={<TabThreeContent />}
                tabOneLabel="OVERVIEW"
                tabTwoLabel="BENEFITS"
                tabThreeLabel="PRICE"
              />
            </section>
          </Col>
          <Col className="fulltruckload__col-right" xl={4}>
            <Getquote
              title="Get a quote today!"
              buttonLabel="Get a free estimate"
            />
            <div className="fulltruckload__col-right-wrapper">
              <div className="fulltruckload__col-right-sub-heading">
                Read About
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <CallFurthur />
      <Location />
      <Footer />
    </Layout>
  )
}

export default Fulltruckload
