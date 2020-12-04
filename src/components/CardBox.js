import React from 'react'

export default function CardBox({ children, className }) {
  return <div className={`card-box__wrapper ${className}`}>{children}</div>
}
