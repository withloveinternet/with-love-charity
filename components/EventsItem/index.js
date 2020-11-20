import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import style from './style'

const EventsItem = ({
  classes,
  imgSrc,
  imgAlt,
  eventName,
  eventPlace,
  eventDate,
  moreDetails,
  eventPrice,
  btnLbl,
}) => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        className={classes.eventsItem}
        spacing="4"
        direction="row"
        alignItems="center"
      >
        <Grid item>
          <img src={imgSrc} alt={imgAlt} />
        </Grid>
        <Grid item className="eventInfo">
          <Typography variant="h5" className="eventName">
            {eventName}
          </Typography>
          <Typography variant="subtitle1" className="eventPlace">
            {eventPlace}
          </Typography>
          <Typography variant="subtitle1" className="eventDate">
            {eventDate}
          </Typography>
          <Typography variant="subtitle1" className="moreDetails">
            {moreDetails}
          </Typography>
        </Grid>
        <Grid item className="eventRegister">
          <Typography variant="h3" className="eventPrice">
            {eventPrice}
          </Typography>
          <Button variant="contained" color="primary">
            {btnLbl}
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

EventsItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  imgSrc: PropTypes.objectOf(PropTypes.string).isRequired,
  imgAlt: PropTypes.objectOf(PropTypes.string).isRequired,
  eventName: PropTypes.objectOf(PropTypes.string).isRequired,
  eventPlace: PropTypes.objectOf(PropTypes.string).isRequired,
  eventDate: PropTypes.objectOf(PropTypes.string).isRequired,
  moreDetails: PropTypes.objectOf(PropTypes.string).isRequired,
  eventPrice: PropTypes.objectOf(PropTypes.string).isRequired,
  btnLbl: PropTypes.objectOf(PropTypes.string).isRequired,
}
export default withStyles(style)(EventsItem)
