/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useCallback, useState, memo, useEffect, FormEvent } from "react";
import { AutocompleteClasses, Stack, StackProps, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { AppAutocomplete, AppDateInput, AppTimeInput } from "components/common";
import { debounce } from "lodash";
import { AppService } from "services";
import { ApiConstant, AppConstant, EnvConstant } from "const";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const CommonCreateFromSynastry = ({
  onChangeValue,
  className,
  title,
  nameLabel,
  dateLabel,
  placeLabel,
  error,
}: CommonCreateFromSynastryProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [cities, setCities] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [timeFormat, setTimeFormat] = useState("");

  const handleChangeName = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value.length > AppConstant.MAX_CHARACTER_NAME) {
      return;
    }
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

  useEffect(() => {
    onChangeValue(name, city, date, time, timeFormat);
  }, [name, city, date, time, timeFormat]);

  return (
    <Stack className={clsx(classes.root, className)} spacing={4} component="form">
      <Typography className={classes.title}>{title || getLabel("lTellUsALittle")}</Typography>
      <Stack spacing={4.5} width="100%">
        <Stack direction="row">
          <Typography className={classes.label}>{nameLabel || getLabel("lMyNameIs")}</Typography>
          <input
            className={clsx(classes.input, error.isErrorName && classes.error)}
            onChange={handleChangeName}
          />
        </Stack>
        <Stack direction="row" alignItems="center">
          <Typography className={classes.label}>{dateLabel || getLabel("lIWasBornOn")}</Typography>
          <AppDateInput
            className={classes.dateInput}
            InputProps={{
              classes: {
                colorSecondary: clsx(error.isErrorDate && classes.error),
              },
            }}
            onChange={(e) => {
              setDate(e as string);
            }}
          />
          <Typography className={classes.label}>{getLabel("lAt")}</Typography>
          <AppTimeInput
            className={classes.inputTime}
            InputProps={{
              classes: {
                colorSecondary: clsx(error.isErrorTime && classes.error),
              },
            }}
            onChange={(e) => {
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
        <Stack direction="row">
          <Typography className={classes.label}>{placeLabel || getLabel("lIn")}</Typography>
          <AppAutocomplete
            options={cities}
            onChangeValueInput={(_, value) => handleGetCities(value)}
            onChange={(_, value) => {
              setCity(value?.label);
            }}
            classes={
              {
                input: clsx(error.isErrorCity && classes.error),
              } as AutocompleteClasses
            }
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

type CommonCreateFromSynastryProps = StackProps & {
  title?: string;
  dateLabel?: string;
  placeLabel?: string;
  nameLabel?: string;
  error: {
    isErrorName: boolean;
    isErrorCity: boolean;
    isErrorDate: boolean;
    isErrorTime: boolean;
  };

  onChangeValue: (
    name: string,
    city: string,
    date: string,
    time: string,
    timeFormat: string,
  ) => void;
};

export default memo(CommonCreateFromSynastry);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    width: 514,
    padding: "32px 16px",
    backdropFilter: "blur(10px)",
    borderRadius: 20,
    border: "0.5px solid #a1a4fe",
    background: "linear-gradient(302.01deg, #FFFFFF 5.23%, rgba(255, 255, 255, 0) 115.76%)",
    zIndex: 1,
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "63px",
    textAlign: "center",
  },
  label: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: "16px",
    whiteSpace: "nowrap",
  },
  input: {
    "&,&:focus": {
      backgroundColor: "transparent",
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
  error: {
    "&$error&$error": {
      borderColor: theme.palette.error.main,
    },
  },
}));
