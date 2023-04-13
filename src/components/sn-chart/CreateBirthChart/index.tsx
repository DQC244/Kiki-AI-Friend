import React, { memo } from "react";
import TitleChart from "../TitleChart";
import { useTranslation } from "react-i18next";
import { Box, Stack } from "@mui/material";
import { ImageAssets } from "assets";
import { makeStyles } from "@mui/styles";
import CreateForm, { CreateFormProps } from "./CreateForm";

const CreateBirthChart = ({ onCreateBirthChart }: CreateFormProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack alignItems="center" spacing={15.5} direction="row" width="100%">
      <Stack flex={1} spacing={3}>
        <TitleChart title={getLabel("lCreateYourOwnBirth")} textAlign="center" />
        <CreateForm onCreateBirthChart={onCreateBirthChart} />
      </Stack>
      <Box
        flex={1}
        className={classes.img}
        component="img"
        draggable="false"
        src={ImageAssets.BirthChartBackgroundImage}
      />
    </Stack>
  );
};

export default memo(CreateBirthChart);

const useStyles = makeStyles(() => ({
  img: {
    width: 664,
    height: 334,
  },
}));
