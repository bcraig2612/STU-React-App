import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';
import ChatIcon from '@material-ui/icons/Chat';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from "@material-ui/core/Tooltip";
import logo from "../soTellUsSiteLogo.png";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SettingsIcon from '@material-ui/icons/Settings';
import {useHistory, useLocation, useRouteMatch} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import DraftsIcon from "@material-ui/icons/Drafts";
import WidgetsIcon from "@material-ui/icons/Widgets";
import LaunchIcon from "@material-ui/icons/Launch";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import withStyles from "@material-ui/core/styles/withStyles";
import BottomNavigation from "./AppNavigation";
import IconButton from "@material-ui/core/IconButton";
import MobileTabs from "./MobileTabs";
import {Typography} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NavigationDrawer from "./NavigationDrawer";

const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: "#333",
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: "1px solid " + theme.palette.divider,
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  },
  mobileAppBar: {
    background: "#333",
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: "1px solid " + theme.palette.divider,
    display: "none",
    [theme.breakpoints.down('sm')]: {
      display: "block"
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  },
  customDrawer: {
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
    flex: "0 0 auto",
    width: "200px",
    height: "100vh",
    flexShrink: 0,
    position: "relative",
  },
  customDrawerContent: {
    background: theme.palette.background.paper,
    position: "fixed",
    left: "60px",
    top: "0",
    bottom: "0",
    width: "200px"
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
      marginBottom: "56px",
      marginTop: "56px",
    },
  },
  logoContainer: {
    flexGrow: 1,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    maxWidth: "180px",
  },
  listItem: {
    height: "48px"
  },
  listItemIcon: {
    minWidth: "0"
  }
}));

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    fontSize: "1.1em",
  },
}))(Tooltip);

export default function Layout(props) {
  const classes = useStyles();
  let history = useHistory();
  let match = useRouteMatch();
  let location = useLocation();
  let logoImg = logo;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [navigationDrawerOpen, setNavigationDrawerOpen] = React.useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleListItemClick = (event, index, uri, openInNewWindow) => {
    event.preventDefault();

    if (openInNewWindow) {
      window.open(uri, '_blank');
      return;
    }

    history.push(uri);
  };

  const handleNavigationChange = (uri) => {
    if (uri) {
      history.push(uri);
    }
  };

  const handleBackAction = () => {
    history.push('/');
  };

  let listItems = null;
  if (props.subNavLinks) {
    listItems = props.subNavLinks.map((link, index) => {
      let icon;
      switch (link.icon) {
        case 'TrendingUpIcon':
          icon = <TrendingUpIcon/>;
          break;
        case 'DraftsIcon':
          icon = <DraftsIcon/>;
          break;
        case 'WidgetsIcon':
          icon = <WidgetsIcon/>;
          break;
        case 'LaunchIcon':
          icon = <LaunchIcon/>;
          break;
        case 'StarIcon':
          icon = <StarIcon/>;
          break;
        default:
          break;
      }

      let path = location.pathname;
      if(path.split("/").length > 3) {
        path = path.substr(0, path.lastIndexOf("/"));
      }

      return (
        <ListItem
          button
          selected={path === link.uri}
          onClick={(event) => handleListItemClick(event, 0, link.uri, link.openInNewWindow)}
          key={index}
        >
          {true === false && icon && (
            <ListItemIcon>
              {icon}
            </ListItemIcon>
          )}
          <ListItemText primary={link.title}/>
        </ListItem>
      );
    });
  }

  let mobileNavTitle;
  switch (match.path) {
    case '/':
      mobileNavTitle = "Dashboard";
      break;
    default:
      mobileNavTitle = match.path.substring(1);
      mobileNavTitle = mobileNavTitle.charAt(0).toUpperCase() + mobileNavTitle.slice(1)
      break;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={logoImg} alt="logo" />
          </div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMenuClick}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>View Public Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <CustomTooltip title="Overview" placement="right" arrow>
              <ListItem selected={match.path === "/"} onClick={() => handleNavigationChange('/')} className={classes.listItem} button>
                <ListItemIcon className={classes.listItemIcon}><HomeIcon /></ListItemIcon>
              </ListItem>
            </CustomTooltip>

            <CustomTooltip title="Reviews" placement="right" arrow>
              <ListItem selected={match.path === "/reviews"} onClick={() => handleNavigationChange('/reviews')} className={classes.listItem} button>
                <ListItemIcon className={classes.listItemIcon}><StarIcon /></ListItemIcon>
              </ListItem>
            </CustomTooltip>

            <CustomTooltip title="Special Offers" placement="right" arrow>
              <ListItem selected={match.path === "/special-offers"} onClick={() => handleNavigationChange('/special-offers')} className={classes.listItem} button>
                <ListItemIcon className={classes.listItemIcon}><LocalOfferIcon /></ListItemIcon>
              </ListItem>
            </CustomTooltip>

            <CustomTooltip title="Chat" placement="right" arrow>
              <ListItem onClick={() => handleNavigationChange('/chat')} selected={match.path === "/chat"} className={classes.listItem} button>
                <ListItemIcon className={classes.listItemIcon}><ChatIcon /></ListItemIcon>
              </ListItem>
            </CustomTooltip>

            <CustomTooltip title="Referrals" placement="right" arrow>
              <ListItem selected={match.path === "/referrals"} onClick={() => handleNavigationChange('/referrals')} className={classes.listItem} button>
                <ListItemIcon className={classes.listItemIcon}><FavoriteIcon /></ListItemIcon>
              </ListItem>
            </CustomTooltip>

            {/*<CustomTooltip title="Video" placement="right" arrow>*/}
            {/*  <ListItem selected={match.path === "/video"} className={classes.listItem} button>*/}
            {/*    <ListItemIcon className={classes.listItemIcon}><VoiceChatIcon /></ListItemIcon>*/}
            {/*  </ListItem>*/}
            {/*</CustomTooltip>*/}

            {/*<CustomTooltip title="Survey" placement="right" arrow>*/}
            {/*  <ListItem selected={match.path === "/survey"} className={classes.listItem} button>*/}
            {/*    <ListItemIcon className={classes.listItemIcon}><AssignmentIcon /></ListItemIcon>*/}
            {/*  </ListItem>*/}
            {/*</CustomTooltip>*/}

            {/*<CustomTooltip title="Reports" placement="right" arrow>*/}
            {/*  <ListItem selected={match.path === "/reports"} onClick={() => handleNavigationChange('/reports')} className={classes.listItem} button>*/}
            {/*    <ListItemIcon className={classes.listItemIcon}><EqualizerIcon /></ListItemIcon>*/}
            {/*  </ListItem>*/}
            {/*</CustomTooltip>*/}

            <CustomTooltip title="Settings" placement="right" arrow>
              <ListItem selected={match.path === "/settings"} onClick={() => handleNavigationChange('/settings')} className={classes.listItem} button>
                <ListItemIcon className={classes.listItemIcon}><SettingsIcon /></ListItemIcon>
              </ListItem>
            </CustomTooltip>
          </List>
        </div>
      </Drawer>

      <NavigationDrawer open={navigationDrawerOpen} setOpen={(val) => setNavigationDrawerOpen(val)} />

      {listItems !== null && (
        <div className={classes.customDrawer}>

          <div className={classes.customDrawerContent}>
            <Toolbar />

            <List component="nav">
              {listItems}
            </List>
          </div>
        </div>
      )}

      <AppBar position="fixed" className={classes.mobileAppBar} elevation={0}>
        <Toolbar variant="dense">
          {location.pathname !== "/" && (
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleBackAction}
            >
              <ArrowBackIcon />
            </IconButton>
          )}

          <Typography variant="h6" style={{marginLeft: "10px"}}>
            {mobileNavTitle}
          </Typography>

        </Toolbar>
      </AppBar>
      {props.subNavLinks !== null && <MobileTabs links={props.subNavLinks} />}

      <main className={classes.content} style={listItems === null ? {marginTop: "0"} : {}}>
        <Toolbar />
        {props.children}
      </main>
      <BottomNavigation openDrawer={() => setNavigationDrawerOpen(true)} />
    </div>
  );
}