import React from 'react'
import {
  LinearProgress,
  Box,
  Typography,
} from '@material-ui/core'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { convertingPercentSelector } from 'redux/modules/global/selectors'
import PropTypes from 'prop-types'

const LinearProgressWithLabel = ({
  convertingPercent,
}) => {
  return (
    <Box display='flex' alignItems='center'>
      <Box width='100%' mr={1}>
        <LinearProgress variant='determinate' value={convertingPercent} />
      </Box>
      <Box minWidth={35}>
        <Typography variant='body2' color='textSecondary'>{`${Math.round(
          convertingPercent,
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

LinearProgressWithLabel.propTypes = {
  convertingPercent: PropTypes.any,
}

const selector = createStructuredSelector({
  convertingPercent: convertingPercentSelector,
})

export default compose(connect(selector, null))(LinearProgressWithLabel)
