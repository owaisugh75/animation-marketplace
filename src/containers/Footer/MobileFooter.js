import React from 'react'
import {
  Container,
} from '@material-ui/core'
import useStyles from './MobileFooter.styles'
import white_logo from 'assets/images/logo/white_logo.svg'
import * as cx from 'classnames'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  setSignupOpen,
  setSigninOpen,
  setResetPasswordOpen
} from 'redux/modules/global/actions'
import { CustomIconButton } from 'components/CustomIconButton'

const MobileFooter = ({
  onePage,
  setSignupOpen,
  setSigninOpen,
  setResetPasswordOpen,
}) => {
  const history = useHistory()
  const classes = useStyles()

  const handleLogo = () => {
    history.push('/')
    setSigninOpen({ open: false })
    setSignupOpen({ open: false })
    setResetPasswordOpen({ open: false })
  }

  return (
    <div className={cx(classes.root, onePage && classes.onePage)}>
      <Container>
        <div><img onClick={handleLogo} src={white_logo} alt='logo' className={classes.logoImage} /></div>
        <div className={classes.bold}>
          <a
            className={classes.link}
            href='mailto:support@animatly.io'
            target='_blank'
            rel='noopener noreferrer'
          >support@animatly.io</a>
        </div>
        <div className={classes.divider} ></div>
        <div>©2020 Animatly.io |
          <a
            className={classes.link}
            href='/content/Animatly_LicenseAgreement.pdf'
            target="_blank"
          > Terms of Use</a> |
           <a
            className={classes.link}
            href='/content/Privacy-Policy-Animatly.pdf'
            target="_blank"
          > Privacy Policy</a>
        </div>
        <div className={classes.socialLink}>
          <div style={{ display: 'flex' }}>
            <CustomIconButton type='camera' />
            <CustomIconButton type='music' />
          </div>
        </div>
      </Container>
    </div>
  )
}

MobileFooter.propTypes = {
  onePage: PropTypes.bool,
  setSignupOpen: PropTypes.func,
  setSigninOpen: PropTypes.func,
  setResetPasswordOpen: PropTypes.func,
}

const actions = {
  setSignupOpen,
  setSigninOpen,
  setResetPasswordOpen,
}

export default compose(connect(null, actions))(MobileFooter)
