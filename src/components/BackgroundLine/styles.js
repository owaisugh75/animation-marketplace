import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    position: 'absolute',
    zIndex: '-1',
    height: '100%',
    width: '100%',
  },
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: theme.spacing(1.5)
  },
  div1: {
    width: '100%',
    borderLeft: '1px solid #dddddd'
  },
  div2: {
    width: '100%',
    borderLeft: '1px dashed #dddddd'
  },
  div3: {
    width: '100%',
    borderLeft: '1px dashed #dddddd'
  },
  div4: {
    width: '100%',
    borderLeft: '1px dashed #dddddd',
    borderRight: '1px solid #dddddd'
  },
}))
