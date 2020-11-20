import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'
import style from './style'
import { structuredTextPropTypes } from '../../utils/prop-types'
import CustomLink from '../../components/CustomLink'

const CallToAction = ({ slice, classes }) => {
  const { primary } = slice

  return (
    <div className={clsx(classes.workDetailsCta, {
      [classes.firstBackground]: primary.pattern,
      [classes.secondBackground]: !primary.pattern
    })}>
      <Container maxWidth="lg" className="container">
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h4" className={classes.description}>
            {RichText.asText(primary.description)}
          </Typography>
          <CustomLink link={primary.ctaButtonLink}>
            <Button variant="outlined">{RichText.asText(primary.ctaButtonText)}</Button>
          </CustomLink>
        </Grid>
      </Container>
    </div>
  )
}

CallToAction.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      description: structuredTextPropTypes,
      ctaButtonText: structuredTextPropTypes,
      ctaButtonLink: PropTypes.objectOf(PropTypes.any),
      pattern: PropTypes.bool
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(CallToAction)
