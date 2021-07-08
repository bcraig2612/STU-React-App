import CopyToClipboardUI from "../../components/CopyToClipboardUI";
import ColorPickerSetting from "../../components/ColorPickerSetting";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useSnackbar} from "notistack";
import ContentSection from "../../components/ContentSection";
import Breadcrumb from "../../components/Breadcrumb";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  sectionBody: {
    padding: theme.spacing(2),
  },
  formInputSpacer: {
    marginBottom: theme.spacing(2)
  },
  formActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  sectionHeader: {
    padding: theme.spacing(2),
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
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
  }
}));

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Reviews", uri: "/reviews"},
  {title: "Widget", uri: "/reviews/widget"},
];

function Widget(props) {
  const classes = useStyles();
  const [iframeSRC, setIframeSRC] = useState('https://sotellus.com/iframe/SoTellUs/nocache/');
  const [iframeKey, setIframeKey] = useState(0);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function fakeSave() {
    setIframeSRC('https://sotellus.com/iframe/SoTellUs/nocache/');
    setIframeKey(key => key + 1);
    enqueueSnackbar('Saved!', {
      variant: 'success',
    });
  }

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <ContentSection title="Customize widget">
            <ColorPickerSetting title="Star Color" color="gold" />
            <ColorPickerSetting title="Widget Background Color" color="#eee" />
            <ColorPickerSetting title="Review Background Color" color="gold" />
            <ColorPickerSetting title="Featured Review Background Color" color="#eee" />
            <ColorPickerSetting title="Widget Font Color" color="gold" />
            <ColorPickerSetting title="Date Font Color" color="#eee" />
            <div className={classes.formActions}>
              <Button variant="contained" color="primary" onClick={fakeSave}>
                Save
              </Button>
            </div>
          </ContentSection>
        </Grid>
        <Grid item md={6} xs={12}>
          <ContentSection title="Preview widget">
            <iframe title="preview" key={iframeKey} frameBorder={0} src={iframeSRC} width="100%" height="487px" />
          </ContentSection>
        </Grid>
      </Grid>

      <ContentSection title="Embed review widget on website">
        <CopyToClipboardUI
          title="Widget Size: 254px wide by 422 px tall"
          value='&lt;script src="https://sotellus.com/js/sotellus_widget.js?client=demo-company&amp;amp;width=254&amp;amp;height=422" async&gt;&lt;/script&gt;'
        />
        <div style={{width: "100%", height: "20px"}} />
        <CopyToClipboardUI
          title="Page Size: 100% wide by 500 px tall"
          value='&lt;script src="https://sotellus.com/js/sotellus_widget.js?client=demo-company&amp;amp;width=254&amp;amp;height=422" async&gt;&lt;/script&gt;'
        />
      </ContentSection>

    </React.Fragment>

  );
}

export default Widget;