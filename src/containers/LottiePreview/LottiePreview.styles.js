import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    top: 'auto',
    bottom: 0,
    flexGrow: 1,
    background: 'white',
    color: '#333333',
    boxShadow: '0px 0px 12.5px rgba(0, 0, 0, 0.1)',
    transition: '0.6s',
    height: theme.spacing(12),
  },
  content: {
    display: 'flex',
    height: '100%',
    justifyContent: 'left',
    alignItems: 'center',
    textAlign: 'center',
  },
  lottieArea: {
    position: 'relative',
    height: theme.spacing(8),
    padding: theme.spacing(1),
    background:
      'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
    border: '1px solid transparent',
    borderRadius: '4px',

    '@media only screen and (max-width: 600px)': {
      width: '100%',
      marginBottom: theme.spacing(3)
    }
  },
  iconsArea: {
    width: theme.spacing(8),
    '@media only screen and (max-width: 600px)': {
      width: '100%',
      height: '100%',
    }
  },
  illuArea: {
    width: '114px',
    '@media only screen and (max-width: 600px)': {
      width: '100%',
      height: '100%',
    }
  },
  lottieSize: {
    width: '100%',
    height: '100%',
  },
  name: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '33px',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(3),
    '@media only screen and (max-width: 600px)': {
      fontSize: '26px',
      lineHeight: '30px',
      width: '100%',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      marginLeft: 0,
      marginRight: 0,
    }
  },
  description: {
    color: '#333333',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    marginBottom: theme.spacing(2),
  },
  editButton: {
    height: '32px',
    width: '120px',
    color: 'white',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
  },
  downloadButton: {
    marginRight: theme.spacing(2),
    height: '24px',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
  },
  space: {
    flexGrow: 1,
  },
  saveButton: {
    height: '40px',
    width: '40px',
    marginLeft: theme.spacing(1),
  },
  hiddenLottie: {
    position: 'absolute',
    top: '-10000px',
  }
}))
