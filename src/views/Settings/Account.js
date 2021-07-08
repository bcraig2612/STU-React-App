import Paper from "@material-ui/core/Paper";
import SettingRow from "../../components/SettingRow";
import Divider from "@material-ui/core/Divider";
import React from "react";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Breadcrumb from "../../components/Breadcrumb";

function Account(props) {
  const darkModeToggleHandler = (darkMode) => {
    localStorage.setItem('dark-mode', darkMode);
    props.getDarkModePreference();
  };

  const breadCrumbs = [
    {title: "Dashboard", uri: "/"},
    {title: "Settings", uri: "/settings"},
    {title: "Account", uri: "/settings/account"},
  ];

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />
      <Paper>

        <SettingRow title="Enable Dark Mode" subTitle="Switch between light and dark themes">
          <Switch
            color="primary"
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            checked={Boolean(props.darkMode)}
            onClick={() => darkModeToggleHandler(!props.darkMode)}
          />
        </SettingRow>
        <Divider />

        <SettingRow title="Email Address" subTitle="The email address associated with your account">
          <TextField disabled={true} style={{flexBasis: "300px"}} label="Email address" defaultValue="codyuptain27@gmail.com" variant="outlined" />
        </SettingRow>

        <SettingRow title="Billing" subTitle="Update the credit card associated with your account">
          <Button style={{flexBasis: "300px"}} href="#" variant="contained" color="primary">Update my Credit Card</Button>
        </SettingRow>

      </Paper>
    </React.Fragment>
  );
}

export default Account;