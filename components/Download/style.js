const styles = (theme) => ({
  download: {
    backgroundImage: `url('/patternSimpleText.svg')`,
    backgroundColor: '#397DB7',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
      backgroundPosition: '100%',
      backgroundSize: 'cover',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    '& .title': {
      color: '#fff',
      marginBottom: theme.spacing(3),
      textAlign: 'center',
      textTransform: 'uppercase'
    },
    '& .subtitle p': {
      color: '#fff',
      fontWeight: 700,
      lineHeight: 1.5,
      textAlign: 'center',
      letterSpacing: 1.1,
      fontSize: 16,
      margin: 0
    },
    '& .downloadApp': {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        marginTop: theme.spacing(2),
      },
      '& a': {
        margin: theme.spacing(5, 2),
        [theme.breakpoints.down('sm')]: {
          display: 'block',
          margin: theme.spacing(2),
        },
        '& img': {
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
        },
      },
    },
    '& .leanrMoreBtn': {
      backgroundColor: '#282843',
      textTransform: 'capitalize',
    },
  },
})

export default styles
