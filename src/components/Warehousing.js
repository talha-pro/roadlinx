import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Button from './Button'

const Warehousing = () => {
  return (
    <section className="warehousing">
      <Container fluid={true}>
        <Row>
          <Col className="warehousing__col-left" xl={6}>
            <div className="warehousing__sub-heading">WAREHOUSING STORAGE</div>
            <div className="warehousing__heading">
              Warehousing Storage Toronto
            </div>
            <div className="warehousing__text">
              RoadLINX isn’t just about transporting your goods, we can also
              store them! We offer both long and short term warehousing
              solutions in our warehouses or with a mobile unit which can be
              stored on your own property or our secure lot. This is an ideal
              solution for when your warehouse is full and you need additional
              space without seeking out a completely new structure.
            </div>
            <div className="warehousing__text">
              Our warehousing solutions also work well for when you need to
              clear out space from an office building or factory in order to
              make room for new equipment or to move to a new facility. No
              matter your warehousing needs, you can benefit from these added
              value services:
            </div>
            <div className="warehousing__button-wrapper">
              <Button type="primary" label="Get a free estimate" />
            </div>
          </Col>
          <Col className="warehousing__col-right" xl={6}>
            <div className="warehousing__wrapper">
              <div className="warehousing__sub-wrapper">
                <div className="warehousing__line"></div>
                <div className="warehousing__ter-heading">Cross-Docking</div>
                <div className="warehousing__sub-text">
                  We Transfer your goods form one trailer to another with little
                  to no warehousing in between to make the process as fast and
                  smooth as possible.
                </div>
              </div>
              <div className="warehousing__sub-wrapper">
                <div className="warehousing__line"></div>
                <div className="warehousing__ter-heading">
                  Secure On Site Storage
                </div>
                <div className="warehousing__sub-text">
                  Our secure facility offers a safe and organized storage with
                  heightened security featuring 24hr camera surveillance, smoke
                  detectors, sprinklers and monitoring.
                </div>
              </div>
            </div>
            <div className="warehousing__wrapper">
              <div className="warehousing__sub-wrapper">
                <div className="warehousing__line"></div>
                <div className="warehousing__ter-heading">
                  Palletize and Shrink Wrap Services
                </div>
                <div className="warehousing__sub-text">
                  We process and protect your goods, store them and distribute
                  them throughout Canada and the U.S.
                </div>
              </div>
              <div className="warehousing__sub-wrapper">
                <div className="warehousing__line"></div>
                <div className="warehousing__ter-heading">
                  Warehousing Handling
                </div>
                <div className="warehousing__sub-text">
                  We process and protect your goods by offering unpacking and
                  packing services alongside palletizing and shrink wrapping
                  services to make sure your goods are stored and moved
                  securely.
                </div>
              </div>
            </div>

            <div className="warehousing__wrapper">
              <div className="warehousing__sub-wrapper">
                <div className="warehousing__line"></div>
                <div className="warehousing__ter-heading">
                  Flexible Warehouse Options
                </div>
                <div className="warehousing__sub-text">
                  When you store within one of our facilities you can use as
                  much or as little space as needed, no minimums or maximums.
                </div>
              </div>

              <div className="warehousing__sub-wrapper">
                <div className="warehousing__line"></div>
                <div className="warehousing__ter-heading">
                  Warehousing Handling
                </div>
                <div className="warehousing__sub-text">
                  Rent one our mobile storage units to store on you own property
                  for easy access while still freeing up space within your
                  primary facility.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Warehousing
