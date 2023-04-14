import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import ConversationWithKiki from "./ConversationWithKiki";
import WhaleImageChat from "./WhaleImageChat";

const ViewTransitChart = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack spacing={9.625}>
      <Stack direction="row" spacing={5.25} position="relative" zIndex={0}>
        <Box className={classes.background} />
        <Stack spacing={6.825}>
          <Stack direction="row" spacing={4}>
            <Stack spacing={1.25}>
              <Typography className={classes.label}>{getLabel("lBirth")}</Typography>
              <Stack direction="row" spacing={1.25}>
                <Stack direction="row" alignItems="center">
                  <Box
                    className={classes.imageZodiac}
                    draggable="false"
                    component="img"
                    src={ImageAssets.DotZodiacDemo}
                  />
                  <Typography className={classes.zodiacText}>Virgo</Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Box
                    className={classes.imageMoon}
                    draggable="false"
                    component="img"
                    src={ImageAssets.MoonTransitImage}
                  />
                  <Typography className={classes.zodiacText}>Scorpio</Typography>
                </Stack>
              </Stack>
              <Box>
                <RowInfo label={getLabel("lLocalTime")} content="12 Jan 2023 - 10:30 AM" />
                <RowInfo label={getLabel("lUniversalTime")} content="12 Jan 2023 - 10:30 AM" />
                <RowInfo label={getLabel("lHouseSystem")} content="Placidus System" />
                <RowInfo label={getLabel("lCityCountry")} content="Hanoi, Vietnam" />
              </Box>
            </Stack>
            <Stack>
              <Typography className={classes.label} mb={6}>
                {getLabel("lTransit")}
              </Typography>
              <RowInfo label={getLabel("lLocalTime")} content="12 Jan 2023 - 10:30 AM" />
              <RowInfo label={getLabel("lUniversalTime")} content="12 Jan 2023 - 10:30 AM" />
              <RowInfo label={getLabel("lCityCountry")} content="Hanoi, Vietnam" />
            </Stack>
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
      <ConversationWithKiki
        labelClassName={classes.labelConversation}
        imageProps={{
          imageSrc: ImageAssets.ChatTransitChartImage,
          className: classes.imageWhealClassName,
        }}
      />
    </Stack>
  );
};

export default ViewTransitChart;

const RowInfo = ({ label, content }: RowInfoProps) => {
  return (
    <Stack direction="row">
      <Typography>{label}</Typography>
      <Typography>{content}</Typography>
    </Stack>
  );
};

type RowInfoProps = {
  label: string;
  content: string;
};

const useStyles = makeStyles(() => ({
  chartImg: {
    width: 540,
    height: 547,
    objectFit: "cover",
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
  imageZodiac: {
    width: 32,
    height: 32,
  },
  imageMoon: {
    width: 24,
    height: 24,
  },
  label: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
  },
  zodiacText: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 16,
  },
  imageWhealClassName: {
    width: 426,
    height: 667,
  },
  labelConversation: {
    height: 86,
    left: 50,
    right: 50,
  },
}));
