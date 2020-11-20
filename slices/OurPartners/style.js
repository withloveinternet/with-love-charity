const styles = (theme) => ({
  partners: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    // '& .title': {
    //   color: '#242440;',
    // },
    // '& .subtitle': {
    //   color: '#242440',
    //   lineHeight: 2.13,
    //   fontWeight: 700,
    //   margin: theme.spacing(1, 0, 7.5, 0),
    //   textAlign: 'center',
    // },
    '& .partnerLogo': {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(9),
        paddingBottom: theme.spacing(9),
        display: 'block',
        textAlign: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },

      '& img': {
        flex: 1,
        margin: theme.spacing(3),
        maxWidth: 350,
        [theme.breakpoints.down('xs')]: {
          display: 'block',
          margin: '48px auto',
          width: '100%',
        },
      },
    },
  },
})

export default styles
