import React from 'react'
import {
  Container,
  Grid
} from '@material-ui/core'
import useStyles from './styles'
import { ForUser } from 'components/ForUser'
import { Mobile, Default } from 'containers/ResponseLayout'
import AosComponent from 'components/AosComponent'
import { LottiePlay } from 'components/LottiePlay'
import desingerLottie from 'assets/lottie/Designer.json'
import developerLottie from 'assets/lottie/Developer.json'
import visionaireLottie from 'assets/lottie/Visionaire.json'

const content = {
  designer: {
    userType: 'For designers',
    title: 'Simple, Simpler, Animatly',
    description: `Whether you want to support facts and descriptions with icons or create unique 
    experiences in apps with our animated illustrations. Animatly offers you as a designer 
    all the tools you need to surprise your customers with unique designs.`,
    buttonText: 'Join as a designer',
    MobileButtonText: 'Join as designer'
  },
  developer: {
    userType: 'For developers',
    title: 'Less storage more speed with the Lottiefile.',
    description: `As a developer you will not only stand out from your colleagues with unique animations. 
    With Lottie file you will also beat your colleagues by far in website performance. 
    The Lottie file is up to 3,000 times smaller than the GIF.`,
    buttonText: 'Join as a developer',
    MobileButtonText: 'Join as developer'
  },
  visionary: {
    userType: 'For visionaries',
    title: 'Motion in your pitches',
    description: `Business pitches on a different level? Yes, with Animatly this is possible! 
    Touch your customers with storytelling and sell them your own story. Implement the animation 
    as GIF to your presentations and you will be amazed how easy you can impress your audience.`,
    buttonText: 'Join as visionaries',
    MobileButtonText: 'Join as visionaries'
  },
}

const IntroduceSection = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Mobile>
          <Grid item xs={12} className={classes.item} >
            <AosComponent>
              <ForUser props={content.designer} />
            </AosComponent>
          </Grid>
          <Grid item xs={12} className={classes.item} >
            <AosComponent>
              <LottiePlay src={desingerLottie} className={classes.lottieArea} />
            </AosComponent>
          </Grid>
          <Grid item xs={12} className={classes.item} >
            <AosComponent>
              <ForUser props={content.developer} />
            </AosComponent>
          </Grid>
          <Grid item xs={12} className={classes.item} >
            <AosComponent>
              <LottiePlay src={developerLottie} className={classes.lottieArea} />
            </AosComponent>
          </Grid>
          <Grid item xs={12} className={classes.item} >
            <AosComponent>
              <ForUser props={content.visionary} />
            </AosComponent>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            <AosComponent>
              <LottiePlay src={visionaireLottie} className={classes.lottieArea} />
            </AosComponent>
          </Grid>
        </Mobile>

        <Default>
          <Grid item xs={6} className={classes.item} >
            <AosComponent mode='right'>
              <LottiePlay src={desingerLottie} className={classes.lottieArea} />
            </AosComponent>
          </Grid>
          <Grid item xs={6} className={classes.item} >
            <AosComponent mode='left'>
              <ForUser props={content.designer} />
            </AosComponent>
          </Grid>
          <Grid item xs={6} className={classes.item} >
            <AosComponent mode='right'>
              <ForUser props={content.developer} />
            </AosComponent>
          </Grid>
          <Grid item xs={6} className={classes.item} >
            <AosComponent mode='left'>
              <LottiePlay src={developerLottie} className={classes.lottieArea} />
            </AosComponent>
          </Grid>
          <Grid item xs={6} className={classes.item} >
            <AosComponent mode='right'>
              <LottiePlay src={visionaireLottie} className={classes.lottieArea} />
            </AosComponent>
          </Grid>
          <Grid item xs={6} className={classes.item} >
            <AosComponent mode='left'>
              <ForUser props={content.visionary} />
            </AosComponent>
          </Grid>
        </Default>
      </Grid>
    </Container>
  )
}

export default IntroduceSection
