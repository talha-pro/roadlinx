import React from 'react'
import { Image } from 'react-bootstrap'

const TeamCard = props => {
  const { image, heading, text } = props
  return (
    <div className="team-card">
      <Image className="team-card__image" src={image} />
      <div className="team-card__wrapper">
        <div className="team-card__heading">{heading}</div>
        <div className="team-card__text">{text}</div>
      </div>
    </div>
  )
}

export default TeamCard
