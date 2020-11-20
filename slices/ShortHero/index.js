import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles'
import { structuredTextPropTypes } from '../../utils/prop-types'
import style from './style'
import TitleSubtitle from '../../components/TitleSubtitle'

const ShortHero = ({ slice, classes }) => {
  const { primary } = slice
  return (
    <Container maxWidth="md" className={classes.ContactHero}>
      <TitleSubtitle
        title={RichText.asText(primary.title)}
        subtitle={RichText.asText(primary.subtitle)}
      />
    </Container>
  )
}

ShortHero.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: structuredTextPropTypes,
      subtitle: structuredTextPropTypes,
    }).isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(ShortHero)
