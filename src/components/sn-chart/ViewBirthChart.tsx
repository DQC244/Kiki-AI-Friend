import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import WhaleImageChat from "./WhaleImageChat";
import ConversationWithKiki from "./ConversationWithKiki";
import { useSelector } from "react-redux";
import { AppSelector } from "redux-store";
import dayjs from "dayjs";
import { ThemeProps } from "models/types";
import { getZodiacSign } from "components/helper";

const ViewBirthChart = () => {
  const classes = useStyles();

  const birthChart = useSelector(AppSelector.getBirthChart);
  const birthChartImage = useSelector(AppSelector.getBirthChartImage);

  return (
    <Stack spacing={{ xs: 4, sm: 9.625 }} width="100%">
      <Stack direction="row" position="relative" zIndex={0}>
        <Box className={classes.background} />
        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-start" }}
          justifyContent={{ xs: "flex-start", sm: "space-between", lg: "flex-start" }}
          spacing={{ xs: 2, sm: 0, lg: 19.5 }}
          width={"100%"}
        >
          <Stack alignItems={{ xs: "center", sm: "flex-start" }}>
            <Stack className={classes.formInfo} spacing={{ xs: 2, lg: 2.5 }}>
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Typography className={classes.boldText}>{birthChart?.full_name}</Typography>
                  <Typography
                    className={classes.infoUSer}
                  >{`${birthChart?.city_of_birth}, ${birthChart?.nation_of_birth}`}</Typography>
                  <Typography className={classes.infoUSer}>
                    {dayjs(birthChart?.date_of_birth).format("DD/MM/YYYY, HH:mm a")}
                  </Typography>
                </Box>
                <Stack alignItems="center">
                  <Stack direction="row" alignItems="center">
                    <Box
                      component="img"
                      draggable="false"
                      src={ImageAssets.DotZodiacDemo}
                      className={classes.zodiacImage}
                    />
                    <Typography className={classes.boldText}>
                      {birthChart?.sun_sign_name}
                    </Typography>
                    <Box
                      component="img"
                      draggable="false"
                      src={getZodiacSign(birthChart?.date_of_birth)}
                      className={classes.zodiacImage2}
                      sx={{ objectFit: "contain" }}
                    />
                  </Stack>
                  <Typography className={classes.location}>{birthChart?.sun_position}</Typography>
                </Stack>
              </Stack>
              <Typography className={classes.location}>{birthChart?.sun_content}</Typography>
            </Stack>
            <WhaleImageChat />
          </Stack>
          {birthChartImage ? (
            <Box
              component="img"
              src={birthChartImage}
              className={classes.chartImg}
              draggable="false"
            />
          ) : (
            <Box className={classes.chartImg} />
          )}
        </Stack>
      </Stack>
      <ConversationWithKiki />
    </Stack>
  );
};

export default ViewBirthChart;

const useStyles = makeStyles((theme: ThemeProps) => ({
  formInfo: {
    position: "relative",
    width: 565,
    padding: 16,
    borderRadius: 20,
    background: "linear-gradient(25deg, #CAACF2 0%, #9AA2FF 44%, #BBD0FF 100%)",
    zIndex: 0,

    "&:before": {
      content: '""',
      position: "absolute",
      inset: 1,
      width: "calc(100% - 2px)",
      height: "calc(100% - 2px)",
      background: "white",
      borderRadius: 19,
      zIndex: -1,
    },

    [theme.breakpoints.down("lg")]: {
      width: 448,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  chartImg: {
    width: 540,
    height: 547,
    objectFit: "cover",

    [theme.breakpoints.down("lg")]: {
      width: 398,
      height: 403,
    },
    [theme.breakpoints.down("sm")]: {
      width: 208,
      height: 212,
    },
  },
  zodiacImage: {
    width: 40,
    height: 40,
    objectFit: "cover",

    [theme.breakpoints.down("lg")]: {
      width: 30,
      height: 30,
    },
  },
  zodiacImage2: {
    width: 30,
    height: 30,
    objectFit: "cover",

    [theme.breakpoints.down("lg")]: {
      width: 20,
      height: 20,
    },
  },
  boldText: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",

    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
      lineHeight: "24px",
    },
  },
  infoUSer: {
    fontSize: 16,
    lineHeight: "24px",

    [theme.breakpoints.down("lg")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
  location: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "24px",

    [theme.breakpoints.down("lg")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
  background: {
    position: "absolute",
    top: 66,
    left: -40,
    height: 1537,
    width: 1898,
    background: `no-repeat top left / 1898px auto url(${ImageAssets.BackgroundBirthChart})`,
    zIndex: -1,
    animation: "zoom-in-zoom-out 7s linear infinite",
    animationPlayState: "paused",

    "&:hover": {
      animationPlayState: "running",
    },
  },
}));
