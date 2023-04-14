import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import WhaleImageChat from "./WhaleImageChat";
import ConversationWithKiki from "./ConversationWithKiki";

const ViewBirthChart = () => {
  const classes = useStyles();

  return (
    <Stack spacing={9.625}>
      <Stack direction="row" spacing={5.25} position="relative" zIndex={0}>
        <Box className={classes.background} />
        <Stack>
          <Stack className={classes.formInfo} spacing={2.5}>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography className={classes.boldText}>Lan Anh</Typography>
                <Typography className={classes.infoUSer}>Hoan Kiem, Hanoi, Vietnam</Typography>
                <Typography className={classes.infoUSer}>Sept. 15, 1999, 10:40 p.m</Typography>
              </Box>
              <Stack alignItems="center">
                <Stack direction="row" alignItems="center">
                  <Box
                    component="img"
                    draggable="false"
                    src={ImageAssets.DotZodiacDemo}
                    className={classes.zodiacImage}
                  />
                  <Typography className={classes.boldText}>Sun in Virgo</Typography>
                  <Box
                    component="img"
                    draggable="false"
                    src={ImageAssets.ZodiacDemo}
                    className={classes.zodiacImage}
                  />
                </Stack>
                <Typography className={classes.location}>{`22° 21' Virgo`}</Typography>
              </Stack>
            </Stack>
            <Typography className={classes.location}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
              condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
              condimentum ac, vestibulum eu nisl. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </Typography>
          </Stack>
          <WhaleImageChat />
        </Stack>
        <Box
          component="img"
          src={ImageAssets.ViewBirthChartDemo}
          className={classes.chartImg}
          draggable="false"
        />
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
