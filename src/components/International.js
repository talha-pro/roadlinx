import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TruckType from '../components/TruckType'
import truckload from '../images/truckload.png'
import flatbed from '../images/flatbed-truck.png'
import truckloadsec from '../images/truckload-sec.png'
import reeferheated from '../images/reefer-heated.png'
import Carousel, { consts } from 'react-elastic-carousel'
import leftarrow from '../images/left-arrow.svg'
import rightarrow from '../images/right-arrow.svg'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default class International extends Component {
  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? '<' : '>'
    return (
      <button className="arrow" onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }

  render() {
    return (
      <section className="international">
        <Container fluid={true}>
          <Row>
            <Col className="international__col">
              <div className="international__sub-heading">
                International Freight Shipping Services
              </div>
              <div className="international__wrapper">
                <div className="international__heading">
                  Container & freight shipping Company in Toronto, Canada
                </div>
                <div className="international__text">
                  RoadLinx is a proud provider of cross-border freight shipping
                  and overall freight services in Canada and the U.S. We work
                  with our customers to determine the best transportation
                  solutions whether it’s a simple pick up and delivery from
                  point A to B or more complex with many steps in between.
                  Whether you are looking for trucking companies to ship less
                  than truckloads (LTL) or a Full Truck Load (FTL) we have the
                  equipment and resources to handle your shipments.
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid={true}>
          <Row>
            <Col>
              <div className="international__buttons-wrapper">
                <div
                  className="international__button"
                  onClick={() => this.carousel.slidePrev()}
                >
                  <img src={leftarrow} />
                </div>
                <div
                  className="international__button"
                  onClick={() => this.carousel.slideNext()}
                >
                  <img src={rightarrow} />
                </div>
              </div>
              <Carousel
                ref={ref => (this.carousel = ref)}
                className="international__carousel"
                renderArrow={this.myArrow}
                itemsToShow={1}
                renderPagination={({ pages, activePage, onClick }) => {
                  return (
                    <div className="pagination">
                      {pages.map(page => {
                        const isActivePage = activePage === page
                        return (
                          <div
                            key={page}
                            onClick={() => onClick(page)}
                            active={isActivePage}
                          />
                        )
                      })}
                    </div>
                  )
                }}
              >
                <div className="international__carousel-wrapper">
                  <TruckType
                    image={truckload}
                    heading="Truckload"
                    text="RoadLINX has been providing expert full truckload shipping throughout our many years of operation and knows how to make this method safe, fast and cost-effective for our customers."
                  />
                  <TruckType
                    image={reeferheated}
                    heading="Reefer & Heated"
                    text="Any RoadLINX’s refrigerated truck or “reefer” truck is constructed with industry standard technology including advanced temperature control and environmental safety considerations."
                  />
                  <TruckType
                    image={truckloadsec}
                    heading="Less than Truckload"
                    text="LTLs can easily be consolidated with other shipments in these large trucks. Shipments such as clothing, textiles, nonperishable food items and various equipment and electronics are all good candidates for ltl truck shipping."
                  />
                  <TruckType
                    image={flatbed}
                    heading="Flatbed Trailer"
                    text="RoadLINX offers only the best flatbed trailer options for this versatile hauling method. Our sturdy construction flatbed trailers are ideal for full and less than truckloads along with specialty and oversized items."
                  />
                </div>
                <div className="international__carousel-wrapper">
                  <TruckType
                    image={truckload}
                    heading="Warehousing & Crossdocking"
                    text="RoadLINX offers a variety of supply chain solutions including warehousing and cross docking. Our comprehensive services allow for great flexibility in scheduling, cost and freight type, such as storing electric bicycles inventory."
                  />
                  <TruckType
                    image={truckload}
                    heading="Expedite Services"
                    text="We take our already fast shipping methods and put them into overdrive for you. Turn your 2-day shipment into a 1-day shipment with our expedited services along with other fast benefits."
                  />
                  <TruckType
                    image={truckload}
                    heading="Trade Show"
                    text="RoadLINX has a special relationship with Toronto trade shows, where we not only display our trucks but also help to deliver cargo. If your company needs equipment, products, display pieces or anything else delivered to trade shows Toronto then look no further than RoadLINX."
                  />
                  <TruckType
                    image={truckload}
                    heading="Dry Van Freight"
                    text="Dry van trailers are the most common freight shipping option that allows for safe, secure and economical transportation of dry goods, nonperishables and various types of equipment."
                  />
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
