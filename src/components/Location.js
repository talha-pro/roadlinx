import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import locationicon from '../images/location-icon.svg'
import Button from '../components/Button'
import GoogleMapReact from 'google-map-react'

const Location = () => {
  return (
    <div className="location">
      <Container fluid={true}>
        <Row>
          <Col className="location__col-left" lg={5} xl={6}>
            <div className="location__address-wrapper">
              <div className="location__address-sub-wrapper">
                <div className="location__address-ter-wrapper">
                  <Image
                    src={locationicon}
                    fluid={true}
                    className="location__icon"
                  />
                  <div className="location__heading">Office Address</div>
                </div>
                <div className="location__address">
                  501 Rowntree Dairy Road, Unit #4, Woodbridge, ON L4L 8H1
                </div>
              </div>
              <div className="location__address-sub-wrapper">
                <div className="location__address-ter-wrapper">
                  <Image
                    src={locationicon}
                    fluid={true}
                    className="location__icon"
                  />
                  <div className="location__heading">Warehouse Address</div>
                </div>
                <div className="location__address">
                  6221 Highway 7 West, Unit #3, Vaughan, ON L4H 0K8
                </div>
              </div>
            </div>
          </Col>
          <Col className="location__col-right" lg={7} xl={6}>
            <p className="location__text">
              Sign up for industry alerts, insights & news from RoadLINX
            </p>
            <div className="location__subscription-wrapper">
              <input
                type="email"
                placeholder="Your Email"
                className="location__input"
              ></input>
              <Button type="secondary" label="SUBSCRIBE" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="location__maps-wrapper">
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          defaultZoom={11}
        >
          {/* Pointer Component Here  */}
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Location
