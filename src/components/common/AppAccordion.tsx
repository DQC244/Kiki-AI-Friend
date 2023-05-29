import React from "react";
import { ThemeProps } from "models/types";
import {
  Accordion,
  AccordionDetails,
  AccordionDetailsProps,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CaretIcon } from "components/icons";
import clsx from "clsx";

const AppAccordion = ({
  classes,
  accordionSummaryProps = {},
  accordionDetailsProps = {},
  labelProps = {},
  children,
  ...otherProps
}: AppAccordionProps) => {
  const defaultClasses = useStyles();

  const { classes: accordionSummaryClasses, ...otherAccordionSummaryProps } = accordionSummaryProps;
  const { classes: accordionDetailsClasses, ...otherAccordionDetailsProps } = accordionDetailsProps;
  const { label, ...otherLabelProps } = labelProps;

  return (
    <Accordion
      classes={{
        ...classes,
        root: clsx(defaultClasses.accordionRoot, classes?.root),
        expanded: clsx(defaultClasses.accordionExpanded, classes?.expanded),
      }}
      {...otherProps}
    >
      <AccordionSummary
        classes={{
          ...accordionSummaryClasses,
          root: clsx(defaultClasses.accordionSummaryRoot, accordionSummaryClasses?.root),
          expanded: clsx(
            defaultClasses.accordionSummaryExpanded,
            accordionSummaryClasses?.expanded,
          ),
          content: clsx(defaultClasses.accordionSummaryContent, accordionSummaryClasses?.content),
          expandIconWrapper: clsx(
            defaultClasses.accordionSummaryExpandIconWrapper,
            accordionSummaryClasses?.expandIconWrapper,
          ),
        }}
        expandIcon={<CaretIcon sx={{ transform: "rotate(180deg)" }} />}
        {...otherAccordionSummaryProps}
      >
        <Typography variant="h6" {...otherLabelProps}>
          {label}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        classes={{
          ...accordionDetailsClasses,
          root: clsx(defaultClasses.accordionDetailsRoot, accordionDetailsClasses?.root),
        }}
        {...otherAccordionDetailsProps}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

type AppAccordionProps = AccordionProps & {
  accordionSummaryProps?: AccordionSummaryProps;
  accordionDetailsProps?: AccordionDetailsProps;
  labelProps: TypographyProps & {
    label?: string;
  };
};

export default AppAccordion;

const useStyles = makeStyles((theme: ThemeProps) => ({
  accordionRoot: {
    "&$accordionRoot": {
      backgroundColor: "transparent",
      boxShadow: "unset",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      margin: 0,
    },
  },
  accordionExpanded: {
    "&$accordionExpanded": {
      background: "rgba(255, 255, 255, 0.16)",
      minHeight: "unset",
    },
  },
  accordionSummaryRoot: {
    minHeight: "unset",
    padding: 0,
  },
  accordionSummaryExpanded: {
    "&$accordionSummaryExpanded": {
      minHeight: "unset",
    },
  },
  accordionSummaryContent: {
    "&$accordionSummaryContent": {
      margin: 0,
    },
  },
  accordionSummaryExpandIconWrapper: {
    color: "inherit",
    fontSize: 24,

    "&$accordionSummaryExpanded": {
      transform: "rotate(90deg)",
    },
  },
  accordionDetailsRoot: {
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    padding: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: 0,
  },
}));
