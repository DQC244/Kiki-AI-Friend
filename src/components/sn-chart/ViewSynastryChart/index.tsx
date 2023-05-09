import React from "react";
import { Box, Stack } from "@mui/material";
import { ImageAssets } from "assets";
import { makeStyles } from "@mui/styles";
import InfoPanel from "./InfoPanel";
import WhaleChat from "./WhaleChat";
import { useSelector } from "react-redux";
import { AppSelector } from "redux-store";
import dayjs from "dayjs";
import { AppConstant } from "const";
import { ThemeProps } from "models/types";
import { useMobile } from "hooks";

const ViewSynastryChart = () => {
  const classes = useStyles();
  const isMobile = useMobile();

  const synastryChartData = useSelector(AppSelector.getSynastryChartData);
  const synastryChartImage = useSelector(AppSelector.getSynastryChartImage);

  return (
    <Stack alignItems="center">
      {synastryChartImage && isMobile && (
        <Box className={classes.img} component="img" src={synastryChartImage} draggable="false" />
      )}
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={{ sm: 3, lg: 4.25 }}
      >
        <InfoPanel
          name={synastryChartData.myInfo?.full_name}
          localTime={dayjs(synastryChartData.myInfo?.date_of_birth).format(
            AppConstant.FULL_DATE_CHART_FORMAT,
          )}
          universalTime={dayjs(synastryChartData.myInfo?.date_of_birth)
            .subtract(7, "hour")
            .format(AppConstant.FULL_DATE_CHART_FORMAT)}
          place={
            synastryChartData.myInfo?.city_of_birth +
            ", " +
            synastryChartData.myInfo?.nation_of_birth
          }
          zodiac={synastryChartData.myInfo?.sun_sign_name}
        />
        {synastryChartImage && !isMobile && (
          <Box className={classes.img} component="img" src={synastryChartImage} draggable="false" />
        )}
        <InfoPanel
          name={synastryChartData.partnerInfo?.full_name}
          localTime={dayjs(synastryChartData.partnerInfo?.date_of_birth).format(
            AppConstant.FULL_DATE_CHART_FORMAT,
          )}
          universalTime={dayjs(synastryChartData.partnerInfo?.date_of_birth)
            .subtract(7, "hour")
            .format(AppConstant.FULL_DATE_CHART_FORMAT)}
          place={
            synastryChartData.partnerInfo?.city_of_birth +
            ", " +
            synastryChartData.partnerInfo?.nation_of_birth
          }
          zodiac={synastryChartData.partnerInfo?.sun_sign_name}
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

export default ViewSynastryChart;

const useStyles = makeStyles((theme: ThemeProps) => ({
  img: {
    width: 503,
    height: 503,
    objectFit: "cover",

    [theme.breakpoints.down("lg")]: {
      width: 310,
      height: 310,
    },
    [theme.breakpoints.down("sm")]: {
      width: 247,
      height: 247,
      margin: "24px 0 12px",
    },
  },
  imgZodiac: {
    width: 387,
    height: 422,
    objectFit: "cover",

    [theme.breakpoints.down("lg")]: {
      marginTop: 42,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
    },
  },
}));
