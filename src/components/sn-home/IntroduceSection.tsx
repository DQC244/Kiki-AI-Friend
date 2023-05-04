import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppConstant } from "const";
import { useTranslation } from "react-i18next";
import { ImageAssets } from "assets";

const IntroduceSection = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack spacing={13.9} className={classes.root} alignItems="center">
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

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px 0px 120px",
  },
  title: {
    fontWeight: 700,
    fontSize: 128,
    lineHeight: "98px",
    zIndex: 2,
  },
  desc: {
    fontWeight: 600,
    fontSize: 32,
    lineHeight: "38px",
    textAlign: "center",
    zIndex: 1,
  },
  img: {
    width: 94,
    height: 126,
    position: "absolute",
    bottom: 5,
    left: 8,
    transform: "translateX(-100%)",
  },
}));
