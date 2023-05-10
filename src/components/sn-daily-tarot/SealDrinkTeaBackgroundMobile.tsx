import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const SealDrinkTeaBackgroundMobile = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Box className={classes.imageWrapper}>
      <Box
        component="img"
        src={ImageAssets.SealDrinkTeaBackgroundMobile}
        className={classes.whaleImg}
        draggable="false"
      />
      <Box className={clsx("center-root", classes.textHeyImHere)}>
        <Typography className={classes.text}>{getLabel("lWeAlsoGot")}</Typography>
      </Box>
    </Box>
  );
};

export default memo(SealDrinkTeaBackgroundMobile);

const useStyles = makeStyles(() => ({
  imageWrapper: {
    position: "relative",
    width: "fit-content",
    marginTop: 16,
  },
  whaleImg: {
    width: 366,
    height: 317,
  },
  textHeyImHere: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 94,
  },
  text: {
    textAlign: "center",
    padding: "0 20px",
  },
}));
