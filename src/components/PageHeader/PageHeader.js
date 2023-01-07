import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './PageHeader.styles'
import { CustomButton } from 'components/CustomButton'
import { useHistory } from 'react-router-dom'
import * as cx from 'classnames'
import svgBack from 'assets/images/Icon/back.svg'
import svgBack_white from 'assets/images/Icon/back_white.svg'

const PageHeader = ({
  className,
  isSaved,
  onSavedClick,
  content,
  backUrl,
  savedButton,
  mobile,
  topFixed,
  onBackClick,
}) => {
  const classes = useStyles()
  const history = useHistory()
  const [backIcon, setBackIcon] = useState(svgBack)

  const handleBackClick = () => {
    if (backUrl === '#') {
      onBackClick()
    } else {
      history.push(backUrl)
    }
  }

  return (
    <Container
      className={cx(className, onBackClick ? classes.mobileRoot : classes.root, topFixed && classes.topFixed)}
    >
      {
        backUrl &&
        <div className={classes.buttonArea}>
          {
            backUrl &&
            <CustomButton
              className={classes.backButton}
              content={mobile ? 'Back' : 'Go Back'}
              onMouseEnter={() => setBackIcon(svgBack_white)}
              onMouseLeave={() => setBackIcon(svgBack)}
              icon={backIcon}
              type='outLine'
              onClick={handleBackClick}
            />
          }
          {
            savedButton &&
            <CustomButton
              className={classes.saveButton}
              icon
              type='saved'
              isChecked={isSaved}
              onClick={onSavedClick}
            />
          }
        </div>
      }
      { content && <div className={classes.content}>{content}</div>}
    </Container>
  )
}

PageHeader.propTypes = {
  content: PropTypes.string,
  backUrl: PropTypes.string,
  savedButton: PropTypes.bool,
  mobile: PropTypes.bool,
  topFixed: PropTypes.bool,
}

export default PageHeader
