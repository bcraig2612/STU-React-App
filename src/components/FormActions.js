import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  formActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing(2)
  },
  flexEnd: {
    justifyContent: "flex-end",
  }
}));

function FormActions(props) {
  const classes = useStyles();

  return (
    <div className={classes.formActions + (props.flexEnd === true ? ' '+classes.flexEnd : '')}>
      {props.children}
    </div>
  );
}

export default FormActions;