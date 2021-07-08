import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StarIcon from '@material-ui/icons/Star';
import ChatIcon from '@material-ui/icons/Chat';
import {useHistory, useRouteMatch} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex: "1000",
    borderTop: "2px solid " + theme.palette.divider,
    [theme.breakpoints.up('md')]: {
      display: "none"
    },
  },
}));

export default function AppNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  let match = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
    setValue(match.path);
  }, [value, match]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction value="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction value="/reviews" label="Reviews" icon={<StarIcon />} />
      <BottomNavigationAction value="/chat" label="Chat" icon={<ChatIcon />} />
      <BottomNavigationAction onClick={props.openDrawer} label="More" icon={<MoreHorizIcon />} />
    </BottomNavigation>
  );
}