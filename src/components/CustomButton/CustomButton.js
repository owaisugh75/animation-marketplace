import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './styles'
import * as cx from 'classnames'
import svgHeartColor from 'assets/images/Icon/heart_color.svg'
import svgHeartWhite from 'assets/images/Icon/heart_white.svg'

const CustomButton = ({
  className,
  content,
  icon,
  type,
  noHover,
  isChecked,
  ...props
}) => {
  const classes = useStyles()
  const [classType, setClassType] = useState(null)
  const [saveButtonSvg, setSaveButtonSvg] = useState(isChecked ? svgHeartWhite : svgHeartColor)

  useEffect(() => {
    const setClassByType = () => {
      switch (type) {
        case 'header':
          setClassType(classes.header)
          break
        case 'filled':
          setClassType(cx(classes.filled, noHover && classes.savedfilledlineHover))
          break
        case 'outLine':
          setClassType(cx(classes.outLine, noHover && classes.savedOutlineHover))
          break
        case 'saved':
          setClassType(cx(classes.saved,
            isChecked ?
              cx(classes.filled, classes.savedfilledlineHover)
              :
              cx(classes.outLine, classes.savedOutlineHover))
          )
          setSaveButtonSvg(isChecked ? svgHeartWhite : svgHeartColor)
          break
        default:
          break
      }
    }
    setClassByType()
  }, [type, isChecked, classes, noHover])

  const handleHover = (e) => {
  }
  const handleLeave = (e) => {
  }

  return (
    <Button
      className={cx(classes.root, className, classType)}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      startIcon={
        icon &&
        <img
          src={type === 'saved' ? saveButtonSvg : icon}
          className={type === 'saved' ? classes.saveIcon : classes.buttonIcon}
          alt='h'
        />
      }
      {...props}
    >
      {content}
    </Button>
  )
}

CustomButton.propTypes = {
  className: PropTypes.any,
  content: PropTypes.string,
  icon: PropTypes.any,
  type: PropTypes.string,
  isChecked: PropTypes.bool,
}

export default CustomButton
