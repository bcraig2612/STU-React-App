import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  popover: {
    position: 'absolute',
    zIndex: '2',
    right: "0",
    bottom: "0"
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  },
  colorPickerSettingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    border: "2px solid rgb(173, 182, 190)",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "4px",
    wordBreak: "break-all"
  },
  title: {
    fontSize: "1.2em"
  },
  subTitle: {
    fontSize: ".9em"
  }
}));

function PreviewTextMessage(props) {
  const classes = useStyles();

  return (
    <div style={{position: "relative"}}>
      <div className={classes.title}>Preview Text Message</div>
      <div className={classes.colorPickerSettingWrapper}>
        {props.children}
      </div>
      <div className={classes.subTitle}>Type your custom message below to see a preview here.</div>
    </div>
  );
}
export default PreviewTextMessage;