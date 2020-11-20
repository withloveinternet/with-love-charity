const styles = (theme) => ({
  workDetailsTestimonials: {
    backgroundSize: 'cover',
    backgroundColor: '#000',

    '& .background': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      paddingTop: theme.spacing(25),
      paddingBottom: theme.spacing(25),
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(15),
      },
      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(15),
      }
    },
    '& .testimonialText': {
      fontStyle: 'italic',
      color: '#ffffff',
      textAlign: 'center',
      fontSize: 24
    },
    '& .author': {
      color: '#ffffff',
      textAlign: 'center',
      lineHeight: 1.42,
      fontSize: 24,
      marginTop: theme.spacing(6.5),
    },
  },
})
export default styles
