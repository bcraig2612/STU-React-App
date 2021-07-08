import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LaunchIcon from '@material-ui/icons/Launch';
import DraftsIcon from '@material-ui/icons/Drafts';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WidgetsIcon from '@material-ui/icons/Widgets';
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ViewInnerNavigation(props) {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();

  const handleListItemClick = (event, index, uri, openInNewWindow) => {
    event.preventDefault();

    if (openInNewWindow) {
      window.open(uri, '_blank');
      return;
    }

    history.push(uri);
  };

  const listItems = props.links.map((link, index) => {
    let icon;
    switch (link.icon) {
      case 'TrendingUpIcon':
        icon = <TrendingUpIcon />;
        break;
      case 'DraftsIcon':
        icon = <DraftsIcon />;
        break;
      case 'WidgetsIcon':
        icon = <WidgetsIcon />;
        break;
      case 'LaunchIcon':
        icon = <LaunchIcon />;
        break;
      default:
        break;
    }

    return (
      <ListItem
        button
        selected={location.pathname === link.uri}
        onClick={(event) => handleListItemClick(event, 0, link.uri, link.openInNewWindow)}
        key={index}
      >
        {icon && (
          <ListItemIcon>
            {icon}
          </ListItemIcon>
        )}
        <ListItemText primary={link.title} />
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {listItems}
      </List>
    </div>
  );
}
