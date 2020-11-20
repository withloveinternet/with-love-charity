const styles = (theme) => ({
  intro: {
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
    '& .label': {
      background:
        'linear-gradient( to left, #2f8dc0 50%, #4a92cf 100% ) left bottom no-repeat',
      backgroundSize: '100% 3px',
      paddingBottom: '2px',
    },
    '&  .description': {
      lineHeight: 2.13,
      color: '#313131',
      textAlign: 'center',
      maxWidth: 1023,
      margin: theme.spacing(4, 0),
      fontFamily: 'Raleway',
      fontWeight: 700,
    },
    '& .boldText': {
      color: '#313131',
      lineHeight: 1.75,
      marginBottom: theme.spacing(4),
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(8, 0),
    },
  },
  highlightedText: {
    backgroundColor: '#f4f6f8',
    padding: theme.spacing(2.5, 0, 2.5, 0),
    width: '100%',
    '& p': {
      padding: theme.spacing(0, 2, 0, 2),
      fontSize: 28,
      fontWeight: 900,
      color: '#4c4c78',
      fontFamily: 'Raleway',
      textAlign: 'center',
      lineHeight: 1.75,
      margin: theme.spacing(0),
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
    },
  },
  aboutButton: {
    display: 'flex',
    '& .cta': {
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
