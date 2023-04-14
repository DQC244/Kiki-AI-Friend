import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";

const InfoPanel = ({
  name,
  zodiac,
  zodiacSecond,
  localTime,
  universalTime,
  place,
}: InfoPanelProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack alignItems="center" spacing={1.25} p={1.25}>
      <Typography className={classes.title}>{name}</Typography>
      <Stack direction="row" spacing={1.5}>
        <Stack direction="row" alignItems="center">
          <Box
            className={classes.imgDot}
            draggable="false"
            component="img"
            src={ImageAssets.DotZodiacDemo}
          />
          <Typography>{zodiac}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box
            className={classes.imgMoon}
            draggable="false"
            component="img"
            src={ImageAssets.MoonTransitImage}
          />
          <Typography>{zodiacSecond}</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" spacing={0.5}>
          <Typography className={classes.label}>{getLabel("lLocalTime")}</Typography>
          <Typography>{localTime}</Typography>
        </Stack>
        <Stack direction="row" spacing={0.5}>
          <Typography className={classes.label}>{getLabel("lUniversalTime")}</Typography>
          <Typography>{universalTime}</Typography>
        </Stack>
        <Stack direction="row" spacing={0.5}>
          <Typography className={classes.label}>{getLabel("lCityCountry")}</Typography>
          <Typography>{place}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

type InfoPanelProps = {
  name?: string;
  zodiac?: string;
  zodiacSecond?: string;
  localTime?: string;
  universalTime?: string;
  place?: string;
};

export default memo(InfoPanel);

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
  },
  label: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },
  imgDot: {
    width: 32,
    height: 32,
  },
  imgMoon: {
    width: 24,
    height: 24,
  },
}));
