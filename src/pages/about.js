import React, { Component } from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'
import Layout from '../components/Layout'
import Location from '../components/Location'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Button from '../components/Button'

// import aboutheader from '../images/about-header.png'

import specialty from '../images/container-hanging-sec.svg'
import delivery from '../images/delivery-truck-sec.svg'
import online from '../images/online-track.svg'

// import Carousel, { consts } from 'react-elastic-carousel'
import leftarrow from '../images/team-arrow-left.svg'
import rightarrow from '../images/team-arrow-right.svg'
import TeamCard from '../components/TeamCard'

import barry from '../images/team-members/barry.png'
import ilan from '../images/team-members/ilan.png'
import eric from '../images/team-members/eric.png'
import david from '../images/team-members/david.png'

import Carousel, { consts } from 'react-elastic-carousel'

import Personalised from '../components/About/Personalised'
import Logistics from '../components/About/Logistics'
import { graphql, StaticQuery } from 'gatsby'

export default class About extends React.Component {
  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? '<' : '>'
    return (
      <button
        className="about-team__arrows"
        onClick={onClick}
        disabled={isEdge}
      >
        {pointer}
      </button>
    )
  }
  render() {
    return (
      <Layout>
        <StaticQuery
          query={graphql`
            query {
              aboutHeader: file(relativePath: { eq: "about-header.png" }) {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => (
            <Hero
              type="secondary"
              image={data.aboutHeader.childImageSharp.fluid}
              title="About US"
            />
          )}
        />
        <section className="about-team">
          <Container fluid={true}>
            <Row>
              <Col xl={5}>
                <div className="about-team__sub-heading">About Us</div>
                <div className="about-team__heading">Meet Our Team</div>
                <div className="about-team__text">
                  As a top freight trucking & international shipping company, we
                  have built our services on being among the top trucking
                  companies that offer cost-effective, safe and reliable
                  transportation Canada and U.S. shipping along with intermodal
                  services.
                </div>
                <div className="about-team__text">
                  At RoadLINX, trucking companies become more than just
                  providers of Toronto transportation services. By hiring the
                  best brokers, drivers and technicians, we’re able to serve as
                  transportation Canada can truly rely on for even the most
                  difficult shipments.
                </div>
                <div className="about-team__buttons-wrapper">
                  <div
                    className="about-team__button"
                    onClick={() => this.carousel.slidePrev()}
                  >
                    <img src={leftarrow} />
                  </div>
                  <div
                    className="about-team__button"
                    onClick={() => this.carousel.slideNext()}
                  >
                    <img src={rightarrow} />
                  </div>
                </div>
              </Col>
              <Col xl={7}>
                <Carousel
                  renderArrow={this.myArrow}
                  itemsToScroll={2}
                  itemsToShow={2}
                  ref={ref => (this.carousel = ref)}
                >
                  <TeamCard
                    image={ilan}
                    heading="Ilan Kilimnik"
                    text="PRESIDENT/DIRECTOR"
                  />
                  <TeamCard
                    image={barry}
                    heading="Barry Nisan"
                    text="VICE PRESIDENT/DIRECTOR"
                  />
                  <TeamCard
                    image={david}
                    heading="David Laszlo"
                    text="SECRETARY TREASURER/DIRECTOR"
                  />
                  <TeamCard
                    image={eric}
                    heading="Eric Weisman"
                    text="DIRECTOR"
                  />
                </Carousel>
              </Col>
            </Row>
          </Container>
        </section>
        <Personalised />
        <Logistics />

        {/* <section className="about-advantage">
        <Container fluid={true}>
          <Row>
            <Col xl={6}>
              <div className="about-advantage__heading">
                The RoadLINX Advantage
              </div>
              <div className="about-advantage__text">
                Our commitment to transportation Canada makes RoadLINX among
                the best trucking companies in the country to provide Toronto
                transportation services. We offer a range of options including
                specialty containers, expedited services and state-of-the-art
                tracking technology to all of our valued customers that you
                won’t find with other trucking companies.
              </div>
            </Col>
            <Col className="about-advantage__col" xl={6}>
              <div className="about-advantage__wrapper">
                <div className="about-advantage__image-wrapper">
                  <Image src={specialty} />
                </div>
                <div className="about-advantage__label">
                  Specialty containers
                </div>
              </div>
              <div className="about-advantage__wrapper">
                <div className="about-advantage__image-wrapper">
                  <Image src={delivery} />
                </div>
                <div className="about-advantage__label">
                  Expedited services
                </div>
              </div>
              <div className="about-advantage__wrapper">
                <div className="about-advantage__image-wrapper">
                  <Image src={online} />
                </div>
                <div className="about-advantage__label">
                  State-of-the-art tracking technology
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
        {/* <section className="about-call-us">
          <Container fluid={true}>
            <Row>
              <Col className="about-call-us__col" lg={6} xl={6}>
                <div className="about-call-us__text">
                  Ready to learn more about transportation Canada from RoadLINX?
                </div>
                <div className="about-call-us__text">
                  Call us at 905-760-1141 to request a free quote.
                </div>
              </Col>
              <Col className="about-call-us__col" lg={6} xl={6}>
                <Button type="primary" label="CONTACT US" />
              </Col>
            </Row>
          </Container>
        </section> */}
        {/* <Location /> */}
        {/* <Footer /> */}
      </Layout>
    )
  }
}
