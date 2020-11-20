import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { RichText } from 'prismic-reactjs'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import style from './style'
import { useLayout } from '../../utils/layout-context'
import { linkResolver, hrefResolver } from '../../prismic'
import CustomLink from '../CustomLink'
import {useRouter} from 'next/router'
import clsx from 'clsx'

const Header = ({ classes }) => {
  const [open, setOpen] = React.useState(false)
  const {layout, headerColor} = useLayout()
  const router = useRouter()

  const handleSidebarOpen = () => {
    setOpen(true)
  }

  const handleSidebarClose = () => {
    setOpen(false)
  }

  const clickItem = (link) => {
    router.push(hrefResolver(link), linkResolver(link))
    setOpen(false)
  }

  return (
    <div className={clsx({
      [classes.headerBg]: !headerColor
    })}>
      <Container className={classes.header}>
        <Link href="/">
          <a>
            {headerColor ? (
              <img src={layout.colored_logo.url} className="logo" alt="" />
            ) : (
              <img src={layout.white_logo.url} className="logo" alt="" />
            )}
          </a>
        </Link>
        <div className="menu">
          {layout.menu_items.map((menu_item, key) => (
            <Link 
              as={linkResolver(menu_item.link)}
              href={hrefResolver(menu_item.link)}
              key={key}>
              <a className={clsx('menuLink', {
                'dark': headerColor
              })}>
                {RichText.asText(menu_item.link_title)}
              </a>
            </Link>
          ))}
          <CustomLink link={layout.give_button_link}>
            <Button variant="contained" color="primary" size="small">
              {RichText.asText(layout.give_button_text)}
            </Button>
          </CustomLink>
        </div>
        <div className="mobileMenu">
          <IconButton
            aria-label="Drawer"
            component="span"
            className="drawerBtn"
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer
          anchor="right"
          open={open}
          onClose={handleSidebarClose}
          className={classes.sidebar}
        >
          <List className="list">
            {layout.menu_items.map((menu_item, index) => (
              <ListItem button key={index} className="listItem" onClick={() => clickItem(menu_item.link)}>
                <ListItemText primary={RichText.asText(menu_item.link_title)} />
              </ListItem>
            ))}
          </List>
          <CustomLink link={layout.give_button_link}>
            <Button variant="contained" color="primary" className="button" onClick={() => setOpen(false)}>
              {RichText.asText(layout.give_button_text)}
            </Button>
          </CustomLink>
        </Drawer>
      </Container>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withStyles(style)(Header)
