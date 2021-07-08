import React from 'react'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2)
  },
  title: {
    fontSize: "1.2em"
  },
  subTitle: {
    color: theme.palette.text.secondary
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column"
  }
}));

function SettingRow(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.titleContainer}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.subTitle}>{props.subTitle}</div>
        </div>
        {props.children}
      </div>
    </div>
  );
}
export default SettingRow;