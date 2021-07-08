import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function NewActionMenu(props) {
  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
        <MenuItem onClick={() => props.handleClose('/reviews/send-invitation')}>Send review invitation</MenuItem>
        <MenuItem onClick={props.handleClose}>Create new survey</MenuItem>
      </Menu>
    </div>
  );
}