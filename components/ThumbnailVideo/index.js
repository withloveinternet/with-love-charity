import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import style from './style'

const ThumbnailVideo = ({ classes, thumbnailVideoUrl, thumbnailVideoAlt }) => {
  return (
    <div className={classes.imgBg}>
      <img src={thumbnailVideoUrl} alt={thumbnailVideoAlt} />
    </div>
  )
}

ThumbnailVideo.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  thumbnailVideoUrl: PropTypes.string,
  thumbnailVideoAlt: PropTypes.string,
}
export default withStyles(style)(ThumbnailVideo)
