import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Carousel, { consts } from 'react-elastic-carousel'
import leftarrow from '../images/left-arrow.svg'
import rightarrow from '../images/right-arrow.svg'
import TeamCard from './TeamCard'

import barry from '../images/team-members/barry.png'
import ilan from '../images/team-members/ilan.png'
import eric from '../images/team-members/eric.png'
import david from '../images/team-members/david.png'

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
      <section className="about-team-carousel">
        <div className="about-team-carousel__col">
          <div className="about-team-carousel__buttons-wrapper">
            <div
              className="about-team-carousel__button"
              onClick={() => this.carousel.slidePrev()}
            >
              <img src={leftarrow} />
            </div>
            <div
              className="about-team-carousel__button"
              onClick={() => this.carousel.slideNext()}
            >
              <img src={rightarrow} />
            </div>
          </div>
          <Carousel
            ref={ref => (this.carousel = ref)}
            className="about-team-carousel__carousel"
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
            <TeamCard image={eric} heading="Eric Weisman" text="DIRECTOR" />
          </Carousel>
        </div>
      </section>
    )
  }
}
