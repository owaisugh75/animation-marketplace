import React from 'react'
import useStyles from './styles'
import CloseIcon from '@material-ui/icons/Close'
import { IconButton } from '@material-ui/core'
import { setCookie } from 'redux/modules/global/actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const AcceptCookie = ({ setCookie }) => {
  const classes = useStyles()
  const handleClose = () => {
    localStorage.setItem('animatly_cookie', true)
    setCookie(true)
  }

  return (
    <div className={classes.root}>
      <IconButton className={classes.closeButton} disableRipple onClick={handleClose}>
        <CloseIcon color='secondary' fontSize='small' />
      </IconButton>
      <p className={classes.content}>
        Animatly.io uses cookies to allow us to better understand how the site is used.
        By continuing to use this site, you consent to this policy.
      </p>
    </div>
  )
}

AcceptCookie.propTypes = {
  setCookie: PropTypes.func,
}

const actions = {
  setCookie,
}

export default compose(connect(null, actions))(AcceptCookie)
