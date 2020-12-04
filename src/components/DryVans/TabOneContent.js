import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const TabOneContent = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col className="dryvans__tab-one-col-left" xl={4}>
          <div className="dryvans__tab-one-heading">Dry Vans</div>
          <div className="dryvans__tab-one-text">
            Dry vans are the most popular choice for shipping for good reason;
            they offer a cost-effective, convenient shipping method for a wide
            range of goods and equipment. Our expertly designed and built dry
            van trailers offer easy loading, flexible storage and much more.
          </div>
          <div className="dryvans__tab-one-text">
            Know more about our Dry Van Freight & Van Truck Shipping.
          </div>
        </Col>
        <Col className="dryvans__tab-one-col-right" xl={8}></Col>
      </Row>
    </Container>
  )
}

export default TabOneContent
