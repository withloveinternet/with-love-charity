import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import style from './style'

const TitleSubtitle = ({ classes, title, subtitle, showClass }) => {
  return (
    <Grid container className={showClass ? classes.whiteTxt : classes.blueTxt}>
      <Grid item xs={12}>
        <Typography variant="h2" className="title">
          {title}
        </Typography>
        <Typography variant="subtitle1" className="subtitle">
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  )
}

TitleSubtitle.defaultProps = {
  showClass: false,
}

TitleSubtitle.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  showClass: PropTypes.bool,
}
export default withStyles(style)(TitleSubtitle)
