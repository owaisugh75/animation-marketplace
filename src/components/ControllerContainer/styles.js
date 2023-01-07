import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    background: '#FFFFFF',
    border: '1px solid #F3F3F3',
    boxSizing: 'border- box',
    boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.05)',
    borderRadius: '4px',
    height: theme.spacing(11),
    width: '100%',
    '@media only screen and (max-width: 992px) and (min-width: 601px)': {
      padding: theme.spacing(1),
    }
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#333333',
    marginBottom: theme.spacing(1),
  }
}))
