import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import WhaleImageChat from "./WhaleImageChat";
import ConversationWithKiki from "./ConversationWithKiki";
import { useSelector } from "react-redux";
import { AppSelector } from "redux-store";
import dayjs from "dayjs";

const ViewBirthChart = () => {
  const classes = useStyles();

  const birthChart = useSelector(AppSelector.getBirthChart);
  const birthChartImage = useSelector(AppSelector.getBirthChartImage);

  return (
    <Stack spacing={9.625}>
      <Stack direction="row" position="relative" zIndex={0}>
        <Box className={classes.background} />
        <Stack direction="row" spacing={19.5}>
          <Stack>
            <Stack className={classes.formInfo} spacing={2.5}>
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
                      src={ImageAssets.ZodiacDemo}
                      className={classes.zodiacImage}
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

const useStyles = makeStyles(() => ({
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
  },
  chartImg: {
    width: 540,
    height: 547,
    objectFit: "cover",
  },
  zodiacImage: {
    width: 60,
    height: 60,
    objectFit: "cover",
  },
  boldText: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
  },
  infoUSer: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "24px",
  },
  location: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "24px",
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
