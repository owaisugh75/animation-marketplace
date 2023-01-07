import React from 'react'
import useStyles from './styles'
import * as cx from 'classnames'

const ControllerContainer = ({ title, className, ...props }) => {
  const classes = useStyles()

  return (
    <div
      className={cx(classes.root, className)}
      {...props}
    >
      <div className={classes.title}>{title}</div>
      {props.children}
    </div>
  )
}

export default ControllerContainer
