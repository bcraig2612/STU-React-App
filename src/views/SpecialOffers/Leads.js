import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ContentSection from "../../components/ContentSection";
import Breadcrumb from "../../components/Breadcrumb";
import SpecialOfferLeadsTable from "../../components/SpecialOfferLeadsTable";

const useStyles = makeStyles((theme) => ({
  formInputSpacer: {
    marginBottom: theme.spacing(2)
  },
}));

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Special Offers", uri: "/special-offers"},
  {title: "Leads", uri: "/special-offers/leads"},
];

function Leads(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />
      <ContentSection title="Leads" subTitle="This code embeds a popover on your website, offering customers your special offer.">
        <SpecialOfferLeadsTable />
      </ContentSection>

    </React.Fragment>

  );
}

export default Leads;