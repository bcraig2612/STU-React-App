import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ContentSection from "../../components/ContentSection";
import Breadcrumb from "../../components/Breadcrumb";
import PreviewTextMessage from "../../components/PreviewTextMessage";
import HelpIcon from '@material-ui/icons/Help';
import Chip from "@material-ui/core/Chip";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  sectionBody: {
    padding: theme.spacing(2),
  },
  formInputSpacer: {
    marginBottom: theme.spacing(2)
  },
  formActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing(2)
  },
  sectionHeader: {
    padding: theme.spacing(2),
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },
  paper: {
    marginBottom: theme.spacing(2),
  },
  spacer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  shortCodeList: {
    display: "flex",
    flexWrap: "wrap",
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  shortCodeLabel: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  shortCodeHelpIcon: {

  }
}));

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Reviews", uri: "/reviews"},
  {title: "Settings", uri: "/reviews/settings"},
  {title: "Default Text Message", uri: "/reviews/settings/default-text-message"},
];

function DefaultTextMessage(props) {
  const classes = useStyles();
  const [textMessage, setTextMessage] = useState('');
  const [formError, setFormError] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [previewTextMessage, setPreviewTextMessage] = useState('');

  const defaultTextMessage = "<firstname>, you have been invited to review <companyname> at <link>";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textMessage.length === 0) {
      setFormError(true);
      setFormErrorMessage('Message can not be empty.');
      return;
    }

    if (textMessage.length > 160) {
      setFormError(true);
      setFormErrorMessage('Message can not be over 160 characters.');
      return;
    }

    if (! textMessage.includes("<link>")) {
      setFormError(true);
      setFormErrorMessage('<link> is a required short tag.');
      return;
    }
    setFormError(false);
    setFormErrorMessage('');
  };

  const onTextMessageChange = (event) => {
    updatePreviewTextMessage(event.target.value);
  };

  const resetToDefaultTextMessage = () => {
    updatePreviewTextMessage(defaultTextMessage);
  };

  function updatePreviewTextMessage(message) {
    setTextMessage(message);

    const filteredMessage = filterMessage(message);
    setPreviewTextMessage(filteredMessage);
  }

  function filterMessage(message) {
    let updatedMessage = message;
    updatedMessage = updatedMessage.replaceAll("<firstname>", 'Matthew');
    updatedMessage = updatedMessage.replaceAll("<lastname>", 'Roberts');
    updatedMessage = updatedMessage.replaceAll("<type>", 'video');
    updatedMessage = updatedMessage.replaceAll("<companyname>", 'Demo Company');
    updatedMessage = updatedMessage.replaceAll("<link>", 'https://sotellus.com/i/a4x3b/');
    return updatedMessage;
  }

  function handleShortCodeClick(code) {
    let message = textMessage;
    message = message.concat(code);
    updatePreviewTextMessage(message);
  }

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />

        <Grid item xs={12}>
          <ContentSection title="Default Invitation Text Message" subTitle='The default text message that will be sent via Invitations.'>
            <PreviewTextMessage>
              {previewTextMessage}
            </PreviewTextMessage>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                id="text-message-custom"
                label="Customize the text message"
                multiline
                rows={2}
                variant="outlined"
                value={textMessage}
                helperText={previewTextMessage.length + " out of 160 characters"}
                style={{marginTop: "25px"}}
                error={previewTextMessage.length > 160}
                onChange={onTextMessageChange}
              />

              <div className={classes.shortCodeLabel}>Short Codes</div>

              <div className={classes.shortCodeList}>
                <Chip size="small" label="<link>" onClick={() => handleShortCodeClick('<link>')} />
                <Chip size="small" label="<firstname>" onClick={() => handleShortCodeClick('<firstname>')} />
                <Chip size="small" label="<lastname>" onClick={() => handleShortCodeClick('<lastname>')} />
                <Chip size="small" label="<companyname>" onClick={() => handleShortCodeClick('<companyname>')} />
                <Chip size="small" label="<type>" onClick={() => handleShortCodeClick('<type>')} />
              </div>

              <Typography variant="body2" color="textSecondary" component="p">
                Available Fields:
                <br />
                &lt;link&gt; - The Link to click (*Required)
                <br />
                &lt;firstname&gt; - Customer's First Name (*Recommended)
                <br />
                &lt;lastname&gt; - Customer's Last Name
                <br />
                &lt;companyname&gt; - Company Name
                <br />
                &lt;userfirstname&gt; - Your First Name
                <br />
                &lt;userlastname&gt; - Your Last Name
                <br />
                &lt;type&gt; - Type of Review
              </Typography>

              {formError && (
                <Alert style={{marginTop: "10px"}} severity="error">{formErrorMessage}</Alert>
              )}
              <div className={classes.formActions}>
                <Button variant="contained" onClick={resetToDefaultTextMessage}>
                  Reset to Default
                </Button>
                <Button type="submit" variant="contained" color="primary" disabled={previewTextMessage.length > 160 || previewTextMessage.length === 0}>
                  Save
                </Button>
              </div>
            </form>
          </ContentSection>
        </Grid>
    </React.Fragment>

  );
}

export default DefaultTextMessage;