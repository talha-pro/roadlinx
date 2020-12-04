import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import phone from '../images/phone.svg'
import map from '../images/map.svg'
import IconText from './IconText'
import Button from './Button'

const FormCard = ({ Form, ...props }) => (
  <div className="form-card__wrapper">
    <Container className="h-100">
      <Row className="h-100">
        <Col xs={8}>
          <Form />
        </Col>
        <Col xs={4}>
          <div className="card__wrapper">
            <h4 className="card__heading">How Can We Help You?</h4>
            <div className="d-flex flex-column justify-content-around flex-grow py-4">
              <IconText text="Phone 905-760-1141" icon={phone} />
              <IconText text="Fax 905-760-1146" icon={phone} />
              <IconText
                text="501 Rowntree Dairy Road, Unit #4, Woodbridge, Ontario, Canada L4L 8H1"
                icon={map}
              />
            </div>
            <div>
              <Button type="tertiary" label="Write us" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default FormCard
