import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppConstant } from "const";
import { useTranslation } from "react-i18next";
import { ImageAssets } from "assets";
import { ThemeProps } from "models/types";

const IntroduceSection = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack spacing={{ xs: 1, sm: 4, lg: 13.9 }} className={classes.root} alignItems="center">
      <Box position="relative">
        <Typography className={classes.title}>{AppConstant.TITLE}</Typography>
        <Box
          className={classes.img}
          component="img"
          src={ImageAssets.TitleHome}
          draggable="false"
        />
      </Box>
      <Typography className={classes.desc}>{getLabel("lWelcomeToTheFantasyWorld")}</Typography>
    </Stack>
  );
};

export default memo(IntroduceSection);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    padding: "20px 0px 120px",

    [theme.breakpoints.down("lg")]: {
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marginTop: "32px !important",
    },
  },
  title: {
    fontWeight: 700,
    fontSize: 128,
    lineHeight: "98px",
    zIndex: 2,

    [theme.breakpoints.down("lg")]: {
      fontSize: 57,
      lineHeight: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      lineHeight: "30px",
    },
  },
  desc: {
    fontWeight: 600,
    fontSize: 32,
    lineHeight: "38px",
    textAlign: "center",
    zIndex: 1,

    [theme.breakpoints.down("lg")]: {
      fontSize: 28,
      lineHeight: "36px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "20px",
      maxWidth: 260,
    },
  },
  img: {
    width: 94,
    height: 126,
    position: "absolute",
    bottom: 5,
    left: 8,
    transform: "translateX(-100%)",

    [theme.breakpoints.down("lg")]: {
      width: 45,
      height: 60,
      bottom: 9,
      left: 4,
    },
    [theme.breakpoints.down("sm")]: {
      width: 15,
      height: 20,
      bottom: 7,
      left: 1.5,
    },
  },
}));
