import Paper from "@material-ui/core/Paper";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ShareIcon from '@material-ui/icons/Share';
import IconButton from "@material-ui/core/IconButton";
import ReplyIcon from '@material-ui/icons/Reply';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import StarIcon from '@material-ui/icons/Star';
import Avatar from "@material-ui/core/Avatar";
import { DateTime } from 'luxon';
import TextField from "@material-ui/core/TextField";
import CancelIcon from '@material-ui/icons/Cancel';
import SendIcon from '@material-ui/icons/Send';
import Fade from "@material-ui/core/Fade";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Button from "@material-ui/core/Button";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import VideoModal from "./VideoModal";
import STULogo from "../soTellUsSquareLogo.png";

const useStyles = makeStyles((theme) => ({
  review: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  top: {
    display: "flex",
    alignItems: "center"
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
  },
  alignLeft: {
    justifySelf: "flex-start",
    flex: "1",
  },
  yourReviews: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  yourReviewCount: {
    color: theme.palette.primary.main
  },
  reviewStars: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.main,
    padding: "5px 10px",
    borderRadius: "28px",
    marginRight: "5px",
    color: "#fff",
  },
  reviewStarsRating: {
    marginRight: "5px"
  },
  location: {
    color: theme.palette.primary.main,
    fontWeight: "bold"
  },
  person: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontWeight: "bold",
    marginTop: theme.spacing(2),
  },
  personName: {
    marginLeft: "10px"
  },
  date: {
    display: "flex",
    justifyContent: "flex-end",
    justifySelf: "flex-end",
    fontWeight: "bold",
    flex: "1"
  },
  facebook: {
    color: "#4267B2",
    marginRight: theme.spacing(1)
  },
  twitter: {
    color: "#1DA1F2",
    marginRight: theme.spacing(1)
  },
  linkedIn: {
    color: "#2867B2",
    marginRight: theme.spacing(1)
  },
  pinterest: {
    color: "#BD081C",
    marginRight: theme.spacing(1)
  },
  replyView: {
    padding: theme.spacing(2),
    background: theme.palette.divider
  },
  replyViewTitle: {
    fontWeight: "bold",
    fontSize: "1.1em"
  }
}));

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    fontSize: "1.1em",
  },
}))(Tooltip);

function Review(props) {
  const classes = useStyles();
  const [reply, setReply] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  let actions;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (reply) {
    actions = (
        <Fade in={true}>
          <div>
            <TextField style={{ marginBottom: "10px" }} fullWidth id="reply" label="Reply" variant="outlined" />
            <div className={classes.actions}>
              <CustomTooltip title="Cancel" placement="top" arrow>
                <IconButton onClick={() => setReply(false)} aria-label="cancel" className={classes.margin}>
                  <CancelIcon fontSize="small" />
                </IconButton>
              </CustomTooltip>

              <CustomTooltip title="Send" placement="top" arrow>
                <IconButton aria-label="send" className={classes.margin}>
                  <SendIcon fontSize="small" />
                </IconButton>
              </CustomTooltip>
            </div>
          </div>
        </Fade>
    );
  } else {
    actions = (
      <div className={classes.actions}>
        <div className={classes.alignLeft}>
          <IconButton aria-label="more">
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </div>

        <CustomTooltip title="Share" placement="top" arrow>
          <IconButton aria-label="share" className={classes.margin} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <ShareIcon fontSize="small" />
          </IconButton>
        </CustomTooltip>

        <Menu
          id={props.id + "-share-menu"}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><FacebookIcon className={classes.facebook} /> Share on Facebook</MenuItem>
          <MenuItem onClick={handleClose}><TwitterIcon className={classes.twitter} /> Share on Twitter</MenuItem>
          <MenuItem onClick={handleClose}><LinkedInIcon className={classes.linkedIn} /> Share on LinkedIn</MenuItem>
          <MenuItem onClick={handleClose}><PinterestIcon className={classes.pinterest} /> Share on Pinterest</MenuItem>
        </Menu>

        <CustomTooltip title="Reply" placement="top" arrow>
          <IconButton onClick={() => setReply(true)} aria-label="reply" className={classes.margin}>
            <ReplyIcon fontSize="small" />
          </IconButton>
        </CustomTooltip>
      </div>
    );
  }

  let reviewContent = <p>{props.reviewText}</p>;
  let gmbReply;
  if (props.gmbReview && props.gmbReview.ownerReply) {
    gmbReply = <div className={classes.replyView}>
      <div className={classes.replyViewTitle}>Your Reply</div>
      {props.gmbReview.ownerReply}
    </div>;
  }

  let reviewOn;
  let reviewLogo;
  switch (props.system) {
    case "gmb":
      reviewOn = "Google";
      reviewLogo = "https://img-authors.flaticon.com/google.jpg";
      break;
    case "fbp":
      reviewOn = "Facebook";
      reviewLogo = STULogo;
      break;
    case "stu":
      reviewOn = "SoTellUs";
      reviewLogo = STULogo;
      break;
    default:
      console.log('system is invalid', props)
      return null;
  }

  if (props.reviewType === "video") {
    reviewContent = (
      <React.Fragment>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PlayCircleOutlineIcon />}
          style={{marginTop: "20px", marginBottom: "20px"}}
          onClick={() => setVideoOpen(true)}
        >
          Video Review
        </Button>
        <VideoModal poster={props.poster} videoURL={props.videoURL} open={videoOpen} handleClose={() => setVideoOpen(false)} />
      </React.Fragment>
    );
  }

  return (
    <Paper elevation={1} className={classes.review}>
      <div className={classes.top}>
        <div className={classes.reviewStars}>
          {props.rating >= 1 && (
            <React.Fragment>
              <div className={classes.reviewStarsRating}>{props.rating}</div>
              <StarIcon fontSize="small" color="inherit" />
            </React.Fragment>
          )}
          {!props.rating && (
            <FacebookIcon fontSize="small" color="inherit" />
          )}
        </div>
        <span className={classes.location}>on {reviewOn}</span>
        <span className={classes.date}>{DateTime.fromSeconds(parseInt(props.date)).toLocaleString(DateTime.DATE_FULL)}</span>
      </div>

      <div className={classes.person}>
        <Avatar alt="Remy Sharp" src={reviewLogo} />
        <span className={classes.personName}>{props.name}</span>
      </div>

      {reviewContent}
      {gmbReply}
      {actions}
    </Paper>
  );
}

export default Review;