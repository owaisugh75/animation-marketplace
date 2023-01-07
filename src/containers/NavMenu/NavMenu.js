import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Link,
} from '@material-ui/core'
import useStyles from './NavMenu.styles.js'
import logo from 'assets/images/logo/logo.svg'
import { MobileSearchBar } from 'containers/SearchBar'
import { CustomButton } from 'components/CustomButton'
import {
  setSignupOpen,
  setSigninOpen,
  setResetPasswordOpen,
  setSubscribeOpen,
  setSuccessOpen,
  clearGlobal,
} from 'redux/modules/global/actions'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from 'redux/modules/auth/actions'
import { authInfo, authClear } from 'helpers/localCheck'

const content = [
  { text: 'Sign in', link: 'signin' },
  { text: 'Browse Icons', link: '/search?mode=Icons' },
  { text: 'Browse Illustrations', link: '/search?mode=Illustrations' },
  { text: 'Pricing', link: '/pricing' },
  { text: 'How to use?', link: '/howtoUse' },
]

const NavMenu = ({
  onClose,
  setSignupOpen,
  setSigninOpen,
  setResetPasswordOpen,
  setSubscribeOpen,
  setSuccessOpen,
  logout,
  clearGlobal,
}) => {
  const history = useHistory()
  const classes = useStyles()

  const handleSignup = () => {
    setSignupOpen({ open: true })
  }
  const handleSignin = () => {
    setSigninOpen({ open: true })
  }
  const handleClick = (url) => () => {
    onClose()
    setSignupOpen({ open: false })
    setSigninOpen({ open: false })
    setResetPasswordOpen({ open: false })
    setSubscribeOpen({ open: false, subscribeInfo: null })
    setSuccessOpen({ open: false })
    if (url === 'signin') {
      handleSignin()
    } else if (url === 'signup') {
      handleSignup()
    } else {
      history.push(url)
    }
  }
  const handleLogout = async () => {
    if (authInfo().tokens) {
      const refreshToken = authInfo().tokens.refresh.token
      await logout({
        body: { refreshToken: refreshToken },
        success: async () => {
          await clearGlobal()
        }
      })
    }
    authClear()
    history.push('/')
    onClose()
  }
  const handleSearch = () => {
    onClose()
  }

  return (
    <Container>
      <img className={classes.logo} onClick={handleClick('/')} src={logo} alt='logo' />
      <MobileSearchBar isLandingPage placeholder='Try “Sport” for example' onSearch={handleSearch} />
      <List component='nav' className={classes.linkList}>
        {
          content.map((item, key) => {
            if (item.link === 'signin' && authInfo().tokens) { return null }
            return (
              <ListItem button key={key} component='a' className={classes.linkItem} >
                <ListItemText
                  primary={item.text}
                  className={classes.linkText}
                  onClick={handleClick(item.link)}
                />
              </ListItem>
            )
          })
        }
      </List>
      {
        !authInfo().tokens &&
        <CustomButton
          content='Try Free Now'
          type='filled'
          className={classes.siteButton}
          onClick={handleClick('signup')}
        />
      }
      {
        authInfo().tokens &&
        <div className={classes.logoutBtn}>
          <Link
            component='button'
            variant='body2'
            onClick={handleLogout}
          >
            Log out
        </Link>
        </div>
      }
    </Container>
  )
}

NavMenu.propTypes = {
  onClose: PropTypes.func,
  setSignupOpen: PropTypes.func,
  setSigninOpen: PropTypes.func,
  setResetPasswordOpen: PropTypes.func,
  setSubscribeOpen: PropTypes.func,
  setSuccessOpen: PropTypes.func,
  logout: PropTypes.func,
  clearGlobal: PropTypes.func,
}

const actions = {
  setSignupOpen,
  setSigninOpen,
  setResetPasswordOpen,
  setSubscribeOpen,
  setSuccessOpen,
  logout,
  clearGlobal,
}

export default compose(connect(null, actions))(NavMenu)
