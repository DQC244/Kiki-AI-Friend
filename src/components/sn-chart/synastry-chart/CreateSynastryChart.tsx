/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useRef, useState } from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ObjectMultiLanguageProps } from "models";
import { makeStyles } from "@mui/styles";
import CommonCreateFromSynastry from "./CommonCreateFromSynastry";
import TitleChart from "../TitleChart";
import SealBackGroundButton from "../../common/SealBackGroundButton";
import dayjs from "dayjs";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { MovePlantAnimation } from "assets/animations";

const CreateSynastryChart = ({ onViewSynastryChart }: CreateSynastryChartProps) => {
  const classes = useStyles();

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const { t: getLabel } = useTranslation();
  const [data, setData] = useState<ObjectMultiLanguageProps>({});

  const [isMyErrorName, setIsMyErrorName] = useState(false);
  const [isMyErrorCity, setIsMyErrorCity] = useState(false);
  const [isMyErrorDate, setIsMyErrorDate] = useState(false);
  const [isMyErrorTime, setIsMyErrorTime] = useState(false);

  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorCity, setIsErrorCity] = useState(false);
  const [isErrorDate, setIsErrorDate] = useState(false);
  const [isErrorTime, setIsErrorTime] = useState(false);

  const handleChangeMyValue = (
    myName: string,
    myCity: string,
    myDate: string,
    myTime: string,
    myTimeFormat: string,
  ) => {
    setIsMyErrorName(false);
    setIsMyErrorCity(false);
    setIsMyErrorDate(false);
    setIsMyErrorTime(false);

    setData({ ...data, myName, myCity, myDate, myTime, myTimeFormat });
  };

  const handleChangeValue = (
    name: string,
    city: string,
    date: string,
    time: string,
    timeFormat: string,
  ) => {
    setIsErrorName(false);
    setIsErrorCity(false);
    setIsErrorDate(false);
    setIsErrorTime(false);
    setData({ ...data, name, city, date, time, timeFormat });
  };

  const handleViewSynastryChart = () => {
    // TODO:update when implement api
    if (!dayjs(data?.date).isValid()) setIsErrorDate(true);
    if (!dayjs(data?.time).isValid()) setIsErrorTime(true);
    if (!data?.name) setIsErrorName(true);
    if (!data?.city) setIsErrorCity(true);
    if (!data?.myDate || !dayjs(data?.myDate).isValid()) setIsMyErrorDate(true);
    if (!data?.myTime || !dayjs(data?.myTime).isValid()) setIsMyErrorTime(true);
    if (!data?.myName) setIsMyErrorName(true);
    if (!data?.myCity) setIsMyErrorCity(true);
    if (
      !dayjs(data?.date).isValid() ||
      !dayjs(data?.time).isValid() ||
      !data?.timeFormat ||
      !data?.name ||
      !data?.city ||
      !dayjs(data?.myDate).isValid() ||
      !dayjs(data?.myTime).isValid() ||
      !data?.myTimeFormat ||
      !data?.myName ||
      !data?.myCity
    ) {
      return;
    }

    onViewSynastryChart(data);
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
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.2);
    }
  }, []);

  return (
    <Stack alignItems="center" spacing={8}>
      <TitleChart className={classes.title} title={getLabel("lFindOutWho")} />
      <Stack direction="row" spacing={4} justifyContent="center">
        <CommonCreateFromSynastry
          zIndex={1}
          className={classes.form}
          onChangeValue={handleChangeMyValue}
          error={{
            isErrorName: isMyErrorName,
            isErrorCity: isMyErrorCity,
            isErrorDate: isMyErrorDate,
            isErrorTime: isMyErrorTime,
          }}
        />
        <CommonCreateFromSynastry
          zIndex={1}
          onChangeValue={handleChangeValue}
          title={getLabel("lAndAboutYourPersonOfInterest")}
          nameLabel={getLabel("lName")}
          dateLabel={getLabel("lDateOfBirth")}
          placeLabel={getLabel("lPlaceOfBirth")}
          error={{ isErrorName, isErrorCity, isErrorDate, isErrorTime }}
        />
        <Lottie
          animationData={MovePlantAnimation}
          onMouseOver={handleOverPlant}
          onMouseLeave={handleBlurPlant}
          lottieRef={lottieRef}
          style={{
            width: 1368,
            height: "auto",
            position: "absolute",
            top: 220,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
          autoplay={false}
        />
      </Stack>
      <Stack>
        <SealBackGroundButton onClickAction={handleViewSynastryChart} />
      </Stack>
    </Stack>
  );
};

type CreateSynastryChartProps = {
  onViewSynastryChart: (data: any) => void;
};

export default memo(CreateSynastryChart);

const useStyles = makeStyles(() => ({
  form: {
    background: "linear-gradient(293.7deg, #FFFFFF -3.9%, rgba(255, 255, 255, 0) 111.17%)",
  },
  title: {
    background: "linear-gradient(83.8deg, #59518C -0.96%, #8861E4 -0.95%, #756CBF 98.49%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
}));
