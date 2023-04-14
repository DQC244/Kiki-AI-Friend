/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { memo, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ObjectMultiLanguageProps } from "models";
import CommonCreateFromSynastry from "./CommonCreateFromSynastry";
import TitleChart from "../TitleChart";
import CreateSynastryButton from "./CreateSynastryButton";
import dayjs from "dayjs";

const CreateSynastryChart = ({ onViewSynastryChart }: CreateSynastryChartProps) => {
  const { t: getLabel } = useTranslation();
  const [data, setData] = useState<ObjectMultiLanguageProps>({});
  const [isError, setIsError] = useState(false);

  const handleChangeMyValue = (
    myName: string,
    myCity: string,
    myDate: string,
    myTime: string,
    myTimeFormat: string,
  ) => {
    setData({ ...data, myName, myCity, myDate, myTime, myTimeFormat });
  };

  const handleChangeValue = (
    name: string,
    city: string,
    date: string,
    time: string,
    timeFormat: string,
  ) => {
    setData({ ...data, name, city, date, time, timeFormat });
  };

  const handleViewSynastryChart = () => {
    // TODO:update when implement api
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
      setIsError(true);
      return;
    }

    onViewSynastryChart(data);
  };

  return (
    <Stack alignItems="center" spacing={8}>
      <TitleChart title={getLabel("lFindOutWho")} />
      <Stack direction="row" spacing={4} justifyContent="center">
        <CommonCreateFromSynastry onChangeValue={handleChangeMyValue} />
        <CommonCreateFromSynastry
          onChangeValue={handleChangeValue}
          title={getLabel("lAndAboutYourPersonOfInterest")}
          nameLabel={getLabel("lName")}
          dateLabel={getLabel("lDateOfBirth")}
          placeLabel={getLabel("lPlaceOfBirth")}
        />
      </Stack>
      <Stack>
        <CreateSynastryButton onClickButtonView={handleViewSynastryChart} />
        {isError && (
          <Typography textAlign="center" color="error.main">
            {getLabel("lPleaseEnterAllRequiredFields")}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

type CreateSynastryChartProps = {
  onViewSynastryChart: (data: any) => void;
};

export default memo(CreateSynastryChart);
