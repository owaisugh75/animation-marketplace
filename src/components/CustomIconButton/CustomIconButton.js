import React, { useState, useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './styles'
import * as cx from 'classnames'
import camera_over from 'assets/images/Icon/camera_color.svg'
import music_over from 'assets/images/Icon/music_color.svg'
import camera from 'assets/images/Icon/camera.svg'
import music from 'assets/images/Icon/music.svg'

const CustomIconButton = ({
  className,
  type,
  ...props
}) => {
  const classes = useStyles()
  const [basicImg, setBasicImg] = useState(null)

  useEffect(() => {
    const setClassByType = () => {
      switch (type) {
        case 'camera':
          setBasicImg(camera)
          break
        case 'music':
          setBasicImg(music)
          break
        default:
          break
      }
    }
    setClassByType()
  }, [type, classes])

  const handleHover = () => {
    type === 'camera' ? setBasicImg(camera_over) : setBasicImg(music_over)
  }
  const handleLeave = () => {
    type === 'camera' ? setBasicImg(camera) : setBasicImg(music)
  }
  const handleClick = () => {
    const url = type === 'camera' ? 'https://www.instagram.com/animatly.io/' : 'https://vm.tiktok.com/ZMJcNRvML/'
    window.open(url, '_blank')
  }

  return (
    <IconButton
      className={cx(classes.root, className)}
      {...props}
      onClick={handleClick}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      disableRipple
    >
      <img src={basicImg} alt='icon' />
    </IconButton>
  )
}

CustomIconButton.propTypes = {
  className: PropTypes.any,
  content: PropTypes.string,
  icon: PropTypes.any,
  type: PropTypes.string,
  isChecked: PropTypes.bool,
}

export default CustomIconButton
