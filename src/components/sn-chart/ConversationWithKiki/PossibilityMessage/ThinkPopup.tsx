import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CloseIcon } from "components/icons";
import { useTranslation } from "react-i18next";
import { AppGradientButton } from "components/common";
import clsx from "clsx";
import { BoxProps } from "@mui/system";

const ThinkPopup = ({
  onClose,
  message,
  imageSrc,
  onClickAnother,
  ...otherProps
}: ThinkPopupProps) => {
  const defaultClasses = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Box className={clsx("center-root", defaultClasses.root)} {...otherProps}>
      <Box
        className={defaultClasses.paper}
        sx={{
          background: `no-repeat top left / 100% 100% url(${imageSrc})`,
        }}
      >
        <IconButton className={defaultClasses.closeIconButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Box className={clsx("center-root", defaultClasses.textWrapper)}>
          <Typography className={defaultClasses.mess}>{message}</Typography>
        </Box>
        <Box className={defaultClasses.action}>
          <AppGradientButton
            onClick={onClickAnother}
            className={defaultClasses.button}
            label={
              <Typography className={defaultClasses.text}>
                {getLabel("lThinkAboutAnotherPossibility")}
              </Typography>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

type ThinkPopupProps = BoxProps & {
  message: string;
  imageSrc: string;
  onClickAnother: () => void;
  onClose: () => void;
};

export default ThinkPopup;

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 99,
  },
  paper: {
    position: "relative",
    width: 265,
    height: 400,
    maxWidth: "100%",
    borderRadius: 33,
    boxShadow: "none",
  },
  closeIconButton: {
    position: "absolute",
    right: 16,
    top: 16,
    width: 16,
    height: 16,
    fontSize: 20,
    borderRadius: "50%",
    padding: 0,
  },
  action: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "24px 44px",
  },
  button: {
    minWidth: "unset",
    minHeight: 42,
    borderRadius: 13,
    padding: 8,
    width: "100%",
  },
  text: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: 10,
    lineHeight: "22px",
  },
  textWrapper: {
    position: "absolute",
    top: 128,
    left: "50%",
    height: 50,
    width: 127,
    transform: "translateX(-50%)",
    padding: 4,
  },
  mess: {
    fontFamily: "Montserrat",
    fontSize: 10,
    lineHeight: "18px",
    textAlign: "center",
    color: "#59518C",
  },
}));
