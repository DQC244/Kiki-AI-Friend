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

const ViewTransitChart = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const transitChartImage = useSelector(AppSelector.getTransitChartImage);
  const transitChartData = useSelector(AppSelector.getTransitChartData);
  const chartData = useSelector(AppSelector.getBirthChart);

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
                  <Typography className={classes.zodiacText}>{chartData?.sun_sign_name}</Typography>
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
              <Typography className={classes.label} mb={6}>
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
    <Stack direction="row" spacing={0.5}>
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
