import React from 'react'
import Button from './Button'
import { Container, Row, Col } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const QuoteForm = () => {
  return (
    <Container className="quote-form__wrapper">
      <Row>
        <Col xs={12}>
          <h3>Details</h3>
        </Col>
        <Col xs={6}>
          <TextField fullWidth label="First Name" size="medium" />
        </Col>
        <Col xs={6}>
          <TextField fullWidth label="Last Name" />
        </Col>
        <Col xs={6}>
          <TextField fullWidth label="Email" />
        </Col>
        <Col xs={6}>
          <TextField fullWidth label="Phone" />
        </Col>
        <Col xs={12}>
          <FormControl fullWidth>
            <InputLabel id="service-select">Select Service</InputLabel>
            <Select
              labelId="service-select"
              id="demo-simple-select"
              fullWidth
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Col>
        <Col xs={12}>
          <TextField fullWidth label="Message" />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button label="Get a free estimate" type="primary" fullWidth />
        </Col>
      </Row>
    </Container>
  )
}

export default QuoteForm
