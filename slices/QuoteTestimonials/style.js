const styles = (theme) => ({
  quoteTestimonialsBg: {
    backgroundImage: `url('/greenCirclePattner.png')`,
    backgroundPosition: 'bottom',
    backgroundSize: '128% 70%',
    backgroundRepeat: 'no-repeat',
    clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)',
    position: 'relative',
    backgroundColor: '#8BC249',
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0% 100%)',
      paddingTop: theme.spacing(18),
      paddingBottom: theme.spacing(9),
      backgroundSize: '200% 70%',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(8),
    },
    '&::after': {
      clipPath: 'polygon(0 15%, 100% 0, 100% 90%, 0% 100%)',
      background:
        'linear-gradient(90deg,rgba(140,194,75,1) 10%, rgba(105, 144, 57,1) 60%,  rgba(74,146,207,1) 30%)',
      content: '""',
      position: 'absolute',
      left: 0,
      top: '-89.5%',
      right: 0,
      height: '100%',
      display: 'block',
      zIndex: 9,
      [theme.breakpoints.down('sm')]: {
        top: '-94.6%',
        clipPath: 'polygon(0% 0%, 100% 10%, 100% 94.8%, 0% 100%)',
      },
    },
    '& .quoteImg': {
      width: 26,
      marginRight: theme.spacing(1),
    },
    '& .quoteText': {
      fontWeight: 900,
      color: '#ffffff',
      fontStyle: 'italic',
      lineHeight: 2.72,
      [theme.breakpoints.down('sm')]: {
        lineHeight: 1.72,
      },
    },
    '& .quoteAuthor': {
      fontSize: 21,
      fontWeight: 900,
      color: '#fff',
      marginTop: theme.spacing(7.5),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(3.5),
      },
    },
    '& .quoteRight': {
      position: 'absolute',
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
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
    '& .quoteWrapper': {
      marginBottom: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(9),
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(8),
      },
    },
    '& .testimonialWrapper': {
      marginTop: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(9),
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(8),
      },
    },
  },

  testimonialCardGrid: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  testimonialCard: {
    borderRadius: 14,
    boxShadow: '0 20px 30px 0 rgba(0, 0, 0, 0.2)',
    backgroundColor: '#ffffff',
    padding: theme.spacing(9, 5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(9, 2, 2),
    },
    '& .name': {
      color: '#313131',
      fontFamily: 'Raleway',
      fontSize: 16,
      fontWeight: 900,
    },
    '& .testimonialTitle': {
      fontSize: 12,
      fontWeight: 700,
      color: '#8bc249',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2.5),
    },
  },
  testimonialImg: {
    width: 117,
    height: 117,
    borderRadius: 100,
    boxShadow: '0 38px 66px 0 rgba(80, 82, 138, 0.18)',
    border: 'solid 1px #ffffff',
    position: 'absolute',
    marginTop: '-60px',
  },
  videoButton: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(9),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(8),
    },
  },
})

export default styles
