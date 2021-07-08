import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import {Skeleton} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  root: {
  },
  reviewTotals: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  totalScoreLarge: {
    fontSize: "3.4em"
  },
  reviewBreakdown: {
    display: "flex",
  }
}));

function PartnersWidget(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  if (loading) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="button" display="block" gutterBottom>
          My Customers
        </Typography>
        <div className={classes.root}>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </div>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="button" display="block" gutterBottom>
        My Customers
      </Typography>
      <div className={classes.root}>
        <div className={classes.reviewTotals}>
          <Typography variant="body2" display="block" gutterBottom>
            509 Reviews
          </Typography>
        </div>

        <div>

        </div>
      </div>
    </Paper>
  );
}

export default PartnersWidget;