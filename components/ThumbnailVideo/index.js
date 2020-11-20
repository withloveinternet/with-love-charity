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

// TitleSubtitle.defaultProps = {
//   title: '',
//   subtitle: '',
// }

ThumbnailVideo.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  thumbnailVideoUrl: PropTypes.objectOf(PropTypes.string).isRequired,
  thumbnailVideoAlt: PropTypes.objectOf(PropTypes.string).isRequired,
}
export default withStyles(style)(ThumbnailVideo)
