const styles = (theme) => ({
  catergoryTagWrapper: {
    margin: '0 auto',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      margin: '8px',
    },
  },
  catergoryTag: {
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
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0)
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& img': {
      marginRight: theme.spacing(1),
    },
  },
})
export default styles
