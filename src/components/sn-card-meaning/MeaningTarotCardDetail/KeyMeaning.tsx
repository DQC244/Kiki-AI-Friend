/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";

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
        <Grid item className={classes.item}>
          <Typography width="100%" className={classes.title}>
            {getLabel("lKeyMeaning")}
          </Typography>
          {keyArr.map((item: any, index: number) => (
            <Typography display="list-item" ml={4.5} key={index} width="100%">
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid item className={classes.item}>
          <Typography className={classes.title}>{getLabel("lSign")}</Typography>
          {data.zodiac_sign && (
            <>
              <Box
                component="img"
                className={classes.img}
                draggable="false"
                src={`data:image/svg+xml;base64,${data?.zodiac_sign?.zodiac_sign_image}`}
              />
              <Typography>{data?.zodiac_sign?.zodiac_sign_name}</Typography>
            </>
          )}
        </Grid>
        <Grid item className={classes.item}>
          <Typography className={classes.title}>{getLabel("lPlanet")}</Typography>
          {data?.planet && (
            <>
              <Box
                component="img"
                className={classes.img}
                draggable="false"
                src={`data:image/svg+xml;base64,${data?.planet?.planet_image}`}
              />
              <Typography>{data?.planet?.planet_name}</Typography>
            </>
          )}
        </Grid>
        <Grid item className={classes.item}>
          <Typography className={classes.title}>{getLabel("lElement")}</Typography>
          {data?.element && (
            <>
              <Box
                component="img"
                className={classes.img}
                draggable="false"
                src={`data:image/svg+xml;base64,${data?.element?.element_image}`}
              />
              <Typography>{data?.element?.element_name}</Typography>
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
