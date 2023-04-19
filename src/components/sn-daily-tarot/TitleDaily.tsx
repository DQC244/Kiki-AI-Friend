import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";

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
      <Typography>{getLabel("lGetYourDailyMessage")}</Typography>
    </Stack>
  );
};

export default memo(TitleDaily);

const useStyles = makeStyles(() => ({
  image: {
    width: 512,
    height: 161,
  },
  title: {
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "38px",
    margin: "30px 0",
  },
}));
