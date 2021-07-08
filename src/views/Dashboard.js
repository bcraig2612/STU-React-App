import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ReviewsWidget from "../components/stat-widgets/ReviewsWidget";
import FeatureIconLink from "../components/FeatureIconLink";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Layout from "../components/Layout";
import GettingStartedWidget from "../components/stat-widgets/GettingStartedWidget";
import PartnersWidget from "../components/stat-widgets/PartnersWidget";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  return (
      <Layout getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode}>
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item md={4} sm={12} xs={12}>
                <GettingStartedWidget />
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <ReviewsWidget />
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <PartnersWidget />
              </Grid>

              <Grid item md={12} sm={12} xs={12}>
                <Grid container spacing={3}>
                  <Grid item sm={4} xs={6}>
                    <FeatureIconLink icon="StarIcon" label="Reviews" link="/reviews" iconColor="#ffb400" />
                  </Grid>
                  <Grid item sm={4} xs={6}>
                    <FeatureIconLink icon="ChatIcon" label="Chat" link="/chat" iconColor="#009688" />
                  </Grid>
                  <Grid item sm={4} xs={6}>
                    <FeatureIconLink icon="FavoriteIcon" label="Referrals" link="/referrals" iconColor="#EF5350" />
                  </Grid>
                  <Grid item sm={4} xs={6}>
                    <FeatureIconLink icon="LocalOfferIcon" label="Special Offers" link="/special-offers" iconColor="#1E88E5" />
                  </Grid>
                  <Grid item sm={4} xs={6}>
                    <FeatureIconLink icon="AssignmentIcon" label="Survey" link="/survey" iconColor="#FFB74D" locked={true} />
                  </Grid>
                  <Grid item sm={4} xs={6}>
                    <FeatureIconLink icon="SettingsIcon" label="Settings" link="/settings" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
      </Layout>
  );
}

export default Dashboard;
