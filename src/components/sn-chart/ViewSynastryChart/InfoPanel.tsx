import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";

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
          <Typography className={classes.zodiac}>{zodiac}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box
            className={classes.imgMoon}
            draggable="false"
            component="img"
            src={ImageAssets.MoonTransitImage}
          />
          <Typography className={classes.zodiac}>{zodiacSecond}</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" spacing={0.5}>
          <Typography className={classes.label}>{getLabel("lLocalTime")}</Typography>
          <Typography className={classes.desc}>{localTime}</Typography>
        </Stack>
        <Stack direction="row" spacing={0.5}>
          <Typography className={classes.label}>{getLabel("lUniversalTime")}</Typography>
          <Typography className={classes.desc}>{universalTime}</Typography>
        </Stack>
        <Stack direction="row" spacing={0.5}>
          <Typography className={classes.label}>{getLabel("lCityCountry")}</Typography>
          <Typography className={classes.desc}>{place}</Typography>
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

const useStyles = makeStyles((theme: ThemeProps) => ({
  title: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "24px",
    },
  },
  zodiac: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
  label: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    whiteSpace: "nowrap",

    [theme.breakpoints.down("lg")]: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
  imgDot: {
    width: 32,
    height: 32,

    [theme.breakpoints.down("sm")]: {
      width: 22,
      height: 22,
    },
  },
  imgMoon: {
    width: 24,
    height: 24,

    [theme.breakpoints.down("sm")]: {
      width: 17,
      height: 17,
    },
  },
  desc: {
    whiteSpace: "nowrap",
    [theme.breakpoints.down("lg")]: {
      fontSize: 14,
      lineHeight: "22px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
}));
