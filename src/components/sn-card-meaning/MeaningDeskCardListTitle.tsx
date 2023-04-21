import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";

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

const useStyles = makeStyles(() => ({
  logo: {
    width: 236,
    height: 236,
    marginTop: 30,
  },
  title: {
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "68px",
    marginTop: 16,
  },
}));
