/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const KeyMeaning = ({ data }: KeyMeaningProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const keyArr = useMemo(() => {
    const stringFormat = data?.keywords;
    if (stringFormat) {
      return stringFormat.split("\n");
    }
    return [];
  }, [data?.keywords]);

  return (
    <Box className={classes.root}>
      <Grid container className={classes.grid} width="100%">
        <Grid item xs={12} sm={3} className={classes.item} mb={{ xs: 1.25, sm: 0 }}>
          <Typography width="100%" className={clsx(classes.title, classes.titleKeyMeaning)}>
            {getLabel("lKeyMeaning")}
          </Typography>
          {keyArr.map((item: any, index: number) => (
            <Typography
              className={classes.descKeyMeaning}
              display="list-item"
              ml={4.5}
              key={index}
              width="100%"
            >
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4} sm={3} className={classes.item}>
          <Typography className={classes.title}>{getLabel("lSign")}</Typography>
          {data.zodiac_sign && (
            <>
              <Box
                component="img"
                className={classes.img}
                draggable="false"
                src={`data:image/svg+xml;base64,${data?.zodiac_sign?.zodiac_sign_image}`}
              />
              <Typography className={classes.desc}>
                {data?.zodiac_sign?.zodiac_sign_name}
              </Typography>
            </>
          )}
        </Grid>
        <Grid item xs={4} sm={3} className={classes.item}>
          <Typography className={classes.title}>{getLabel("lPlanet")}</Typography>
          {data?.planet && (
            <>
              <Box
                component="img"
                className={classes.img}
                draggable="false"
                src={`data:image/svg+xml;base64,${data?.planet?.planet_image}`}
              />
              <Typography className={classes.desc}>{data?.planet?.planet_name}</Typography>
            </>
          )}
        </Grid>
        <Grid item xs={4} sm={3} className={classes.item}>
          <Typography className={classes.title}>{getLabel("lElement")}</Typography>
          {data?.element && (
            <>
              <Box
                component="img"
                className={classes.img}
                draggable="false"
                src={`data:image/svg+xml;base64,${data?.element?.element_image}`}
              />
              <Typography className={classes.desc}>{data?.element?.element_name}</Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

type KeyMeaningProps = {
  data?: any;
};

export default memo(KeyMeaning);

const useStyles = makeStyles((theme: ThemeProps) => ({
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

    [theme.breakpoints.down("sm")]: {
      width: 76,
      height: 50,
      margin: "8px 0",
    },
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",

    [theme.breakpoints.down("sm")]: {
      fontSize: 9,
      lineHeight: "20px",
    },
  },
  titleKeyMeaning: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "22px",
    },
  },
  descKeyMeaning: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "22px",
    },
  },
  desc: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
      lineHeight: "16px",
    },
  },
}));
