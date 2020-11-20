const styles = (theme) => ({
  eventsItem: {
    borderRadius: 5,
    boxShadow: '0 30px 60px 0 rgba(73, 86, 149, 0.15)',
    backgroundColor: '#ffffff',
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    '& img': {
      width: 260,
      height: 260,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        height: '100%',
      },
    },
    '& .eventInfo': {
      flex: 1,
      [theme.breakpoints.down('xs')]: {
        flex: 'none',
        width: '100%',
        textAlign: 'center',
      },
      '& .eventName,.moreDetails': {
        color: '#4c4c78',
        fontWeight: 700,
        marginBottom: theme.spacing(2),
      },
      '& .eventPlace,.eventDate': {
        lineHeight: 1.44,
        color: '#4c4c78',
        fontWeight: 500,
      },
      '& .moreDetails': {
        color: '#4c4c78',
        fontWeight: 700,
        marginTop: theme.spacing(2.5),
        textDecoration: 'underline',
      },
    },
    '& .eventRegister': {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        textAlign: 'center',
      },
      '& .eventPrice': {
        color: '#4c4c78',
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: theme.spacing(3.5),
      },
    },
  },
})

export default styles
