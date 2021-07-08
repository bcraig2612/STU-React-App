import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import NavigationBar from "../components/NavigationBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2)
  },
}));

function Layout(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavigationBar hideMenu={props.hideMenu} getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode} />
      <div className={classes.root}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default Layout;