const styles = (theme) => ({
  footer: {
    backgroundColor: '#242440',
  },
  footerTop: {
    display: 'flex',
    paddingTop: theme.spacing(6),
    borderBottom: '1px solid rgba(80, 77, 109, 0.2)',
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    '& .socialIcon': {

    },
    '& .linksSections': {
      marginTop: 40
    },
    '& .footerTitle': {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 900,
      textAlign: 'center',
      color: '#ffffff',
      textTransform: 'uppercase'
    },
    '& .title': {
      color: '#ffffff',
      textTransform: 'uppercase',
      marginBottom: theme.spacing(1),
      fontWeight: 700,
      fontSize: 16,
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
    '& .address p': {
      marginTop: 8,
      marginBottom: 8,
      color: '#ffffff',
      fontSize: 14,
      fontWeight: 500,
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
    '& .logoImg': {
      width: 123,
      marginTop: 68,
      [theme.breakpoints.down('xs')]: {
        margin: '16px auto 16px',
      },
    },
    '& a': {
      color: '#ffffff',
      fontFamily: 'Raleway',
      margin: theme.spacing(1, 0),
      fontSize: 14,
      fontWeight: 500,
      textTransform: 'uppercase',
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    }
  },
  footerBottom: {
    padding: theme.spacing(6, 2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 2),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
    },
    '& .input': {
      width: 332,
      borderRadius: 6,
      backgroundColor: '#34345a',
      marginBottom: theme.spacing(3.5),
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
      '& input': {
        fontSize: 12,
        fontWeight: 500,
        color: '#89899d',
      },
      '& fieldset': {
        border: 0,
      },
      '& svg': {
        color: '#fff',
        borderRadius: 6,
        backgroundColor: '#4a92cf',
      },
    },
    '& .footerBottomLink': {
      textDecoration: 'none',
      '& .footerBottomTxt': {
        color: '#fff',
        fontFamily: 'Raleway',
        fontSize: 12,
      },
    }
  },
})

export default styles
