import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import style from './style'

const CatergoryTag = ({
  classes,
  catergoryTagIconSrc,
  catergoryTagIconAlt,
  catergoryTagTitle,
  showIcon,
}) => {
  return (
    <div className={classes.catergoryTagWrapper}>
      <div className={classes.catergoryTag}>
        {showIcon && (
          <img src={catergoryTagIconSrc} alt={catergoryTagIconAlt} />
        )}
        {catergoryTagTitle}
      </div>
    </div>
  )
}

CatergoryTag.defaultProps = {
  showIcon: false,
}

CatergoryTag.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  catergoryTagIconSrc: PropTypes.string,
  catergoryTagIconAlt: PropTypes.string,
  catergoryTagTitle: PropTypes.string,
  showIcon: PropTypes.bool,
}
export default withStyles(style)(CatergoryTag)
