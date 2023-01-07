import React, { memo, useEffect, useState } from 'react'
import useStyles from './styles.js'
import * as cx from 'classnames'
import { ColorBox, ColorButton } from 'material-ui-color'
import {
  Popper,
  Fade,
  Paper,
  ClickAwayListener,
  Button,
} from '@material-ui/core'

const CustomColorPicker = memo(({
  classNames,
  isOnEditMode,
  initialValue,
  resetColor,
  onChangeColor,
  onResetColor,
  size = 'medium',
  hideColorText = true,
  onMouseEnter,
  onMouseLeave,
}) => {
  const classes = useStyles()
  const sizeClass = size === 'small' ? classes.sizeSmall : classes.sizeMedium
  const [color, setColor] = useState(`#${initialValue ? initialValue : `000000`}`)
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [placement, setPlacement] = useState()
  const [arrowRef, setArrowRef] = useState(null)

  useEffect(() => {
    initialValue && setColor(`#${initialValue}`)
  }, [initialValue])

  useEffect(() => {
    resetColor && setColor(`#${initialValue}`)
  }, [resetColor, initialValue, setColor])

  useEffect(() => {
    let colorPicker = document.getElementById('hex')
    if (colorPicker) {
      colorPicker.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const hex = colorPicker.value
          const r = document.getElementById('r').value
          const g = document.getElementById('g').value
          const b = document.getElementById('b').value
          const rgb = [r, g, b]
          const value = { hex, rgb }
          setOpen(false)
          setColor(`#${hex}`)
          onChangeColor(initialValue, value)
        }
      })
    }
  })

  const handleChange = (value) => {
    setOpen(false)
    setColor(`#${value.hex}`)
    onChangeColor(initialValue, value)
  }
  const handleResetColor = () => {
    setOpen(false)
    setColor(`#${initialValue ? initialValue : `000000`}`)
    onResetColor()
  }
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget)
    setOpen((prev) => placement !== newPlacement || !prev)
    setPlacement(newPlacement)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className={classes.root}>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        className={classes.popper}
        transition
        disablePortal={false}
        modifiers={{
          flip: {
            enabled: true,
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: 'window',
          },
          arrow: {
            enabled: true,
            element: arrowRef,
          },
        }}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Fade {...TransitionProps} timeout={350}>
              <Paper elevation={3}>
                <span className={classes.arrow} ref={setArrowRef} />
                <div>
                  <Button
                    className={classes.resetButton}
                    onClick={handleResetColor}
                  >Reset Color</Button>
                  <ColorBox
                    value={color}
                    onChange={handleChange}
                    disableAlpha
                    deferred
                    className={classes.colorBox}
                  />
                </div>
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>

      <div className={classes.colorBackground}>
        <ColorButton
          style={{
            backgroundColor: `${color} !important`,
          }}
          color={color}
          size={size === 'small' ? 24 : 30}
          onClick={handleClick(isOnEditMode ? 'bottom' : 'bottom')}
          onMouseEnter={() => onMouseEnter && onMouseEnter()}
          onMouseLeave={() => onMouseLeave && onMouseLeave()}
        />
      </div>
      {
        !hideColorText &&
        <div className={cx(classes.colorText, sizeClass)}>#{color.hex ? color.hex : color.slice(1)}</div>
      }
    </div >
  )
},
  (prevProps, nextProps) => {
    return (
      prevProps.initialValue === nextProps.initialValue &&
      prevProps.resetColor === nextProps.resetColor
    )
  })

export default CustomColorPicker
