import React, { useState } from 'react'
import useStyles from './styles'
import ReactPlayer from 'react-player'
import play from 'assets/images/Icon/play.svg'
import { IconButton } from '@material-ui/core'
import thumbnailImg from 'assets/images/background/thumbnail.png'

const VideoPlayer = ({ src }) => {
  const classes = useStyles()
  const [controls, setControls] = useState(false)
  const [lightArea, SetLightArea] = useState(true)

  const handlePlayClick = () => {
    setControls(true)
    SetLightArea(false)
  }

  return (
    <div className={classes.root}>
      <ReactPlayer
        className={classes.videoArea}
        url={src}
        width='100%'
        height='100%'
        controls={controls}
        playing={controls}
      />
      {lightArea && <img src={thumbnailImg} alt='thumbnail' className={classes.thumbnail} />}
      {
        lightArea && <div className={classes.lightArea}>
          <IconButton onClick={handlePlayClick}>
            <img src={play} alt='p' />
          </IconButton>
        </div>
      }
    </div>
  )
}

export default VideoPlayer