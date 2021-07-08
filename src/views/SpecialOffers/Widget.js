import CopyToClipboardUI from "../../components/CopyToClipboardUI";
import ColorPickerSetting from "../../components/ColorPickerSetting";
import Button from "@material-ui/core/Button";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useSnackbar} from "notistack";
import ContentSection from "../../components/ContentSection";
import Breadcrumb from "../../components/Breadcrumb";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormActions from "../../components/FormActions";

const useStyles = makeStyles((theme) => ({
  formInputSpacer: {
    marginBottom: theme.spacing(2)
  },
  formActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
}));

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Special Offers", uri: "/special-offers"},
  {title: "Widget", uri: "/special-offers/widget"},
];

function Widget(props) {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function fakeSave() {
    enqueueSnackbar('Saved!', {
      variant: 'success',
    });
  }

  const handleSubmit = () => {

  };

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />
      <ContentSection title="Widget Settings" subTitle="This code embeds a popover on your website, offering customers your special offer.">
        <form onSubmit={handleSubmit}>
          <TextField className={classes.formInputSpacer} id="email-address" helperText="Separate multiple email addresses with a comma" label="Send email notification of new Customer Referral to Email(s)" variant="outlined" fullWidth />
          <TextField className={classes.formInputSpacer} id="offer-title" label="Offer Title" variant="outlined" fullWidth />
          <TextField className={classes.formInputSpacer} id="legal-jargon" label="Legal Jargon" variant="outlined" fullWidth />
          <TextField className={classes.formInputSpacer} id="legal-jargon-url" helperText='(optional) If entered, will add a "More details" link at the end of the legal jargon' label="Legal Jargon URL (optional)" variant="outlined" fullWidth />
          <TextField className={classes.formInputSpacer} id="thank-you-page-text" multiline={true} label="Thank you page Text" variant="outlined" fullWidth />
          <FormControlLabel style={{marginBottom: "10px"}} control={<Checkbox color="primary" name="checkedC" />} label="Show This Offer on a Review Page" />
          <FormActions flexEnd={true}>
            <Button variant="contained" color="primary">Save</Button>
          </FormActions>
        </form>
      </ContentSection>
      <ContentSection title="Embed Referral Widget on your website" subTitle="This code embeds a popover on your website, offering customers your special offer.">
        <CopyToClipboardUI
          title="Your Widget Code"
          value='&lt;script src="https://sotellus.com/js/sotellus_widget.js?client=demo-company&amp;amp;width=254&amp;amp;height=422" async&gt;&lt;/script&gt;'
        />
      </ContentSection>

    </React.Fragment>

  );
}

export default Widget;