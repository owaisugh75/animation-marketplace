import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '32px',
    height: '32px'
  },
  colorBackground: {
    border: '1px solid transparent',
    borderRadius: '4px',
    marginRight: theme.spacing(1),
    background:
      'linear-gradient(#333,#333) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
  },
  colorText: {
    border: '1px solid transparent',
    borderRadius: '4px',
    width: '88px',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#333333',
    background:
      'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
  },
  colorPicker: {
    '& > button': {
      width: '32px',
      height: '32px'
    }
  },
  arrow: {
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em" /* = width / sqrt(2) = (length of the hypotenuse) */,
    boxSizing: "border-box",
    color: 'white',
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      boxShadow: theme.shadows[1],
      backgroundColor: "currentColor",
      transform: "rotate(45deg)"
    }
  },
  popper: {
    zIndex: 2001,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.71em",
      marginLeft: 4,
      marginRight: 4,
      "&::before": {
        transformOrigin: "0 100%"
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.71em",
      marginLeft: 4,
      marginRight: 4,
      "&::before": {
        transformOrigin: "100% 0"
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.71em",
      height: "1em",
      width: "0.71em",
      marginTop: 4,
      marginBottom: 4,
      "&::before": {
        transformOrigin: "100% 100%"
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.71em",
      height: "1em",
      width: "0.71em",
      marginTop: 4,
      marginBottom: 4,
      "&::before": {
        transformOrigin: "0 0"
      }
    }
  },
  colorBox: {
    borderRadius: '5px',
    boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.05) !important',
    padding: '0px !important',
  },
  sizeSmall: {
    height: '26px',
    width: '74px'
  },
  sizeMedium: {
    height: '32px',
  },
  resetButton: {
    position: 'absolute',
    zIndex: '1',
    bottom: '8px',
    right: '78px',
  },
  colorButton: {
    '&:hover': {
      backgroundColor: 'unset !important',
    },
  }
}))
