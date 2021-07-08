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
import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/material.css'
import Collapse from "@material-ui/core/Collapse";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {Link} from "react-router-dom";
import FormActions from "../../components/FormActions";

const useStyles = makeStyles((theme) => ({
  sectionBody: {
    padding: theme.spacing(2),
  },
  formInputSpacer: {
    marginBottom: theme.spacing(2)
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
  fullWidth: {
    width: "100% !important"
  },
  orDivider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "center"
  }
}));

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Reviews", uri: "/reviews"},
  {title: "Invitations", uri: "/reviews/invitations"},
];

function SendReviewInvitation(props) {
  const classes = useStyles();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const toggleShowAdvanced = () => {
    setShowAdvanced(showAdvanced => !showAdvanced);
  };

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />

      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <ContentSection title="Send Review Invitation">
            <TextField className={classes.formInputSpacer} id="first-name" label="First Name" variant="outlined" fullWidth />
            <TextField className={classes.formInputSpacer} id="last-name" label="Last Name" variant="outlined" fullWidth />

            <PhoneInput
              country={'us'}
              value={phoneNumber}
              containerClass={classes.fullWidth}
              inputClass={classes.fullWidth}
              onChange={phoneNumber => setPhoneNumber(phoneNumber)}
            />

            <div className={classes.orDivider}>OR</div>
            <TextField className={classes.formInputSpacer} id="email-address" label="Email Address" variant="outlined" fullWidth />

            <Button className={classes.formInputSpacer} onClick={toggleShowAdvanced} variant="text">{showAdvanced ? 'Hide Advanced' : 'Show Advanced'}</Button>

            <Collapse in={showAdvanced}>
              <FormControl className={classes.formInputSpacer} variant="outlined" fullWidth>
                <InputLabel id="review-type">Review Type</InputLabel>
                <Select
                  labelId="review-type-label"
                  id="review-type"
                  value={1}
                  label="Review Type"
                >
                  <MenuItem value={1}>Any</MenuItem>
                  <MenuItem value={2}>Video</MenuItem>
                  <MenuItem value={3}>Audio</MenuItem>
                  <MenuItem value={4}>Written</MenuItem>
                  <MenuItem value={5}>Video or Audio</MenuItem>
                </Select>
              </FormControl>
              <TextField rows={2} className={classes.formInputSpacer} id="custom-sms" label="Customize the Text Message" variant="outlined" multiline={true} fullWidth />
              <Typography variant="body2" color="textSecondary" component="p">
                Available Fields:
                <br />
                &lt;link&gt; - The Link to click (*Required)
                <br />
                &lt;firstname&gt; - Customer's First Name (*Recommended)
                <br />
                &lt;lastname&gt; - Customer's Last Name
                <br />
                &lt;companyname&gt; - Company Name
                <br />
                &lt;userfirstname&gt; - Your First Name
                <br />
                &lt;userlastname&gt; - Your Last Name
                <br />
                &lt;type&gt; - Type of Review
              </Typography>
            </Collapse>

            <FormActions>
              <Button variant="contained" component={Link} to={"/reviews/invitations/import"} startIcon={<ImportExportIcon />}>
                Import
              </Button>
              <Button variant="contained" color="primary">
                Send
              </Button>
            </FormActions>
          </ContentSection>
          <ProgressUsageBar value={10} />
          <Typography align="center" variant="body2" color="textSecondary" component="p">
            You have 243 invites remaining for November 2020
          </Typography>
        </Grid>
        <Grid item lg={6} md={12} sm={12}>
          <ContentSection title="Share Your Invitation Page" subTitle="This link can be used to invite anyone to leave you a review. For example, you could include it in an email to customers.">
            <CopyToClipboardUI
              title="Your Invitation Link"
              value='https://sotellus.com/r/demo-company'
            />
            <Divider className={classes.spacer} />
            <SaveQRCode />
          </ContentSection>
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default SendReviewInvitation;