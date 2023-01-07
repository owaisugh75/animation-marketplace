import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
  },
  lottieArea: {
    position: 'relative',
    width: '100%',
    padding: '10px',
    background:
      'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
    border: '1px solid transparent',
    borderRadius: '4px',
  },
  downloadButton: {
    width: '100%',
    height: '32px',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
  },
  lottieSize: {
    width: '100%',
    height: '100%',
  },
  gifArea: {
    position: 'absolute',
    top: '-2000px',
  },
  disable: {
    pointerEvents: 'none',
    '&:hover': {
      // cursor: 'no-drop',
    }
  },
  backdrop: {
    zIndex: theme.zIndex.drawer,
    position: 'absolute',
    color: '#fff',
  }
}))
