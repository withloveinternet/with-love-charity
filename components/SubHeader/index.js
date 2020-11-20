import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import style from './style'
import { useLayout } from '../../utils/layout-context';

const SubHeader = ({ classes }) => {
  const { layout } = useLayout();

  return (
    <div className={classes.subHeader}>
      <Typography>{RichText.asText(layout.announcement_bar_text)}</Typography>
      <Button variant="outlined">{RichText.asText(layout.announcement_bar_button_text)}</Button>
    </div>
  )
}

SubHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default withStyles(style)(SubHeader)
