import React, { useState } from 'react'
import Layout from '../components/Layout'
import WareHousing from '../components/Warehousing'
import OceanShipping from '../components/OceanShipping'
import Freequote from '../components/Freequote'
import Footer from '../components/Footer'
import FormCard from '../components/FormCard'
import QuoteForm from '../components/QuoteForm'
import TabButton from '../components/TabButton'
import Button from '../components/Button'
import { Container, Row, Col, Image } from 'react-bootstrap'
import LatestNews from '../components/LatestNews'
import HalfCard from '../components/HalfCard'
import Location from '../components/Location'
import responsive from '../images/responsive-service.png'
import responsiveicon from '../images/call-center.svg'
import personalised from '../images/personalised-freight.png'
import personalisedicon from '../images/smartphone.svg'
import International from '../components/International'
import Header from '../components/Header'
import expedited from '../images/expedited.png'
import expeditedicon from '../images/expedited.svg'
import SlideCard from '../components/SlideCard'
import reefertruck from '../images/reefer-truck.png'
import deliveryicon from '../images/delivery.svg'
import tempcontrol from '../images/temp-control.png'
import tempicon from '../images/temperature.svg'
import overweight from '../images/overweight.png'
import weighticon from '../images/weight-icon.svg'
import blanket from '../images/blanket.png'
import blanketicon from '../images/blanket-icon.svg'
import temperature from '../images/temp-control.png'
import manpower from '../images/manpower.png'
import manpowericon from '../images/delivery.svg'
import escort from '../images/escort.png'
import escorticon from '../images/escort-icon.svg'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const canadaCities = [
  'Ontario',
  'British Columbia',
  'Alberta',
  'Saskatchewan',
  'Maniloba',
  'Quebec',
  'Nova Scotia',
  'Newfoundland Labrador',
]

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        expeditedImage: file(relativePath: { eq: "expedited.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 736) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const expeditedImage = data.expeditedImage.childImageSharp.fluid

  const [activeFormTab, setActiveFormTab] = useState(0)
  const [activeShipTab, setActiveShipTab] = useState(0)

  return (
    <Layout>
      <Header />
      <International />
      <Container fluid className="ship-section">
        <Row>
          <Col xs={12} sm={12} md={12} lg={7} xl={6}>
            <p className="section-tag">Where we ship to</p>
            <h2 className="ship-section__heading">
              Road LINX also ships to&from all points in Canada & USA
            </h2>
            <TabButton
              label="Canada"
              active={activeShipTab === 0}
              index={0}
              type="secondary"
              handleOnClick={index => setActiveShipTab(index)}
              className="mr-4 p-0"
            />
            <TabButton
              label="USA"
              active={activeShipTab === 1}
              index={1}
              type="secondary"
              handleOnClick={index => setActiveShipTab(index)}
              className="p-0"
            />
            <ul>
              {canadaCities.map(city => (
                <li>{city}</li>
              ))}
            </ul>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5} xl={6} className="p-4">
            <Image fluid={true} src={require('../images/jesusland-map.svg')} />
          </Col>
        </Row>
      </Container>
      <section className="half-card-section">
        <Container fluid={true}>
          <Row>
            <Col className="half-card-section__col-left" xl={6}>
              <HalfCard
                type="primary"
                image={expeditedImage}
                icon={expeditedicon}
                text="24 hours"
                heading="Straight transportation"
              />
            </Col>
            <Col className="half-card-section__col-right" xl={6}>
              <div className="half-card-section__sub-heading">
                SPECIAL SERVICES
              </div>
              <div className="half-card-section__heading">
                Expedited Shipping Services
              </div>
              <div className="half-card-section__text">
                RoadLINX specialty service offerings include fast shipping which
                is guaranteed to speed up your already fast delivery service.
                Essentially using our expedite service means that we will ship
                your product directly with no additional pick up or deliveries
                in between.
              </div>
              <div className="half-card-section__text">
                We are also able to team up 2 drivers for long distance trips so
                your delivery keeps moving. This allows for 24-hour straight
                transportation while ensuring the safety of your products and
                our drivers. It also reduces the chances of delays and mishaps
                associated with transferring product from one truck to another.
              </div>
              <div className="half-card-section__button-wrapper">
                <Button type="primary" label="GET EXPEDITED SERVICES" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <WareHousing />
      <div className="estimate-section">
        <Container fluid className="h-100">
          <Row className="estimate-section__wrapper m-auto">
            <Col xs={5} className="estimate-section__col-left">
              <h6 className="estimate-section__heading pb-4">
                RoadLINX Trucking Companies values our customers, our team and
                everyone who goes into making transportation of goods better for
                everyone.
              </h6>
              <p className="estimate-section__paragraph w-75 pt-4">
                Learn more about the RoadLINX advantage, our freight services
                and more by speaking with our staff to receive a free quote for
                any of our services!
              </p>
            </Col>
            <Col
              xs={{ span: 6, offset: 1 }}
              className="estimate-section__col-right"
            >
              <Container className="m-auto">
                <Row>
                  <Col xs={4}>
                    <div className="estimate-section__card">
                      <Image
                        src={require('../images/worldwide-delivery.svg')}
                      />
                      <h4 className="title">300m</h4>
                      <p className="text">Clients worldwide</p>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="estimate-section__card">
                      <Image
                        src={require('../images/delivered-box-verification.svg')}
                      />
                      <h4 className="title">5000m</h4>
                      <p className="text">Delivered Goods</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="estimate-section__card">
                      <Image src={require('../images/delivery-truck.svg')} />
                      <h4 className="title">10000m</h4>
                      <p className="text">Miles Drived</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="estimate-forms negative-margin">
        <Row>
          <Col xs={{ span: 4, offset: 1 }} className="d-flex">
            <TabButton
              label="Get a free estimate"
              active={activeFormTab === 0}
              index={0}
              handleOnClick={index => setActiveFormTab(index)}
            />
            <TabButton
              label="Request a quote"
              handleOnClick={index => setActiveFormTab(index)}
              index={1}
              active={activeFormTab === 1}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
            <FormCard Form={QuoteForm} />
          </Col>
        </Row>
      </Container>

      <section className="slide-card-section">
        <Container fluid={true}>
          <div className="slide-card-section__upper-wrapper">
            <div className="slide-card-section__sub-heading">
              Special Services
            </div>
            <div className="slide-card-section__heading">
              Speciality Freight Services
            </div>
            <div className="slide-card-section__text">
              RoadLINX has everything from standard flatbed trailers and dry van
              trailers to specialty trucks, containers and trailers that have
              the ability to move even the largest and most difficult cargo.
              Some of our Freight Services include:
            </div>
          </div>
        </Container>
        <Container fluid={true}>
          <Row className="slide-card-section__row">
            <Col className="slide-card-section__col" xl={4}>
              <SlideCard
                image={reefertruck}
                icon={deliveryicon}
                text="Reefer Truck"
                overlaytext="Refrigerated or Reefer truck is a temperature controlled vehicle that can keep items cool or even frozen throughout most weather conditions. Despite the name, it is also able to keep items warm as well when you need to ship items during cold months."
              />
            </Col>
            <Col className="slide-card-section__col" xl={4}>
              <SlideCard
                image={tempcontrol}
                icon={tempicon}
                text="Multiple Temperature Control Trucks"
                overlaytext="Our heated and refrigerated trucks come with up to three separate compartments with independent temperature control. This allows you to ship multiple products that require different temperatures, such as frozen foods, wine and chocolate."
              />
            </Col>
            <Col className="slide-card-section__col" xl={4}>
              <SlideCard
                image={overweight}
                icon={weighticon}
                text="Overweight and Over Dimensional Cargo"
                overlaytext="We have step decks and double drop trailers to accommodate some of the tallest shipments as well as heavy duty trailers guaranteed to support upwards of 100,000 pounds"
              />
            </Col>
          </Row>
        </Container>
        <Container fluid={true}>
          <Row>
            <Col xl={12}>
              <div className="slide-card-section__button-wrapper">
                <Button type="primary" label="Get OUR SERVICES" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="slide-card-section">
        <Container fluid={true}>
          <div className="slide-card-section__upper-wrapper">
            <div className="slide-card-section__sub-heading">
              Expert Services
            </div>
            <div className="slide-card-section__heading">
              Freight Expert Handling
            </div>
            <div className="slide-card-section__text">
              RoadLINX makes each shipment we handle a priority by ensuring
              state-of-the-art tracking on all of our door-to-door services. In
              addition, we also offer specialty add-ons including:
            </div>
          </div>
        </Container>
        <Container fluid={true}>
          <Row className="slide-card-section__row">
            <Col className="slide-card-section__col" xl={4}>
              <SlideCard
                image={blanket}
                icon={blanketicon}
                text="Blanket Wrapping"
                overlaytext="Even your most fragile cargo is safe with our blanket wrapping service. We expertly wrap items like furniture and other fragile items which require special care when being transported. All of our vehicles are also equipped with straps, ramps and other equipment to make moving pieces easier and more secure."
              />
            </Col>
            <Col className="slide-card-section__col" xl={4}>
              <SlideCard
                image={manpower}
                icon={manpowericon}
                text="Man Power"
                overlaytext="Upon request, we will provide additional labour workers to load and unload your shipments. This ensures that your items are handled with care and the chances for injuries are reduced."
              />
            </Col>
            <Col className="slide-card-section__col" xl={4}>
              <SlideCard
                image={escort}
                icon={escorticon}
                text="Trained Escort Handling"
                overlaytext="As one of the top trucking companies, we can provide specialized escort services to help guide oversized hauls which are required by law."
              />
            </Col>
          </Row>
        </Container>
        <Container fluid={true}>
          <Row>
            <Col xl={12}>
              <div className="slide-card-section__button-wrapper">
                <Button type="primary" label="Get OUR SERVICES" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="half-card-section">
        <Container fluid={true}>
          <Row>
            <Col className="half-card-section__col-right" xl={6}>
              <HalfCard
                type="secondary"
                image={responsive}
                icon={responsiveicon}
                text="24/7"
                heading="Request Support"
              />
            </Col>
            <Col className="half-card-section__col-right" xl={6}>
              <div className="half-card-section__sub-heading">OUR TEAM</div>
              <div className="half-card-section__heading">
                Responsive Service and Handling
              </div>
              <div className="half-card-section__text">
                Even last minute requests can be handled with ease by the
                RoadLINX team. Our dynamic system allows us to respond to
                initial requests and changes to schedule with ease. This is an
                imperative function when suppliers, customers and others are all
                relying on shipments to run on a tight schedule. RoadLINX takes
                this seriously and makes efficient, responsive handling a top
                priority for all stages of our transportation from initial
                service request to final delivery.
              </div>

              <div className="half-card-section__button-wrapper">
                <Button type="primary" label="CONTACT US" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="half-card-section">
        <Container fluid={true}>
          <Row>
            <Col className="half-card-section__col-right" xl={6}>
              <div className="half-card-section__sub-heading">OUR TEAM</div>
              <div className="half-card-section__heading">
                Personalized Freight Trucking Company
              </div>
              <div className="half-card-section__text">
                Our team will work with you to design a transportation approach
                that works best for your company and freight. Like no other
                trucking companies, we offer a wide range of specialty and
                standard shipping equipment to make moving your products easier
                and more cost effective.
              </div>
              <div className="half-card-section__text">
                Not sure what shipping method is best suited for you? No
                worries! The RoadLINX brokers are well versed in all our
                company’s service offering and will provide recommendations and
                price quotes to help you make informed decisions about your
                shipping requirements.
              </div>

              <div className="half-card-section__button-wrapper">
                <Button type="primary" label="CONTACT US" />
              </div>
            </Col>
            <Col className="half-card-section__last-col-right" xl={6}>
              <HalfCard
                type="tertiary"
                image={personalised}
                icon={personalisedicon}
                text="100%"
                heading="Personalised approach"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <OceanShipping />
      <LatestNews />
      <Freequote />
      <Location />
      <Footer />
    </Layout>
  )
}

export default IndexPage
