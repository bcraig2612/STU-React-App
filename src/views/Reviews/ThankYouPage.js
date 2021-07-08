import React from "react";
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
    justifyContent: "space-between"
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
  }
}));

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Reviews", uri: "/reviews"},
  {title: "Settings", uri: "/reviews/settings"},
  {title: "Thank You Page", uri: "/reviews/settings/thank-you-page"},
];

function ThankYouPage(props) {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('submitted');
  };

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />

      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12}>
          <ContentSection title="Thank You Page" subTitle='To help your business generate more reviews, leads, referrals and brand awareness you can control which "Thank You page" shows up when a customer gives you a review. Each Thank You page has a different purpose whether it is spreading the word about your business, getting your customers to share an offer or discount to their friends, or simply asking for a referral from your happy clients. Just activate which Thank You page best fits your needs below.'>
            <form onSubmit={handleSubmit}>
              <SettingRow title="Get Reviews on Other Review Sites" subTitle="If a customer gives you a written review, this page will automatically ask them to share that review on other review sites like Google Reviews, Facebook Reviews or Yelp Reviews in two easy steps. If a customer gives you a video or audio review it will ask your customers to share their review on their own Facebook newsfeed since no other review system offers video or audio reviews.">
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  checked={props.darkMode}
                />
              </SettingRow>
              <Divider />

              <SettingRow title="Share Reviews to Facebook" subTitle="This page asks your customers to share their review on their own Facebook newsfeed getting their review in front of all of their friends.">
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  checked={props.darkMode}
                />
              </SettingRow>
              <Divider />

              <SettingRow title="Share an Offer to Facebook" subTitle="This page asks your customers to share an offer or discount of your choosing on their Facebook newsfeed that can be claimed by their friends. By clicking on the newsfeed ad, their friends will be taken to a page to claim the offer. You will immediately receive an email with the contact information of the person claiming the offer and who referred them.">
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  checked={props.darkMode}
                />
              </SettingRow>
              <Divider />

              <SettingRow title="Ask for Referrals" subTitle="This page asks your customers to refer someone that would be interested in your services. It gives them a quick form to fill out and will immediately email you the contact information of the person referred as well as who referred them to your business.">
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  checked={props.darkMode}
                />
              </SettingRow>
              <Divider />

              <SettingRow title="Redirect to URL" subTitle="This setting allows you to enter a URL to your own thank you page.">
                <Switch
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  checked={props.darkMode}
                />
              </SettingRow>

              <div className={classes.formActions}>
                <Button variant="contained">
                  Reset to Default
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
              </div>
            </form>
          </ContentSection>
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default ThankYouPage;