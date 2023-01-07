import React, { useState, memo } from 'react'
import useStyles from './MP4Player.styles'
import ReactPlayer from 'react-player'

const Mp4Player = memo(({ src, lightPath, autoplay }) => {
  const classes = useStyles()
  const [isPlaying, setIsPlaying] = useState(false)
  const [light, setLight] = useState(lightPath)

  const handleMouseEnter = () => {
    setLight(false)
    setIsPlaying(true)
  }

  const handleMouseLeave = () => {
    setIsPlaying(false)
  }

  return (
    <div className={classes.root} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ReactPlayer
        url={src}
        width='100%'
        height='100%'
        playIcon={<p></p>}
        light={!autoplay && light}
        loop
        playing={autoplay ? true : isPlaying}
        muted
        playsinline
        vimeoConfig={{ iframeParams: { fullscreen: 0 } }}
      />
    </div>
  )
},
  (prevProps, nextProps) => {
    return (
      prevProps.src === nextProps.src && 
      prevProps.lightPath === nextProps.lightPath
    )
  })

export default Mp4Player