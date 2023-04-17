import { Box, Button, Stack, Typography } from "@mui/material";
import React, { memo, useState } from "react";
import ThinkPopup from "./ThinkPopup";
import { ThemeProps } from "models/types";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";

const ChatBoxButton = ({
  label,
  imageSrc,
  message,
  onClickAnother,
  onReadyClick,
  onClose,
}: ChatBoxButtonProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleClickAnother = () => {
    onClickAnother();
    setIsOpenPopup(false);
  };

  const handleReadyClick = () => {
    onReadyClick();
    setIsOpenPopup(true);
  };

  const handleClose = () => {
    onClose();
    setIsOpenPopup(false);
  };

  return (
    <>
      {isOpenPopup && (
        <ThinkPopup
          onClickAnother={handleClickAnother}
          message={label}
          imageSrc={imageSrc}
          onClose={handleClose}
        />
      )}
      <Stack spacing={1} justifyContent="flex-start">
        <Typography className={classes.text}>{message}</Typography>
        <Box>
          <Button onClick={handleReadyClick} className={classes.button}>
            {getLabel("lImReady")}
          </Button>
        </Box>
      </Stack>
    </>
  );
};

type ChatBoxButtonProps = {
  label: string;
  imageSrc: string;
  message?: string;

  onClickAnother: () => void;
  onReadyClick: () => void;
  onClose: () => void;
};

export default memo(ChatBoxButton);

const useStyles = makeStyles((theme: ThemeProps) => ({
  text: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "22px",
    color: theme.palette.secondary.dark,
  },
  button: {
    "&$button": {
      padding: "8px 14px",
      background: theme.palette.secondary.dark,
      minWidth: 70,
      minHeight: 32,
      color: theme.palette.common.white,
      textTransform: "unset",
      borderRadius: 8,
      fontWeight: 700,
      lineHeight: "12px",
      fontSize: 10,
    },
  },
}));
