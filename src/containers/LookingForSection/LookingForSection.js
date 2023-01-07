import React from 'react'
import {
  Container,
  Grid
} from '@material-ui/core'
import useStyles from './styles'
import { LookingForCard } from 'components/Card'
import iconImg from 'assets/images/background/Icons_background.png'
import illustrationImg from 'assets/images/background/illustrations_background.png'
import { useMediaQuery } from 'react-responsive'

const LookingForSection = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery({ maxWidth: 600 })

  return (
    <Container className={classes.root}>
      <div className={classes.title}>What are you looking for?</div>
      <Grid container spacing={3}>
        <Grid item xs={isMobile ? 12 : 6}>
          <LookingForCard
            url='/search?mode=Icons'
            img={iconImg}
            title='Icons'
            content='Ideal to improve the user experience on websites.'
          />
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <LookingForCard
            url='/search?mode=Illustrations'
            img={illustrationImg}
            title='Illustrations'
            content='Ideal for users who want to tell a story on a different level.'
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default LookingForSection
