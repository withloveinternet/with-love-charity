import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
// import style from './style'

const SimpleDialog = ({ handleClose, open, classes, children }) => {
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      className={classes.modal}
    >
      {children}
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withStyles()(SimpleDialog)
