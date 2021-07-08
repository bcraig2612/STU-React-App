import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import StarIcon from '@material-ui/icons/Star';
import ChatIcon from '@material-ui/icons/Chat';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LockIcon from '@material-ui/icons/Lock';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CodeIcon from '@material-ui/icons/Code';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import UpgradeAccountDialog from "./UpgradeAccountDialog";

const useStyles = makeStyles((theme) => ({
  iconContainer: props => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative",
    padding: theme.spacing(2)
  }),
  lockedOverlay: {
    background: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    borderRadius: "4px",
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
  iconLabel: props => ({
    textAlign: "center",
    marginTop: "5px",
    zIndex: "1000",
  }),
  iconLabelLocked: {
    textAlign: "center",
    marginTop: "5px",
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: props => ({
    color: props.background ? props.background: theme.palette.text.secondary,
  }),
}));

function FeatureIconLink(props) {
  let history = useHistory();
  let icon;
  let styleProps = {};
  if (props.iconColor) {
    styleProps.background = props.iconColor;
  }

  const [open, setOpen] = React.useState(false);

  const handleUpgradeAccountDialogOpen = () => {
    setOpen(true);
  };

  const handleUpgradeAccountDialogClose = () => {
    setOpen(false);
  };

  function handleLink(link) {
    if (props.locked) {
      handleUpgradeAccountDialogOpen();
    } else {
      history.push(link);
    }
  }

  switch(props.icon) {
    case 'StarIcon':
      icon  = <StarIcon fontSize="large" />;
      break;
    case 'LocalOfferIcon':
      icon  = <LocalOfferIcon fontSize="large" />;
      break;
    case 'ChatIcon':
      icon  = <ChatIcon fontSize="large" />;
      break;
    case 'VoiceChatIcon':
      icon  = <VoiceChatIcon fontSize="large" />;
      break;
    case 'AssignmentIcon':
      icon  = <AssignmentIcon fontSize="large" />;
      break;
    case 'FavoriteIcon':
      icon  = <FavoriteIcon fontSize="large" />;
      break;
    case 'SettingsIcon':
      icon  = <SettingsIcon fontSize="large" />;
      break;
    case 'PhoneIphoneIcon':
      icon  = <PhoneIphoneIcon fontSize="large" />;
      break;
    case 'CodeIcon':
      icon  = <CodeIcon fontSize="large" />;
      break;
    default:
      break;
  }

  const classes = useStyles(styleProps);

  let content = (
    <Paper className={classes.iconContainer} onClick={() => handleLink(props.link)}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.iconLabel}>
        {props.label}
      </div>
    </Paper>
  );

  if (props.locked) {
    content = (
      <React.Fragment>
        <Paper className={classes.iconContainer} onClick={() => handleLink(props.link)}>
          <div className={classes.lockedOverlay} />

          <div className={classes.icon}>{icon}</div>
          <div className={classes.iconLabelLocked}>
            <LockIcon fontSize="inherit" /> {props.label}
          </div>
        </Paper>
        <UpgradeAccountDialog open={open} handleClose={handleUpgradeAccountDialogClose} />
      </React.Fragment>
    );
  }

  return content;
}

export default FeatureIconLink;
