import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './MobileHeader.styles.js'
import mobile_white_logo from 'assets/images/logo/mobile_white_logo.svg'
import mobile_logo from 'assets/images/logo/mobile_logo.svg'
import white_menu from 'assets/images/Icon/menu_white.svg'
import menuIcon from 'assets/images/Icon/menu.svg'
import user_mobile from 'assets/images/Icon/user_mobile.svg'
import user_mobile_white from 'assets/images/Icon/user_mobile_white.svg'
import { NavMenu } from 'containers/NavMenu'
import {
  setSignupOpen,
  setSigninOpen,
  setResetPasswordOpen,
} from 'redux/modules/global/actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { authInfo } from 'helpers/localCheck'
import { VerifyEmailAlert } from 'components/CustomAlert'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { isClosedVerificationSelector } from 'redux/modules/global/selectors'
import { createStructuredSelector } from 'reselect'

const MobileHeader = ({
  isLandingPage,
  setSignupOpen,
  setSigninOpen,
  setResetPasswordOpen,
  isMovable,
  currentUser,
  isClosedVerification,
  onClickUser,
}) => {
  const history = useHistory()
  const classes = useStyles()
  const mobile_menu_img = isLandingPage ? white_menu : menuIcon
  const mobile_logo_img = isLandingPage ? mobile_white_logo : mobile_logo
  const user_mobile_img = isLandingPage ? user_mobile_white : user_mobile
  const [open, setOpen] = useState(false)
  const [classType, setClassType] = useState(classes.landingRoot)
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertText, setAlertText] = useState('')

  useEffect(() => {
    const setClassByType = () => {
      if (isLandingPage) {
        setClassType(classes.landingRoot)
      } else {
        setClassType(classes.normalRoot)
      }
    }
    setClassByType()
  }, [isLandingPage, classes])

  useEffect(() => {
    const isVerified = !currentUser ? true : (currentUser.verifyStatus === true ? true : false)
    setAlertOpen(!isVerified && !isClosedVerification)
    setAlertText('Please verify your e-mail')
  }, [currentUser, isClosedVerification, setAlertOpen, setAlertText])

  const handleSignup = () => {
    setSignupOpen({ open: true })
  }

  const handleLogo = () => {
    history.push('/')
    setSigninOpen({ open: false })
    setSignupOpen({ open: false })
    setResetPasswordOpen({ open: false })
  }

  const handleClickUser = () => {
    history.push('/account#details')
    onClickUser && onClickUser()
  }

  return (
    <>
      <VerifyEmailAlert
        isOpen={alertOpen}
        type='error'
        text={alertText}
        onClose={() => setAlertOpen(false)}
      />

      <AppBar className={classType} position={isMovable ? 'absolute' : 'fixed'}>
        <Toolbar className={classes.toolbar} >
          <img className={classes.image} src={mobile_menu_img} alt='menu' onClick={() => setOpen(true)} />
          <div className={classes.headerExtraArea}></div>
          <div className={classes.logoArea}>
            <img className={classes.logo_image} src={mobile_logo_img} onClick={handleLogo} alt='logo' />
          </div>
          {
            authInfo().tokens ?
              <img className={classes.image} src={user_mobile_img} alt='user' onClick={handleClickUser} />
              :
              <Button
                className={classes.headerButton}
                onClick={handleSignup}
              >
                Start Free Now
            </Button>
          }
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={classes.menu}>
          <NavMenu onClose={() => setOpen(false)} />
        </div>
      </Drawer>
    </>
  )
}

MobileHeader.propTypes = {
  isLandingPage: PropTypes.bool,
  isClosedVerification: PropTypes.bool,
  currentUser: PropTypes.any,
  setSignupOpen: PropTypes.func,
  setSigninOpen: PropTypes.func,
  setResetPasswordOpen: PropTypes.func,
}

const actions = {
  setSignupOpen,
  setSigninOpen,
  setResetPasswordOpen,
}

const selector = createStructuredSelector({
  currentUser: currentUserSelector,
  isClosedVerification: isClosedVerificationSelector
})


export default compose(connect(selector, actions))(MobileHeader)
