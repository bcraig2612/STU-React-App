import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useHistory, useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: "49px",
    left: "0",
    right: "0",
    borderRadius: "0",
    zIndex: "1000",
    display: "none",
    [theme.breakpoints.down('sm')]: {
      display: "block"
    },
  },
}));

export default function MobileTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    let path = location.pathname;
    if(path.split("/").length > 3) {
      path = path.substr(0, path.lastIndexOf("/"));
    }
    setValue(path);
  }, [location, setValue]);

  const handleChange = (event, newValue) => {
    history.push(newValue);
    setValue(newValue);
  };

  if (!props.links) {
    return null;
  }

  let tabs = props.links.map((link, index) => {

    return (
      <Tab
        label={link.title}
        value={link.uri}
        key={index}
      />
    );
  });

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant={props.links.length > 3 ? "scrollable" : "fullWidth"}
        scrollButtons="on"
      >
        {tabs}
      </Tabs>
    </Paper>
  );
}