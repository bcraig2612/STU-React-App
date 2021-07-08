import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, useRouteMatch, Redirect, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import Leads from "./Leads";
import Settings from "./Settings";

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

function Referrals(props) {
  const classes = useStyles();
  let match = useRouteMatch();
  let location = useLocation();

  const links = [
    {title: "Leads", uri: "/referrals/leads", icon: "TrendingUpIcon"},
    {title: "Settings ", uri: "/referrals/settings", icon: "WidgetsIcon"},
  ];

  return (
    <Layout subNavLinks={links} getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode} >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item md={12} sm={12} xs={12}>
            <Switch>
              <Route exact path={match.path}>
                <Redirect to="/referrals/leads" />
              </Route>
              <Route path={`${match.path}/leads`}>
                <Leads />
              </Route>
              <Route path={`${match.path}/settings`}>
                <Settings />
              </Route>
            </Switch>

          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Referrals;
