import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React, {useRef, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GetAppIcon from '@material-ui/icons/GetApp';
import {useSnackbar} from "notistack";
import QRCode from "qrcode.react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(2),
  },
  copyToClipboard: {
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

function SaveQRCode(props) {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState(props.value);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const downloadRef = useRef(null);

  function download() {
    console.log(downloadRef);
    const canvas= document.querySelector('.QRCode > canvas');

    downloadRef.current.href = canvas.toDataURL();
    downloadRef.current.download = 'sotellus-qr-code.png';
    enqueueSnackbar("QR code downloaded!");
  }

  return (
    <div className={classes.copyToClipboardWrapper}>
      <div className={classes.copyToClipboardTop}>
        <Typography variant="subtitle2" gutterBottom>
          Invitation QR Code
        </Typography>
        <Button
          href="#download"
          variant="contained"
          color="primary"
          startIcon={<GetAppIcon />}
          onClick={download}
          innerRef={downloadRef}
        >Download</Button>

      </div>
      <div className={classes.copyToClipboard}>
        <div className="QRCode">
          <QRCode level={'H'} value="https://sotellus.com/r/demo-company" />
        </div>
      </div>
    </div>
  );
}

export default SaveQRCode;