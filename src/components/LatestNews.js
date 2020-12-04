import React, { Component } from 'react'

// import React from 'react'
import warehousing from '../images/warehousing.png'

import { Container, Row, Col } from 'react-bootstrap'
import Carousel, { consts } from 'react-elastic-carousel'
import leftarrow from '../images/left-arrow.svg'
import rightarrow from '../images/right-arrow.svg'

import BlogCard from './BlogCard'

export default class LatestNews extends Component {
  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? '<' : '>'
    return (
      <button className="arrow" onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
  render() {
    return (
      <section className="latest-news">
        <Container fluid={true}>
          <Row>
            <Col xl={12}>
              <div className="latest-news__sub-heading">NEWS</div>
              <div className="latest-news__heading">Latest news & Updates</div>
            </Col>
          </Row>
        </Container>
        <Container fluid={true}>
          <Row>
            <Col className="latest-news__col" xl={12}>
              <div className="latest-news__buttons-wrapper">
                <div
                  className="latest-news__button"
                  onClick={() => this.carousel.slidePrev()}
                >
                  <img src={leftarrow} />
                </div>
                <div
                  className="latest-news__button"
                  onClick={() => this.carousel.slideNext()}
                >
                  <img src={rightarrow} />
                </div>
              </div>
              <Carousel
                ref={ref => (this.carousel = ref)}
                className="latest-news__carousel"
                renderArrow={this.myArrow}
                itemsToShow={2}
                renderPagination={({ pages, activePage, onClick }) => {
                  return (
                    <div className="pagination">
                      {pages.map(page => {
                        const isActivePage = activePage === page
                        return (
                          <div
                            key={page}
                            onClick={() => onClick(page)}
                            active={isActivePage}
                          />
                        )
                      })}
                    </div>
                  )
                }}
              >
                <BlogCard
                  image={warehousing}
                  heading="Warehousing and Distribution"
                  text="Roadlinx is one of the only trucking & freight transportation company that is now proud to offer in house warehousing and distribution services, aside from freight services. Let us provide you with our full 3PL service and deal with all your logistics from bringing it in, storing it, picking and delivering it to your end buyer."
                />
                <BlogCard
                  image={warehousing}
                  heading="Warehousing and Distribution"
                  text="Roadlinx is one of the only trucking & freight transportation company that is now proud to offer in house warehousing and distribution services, aside from freight services. Let us provide you with our full 3PL service and deal with all your logistics from bringing it in, storing it, picking and delivering it to your end buyer."
                />
                <BlogCard
                  image={warehousing}
                  heading="Warehousing and Distribution"
                  text="Roadlinx is one of the only trucking & freight transportation company that is now proud to offer in house warehousing and distribution services, aside from freight services. Let us provide you with our full 3PL service and deal with all your logistics from bringing it in, storing it, picking and delivering it to your end buyer."
                />
                <BlogCard
                  image={warehousing}
                  heading="Warehousing and Distribution"
                  text="Roadlinx is one of the only trucking & freight transportation company that is now proud to offer in house warehousing and distribution services, aside from freight services. Let us provide you with our full 3PL service and deal with all your logistics from bringing it in, storing it, picking and delivering it to your end buyer."
                />
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

// const LatestNews = () => {

//   return (

//   )
// }

// export default LatestNews
