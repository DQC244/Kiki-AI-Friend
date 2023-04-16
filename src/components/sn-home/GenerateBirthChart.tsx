/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { memo, useCallback, useState } from "react";
import { AutocompleteClasses, Stack, StackProps, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppAutocomplete, AppDateInput, AppGradientButton, AppTimeInput } from "components/common";
import { ApiConstant, AppConstant, EnvConstant, PathConstant } from "const";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";
import { AppService } from "services";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { ThemeProps } from "models/types";

const GenerateBirthChart = (props: StackProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [isErrorCity, setIsErrorCity] = useState(false);
  const [isErrorDate, setIsErrorDate] = useState(false);
  const [isErrorTime, setIsErrorTime] = useState(false);

  const handleGetCities = useCallback(
    debounce(async (value: string) => {
      try {
        if (!value) return;
        let newCities = [];
        const response = await AppService.getCityList(value);
        if (response.status === ApiConstant.STT_OK) {
          const responseData: any = response.data;
          const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
          newCities = responseData?.map((item: any) => {
            return {
              label: item?.name + ", " + regionNames.of(item?.country),
            };
          });
        }
        setCities(newCities);
      } catch (error) {
        EnvConstant.IS_DEV && console.log(error);
      }
    }, AppConstant.DEBOUNCE_TIME_IN_MILLISECOND),
    [],
  );

  const handleCreateBirthChart = () => {
    if (dayjs(date).isValid() || dayjs(time).isValid() || city) {
      // TODO: Call api here
      navigate(PathConstant.BIRTH_CHART);
    } else {
      if (false === Boolean(city)) setIsErrorCity(true);
      if (!dayjs(date).isValid()) setIsErrorDate(true);
      if (!dayjs(time).isValid()) setIsErrorTime(true);
    }
  };

  return (
    <Stack spacing={5} alignItems="center" {...props}>
      <Stack direction="row" className={classes.inputWrapper}>
        <Typography className={classes.label}>{getLabel("lIWasBornIn")}</Typography>
        <AppAutocomplete
          classes={
            {
              root: classes.autoCompleteRoot,
              input: clsx(classes.autoCompleteInput, isErrorCity && classes.error),
            } as AutocompleteClasses
          }
          options={cities}
          placeholder={getLabel("lCity")}
          onChangeValueInput={(_, value) => handleGetCities(value)}
          onChange={(_, value) => {
            setCity(value?.label);
          }}
        />
        <Typography className={classes.label}>{getLabel("lOn")}</Typography>
        <AppDateInput
          className={classes.dateInput}
          InputProps={{
            classes: {
              input: classes.dateInput,
              colorSecondary: clsx(isErrorDate && classes.error),
            },
          }}
          onChange={(e) => setDate(e as string)}
        />
        <Typography className={classes.label}>{getLabel("lAt")}</Typography>
        <AppTimeInput
          className={classes.timeInput}
          format={AppConstant.FULL_TIME_FORMAT}
          InputProps={{
            classes: {
              input: classes.timeInput,
              colorSecondary: clsx(isErrorTime && classes.error),
            },
          }}
          onChange={(e) => setTime(e as string)}
        />
      </Stack>
      <AppGradientButton
        className={classes.button}
        label={getLabel("lGenerateMyBirthChart")}
        onClick={handleCreateBirthChart}
      />
    </Stack>
  );
};

export default memo(GenerateBirthChart);

const useStyles = makeStyles((theme: ThemeProps) => ({
  inputWrapper: {
    width: 750,
    alignItems: "center",
  },
  label: {
    whiteSpace: "nowrap",
    fontWeight: 700,
    fontSize: 24,
    fontFamily: "Montserrat",
  },
  autoCompleteRoot: {
    height: 43,
  },
  autoCompleteInput: {
    "&$autoCompleteInput&$autoCompleteInput": {
      fontSize: 24,
      fontWeight: 400,
    },
  },
  dateInput: {
    minWidth: 200,
    fontSize: 24,
    fontWeight: 400,
  },
  timeInput: {
    fontSize: 24,
    minWidth: 105,
    fontWeight: 400,
  },
  button: {
    height: 94,
    minWidth: 310,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  error: {
    "&$error&$error": {
      borderColor: theme.palette.error.main,
    },
  },
}));
