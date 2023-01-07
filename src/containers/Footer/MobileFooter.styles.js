import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    background: 'linear-gradient(165deg, #0052FF 0%, #FF00D0 100%)',
    clipPath: 'polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)',
    height: '224px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
  },
  logoImage: {
    userSelect: 'none',
    marginBottom: theme.spacing(2),
    width: '157px',
  },
  image: {
    userSelect: 'none',
    marginTop: theme.spacing(2),
    margin: theme.spacing(0.5),
  },
  bold: {
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
  },
  divider: {
    marginBottom: theme.spacing(1.5),
    marginTop: theme.spacing(1.5),
    marginLeft: 'calc((100% - 40px) / 2 )',
    width: '40px',
    height: '1px',
    background: 'white',
  },
  onePage: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: '#DEDEDE',
      cursor: 'pointer',
      textDecoration: 'underline',
    }
  },
  socialLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '8px'
  }
}))
