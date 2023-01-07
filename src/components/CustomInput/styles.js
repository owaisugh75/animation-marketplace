import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  root: {
    height: theme.spacing(5),
    width: '100%',
    marginBottom: theme.spacing(1.5),
    paddingLeft: '16px',
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    color: '#333333',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '19px',
    background: 'white',
  },
  error: {
    border: '1px solid #FA0101',
    marginBottom: theme.spacing(1),
  },
  helperText: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#FA0101',
    margin: '0px',
    marginBottom: theme.spacing(1.5),
  },
}))
