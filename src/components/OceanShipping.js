import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Button from './Button'
import container from '../images/container-hanging.svg'
import worldwide from '../images/worldwide-delivery.svg'

const OceanShipping = () => {
  return (
    <section className="ocean-shipping">
      <Container fluid={true}>
        <Row>
          <Col className="ocean-shipping__col-left" xl={7}>
            <div className="ocean-shipping__sub-heading">OCEAN SHIPPING</div>
            <div className="ocean-shipping__heading">
              Intermodal Container and Ocean Shipping
            </div>
            <p className="ocean-shipping__text">
              RoadLINX, unlike many other trucking companies, is now providing
              the same secure, affordable and detail-oriented shipping options
              to international cargo as we do to North American shipments.
              Whether you need your products to travel over water, air, land or
              a combination of all three, we have the equipment to seamlessly
              transport your goods.
            </p>
            <p className="ocean-shipping__text">
              Benefits of RoadLINX Intermodal Shipping:
            </p>

            <div className="ocean-shipping__sub-wrapper">
              <div className="ocean-shipping__ter-wrapper">
                <div className="ocean-shipping__icon">
                  <Image src={container} fluid={true} />
                </div>
                <div className="ocean-shipping__text">
                  With options for both full container and less than container
                  loads, RoadLINX is proud to be making international shipping
                  possible for all companies, large and small.
                </div>
              </div>
              <div className="ocean-shipping__ter-wrapper">
                <div className="ocean-shipping__icon">
                  <Image src={worldwide} fluid={true} />
                </div>
                <div className="ocean-shipping__text">
                  Unlike other intermodal and ocean shipping providers, we are
                  not exclusively tied to one carrier. This means we are able to
                  look within our trusted network for more specific solutions to
                  your shipping requirements so you will never be pushed into
                  staying with a single carrier.
                </div>
              </div>
              <div className="ocean-shipping__button-wrapper">
                <Button type="primary" label="Let's Contact Now" />
              </div>
            </div>
          </Col>
          <Col className="ocean-shipping__col-right" xl={5}></Col>
        </Row>
      </Container>
    </section>
  )
}

export default OceanShipping
