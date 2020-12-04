import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Hero from '../components/Hero'
import Getquote from '../components/Getquote'
import Footer from '../components/Footer'
import Freequote from '../components/Freequote'
import Location from '../components/Location'

import fb from '../images/fb-icon.svg'
import linkedin from '../images/linkedin-icon.svg'
import youtube from '../images/youtube-icon.svg'
import plus from '../images/plus-icon.svg'

const blogpost = () => {
  return (
    <>
      <Hero
        type="secondary"
        title="How Much Does It Cost To Ship From Toronto To New York?"
      />
      <section className="blog-post">
        <Container fluid={true}>
          <Row>
            <Col className="blog-post__col-left" xl={7}>
              <h1>BLOG POSTS HERE</h1>
            </Col>
            <Col className="blog-post__col-right" xl={4}>
              <div className="blog-post__icons-wrapper">
                <div className="blog-post__icon">
                  <Image src={fb} />
                </div>
                <div className="blog-post__icon">
                  <Image src={linkedin} />
                </div>
                <div className="blog-post__icon">
                  <Image src={youtube} />
                </div>
                <div className="blog-post__icon">
                  <Image src={plus} />
                </div>
              </div>
              <Getquote
                title="Get a quote today!"
                buttonLabel="Get a free estimate"
              />
              <div className="blog-post__wrapper">
                <div className="blog-post__heading">RELATED BLOGS</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Freequote />
      <Location />
      <Footer />
    </>
  )
}

export default blogpost
