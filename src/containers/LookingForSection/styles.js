import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    '@media only screen and (max-width: 600px)': {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    }
  },
  title: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '33px',
    marginBottom: theme.spacing(3),
    '@media only screen and (max-width: 600px)': {
      fontSize: '26px',
      lineHeight: '30px',
    }
  }
}))
