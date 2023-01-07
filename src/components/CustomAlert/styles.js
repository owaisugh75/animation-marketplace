import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  root: {
    zIndex: '2001'
  },
  verifyEmailAlertRoot: {
    height: '32px',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    background:
      'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
    border: '1px solid transparent',
    color: 'black',
    '& > .MuiAlert-icon': {
      padding: 'unset',
      fontSize: '18px !important',
    },
    '& > .MuiAlert-message': {
      padding: 'unset',
    }
  },
  emailAlertSnackBar: {
    cursor: 'pointer',
    '& > .MuiSnackbar-anchorOriginTopCenter': {
      top: '80px',
    }
  }
}))
