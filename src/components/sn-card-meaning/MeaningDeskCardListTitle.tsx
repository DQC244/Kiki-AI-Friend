import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { ThemeProps } from "models/types";

const MeaningDeskCardListTitle = ({ title }: MeaningDeskCardListTitleProps) => {
  const classes = useStyles();

  return (
    <>
      <Box
        component="img"
        draggable="false"
        className={classes.logo}
        src={ImageAssets.CardMeaningLogo}
      />
      <Typography className={classes.title}>{title}</Typography>
    </>
  );
};

type MeaningDeskCardListTitleProps = { title: string };

export default MeaningDeskCardListTitle;

const useStyles = makeStyles((theme: ThemeProps) => ({
  logo: {
    width: 236,
    height: 236,
    marginTop: 30,

    [theme.breakpoints.down("sm")]: {
      width: 90,
      height: 90,
    },
  },
  title: {
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "68px",
    marginTop: 16,

    [theme.breakpoints.down("lg")]: {
      fontSize: 36,
      lineHeight: "44px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "24px",
    },
  },
}));
