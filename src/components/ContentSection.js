import Paper from "@material-ui/core/Paper";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  sectionBody: {
    padding: theme.spacing(2),
  },
  sectionHeader: {
    padding: theme.spacing(2),
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },
  paper: {
    marginBottom: theme.spacing(2),
  },
}));

function ContentSection(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.sectionHeader}>
        <Typography variant="h6" component="h2">
          {props.title}
        </Typography>
        {props.subTitle && (
          <Typography variant="body2" color="textSecondary" component="p">
            {props.subTitle}
          </Typography>
        )}
      </div>

      <div className={classes.sectionBody}>
        {props.children}
      </div>
    </Paper>
  );
}

export default ContentSection;