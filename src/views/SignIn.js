import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Layout from "./Layout";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import logo from "../soTellUsDarkLogo.png";
import {Box} from "@material-ui/core";
import loginImage from "../sotellusSignIn.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
  },
  authForm: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    alignItems: "center",
    maxWidth: "500px",
    margin: "auto"
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  sideBanner: {
    background: "url(" + loginImage + ")",
    height: "100vh",
    flex: 1,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      display: "none",
    },
  },
  firstHalf: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  sideBannerContent: {
    maxHeight: "auto",
    padding: theme.spacing(2),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    maxWidth: "500px"
  }
}));

function SignIn(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.firstHalf}>
        <form className={classes.authForm}>
          <img className={classes.marginBottom} src={logo} alt="logo" width="300px" />
          <Typography variant="h4">
            <Box mb={2} color="text.secondary">
              Sign in
            </Box>
          </Typography>
          <TextField className={classes.marginBottom} fullWidth id="username" label="Username or Email" variant="outlined" />
          <TextField className={classes.marginBottom} fullWidth id="password" label="Password" variant="outlined" />
          <Button className={classes.marginBottom} variant="contained" color="primary" size="large" fullWidth>
            Sign in
          </Button>
          <Typography>
            <Link to="/forgot-password">
              Forgot password?
            </Link>
          </Typography>
        </form>
      </div>

      <div className={classes.sideBanner}>
        <Paper className={classes.sideBannerContent}>
          <Box fontWeight="fontWeightBold" mb={2} fontSize="h6.fontSize">
            Collect Powerful Reviews In Less Than 30 Seconds!
          </Box>
          <Typography gutterBottom variant="body1">
            <Box mb={2}>
              Let’s talk about how our review platform can help your business grow.
            </Box>
          </Typography>
          <Button href="#" variant="outlined" color="primary">Get Started</Button>
        </Paper>
      </div>
    </div>
  );
}

export default SignIn;
