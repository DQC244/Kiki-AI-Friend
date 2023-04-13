import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const WhaleImageChat = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Box className={classes.imageWrapper}>
      <Box
        component="img"
        src={ImageAssets.WhaleChatImage}
        className={classes.whaleImg}
        draggable="false"
      />
      <Box className={clsx("center-root", classes.textHeyImHere)}>
        <Typography>{getLabel("lHeyIAmHere")}</Typography>
      </Box>
    </Box>
  );
};

export default memo(WhaleImageChat);

const useStyles = makeStyles(() => ({
  imageWrapper: {
    position: "relative",
    margin: "24px 0px 0px 26px",
    width: "fit-content",
  },
  whaleImg: {
    width: 346,
    height: 406,
  },
  textHeyImHere: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 94,
    fontWeight: 400,
    fontSize: 14,
    textAlign: "center",
    lineHeight: "22px",
  },
}));
