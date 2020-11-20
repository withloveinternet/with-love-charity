import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import style from './style'
import { imagePropTypes, structuredTextPropTypes } from '../../utils/prop-types'

const TestimonialBackgroundImage = ({ slice, classes }) => {
  const { primary } = slice
  
  const styles = {}
  if (primary.backgroundImage) {
    styles.backgroundImage = `url(${primary.backgroundImage.url})`
  }

  return (
    <div className={classes.workDetailsTestimonials} style={styles}>
      <div className="background">
        <Container maxWidth="lg" className="container">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="container"
          >
            <Typography variant="h4" className="testimonialText">
              {RichText.asText(primary.testimonialText)}
            </Typography>
            <Typography variant="h4" className="author">
              {RichText.asText(primary.author)}
            </Typography>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

TestimonialBackgroundImage.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      backgroundImage: imagePropTypes,
      testimonialText: structuredTextPropTypes,
      author: structuredTextPropTypes
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(TestimonialBackgroundImage)
