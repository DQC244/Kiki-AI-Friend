import React from "react";
import CreateForm, { CreateFormProps } from "./CreateForm";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import TitleChart from "./TitleChart";

const CreateTransitChart = ({ onCreateChart }: CreateFormProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack className={classes.root} spacing={1.5}>
      <TitleChart title={getLabel("lLookAheadInto")} />
      <CreateForm
        className={classes.form}
        onCreateChart={onCreateChart}
        isTransitChart={true}
        submitLabel={getLabel("lCalculateTransit")}
      />
    </Stack>
  );
};

export default CreateTransitChart;

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 48,
  },
  form: {
    width: 764,
  },
}));
