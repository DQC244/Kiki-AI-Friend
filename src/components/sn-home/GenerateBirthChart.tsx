/* eslint-disable camelcase */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { FormEvent, memo, useCallback, useState } from "react";
import { AutocompleteClasses, Stack, StackProps, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppAutocomplete, AppDateInput, AppGradientButton, AppTimeInput } from "components/common";
import { ApiConstant, AppConstant, EnvConstant, LangConstant, PathConstant } from "const";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";
import { AppService } from "services";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { ThemeProps } from "models/types";
import { useDispatch } from "react-redux";
import { AppActions } from "redux-store";

const GenerateBirthChart = (props: StackProps) => {
  const classes = useStyles();
  const { t: getLabel, i18n } = useTranslation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [isErrorCity, setIsErrorCity] = useState(false);
  const [isErrorDate, setIsErrorDate] = useState(false);
  const [isErrorTime, setIsErrorTime] = useState(false);
  const [isErrorName, setIsErrorName] = useState(false);

  const handleChangeName = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value.length > AppConstant.MAX_CHARACTER_NAME || !value) {
      setIsErrorName(true);
      return;
    }
    setIsErrorName(false);
    setName(value);
  };

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
    if (dayjs(date).isValid() || dayjs(time).isValid() || city || name) {
      // TODO: Call api here

      const placeArr = city?.split(", ");

      const dateTimeString = `${date} ${time}`;
      const parsedDate = dayjs.tz(
        dateTimeString,
        "DD/MM/YYYY HH:mm",
        Intl.DateTimeFormat().resolvedOptions().timeZone,
      );

      const newData = {
        full_name: name,
        language:
          i18n.language === LangConstant.DEFAULT_LANG_CODE ? LangConstant.DEFAULT_LANG_CODE : "vi",
        city_of_birth: placeArr[0],
        nation_of_birth: placeArr[1],
        date_of_birth: parsedDate.toJSON(),
      };

      dispatch(AppActions.getBirthChart(newData));

      const dataImage = {
        full_name: name,
        city_of_birth: placeArr[0],
        nation_of_birth: placeArr[1],
        date_of_birth: parsedDate.toJSON(),
      };
      dispatch(AppActions.getBirthChartImage(dataImage));

      navigate(PathConstant.BIRTH_CHART, { state: { date, time, city } });
    } else {
      if (false === Boolean(city)) setIsErrorCity(true);
      if (!dayjs(date).isValid()) setIsErrorDate(true);
      if (!dayjs(time).isValid()) setIsErrorTime(true);
      if (!name) setIsErrorName(true);
    }
  };

  return (
    <Stack spacing={5} alignItems="center" {...props}>
      <Stack direction="row" className={classes.inputWrapper}>
        <Typography className={classes.label}>{getLabel("lMyNameIs")}</Typography>
        <input
          className={clsx(classes.input, isErrorName && classes.error)}
          onChange={handleChangeName}
          value={name}
        />
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
            setIsErrorCity(false);
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
          onChange={(e) => {
            setIsErrorDate(false);
            setDate(e as string);
          }}
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
          onChange={(e) => {
            setIsErrorTime(false);
            setTime(e as string);
          }}
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
  input: {
    "&,&:focus": {
      minWidth: 280,
      background: "transparent",
      fontSize: 24,
      border: "unset",
      borderBottom: `1px solid ${theme.palette.common.black}`,
      outline: "none",
      flex: 1,
      textAlign: "center",
      "&::placeholder": {
        color: theme.palette.common.black,
      },
    },
  },
  inputWrapper: {
    width: 1200,
    alignItems: "center",
  },
  label: {
    whiteSpace: "nowrap",
    fontWeight: 700,
    fontSize: 24,
  },
  autoCompleteRoot: {
    height: 43,
    fontFamily: "Roboto",
  },
  autoCompleteInput: {
    "&$autoCompleteInput&$autoCompleteInput": {
      fontFamily: "Roboto",
      fontSize: 24,
      fontWeight: 400,
    },
  },
  dateInput: {
    minWidth: 200,
    fontSize: 24,
    fontWeight: 400,
    fontFamily: "Roboto",
  },
  timeInput: {
    fontSize: 24,
    minWidth: 105,
    fontWeight: 400,
    fontFamily: "Roboto",
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
