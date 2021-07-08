import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import {useGetReviews, useGetReviewStats} from "../../customHooks";
import Review from "../../components/Review";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Rating from "@material-ui/lab/Rating";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Breadcrumb from "../../components/Breadcrumb";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  sectionBody: {
    padding: theme.spacing(2),
  },
  paper: {
    marginBottom: theme.spacing(2),
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
    marginLeft: "5px",
    marginRight: "5px",
    color: "#fff",
  },
  reviewStarsRating: {
    marginRight: "5px"
  },
  filter: {
    display: "flex"
  },
  hideSM: {
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  }
}));

const StyledRating = withStyles({
  iconFilled: {
    color: '#fff',
  },
  iconHover: {
    color: '#fff',
  },
})(Rating);

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Reviews", uri: "/reviews"},
  {title: "My Reviews", uri: "/reviews/my-reviews"},
];

function MyReviews(props) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const { reviews, isLoading, isError } = useGetReviews(page, filter);
  const { data: reviewStats, isLoading: rsIsLoading, isError: rsIsError } = useGetReviewStats();
  const classes = useStyles();
  let displayReviews;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) {
    displayReviews = (
      <React.Fragment>
        <div style={{marginBottom: "20px"}}>
          <Skeleton height={40} variant="text" />
          <div style={{display: "flex", alignItems: "center"}}>
            <Skeleton height={40} width={40} variant="circle" style={{marginRight: "20px"}} />
            <Skeleton height={30} width={100} variant="text" />
          </div>
          <Skeleton height={30} variant="text" />
          <Skeleton height={30} variant="text" />
        </div>
        <div>
          <Skeleton height={40} variant="text" />
          <div style={{display: "flex", alignItems: "center"}}>
            <Skeleton height={40} width={40} variant="circle" style={{marginRight: "20px"}} />
            <Skeleton height={30} width={100} variant="text" />
          </div>
          <Skeleton height={30} variant="text" />
          <Skeleton height={30} variant="text" />
        </div>

      </React.Fragment>
    );
  }

  if (isError) {
    displayReviews = (
      <p>Error..</p>
    );
  }

  if (reviews && reviews.data && reviews.data.current_results.length) {
    displayReviews = reviews.data.current_results.map((review) => {
      return (
        <Review
          key={review.reviewid}
          name={review.name}
          system={review.system}
          reviewType={review.type}
          avatar="https://material-ui.com/static/images/avatar/1.jpg"
          rating={(review.stars / 2)}
          reviewText={review.review}
          videoURL={review.media.length ? review.media[0].url: ''}
          poster={review.media.length ? review.media[0].thumbnail_url: ''}
          date={review.date_added}
          gmbReview={(review.settings && review.settings.gmb_review) ? review.settings.gmb_review : false}
        />
      )
    });
  }

  if (!isLoading && ! reviews.data.current_results.length) {
    displayReviews = <p>No reviews found</p>;
  }

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />

      <Paper elevation={1} className={classes.paper}>
        <div className={classes.sectionBody}>

          {rsIsLoading && (
            <Skeleton height={40} variant="text" />
          )}

          {!rsIsLoading && (
            <div className={classes.yourReviews}>
              <Typography component="legend" className={classes.hideSM}>My Reviews</Typography>
              <div className={classes.reviewStars}>
                <div className={classes.reviewStarsRating}>{reviewStats.data.totalStars}</div>
                <StyledRating color="default" size="small" name="read-only" value={reviewStats.data.totalStars} precision={0.5} readOnly />
              </div>
              <div className={classes.yourReviewCount}><Typography component="legend" style={{fontWeight: "bold"}}>{reviewStats.data.totalReviewCount} reviews</Typography></div>
            </div>
          )}

        </div>
      </Paper>

      <Paper elevation={1} className={classes.paper}>
        <div className={classes.sectionBody}>
          <div className={classes.filter}>
            <Grid container spacing={3}>
              <Grid item lg={6} sm={12} xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="source">Review Source</InputLabel>
                  <Select
                    labelId="source"
                    id="source-select"
                    label="Review Source"
                    value={filter}
                    onChange={(e) => {
                      setFilter(e.target.value);
                      setPage(1);
                    }}
                  >
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={"stu"}>SoTellUs</MenuItem>
                    <MenuItem value={"gmb"}>Google</MenuItem>
                    <MenuItem value={"fbp"}>Facebook</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>

      {displayReviews}
      {!isLoading && reviews.data.total_pages > 1 && (
        <Pagination size="large" count={reviews.data.total_pages} page={page} onChange={handlePageChange} />
      )}

    </React.Fragment>
  );
}

export default MyReviews;