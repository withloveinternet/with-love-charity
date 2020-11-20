const styles = (theme) => ({
  featuredBlogs: {
    backgroundImage: `url('/blueCirclePattern.png')`,
    backgroundColor: '#4A92CF',
    backgroundPosition: 'center',
    backgroundSize: '150% 100%',
    backgroundRepeat: 'no-repeat',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
      backgroundSize: 'cover',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    '& .featureBlogsContainer': {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(9),
        marginBottom: theme.spacing(9),
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
      },
      '& .speakerInfo': {
        backgroundColor: '#242440',
        marginTop: '-4px',
        '& .name, .title': {
          color: '#fff',
          textAlign: 'left',
        },
      },
    },
  },
})

export default styles
