import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ProgressUsageBar from "../../components/ProgressUsageBar";
import Grid from "@material-ui/core/Grid";
import CopyToClipboardUI from "../../components/CopyToClipboardUI";
import Divider from "@material-ui/core/Divider";
import SaveQRCode from "../../components/SaveQRCode";
import ContentSection from "../../components/ContentSection";
import Breadcrumb from "../../components/Breadcrumb";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import SettingRow from "../../components/SettingRow";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import DialogContent from "@material-ui/core/DialogContent";
import PreviewTextMessage from "../../components/PreviewTextMessage";
import HelpIcon from '@material-ui/icons/Help';
import Chip from "@material-ui/core/Chip";
import Alert from "@material-ui/lab/Alert";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  sectionBody: {
    padding: theme.spacing(2),
  },
  formInputSpacer: {
    marginBottom: theme.spacing(2)
  },
  formActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing(2)
  },
  sectionHeader: {
    padding: theme.spacing(2),
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },
  paper: {
    marginBottom: theme.spacing(2),
  },
  spacer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  shortCodeList: {
    display: "flex",
    flexWrap: "wrap",
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  shortCodeLabel: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  shortCodeHelpIcon: {

  }
}));

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Reviews", uri: "/reviews"},
  {title: "Settings", uri: "/reviews/settings"},
];

function Settings(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>

            <SettingRow title="Default Invitation Text Message" subTitle="The default text message that will be sent via Invitations.">
              <Button component={Link} to={'/reviews/settings/default-text-message'} color="primary">Edit</Button>
            </SettingRow>
            <Divider />
            <SettingRow title="Default Invitation Email" subTitle="The default email that will be sent via Invitations.">
              <Button component={Link} to={'/reviews/settings/default-text-message'} color="primary">Edit</Button>
            </SettingRow>
            <Divider />
            <SettingRow title="Review Priority" subTitle="Add the sites you wish to get reviews on and manage their priority here.">
              <Button component={Link} to={'/reviews/settings/review-priority'} color="primary">Edit</Button>
            </SettingRow>
            <Divider />
            <SettingRow title="Thank You Page" subTitle='To help your business generate more reviews, leads, referrals and brand awareness you can control which "Thank You page" shows up when a customer gives you a review.'>
              <Button component={Link} to={'/reviews/settings/thank-you-page'} color="primary">Edit</Button>
            </SettingRow>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default Settings;