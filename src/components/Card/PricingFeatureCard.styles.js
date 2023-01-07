import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  root: {
    width: '100%',
    boxShadow: 'none',
    border: '1px solid #E4E9F2',
    borderRadius: '4px',
    backgroundColor: 'white',
  },
  headerArea: {
    '& > * .MuiCardHeader-title': {
      color: '#0052FF',
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '33px',
      marginBottom: theme.spacing(1),
      '@media only screen and (max-width: 600px)': {
        fontSize: '25px',
        lineHeight: '30px',
      },
      '@media only screen and (min-width: 601px) and (max-width: 992px)': {
        fontSize: '24px',
        lineHeight: '28px',
      }
    },
  },
  contentHeaderArea: {
    display: 'flex',
    marginBottom: theme.spacing(3),
  },
  value: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '40px',
    lineHeight: '47px',
    marginRight: theme.spacing(0.5)
  },
  valueDescription: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    bottom: '0px',
    position: 'absolute',
  },
  descriptionArea: {
    position: 'relative',
    width: '100%',
    height: '40px',
  },
  contentRow: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  itemImg: {
    userSelect: 'none',
    height: '20px',
    marginRight: theme.spacing(0.5),
  },
  itemTitle: {
    width: '100%',
    color: '#C613DB',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    marginBottom: theme.spacing(0.5),
  },
  itemText: {
    width: '100%',
    color: '#7A7D85',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
  },
  contentArea: {
    height: '290px',
    paddingBottom: 0,
    position: 'relative',
    '@media only screen and (max-width: 600px)': {
      height: 'auto',
    },
  },
  smallcontent: {
    height: '262px !important',
  },
  divider: {
    position: 'absolute',
    right: theme.spacing(2),
    left: theme.spacing(2),
    bottom: 0,
  },
  actionArea: {
    padding: '16px !important',
  },
  label: {
    height: '45px',

  },
  lableText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    background: 'linear-gradient(165deg, #0052FF 0%, #FF00D0 100%)',
    borderRadius: '4px 4px 0px 0px',
    height: '100%',
    textAlign: 'center',
    paddingTop: theme.spacing(1.5),
    '@media only screen and (min-width: 601px) and (max-width: 992px)': {
      paddingTop: theme.spacing(0.5),
    }
  },
  labelBorder: {
    borderRadius: '0px 0px 4px 4px',
  },
  addColor: {
    background: 'linear-gradient(165deg, #0052FF 0%, #FF00D0 100%)',
    '& > * .MuiCardHeader-title': {
      color: 'white',
    },
    '& > * .MuiCardHeader-subheader': {
      color: 'white',
    }
  },
  expandArea: {
    background: 'white',
  },
  expand: {
    transition: '0.3s !important',
    transform: 'rotate(0deg) !important',
    marginLeft: 'auto',
    padding: '0px !important',
    paddingTop: '5px !important',
  },
  expandOpen: {
    transition: '0.3 !important',
    transform: 'rotate(180deg) !important'
  },
  mobileDiscountHeader: {
    borderRadius: '4px, 4px, 0, 0 !important',
    borderBottom: '1px solid white',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    textAlign: 'left',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}))
