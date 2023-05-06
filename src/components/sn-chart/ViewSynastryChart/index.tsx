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

const ViewSynastryChart = () => {
  const classes = useStyles();

  const synastryChartData = useSelector(AppSelector.getSynastryChartData);
  const synastryChartImage = useSelector(AppSelector.getSynastryChartImage);

  return (
    <Stack alignItems="center">
      <Stack direction="row" alignItems="center" spacing={4.25}>
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
        {synastryChartImage && (
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
