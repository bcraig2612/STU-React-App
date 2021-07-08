import Paper from "@material-ui/core/Paper";
import SettingRow from "../../components/SettingRow";
import Divider from "@material-ui/core/Divider";
import React from "react";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Breadcrumb from "../../components/Breadcrumb";
import UsersTable from "../../components/UsersTable";
import Grid from "@material-ui/core/Grid";
import AddUserDialog from "../../components/AddUserDialog";

function Users(props) {
  const [open, setOpen] = React.useState(false);

  const handleAddUserDialogOpen = () => {
    setOpen(true);
  };

  const handleAddUserDialogClose = () => {
    setOpen(false);
  };

  const breadCrumbs = [
    {title: "Dashboard", uri: "/"},
    {title: "Settings", uri: "/settings"},
    {title: "Users", uri: "/settings/users"},
  ];

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />
      <Paper>
        <Grid item md={12} sm={12} xs={12}>
          <div style={{padding: "10px", display: "flex", justifyContent: "flex-end"}}>
            <Button variant="contained" color="primary" onClick={handleAddUserDialogOpen}>Invite Users</Button>
          </div>
          <AddUserDialog open={open} handleClose={handleAddUserDialogClose} />
          <UsersTable />
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default Users;