import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: '12px',
    '@media only screen and (max-width: 600px)': {
      height: 'calc(100vh - 304px)',
    }
  },
  updateSubscription: {
    height: '40px',
    width: '100%',
  },
  title: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '28px',
    textAlign: 'center',
    marginBottom: theme.spacing(1),
    '@media only screen and (max-width: 600px)': {
      fontSize: '26px',
      lineHeight: '30px',
      textAlign: 'left',
    }
  },
  description: {
    color: '#333333',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    '@media only screen and (max-width: 600px)': {
      fontSize: '14px',
      lineHeight: '16px',
      textAlign: 'left',
    }
  },
  label3: {
    color: '#333333',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
    textAlign: 'center',
    marginBottom: theme.spacing(1.5),
    '& > span': {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: '#0052FF'
    },
    '@media only screen and (max-width: 600px)': {
      fontSize: '14px',
      lineHeight: '16px',
    }
  }
}))
