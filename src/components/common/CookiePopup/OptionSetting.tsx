import { Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import AppSwitch from "../AppSwitch";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";

const OptionSetting = ({
  title,
  description,
  isChecked,
  keyName,
  onChangeChecked,
}: OptionSettingProps) => {
  const classes = useStyles();

  return (
    <Stack className={classes.root} spacing={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <AppSwitch checked={isChecked} onChange={(_, value) => onChangeChecked(keyName, value)} />
        <Typography className={classes.text}>{title}</Typography>
      </Stack>
      <Typography>{description}</Typography>
    </Stack>
  );
};

export type OptionSettingProps = {
  title: string;
  description: string;
  isChecked: boolean;
  keyName: string;

  onChangeChecked: (key: string, value: boolean) => void;
};

export default memo(OptionSetting);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "relative",
    width: 295,
    minHeight: 200,
    background: theme.palette.gradient.main,
    padding: 16,
    zIndex: 0,

    "&:before": {
      content: "''",
      position: "absolute",
      inset: 1,
      backgroundColor: theme.palette.common.white,
      zIndex: -1,
    },
  },
  text: {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: "30px",
  },
}));
