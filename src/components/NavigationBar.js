import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../soTellUsSiteLogo.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";
import NavigationDrawer from "./NavigationDrawer";
import NewActionMenu from "./NewActionMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoContainer: {
    flexGrow: 1,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    maxWidth: "180px",
  }
}));

function NavigationBar(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (uri) => {
    setAnchorEl(null);

    if (uri) {
      history.push(uri);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" color="primary" className={classes.appBar}>
          <Toolbar>
            <div className={classes.logoContainer}>
              <img className={classes.logo} src={logo} alt="logo" />
            </div>
            {!props.hideMenu && (
              <React.Fragment>
                <IconButton style={{marginRight: "10px"}} aria-label="add" color="inherit" onClick={handleClick}>
                  <AddIcon />
                </IconButton>
                <IconButton aria-label="menu" color="inherit" onClick={() => setOpen(true)}>
                  <AccountCircleIcon />
                </IconButton>
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
      {!props.hideMenu && <NavigationDrawer getDarkModePreference={props.getDarkModePreference} darkMode={props.darkMode} open={open} setOpen={setOpen} />}
      {!props.hideMenu && <NewActionMenu anchorEl={anchorEl} handleClose={handleClose} />}
    </React.Fragment>
  );
}

export default NavigationBar;
