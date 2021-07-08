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
  firstHalf: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
}));

function ForgotPassword(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.firstHalf}>
        <form className={classes.authForm}>
          <img className={classes.marginBottom} src={logo} alt="logo" width="300px" />
          <Typography variant="h4">
            <Box mb={2} color="text.secondary">
              Forgot password
            </Box>
          </Typography>
          <Typography variant="body2">
            <Box mb={2} color="text.secondary" textAlign="center">
              To reset your account password, enter the email address you registered with, and we will email you the instructions to reset the password.
            </Box>
          </Typography>
          <TextField className={classes.marginBottom} fullWidth id="username" label="Registered email address" variant="outlined" />
          <Button className={classes.marginBottom} variant="contained" color="primary" size="large" fullWidth>
            Send instructions
          </Button>
          <Typography>
            <Link to="/sign-in">
              Return to Sign-in
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
