import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
  },
  media: {
    height: 140,
  },
});

export default function GettingStartedWidget() {
  const classes = useStyles();
  let history = useHistory();

  const redirect = () => {
    history.push('/setup');
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={redirect}>
        <CardMedia
          className={classes.media}
          image="https://blog.zoom.us/wp-content/uploads/2018/02/iStock-668389604.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Getting started
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Click here to set up your account and start generating reviews!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={redirect}>
          Setup Account
        </Button>
      </CardActions>
    </Card>
  );
}