import React, { useState } from 'react'
import {
  Input,
  InputAdornment,
  IconButton,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './styles'
import CancelRoundedIcon from '@material-ui/icons/CancelRounded'
import * as cx from 'classnames'

const CustomInput = ({
  className,
  placeholder,
  hasError,
  type,
  onFocusLeave,
  initialValue = '',
  onChange,
}) => {
  const classes = useStyles()
  const [value, setValue] = useState(initialValue)

  const handleRemove = () => {
    setValue('')
  }
  const handleChange = (e) => {
    setValue(e.target.value)
    onChange && onChange(e.target.value)
  }
  const handleFocusLeave = () => {
    onFocusLeave && onFocusLeave(value)
  }

  return (
    <div>
      <Input
        className={cx(classes.root, hasError && classes.error)}
        disableUnderline
        placeholder={placeholder}
        type={type ? type : 'text'}
        endAdornment={
          hasError &&
          <InputAdornment position='end' className={classes.adornment}>
            <IconButton
              onClick={handleRemove}
              size='small'
            >
              <CancelRoundedIcon fontSize='inherit' color='error' />
            </IconButton>
          </InputAdornment>
        }
        value={value}
        onBlur={handleFocusLeave}
        onChange={handleChange}
      />
      {
        hasError &&
        <p className={classes.helperText}>{hasError}</p>
      }
    </div>
  )
}

CustomInput.propTypes = {
  className: PropTypes.any,
  placeholder: PropTypes.string,
  hasError: PropTypes.any,
  type: PropTypes.string,
  onFocusLeave: PropTypes.func,
  onChange: PropTypes.func,
}

export default CustomInput
