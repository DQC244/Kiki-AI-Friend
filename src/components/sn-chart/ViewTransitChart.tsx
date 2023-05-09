import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import ConversationWithKiki from "./ConversationWithKiki";
import WhaleImageChat from "./WhaleImageChat";
import { useSelector } from "react-redux";
import { AppSelector } from "redux-store";
import dayjs from "dayjs";
import { AppConstant } from "const";
import { ThemeProps } from "models/types";

const ViewTransitChart = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const transitChartImage = useSelector(AppSelector.getTransitChartImage);
  const transitChartData = useSelector(AppSelector.getTransitChartData);
  const chartData = useSelector(AppSelector.getBirthChart);

  return (
    <Stack spacing={{ xs: 4, sm: 9.625 }}>
      <Stack position="relative">
        <Box className={classes.background} />
        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-start" }}
          spacing={5.25}
          position="relative"
          zIndex={0}
        >
          <Stack spacing={6.825}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
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
                    <Typography className={classes.zodiacText}>
                      {chartData?.sun_sign_name}
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <Box
                      className={classes.imageMoon}
                      draggable="false"
                      component="img"
                      src={ImageAssets.MoonTransitImage}
                    />
                    {/* <Typography className={classes.zodiacText}>Scorpio</Typography> */}
                  </Stack>
                </Stack>
                <Box>
                  <RowInfo
                    label={getLabel("lLocalTime")}
                    content={dayjs(chartData.date_of_birth).format(
                      AppConstant.FULL_DATE_CHART_FORMAT,
                    )}
                  />
                  <RowInfo
                    label={getLabel("lUniversalTime")}
                    content={dayjs(chartData.date_of_birth)
                      .subtract(7, "hour")
                      .format(AppConstant.FULL_DATE_CHART_FORMAT)}
                  />
                  <RowInfo label={getLabel("lHouseSystem")} content="Placidus System" />
                  <RowInfo
                    label={getLabel("lCityCountry")}
                    content={
                      transitChartData?.city_of_birth + ", " + transitChartData?.nation_of_birth
                    }
                  />
                </Box>
              </Stack>
              <Stack>
                <Typography className={classes.label} mb={{ xs: 1.25, sm: 6 }}>
                  {getLabel("lTransit")}
                </Typography>
                <RowInfo
                  label={getLabel("lLocalTime")}
                  content={dayjs(transitChartData.current_date).format(
                    AppConstant.FULL_DATE_CHART_FORMAT,
                  )}
                />
                <RowInfo
                  label={getLabel("lUniversalTime")}
                  content={dayjs(transitChartData.current_date)
                    .subtract(7, "hour")
                    .format(AppConstant.FULL_DATE_CHART_FORMAT)}
                />
                <RowInfo
                  label={getLabel("lCityCountry")}
                  content={transitChartData?.current_city + ", " + transitChartData?.current_nation}
                />
              </Stack>
            </Stack>
            <WhaleImageChat />
          </Stack>

          {transitChartImage && (
            <Box
              component="img"
              src={transitChartImage}
              className={classes.chartImg}
              draggable="false"
            />
          )}
        </Stack>
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
  const classes = useStyles();

  return (
    <Stack direction="row" spacing={0.5}>
      <Typography className={classes.text}>{label}</Typography>
      <Typography className={classes.text}>{content}</Typography>
    </Stack>
  );
};

type RowInfoProps = {
  label: string;
  content: string;
};

const useStyles = makeStyles((theme: ThemeProps) => ({
  chartImg: {
    width: 540,
    height: 547,
    objectFit: "cover",

    [theme.breakpoints.down("lg")]: {
      width: 394,
      height: 403,
    },
    [theme.breakpoints.down("sm")]: {
      width: 247,
      height: 247,
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
  imageZodiac: {
    width: 32,
    height: 32,

    [theme.breakpoints.down("sm")]: {
      width: 27,
      height: 27,
    },
  },
  imageMoon: {
    width: 24,
    height: 24,
  },
  label: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "24px",
    },
  },
  zodiacText: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 16,

    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
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
  text: {
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
