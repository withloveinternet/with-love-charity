import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { structuredTextPropTypes } from '../../utils/prop-types'
import style from './style'

const ContactForm = ({ classes, slice }) => {
  const { primary, items } = slice

  return (
    <Container className={classes.contactForm}>
      <Grid container spacing="4">
        <Grid item xs={12} sm={12} md={6}>
          <div className="FormCard">
            <Typography variant="subtitle1" className="formTitle">
              {RichText.asText(primary.title)}
            </Typography>
            <TextField
              placeholder={primary.placeholderName}
              variant="outlined"
              className="input"
              size="small"
            />
            <TextField
              placeholder={primary.placeholderEmail}
              variant="outlined"
              className="input"
              size="small"
            />
            <TextField
              placeholder={primary.placeholderPhoneNumber}
              variant="outlined"
              className="input"
              size="small"
            />
            <TextField
              placeholder={primary.placeholderMessage}
              variant="outlined"
              className="inputTextArea"
              size="small"
              multiline
              rows={12}
            />
            <Button variant="contained" color="primary" className="sendBtn">
              {primary.submitButton}
            </Button>
            <div className="formtnc">
              {RichText.render(primary.termsAndPrivacy)}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="branchCard">
            <img src={primary.countryImage.url} alt="" className="bannerImg" />
            <div className="branchCardData">
              <div className="country">
                <img src={primary.flagImage.url} alt="" />
                <Typography variant="h4" className="countryName">
                  {primary.countryName}
                </Typography>
              </div>
              <Typography variant="subtitle1" className="infoTitle">
                {primary.contactTitle}
              </Typography>
              <div className="infoData">
                {RichText.render(primary.contactText)}
              </div>
              <Typography variant="subtitle1" className="infoTitle">
                {primary.addressTitle}
              </Typography>
              <div className="infoData">
                {RichText.render(primary.addressText)}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

ContactForm.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: structuredTextPropTypes,
      placeholderName: PropTypes.string
    }).isRequired
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(ContactForm)
