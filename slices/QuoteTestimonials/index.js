import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import style from './style'
import { structuredTextPropTypes, imagePropTypes } from '../../utils/prop-types'
import TitleSubtitle from '../../components/TitleSubtitle'
import VideoModal from '../../components/VideoModal'

const QuoteTestimonials = ({ slice, classes }) => {
  const { primary, items } = slice
  const [openModal, setOpenModal] = useState(false)

  const openVideoDialog = () => {
    setOpenModal(true)
  }

  const closeVideoDialog = () => {
    setOpenModal(false)
  }

  return (
    <div className={classes.quoteTestimonialsBg}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
          className="quoteWrapper"
        >
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" className="quoteText">
              <img
                src="/quote-left-font-awesome.png"
                alt="quotes"
                className="quoteImg"
              />
              {RichText.asText(primary.quoteText)}
              <img
                src="/quote-right-font-awesome.png"
                className="quoteRight quoteImg"
                alt="quotes"
              />
            </Typography>
            <Typography className="quoteAuthor">
              {RichText.asText(primary.quoteAuthor)}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} container direction="row" justify="center">
            <div className="rightImageOverlay" />
            <img
              src={primary.rightImage.url}
              className="rightImage"
              alt="quotes"
            />
          </Grid>
        </Grid>
        <TitleSubtitle
          title={RichText.asText(primary.title)}
          subtitle={RichText.asText(primary.subtitle)}
          showClass
        />

        <Grid
          container
          spacing={4}
          direction="row"
          justify="center"
          alignItems="center"
          className="testimonialWrapper"
        >
          {items.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              container
              direction="row"
              justify="center"
              className={classes.testimonialCardGrid}
            >
              <img
                src={item.profilePicture.url}
                alt="profile"
                className={classes.testimonialImg}
              />
              <div className={classes.testimonialCard}>
                <Typography variant="subtitle2" className="name">
                  {RichText.asText(item.name)}
                </Typography>
                <Typography className="testimonialTitle">
                  {RichText.asText(item.title)}
                </Typography>
                <Typography className="testimonial">
                  {RichText.asText(item.testimonial)}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">
          <Button variant="outlined" className={classes.videoButton} onClick={openVideoDialog}>
            {RichText.asText(primary.videoButtonText)}
          </Button>
        </Grid>
      </Container>
      <VideoModal open={openModal} handleClose={closeVideoDialog} video={primary.vimeoLink} />
    </div>
  )
}

QuoteTestimonials.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      quoteText: structuredTextPropTypes,
      quoteAuthor: structuredTextPropTypes,
      rightImage: imagePropTypes,
      title: structuredTextPropTypes,
      subtitle: structuredTextPropTypes,
      videoButtonText: structuredTextPropTypes,
      vimeoLink: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        profilePicture: imagePropTypes,
        name: structuredTextPropTypes,
        title: structuredTextPropTypes,
        testimonial: structuredTextPropTypes,
      })
    ).isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(QuoteTestimonials)
