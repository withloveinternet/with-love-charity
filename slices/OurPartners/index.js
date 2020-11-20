import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import style from './style'
import { structuredTextPropTypes, imagePropTypes } from '../../utils/prop-types'
import TitleSubtitle from '../../components/TitleSubtitle'
import CustomLink from '../../components/CustomLink'

const Partners = ({ slice, classes }) => {
  const { primary, items } = slice

  return (
    <Container maxWidth="lg" className={classes.partners}>
      <TitleSubtitle
        title={RichText.asText(primary.title)}
        subtitle={RichText.asText(primary.subtitle)}
      />
      <div className="partnerLogo">
        {items.map((item, index) => (
          <img
            key={index}
            src={item.partnerLogo.url}
            alt="profile"
            className={classes.testimonialImg}
          />
        ))}
      </div>
      <CustomLink link={primary.ctaButtonLink}>
        <Button variant="contained" color="primary" className="cta">
          {RichText.asText(primary.ctaButtonText)}
        </Button>
      </CustomLink>
    </Container>
  )
}

Partners.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: structuredTextPropTypes,
      subtitle: structuredTextPropTypes,
      ctaButtonText: structuredTextPropTypes,
      ctaButtonLink: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        partnerLogo: imagePropTypes,
      })
    ).isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(Partners)
