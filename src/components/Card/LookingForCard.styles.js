import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    boxShadow: '0px 15px 30px -15px rgba(0, 0, 0, 0.3)',
    borderRadius: '4px',
    position: 'relative',
    '@media only screen and (max-width: 600px)': {
      boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.3)'
    }
  },
  title: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '28px',
    marginBottom: theme.spacing(1),
    '@media only screen and (max-width: 600px)': {
      fontSize: '20px',
      lineHeight: '23px',
    }
  },
  contentArea: {
    position: 'absolute',
    padding: '0px !important',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  content: {
    color: '#333333',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
  },
  img: {
    width: '100%',
    height: '100%',
    userSelect: 'none',
    borderRadius: '4px',
  },
}))
