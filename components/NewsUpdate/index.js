import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import InputBase from '@material-ui/core/InputBase'
import style from './style'
import { useLayout } from '../../utils/layout-context';

const NewsUpdate = ({ classes }) => {
  const { layout } = useLayout();

  return (
    <div className={classes.newsUpdate}>
      <Container>
        <Typography variant="h3" className="title">
          {RichText.asText(layout.subscribe_title)}
        </Typography>
        <Typography variant="subtitle2" className="description">
          {RichText.asText(layout.subscribe_description)}
        </Typography>
        <Paper className="subscribeWrapper">
          <InputBase className="input" placeholder={RichText.asText(layout.subscribe_placeholder)} />
          <Button
            color="secondary"
            variant="contained"
            className="subButton"
            aria-label="directions"
          >
            {RichText.asText(layout.subscribe_button_text)}
          </Button>
        </Paper>
        <div className="privacyText">
          {RichText.render(layout.privacy_text)}
        </div>
      </Container>
    </div>
  )
}

NewsUpdate.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(NewsUpdate)
