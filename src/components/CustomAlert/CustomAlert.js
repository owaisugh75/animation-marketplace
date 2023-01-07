import React, { useState, useEffect } from 'react'
import { Snackbar } from '@material-ui/core'
import useStyles from './styles'
import MuiAlert from '@material-ui/lab/Alert'

const CustomAlert = ({
  type,
  text,
  isOpen,
  onClose,
  disableAutoHide,
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    onClose()
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={disableAutoHide === true ? null : 3000}
      onClose={handleClose}
      className={classes.root}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={type}>{text}</Alert>
    </Snackbar>
  )
}

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default CustomAlert
