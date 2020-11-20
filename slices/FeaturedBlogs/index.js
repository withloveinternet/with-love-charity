import React from 'react'
import PropTypes from 'prop-types'
import { RichText, Date } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import style from './style'
import { structuredTextPropTypes } from '../../utils/prop-types'
import PersonItem from '../../components/PersonItem'
import TitleSubtitle from '../../components/TitleSubtitle'
import { useAdditionalData } from '../../utils/additional-data-context'
import CustomLink from '../../components/CustomLink'

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

const FeaturedBlogs = ({ slice, classes }) => {
  const { primary, items } = slice
  const additionalData = useAdditionalData()

  return (
    <div className={classes.featuredBlogs}>
      <Container maxWidth="lg">
        <TitleSubtitle
          title={RichText.asText(primary.title)}
          subtitle={RichText.asText(primary.subtitle)}
          showClass
        />
        {primary.showLatestBlogs && additionalData.blogs && 
          <Grid
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
            className="featureBlogsContainer"
          >
            {additionalData.blogs.results.map((blog, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PersonItem
                  showTag={blog.data.blog_topics && blog.data.blog_topics.length > 0}
                  tag={blog.data.blog_topics && blog.data.blog_topics.length > 0 ? RichText.asText(blog.data.blog_topics[0].blog_topic.data.topic_name) : null}
                  bannerImageSrc={blog.data.featured_image.url}
                  bannerImageAlt={blog.data.featured_image.alt}
                  name={RichText.asText(blog.data.title)}
                  title={Date(blog.data.date).toLocaleDateString("en-US", dateOptions)}
                />
              </Grid>
            ))}
          </Grid>
        }
        {!primary.showLatestBlogs && 
          <Grid
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
            className="featureBlogsContainer"
          >
            {items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                {item.blogPost && item.blogPost.data &&
                  <PersonItem
                    bannerImageSrc={item.blogPost.data.featured_image.url}
                    bannerImageAlt={item.blogPost.data.featured_image.alt}
                    name={RichText.asText(item.blogPost.data.title)}
                    title={Date(item.blogPost.data.date).toLocaleDateString("en-US", dateOptions)}
                  />
                }
              </Grid>
            ))}
          </Grid>
        }
        <Grid container direction="row" justify="center" alignItems="center">
          <CustomLink link={primary.ctaButtonLink}>
            <Button variant="outlined">
              {RichText.asText(primary.ctaButtonText)}
            </Button>
          </CustomLink>
        </Grid>
      </Container>
    </div>
  )
}

FeaturedBlogs.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: structuredTextPropTypes,
      subtitle: structuredTextPropTypes,
      ctaButtonText: structuredTextPropTypes,
      ctaButtonLink: PropTypes.objectOf(PropTypes.any),
      showLatestBlogs: PropTypes.bool
    }).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        blogPost: PropTypes.objectOf(PropTypes.any),
      })
    ).isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(FeaturedBlogs)
