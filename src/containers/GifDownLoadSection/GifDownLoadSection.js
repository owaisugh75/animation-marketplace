import React, { useState, useRef, useEffect } from 'react'
import {
  Container,
  Grid,
  Backdrop,
  CircularProgress,
} from '@material-ui/core'
import useStyles from './styles'
import { GifDropButton } from 'components/GifDropButton'
import { ControllerContainer } from 'components/ControllerContainer'
import { CustomColorPicker } from 'components/CustomColorPicker'
import { CustomButton } from 'components/CustomButton'
import LinearProgressWithLabel from './LinearProgressWithLabel'
import d2i from 'dom-to-image'
import { saveAs } from 'file-saver'
import GIF from 'gif.js'
import { downloadLottie } from 'redux/modules/lottie/actions'
import { setLottieToGifPercent } from 'redux/modules/global/actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { authInfo } from 'helpers/localCheck'
import Lottie from 'lottie-web'

const GifDownLoadSection = ({
  setLottieToGifPercent,
  downloadLottie,
}) => {
  const classes = useStyles()
  const lottieInfo = JSON.parse(localStorage.getItem('animatly_selected_lottie'))
  const [backgroundColor, setBackgroundColor] = useState({ hex: 'ffffff' })
  const [size, setSize] = useState(500)
  const [isConverting, setIsConverting] = useState(false)
  const [lottieInstance, setLottieInstance] = useState(null)
  const container = useRef(null)
  const previewContainer = useRef(null)

  useEffect(() => {
    if (lottieInfo.path || lottieInfo.data) {
      let gifInstance = Lottie.loadAnimation({
        container: container.current,
        path: lottieInfo.path && lottieInfo.path,
        animationData: lottieInfo.data && JSON.parse(lottieInfo.data),
        autoplay: false,
        loop: false,
      })
      setLottieInstance(gifInstance)

      Lottie.loadAnimation({
        container: previewContainer.current,
        path: lottieInfo.path && lottieInfo.path,
        animationData: lottieInfo.data && JSON.parse(lottieInfo.data),
        autoplay: true,
        loop: true,
      })
    }
  }, [lottieInfo.path, lottieInfo.data])

  const converToGif = async (gifInstance) => {
    const originHeight = gifInstance.animationData.h
    const originWeight = gifInstance.animationData.w
    const gif = new GIF({
      workers: 10,
      workerScript: '/js/gif.worker.js',
      quality: 1,
      debug: false,
      background: `#${backgroundColor.hex}`,
      width: size,
      height: size * (originHeight / originWeight),
    })
    const frameRate = gifInstance.frameRate
    const delay = (1 / frameRate) * 1000

    for (
      let curFrame = 0;
      curFrame < gifInstance.totalFrames;
      curFrame++
    ) {
      lottieInstance.goToAndStop(curFrame, true)
      const gifLottie = document.getElementById('gif-lottie')

      setLottieToGifPercent(50 * (curFrame / gifInstance.totalFrames))

      let dataUrl = await d2i.toPng(gifLottie)

      if (dataUrl.length === 6) continue

      let img = new Image()
      img.src = dataUrl

      await gif.addFrame(img, { delay })
    }

    gif.on('finished', async (blgoParam) => {
      const blob = new Blob([blgoParam])
      await saveAs(blob, `${lottieInfo.name}.gif`)
      setIsConverting(false)
    })
    gif.on('progress', (value) => {
      setLottieToGifPercent(50 + (value * 50))
    })

    gif.render()
  }

  const handleChangeColor = (old, value) => {
    setBackgroundColor(value)
  }
  const handleChangeSize = (value) => {
    setSize(value)
  }
  const handleClickConvert = () => {
    addDownloadHistory()
    setIsConverting(true)
    converToGif(lottieInstance)
  }
  const handleResetColor = () => {
    setBackgroundColor({ hex: 'ffffff' })
  }

  const addDownloadHistory = async () => {
    await downloadLottie({
      body: {
        type: lottieInfo.type,
        lottieId: lottieInfo.id,
        userId: authInfo().user.id,
        date: Date.now(),
      }
    })
  }

  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={classes.lottieArea}>
              <div ref={previewContainer}
                style={{ backgroundColor: `#${backgroundColor.hex}`, width: '100%' }}
              ></div>
              <Backdrop className={classes.backdrop} open={isConverting}>
                <CircularProgress color='secondary' />
              </Backdrop>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ControllerContainer title='Background color:'
                  className={classes.extendedArea}
                >
                  <div className={isConverting ? classes.disable : classes.root}>
                    <CustomColorPicker
                      isOnEditMode
                      initialValue='ffffff'
                      onChangeColor={handleChangeColor}
                      onResetColor={handleResetColor}
                    />
                  </div>
                </ControllerContainer>
              </Grid>
              <Grid item xs={12}>
                <ControllerContainer title='Size:'
                  className={classes.extendedArea}
                >
                  <div className={isConverting ? classes.disable : classes.root}>
                    <GifDropButton isOnEditMode onChange={handleChangeSize} viewMode={lottieInfo.type} />
                  </div>
                </ControllerContainer>
              </Grid>
              <Grid item xs={12}>
                <div className={isConverting ? classes.disable : classes.root}>
                  <CustomButton
                    className={classes.downloadButton}
                    content='Convert to GIF'
                    type='filled'
                    onClick={handleClickConvert}
                  />
                </div>
                {isConverting && <LinearProgressWithLabel />}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container >
      <div
        className={classes.gifArea}
        style={{
          background: `#${backgroundColor.hex}`,
          width: `${size}px`,
        }}
      >
        <div className={classes.lottieContainer}>
          <div
            id='gif-lottie'
            ref={container}
            style={{
              background: `#${backgroundColor.hex}`,
              width: `${size}px`,
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

GifDownLoadSection.propTypes = {
  setLottieToGifPercent: PropTypes.func,
  downloadLottie: PropTypes.func,
}

const actions = {
  setLottieToGifPercent,
  downloadLottie,
}


export default compose(connect(null, actions))(GifDownLoadSection)
