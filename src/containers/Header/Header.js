import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Popper,
  List,
  ListItem,
  ListItemText,
  ClickAwayListener,
  Grow,
  Paper
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import useStyles from './Header.styles.js'
import white_logo from 'assets/images/logo/white_logo.svg'
import logo from 'assets/images/logo/logo.svg'
import svgUser from 'assets/images/Icon/user.svg'
import svgUpArrow from 'assets/images/Icon/up-arrow.svg'
import svgDownArrow from 'assets/images/Icon/down-arrow.svg'
import svgUserWhite from 'assets/images/Icon/user_white.svg'
import svgUpArrowWhite from 'assets/images/Icon/up-arrow_white.svg'
import svgDownArrowWhite from 'assets/images/Icon/down-arrow_white.svg'
import { CustomButton } from 'components/CustomButton'
import { SearchBar } from 'containers/SearchBar'
import { useHistory } from 'react-router-dom'
import * as cx from 'classnames'
import {
  setSignupOpen,
  setSigninOpen,
  setRequestVerifyOpen,
  clearGlobal,
} from 'redux/modules/global/actions'
import { logout } from 'redux/modules/auth/actions'
import { currentUserSelector } from 'redux/modules/auth/selectors'
import { isClosedVerificationSelector } from 'redux/modules/global/selectors'
import { createStructuredSelector } from 'reselect'
import { authInfo, authClear } from 'helpers/localCheck'
import { VerifyEmailAlert } from 'components/CustomAlert'
import { useMediaQuery } from 'react-responsive'

const dropContent = [
  { text: 'Saved', to: '/account#saved' },
  { text: 'Downloads', to: '/account#downloads' },
  { text: 'Account', to: '/account#details' },
  { text: 'Logout', to: 'logout' }
]

const Header = ({
  isLandingPage,
  searchBox,
  setSignupOpen,
  setSigninOpen,
  setRequestVerifyOpen,
  currentUser,
  logout,
  isMovable,
  clearGlobal,
  isClosedVerification,
}) => {
  const history = useHistory()
  const classes = useStyles()
  const isIpad = useMediaQuery({ minWidth: 601, maxWidth: 992 })
  const logo_img = isLandingPage ? white_logo : logo
  const user_img = isLandingPage ? svgUserWhite : svgUser
  const [classType, setClassType] = useState(classes.landingRoot)
  const [buttonType, setButtonType] = useState('header')
  const [svgArrow, setSvgArrow] = useState(svgDownArrowWhite)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [isLogedIn, setIsLogedIn] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertText, setAlertText] = useState('')

  useEffect(() => {
    setIsLogedIn(currentUser ? true : false)
    const isVerified = !currentUser ? true : (currentUser.verifyStatus === true ? true : false)
    setAlertOpen(!isVerified && !isClosedVerification)
    setAlertText('Please verify your e-mail')
  }, [currentUser, isClosedVerification, setAlertOpen, setAlertText])

  useEffect(() => {
    const setClassByType = () => {
      if (isLandingPage) {
        setClassType(classes.landingRoot)
        setButtonType('header')
        setSvgArrow(svgDownArrowWhite)
      } else {
        setClassType(classes.normalRoot)
        setButtonType('outLine')
        setSvgArrow(svgDownArrow)
      }
    }
    setClassByType()
  }, [isLandingPage, classes])

  const handleUserToggle = (e) => {
    setOpenDropdown(!openDropdown)
    setAnchorEl(e.currentTarget)
    const downArrow = isLandingPage ? svgDownArrowWhite : svgDownArrow
    const upArrow = isLandingPage ? svgUpArrowWhite : svgUpArrow
    setSvgArrow(openDropdown ? downArrow : upArrow)
  }
  const handleClose = () => {
    setOpenDropdown(false)
    setSvgArrow(isLandingPage ? svgDownArrowWhite : svgDownArrow)
  }
  const handleClick = (url) => async () => {
    setOpenDropdown(false)
    if (url === 'logout') {
      const refreshToken = authInfo().tokens.refresh.token
      await logout({
        body: { refreshToken: refreshToken },
        success: async () => {
          await clearGlobal()
        }
      })
      authClear()
      history.push('/')
    } else {
      history.push(url)
    }
  }
  const handleSignup = () => {
    setSignupOpen({ open: true })
  }
  const handleSignin = () => {
    setSigninOpen({ open: true })
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
        <Container>
          <Toolbar className={classes.toolbar} >
            <img className={classes.image} src={logo_img} alt='logo' onClick={handleClick('/')} />
            <div className={classes.searchBoxArea}>
              {
                searchBox && !isIpad &&
                <SearchBar inline={true} />
              }
            </div>
            <Button className={classes.menuButton} onClick={handleClick('/pricing')}>Pricing</Button>
            <Button className={classes.menuButton} onClick={handleClick('/howToUse')}>How to use?</Button>
            {
              !isLogedIn &&
              <Button className={classes.menuButton} onClick={handleSignin}>Sign In</Button>
            }
            {
              isLogedIn &&
              <Button
                className={cx(classes.menuButton, classes.userButton)}
                startIcon={<img src={user_img} alt='user' />}
                endIcon={<img src={svgArrow} alt='arrow' />}
                onClick={handleUserToggle}
              >{authInfo().user.name}
              </Button>
            }
            {
              !isLogedIn &&
              <CustomButton
                className={classes.startFreeButton}
                content='Start Free Now'
                type={buttonType}
                onClick={handleSignup}
              />
            }
            {
              currentUser && currentUser.role === 'freeUser' &&
              <CustomButton
                className={classes.startFreeButton}
                content='Get a license'
                type={buttonType}
                onClick={() => history.push('./pricing')}
              />
            }
            {
              isLogedIn &&
              <Popper open={openDropdown} anchorEl={anchorEl} transition disablePortal>
                {({ TransitionProps }) => (
                  <Grow {...TransitionProps}>
                    <Paper className={cx(classes.dropPaper, isLandingPage && classes.landingDropPaper)}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <List component='nav'>
                          {
                            dropContent.map((item, key) => (
                              <ListItem
                                button
                                component='a'
                                className={cx(classes.linkItem, isLandingPage && classes.landingLinkItem)}
                                onClick={handleClick(item.to)}
                                key={key}
                              >
                                <ListItemText
                                  primary={item.text}
                                  className={cx(classes.linkText, isLandingPage && classes.landingLinkText)}
                                />
                              </ListItem>
                            ))
                          }
                        </List>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            }
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

Header.propTypes = {
  isLandingPage: PropTypes.bool,
  searchBox: PropTypes.bool,
  isLogedIn: PropTypes.bool,
  isClosedVerification: PropTypes.bool,
  currentUser: PropTypes.any,
  setSignupOpen: PropTypes.func,
  setSigninOpen: PropTypes.func,
  setRequestVerifyOpen: PropTypes.func,
  logout: PropTypes.func,
  clearGlobal: PropTypes.func,
}

const actions = {
  setSignupOpen,
  setSigninOpen,
  setRequestVerifyOpen,
  logout,
  clearGlobal,
}

const selector = createStructuredSelector({
  currentUser: currentUserSelector,
  isClosedVerification: isClosedVerificationSelector
})

export default compose(connect(selector, actions))(Header)
