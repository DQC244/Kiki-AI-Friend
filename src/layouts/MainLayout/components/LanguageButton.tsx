import React, { useState, useEffect, memo } from "react";
import { makeStyles } from "@mui/styles";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { ThemeProps } from "models/types";
import { LangConstant } from "const";
import i18next from "i18next";
import Cookies from "js-cookie";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const LanguageButton = ({
  className,
  toggleButtonProps = {},
  textProps = {},
  ...otherProps
}: LanguageButtonProps) => {
  const classes = useStyles();
  const {
    className: toggleButtonClassName,
    isEnClassName,
    ...otherToggleButtonProps
  } = toggleButtonProps;
  const { className: textClassName, ...otherTextProps } = textProps;

  const { t: getLabel } = useTranslation();

  const [isEn, setIsEn] = useState(true);

  const handleChangeLAnguage = () => {
    const currentLang = isEn
      ? LangConstant.ARR_LANGUAGE[1]?.code
      : LangConstant.ARR_LANGUAGE[0]?.code;

    Cookies.set(LangConstant.KEY_LANG, currentLang);
    i18next.changeLanguage(currentLang);

    setIsEn(!isEn);
  };

  useEffect(() => {
    const currentLang = Cookies.get(LangConstant.KEY_LANG);
    if (currentLang) {
      i18next.changeLanguage(currentLang);
      currentLang !== LangConstant.DEFAULT_LANG_CODE && setIsEn(false);
    }
  }, []);

  return (
    <Box className={clsx(classes.root, className)} onClick={handleChangeLAnguage} {...otherProps}>
      <Box
        className={clsx(
          "center-root",
          classes.toggle,
          toggleButtonClassName,
          isEn && clsx(classes.isEn, isEnClassName),
        )}
        {...otherToggleButtonProps}
      >
        <Typography className={clsx(classes.text, textClassName)} {...otherTextProps}>
          {getLabel("lKeyLang")}
        </Typography>
      </Box>
    </Box>
  );
};

type LanguageButtonProps = BoxProps & {
  toggleButtonProps?: BoxProps & {
    isEnClassName?: string;
  };
  textProps?: TypographyProps;
};

export default memo(LanguageButton);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: 90,
    height: 40,
    background: theme.palette.common.white,
    boxShadow: "inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)",
    borderRadius: 50,
    cursor: "pointer",
    color: "#FFFCFA",

    [theme.breakpoints.down("lg")]: {
      width: 55,
      height: 25,
    },
  },
  toggle: {
    width: 30,
    height: 30,
    margin: "0 7px",
    borderRadius: "50%",
    background: theme.palette.gradient.main,
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

    [theme.breakpoints.down("lg")]: {
      width: 19,
      height: 19,
      margin: "0 4px",
    },
  },
  isEn: {
    transform: "translateX(46px)",

    [theme.breakpoints.down("lg")]: {
      transform: "translateX(28px)",
    },
  },
  text: {
    fontFamily: "Open Sans",
    fontWeight: 700,
    fontSize: 10,
    lineHeight: "16px",
    userSelect: "none",
  },
}));
