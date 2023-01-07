import React, { memo, useEffect, useState } from 'react'
import useStyles from './LottiePreview.styles'
import { LibraryLottiePlayer, PreviewLottiePlay } from 'components/LottiePlay'
import {
  AppBar,
  Container,
  Dialog,
  Divider,
} from '@material-ui/core'
import { Mobile, Default } from 'containers/ResponseLayout'
import * as cx from 'classnames'
import { CustomButton } from 'components/CustomButton'
import { authInfo } from 'helpers/localCheck'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  setCreateAccountFirstOpen,
  setNeedToUpgradeOpen,
} from 'redux/modules/global/actions'
import { saveAs } from 'file-saver'
import {
  editLottie,
  downloadLottie,
  saveLottie,
  removeSavedLottie,
  checkSavedLottie,
} from 'redux/modules/lottie/actions'
import Player from 'react-lottie'
import d2i from 'dom-to-image'
import { PageHeader } from 'components/PageHeader'
import { IncredibleSection } from 'containers/IncredibleSection'
import { MobileFooter } from 'containers/Footer'
import { useMediaQuery } from 'react-responsive'
import isEqual from 'lodash/isEqual'
import demoHtml from 'assets/html/demo.txt'

const LottiePreview = memo(({
  lottieInfo,
  viewMode,
  onEditClick,
  setCreateAccountFirstOpen,
  setNeedToUpgradeOpen,
  editLottie,
  downloadLottie,
  saveLottie,
  removeSavedLottie,
  checkSavedLottie,
  onPreviewClose,
  isBasedEditor,
}) => {
  const classes = useStyles()
  const isIpad = useMediaQuery({ minWidth: 601, maxWidth: 992 })
  const [open, setOpen] = useState(true)
  const [isSaved, setIsSaved] = useState(false)
  const [lottieData, setLottieData] = useState(null)
  const isLogedin = authInfo().tokens ? true : false

  useEffect(() => {
    const checkSavedHistory = async () => {
      await checkSavedLottie({
        body: {
          type: viewMode,
          lottieId: lottieInfo.id,
          userId: authInfo().user.id,
        },
        success: ({ data }) => {
          setIsSaved(data)
        },
        fail: (err) => {
          setIsSaved(false)
        }
      })
    }
    lottieInfo && authInfo().user && checkSavedHistory()
  }, [lottieInfo, viewMode, setIsSaved, checkSavedLottie])

  const checkPermission = () => {
    const userInfo = authInfo().user
    if (!userInfo) {
      return 'noAccount'
    } else {
      if (lottieInfo.mode === 'prev') {
        return 'noPermission'
      } else {
        return 'okay'
      }
    }
  }

  const isSvgAvailable = () => {
    const permission = checkPermission()
    if (permission !== 'okay') {
      return false
    }
    const userRole = authInfo().user.role
    if (viewMode === 'Illustrations' && userRole === 'iconLicensedUser') {
      return true
    } else if (viewMode === 'Icons' && userRole === 'illustrationLicensedUser') {
      return true
    } else if (userRole === 'bothLicensed' || userRole === 'admin' || userRole === 'freeUser') {
      return true
    } else {
      return false
    }
  }

  const handleFetchLottieData = (data) => {
    setLottieData(data)
  }

  const downloadFile = (fileName, data) => {
    const blob = new Blob([data])
    saveAs(blob, fileName)
  }

  const handleClick = (button) => async (e) => {
    switch (checkPermission()) {
      case 'noAccount':
        setCreateAccountFirstOpen({ open: true })
        return
      case 'noPermission':
        setNeedToUpgradeOpen({ open: true })
        return
      default:
        break
    }
    editLottie(lottieInfo)
    switch (button) {
      case 'edit':
        onEditClick()
        break
      case 'json':
        addDownloadHistory()
        const data = await fetch(demoHtml).then(res => res.text()).then(res => res.toString())
        const demo = data.replace('Lottie-Data', lottieData)

        downloadFile(lottieInfo.name + '.json', lottieData)
        downloadFile(lottieInfo.name + '.html', demo)
        break
      case 'gif':
        window.open('/gifDownload', '_blank')
        break
      case 'aef':
        addDownloadHistory()
        saveAs(lottieInfo.aefPath, lottieInfo.name + '.aep')
        break
      case 'svg':
        addDownloadHistory()
        const svgLottie = document.getElementById('svg-lottie-preview')
        const filter = (node) => {
          return (node.tagName !== 'i')
        }
        let blob = await d2i.toSvg(svgLottie, { filter })
        saveAs(blob, `${lottieInfo.name}.svg`)
        break
      case 'save':
        isSaved ? removeSavedHistory() : addSavedHistory()
        break
      default:
        break
    }
  }

  const addDownloadHistory = async () => {
    await downloadLottie({
      body: {
        type: viewMode,
        lottieId: lottieInfo.id,
        userId: authInfo().user.id,
        date: Date.now(),
      }
    })
  }

  const addSavedHistory = async () => {
    await saveLottie({
      body: {
        type: viewMode,
        lottieId: lottieInfo.id,
        userId: authInfo().user.id,
        date: Date.now(),
      },
      success: ({ data }) => {
        setIsSaved(true)
      }
    })
  }

  const removeSavedHistory = async () => {
    await removeSavedLottie({
      body: {
        type: viewMode,
        lottieId: lottieInfo.id,
        userId: authInfo().user.id,
      },
      success: ({ data }) => {
        setIsSaved(false)
      }
    })
  }

  const handleBackClick = () => {
    setOpen(false)
    onPreviewClose()
  }

  return (
    <>
      <Mobile>
        <Dialog
          fullScreen
          scroll='body'
          open={open}
          maxWidth='xl'
        >
          <div>
            <PageHeader
              mobile
              backUrl='#'
              onBackClick={handleBackClick}
              onSavedClick={handleClick('save')}
              isSaved={isSaved}
              savedButton
            />
            <Container><div className={classes.name}>{lottieInfo.name}</div></Container>
            <Container>
              <div className={cx(classes.lottieArea, viewMode === 'Icons' ? classes.iconsArea : classes.illuArea)}>
                {
                  lottieInfo && lottieInfo.mode === 'json'
                    ?
                    <LibraryLottiePlayer
                      path={lottieInfo.path}
                      className={classes.lottieSize}
                      autoplay
                    />
                    :
                    <PreviewLottiePlay
                      path={lottieInfo.path}
                      autoplay
                    />
                }
              </div>
            </Container>
            <Divider />
            <Container>
              <div className={classes.name} style={{ marginTop: '16px' }}>Download/ Edit</div>
              <div className={classes.description}>
                Switch to desktop device to download and edit this {viewMode === 'Icons' ? 'icon' : 'illustration'}.
              </div>
            </Container>
            {!isLogedin && <IncredibleSection />}
            <MobileFooter />
          </div>
        </Dialog>
      </Mobile>

      <Default>
        <AppBar className={classes.root} position={'fixed'}>
          <Container className={classes.content}>
            <div className={cx(classes.lottieArea, viewMode === 'Icons' ? classes.iconsArea : classes.illuArea)}>
              {
                lottieInfo && lottieInfo.mode === 'json'
                  ?
                  <LibraryLottiePlayer
                    path={lottieInfo.path}
                    className={classes.lottieSize}
                    autoplay
                    loop
                    fetchData={handleFetchLottieData}
                    viewMode={viewMode}
                    isBasedEditor={isBasedEditor}
                  />
                  :
                  <PreviewLottiePlay
                    path={lottieInfo.path}
                    autoplay
                  />
              }
            </div>
            <div className={classes.name}>{lottieInfo.name}</div>
            <CustomButton
              className={classes.editButton}
              content='Edit'
              type='filled'
              onClick={handleClick('edit')}
            />
            <div className={classes.space}></div>
            <CustomButton
              className={classes.downloadButton}
              content='JSON'
              type='outLine'
              onClick={handleClick('json')}
            />
            <CustomButton
              className={classes.downloadButton}
              content='GIF'
              type='outLine'
              onClick={handleClick('gif')}
            />
            <CustomButton
              className={classes.downloadButton}
              content={isIpad ? 'AE' : 'After Effects'}
              type='outLine'
              onClick={handleClick('aef')}
            />
            {
              isSvgAvailable() === true &&
              < CustomButton
                className={classes.downloadButton}
                content='SVG'
                type='outLine'
                onClick={handleClick('svg')}
              />
            }
            <CustomButton
              className={classes.saveButton}
              icon
              type='saved'
              onClick={handleClick('save')}
              isChecked={isSaved}
            />
          </Container>
        </AppBar>
        {
          lottieData &&
          <div className={classes.hiddenLottie}>
            <div id='svg-lottie-preview'>
              <Player
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: JSON.parse(lottieData),
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  },
                }}
                isStopped
              />
            </div>
          </div>
        }
      </Default>
    </>
  )
},
  (prevProps, nextProps) => {
    return (
      isEqual(prevProps.lottieInfo, nextProps.lottieInfo)
    )
  })

LottiePreview.propTypes = {
  setCreateAccountFirstOpen: PropTypes.func,
  setNeedToUpgradeOpen: PropTypes.func,
  editLottie: PropTypes.func,
  downloadLottie: PropTypes.func,
  saveLottie: PropTypes.func,
  removeSavedLottie: PropTypes.func,
  checkSavedLottie: PropTypes.func,
}

const actions = {
  setCreateAccountFirstOpen,
  setNeedToUpgradeOpen,
  editLottie,
  downloadLottie,
  saveLottie,
  removeSavedLottie,
  checkSavedLottie,
}

export default compose(connect(null, actions))(LottiePreview)
