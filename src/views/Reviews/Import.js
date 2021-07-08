import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import ContentSection from "../../components/ContentSection";
import Breadcrumb from "../../components/Breadcrumb";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from "react-router-dom";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormActions from "../../components/FormActions";
import csvImage from "../../csv_upload.png";
import {Typography} from "@material-ui/core";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CompletedImportsTable from "../../components/CompletedImportsTable";
import PendingScheduledInvitesTable from "../../components/PendingScheduledInvitesTable";

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
  input: {
    display: 'none',
  },
  listItem: {
    marginBottom: theme.spacing(2),
  },
  listItemTitle: {
    fontWeight: "bold",
    fontSize: "1.1em",
    marginBottom: theme.spacing(1),
  }
}));

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Reviews", uri: "/reviews"},
  {title: "Invitations", uri: "/reviews/invitations"},
  {title: "Import", uri: "/reviews/invitations/import"},
];

function Import(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />

      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <ContentSection title="Import List">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button style={{marginBottom: "10px"}} startIcon={<CloudUploadIcon />} variant="contained" color="primary" component="span">
                Choose File
              </Button>
            </label>
            <br />
            <FormControlLabel style={{marginBottom: "10px"}} control={<Checkbox color="primary" name="checkedC" />} label="First Line is Row Headers" />
            <FormControl style={{marginBottom: "10px"}} variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">Default Country</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Default Country"
              >
                <MenuItem value={10}>United States</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="body2" color="textSecondary">
              Required Fields: First Name, Last Name, Mobile, Email
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Optional Fields: Country
            </Typography>

            <FormActions>
              <Button variant="contained" component={Link} to={"/reviews/invitations/import"} startIcon={<PlayCircleOutlineIcon />}>
                How do I upload?
              </Button>
              <Button variant="contained" color="primary">
                Upload
              </Button>
            </FormActions>
          </ContentSection>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <ContentSection title="How to import your list">
            <div className={classes.listItem}>
              <div className={classes.listItemTitle}>1. Download the Customer List Template</div>
              <Button variant="contained" color="primary">
                Download List
              </Button>
            </div>
            <div className={classes.listItem}>
              <div className={classes.listItemTitle}>2. Fill Out the Template With Your Customer Data and Save It</div>
            </div>
            <div className={classes.listItem}>
              <div className={classes.listItemTitle}>3: Import List</div>
            </div>
          </ContentSection>
        </Grid>

        <Grid item xs={12}>
          <ContentSection title="Completed Imports">
            <CompletedImportsTable />
          </ContentSection>
        </Grid>

        <Grid item xs={12}>
          <ContentSection title="Pending Scheduled Invitations">
            <PendingScheduledInvitesTable />
          </ContentSection>
        </Grid>
      </Grid>

    </React.Fragment>

  );
}

export default Import;