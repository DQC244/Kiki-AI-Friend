import React, { memo } from "react";
import { TimeField, TimeFieldProps } from "@mui/x-date-pickers/TimeField";
import { AppConstant } from "const";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const AppTimeInput = ({ InputProps, ...otherProps }: TimeFieldProps<unknown>) => {
  const defaultClasses = useStyles();

  return (
    <TimeField
      format={AppConstant.TIME_FORMAT}
      InputProps={{
        ...InputProps,
        classes: {
          ...InputProps?.classes,
          input: clsx(defaultClasses.input, InputProps?.classes?.input),
          focused: clsx(defaultClasses.focused, InputProps?.classes?.focused),
          error: clsx(defaultClasses.error, InputProps?.classes?.error),
          // Fix TS not exist notchedOutline
          notchedOutline: clsx(defaultClasses.notchedOutline, InputProps?.classes?.colorSecondary),
        },
      }}
      {...otherProps}
    />
  );
};

export default memo(AppTimeInput);

const useStyles = makeStyles((theme: ThemeProps) => ({
  input: {
    padding: 0,
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: 500,
    lineHeight: "15px",
    textTransform: "lowercase",
    textAlign: "center",
    "&::placeholder": {
      color: theme.palette.common.black,
      opacity: 1,
    },
  },
  notchedOutline: {
    border: "unset",
    borderBottom: `1px solid ${theme.palette.common.black}`,
    borderRadius: 0,
  },
  focused: {
    "&$focused $notchedOutline": {
      borderColor: theme.palette.common.black,
      borderWidth: 1,
    },
  },
  error: {
    "&$error $notchedOutline": {
      borderColor: theme.palette.error.main,
    },
  },
}));
