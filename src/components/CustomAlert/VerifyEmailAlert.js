import React, { useState, useEffect } from 'react'
import { Snackbar } from '@material-ui/core'
import useStyles from './styles'
import MuiAlert from '@material-ui/lab/Alert'
import { setRequestVerifyOpen, closeVerification } from 'redux/modules/global/actions'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'

const VerifyEmailAlert = ({
  type,
  text,
  isOpen,
  onClose,
  setRequestVerifyOpen,
  closeVerification,
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  let clickStatus = false

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    clickStatus = true
    onClose()
    setOpen(false)
    closeVerification(true)
    setRequestVerifyOpen({ open: false })
  }

  const Alert = (props) => {
    return <MuiAlert
      className={classes.verifyEmailAlertRoot}
      elevation={6}
      variant="outlined"
      {...props}
      onClick={() => {
        onClose()
        if (clickStatus === false) {
          setRequestVerifyOpen({ open: true })
          closeVerification(true)
        }
      }}
    />
  }

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      className={classes.emailAlertSnackBar}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={type}>{text}</Alert>
    </Snackbar>
  )
}

VerifyEmailAlert.propTypes = {
  setRequestVerifyOpen: PropTypes.func,
  closeVerification: PropTypes.func,
}

const actions = {
  setRequestVerifyOpen,
  closeVerification,
}

export default compose(connect(null, actions))(VerifyEmailAlert)
