import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../components/Button'

const CallFurthur = () => {
  return (
    <section className="call-furthur">
      <Container fluid={true}>
        <Row>
          <Col className="call-furthur__col-left" lg={6} xl={6}>
            <div className="call-furthur__heading">
              Call us for further information or to request a free quote
            </div>
            <div className="call-furthur__text">
              RoadLINX has been providing expert full truckload shipping
              throughout our many years of operation and know how to make this
              method safe, fast and cost-effective for our customers.
            </div>
            <div className="call-furthur__text">
              Call us at 905-760-1141 to talk with one of our logistics experts
              to determine if an FTL is right for your shipment and company.
            </div>
          </Col>
          <Col className="call-furthur__col-right" lg={6} xl={6}>
            <Button type="primary" label="Call us 905-760-1141" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CallFurthur
