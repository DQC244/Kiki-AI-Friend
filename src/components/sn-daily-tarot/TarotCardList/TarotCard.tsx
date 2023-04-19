import React, { memo } from "react";
import { Box, BoxProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import clsx from "clsx";

const TarotCard = ({ isShowFront, cardBackground, className, ...otherProps }: TarotCardProps) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)} {...otherProps}>
      <Box className={clsx(classes.inner, isShowFront && classes.rotate)}>
        <Box className={classes.imgBackCard}>
          <Box
            className={classes.img}
            component="img"
            draggable="false"
            src={cardBackground || ImageAssets.TarotCardDailyBackground}
          />
        </Box>
        <Box className={classes.frontCard}>
          <Box component="img" className={classes.img} src={ImageAssets.DemoDailyCard} />
        </Box>
      </Box>
    </Box>
  );
};

type TarotCardProps = BoxProps & {
  isShowFront?: boolean;
  cardBackground?: string;
};

export default memo(TarotCard);

const useStyles = makeStyles(() => ({
  inner: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
    position: "relative",
    transition: "transform 1.5s",
    transformStyle: "preserve-3d",
  },
  root: {
    width: 277,
    height: 389,
    cursor: "pointer",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  imgBackCard: {
    width: "100%",
    height: "100%",
    position: "absolute",
    "-webkit-backface-visibility": "hidden",
    "backface-visibility": "hidden",
  },
  frontCard: {
    width: "100%",
    height: "100%",
    position: "absolute",
    "-webkit-backface-visibility": "hidden",
    "backface-visibility": "hidden",
    transform: "rotateY(180deg)",
  },
  rotate: {
    transform: "rotateY(180deg)",
  },
}));
