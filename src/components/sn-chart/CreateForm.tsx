import React, { memo, useState, FormEvent, useCallback } from "react";
import { Stack, Typography } from "@mui/material";
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

  const handleChangeName = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value.length > MAX_CHARACTER_NAME) return;
    setName(value);
  };

  const handleCreateBirthChart = () => {
    if (!dayjs(date).isValid() || !dayjs(time).isValid() || !timeFormat || !name || !city) return;

    const newDate = dayjs(date).format(AppConstant.FULL_DATE_FORMAT);
    const newTime = dayjs(time).format(AppConstant.TIME_FORMAT);

    let data: ObjectMultiLanguageProps = { newDate, newTime, timeFormat, name, city };
    // TODO: update when implement api
    if (isTransitChart && !currentCity) return;
    else data = { ...data, currentCity };

    onCreateChart(data);
  };

  return (
    <Stack
      alignItems="center"
      className={clsx(classes.root, className)}
      component="form"
      spacing={4}
    >
      <Typography className={classes.text}>{getLabel("lTellUsALittle")}</Typography>
      <Stack spacing={4.25} width="100%">
        <Stack direction="row">
          <Typography className={classes.label}>{getLabel("lMyNameIs")}</Typography>
          <input className={classes.input} onChange={handleChangeName} value={name} />
        </Stack>
        <Stack direction="row" alignItems="center">
          <Typography className={classes.label}>{getLabel("lIWasBornOn")}</Typography>
          <AppDateInput className={classes.dateInput} onChange={(e) => setDate(e as string)} />
          <Typography className={classes.label}>{getLabel("lAt")}</Typography>
          <AppTimeInput className={classes.inputTime} onChange={(e) => setTime(e as string)} />
          <input
            className={classes.radioInput}
            type="radio"
            id="am"
            value={TIME_FORMAT.am}
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
            value={TIME_FORMAT.pm}
            onChange={(e) => setTimeFormat(e.currentTarget.value)}
          />
          <label className={classes.label} htmlFor="pm">
            PM
          </label>
        </Stack>
        <Stack direction="row">
          <Typography className={classes.label}>{getLabel("lIn")}</Typography>
          <AppAutocomplete
            options={cities}
            onChangeValueInput={(_, value) => handleGetCities(value)}
            onChange={(_, value) => {
              setCity(value?.label);
            }}
          />
        </Stack>
        {isTransitChart && (
          <Stack direction="row">
            <Typography className={classes.label}>{getLabel("lYourCurrentLocation")}</Typography>
            <AppAutocomplete
              options={cities}
              onChangeValueInput={(_, value) => handleGetCities(value)}
              onChange={(_, value) => {
                setCurrentCity(value?.label);
              }}
            />
          </Stack>
        )}
      </Stack>
      <AppGradientButton
        label={submitLabel || getLabel("lCreateChart")}
        onClick={handleCreateBirthChart}
      />
    </Stack>
  );
};

enum TIME_FORMAT {
  am = "AM",
  pm = "PM",
}
const MAX_CHARACTER_NAME = 255;

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
  },
  text: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "63px",
  },
  label: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: "16px",
    whiteSpace: "nowrap",
  },
  input: {
    "&,&:focus": {
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
  radioInput: {
    cursor: "pointer",
    "&:after": {
      width: 15,
      height: 15,
      borderRadius: 15,
      top: -2,
      left: -1,
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
      top: -2,
      left: -1,
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
  },
  dateInput: {
    flex: 1,
  },
}));
