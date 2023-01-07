import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  trendArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  root: {
    height: '22px',
    display: 'flex',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '22px',
  },
  chip: {
    marginLeft: theme.spacing(1),
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    color: 'white',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '15px',
    height: '22px',
    maxWidth: '110px',
    border: '1px solid white',
  }
}))
