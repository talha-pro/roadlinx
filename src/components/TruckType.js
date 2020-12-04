import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const TruckType = props => {
  return (
    <div className="truck-type">
      <Image fluid={true} src={props.image} />
      <div className="truck-type__wrapper">
        <div className="truck-type__heading">{props.heading}</div>
        <div className="truck-type__text">{props.text}</div>
      </div>
    </div>
  )
}

export default TruckType
