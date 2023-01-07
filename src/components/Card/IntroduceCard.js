import React from 'react'
import useStyles from './IntroduceCard.styles'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const IntroduceCard = ({
  img,
  title,
  content,
  detailId,
}) => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <div>
      <Card className={classes.root} >
        <CardActionArea onClick={() => history.push(`/howToUseDetail?id=${detailId}`)}>
          <CardMedia
            className={classes.media}
            image={img}
            title={title}
          />
        </CardActionArea>
      </Card>
      <CardContent className={classes.content}>
        <div className={classes.header}>{title}</div>
        <div className={classes.description}>{content}</div>
      </CardContent>
    </div>
  )
}

export default IntroduceCard
