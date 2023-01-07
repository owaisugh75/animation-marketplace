import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  landingRoot: {
    flexGrow: 1,
    background: 'transparent',
    color: 'white',
    boxShadow: 'none',
    transition: '0.5s',

  },
  normalRoot: {
    flexGrow: 1,
    background: 'white',
    color: '#333333',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.3)',
    transition: '0.5s',
  },
  image: {
    userSelect: 'none',
  },
  logo_image: {
    userSelect: 'none',
    width: '44px',
  },
  headerButton: {
    color: 'inherit',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    textTransform: 'none',
  },
  headerExtraArea: {
    flexGrow: 1,
  },
  logoArea: {
    height: '100%',
    userSelect: 'none',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: '295px',
  }
}))
