import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { structuredTextPropTypes, imagePropTypes } from '../../utils/prop-types'
import { linkResolver, hrefResolver } from '../../prismic'
import style from './style'
import Link from 'next/link'

function WorkItem({ classes, work }) {
  const {data} = work;

  return (
    <div className={classes.workItem}>
      <div className="featureWorkItem">
        <img src={data.featured_image.url} alt={data.featured_image.alt} />
        <div className="featureWorkItemData">
          <div className="featuredProjectTitle">
            {RichText.asText(data.title)}
          </div>
          {data.project_category && data.project_category.data && 
            <div className="projectCategoryTitle">
              {RichText.asText(data.project_category.data.title)}
            </div>
          }
          <Link as={linkResolver(work)} href={hrefResolver(work)}>
            <a>
              <Button className="button" variant="outlined" color="primary" fullWidth>
                Read More
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

WorkItem.propTypes = {
  work: PropTypes.shape({
    title: structuredTextPropTypes,
    featuredImage: imagePropTypes,
    projectCategory: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(WorkItem)
