import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { ThemeProps } from "models/types";

const TitleDaily = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack alignItems="center">
      <Box
        className={classes.image}
        component="img"
        src={ImageAssets.TitleDailyTarotImage}
        draggable="false"
      />
      <Typography className={classes.title}>{getLabel("lOneCardTarotReading")}</Typography>
      <Typography className={classes.text}>{getLabel("lGetYourDailyMessage")}</Typography>
    </Stack>
  );
};

export default memo(TitleDaily);

const useStyles = makeStyles((theme: ThemeProps) => ({
  image: {
    width: 512,
    height: 161,

    [theme.breakpoints.down("sm")]: {
      width: 207,
      height: 65,
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "38px",
    margin: "30px 0",

    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      lineHeight: "32px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "16px 0",
      fontSize: 16,
      lineHeight: "24px",
    },
  },
  text: {
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
}));
