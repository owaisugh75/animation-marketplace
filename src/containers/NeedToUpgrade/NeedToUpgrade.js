import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { NeedToUpgradeForm } from './NeedToUpgradeForm'
import {
  Dialog,
} from '@material-ui/core'
import useStyles from './styles'

const NeedToUpgrade = ({
  open,
  onClose,
}) => {
  const classes = useStyles()
  const [modalOpen, setModalOpen] = useState(false)
  const fullScreen = useMediaQuery({ maxWidth: 600 })

  useEffect(() => {
    setModalOpen(open)
  }, [open])
  
  const handleClose = () => {
    setModalOpen(false)
    onClose()
  }
  return (
    <>
      <Dialog
        className={classes.root}
        fullScreen={fullScreen}
        scroll='body'
        open={modalOpen}
        onClose={handleClose}
        maxWidth='xl'
      >
        <NeedToUpgradeForm onClose={handleClose} />
      </Dialog>
    </>
  )
}

export default NeedToUpgrade
