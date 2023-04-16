import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";

const IntroduceSection = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack spacing={4} className={classes.root} alignItems="center">
      <Typography className={classes.title}>{TITLE}</Typography>
      <Typography className={classes.desc}>{getLabel("lWelcomeToTheFantasyWorld")}</Typography>
    </Stack>
  );
};

const TITLE = "Kiki AI Friend";

export default memo(IntroduceSection);

const useStyles = makeStyles(() => ({
  root: {
    padding: "136px 0px 0px",
  },
  title: {
    fontWeight: 700,
    fontSize: 90,
    lineHeight: "98px",
  },
  desc: {
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "38px",
    textAlign: "center",
  },
}));
