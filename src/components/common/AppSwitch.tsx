import React, { memo } from "react";
import { makeStyles } from "@mui/styles";
import { Switch, SwitchClasses, SwitchProps } from "@mui/material";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const AppSwitch = ({ classes, ...otherProps }: AppSwitchProps) => {
  const defaultClasses = useStyles();

  return (
    <Switch
      classes={{
        ...classes,
        root: clsx(defaultClasses.root, classes?.root),
        switchBase: clsx(defaultClasses.switchBase, classes?.root),
        checked: clsx(defaultClasses.checked, classes?.checked),
        track: clsx(defaultClasses.track, classes?.checked),
        disabled: clsx(defaultClasses.disabled, classes?.disabled),
        thumb: clsx(defaultClasses.thumb, classes?.thumb),
      }}
      {...otherProps}
    />
  );
};

type AppSwitchProps = SwitchProps & {
  classes?: SwitchClasses;
};

export default memo(AppSwitch);

const useStyles = makeStyles<ThemeProps>((theme) => ({
  root: {
    width: 44,
    height: 26,
    padding: 0,
  },
  track: {
    "&$track": {
      borderRadius: 22,
      height: "100%",
      background: "#AFB0B8",
      opacity: 1,
    },
  },
  disabled: {
    "&+$track$track": {
      opacity: 1,
    },
  },
  switchBase: {
    color: theme.palette.common.white,
    padding: 2,
  },
  checked: {
    "&$checked": {
      color: theme.palette.common.white,
      "&$switchBase": {
        transform: "translateX(18px)",
      },
      "&+$track": {
        opacity: 1,
        background: theme.palette.gradient.main,
      },
    },
  },
  thumb: {
    width: 22,
    height: 22,
  },
}));
