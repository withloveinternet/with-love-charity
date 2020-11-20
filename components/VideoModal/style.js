const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  content: {
    padding: 0,
    position: 'relative'
  },
  reactWrapper: {
    position: 'relative',
    paddingTop: '56.25%'
  },
  reactPlayer: {
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0
  },
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})
export default styles
