const styles = (theme) => ({
  whiteTxt: {
    '& .title': {
      color: '#fff',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    '& .subtitle': {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 700,
      marginTop: theme.spacing(1),
    },
  },
  blueTxt: {
    '& .title': {
      color: '#4c4c78',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    '& .subtitle': {
      color: '#4c4c78',
      textAlign: 'center',
      fontWeight: 700,
      marginTop: theme.spacing(1),
    },
  },
})
export default styles
