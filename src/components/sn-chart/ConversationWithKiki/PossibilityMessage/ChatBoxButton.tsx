import { Box, Button, Stack, Typography } from "@mui/material";
import React, { memo, useState } from "react";
import ThinkPopup from "./ThinkPopup";
import { ThemeProps } from "models/types";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { useHandleGetAnswerPossibility } from "../hooks";

const ChatBoxButton = ({
  imageSrc,
  message,
  randomIndex,
  onClickAnother,
  onReadyClick,
  onClose,
}: ChatBoxButtonProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const handleGetAnswerPossibility = useHandleGetAnswerPossibility();

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [label, setLabel] = useState("");

  const handleClickAnother = () => {
    onClickAnother();
    setIsOpenPopup(false);
  };

  const handleReadyClick = async () => {
    onReadyClick();

    const newLabel = await handleGetAnswerPossibility(randomIndex);
    setLabel(newLabel);
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
  randomIndex: number;

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
