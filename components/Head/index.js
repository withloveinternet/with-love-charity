import React from 'react'
import PropTypes from 'prop-types'
import Header from 'next/head'

const Head = ({ data }) => {
  return (
    <Header>
      {data.meta_title && <title>{data.meta_title}</title>}
      {data.meta_description && <meta name="description" content={data.meta_description} />}
      {data.meta_title && <meta name="og:title" content={data.meta_title} />}
      {data.meta_description && <meta name="og:description" content={data.meta_description} />}
      {data.og_image && <meta property="og:image" content={data.og_image.url} />}
    </Header>
  )
}

Head.propTypes = {
  data: PropTypes.objectOf(PropTypes.any)
}

export default Head
