import React from 'react'
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { withStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { useLayout } from '../../utils/layout-context'
import CustomLink from '../CustomLink'
import style from './style'

const Footer = ({ classes }) => {
  const { layout } = useLayout();

  return (
    <div className={classes.footer}>
      <div className={classes.footerTop}>
        <Container>
          <Grid
            container
            spacing={6}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} container justify="center" alignItems="center">
              <Typography className="footerTitle">{RichText.asText(layout.engage_title)}</Typography>
            </Grid>
            <Grid item xs={12} spacing={4} container justify="center" alignItems="center">
              {layout.social_media_links.map((social, index) => {
                return (<Grid item key={index}><CustomLink link={social.social_media_link}><img className="socialIcon" src={social.social_media_icon.url} /></CustomLink></Grid>)
              })}
            </Grid>
          </Grid>
          <Grid container spacing={4} className="linksSections">
            <Grid item xs={12} sm={4} md={4} container direction="column">
              <Typography className="title">{RichText.asText(layout.quick_links_title)}</Typography>
              {layout.quick_links.map((link, index) => {
                return (<CustomLink link={link.link} key={index} className="link">{RichText.asText(link.link_title)}</CustomLink>)
              })}
            </Grid>
            <Grid item xs={12} sm={4} md={4} container direction="column">
              <Typography className="title">{RichText.asText(layout.get_involved_title)}</Typography>
              {layout.get_involved_links.map((link, index) => {
                return (<CustomLink link={link.link} key={index} className="link">{RichText.asText(link.link_title)}</CustomLink>)
              })}
            </Grid>
            <Grid item xs={12} sm={4} md={4} container direction="column">
              <Typography className="title">{RichText.asText(layout.contact_us_title)}</Typography>
              <div className="address">
                {layout.contact_details.map((contact, index) => {
                  return (<div key={index}>{RichText.render(contact.contact_details1)}</div>)
                })}
              </div>
              <img src={layout.logo1.url} alt="" className="logoImg" />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footerBottom}>
        {/*
        <TextField variant="outlined" select className="input" size="small">
          <MenuItem>Test</MenuItem>
        </TextField>
        */}
        <a href={layout.wli_link.url} target="_blank" rel="nofollow" className="footerBottomLink">
        <Typography className="footerBottomTxt">
          {RichText.asText(layout.wli_text)}
        </Typography>
        </a>
      </div>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default withStyles(style)(Footer)
