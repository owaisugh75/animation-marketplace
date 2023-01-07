import React, { useState } from 'react'
import useStyles from './PricingFeatureCard.styles'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Collapse,
  IconButton,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { CustomButton } from 'components/CustomButton'
import pricing_tick from 'assets/images/Icon/pricing_tick.svg'
import * as cx from 'classnames'
import { Mobile, Default } from 'containers/ResponseLayout'
import { useMediaQuery } from 'react-responsive'

function PricingFeatureCard({ info, onPurchase }) {
  const classes = useStyles()
  const isIpad = useMediaQuery({ minWidth: 601, maxWidth: 992 })
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const ContentRender = () => (
    <>
      <div className={classes.contentHeaderArea}>
        <div className={classes.value}>{info.value}</div>
        <div className={classes.descriptionArea}>
          <div className={classes.valueDescription}>/yearly subscription</div>
        </div>
      </div>
      {
        info.content && info.content.map((item, key) => (
          <div className={classes.contentRow} key={key}>
            <img className={classes.itemImg} src={pricing_tick} alt='t' />
            <div>
              <div className={classes.itemTitle}>{item.title}</div>
              <div className={classes.itemText}>{isIpad ? item.ipad_text : item.text}</div>
            </div>
          </div>
        ))
      }
    </>
  )

  return (
    <>
      <Mobile>
        <Card className={classes.root}>
          <div
            className={cx(classes.headerArea, info.special && classes.addColor)}
            onClick={handleExpandClick}
          >
            {
              info.special &&
              <div className={classes.mobileDiscountHeader}>MOST POPULAR</div>
            }
            <CardHeader
              title={info.title}
              subheader={info.subheader}
              action={
                <IconButton
                  className={cx(classes.expand, {
                    [classes.expandOpen]: expanded
                  })}
                  aria-expanded={expanded}
                >
                  <ExpandMoreIcon color={info.special ? 'secondary' : 'primary'} fontSize='large' />
                </IconButton>
              }
            />
          </div>
          <Divider />
          <Collapse in={expanded} timeout='auto' unmountOnExit className={classes.expandArea}>
            <CardContent className={classes.contentArea}>
              <ContentRender />
            </CardContent>
            <CardActions className={classes.actionArea} disableSpacing>
              <CustomButton
                content={`Buy ${info.title}`}
                type={info.special ? 'filled' : 'outLine'}
                style={{ width: '100%', height: '46px' }}
                onClick={() => onPurchase(info.id)}
              />
            </CardActions>
          </Collapse>
        </Card>
      </Mobile>

      <Default>
        <div className={classes.label}>
          {
            info.special &&
            <div className={classes.lableText}>MOST POPULAR</div>
          }
        </div>
        <Card className={cx(classes.root, info.special && classes.labelBorder)}>
          <CardHeader
            className={classes.headerArea}
            title={info.title}
            subheader={info.subheader}
          />
          <Divider />
          <CardContent className={cx(classes.contentArea, (info.id === 2 && isIpad) && classes.smallcontent)}>
            <ContentRender />
            <div style={{ height: '8px' }}></div>
            <Divider className={classes.divider} />
          </CardContent>
          <CardActions className={classes.actionArea} disableSpacing>
            <CustomButton
              content={`Buy ${info.title}`}
              type={info.special ? 'filled' : 'outLine'}
              style={{ width: '100%', height: '40px' }}
              onClick={() => onPurchase(info.id)}
            />
          </CardActions>
        </Card>
      </Default>
    </>
  )
}

export default PricingFeatureCard
