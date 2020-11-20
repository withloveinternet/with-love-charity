import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import style from './style'
import { structuredTextPropTypes, imagePropTypes } from '../../utils/prop-types'

const HeroBackgroundImage = ({ slice, classes }) => {
  const { primary } = slice

  const styles = {}
  if (primary.backgroundImage) {
    styles.backgroundImage = `url(${primary.backgroundImage.url})`
  }

  return (
    <div className={classes.workDetailsHeroBackground} style={styles}>
      <div className={classes.backgroundOverlay}>
        <Container maxWidth="lg" className="container">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="container"
          >
            {primary.title && (
              <Typography variant="h3" className="description">
                {RichText.asText(primary.title)}
              </Typography>
            )}
            {primary.description && (
              <Typography variant="subtitle2" className="boldText">
                {RichText.asText(primary.description)}
              </Typography>
            )}
            <div className={classes.heroButton}>
              <Button variant="contained" color="primary">
                {RichText.asText(primary.primaryCtaButtonText)}
              </Button>
              <Button variant="outlined">
                {RichText.asText(primary.secondaryCtaButtonText)}
              </Button>
            </div>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

HeroBackgroundImage.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: structuredTextPropTypes,
      description: structuredTextPropTypes,
      backgroundImage: imagePropTypes,
      primaryCtaButtonText: structuredTextPropTypes,
      secondaryCtaButtonText: structuredTextPropTypes,
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(HeroBackgroundImage)
