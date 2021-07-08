import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function AddUserDialog(props) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Invite Users</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the email addresses for people you'd like to invite to your org, and we'll send them an invitation.
          </DialogContentText>
          <TextField
            fullWidth
            id="invite-users-emails"
            label="Enter email addresses"
            multiline
            rows={2}
            variant="outlined"
            helperText="To add multiple people, separate addresses with a comma or space."
            style={{marginBottom: "20px"}}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Role"
            >
              <MenuItem value={10}>Admin</MenuItem>
              <MenuItem value={20}>User</MenuItem>
              <MenuItem value={30}>App Only</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} variant="contained" color="primary">
            Send invitation
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}