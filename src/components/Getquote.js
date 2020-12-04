import React from 'react'
import Button from './Button'

const Getquote = props => {
  return (
    <div className="get-quote">
      <div className="get-quote__title">{props.title}</div>
      <form className="get-quote__form">
        <input
          type="text"
          placeholder="Full Name"
          className="get-quote__input"
        ></input>
        <input
          type="text"
          placeholder="Email Address"
          className="get-quote__input"
        ></input>
        <input
          type="phone"
          placeholder="Phone Number"
          className="get-quote__input"
        ></input>
        <input
          type="text"
          placeholder="Select Service"
          className="get-quote__input"
        ></input>
        <input
          type="text"
          placeholder="Your Message"
          className="get-quote__input"
        ></input>
      </form>
      <div className="get-quote__button-wrapper">
        <Button type="primary" label={props.buttonLabel} />
      </div>
    </div>
  )
}

export default Getquote
