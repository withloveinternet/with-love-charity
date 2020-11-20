const styles = (theme) => ({
  workDetailsGallery: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    '& .galleryContainer': {
      marginTop: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(9),
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(8),
      },
    },
    '& img': {
      width: '100%',
      boxShadow: '0 22px 57px 0 rgba(37, 44, 80, 0.5)',
    },
  },
})
export default styles
