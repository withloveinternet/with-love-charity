const styles = (theme) => ({
  imgBg: {
    backgroundImage: `url('/videoBg.png')`,
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    maxWidth: 970,
    padding: theme.spacing(2.5, 2.5),
    margin: theme.spacing(8.5, 0, 8.5, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0),
    },
    '& img': {
      width: '100%',
      borderRadius: 18,
    },
  },
})
export default styles
