import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useLayout } from '../../utils/layout-context'
import CustomLink from '../CustomLink'
import style from './style'

const Download = ({ classes }) => {
  const { layout } = useLayout();

  return (
    <div className={classes.download}>
      <Typography variant="h3" className="title">
        {RichText.asText(layout.download_app_title)}
      </Typography>
      <div className="subtitle">
        {RichText.render(layout.download_app_description)}
      </div>
      <div className="downloadApp">
        <CustomLink link={layout.apple_download_link} className="playStore">
          <img src="/googlePlay.png" alt="google Play" />
        </CustomLink>
        <CustomLink link={layout.apple_download_link} className="appStore">
          <img src="/appStore.png" alt="app Play" />
        </CustomLink>
      </div>
      <CustomLink link={layout.learn_more_button_link} className="appStore">
        <Button variant="contained" className="leanrMoreBtn">
          {RichText.asText(layout.learn_more_button_text)}
        </Button>
      </CustomLink>
    </div>
  )
}

Download.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(Download)
