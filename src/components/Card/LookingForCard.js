import React from 'react'
import useStyles from './LookingForCard.styles'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const LookingForCard = ({
  img,
  title,
  content,
  url,
}) => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => history.push(url)}>
        <CardMedia >
          <img className={classes.img} src={img} alt={title} />
        </CardMedia>
        <CardContent className={classes.contentArea}>
          <div className={classes.title}>{title}</div>
          <div className={classes.content}>{content}</div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default LookingForCard
