import React from 'react'
import useStyles from './styles'
import {
  Container,
} from '@material-ui/core'

const BackgroundLine = ({ ...props }) => {
  const classes = useStyles()

  return (
    <div style={{ position: 'relative' }}>
      <div className={classes.root}>
        <Container className={classes.container}>
          <div className={classes.div1}></div>
          <div className={classes.div2}></div>
          <div className={classes.div3}></div>
          <div className={classes.div4}></div>
        </Container>
      </div>
      {props.children}
    </div>
  )
}

export default BackgroundLine
