import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'gatsby'
// import logo from "../images/logo.webp";
// import Scroll from "react-scroll";
import Button from '../components/Button'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Navigation = () => {
  // const ScrollLink = Scroll.Link;
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 300, maxHeight: 113) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const logo = data.desktop.childImageSharp.fluid
  return (
    <>
      <div className="nav">
        <Img className="nav__logo" fluid={logo} />

        <div className="nav__menu">
          <Container fluid={true}>
            <Row>
              <Col xl={10}></Col>
              <Col className="nav__col-upper-right" xl={2}>
                <div>905-760-1141</div>
                <Button type="primary" label="Get a free estimate" />
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="nav__container">
            <Row className="nav__row">
              <Col className="nav__col-left" md={3} lg={5} xl={4}>
                <Link to="/">{/* <Image src={logo} fluid={true} /> */}</Link>
              </Col>
              <Col className="nav__col-right" md={9} lg={7} xl={8}>
                <Link className="nav__item" to="/">
                  Home
                </Link>
                <div className="nav__item">
                  <ul className="nav__item-service">
                    <li className="dropdown">
                      <a href="#" className="trigger-drop">
                        Services
                      </a>
                      <ul className="drop">
                        <li className="dropdown">
                          <Link to="/DigitalTransformation/">
                            Full Truckload
                          </Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Infrastructure">Less than truckload</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Security">Reefer Freight</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Security">Header Trucks</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Security">Flatbeds</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Security">Warehousing & Crossdocking</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Security">Trade Show Shipping</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Security">Expedite Services</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Security">Dry Van Freight</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="nav__item">
                  <ul className="nav__item-service">
                    <li className="dropdown">
                      <a href="#" className="trigger-drop">
                        Equipments<i className="arrow"></i>
                      </a>
                      <ul className="drop">
                        <li className="dropdown">
                          <Link to="/DigitalTransformation/">Dry van</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Infrastructure">
                            Temperature Controlled
                          </Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Security">Flatbeds</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Security">Intermodal Containers</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Security">Storage Trailers</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/Security">Chassis Types</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <Link className="nav__item" to="/">
                  Free Resources
                </Link>
                <Link className="nav__item" to="/blog">
                  About Us
                </Link>
                <Link className="nav__item" to="/About">
                  Contact
                </Link>
                <Link className="nav__item" to="/About">
                  Send us Your Query
                </Link>
                {/* <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={1000}
                                className="nav__item"
                                activeClass="nav__item"
                                >
                                Contact
                            </ScrollLink> */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        {/* <Image className="menu-logo" src={logo} fluid={true} /> */}
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link className="navigation__link" to="/">
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/DigitalTransformation">
                Digital Transformation
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/Infrastructure">
                Infrastructure
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/Security">
                Security
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/">
                Store
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/About">
                About
              </Link>
            </li>
            <li className="navigation__item">
              {/* <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                className="navigation__link"
                activeClass="navigation__link"
              >
                Contact
              </ScrollLink> */}
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navigation
