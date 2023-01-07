import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  root: {
    padding: 'initial',
    borderRadius: '4px',
    textTransform: 'none',
    transition: 'color 0.3s ease',
    minWidth: '32px',
  },
  header: {
    background: 'transparent',
    border: '1px solid white',
    color: 'white',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
    textTransform: 'none',
    height: '24px',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  outLine: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    background:
      'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
    border: '1px solid transparent',
    color: 'black',
    '&:hover': {
      color: 'white',
      background: 'linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
    },
    '@media only screen and (hover: none)': {
      '&:focus': {
        color: 'black',
        background:
          'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
      },
    },

  },
  filled: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    background: 'linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
    border: '1px solid transparent',
    color: 'white',
    '&:hover': {
      color: 'black',
      background:
        'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
    },
    '@media only screen and (hover: none)': {
      '&:focus': {
        color: 'white',
        background: 'linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
      },
    },
  },
  saved: {
    padding: theme.spacing(1),
    '& > * .MuiButton-startIcon': {
      marginRight: '0px !important',
    }
  },
  savedOutlineHover: {
    '&:hover': {
      background:
        'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
      color: 'black',
    },
  },
  savedfilledlineHover: {
    '&:hover': {
      background: 'linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
      color: 'white',
    },
  },
  buttonIcon: {
    marginRight: '5px !important',
  },
  saveIcon: {
    marginRight: '0px !important',
    paddingLeft: '4px !important',
  }
}))
