import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const BlogCard = props => {
  return (
    <div className="blog-card">
      <img className="blog-card__image" src={props.image} />
      <div className="blog-card__overlay" />
      <div className="blog-card__text-wrapper">
        <div className="blog-card__heading">{props.heading}</div>
        <div className="blog-card__text">{props.text}</div>
        <div className="blog-card__learn-more">Learn more</div>
      </div>
    </div>
  )
}

export default BlogCard
