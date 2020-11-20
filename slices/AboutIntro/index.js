import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { structuredTextPropTypes } from '../../utils/prop-types'
import CustomLink from '../../components/CustomLink'
import style from './style'

const AboutIntro = ({ slice, classes }) => {
  const { primary } = slice
  
  const boldText = primary.boldText && RichText.asText(primary.boldText)
  const primaryCtaButtonText = primary.primaryCtaButtonText && RichText.asText(primary.primaryCtaButtonText)
  const secondaryCtaButtonText = primary.secondaryCtaButtonText && RichText.asText(primary.secondaryCtaButtonText)

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.intro}
        >
          <div className={classes.highlightedText}>{RichText.render(primary.highlightedText)}</div>
          <div className="description">
            {RichText.render(primary.description)}
          </div>
          {boldText &&
            <Typography variant="h4" className="boldText">
              {boldText}
            </Typography>
          }
          {(primaryCtaButtonText || secondaryCtaButtonText) && 
            <div className={classes.aboutButton}>
              {primaryCtaButtonText &&
                <CustomLink link={primary.primaryCtaButtonLink}>
                  <Button variant="contained" color="primary" className="cta">
                    {primaryCtaButtonText}
                  </Button>
                </CustomLink>
              }
              {secondaryCtaButtonText && 
                <CustomLink link={primary.secondaryCtaButtonLink}>
                  <Button variant="contained" color="secondary" className="cta">
                    {secondaryCtaButtonText}
                  </Button>
                </CustomLink>
              }
            </div>
          }
        </Grid>
      </Grid>
    </Container>
  )
}

AboutIntro.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      highlightedText: structuredTextPropTypes,
      description: structuredTextPropTypes,
      boldText: structuredTextPropTypes,
      primaryCtaButtonText: structuredTextPropTypes,
      primaryCtaButtonLink: PropTypes.objectOf(PropTypes.any),
      secondaryCtaButtonText: structuredTextPropTypes,
      secondaryCtaButtonLink: PropTypes.objectOf(PropTypes.any)
    }).isRequired,
    items: PropTypes.array.isRequired
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withStyles(style)(AboutIntro)
