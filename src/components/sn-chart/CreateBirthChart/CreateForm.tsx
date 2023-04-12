import React, { memo } from "react";
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AppGradientButton } from "components/common";
import { AppConstant } from "const";
import { ThemeProps } from "models/types";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const CreateForm = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack alignItems="center" className={classes.root} component="form" spacing={4}>
      <Typography className={classes.text}>{getLabel("lTellUsALittle")}</Typography>
      <Stack spacing={4.25}>
        <Stack direction="row">
          <Typography className={classes.label}>{getLabel("lMyNameIs")}</Typography>
          <input className={classes.input} />
        </Stack>
        <Stack direction="row" alignItems="center">
          <Typography className={classes.label}>{getLabel("lIWasBornOn")}</Typography>
          <input className={classes.input} placeholder={AppConstant.FULL_DATE_FORMAT} />
          <Typography className={classes.label}>{getLabel("lAt")}</Typography>
          <input
            className={clsx(classes.input, classes.inputTime)}
            placeholder={AppConstant.TIME_FORMAT}
          />
          <input className={classes.radioInput} type="radio" id="am" name="time" />
          <label className={classes.label} htmlFor="am">
            AM
          </label>
          <input className={classes.radioInput} type="radio" id="pm" name="time" />
          <label className={classes.label} htmlFor="pm">
            PM
          </label>
        </Stack>
        <Stack direction="row">
          <Typography className={classes.label}>{getLabel("lIn")}</Typography>
          <input className={classes.input} />
        </Stack>
      </Stack>
      <AppGradientButton label={getLabel("lCreateChart")} />
    </Stack>
  );
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
}));
