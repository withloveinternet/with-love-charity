const styles = (theme) => ({
  workDetailsCta: {
    backgroundColor: '#8BC249',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
      backgroundSize: '200%',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  },
  firstBackground: {
    backgroundImage: `url('/greenCirclePattner.png')`,
    backgroundPosition: 'bottom',
    backgroundSize: '150%',
    backgroundRepeat: 'no-repeat',
  },
  secondBackground: {
    backgroundImage: `url('/patternSimpleText.svg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  description: {
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 1.42,
    fontSize: 24,
    marginBottom: theme.spacing(5),
    maxWidth: 599,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  }
})
export default styles
