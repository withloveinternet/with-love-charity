import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import style from './style'

const LeftTextImageRight = ({
  classes,
  preTitle,
  title,
  description,
  btnLabel,
  rightImageSrc,
  rightbannerImageAlt,
}) => {
  // const {classes,props} = this.props
  return (
    <Container maxWidth="lg" className={classes.leftTextImageRight}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" className="preTitle">
            {preTitle}
          </Typography>
          <Typography variant="h1" className="title">
            {title}
          </Typography>
          <Typography variant="subtitle1" className="description">
            {description}
          </Typography>
          <Button variant="contained" color="primary">
            {btnLabel}
          </Button>
        </Grid>
        <Grid item xs={12} md={6} container direction="row" justify="center">
          <div className="rightImageOverlay" />
          <img
            src={rightImageSrc}
            className="rightImage"
            alt={rightbannerImageAlt}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

LeftTextImageRight.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  preTitle: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.objectOf(PropTypes.string).isRequired,
  description: PropTypes.objectOf(PropTypes.string).isRequired,
  btnLabel: PropTypes.objectOf(PropTypes.string).isRequired,
  rightImageSrc: PropTypes.objectOf(PropTypes.string).isRequired,
  rightbannerImageAlt: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withStyles(style)(LeftTextImageRight)
