import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    boxShadow: 'none',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    }
  },
  media: {
    height: 180,
    boxShadow: '0px 15px 30px -15px rgba(0, 0, 0, 0.5)',
    borderRadius: '4px',
    '@media only screen and (max-width: 992px) and (min-width: 601px)': {
      height: 240,
    }
  },
  content: {
    marginTop: theme.spacing(2),
    padding: '0px',
  },
  header: {
    fontFamily: 'Roboto',
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    marginBottom: theme.spacing(1),
  },
  description: {
    fontFamily: 'Roboto',
    color: '#737373',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    marginBottom: theme.spacing(1),
  }
}))
