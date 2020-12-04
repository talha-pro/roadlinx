import React from 'react'
import Button from '@material-ui/core/Button'
import mail from '../images/mail-sec.svg'
import { Image } from 'react-bootstrap'

const CustomButton = ({ type, label, icon, fullWidth }) => {
  const className = `button ${type}`

  if (type === 'tertiary')
    return (
      <button className={className} fullWidth={fullWidth || false}>
        <Image src={mail} className={`${className}__icon`} />
        {label}
      </button>
    )

  return (
    <Button className={className} fullWidth={fullWidth || false}>
      {label}
    </Button>
  )
}

export default CustomButton
