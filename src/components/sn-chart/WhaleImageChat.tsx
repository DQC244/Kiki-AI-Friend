import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { ThemeProps } from "models/types";
import { useMobile } from "hooks";

const WhaleImageChat = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const isMobile = useMobile();

  return (
    <Box className={classes.imageWrapper}>
      <Box
        component="img"
        src={ImageAssets.WhaleChatImage}
        className={classes.whaleImg}
        draggable="false"
      />
      <Box className={clsx("center-root", classes.textHeyImHere)}>
        <Typography className={classes.text}>
          {getLabel("lHeyIAmHere", { count: isMobile ? 0 : 1 })}
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(WhaleImageChat);

const useStyles = makeStyles((theme: ThemeProps) => ({
  imageWrapper: {
    position: "relative",
    margin: "24px 0px 0px 26px",
    width: "fit-content",
  },
  whaleImg: {
    width: 346,
    height: 406,

    [theme.breakpoints.down("lg")]: {
      width: 286,
      height: 354,
    },
  },
  textHeyImHere: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 94,
    fontWeight: 400,

    [theme.breakpoints.down("lg")]: {
      height: 82,
    },
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: "22px",

    [theme.breakpoints.down("lg")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
}));
