import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Breadcrumb from "../../components/Breadcrumb";
import SettingRow from "../../components/SettingRow";
import Paper from "@material-ui/core/Paper";
import { Link } from 'react-router-dom';

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Referrals", uri: "/referrals"},
  {title: "Settings", uri: "/referrals/settings"},
];

function Settings(props) {

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <SettingRow title="Thank You Page" subTitle='To start capturing referrals you must enable the "Ask for Referrals" Thank You Page in the Reviews settings.'>
              <Button component={Link} to={'/reviews/settings/thank-you-page'} color="primary">Edit</Button>
            </SettingRow>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default Settings;