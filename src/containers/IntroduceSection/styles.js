import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    marginTop: theme.spacing(10),
    '@media only screen and (max-width: 600px)': {
      marginTop: theme.spacing(5),
    }
  },
  item: {
    marginBottom: theme.spacing(10),
    '@media only screen and (max-width: 600px)': {
      marginBottom: theme.spacing(3),
      height: 'auto',
    },
    '@media only screen and (min-width: 601px) and (max-width: 993px)': {
      height: '226px',
    },
    '@media only screen and (min-width: 993px)': {
      height: '360px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  lottieArea: {
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    '@media only screen and (max-width: 600px)': {
      marginBottom: theme.spacing(2),
      height: '211px',
    },
    '@media only screen and (min-width: 601px) and (max-width: 993px)': {
      height: '226px',
    }
  },
  lottie: {
    width: '100%',
    height: '100%',
    background: '#D8D8D8',
    boxShadow: '0px 15px 30px -15px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '40px',
    lineHeight: '47px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media only screen and (max-width: 600px)': {
      marginBottom: theme.spacing(2),
      height: '211px',
    }
  }
}))
