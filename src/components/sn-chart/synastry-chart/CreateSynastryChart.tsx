/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import CommonCreateFromSynastry from "./CommonCreateFromSynastry";
import TitleChart from "../TitleChart";
import CreateSynastryButton from "./CreateSynastryButton";

const CreateSynastryChart = ({ onViewSynastryChart }: CreateSynastryChartProps) => {
  const { t: getLabel } = useTranslation();

  const handleChangeValue = (city: string, date: string, time: string) => {
    // TODO:update when implement api
    console.log(city, date, time);
  };

  const handleViewSynastryChart = () => {
    // TODO:update when implement api
    onViewSynastryChart("a");
    return;
  };

  return (
    <Stack alignItems="center" spacing={8}>
      <TitleChart title={getLabel("lFindOutWho")} />
      <Stack direction="row" spacing={4} justifyContent="center">
        <CommonCreateFromSynastry onChangeValue={handleChangeValue} />
        <CommonCreateFromSynastry
          onChangeValue={handleChangeValue}
          title={getLabel("lAndAboutYourPersonOfInterest")}
          nameLabel={getLabel("lName")}
          dateLabel={getLabel("lDateOfBirth")}
          placeLabel={getLabel("lPlaceOfBirth")}
        />
      </Stack>
      <CreateSynastryButton onClickButtonView={handleViewSynastryChart} />
    </Stack>
  );
};

type CreateSynastryChartProps = {
  onViewSynastryChart: (data: any) => void;
};

export default memo(CreateSynastryChart);
