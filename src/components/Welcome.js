import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { DateTime } from 'luxon';

const useStyles = makeStyles({
  root: {
  },
  media: {
    height: 140,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "99"
  },
  overlay: {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    zIndex: "100",
    background: "rgba(0, 0, 0, 0.5)",
  },
  time: {
    alignSelf: "center",
    justifySelf: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.4em",
    zIndex: "101",
  }
});

function Welcome() {
  const classes = useStyles();

  const greetingText = () => {
    const currentHour = DateTime.local().hour;
    if (currentHour >= 12 && currentHour <= 17) return "Good afternoon"
    else if (currentHour >= 18) return "Good evening"
    else return "Good morning"
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://blog.zoom.us/wp-content/uploads/2018/02/iStock-668389604.jpg"
        title="Contemplative Reptile"
      >
        <div className={classes.overlay}></div>
        <div className={classes.time}>
          {DateTime.local().toLocaleString(DateTime.DATETIME_MED)}
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {greetingText()}, Cody
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Getting started?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Setup
        </Button>
      </CardActions>
    </Card>
  );
}

export default Welcome;