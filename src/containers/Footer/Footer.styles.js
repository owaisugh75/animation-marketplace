import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    background: 'linear-gradient(165deg, #0052FF 0%, #FF00D0 100%)',
    height: '300px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 'calc(100% / 8)',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16.41px',
  },
  image: {
    userSelect: 'none',
    marginTop: theme.spacing(1),
    width: '157px',
  },
  bold: {
    fontWeight: '900',
    marginBottom: '13px',
  },
  normal: {
    marginBottom: theme.spacing(2),
    fontWeight: '400',
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
}))
