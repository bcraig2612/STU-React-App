import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, useRouteMatch, Redirect, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";

const useStyles = makeStyles((theme) => ({

}));

function Inbox(props) {
  const classes = useStyles();
  let match = useRouteMatch();
  let location = useLocation();

  return (
    <Layout getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode} >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item md={12} sm={12} xs={12}>
            <Switch>
              <Route exact path={match.path}>
                <Redirect to="/inbox/leads" />
              </Route>
              <Route path={`${match.path}/leads`}>
                <p>Hi</p>
              </Route>
              <Route path={`${match.path}/widget`}>
                <p>hi</p>
              </Route>
            </Switch>

          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Inbox;
