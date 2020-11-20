import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import style from './style'
import { imagePropTypes, structuredTextPropTypes } from '../../utils/prop-types'

const Subscribe = ({ slice, classes }) => {
  const { primary } = slice

  return (
    <div className={classes.subscribe}>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            container
            justify="center"
            alignItems="center"
          >
            <img
              src={primary.resourceImage.url}
              alt="quotes"
              className="resourceImage"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" className="title">
              {RichText.asText(primary.title)}
            </Typography>
            <Typography variant="subtitle2" className="description">
              {RichText.asText(primary.description)}
            </Typography>
            <Paper className="subscribeWrapper">
              <InputBase
                className="input"
                placeholder={RichText.asText(primary.emailPlaceholder)}
              />
              <Button
                color="secondary"
                variant="contained"
                className="subButton"
                aria-label="directions"
              >
                {RichText.asText(primary.subscribeButtonText)}
              </Button>
            </Paper>
            <div className="privacyText">
              {RichText.render(primary.privacyText)}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

Subscribe.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      resourceImage: imagePropTypes,
      title: structuredTextPropTypes,
      description: structuredTextPropTypes,
      emailPlaceholder: structuredTextPropTypes,
      subscribeButtonText: structuredTextPropTypes,
      privacyText: structuredTextPropTypes,
      resourceDownloadFile: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(Subscribe)
