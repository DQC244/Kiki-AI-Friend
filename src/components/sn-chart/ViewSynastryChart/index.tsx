import React from "react";
import { Box, Stack } from "@mui/material";
import { ImageAssets } from "assets";
import { makeStyles } from "@mui/styles";
import InfoPanel from "./InfoPanel";
import WhaleChat from "./WhaleChat";

const ViewSynastryChart = () => {
  const classes = useStyles();

  return (
    <Stack alignItems="center">
      <Stack direction="row" alignItems="center" spacing={4.25}>
        <InfoPanel
          name={MOCK.name}
          localTime={MOCK.localTime}
          universalTime={MOCK.universalTime}
          place={MOCK.place}
          zodiac={MOCK.zodiac}
          zodiacSecond={MOCK.zodiacSecond}
        />
        <Box
          className={classes.img}
          component="img"
          src={ImageAssets.ViewBirthChartDemo}
          draggable="false"
        />
        <InfoPanel
          name={MOCK.name}
          localTime={MOCK.localTime}
          universalTime={MOCK.universalTime}
          place={MOCK.place}
          zodiac={MOCK.zodiac}
          zodiacSecond={MOCK.zodiacSecond}
        />
      </Stack>
      <Box
        className={classes.imgZodiac}
        component="img"
        src={ImageAssets.ViewSynastryChart}
        draggable="false"
      />
      <WhaleChat mt={3.5} />
    </Stack>
  );
};

const MOCK = {
  name: "Lan Anh",
  localTime: "15 Sep 1999 - 10:40 PM",
  universalTime: "15 Sep 1999 - 10:40 PM",
  place: "Hanoi, Vietnam",
  zodiac: "Virgo",
  zodiacSecond: "Scorpio",
};

export default ViewSynastryChart;

const useStyles = makeStyles(() => ({
  img: {
    width: 503,
    height: 503,
    objectFit: "cover",
  },
  imgZodiac: {
    width: 387,
    height: 422,
    objectFit: "cover",
  },
}));
