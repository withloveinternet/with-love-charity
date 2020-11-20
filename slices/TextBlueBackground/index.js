import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import style from './style'
import { structuredTextPropTypes } from '../../utils/prop-types'
import CustomLink from '../../components/CustomLink'

const TextBlueBackground = ({ slice, classes }) => {
  const { primary } = slice

  return (
    <div className={classes.transparency}>
      {RichText.render(primary.title)}
      <Typography variant="subtitle2" className="subtitle">
        {RichText.asText(primary.subtitle)}
      </Typography>
      <Typography variant="subtitle2" className="description">
        {RichText.asText(primary.description)}
      </Typography>
      <Typography variant="subtitle2" className="highlightedText">
        {RichText.asText(primary.highlightedText)}
      </Typography>
      <CustomLink link={primary.ctaButtonLink}>
        <Button variant="contained" color="primary" className="cta">
          {RichText.asText(primary.ctaButtonText)}
        </Button>
      </CustomLink>
    </div>
  )
}

TextBlueBackground.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: structuredTextPropTypes,
      subtitle: structuredTextPropTypes,
      description: structuredTextPropTypes,
      highlightedText: structuredTextPropTypes,
      ctaButtonText: structuredTextPropTypes,
      ctaButtonLink: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(TextBlueBackground)
