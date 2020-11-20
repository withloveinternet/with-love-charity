import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import style from './style'

function Buttons({ classes }) {
  return (
    <div>
      <div className={classes.buttonOuter}>
        <Typography variant="h4" gutterBottom>
          Contained Buttons
        </Typography>
        <Grid container spacing={3}>
          <Grid item>
            <Button variant="contained">Default Button</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Primary Button
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Secondary Button
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.buttonOuter}>
        <Typography variant="h4" gutterBottom>
          Outlined Buttons
        </Typography>
        <Grid container spacing={3}>
          <Grid item>
            <Button variant="outlined">Default Button</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Primary Button
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary">
              Secondary Button
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

Buttons.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles(style)(Buttons)
