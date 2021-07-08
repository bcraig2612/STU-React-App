import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Breadcrumb from "../../components/Breadcrumb";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Layout from "../../components/Layout";
import {useSnackbar} from "notistack";
import SoTellUsReviewData from "../../components/SoTellUsReviewData";
import SettingRow from "../../components/SettingRow";
import Divider from "@material-ui/core/Divider";
import Account from "./Account";
import Users from "./Users";
import Security from "./Security";

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

function Settings(props) {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  let match = useRouteMatch();
  const links = [
    {title: "Account", uri: "/settings/account", icon: "TrendingUpIcon"},
    {title: "Users", uri: "/settings/users", icon: "TrendingUpIcon"},
  ];

  function fakeSave() {
    enqueueSnackbar('Saved!', {
      variant: 'success',
    });
  }

  return (
    <Layout subNavLinks={links} getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode} >
      <Container maxWidth={false}>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Switch>
              <Route exact path={match.path}>
                <Redirect to="/settings/account" />
              </Route>
              <Route path={`${match.path}/account`}>
                <Account getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode} />
              </Route>

              <Route path={`${match.path}/users`}>
                <Users />
              </Route>

              <Route path={`${match.path}/security`}>
                <Security />
              </Route>

              <Route exact path={match.path}>
                <Redirect to="/settings/notifications" />
              </Route>
              <Route path={`${match.path}/notifications`}>


              </Route>
            </Switch>

          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Settings;
