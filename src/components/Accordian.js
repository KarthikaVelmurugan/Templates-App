import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%"
    },
    MuiAccordionroot: {
        "&.MuiAccordion-root:before": {
          backgroundColor: "white"
        }
      }
    }));
const Accordian = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
    <Accordion elevation={0} classes={{
        root: classes.MuiAccordionroot
     }} className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
      >
        Functionalities
      </AccordionSummary>
      <AccordionDetails>
          <Typography className="itemsList">
          <li>Group by Subscription Identifier</li>
          <li>
            Visibility of Billing and Shipping address in payment profile
            column.
          </li>

          <li>
            Recurring and Non-Recurring based charges are seperately showing in
            a individual tables.
          </li>
          <li>Invoice description based grouping is used.</li>
          </Typography>
      </AccordionDetails>
    </Accordion>
    </div>
  );
};

export default Accordian;
