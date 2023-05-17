import React, { memo } from "react";
import { Box, BoxProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import clsx from "clsx";
import { ThemeProps } from "models/types";

const TarotCard = ({
  isShowFront,
  cardFront,
  cardBackground,
  className,
  ...otherProps
}: TarotCardProps) => {
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
          <Box component="img" className={classes.img} src={cardFront} draggable="false" />
        </Box>
      </Box>
    </Box>
  );
};

type TarotCardProps = BoxProps & {
  isShowFront?: boolean;
  cardBackground?: string;
  cardFront?: string;
};

export default memo(TarotCard);

const useStyles = makeStyles((theme: ThemeProps) => ({
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

    [theme.breakpoints.down("lg")]: {
      width: 180,
      height: 253,
    },
    [theme.breakpoints.down("sm")]: {
      width: 120,
      height: 170,
    },
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
