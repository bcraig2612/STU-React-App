import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import StarIcon from '@material-ui/icons/Star';
import ChatIcon from '@material-ui/icons/Chat';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LockIcon from '@material-ui/icons/Lock';
import SettingsIcon from '@material-ui/icons/Settings';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  iconContainer: props => ({
    backgroundColor: props.background ? props.background: theme.palette.info.main,
    color: "#fff",
    width: "90px",
    height: "90px",
    borderRadius: "18px",
    boxShadow: theme.shadows[2],
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative",
  }),
  lockedOverlay: {
    background: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    borderRadius: "18px",
    zIndex: "999",
  },
  lockedAction: {
    position: "absolute",
    zIndex: "1000",
    left: "0",
    right: "0",
    backgroundColor: "#333",
    color: "#fff",
    bottom: "0",
    textAlign: "center",
    borderBottomLeftRadius: "18px",
    borderBottomRightRadius: "18px",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  iconLabel: {
    textAlign: "center",
    marginTop: "5px",
    color: theme.palette.text.secondary,
  },
  iconLabelLocked: {
    textAlign: "center",
    marginTop: "5px",
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    fontSize: "4em"
  }
}));

function AppIcon(props) {
  let history = useHistory();
  let icon;
  let label;
  let link;
  let styleProps = {};

  function handleLink(link) {
    history.push(link);
  }

  switch(props.app) {
    case 'reviews':
      icon  = <StarIcon fontSize="large" />;
      label = "Reviews";
      link  = "/reviews";
      styleProps.background = "#1E88E5";
      break;
    case 'chat':
      icon  = <ChatIcon fontSize="large" />;
      label = "Chat";
      link  = "/chat";
      styleProps.background = "#009688";
      break;
    case 'video':
      icon  = <VoiceChatIcon fontSize="large" />;
      label = "Video";
      link  = "/video";
      styleProps.background = "#EF5350";
      break;
    case 'survey':
      icon  = <AssignmentIcon fontSize="large" />;
      label = "Survey";
      link  = "/survey";
      styleProps.background = "#FFB74D";
      break;
    case 'settings':
      icon  = <SettingsIcon fontSize="large" />;
      label = "Settings";
      link  = "/settings";
      styleProps.background = "#424242";
      break;
    default:
      break;
  }

  const classes = useStyles(styleProps);

  let content = (
    <React.Fragment>
      <div className={classes.iconContainer} onClick={() => handleLink(link)}>
        {icon}
      </div>
      <div className={classes.iconLabel}>
        {label}
      </div>
    </React.Fragment>
  );

  if (props.locked) {
    content = (
      <React.Fragment>
        <div className={classes.iconContainer} onClick={() => handleLink(link)}>
          {icon}
          <div className={classes.lockedOverlay} />
        </div>
        <div className={classes.iconLabelLocked}>
          <LockIcon fontSize="inherit" /> {label}
        </div>
      </React.Fragment>
    );
  }

  return content;
}

export default AppIcon;
