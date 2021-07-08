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
import ReferralLeadsTable from "../../components/ReferralLeadsTable";

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
  {title: "Referrals", uri: "/referrals"},
  {title: "Leads", uri: "/referrals/leads"},
];

function Leads(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ContentSection title="Referral Leads">
            <ReferralLeadsTable />
          </ContentSection>
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default Leads;