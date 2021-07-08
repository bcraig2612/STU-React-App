import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, useRouteMatch, useLocation, Redirect } from "react-router-dom";
import Layout from "../../components/Layout";
import CompanyProfile from "./CompanyProfile";
import SetupAccordion from "./SetupAccordion";
import ContentSection from "../../components/ContentSection";
import Breadcrumb from "../../components/Breadcrumb";

const useStyles = makeStyles((theme) => ({

}));

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Setup", uri: "/setup"},
];

function Setup(props) {
  const classes = useStyles();
  let match = useRouteMatch();
  let location = useLocation();

  const links = null;

  return (
    <Layout subNavLinks={links} getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode} >
      <Container maxWidth={false}>
        <Breadcrumb links={breadCrumbs} />

        <Grid container spacing={3}>
          <Grid item md={12} sm={12} xs={12}>
            <Switch>
              <Route exact path={match.path}>
                <SetupAccordion />
              </Route>
            </Switch>

          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Setup;
