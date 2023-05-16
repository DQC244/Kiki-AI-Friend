import React, { memo, useState, FormEvent, useCallback } from "react";
import { AutocompleteClasses, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppAutocomplete, AppDateInput, AppGradientButton, AppTimeInput } from "components/common";
import { ObjectMultiLanguageProps, ThemeProps } from "models/types";
import { useTranslation } from "react-i18next";
import { AppService } from "services";
import { debounce } from "lodash";
import { ApiConstant, AppConstant, EnvConstant } from "const";
import dayjs from "dayjs";
import clsx from "clsx";
/* eslint-disable  @typescript-eslint/no-explicit-any */

const CreateForm = ({ onCreateChart, isTransitChart, className, submitLabel }: CreateFormProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [name, setName] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [timeFormat, setTimeFormat] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  const [isErrorName, setIsErrorName] = useState(false);
  const [isErrorCity, setIsErrorCity] = useState(false);
  const [isErrorCurrentCity, setIsErrorCurrentCity] = useState(false);
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
              code: item?.country,
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

  const handleChangeName = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value.length > AppConstant.MAX_CHARACTER_NAME) {
      setIsErrorName(true);
      return;
    } else if (!value) {
      setIsErrorName(true);
    } else {
      setIsErrorName(false);
    }
    setName(value);
  };

  const handleCreateBirthChart = () => {
    if (isTransitChart && !currentCity) setIsErrorCurrentCity(true);

    if (!dayjs(date).isValid() || !dayjs(time).isValid() || !timeFormat || !name || !city) {
      if (!dayjs(date).isValid()) setIsErrorDate(true);
      if (!dayjs(time).isValid()) setIsErrorTime(true);
      if (!name) setIsErrorName(true);
      if (!city) setIsErrorCity(true);
      return;
    }

    const newDate = dayjs(date).format(AppConstant.FULL_DATE_FORMAT);
    const newTime = dayjs(time).format(AppConstant.TIME_FORMAT);

    let data: ObjectMultiLanguageProps = { newDate, newTime, timeFormat, name, city };
    // TODO: update when implement api
    if (isTransitChart) {
      data = { ...data, currentCity };
    }

    onCreateChart(data);
  };

  return (
    <Stack
      alignItems="center"
      className={clsx(classes.root, className)}
      component="form"
      spacing={{ xs: 2.5, sm: 4 }}
    >
      <Typography className={classes.text}>{getLabel("lTellUsALittle")}</Typography>
      <Stack spacing={{ xs: 1.5, sm: 4.25 }} width="100%">
        <Stack direction="row">
          <Typography className={classes.label}>{getLabel("lMyNameIs")}</Typography>
          <input
            className={clsx(classes.input, isErrorName && classes.error)}
            onChange={handleChangeName}
            value={name}
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={{ xs: 1.5, sm: 0 }}
        >
          <Stack direction="row" alignItems="center" width={{ xs: "100%", sm: "unset" }}>
            <Typography className={classes.label}>{getLabel("lIWasBornOn")}</Typography>
            <AppDateInput
              className={classes.dateInput}
              InputProps={{
                classes: {
                  colorSecondary: clsx(isErrorDate && classes.error),
                },
              }}
              onChange={(e) => {
                setIsErrorDate(false);
                setDate(e as string);
              }}
            />
          </Stack>
          <Stack direction="row" alignItems="center" width={{ xs: "100%", sm: "unset" }}>
            <Typography className={classes.label} textTransform={{ xs: "capitalize", sm: "unset" }}>
              {getLabel("lAt")}
            </Typography>
            <AppTimeInput
              className={classes.inputTime}
              InputProps={{
                classes: {
                  colorSecondary: clsx(isErrorTime && classes.error),
                },
              }}
              onChange={(e) => {
                setIsErrorTime(false);
                setTime(e as string);
              }}
            />
            <input
              className={classes.radioInput}
              type="radio"
              id="am"
              value={AppConstant.TIME_FORMAT_ENUM.am}
              name="time"
              onChange={(e) => setTimeFormat(e.currentTarget.value)}
            />
            <label className={classes.label} htmlFor="am">
              AM
            </label>
            <input
              className={classes.radioInput}
              type="radio"
              id="pm"
              name="time"
              value={AppConstant.TIME_FORMAT_ENUM.pm}
              onChange={(e) => setTimeFormat(e.currentTarget.value)}
            />
            <label className={classes.label} htmlFor="pm">
              PM
            </label>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Typography className={classes.label} textTransform={"capitalize"}>
            {getLabel("lIn")}
          </Typography>
          <AppAutocomplete
            options={cities}
            onChangeValueInput={(_, value) => handleGetCities(value)}
            onChange={(_, value) => {
              setIsErrorCity(false);
              setCity(value?.label);
            }}
            classes={
              {
                input: clsx(isErrorCity && classes.error),
              } as AutocompleteClasses
            }
          />
        </Stack>
        {isTransitChart && (
          <Stack direction="row">
            <Typography className={classes.label}>{getLabel("lYourCurrentLocation")}</Typography>
            <AppAutocomplete
              options={cities}
              onChangeValueInput={(_, value) => handleGetCities(value)}
              onChange={(_, value) => {
                setIsErrorCurrentCity(false);
                setCurrentCity(value?.label);
              }}
              classes={
                {
                  input: clsx(isErrorCurrentCity && classes.error),
                } as AutocompleteClasses
              }
            />
          </Stack>
        )}
      </Stack>
      <Stack>
        <AppGradientButton
          label={submitLabel || getLabel("lCreateChart")}
          onClick={handleCreateBirthChart}
          className={classes.createButton}
        />
      </Stack>
    </Stack>
  );
};

export type CreateFormProps = {
  className?: string;
  onCreateChart: (data: any) => void;
  isTransitChart?: boolean;
  submitLabel?: string;
};

export default memo(CreateForm);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "relative",
    width: 549,
    maxWidth: "100%",
    padding: "14px 31px",
    borderRadius: 20,
    background: "linear-gradient(25deg, #CAACF2 0%, #9AA2FF 44%, #BBD0FF 100%)",
    zIndex: 0,

    "&:before": {
      content: '""',
      position: "absolute",
      inset: 1,
      width: "calc(100% - 2px)",
      height: "calc(100% - 2px)",
      background: "white",
      borderRadius: 19,
      zIndex: -1,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  text: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "63px",

    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "30px",
    },
  },
  label: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: "16px",
    whiteSpace: "nowrap",

    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
  input: {
    "&,&:focus": {
      fontFamily: "Montserrat",
      fontSize: 16,
      border: "unset",
      borderBottom: `1px solid ${theme.palette.common.black}`,
      outline: "none",
      flex: 1,
      textAlign: "center",
      "&::placeholder": {
        color: theme.palette.common.black,
      },

      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
        lineHeight: "20px",
      },
    },
  },
  radioInput: {
    width: 15,
    height: 15,
    cursor: "pointer",
    "&:after": {
      width: 15,
      height: 15,
      borderRadius: 15,
      top: 0,
      left: 0,
      position: "relative",
      backgroundColor: "white",
      content: '""',
      display: "inline-block",
      visibility: "visible",
      border: "2px solid #9AA2FF",
    },
    "&:checked:after": {
      width: 15,
      height: 15,
      borderRadius: 15,
      top: 0,
      left: 0,
      position: "relative",
      backgroundColor: "#9AA2FF",
      content: '""',
      display: "inline-block",
      visibility: "visible",
      border: "2px solid #9AA2FF",
    },
  },
  inputTime: {
    width: 70,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  dateInput: {
    flex: 1,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  error: {
    "&$error&$error": {
      borderColor: theme.palette.error.main,
    },
  },
  createButton: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "24px",
      padding: "8px 16px",
      minWidth: 112,
      minHeight: 40,
      borderRadius: 10,
    },
  },
}));
