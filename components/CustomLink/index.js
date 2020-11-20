import React from 'react'
import PropTypes from 'prop-types'
import { hrefResolver, linkResolver } from '../../prismic'
import { withStyles } from '@material-ui/core/styles'
import style from './style'
import clsx from 'clsx'
import Link from 'next/link'

function CustomLink({ classes, children, link, key, className }) {
  if(link.link_type === 'Web') {
    return (
      <a href={link.url} target={link.target} className={clsx(classes.link, className)}>{children}</a>
    )
  }

  return (
    <Link
      key={key}
      href={hrefResolver(link)}
      as={linkResolver(link)}
    >
      <a className={clsx(classes.link, className)}>{children}</a>
    </Link>
  )
}

CustomLink.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(CustomLink)
