import React from 'react'
import Button from './Button'
import { Container, Row, Col, FormControl } from 'react-bootstrap'

const EstimateForm = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h3>Details</h3>
        </Col>
        <Col xs={6}>
          <FormControl />
        </Col>
        <Col xs={6}>
          <FormControl />
        </Col>
        <Col xs={6}>
          <FormControl />
        </Col>
        <Col xs={6}>
          <FormControl />
        </Col>
        <Col xs={12}>
          <FormControl />
        </Col>
        <Col xs={12}>
          <FormControl />
        </Col>
        <Button>Get a free estimate</Button>
      </Row>
    </Container>
  )
}

export default EstimateForm
