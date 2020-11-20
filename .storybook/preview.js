import React from 'react'
import { action } from '@storybook/addon-actions'
import { addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ''
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname)
}

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
))

addParameters({
  options: {
    storySort: {
      order: [
        'HomepageHero',
        'AboutIntro',
        'QuoteTestimonials',
        'FeaturedWork',
        'CallToAction',
        'TextBlueBackground',
        'OurPartners',
        'SubscribeEbook',
        'FeaturedBlogs',
        'ShortHero',
        'ContactForm',
        'HeroBackgroundImage',
        'VideoDetails',
        'TestimonialBackgroundImage',
        'ImageGallery'
      ],
    },
  },
})
