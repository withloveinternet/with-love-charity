import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from 'react-player'
import style from './style'

const DialogTitle = withStyles(style)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const VideoModal = ({ classes, open, handleClose, video }) => {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if(open) {
      setPlaying(true)
    }
  }, [open])

  return (
    <>
     <Dialog fullWidth maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {video.title}
        </DialogTitle>
        <DialogContent dividers className={classes.content}>
          <div className={classes.reactWrapper}>
            <ReactPlayer className={classes.reactPlayer} url={video.embed_url} width='100%' height='100%' playing={playing} controls={true} />
          </div>
          <Grid container alignItems="center" justify="center" className={classes.loading}>
            <Grid item>
              <CircularProgress size={80} />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  )
}

VideoModal.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  video: PropTypes.objectOf(PropTypes.any).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withStyles(style)(VideoModal)
