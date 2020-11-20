const styles = (theme) => ({
  Projects: {
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
    '& .CatergoryTagWrapper': {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
      },
    },
    '& .featuredWorkCategory': {
      borderRadius: 6,
      backgroundColor: '#f5faff',
      padding: theme.spacing(2),
      fontFamily: 'Raleway',
      fontSize: 14,
      fontWeight: 700,
      color: '#4c4c78',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
      '& img': {
        marginRight: theme.spacing(1),
      },
    },
    '& .viewAll': {
      margin: '80px auto 0px',
      [theme.breakpoints.down('sm')]: {
        margin: '72px auto 0px',
      },
      [theme.breakpoints.down('xs')]: {
        margin: '64px auto 0px',
      },
    },
  },
})

export default styles
