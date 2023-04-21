import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

const useStyles = makeStyles(() => ({
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
  },
  text: {
    marginTop: 32,
    textIndent: 30,
  },
}));
