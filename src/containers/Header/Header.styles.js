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
    boxShadow: '0px 5px 40px -20px rgba(0, 0, 0, 0.5)',
    transition: '0.5s',
  },
  image: {
    cursor: 'pointer',
    userSelect: 'none',
    width: '157px',
  },
  menuButton: {
    marginRight: theme.spacing(0),
    color: 'inherit',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
    textTransform: 'none',
  },
  userButton: {
    '& > * .MuiButton-startIcon': {
      paddingLeft: '8px !important',
      marginRight: '8px !important',
    },
    '& > * .MuiButton-endIcon': {
      marginRight: '8px !important',
    }
  },
  searchBoxArea: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  toolbar: {
    padding: 0,
  },
  startFreeButton: {
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
    textTransform: 'none',
    height: '24px',
    marginLeft: theme.spacing(2)
  },
  linkItem: {
    height: '36px',
    '&:hover': {
      background: '#DDDDDD',
    }
  },
  landingLinkItem: {
    '&:hover': {
      background: 'transparent',
    }
  },
  linkText: {
    color: '#333333',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
  },
  dropPaper: {
    marginTop: '18px',
    marginLeft: theme.spacing(0),
    boxShadow: '0px 5px 7px -2px rgba(0, 0, 0, 0.5)',
    borderRadius: '0px 0px 4px 4px',
    transition: '0.5s',
  },
  landingDropPaper: {
    background: 'transparent',
    color: 'white',
    transition: '0.5s',
  },
  landingLinkText: {
    color: 'white',
  }
}))
