import React from 'react'
import {
  IconButton,
} from '@material-ui/core'
import useStyles from './styles'
import xIcon from 'assets/images/Icon/x.svg'
import * as cx from 'classnames'

const CloseModal = ({ onClose, extend, className, ...props }) => {
  const classes = useStyles()

  return (
    <div className={extend && classes.extend}>
      <div className={extend && classes.extendArea}>{extend}</div>
      <div className={cx(classes.root, className)}>
        <div className={classes.buttonArea}>
          <IconButton className={classes.xButton} component='span' onClick={onClose} >
            <img src={xIcon} alt='x' />
          </IconButton>
        </div>
        <div className={classes.childArea}>{props.children}</div>
      </div>
    </div>
  )
}

export default CloseModal
