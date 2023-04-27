/* eslint-disable camelcase */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { CreateBirthChart, ViewBirthChart } from "components/sn-chart";
import { makeStyles } from "@mui/styles";
import { HEADER_HEIGHT_IN_PX } from "layouts/MainLayout/components/MLHeader";
import { FOOTER_HEIGHT_IN_PX } from "layouts/MainLayout/components/Footer";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useDispatch } from "react-redux";
import { AppActions } from "redux-store";

dayjs.extend(utc);
dayjs.extend(timezone);

const BirthChart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const { i18n } = useTranslation();

  const [isViewBirthChart, setIsViewBirthChart] = useState(false);

  const handleCreateBirthChart = (data: any) => {
    try {
      // TODO: update when implement api
      const placeArr = data?.city?.split(", ");

      const dateTimeString = `${data.newDate} ${data.newTime} ${data.timeFormat.charAt(0)}`;
      const parsedDate = dayjs.tz(
        dateTimeString,
        "DD/MM/YYYY h:mm A",
        Intl.DateTimeFormat().resolvedOptions().timeZone,
      );

      const newData = {
        full_name: data.name,
        language: i18n.language,
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
      };
      dispatch(AppActions.getBirthChartImage(dataImage));

      // setIsViewBirthChart(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location.state) {
      setIsViewBirthChart(true);
    }
  }, []);

  return (
    <Container className={clsx("center-root", classes.root)}>
      {isViewBirthChart ? (
        <ViewBirthChart />
      ) : (
        <>
          <CreateBirthChart onCreateChart={handleCreateBirthChart} />
        </>
      )}
    </Container>
  );
};

export default BirthChart;

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,
  },
}));
