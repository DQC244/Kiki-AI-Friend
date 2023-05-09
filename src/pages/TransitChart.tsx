/* eslint-disable camelcase */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  HEADER_HEIGHT_IN_PX,
  HEADER_HEIGHT_MOBILE_IN_PX,
  HEADER_HEIGHT_TABLET_IN_PX,
} from "layouts/MainLayout/components/MLHeader";
import {
  FOOTER_HEIGHT_IN_PX,
  FOOTER_HEIGHT_MOBILE_IN_PX,
  FOOTER_HEIGHT_TABLET_IN_PX,
} from "layouts/MainLayout/components/Footer";
import { CreateTransitChart, ViewTransitChart } from "components/sn-chart";
import clsx from "clsx";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { MovePlantAnimation } from "assets/animations";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { AppActions, AppSelector } from "redux-store";
import { useTranslation } from "react-i18next";
import { LangConstant } from "const";
import { ThemeProps } from "models/types";

const TransitChart = () => {
  const classes = useStyles();
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const dispatch = useDispatch();

  const { i18n } = useTranslation();

  const transitChartImage = useSelector(AppSelector.getTransitChartImage);
  const transitChartData = useSelector(AppSelector.getTransitChartData);
  const chartData = useSelector(AppSelector.getBirthChart);

  const [isViewTransitChart, setIsViewTransitChart] = useState(false);

  const handleCreateChart = (data: any) => {
    try {
      // TODO: update when implement api
      const placeArr = data?.city?.split(", ");

      const currentPlaceArr = data?.currentCity?.split(", ");

      const dateTimeString = `${data.newDate} ${data.newTime} ${data.timeFormat.charAt(0)}`;
      const parsedDate = dayjs.tz(
        dateTimeString,
        "DD/MM/YYYY h:mm A",
        Intl.DateTimeFormat().resolvedOptions().timeZone,
      );

      const newData = {
        full_name: data.name,
        language:
          i18n.language === LangConstant.DEFAULT_LANG_CODE ? LangConstant.DEFAULT_LANG_CODE : "vi",
        city_of_birth: placeArr[0],
        nation_of_birth: placeArr[1],
        date_of_birth: parsedDate.toJSON(),
      };

      dispatch(AppActions.getBirthChart(newData));

      const dataImage = {
        full_name: data.name,
        city_of_birth: placeArr[0],
        nation_of_birth: placeArr[1],
        date_of_birth: parsedDate.toJSON(),
        current_date: dayjs.tz(Date.now()).toJSON(),
        current_city: currentPlaceArr[0],
        current_nation: currentPlaceArr[1],
      };

      dispatch(AppActions.getTransitChartImage(dataImage));
    } catch (error) {
      console.log(error);
    }
  };

  const handleOverPlant = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };
  const handleBlurPlant = () => {
    if (lottieRef.current) {
      lottieRef.current.pause();
    }
  };

  useEffect(() => {
    if (
      transitChartImage &&
      Object.keys(transitChartData).length &&
      Object.keys(chartData).length
    ) {
      setIsViewTransitChart(true);
    }
  }, [transitChartImage, transitChartData, chartData]);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.2);
    }
    return () => {
      dispatch(AppActions.appReset());
    };
  }, []);

  return (
    <Box className={clsx(classes.root, !isViewTransitChart && classes.background)}>
      <Container className={classes.container}>
        {isViewTransitChart ? (
          <>
            <ViewTransitChart />
          </>
        ) : (
          <>
            <CreateTransitChart onCreateChart={handleCreateChart} />
            <Lottie
              animationData={MovePlantAnimation}
              onMouseOver={handleOverPlant}
              onMouseLeave={handleBlurPlant}
              lottieRef={lottieRef}
              className={classes.animationContainer}
              autoplay={false}
            />
          </>
        )}
      </Container>
    </Box>
  );
};

export default TransitChart;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,

    [theme.breakpoints.down("lg")]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT_TABLET_IN_PX + FOOTER_HEIGHT_TABLET_IN_PX}px)`,
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT_MOBILE_IN_PX + FOOTER_HEIGHT_MOBILE_IN_PX}px)`,
    },
  },
  background: {
    backgroundPosition: "right -590px center",
    backgroundSize: "1274px auto",
  },
  container: {
    paddingTop: 80,
    paddingBottom: 80,
    alignItems: "center",
    display: "flex",
    minHeight: "100%",

    [theme.breakpoints.down("sm")]: {
      paddingTop: 32,
      paddingBottom: 32,
    },
  },
  animationContainer: {
    width: 1270,
    height: 450,
    position: "absolute",
    right: -600,

    [theme.breakpoints.down("lg")]: {
      width: 1200,
      height: 420,
    },
    [theme.breakpoints.down("sm")]: {
      width: 637,
      height: 226,
      top: 400,
      right: "unset",
      left: 57,
    },
  },
}));
