const styles = (theme) => ({
  leftTextImageRight: {
    '& .rightImage': {
      borderRadius: '67% 40% 53% 60% / 40% 37% 63% 70%',
      height: 469,
      width: 570,
      objectFit: 'cover',
      position: 'relative',
      zIndex: 99,
      [theme.breakpoints.down('md')]: {
        width: 500,
      },
      [theme.breakpoints.down('sm')]: {
        width: 570,
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        height: '100%',
      },
    },

    '& .rightImageOverlay': {
      borderRadius: '32% 68% 42% 58% / 36% 71% 29% 64%',
      width: 570,
      height: 469,
      position: 'absolute',
      zIndex: 9,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      [theme.breakpoints.down('md')]: {
        width: 500,
      },
      [theme.breakpoints.down('sm')]: {
        width: 570,
      },
      [theme.breakpoints.down('xs')]: {
        width: 350,
        height: 232,
      },
      [theme.breakpoints.down('400')]: {
        width: 250,
        height: 170,
      },
    },
    '& .preTitle': {
      color: '#fff',
      fontWeight: 700,
      marginBottom: theme.spacing(4.5),
    },
    '& .title': {
      color: '#fff',
    },
    '& .description': {
      color: '#fff',
      lineHeight: 1.89,
      fontWeight: 700,
      marginTop: theme.spacing(3.5),
      marginBottom: theme.spacing(6),
    },
  },
})
export default styles
