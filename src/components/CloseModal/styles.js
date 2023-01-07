import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  extend: {
    display: 'flex',
  },
  extendArea: {
    background: 'radial-gradient(100% 100% at 100% 100%, #E8EDF0 0%, #F7F7F7 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: theme.spacing(48),
  },
  root: {
    backgroundColor: 'white',
    borderRadius: '4px',
    width: theme.spacing(40),
    height: '100%',
  },
  xButton: {
    right: theme.spacing(1),
    top: theme.spacing(1),
    position: 'absolute',
  },
  buttonArea: {
    height: '14px',
    position: 'relative',
  },
  childArea: {
    color: '#333333',
    marginTop: theme.spacing(3),
  }
}))
