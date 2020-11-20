const styles = (theme) => ({
  featuredWork: {
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
    '& .categoryContainer': {
      marginTop: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(9),
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(8),
      },
    },
    '& .title': {
      color: '#4c4c78',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    '& .subtitle': {
      lineHeight: 1.89,
      color: '#4c4c78',
      textAlign: 'center',
      marginTop: theme.spacing(2),
    },
    '& .boardMemberItem': {
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
    },
    '& .viewAll': {
      margin: '0 auto',
    },
  },
})

export default styles
