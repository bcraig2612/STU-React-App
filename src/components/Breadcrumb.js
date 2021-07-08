import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useHistory, useLocation } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      // display: "none"
    },
  },
}));

export default function Breadcrumb(props) {
  const classes = useStyles();
  let location = useLocation();
  let history = useHistory();

  function handleClick(event, url) {
    event.preventDefault();
    history.push(url);
  }

  const listItems = props.links.map((link, index) => {
    if (location.pathname === link.uri) {
      return (
        <Link
          color="textPrimary"
          href={link.uri}
          onClick={(e) => handleClick(e, link.uri)}
          aria-current="page"
          key={index}
        >
          {link.title}
        </Link>
      );
    }
    return (
      <Link
        color="inherit"
        href={link.uri}
        onClick={(e) => handleClick(e, link.uri)}
        key={index}
      >
        {link.title}
      </Link>
    );
  });

  return (
    <Breadcrumbs className={classes.root} aria-label="breadcrumb" style={{marginBottom: "10px"}}>
      {listItems}
    </Breadcrumbs>
  );
}