import React from "react";
import CreateForm, { CreateFormProps } from "./CreateForm";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import TitleChart from "./TitleChart";
import { ThemeProps } from "models/types";

const CreateTransitChart = ({ onCreateChart }: CreateFormProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack className={classes.root} spacing={1.5}>
      <TitleChart className={classes.title} title={getLabel("lLookAheadInto")} textAlign="center" />
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

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    marginLeft: 48,
    zIndex: 1,

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  title: {
    width: 764,

    [theme.breakpoints.down("lg")]: {
      width: 678,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  form: {
    width: 764,

    [theme.breakpoints.down("lg")]: {
      width: 678,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
