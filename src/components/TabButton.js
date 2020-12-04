import React from 'react'
import Button from '@material-ui/core/Button'

const TabButton = ({
  active,
  handleOnClick,
  index,
  label,
  type = 'primary',
  className,
}) => {
  return (
    <Button
      onClick={() => handleOnClick(index)}
      className={`tab-button ${active && 'active'} ${type} ${className}`}
    >
      {label}
    </Button>
  )
}

export default TabButton
