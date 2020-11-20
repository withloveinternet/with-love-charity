import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles'
import style from './style'
import { structuredTextPropTypes, imagePropTypes } from '../../utils/prop-types'
import TitleSubtitle from '../../components/TitleSubtitle'

const WorkDetailsGallery = ({ slice, classes }) => {
  const { primary, items } = slice

  return (
    <Container className={classes.workDetailsGallery}>
      <TitleSubtitle
        title={RichText.asText(primary.sectionTitle)}
        subtitle={RichText.asText(primary.sectionSubtitle)}
      />
      <Grid container spacing={4} className="galleryContainer">
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4}>
            <img src={item.photo.url} alt={item.photo.alt} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

WorkDetailsGallery.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      sectionTitle: structuredTextPropTypes,
      sectionSubtitle: structuredTextPropTypes,
    }).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        photo: imagePropTypes,
      })
    ).isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(WorkDetailsGallery)
