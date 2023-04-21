/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { ImageAssets } from "assets";

const KeyMeaning = ({ data }: KeyMeaningProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Box className={classes.root}>
      <Grid container className={classes.grid} width="100%">
        <Grid item className={classes.item}>
          <Typography width="100%" className={classes.title}>
            {getLabel("lKeyMeaning")}
          </Typography>
          <Typography width="100%">{data?.desc}</Typography>
          <Typography width="100%">{getLabel("lKeyMeaning")}</Typography>
          <Typography width="100%">{getLabel("lKeyMeaning")}</Typography>
        </Grid>
        <Grid item className={classes.item}>
          <Typography className={classes.title}>{getLabel("lSign")}</Typography>
          <Box
            component="img"
            className={classes.img}
            draggable="false"
            src={ImageAssets.SignImage}
          />
          <Typography>{getLabel("lAquarius")}</Typography>
        </Grid>
        <Grid item className={classes.item}>
          <Typography className={classes.title}>{getLabel("lPlanet")}</Typography>
          <Box
            component="img"
            className={classes.img}
            draggable="false"
            src={ImageAssets.PlanetImage}
          />
          <Typography>{getLabel("lUranus")}</Typography>
        </Grid>
        <Grid item className={classes.item}>
          <Typography className={classes.title}>{getLabel("lElement")}</Typography>
          <Box
            component="img"
            className={classes.img}
            draggable="false"
            src={ImageAssets.ElementImage}
          />
          <Typography>{getLabel("lAir")}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

type KeyMeaningProps = {
  data?: any;
};

export default memo(KeyMeaning);

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid #9AA2FF",
    borderRadius: 20,
    padding: 16,
    width: "100%",
  },
  grid: {
    display: "flex",
    justifyContent: "space-between",
  },
  item: {
    width: 168,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width: 116,
    height: 76,
    margin: "14px 0",
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
  },
}));
