import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(14),
    marginBottom: theme.spacing(3),

    '@media only screen and (max-width: 600px)': {
      paddingTop: theme.spacing(10),
    }
  },
  mobileRoot: {
    paddingTop: theme.spacing(2)
  },
  topFixed: {
    top: 0,
    zIndex: '1',
    position: 'sticky',
  },
  buttonArea: {
    marginBottom: theme.spacing(3),
    '@media only screen and (max-width: 600px)': {
      marginBottom: '0px',
    }
  },
  backButton: {
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
    textTransform: 'none',
    height: '24px',
    '@media only screen and (max-width: 600px)': {
      height: '32px',
      fontSize: '14px',
      lineHeight: '16px',
    }
  },
  saveButton: {
    float: 'right',
    height: '32px',
    width: '32px',
  },
  content: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '40px',
    lineHeight: '47px',
    '@media only screen and (max-width: 600px)': {
      marginBottom: theme.spacing(2),
      fontSize: '26px',
      lineHeight: '30px',
    }
  },
}))
