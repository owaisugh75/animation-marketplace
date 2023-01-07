import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
  },
  logo: {
    userSelect: 'none',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: '157px',
  },
  linkText: {
    color: '#333333',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
  },
  linkList: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
  },
  linkItem: {
    height: '36px',
    '&:hover': {
      borderRadius: '4px',
      background: '#DDDDDD',
    }
  },
  siteButton: {
    height: '46px',
    fontSize: '16px',
    lineHeight: '19px',
  },
  logoutBtn: {
    marginTop: theme.spacing(3),
  }
}))
