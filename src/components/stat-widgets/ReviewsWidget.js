import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';
import withStyles from "@material-ui/core/styles/withStyles";
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

const CustomizedLinearProgress = withStyles((theme) => ({
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    backgroundColor: "#ffb400",
  },
}))(LinearProgress);

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center" style={{marginBottom: "10px"}}>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary" style={{display: "flex", alignItems: "center"}}>
          {props.starLabel} <StarIcon style={{marginLeft: "5px", fontSize: ".9em"}} fontSize="small" />
        </Typography>
      </Box>
      <Box width="100%" mr={1}>
        <CustomizedLinearProgress variant="determinate" value={props.value} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{props.numberOfReviews}</Typography>
      </Box>
    </Box>
  );
}

function ReviewsWidget(props) {
  const classes = useStyles();
  const normalise = value => (value - 0) * 100 / (509 - 0);
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
          Review Summary
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
        Review Summary
      </Typography>
      <div className={classes.root}>
        <div className={classes.reviewTotals}>
          <div className={classes.totalScoreLarge}>4.4</div>
          <Rating name="read-only" value={4.4} precision={0.5} readOnly />
          <Typography variant="body2" display="block" gutterBottom>
            509 Reviews
          </Typography>
        </div>

        <div>
          <LinearProgressWithLabel value={normalise(162)} numberOfReviews={162} starLabel={5} />
          <LinearProgressWithLabel value={normalise(109)} numberOfReviews={109} starLabel={4} />
          <LinearProgressWithLabel value={normalise(118)} numberOfReviews={118} starLabel={3} />
          <LinearProgressWithLabel value={normalise(51)} numberOfReviews={51} starLabel={2} />
          <LinearProgressWithLabel value={normalise(69)} numberOfReviews={69} starLabel={1} />
        </div>
      </div>
    </Paper>
  );
}

export default ReviewsWidget;