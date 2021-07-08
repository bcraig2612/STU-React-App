import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import ChatIcon from '@material-ui/icons/Chat';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LockIcon from '@material-ui/icons/Lock';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function NavigationDrawer(props) {
  const classes = useStyles();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    props.setOpen(open);
  };

  const darkModeToggleHandler = (darkMode) => {
    localStorage.setItem('dark-mode', darkMode);
    props.getDarkModePreference();
  };

  let darkModeToggle = (
    <List>
      <ListItem button onClick={() => darkModeToggleHandler('true')}>
        <ListItemIcon><Brightness3Icon /></ListItemIcon>
        <ListItemText primary={"Dark Mode"} />
      </ListItem>
    </List>
  );

  if (props.darkMode) {
    darkModeToggle = (
      <List>
        <ListItem button onClick={() => darkModeToggleHandler('false')}>
          <ListItemIcon><WbSunnyIcon /></ListItemIcon>
          <ListItemText primary={"Light Mode"} />
        </ListItem>
      </List>
    );
  }


  return (
      <Drawer anchor="right" open={props.open} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button>
              <ListItemIcon><StarIcon /></ListItemIcon>
              <ListItemText primary={"Reviews"} />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon><ChatIcon /></ListItemIcon>
              <ListItemText primary={"Chat"} />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon><VoiceChatIcon /></ListItemIcon>
              <ListItemText primary={"Video"} />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon><AssignmentIcon /></ListItemIcon>
              <ListItemText primary={"Survey"} />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary={"Settings"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary={"View Public Profile"} />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
  );
}

export default NavigationDrawer;