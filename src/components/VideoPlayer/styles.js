import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    borderRadius: '4px',
    height: '100%',
    position: 'relative'
  },
  lightArea: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transaprent !important',
  },
  videoArea: {
    // width: '100%',
    // height: '100%',
    position: 'absolute',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  thumbnail: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
}))
