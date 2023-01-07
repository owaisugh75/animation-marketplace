import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    background: 'linear-gradient(165deg, #0052FF 0%, #FF00D0 100%)',
    height: '82px',
    width: '375px',
    position: 'fixed',
    right: '0px',
    bottom: '0px',
    zIndex: '2',
    '@media only screen and (max-width: 600px)': {
      width: '100%'
    }
  },
  content: {
    color: 'white',
    padding: '16px',
    paddingLeft: '24px',
    paddingRight: '24px',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
  },
  closeButton: {
    position: 'absolute',
    right: '8px',
    top: '0px',
  }
}))
