import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import style from './style'

const PersonItem = ({
  classes,
  tag,
  name,
  title,
  bannerImageSrc,
  bannerImageAlt,
  btnLabel,
  showTag,
  showBtn,
}) => {
  return (
    <div className={classes.speaker}>
      <img src={bannerImageSrc} alt={bannerImageAlt} />
      <div className="speakerInfo">
        {showTag && <div className="tag">{tag}</div>}
        <Typography variant="h5" className="name">
          {name}
        </Typography>
        <Typography variant="subtitle2" className="title">
          {title}
        </Typography>
        {showBtn && (
          <Button variant="outlined" color="primary">
            {btnLabel}
          </Button>
        )}
      </div>
    </div>
  )
}

PersonItem.defaultProps = {
  tag: '',
  btnLabel: '',
  showTag: false,
  showBtn: false,
}

PersonItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  tag: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  bannerImageSrc: PropTypes.string,
  bannerImageAlt: PropTypes.string,
  btnLabel: PropTypes.string,
  showTag: PropTypes.bool,
  showBtn: PropTypes.bool,
}
export default withStyles(style)(PersonItem)
