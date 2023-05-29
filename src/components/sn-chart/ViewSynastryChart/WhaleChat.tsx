import React, { memo, useMemo } from "react";
import { Box, BoxProps, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { isIOS } from "react-device-detect";
import { LinkConstant } from "const";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const WhaleChat = (props: BoxProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const link = useMemo(
    () => (isIOS ? LinkConstant.APP_STORE : LinkConstant.APP_GOOGLE_PLAY),
    [isIOS],
  );

  return (
    <Box className={classes.imageWrapper} {...props}>
      <Box
        component="img"
        src={ImageAssets.WhaleChatSynastryChart}
        className={classes.whaleImg}
        draggable="false"
      />
      <Box className={clsx("center-root", classes.textHeyImHere)}>
        <Typography
          className={classes.link}
          component={Link}
          href={link}
          target="_blank"
          underline="hover"
        >
          {getLabel("lLetSeeYourHarmony")}
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(WhaleChat);

const useStyles = makeStyles((theme: ThemeProps) => ({
  imageWrapper: {
    position: "relative",
    margin: "24px 0px 0px 26px",
    width: "fit-content",
  },
  whaleImg: {
    width: 346,
    height: 321,

    [theme.breakpoints.down("sm")]: {
      width: 275,
      height: "auto",
    },
  },
  textHeyImHere: {
    position: "absolute",
    top: 0,
    left: 20,
    right: 20,
    height: 96,

    [theme.breakpoints.down("sm")]: {
      height: 71,
    },
  },
  link: {
    color: theme.palette.common.black,
    fontWeight: 400,
    fontSize: 16,
    textAlign: "center",
    lineHeight: "24px",

    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
}));
