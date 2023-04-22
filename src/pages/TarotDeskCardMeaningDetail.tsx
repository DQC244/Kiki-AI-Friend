import React, { useCallback, useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MeaningDeskCardList } from "components/sn-card-meaning";
import { ImageAssets } from "assets";
import { OrderPopup } from "components/common";
import { AppConstant } from "const";
import Cookies from "js-cookie";
import { useCountdownByTimestamp } from "hooks";

const TarotCardMeaning = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const m = useCountdownByTimestamp(Number(2), () => setIsOpen(true));
  console.log(m);

  const handleShowPopup = () => {
    const timeCookie = Cookies.get(AppConstant.KEY_TIME_POPUP);
    if (timeCookie) {
      console.log("csd");
    } else {
      const now = Math.floor(Date.now() / 1000);
      const minute = (AppConstant.COOL_DOWN_TIME + now).toString();
      Cookies.set(AppConstant.KEY_TIME_POPUP, minute);
    }
  };

  useEffect(() => {
    handleShowPopup();

    return () => {
      Cookies.remove(AppConstant.KEY_TIME_POPUP);
    };
  }, []);

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <MeaningDeskCardList />
      </Container>

      <OrderPopup isOpen={isOpen} onClose={handleClose} />
    </Box>
  );
};

export default TarotCardMeaning;

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: 120,
    background: `top left / 100% auto url(${ImageAssets.CardMeaningBackground})`,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginTop: 21,
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "68px",
  },
}));
