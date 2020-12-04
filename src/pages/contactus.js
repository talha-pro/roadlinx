import React from 'react'
import Layout from '../components/Layout'
import Location from '../components/Location'
import Footer from '../components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import CardBox from '../components/CardBox'
import IconText from '../components/IconText'
import phone from '../images/phone.svg'
import TextField from '@material-ui/core/TextField'
import Button from '../components/Button'

const ContactUsPage = () => {
  return (
    <Layout>
      <div className="contantus__header">
        <Container>
          <Row>
            <Col xs={6}>
              <h2>Contant Us</h2>
              <p>
                Hi and thanks for choosing to contact RoadLINX! We’re here to
                answer any and all of your shipping questions.
              </p>
            </Col>
            <Col xs={{ span: 4, offset: 2 }}>
              <div className="mx-4 py-4">
                <CardBox>
                  <div className="contactus__card-wrapper">
                    <h3 className="contactus__card-heading">
                      Get In Touch With Us
                    </h3>
                    <TextField fullWidth size="medium" label="Full Name" />
                    <TextField fullWidth size="medium" label="Email" />
                    <TextField fullWidth size="medium" label="Phone Number" />
                    <TextField fullWidth size="medium" label="Your Message" />
                    <div className="mt-4">
                      <Button label="Submit" type="primary" fullWidth />
                    </div>
                  </div>
                </CardBox>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col xs={5}>
            <h6>Please contact us for:</h6>
            <ul className="contactus__list">
              <li>Information on shipping logistics</li>
              <li>Free quotes - Speciality handling options</li>
              <li>Expedited service</li>
              <li>Warehousing inquiries</li>
            </ul>
            <div className="space-4" />
            <h6>24 Hour Response:</h6>
            <p>
              We value our customers’ time and will respond to all inquiries
              within 24 hours in the same manner the request is sent.
            </p>
          </Col>
          <Col xs={3}>
            <CardBox>
              <IconText
                text="CALL US AT"
                icon={phone}
                description={'905-760-1141'}
                invert
              />
              <IconText
                text="FAX US AT"
                icon={phone}
                description={'905-760-1146'}
                invert
              />
              <IconText
                text="EMAIL US AT"
                icon={phone}
                description={'ian@roadlinx.com'}
                invert
              />
            </CardBox>
          </Col>
          <Col xs={4}>
            <CardBox>
              <IconText
                text="OFFICE ADDRESS"
                icon={phone}
                description={
                  '501 Rowntree Dairy Road, Unit #4, Woodbridge, ON L4L 8H1'
                }
                invert
              />
              <IconText
                text="OFFICE ADDRESS"
                icon={phone}
                description={
                  '6221 Highway 7 West, Unit #3, Vaughan, ON L4H 0K8'
                }
                invert
              />
            </CardBox>
          </Col>
        </Row>
      </Container>
      <h3 className="m-auto">We Are Located Here</h3>
      <Location />
      <Footer />
    </Layout>
  )
}

export default ContactUsPage
