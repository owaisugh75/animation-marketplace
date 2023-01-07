import React from 'react'
import {
  Container,
  Grid,
} from '@material-ui/core'
import useStyles from './Footer.styles'
import white_logo from 'assets/images/logo/white_logo.svg'
import heart_small from 'assets/images/Icon/heart_small.svg'
import * as cx from 'classnames'
import { Link } from 'react-router-dom'
import { CustomIconButton } from 'components/CustomIconButton'

const Footer = ({ onePage }) => {
  const classes = useStyles()

  return (
    <div className={cx(classes.root, onePage && classes.onePage)}>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={3} >
            <div>
              <div className={classes.bold}>About</div>
              <div className={classes.normal}>©2021 Animatly.io</div>
              <div className={classes.normal}>
                <a
                  className={classes.link}
                  href='/content/Animatly_LicenseAgreement.pdf'
                  target="_blank"
                >Terms of Use</a> | 
                <a
                  className={classes.link}
                  href='/content/Privacy-Policy-Animatly.pdf'
                  target="_blank"
                > Privacy Policy</a>
              </div>
              <div><Link to='/'><img src={white_logo} alt='logo' className={classes.image} /></Link></div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <div className={classes.bold}>Quicklinks</div>
              <div className={classes.normal}>
                <Link className={classes.link} to='/pricing'>Pricing</Link>
              </div>
              <div className={classes.normal}>
                <Link className={classes.link} to='/howToUse'>How to use?</Link>
              </div>
              <div className={classes.normal}>
                <Link className={classes.link} to='/search?mode=Illustrations'>Illustrations</Link>
              </div>
              <div className={classes.normal}>
                <Link className={classes.link} to='/search?mode=Icons'>Icons</Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <div className={classes.bold}>Support</div>
              <div className={classes.normal}>
                <a
                  className={classes.link}
                  href='mailto:support@animatly.io'
                  target='_blank'
                  rel='noopener noreferrer'
                >support@animatly.io</a>
              </div>
              <div className={classes.bold}>Creation</div>
              <div className={classes.normal}>
                Made with <span><img src={heart_small} alt='heart_small' /></span> in Switzerland
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <div>
                <CustomIconButton type='camera' />
              </div>
              <div>
                <CustomIconButton type='music' />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
