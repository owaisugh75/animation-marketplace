import React, { useState, useEffect } from 'react'
import {
  Chip
} from '@material-ui/core'
import useStyles from './styles'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { searchModeSelector } from 'redux/modules/global/selectors'

const iconTrends = ['Animals', 'Food', 'Home', 'Office', 'Sports']
const illustrationTrends = ['Business', 'Health', 'Office', 'Transport', 'Freetime']

const TrendSearch = ({
  searchMode,
  onClick,
}) => {
  const classes = useStyles()
  const [trendSearches, setTrendSearches] = useState([])

  useEffect(() => {
    searchMode === 'Icons' ? setTrendSearches(iconTrends) : setTrendSearches(illustrationTrends)
  }, [searchMode])

  return (
    <div className={classes.trendArea}>
      <div className={classes.root}>
        <div className={classes.title}>Trending searches:</div>
        <>
          {
            trendSearches.slice(0, 5).map((item, key) => {
              return (
                <Chip
                  variant='outlined'
                  label={item}
                  key={key}
                  className={classes.chip}
                  clickable
                  onClick={(e) => onClick(item)}
                />)
            })
          }
        </>
      </div>
    </div>
  )
}

TrendSearch.propTypes = {
  searchMode: PropTypes.string,
}

const selector = createStructuredSelector({
  searchMode: searchModeSelector,
})

export default compose(connect(selector, null))(TrendSearch)
