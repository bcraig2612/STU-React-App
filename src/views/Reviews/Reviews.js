import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, useRouteMatch, Redirect, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import MyReviews from "./MyReviews";
import Widget from "./Widget";
import SendReviewInvitation from "./SendReviewInvitation";
import FeatureIconLink from "../../components/FeatureIconLink";
import Import from "./Import";
import ThankYouPage from "./ThankYouPage";
import Settings from "./Settings";
import DefaultTextMessage from "./DefaultTextMessage";
import ReviewPriority from "./ReviewPriority";

function Reviews(props) {
  let match = useRouteMatch();
  let location = useLocation();

  const links = [
    {title: "My Reviews", uri: "/reviews/my-reviews", icon: "TrendingUpIcon"},
    {title: "Invitations", uri: "/reviews/invitations", icon: "DraftsIcon"},
    {title: "Widget", uri: "/reviews/widget", icon: "WidgetsIcon"},
    {title: "Settings", uri: "/reviews/settings", icon: "WidgetsIcon"},
  ];

  return (
    <Layout subNavLinks={links} getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode} >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item md={12} sm={12} xs={12}>
            <Switch>
              <Route exact path={match.path}>
                <Redirect to="/reviews/my-reviews" />
              </Route>
              <Route path={`${match.path}/overview`}>
                <Grid container spacing={3}>
                  <Grid item sm={4} xs={6}>
                    <FeatureIconLink icon="StarIcon" label="My Reviews" link="/reviews/my-reviews" iconColor={location.pathname === "/reviews/my-reviews" && "#ffb400"} />
                  </Grid>
                  <Grid item sm={4} xs={6}>
                    <FeatureIconLink icon="PhoneIphoneIcon" label="Send Review Invitation" link="/reviews/send-invitation" iconColor={location.pathname === "/reviews/send-invitation" && "#ffb400"} />
                  </Grid>
                  <Grid item sm={4} xs={6}>
                    <FeatureIconLink icon="CodeIcon" label="Widget" link="/reviews/widget" iconColor={location.pathname === "/reviews/widget" && "#ffb400"} />
                  </Grid>
                </Grid>
              </Route>
              <Route path={`${match.path}/my-reviews`}>
                <MyReviews />
              </Route>
              <Route exact path={`${match.path}/invitations`}>
                <SendReviewInvitation />
              </Route>
              <Route exact path={`${match.path}/invitations/import`}>
                <Import />
              </Route>
              <Route path={`${match.path}/settings/thank-you-page`}>
                <ThankYouPage />
              </Route>
              <Route path={`${match.path}/settings/review-priority`}>
                <ReviewPriority />
              </Route>
              <Route path={`${match.path}/settings/default-text-message`}>
                <DefaultTextMessage />
              </Route>
              <Route path={`${match.path}/widget`}>
                <Widget />
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

export default Reviews;
