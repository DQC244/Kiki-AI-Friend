import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";

const OverView = ({ title, description }: OverViewProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.text}>{description}</Typography>
    </Box>
  );
};

type OverViewProps = {
  title: string;
  description: string;
};

export default memo(OverView);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    border: "1px solid #9AA2FF",
    borderRadius: 20,
    padding: 16,
    width: "100%",
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",

    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "24px",
    },
  },
  text: {
    marginTop: 32,
    textIndent: 30,

    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "24px",
      marginTop: 0,
      textIndent: 40,
    },
  },
}));
