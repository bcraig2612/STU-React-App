import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Breadcrumb from "../components/Breadcrumb";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating';

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Layout from "../components/Layout";
import {useSnackbar} from "notistack";
import SoTellUsReviewData from "../components/SoTellUsReviewData";
import SettingRow from "../components/SettingRow";
import Divider from "@material-ui/core/Divider";
import ReviewsBarChart from "../components/reports/ReviewsBarChart";

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
    background: theme.palette.primary.main,
    color: "#fff",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },
  paper: {
    marginBottom: theme.spacing(2),
  },
}));

function Reports(props) {
  const classes = useStyles();
  const [phoneNumber, setPhoneNumber] = useState('');
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  let match = useRouteMatch();
  const links = [
    {title: "Overview", uri: "/reports/overview", icon: "TrendingUpIcon"},
    {title: "Reviews", uri: "/reports/reviews", icon: "StarIcon"},
  ];

  function fakeSave() {
    enqueueSnackbar('Saved!', {
      variant: 'success',
    });
  }

  const darkModeToggleHandler = (darkMode) => {
    localStorage.setItem('dark-mode', darkMode);
    props.getDarkModePreference();
  };

  return (
    <Layout subNavLinks={links} getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode} >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={12} sm={12} xs={12}>
            <Switch>
              <Route exact path={match.path}>
                <Redirect to="/reports/overview" />
              </Route>
              <Route path={`${match.path}/overview`}>
                <Paper className={classes.paper}>

                  <div className={classes.sectionBody}>
                    <ReviewsBarChart />
                  </div>
                  <Divider />

                </Paper>

              </Route>

              <Route exact path={match.path}>
                <Redirect to="/settings/notifications" />
              </Route>
              <Route path={`${match.path}/notifications`}>
                <Paper className={classes.paper}>

                  <div className={classes.sectionBody}>
                    <SettingRow darkModeToggleHandler={darkModeToggleHandler} darkMode={props.darkMode} title="Receive Emails" subTitle="Lorem ipsum email notifications" />
                  </div>
                  <Divider />
                  <div className={classes.sectionBody}>
                    <SettingRow darkModeToggleHandler={darkModeToggleHandler} darkMode={props.darkMode} title="Receive SMS" subTitle="Lorem ipsum SMS notifications" />
                  </div>
                </Paper>

              </Route>
            </Switch>

          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Reports;
