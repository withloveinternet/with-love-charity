const styles = (theme) => ({
  transparency: {
    backgroundColor: '#4A92CF',
    clipPath: 'polygon(0% 0%, 0% 100%, 100% 85%, 100% 0%)',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(18),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(16),
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    '& h2': {
      textTransform: 'uppercase',
      textAlign: 'center',
      fontFamily: 'Raleway',
      fontSize: 42,
      fontWeight: 900,
      margin: 0,
      [theme.breakpoints.down('xs')]: {
        fontSize: 24,
      },
      '& strong': {
        fontWeight: 900,
        background:
          `linear-gradient( to left, ${theme.palette.primary[400]} 50%, ${theme.palette.primary[600]} 100% ) left bottom no-repeat`,
        backgroundSize: '100% 3px',
        paddingBottom: '2px',
      },
    },
    '& .subtitle': {
      lineHeight: 2.13,
      textAlign: 'center',
      fontWeight: 600,
      margin: theme.spacing(1, 0, 4, 0),
    },
    '& .description': {
      textAlign: 'center',
      fontWeight: 600,
      lineHeight: 1.88,
      maxWidth: 996,
    },
    '& .highlightedText': {
      textAlign: 'center',
      fontWeight: 600,
      lineHeight: 1.88,
      maxWidth: 559,
      background: 'rgb(255,255,255,0.2)',
      padding: theme.spacing(2),
      margin: theme.spacing(2.5, 0, 4.5, 0),
    },
    '& .cta': {
      backgroundColor: '#282843',
    },
  },
})

export default styles
