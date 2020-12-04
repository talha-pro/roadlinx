import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const Freeresources = () => {
  return (
    <Layout>
      <Hero type="tertiary" title="Free Resources" />
      <section className="blog">
        <Container fluid={true}>
          <Row>
            <Col className="blog__col-left" xl={7}>
              <h1>BLOG POSTS HERE</h1>
            </Col>
            <Col className="blog__col-right" xl={4}>
              <h1>SEARCH HERE</h1>
              <div>
                <div className="blog__heading">Latest Resources</div>
                <h1>LATEST RESOURCES POSTS HERE</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  )
}

export default Freeresources
