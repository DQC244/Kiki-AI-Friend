import React, { Fragment, memo } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { ThemeProps } from "models/types";
import { CloseIcon } from "components/icons";
import { PathConstant } from "const";

const OrderPopup = ({ isOpen, onClose }: OrderPopupProps) => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();

  return isOpen ? (
    <Box className={classes.root}>
      <Box className={classes.popup}>
        <IconButton className={classes.closeBtn} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Button href={PathConstant.DOWNLOAD} target="_blank" className={classes.orderBtn}>
          {getLabel("lOrderNow")}
        </Button>
      </Box>
    </Box>
  ) : (
    <Fragment />
  );
};

type OrderPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default memo(OrderPopup);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "fixed",
    inset: 0,
    background: "#0000006e",
    zIndex: 2000,
  },
  popup: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 634,
    background: `no-repeat center center / auto 632px url(${ImageAssets.PopupBGRight}), no-repeat center center / 100% 634px url(${ImageAssets.PopupBG})`,
    zIndex: 2001,
  },
  orderBtn: {
    "&:hover,&": {
      position: "absolute",
      fontWeight: 600,
      fontSize: 30,
      lineHeight: "38px",
      background: theme.palette.common.white,
      borderRadius: 15,
      color: theme.palette.secondary.dark,
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      textTransform: "unset",
    },
  },
  closeBtn: {
    position: "absolute",
    top: 24,
    left: "80%",
    fontSize: 28,
    padding: 0,
    borderRadius: "50%",
  },
}));
