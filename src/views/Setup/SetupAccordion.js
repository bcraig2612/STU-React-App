import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import CopyToClipboardUI from "../../components/CopyToClipboardUI";
import ContentSection from "../../components/ContentSection";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  formInput: {
    marginBottom: theme.spacing(2)
  }
}));

export default function SetupAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Company Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form style={{width: "100%"}}>
            <TextField className={classes.formInput} size="small" id="company-name" label="Company Name" variant="outlined" fullWidth />
            <TextField className={classes.formInput} size="small" id="primary-phone" label="Primary Phone" variant="outlined" fullWidth />
            <TextField className={classes.formInput} size="small" id="company-email" label="Company Email" variant="outlined" fullWidth />
            <TextField className={classes.formInput} size="small" id="company-website" label="Company Website" variant="outlined" fullWidth />
            <TextField className={classes.formInput} size="small" id="street-address-1" label="Street Address 1" variant="outlined" fullWidth />
            <TextField className={classes.formInput} size="small" id="street-address-2" label="Street Address 2" variant="outlined" fullWidth />
            <TextField className={classes.formInput} size="small" id="city" label="City" variant="outlined" fullWidth />
            <TextField className={classes.formInput} size="small" id="state" label="State" variant="outlined" fullWidth />
            <TextField className={classes.formInput} size="small" id="zipcode" label="Zipcode" variant="outlined" fullWidth />
            <TextField className={classes.formInput} size="small" id="country" label="Country" variant="outlined" fullWidth />
            <Button variant="contained" color="primary">Save</Button>
          </form>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Upload Logo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>3rd Party Integrations</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Put SoTellUs on your website</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <CopyToClipboardUI
              title="Widget Size: 254px wide by 422 px tall"
              value='&lt;script src="https://sotellus.com/js/sotellus_widget.js?client=demo-company&amp;amp;width=254&amp;amp;height=422" async&gt;&lt;/script&gt;'
            />
            <div style={{width: "100%", height: "20px"}} />
            <CopyToClipboardUI
              title="Page Size: 100% wide by 500 px tall"d
              value='&lt;script src="https://sotellus.com/js/sotellus_widget.js?client=demo-company&amp;amp;width=254&amp;amp;height=422" async&gt;&lt;/script&gt;'
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>Download SoTellUs App</Typography>
        </AccordionSummary>
        <AccordionDetails>


        </AccordionDetails>
      </Accordion>
    </div>
  );
}