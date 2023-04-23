import React, { memo, useMemo } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import { useTranslation } from "react-i18next";
import { OptionProps } from ".";
import OptionSetting, { OptionSettingProps } from "./OptionSetting";
import AppGradientButton from "../AppGradientButton";
import AppSwitch from "../AppSwitch";
import clsx from "clsx";

const Setting = ({
  options,
  onFinish,
  onBackSetting,
  onToggleAll,
  onChangeChecked,
}: SettingProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const isAllCookie = useMemo(
    () => !Object.values(options)?.filter((item) => item === false).length,
    [options],
  );

  return (
    <Box className={clsx("center-root", classes.root)}>
      <Stack spacing={4}>
        <Stack direction="row" spacing={5} alignItems="center">
          <AppSwitch checked={isAllCookie} onChange={(_, value) => onToggleAll(value)} />
          <Typography className={classes.textTitle}>{getLabel("lAllowAll")}</Typography>
        </Stack>
        <Stack direction="row" spacing={3}>
          <OptionSetting
            title={getLabel("lOnlyNecessary")}
            description={getLabel("lOnlyNecessaryDesc")}
            keyName={"onlyNecessary"}
            isChecked={options.onlyNecessary}
            onChangeChecked={onChangeChecked}
          />
          <OptionSetting
            title={getLabel("lFunctionalityCookies")}
            description={getLabel("lFunctionalityCookiesDesc")}
            isChecked={options.functionality}
            keyName="functionality"
            onChangeChecked={onChangeChecked}
          />
          <OptionSetting
            title={getLabel("lAdvertisingCookies")}
            description={getLabel("lAdvertisingCookiesDesc")}
            isChecked={options.advertising}
            keyName="advertising"
            onChangeChecked={onChangeChecked}
          />
          <OptionSetting
            title={getLabel("lPerformanceCookies")}
            description={getLabel("lPerformanceCookiesDesc")}
            isChecked={options.performance}
            keyName="performance"
            onChangeChecked={onChangeChecked}
          />
        </Stack>
        <Stack spacing={8} direction="row" justifyContent="center">
          <Button className={classes.outlinedButton} onClick={onBackSetting}>
            <Typography className={classes.textButton}>{getLabel("lBack")}</Typography>
          </Button>
          <AppGradientButton
            className={classes.gradientButton}
            label={getLabel("lFinish")}
            onClick={() => onFinish()}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

type SettingProps = Pick<OptionSettingProps, "onChangeChecked"> & {
  options: OptionProps;

  onBackSetting: () => void;
  onFinish: () => void;
  onToggleAll: (value: boolean) => void;
};

export default memo(Setting);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: theme.palette.common.white,
    borderRadius: "30px 30px 0 0",
    padding: "40px 0",
  },
  textTitle: {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: "30px",
  },
  outlinedButton: {
    position: "relative",
    background: theme.palette.gradient.main,
    zIndex: 0,
    textTransform: "unset",
    padding: "12px 14px",
    borderRadius: 20,
    width: 240,
    height: 80,

    "&:before": {
      content: "''",
      position: "absolute",
      inset: 2,
      borderRadius: 19,
      background: theme.palette.common.white,
      zIndex: -1,
    },
  },
  textButton: {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: "30px",
    whiteSpace: "nowrap",
    background: "linear-gradient(90deg, #756CBF 0%, #CAACF2 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  gradientButton: {
    width: 240,
    height: 80,
    padding: "12px 14px",
    minWidth: "unset",
    minHeight: "unset",
    whiteSpace: "nowrap",
    borderRadius: 20,
    fontWeight: 700,
    fontSize: 22,
    lineHeight: "30px",
  },
}));
