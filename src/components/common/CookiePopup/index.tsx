import React, { memo, useEffect, useState } from "react";
import { Box, Button, Dialog, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { ThemeProps } from "models/types";
import { AppConstant } from "const";
import { useResponsive } from "hooks";
import AppGradientButton from "../AppGradientButton";
import Setting from "./Setting";

const CookiePopup = ({ onClose, isUSA, isOpen }: CookiePopupProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const isMobile = useResponsive("down", "md");

  const [isSetting, setIsSetting] = useState(false);
  const [options, setOptions] = useState<OptionProps>(OPTIONS);

  const handleChangeOptions = (key: string, value: boolean) => {
    setOptions({ ...options, [key]: value });
  };

  const handleToggleAll = (isAll: boolean) => {
    if (isAll) {
      setOptions(OPTIONS);
    } else {
      setOptions(OPTIONS_REJECT);
    }
  };

  const handleFinishSetting = (op?: OptionProps) => {
    const newOption = op || options;
    localStorage.setItem(AppConstant.COOKIES_SETTING_KEY, JSON.stringify(newOption));
    onClose();
  };

  const handleAcceptOption = () => {
    setOptions(OPTIONS);
    handleFinishSetting(OPTIONS);
  };

  const handleRejectOption = () => {
    setOptions(OPTIONS_REJECT);
    handleFinishSetting(OPTIONS_REJECT);
  };

  useEffect(() => {
    setOptions(OPTIONS_US);
  }, [isUSA]);

  return (
    <Dialog
      sx={{ background: "rgba(0, 0, 0, 0.35)" }}
      open={isOpen}
      classes={{ paper: classes.paperRoot, container: classes.containerRoot }}
      fullWidth
    >
      {isSetting ? (
        <Setting
          onBackSetting={() => setIsSetting(false)}
          onToggleAll={handleToggleAll}
          options={options}
          onChangeChecked={handleChangeOptions}
          onFinish={handleFinishSetting}
        />
      ) : (
        <Box className={classes.container}>
          {!isMobile && (
            <Box
              component="img"
              src={ImageAssets.CookieIcon}
              draggable="false"
              className={classes.imgCookie}
            />
          )}
          <Stack
            spacing={4}
            direction={{ xs: "column", lg: "row" }}
            alignItems={{ xs: "center", sm: "flex-start", lg: "center" }}
          >
            <Box>
              <Typography className={classes.title}>{getLabel("lHaveACookie")}</Typography>
              <Typography>{getLabel("lCookiesDesc")}</Typography>
            </Box>
            <Stack spacing={{ xs: 1.25, sm: 4 }} direction="row">
              <Button className={classes.outlinedButton} onClick={() => setIsSetting(true)}>
                <Typography className={classes.textButton}>{getLabel("lPreferences")}</Typography>
              </Button>
              {!isUSA && (
                <Button className={classes.outlinedButton} onClick={handleRejectOption}>
                  <Typography className={classes.textButton}>{getLabel("lRejectAll")}</Typography>
                </Button>
              )}
              <AppGradientButton
                className={classes.gradientButton}
                label={getLabel("lAcceptAll")}
                onClick={handleAcceptOption}
              />
            </Stack>
          </Stack>
        </Box>
      )}
    </Dialog>
  );
};

export type OptionProps = {
  onlyNecessary: boolean;
  functionality: boolean;
  advertising: boolean;
  performance: boolean;
};

const OPTIONS_US = {
  onlyNecessary: true,
  functionality: true,
  advertising: false,
  performance: true,
};

const OPTIONS = {
  onlyNecessary: true,
  functionality: true,
  advertising: true,
  performance: true,
};

const OPTIONS_REJECT = {
  onlyNecessary: false,
  functionality: false,
  advertising: false,
  performance: false,
};

type CookiePopupProps = {
  onClose: () => void;
  isUSA: boolean;
  isOpen: boolean;
};

export default memo(CookiePopup);

const useStyles = makeStyles((theme: ThemeProps) => ({
  paperRoot: {
    margin: 0,
    maxWidth: "unset",
    width: "100%",
    overflow: "visible",
    background: theme.palette.common.white,
    borderRadius: "30px 30px 0px 0px",

    [theme.breakpoints.down("sm")]: {
      borderRadius: 30,
      overflowY: "auto",
    },
  },
  containerRoot: {
    alignItems: "flex-end",
  },
  container: {
    width: "100%",
    padding: "54px 320px",

    [theme.breakpoints.down("lg")]: {
      padding: "34px 260px",
    },
    [theme.breakpoints.down("md")]: {
      padding: 16,
      borderRadius: 30,
    },
  },
  imgCookie: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 200,
    height: "auto",
  },
  title: {
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
    borderRadius: 10,
    height: 50,

    "&:before": {
      content: "''",
      position: "absolute",
      inset: 2,
      borderRadius: 9,
      background: theme.palette.common.white,
      zIndex: -1,
    },
  },
  textButton: {
    fontWeight: 700,
    whiteSpace: "nowrap",
    background: "linear-gradient(90deg, #756CBF 0%, #CAACF2 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  gradientButton: {
    height: 50,
    padding: "12px 14px",
    minWidth: "unset",
    minHeight: "unset",
    whiteSpace: "nowrap",
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "24px",
  },
}));
