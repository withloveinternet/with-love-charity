import { createMuiTheme } from '@material-ui/core/styles'

/* For use in material-ui/src/styles/colors.js */
export const primary = {
  50: '#f1f8ea',
  100: '#ddedc9',
  200: '#c6e1a6',
  300: '#afd582',
  400: '#9ecc67',
  500: '#8dc34c',
  600: '#85bd45',
  700: '#7ab53c',
  800: '#70ae33',
  900: '#5da124',
  A100: '#ecffde',
  A200: '#cfffab',
  A400: '#b2ff78',
  A700: '#a4ff5e',
  contrastDefaultColor: 'dark',
}

export const secondary = {
  50: '#e9f2f9',
  100: '#c9def1',
  200: '#a5c9e7',
  300: '#80b3dd',
  400: '#65a2d6',
  500: '#4a92cf',
  600: '#438aca',
  700: '#3a7fc3',
  800: '#3275bd',
  900: '#2263b2',
  A100: '#edf5ff',
  A200: '#bad7ff',
  A400: '#87baff',
  A700: '#6eabff',
  contrastDefaultColor: 'dark',
}

const defaultTheme = createMuiTheme({})

const { breakpoints } = defaultTheme

const theme = createMuiTheme({
  ...defaultTheme,
  typography: {
    fontFamily: 'Raleway',
  },
  palette: {
    primary,
    secondary,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: 'Raleway,sans-serif',
          backgroundColor: '#fff',
        },
        h1: {
          fontFamily: 'Raleway,sans-serif',
          fontSize: 48,
        },
        h2: {
          fontFamily: 'Raleway,sans-serif',
          fontSize: 31
        },
        h4: {
          fontFamily: 'Raleway,sans-serif',
          fontSize: 31,
          color: primary[500],
          margin: 0,
        },
        p: {
          fontFamily: 'Raleway,sans-serif',
          fontSize: 18,
        },
        textarea: {
          height: 60,
        },
      },
    },
    MuiTypography: {
      h1: {
        fontSize: 48,
        fontWeight: 900,
        [breakpoints.down('xs')]: {
          fontSize: 26,
        },
      },
      h2: {
        fontSize: 42,
        fontWeight: 900,
        [breakpoints.down('xs')]: {
          fontSize: 24,
        },
      },
      h3: {
        fontSize: 36,
        fontWeight: 900,
        [breakpoints.down('xs')]: {
          fontSize: 22,
        },
      },
      h4: {
        fontSize: 28,
        fontWeight: 900,
        lineHeight: 1.75,
        [breakpoints.down('xs')]: {
          fontSize: 20,
        },
      },
      h5: {
        fontSize: 24,
        fontWeight: 900,
        lineHeight: 1.75,
        [breakpoints.down('xs')]: {
          fontSize: 20,
        },
      },
      subtitle1: {
        fontSize: 18,
        fontWeight: 900,
        letterSpacing: 1.24,
      },
      subtitle2: {
        fontSize: 16,
        fontWeight: 900,
        letterSpacing: 1.1,
      },
      subtitle3: {
        fontSize: 14,
        letterSpacing: 1.1,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 6,
        fontSize: 16,
        fontWeight: 900,
        boxShadow: 'none',
        textAlign: 'center',
        padding: '14px 25px',
        lineHeight: 'initial',
        textTransform: 'uppercase',
        minWidth: 170,
      },
      contained: {
        backgroundColor: '#fff',
        height: 48,
        width: 'fit-content',
        boxShadow: '0 8px 18px 0 rgba(121, 125, 176, 0.28)',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#282843',
          transition: 'all 0.2s ease-in-out',
          boxShadow: '0 14px 23px 0 rgba(121, 125, 176, 0.28)',
        },
      },
      containedPrimary: {
        backgroundColor: primary[500],
        height: 48,
        width: 'fit-content',
        boxShadow: '0 8px 18px 0 rgba(121, 125, 176, 0.28)',
        color: '#fff',
        '&:hover': {
          backgroundColor: primary[500],
          transition: 'all 0.2s ease-in-out',
          boxShadow: '0 14px 23px 0 rgba(121, 125, 176, 0.28)',
        },
      },
      containedSecondary: {
        backgroundColor: secondary[500],
        height: 48,
        width: 'fit-content',
        color: '#fff',
        boxShadow: '0 8px 18px 0 rgba(121, 125, 176, 0.28)',
        '&:hover': {
          transition: 'all 0.2s ease-in-out',
          backgroundColor: secondary[500],
          boxShadow: '0 14px 23px 0 rgba(121, 125, 176, 0.28)',
        },
      },
      containedSizeSmall: {
        padding: '0px 24px',
        height: 30
      },
      outlined: {
        backgroundColor: 'transparent',
        border: `2px solid #ffffff`,
        height: 48,
        width: 'fit-content',
        color: '#fff',
        boxShadow: '0 8px 18px 0 rgba(121, 125, 176, 0.28)',
        '&:hover': {
          transition: 'all 0.2s ease-in-out',
          color: '#fff',
          border: `2px solid #ffffff`,
          backgroundColor: 'transparent',
          boxShadow: '0 14px 23px 0 rgba(121, 125, 176, 0.28)',
        },
      },
      outlinedPrimary: {
        color: primary[500],
        border: `2px solid ${primary[500]}`,
        boxShadow: 'none',
        '&:hover': {
          color: primary[500],
          border: `2px solid ${primary[500]}`,
          boxShadow: 'none'
        },
      },
      outlinedSecondary: {
        color: secondary[500],
        border: `2px solid ${secondary[500]}`,
        '&:hover': {
          color: secondary[500],
          border: `2px solid ${secondary[500]}`,
        },
      }
    },
  },
})

export default theme
