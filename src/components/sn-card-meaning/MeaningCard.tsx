import React, { memo } from "react";
import { Box, Stack, StackProps, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { ThemeProps } from "models/types";
import { AppGradientButton } from "components/common";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const MeaningCard = ({
  cardBackground,
  className,
  description,
  onReadMeaning,
  ...otherProps
}: TarotCardProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack
      className={clsx(classes.root, className)}
      alignItems="center"
      spacing={4}
      {...otherProps}
    >
      <Box className={clsx(classes.inner)}>
        <Box className={classes.imgBackCard}>
          <Box
            className={classes.img}
            component="img"
            draggable="false"
            src={cardBackground || ImageAssets.DemoDailyCard}
          />
        </Box>
        <Box className={classes.frontCard}>
          <Typography className={classes.text}>{description}</Typography>
        </Box>
      </Box>
      <AppGradientButton
        onClick={onReadMeaning}
        className={classes.button}
        label={getLabel("lReadTheMeaning")}
      />
    </Stack>
  );
};

type TarotCardProps = StackProps & {
  cardBackground?: string;
  description: string;
  onReadMeaning: () => void;
};

export default memo(MeaningCard);

const useStyles = makeStyles((theme: ThemeProps) => ({
  inner: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    cursor: "pointer",
    position: "relative",
    transition: "transform 1.5s",
    transformStyle: "preserve-3d",
  },
  root: {
    width: 230,
    height: 475,
    cursor: "pointer",

    "&:hover $inner": {
      transform: "rotateY(180deg)",
    },

    [theme.breakpoints.down("lg")]: {
      width: 280,
      height: 428,
    },
    [theme.breakpoints.down("sm")]: {
      width: 115,
      height: 266,
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
    width: "calc(100% - 16px)",
    height: "100%",
    position: "absolute",
    background: theme.palette.gradient.main,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    "-webkit-backface-visibility": "hidden",
    "backface-visibility": "hidden",
    transform: "rotateY(180deg)",
    padding: 4,
    overflow: "hidden",

    "&:before": {
      content: "''",
      position: "absolute",
      inset: 1,
      background: theme.palette.common.white,
      borderRadius: 19.5,
      zIndex: -1,
    },
    [theme.breakpoints.down("lg")]: {
      width: "calc(100% - 80px)",
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: 10,
      width: "calc(100% - 8px)",
      "&:before": {
        borderRadius: 9.5,
      },
    },
  },
  rotate: {
    transform: "rotateY(180deg)",
  },
  text: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "22px",
    textAlign: "center",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 16,
    "-webkit-box-orient": "vertical",

    [theme.breakpoints.down("lg")]: {
      "-webkit-line-clamp": 15,
      lineHeight: "23px",
    },
    [theme.breakpoints.down("sm")]: {
      color: "#59518C",
      fontSize: 11,
      lineHeight: "19px",
      "-webkit-line-clamp": 10,
    },
  },
  button: {
    minHeight: 50,
    borderRadius: 15,

    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "30px",
      minHeight: 34,
      padding: "0 8px",
      minWidth: 115,
      borderRadius: 10,
    },
  },
}));
