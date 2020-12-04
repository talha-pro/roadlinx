import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Logo from '../images/logo.png'
import map from '../images/map.svg'
import phone from '../images/phone.svg'
import mail from '../images/mail.svg'
import IconText from '../components/IconText'
const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container fluid={true}>
          <Row>
            <Col lg={5} xl={5}>
              <div className="footer__col-left">
                <Image src={Logo} fluid={true} className="footer__logo" />
                <p className="footer__tag-line" className="footer__tag-line">
                  RoadLINX is a proud provider of cross-border freight shipping
                  in Canada and the U.S.
                </p>
                <div className="footer__wrapper">
                  <div className="footer__sub-wrapper">
                    <div className="footer__ter-wrapper">
                      <Image
                        className="footer__icon"
                        src={phone}
                        fluid={true}
                      />
                      <div className="footer__heading">Phone 905-760-1141</div>
                    </div>
                    {/* <IconText icon={phone} text="Phone 905-760-1141" /> */}
                    <div className="footer__ter-wrapper">
                      <Image className="footer__icon" src={map} fluid={true} />
                      <div className="footer__heading">Office Address</div>
                      <div className="footer__address">
                        501 Rowntree Dairy Road, Unit #4, Woodbridge, ON L4L 8H1
                      </div>
                    </div>
                    <div className="footer__ter-wrapper">
                      <Image className="footer__icon" src={mail} fluid={true} />
                      <div className="footer__heading">ian@roadlinx.com</div>
                    </div>
                  </div>
                  <div className="footer__sub-wrapper">
                    <div className="footer__ter-wrapper">
                      <Image
                        className="footer__icon"
                        src={phone}
                        fluid={true}
                      />
                      <div className="footer__heading">Fax 905-760-1146</div>
                    </div>
                    <div className="footer__ter-wrapper">
                      <Image className="footer__icon" src={map} fluid={true} />
                      <div className="footer__heading">Warehouse Address</div>
                      <div className="footer__address">
                        6221 Highway 7 West, Unit #3, Vaughan, ON L4H 0K8
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7} xl={7}>
              <div className="footer__col-right">
                <div className="footer__sub-wrapper">
                  <div className="footer__sub-heading">Our Services</div>
                  <div className="footer__text">Dry Van Shipping</div>
                  <div className="footer__text">FTL Shipping</div>
                  <div className="footer__text">Refrigerated Shipping</div>
                  <div className="footer__text">Flatbed Trailer Rental</div>
                  <div className="footer__text">Warehousing Storage</div>
                  <div className="footer__text">Trade Show Shipping</div>
                  <div className="footer__text">Expedite Services</div>
                </div>
                <div className="footer__sub-wrapper">
                  <div className="footer__sub-heading">Our Equipment</div>
                  <div className="footer__text">Dry Van</div>
                  <div className="footer__text">Temperature Controlled</div>
                  <div className="footer__text">Flatbeds</div>
                  <div className="footer__text">Intermodal Containers</div>
                  <div className="footer__text">Storage Trailers</div>
                  <div className="footer__text">Chassis Types</div>
                </div>
                <div className="footer__sub-wrapper">
                  <div className="footer__sub-heading">Roadlinx Inc.</div>
                  <div className="footer__text">Home</div>
                  <div className="footer__text">About Us</div>
                  <div className="footer__text">Equipment</div>
                  <div className="footer__text">Free Resources</div>
                  <div className="footer__text">Careers</div>
                  <div className="footer__text">Contact Us</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="footer__bottom">
        © 2020 Roadlinx Inc. Web Design & SEO Toronto by 2Marketing.com
      </div>
    </>
  )
}

export default Footer
