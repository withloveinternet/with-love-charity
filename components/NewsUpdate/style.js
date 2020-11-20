const styles = (theme) => ({
  newsUpdate: {
    // backgroundImage: `url('/dot.svg')`,
    backgroundColor: '#6CA2D0',
    backgroundRepeat: 'repeat',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    '& .title': {
      color: '#fff',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    '& .description': {
      color: '#fff',
      lineHeight: 2.13,
      fontWeight: 700,
      textAlign: 'center',
      padding: theme.spacing(1, 0, 3.5, 0),
    },
    '& .subscribeWrapper': {
      borderRadius: 10,
      padding: '2px 2px 2px 24px',
      display: 'flex',
      margin: '0 auto',
      marginBottom: theme.spacing(2),
      width: 570,
      [theme.breakpoints.down('900px')]: {
        width: '100%',
      },
      [theme.breakpoints.down('xs')]: {
        display: 'block',
        padding: theme.spacing(0),
        width: '100%',
      },
      '& .input': {
        flex: 1,
        opacity: 0.38,
        fontFamily: 'Raleway',
        fontSize: 21,
        fontWeight: 900,
        color: '#242440',
        [theme.breakpoints.down('xs')]: {
          padding: theme.spacing(2),
          width: '100%',
        },
      },
      '& .subButton': {
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },
      },
    },
    '& .privacyText p': {
      fontSize: 14,
      lineHeight: 2.13,
      fontWeight: 700,
      color: '#fff',
      textAlign: 'center',
      '& span': {
        textDecoration: 'underline',
      },
      '& a': {
        color: '#fff',
      },
    },
  },
})

export default styles
