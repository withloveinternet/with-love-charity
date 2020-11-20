import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import style from './style'
import { structuredTextPropTypes } from '../../utils/prop-types'
import WorkItem from '../../components/WorkItem'
import CatergoryTag from '../../components/CatergoryTag'
import TitleSubtitle from '../../components/TitleSubtitle'
import { useAdditionalData } from '../../utils/additional-data-context'
import CustomLink from '../../components/CustomLink'

const FeaturedWork = ({ slice, classes }) => {
  const { primary, items } = slice
  const additionalData = useAdditionalData()

  return (
    <Container maxWidth="lg" className={classes.FeaturedWork}>
      <TitleSubtitle
        title={RichText.asText(primary.title)}
        subtitle={RichText.asText(primary.subtitle)}
      />
      {primary.showAllCategories && additionalData.project_category && 
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          className="CatergoryTagWrapper"
        >
          {additionalData.project_category.results.map((category, index) => (
            <Grid item key={index}>
              <CustomLink link={category}>
                <CatergoryTag
                  catergoryTagIconSrc={category.data.icon.url}
                  catergoryTagIconAlt={category.data.icon.alt}
                  catergoryTagTitle={RichText.asText(
                    category.data.title
                  )}
                  showIcon
                />
              </CustomLink>
            </Grid>
          ))}
        </Grid>
      }
      {!primary.showAllCategories &&
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
          className="CatergoryTagWrapper"
        >
          { primary.featuredWorkCategory1 && primary.featuredWorkCategory1.data && 
            <Grid item>
              <CustomLink link={primary.featuredWorkCategory1}>
                <CatergoryTag
                  catergoryTagIconSrc={primary.featuredWorkCategory1.data.icon.url}
                  catergoryTagIconAlt={primary.featuredWorkCategory1.data.icon.alt}
                  catergoryTagTitle={RichText.asText(
                    primary.featuredWorkCategory1.data.title
                  )}
                  showIcon
                />
              </CustomLink>
            </Grid>
          }
          { primary.featuredWorkCategory2 && primary.featuredWorkCategory2.data && 
            <Grid item>
              <CustomLink link={primary.featuredWorkCategory2}>
                <CatergoryTag
                  catergoryTagIconSrc={primary.featuredWorkCategory2.data.icon.url}
                  catergoryTagIconAlt={primary.featuredWorkCategory2.data.icon.alt}
                  catergoryTagTitle={RichText.asText(
                    primary.featuredWorkCategory2.data.title
                  )}
                  showIcon
                />
              </CustomLink>
            </Grid>
          }
          { primary.featuredWorkCategory3 && primary.featuredWorkCategory3.data &&
            <Grid item> 
              <CustomLink link={primary.featuredWorkCategory3}>
                <CatergoryTag
                  catergoryTagIconSrc={primary.featuredWorkCategory3.data.icon.url}
                  catergoryTagIconAlt={primary.featuredWorkCategory3.data.icon.alt}
                  catergoryTagTitle={RichText.asText(
                    primary.featuredWorkCategory3.data.title
                  )}
                  showIcon
                />
              </CustomLink>
            </Grid>
          }
          { primary.featuredWorkCategory4 && primary.featuredWorkCategory4.data && 
            <Grid item>
              <CustomLink link={primary.featuredWorkCategory4}>
                <CatergoryTag
                  catergoryTagIconSrc={primary.featuredWorkCategory4.data.icon.url}
                  catergoryTagIconAlt={primary.featuredWorkCategory4.data.icon.alt}
                  catergoryTagTitle={RichText.asText(
                    primary.featuredWorkCategory4.data.title
                  )}
                  showIcon
                />
              </CustomLink>
            </Grid>
          }
        </Grid>
      }
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {!primary.showAllProjects && items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {item.featuredProject && item.featuredProject.data && 
              <WorkItem work={item.featuredProject} />
            }
          </Grid>
        ))}
        {primary.showAllProjects && additionalData.project && additionalData.project.results.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            {item.data && 
              <WorkItem work={item} />
            }
          </Grid>
        ))}
      </Grid>
      {!primary.showAllProjects &&
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="viewAll"
        >
          <CustomLink link={primary.viewAllButtonLink}>
            <Button variant="contained" color="primary">
              {RichText.asText(primary.viewAllButtonText)}
            </Button>
          </CustomLink>
        </Grid>
      }
    </Container>
  )
}

FeaturedWork.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: structuredTextPropTypes,
      subtitle: structuredTextPropTypes,
      featuredWorkCategory1: PropTypes.objectOf(PropTypes.any),
      featuredWorkCategory2: PropTypes.objectOf(PropTypes.any),
      featuredWorkCategory3: PropTypes.objectOf(PropTypes.any),
      featuredWorkCategory4: PropTypes.objectOf(PropTypes.any),
      viewAllButtonText: structuredTextPropTypes,
      viewAllButtonLink: PropTypes.objectOf(PropTypes.any),
      showAllProjects: PropTypes.bool,
      showAllCategories: PropTypes.bool
    }).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        featuredProject: PropTypes.objectOf(PropTypes.any),
      })
    ).isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(FeaturedWork)
