const styles = (theme) => ({
  workDetailsHeroBackground: {
    marginTop: '-114px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    '& .container ': {
      height: '100%',
    },
  },
  backgroundOverlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 826,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(20, 2),
      height: '100%',
    },
    '& .highlightedText,.description, .boldText': {
      color: '#fff',
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: theme.spacing(1.5, 0),
    },
  },

  // description: {
  //   color: '#fff',
  //   textAlign: 'center',
  //   textTransform: 'uppercase',
  // },
  // boldText: {
  //   color: '#fff',
  //   textAlign: 'center',
  //   marginBottom: theme.spacing(4),
  // },
  heroButton: {
    display: 'flex',
    marginTop: theme.spacing(4),
    '& button': {
      margin: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      flexDirection: 'column;',
      alignItems: 'center',
    },
  },
})

export default styles
