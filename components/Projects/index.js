import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import style from './style'
import WorkItem from '../../components/WorkItem'
import CatergoryTag from '../../components/CatergoryTag'
import TitleSubtitle from '../../components/TitleSubtitle'
import CustomLink from '../../components/CustomLink'
import Link from 'next/link'

const Projects = ({ title, subtitle, categories, projects, viewAllCategory, classes }) => {
  return (
    <Container maxWidth="lg" className={classes.Projects}>
      <TitleSubtitle 
        title={title} 
        subtitle={subtitle} 
      />
      <Grid
        container
        spacing={0}
        direction="row"
        justify="center"
        alignItems="center"
        className="CatergoryTagWrapper"
      >
        {viewAllCategory && 
          <Grid item>
            <Link href="/projects">
              <a style={{textDecoration: 'none'}}>
                <CatergoryTag
                  catergoryTagIconSrc={'/viewAll.svg'}
                  catergoryTagIconAlt={'View All'}
                  catergoryTagTitle={'View All'}
                  showIcon
                />
              </a>
            </Link>
          </Grid>
        }
        {categories.results.map((category, index) => (
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
      <Grid
        container
        spacing={4}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {projects.results.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <WorkItem work={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

Projects.defaultProps = {
  viewAllCategory: false,
}

Projects.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  projects: PropTypes.objectOf(PropTypes.any).isRequired,
  categories: PropTypes.objectOf(PropTypes.any).isRequired,
  viewAllCategory: PropTypes.bool
}

export default withStyles(style)(Projects)
