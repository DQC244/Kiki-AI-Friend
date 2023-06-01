/* eslint-disable camelcase */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import {
  HEADER_HEIGHT_IN_PX,
  HEADER_HEIGHT_MOBILE_IN_PX,
  HEADER_HEIGHT_TABLET_IN_PX,
} from "layouts/MainLayout/components/MLHeader";
import {
  FOOTER_HEIGHT_IN_PX,
  FOOTER_HEIGHT_MOBILE_IN_PX,
  FOOTER_HEIGHT_TABLET_IN_PX,
  FOOTER_HEIGHT_TABLET_MD_IN_PX,
} from "layouts/MainLayout/components/Footer";
import { CreateSynastryChart, ViewSynastryChart } from "components/sn-chart";
import clsx from "clsx";
import dayjs from "dayjs";
import { AppActions, AppSelector } from "redux-store";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AppConstant, LangConstant } from "const";
import { ThemeProps } from "models/types";

const SynastryChart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const synastryChartData = useSelector(AppSelector.getSynastryChartData);
  const synastryChartImage = useSelector(AppSelector.getSynastryChartImage);

  const [isViewTransitChart, setIsViewTransitChart] = useState(false);

  const handleCreateChart = (data: any) => {
    const placeArr = data?.myCity?.split(", ");
    const placeArrB = data?.city?.split(", ");

    const dateTimeString = `${data.myDate} ${data.myTime} ${data.myTimeFormat}`;
    const parsedDate = dayjs
      .tz(dateTimeString, "DD/MM/YYYY hh:mm A", Intl.DateTimeFormat().resolvedOptions().timeZone)
      .format(AppConstant.DATE_FORMAT_PAYLOAD);

    const dateTimeStringB = `${data.date} ${data.time} ${data.timeFormat}`;
    const parsedDateB = dayjs
      .tz(dateTimeStringB, "DD/MM/YYYY hh:mm A", Intl.DateTimeFormat().resolvedOptions().timeZone)
      .format(AppConstant.DATE_FORMAT_PAYLOAD);

    const language =
      i18n.language === LangConstant.DEFAULT_LANG_CODE ? LangConstant.DEFAULT_LANG_CODE : "vi";

    const myInfo = {
      full_name: data.myName,
      language,
      city_of_birth: placeArr[0],
      nation_of_birth: placeArr[1],
      date_of_birth: parsedDate,
    };

    const partnerInfo = {
      full_name: data.name,
      language,
      city_of_birth: placeArrB[0],
      nation_of_birth: placeArrB[1],
      date_of_birth: parsedDateB,
    };

    dispatch(AppActions.getSynastryChart({ myInfo, partnerInfo }));

    const imageData = {
      partner_a_city_of_birth: placeArr[0],
      partner_a_nation_of_birth: placeArr[1],
      partner_a_date_of_birth: parsedDate,
      partner_b_city_of_birth: placeArrB[0],
      partner_b_nation_of_birth: placeArrB[1],
      partner_b_date_of_birth: parsedDateB,
    };

    dispatch(AppActions.getSynastryChartImage(imageData));
  };

  useEffect(() => {
    if (
      synastryChartImage &&
      Object.keys(synastryChartData.myInfo) &&
      Object.keys(synastryChartData.partnerInfo)
    ) {
      setIsViewTransitChart(true);
    }
  }, [synastryChartData, synastryChartImage]);

  useEffect(() => {
    return () => {
      dispatch(AppActions.appReset());
    };
  }, []);

  return (
    <Box className={clsx(classes.root)}>
      <Box className={clsx(isViewTransitChart ? classes.viewBackground : classes.background)} />
      <Container>
        {isViewTransitChart ? (
          <ViewSynastryChart />
        ) : (
          <CreateSynastryChart onViewSynastryChart={handleCreateChart} />
        )}
      </Container>
    </Box>
  );
};

export default SynastryChart;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "relative",
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,

    [theme.breakpoints.down("lg")]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT_TABLET_IN_PX + FOOTER_HEIGHT_TABLET_IN_PX}px)`,
    },
    [theme.breakpoints.down("md")]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT_TABLET_IN_PX + FOOTER_HEIGHT_TABLET_MD_IN_PX}px)`,
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT_MOBILE_IN_PX + FOOTER_HEIGHT_MOBILE_IN_PX}px)`,
    },
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundPosition: "bottom center",
    backgroundSize: "120% auto",
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${ImageAssets.HomeBackground})`,
    },
  },
  viewBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: `no-repeat center center / 1590px auto url(${ImageAssets.ViewSynastryChartBackground})`,
    animation: "zoom-in-zoom-out 7s linear infinite",
    animationPlayState: "paused",

    "&:hover": {
      animationPlayState: "running",
    },

    [theme.breakpoints.down("sm")]: {
      background: `no-repeat top center / 100% auto url(${ImageAssets.ViewSynastryChartBackground})`,
    },
  },
}));
