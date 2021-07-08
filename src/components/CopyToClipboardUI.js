import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {useSnackbar} from "notistack";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(2),
  },
  copyToClipboard: {
    padding: theme.spacing(2),
    borderRadius: "4px",
    border: "2px solid rgb(173, 182, 190)",
    backgroundColor: theme.palette.background.paper,
    wordWrap: "break-word",
    whiteSpace: "pre-line",
  },
  copyToClipboardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2)
  },
  title: {
    fontWeight: "normal",
    fontSize: "16px"
  }
}));

function CopyToClipboardUI(props) {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState(props.value);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleCopied = () => {
    setCopied(true);
    enqueueSnackbar('Copied to clipboard!');
  };

  return (
    <div className={classes.copyToClipboardWrapper}>
      <div className={classes.copyToClipboardTop}>
        <Typography variant="subtitle2" gutterBottom>
          {props.title}
        </Typography>
        <CopyToClipboard
          text={value}
          onCopy={handleCopied}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<FileCopyIcon />}
          >Copy</Button>
        </CopyToClipboard>

      </div>
      <div className={classes.copyToClipboard}>
        {props.value}
      </div>
    </div>
  );
}

export default CopyToClipboardUI;
