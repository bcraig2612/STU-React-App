import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';

export default function UpgradeAccountDialog(props) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" maxWidth="lg">
        <DialogTitle id="form-dialog-title">
          <span style={{display: "flex", alignItems: "center"}}><LockIcon style={{marginRight: "10px"}} /> Premium Only Feature</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Upgrade your account to get access to this feature by calling us at <Link href="tel:888-909-2539">888-909-2539</Link>
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}