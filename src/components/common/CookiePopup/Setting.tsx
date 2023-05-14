import React, { memo, useMemo } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
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
    <Box className={clsx("center-root", "custom-scrollbar", classes.root)}>
      <Stack>
        <Stack direction="row" spacing={5} alignItems="center" mb={{ xs: 2, sm: 3 }}>
          <AppSwitch checked={isAllCookie} onChange={(_, value) => onToggleAll(value)} />
          <Typography className={classes.textTitle}>{getLabel("lAllowAll")}</Typography>
        </Stack>
        <Grid
          container
          direction="row"
          alignItems="stretch"
          columnSpacing={{ xs: 2, sm: 3 }}
          rowSpacing={{ xs: 2, sm: 3 }}
          ml={{ xs: -2, sm: -3 }}
        >
          <Grid item xs={12} sm={6} lg={3}>
            <OptionSetting
              title={getLabel("lOnlyNecessary")}
              description={getLabel("lOnlyNecessaryDesc")}
              keyName={"onlyNecessary"}
              isChecked={options.onlyNecessary}
              onChangeChecked={onChangeChecked}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <OptionSetting
              title={getLabel("lFunctionalityCookies")}
              description={getLabel("lFunctionalityCookiesDesc")}
              isChecked={options.functionality}
              keyName="functionality"
              onChangeChecked={onChangeChecked}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <OptionSetting
              title={getLabel("lAdvertisingCookies")}
              description={getLabel("lAdvertisingCookiesDesc")}
              isChecked={options.advertising}
              keyName="advertising"
              onChangeChecked={onChangeChecked}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <OptionSetting
              title={getLabel("lPerformanceCookies")}
              description={getLabel("lPerformanceCookiesDesc")}
              isChecked={options.performance}
              keyName="performance"
              onChangeChecked={onChangeChecked}
            />
          </Grid>
        </Grid>
        <Stack
          mt={{ xs: 2, sm: 4 }}
          spacing={{ xs: 2, sm: 8 }}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
        >
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
    width: "100%",
    backgroundColor: theme.palette.common.white,
    borderRadius: "30px 30px 0 0",
    padding: "40px 340px",

    [theme.breakpoints.down("lg")]: {
      padding: "29px 260px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: 16,
      maxHeight: "100%",
    },
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

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

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

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
