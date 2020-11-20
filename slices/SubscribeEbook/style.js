const styles = (theme) => ({
  subscribe: {
    backgroundImage: `url('/greenCirclePattner.png')`,
    backgroundPosition: '0% 0%',
    backgroundSize: '150% 137%',
    backgroundRepeat: 'no-repeat',
    clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)',
    position: 'relative',
    backgroundColor: '#8BC249',
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0% 100%)',
      paddingTop: theme.spacing(18),
      paddingBottom: theme.spacing(9),
      backgroundSize: '200% 200%',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(8),
    },
    '&::after': {
      clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0% 100%)',
      background:
        'linear-gradient(90deg,rgba(140,194,75,1) 10%, rgba(105, 144, 57,1) 60%,  rgba(74,146,207,1) 30%)',
      content: '""',
      position: 'absolute',
      left: 0,
      top: '-84.4%',
      right: 0,
      height: '100%',
      display: 'block',
      zIndex: 9,
      [theme.breakpoints.down('sm')]: {
        top: '-94.5%',
        clipPath: 'polygon(0% 0%, 100% 10%, 100% 94.8%, 0% 100%)',
      },
    },
    '& .resourceImage': {
      width: 400,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    '& .title': {
      color: '#fff',
      textTransform: 'uppercase',
    },
    '& .description': {
      color: '#fff',
      lineHeight: 2.13,
      fontWeight: 700,
      padding: theme.spacing(6, 0, 5, 0),
    },
    '& .subscribeWrapper': {
      borderRadius: 10,
      padding: '2px 2px 2px 24px',
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
        padding: theme.spacing(2),
      },
      '& .input': {
        flex: 1,
        opacity: 0.38,
        fontFamily: 'Raleway',
        fontSize: 21,
        fontWeight: 900,
        color: '#242440',
      },
      '& .subButton': {
        [theme.breakpoints.down('xs')]: {
          marginTop: theme.spacing(2),
          width: '100%',
        },
      },
    },
    '& .privacyText p': {
      fontSize: 14,
      lineHeight: 2.13,
      fontWeight: 700,
      color: '#fff',
      '& a': {
        color: '#fff',
      },
    },
  },
})

export default styles
