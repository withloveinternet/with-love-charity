const styles = (theme) => ({
  subHeader: {
    display: 'flex',
    padding: theme.spacing(1.5, 2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#254f72',
    color: '#fff',
    '& p': {
      fontSize: 12,
    },
    '& button': {
      height: 'auto',
      padding: '3px 20px',
      fontSize: 10,
      borderWidth: 1,
      minWidth: 'fit-content',
      marginLeft: 16,
      '&:hover': {
        borderWidth: 1
      }
    },
  },
})

export default styles
