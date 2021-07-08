import CopyToClipboardUI from "../../components/CopyToClipboardUI";
import ColorPickerSetting from "../../components/ColorPickerSetting";
import Button from "@material-ui/core/Button";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useSnackbar} from "notistack";
import ContentSection from "../../components/ContentSection";
import Breadcrumb from "../../components/Breadcrumb";
import Grid from "@material-ui/core/Grid";
import SetupSteps from "../../components/SetupSteps";
import SetupAccordion from "./SetupAccordion";

const useStyles = makeStyles((theme) => ({
  sectionBody: {
    padding: theme.spacing(2),
  },
  formInputSpacer: {
    marginBottom: theme.spacing(2)
  },
  formActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  sectionHeader: {
    padding: theme.spacing(2),
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },
  paper: {
    marginBottom: theme.spacing(2),
  },
  yourReviews: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  yourReviewCount: {
    color: theme.palette.primary.main
  },
  reviewStars: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.main,
    padding: "5px 10px",
    borderRadius: "28px",
    marginLeft: "5px",
    marginRight: "5px",
    color: "#fff",
  },
  reviewStarsRating: {
    marginRight: "5px"
  }
}));

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Setup", uri: "/setup"},
  {title: "Company Profile", uri: "/setup/company-profile"},
];

function CompanyProfile(props) {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function fakeSave() {
    enqueueSnackbar('Saved!', {
      variant: 'success',
    });
  }

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />
      <Grid container spacing={3}>
        <Grid item lg={12} xs={12}>
          <SetupSteps />
          <ContentSection title="Company Profile">
            <SetupAccordion />
            <div className={classes.formActions}>
              <Button variant="contained" color="primary" onClick={fakeSave}>
                Save
              </Button>
            </div>
          </ContentSection>
        </Grid>

      </Grid>

    </React.Fragment>

  );
}

export default CompanyProfile;