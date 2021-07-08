import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, useRouteMatch, Redirect, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import Widget from "./Widget";
import Leads from "./Leads";

const useStyles = makeStyles((theme) => ({

}));

function SpecialOffers(props) {
  const classes = useStyles();
  let match = useRouteMatch();
  let location = useLocation();

  const links = [
    {title: "Leads", uri: "/special-offers/leads", icon: "TrendingUpIcon"},
    {title: "Widget", uri: "/special-offers/widget", icon: "WidgetsIcon"},
  ];

  return (
    <Layout subNavLinks={links} getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode} >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item md={12} sm={12} xs={12}>
            <Switch>
              <Route exact path={match.path}>
                <Redirect to="/special-offers/leads" />
              </Route>
              <Route path={`${match.path}/leads`}>
                <Leads />
              </Route>
              <Route path={`${match.path}/widget`}>
                <Widget />
              </Route>
            </Switch>

          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default SpecialOffers;
