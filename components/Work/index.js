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
import TitleSubtitle from '../../components/TitleSubtitle'
import CatergoryTag from '../../components/CatergoryTag'

const Work = ({ classes, workData, projectsData }) => {
  //   const { primary } = slice

  return (
    <Container maxWidth="lg" className={classes.featuredWork}>
      <TitleSubtitle
        title={RichText.asText(workData.title)}
        subtitle={RichText.asText(workData.description)}
      />
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        className="categoryContainer"
      >
        <CatergoryTag
          catergoryTagIconSrc=""
          catergoryTagIconAlt="Test"
          catergoryTagTitle="Test"
          showIcon
        />
      </Grid>

      <Grid
        container
        spacing={4}
        className="boardMemberItem"
        direction="row"
        justify="center"
        alignItems="center"
      >
      {projectsData.results.map((project) => (
        <Grid item xs={12} sm={4}>
          <WorkItem work={project.data} />
        </Grid>)
      )}
      </Grid>
    </Container>
  )
}

Work.propTypes = {
  projectsData: PropTypes.objectOf(PropTypes.any).isRequired,
  workData: PropTypes.objectOf(PropTypes.any).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(Work)
