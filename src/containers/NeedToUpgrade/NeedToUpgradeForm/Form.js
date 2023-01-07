import React from 'react'
import useStyles from './Form.styles'
import {
  Container,
} from '@material-ui/core'
import { CustomButton } from 'components/CustomButton'
import { useHistory } from 'react-router-dom'

const Form = ({ onClose }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleUpgradeSubscription = () => {
    history.push('/pricing')
    onClose()
  }

  return (
    <>
      <div className={classes.root}>
        <Container>
          <div className={classes.title}>You need to upgrade your subscription.</div>
          <div className={classes.description}>
            This feature is not included in your subscription. Upgrade your supscription now.
          </div>
          <CustomButton
            content='Upgrade subscription'
            type='filled'
            className={classes.updateSubscription}
            onClick={handleUpgradeSubscription}
          />
        </Container>
        <div className={classes.label3}></div>
      </div>
    </>
  )
}

export default Form
