import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SelectedListItem from "../components/ViewInnerNavigation";
import Breadcrumb from "../components/Breadcrumb";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import CopyToClipboardUI from "../components/CopyToClipboardUI";
import ColorPickerSetting from "../components/ColorPickerSetting";
import Layout from "../components/Layout";
import useTheme from "@material-ui/core/styles/useTheme";
import StyledSetting from "../components/StyledSetting";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2)
  },
  sectionBody: {
    padding: theme.spacing(2),
  },
  formInputSpacer: {
    marginBottom: theme.spacing(2)
  },
  formActions: {
    display: "flex",
    justifyContent: "right"
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
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Chat(props) {
  const classes = useStyles();
  let match = useRouteMatch();
  const links = [
    {title: "Overview", uri: "/chat/overview", icon: "TrendingUpIcon"},
    {title: "Open Chat", uri: "https://chat.sotellus.com/auth/fsad", icon: "LaunchIcon", openInNewWindow: true},
    {title: "Widget", uri: "/chat/widget", icon: "WidgetsIcon"},
  ];
  const theme = useTheme();
  const breadCrumbs = [
    {title: "Dashboard", uri: "/"},
    {title: "Chat", uri: "/chat/overview"},
  ];

  const [personName, setPersonName] = React.useState([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <Layout subNavLinks={links} getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode}>
      <Container maxWidth="lg">
        <Breadcrumb links={breadCrumbs} />
        <Grid container spacing={3}>
          <Grid item md={12} sm={12} xs={12}>
            <Switch>
              <Route exact path={match.path}>
                <Redirect to="/chat/overview" />
              </Route>
              <Route path={`${match.path}/overview`}>

              </Route>
              <Route path={`${match.path}/widget`}>
                <Paper className={classes.paper}>
                  <div className={classes.sectionHeader}>
                    <Typography variant="h6" component="h2">
                      Install Chat on Your Website
                    </Typography>
                  </div>
                  <div className={classes.sectionBody}>
                    <CopyToClipboardUI
                      title="Your Widget Code"
                      value={`<script type="text/javascript">
                        window.__be = window.__be || {};
                        window.__be.id = "demo-company";
                        (function() {
                          var be = document.createElement('script');
                          be.type = 'text/javascript';
                          be.async = true;
                          be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'sotellus.com/js/chat-widget.min.js';
                          var s = document.getElementsByTagName('script')[0];
                          s.parentNode.insertBefore(be, s); })();
                        </script>
                      `}
                    />
                  </div>
                </Paper>

                <Paper className={classes.paper}>
                  <div className={classes.sectionHeader}>
                    <Typography variant="h6" component="h2">
                      Availability
                    </Typography>
                  </div>
                  <div className={classes.sectionBody}>

                    <StyledSetting title="Show Widget 24/7" />

                    <TextField
                      id="time"
                      label="Start Time"
                      type="time"
                      defaultValue="09:00"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      fullWidth
                      className={classes.paper}
                    />

                    <TextField
                      id="time"
                      label="End Time"
                      type="time"
                      defaultValue="05:00"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      fullWidth
                      className={classes.paper}
                    />

                    <div className={classes.formActions}>
                      <Button variant="contained" color="primary">
                        Save
                      </Button>
                    </div>
                  </div>
                </Paper>

                <Paper className={classes.paper}>
                  <div className={classes.sectionHeader}>
                    <Typography variant="h6" component="h2">
                      Colors
                    </Typography>
                  </div>
                  <div className={classes.sectionBody}>
                    <ColorPickerSetting title="Theme Color" color="#009688" />

                    <div className={classes.formActions}>
                      <Button variant="contained" color="primary">
                        Save
                      </Button>
                    </div>
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

export default Chat;
