import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MeaningDeskCardList } from "components/sn-card-meaning";
import { ImageAssets } from "assets";
import { OrderPopup } from "components/common";
import Cookies from "js-cookie";
import { AppConstant } from "const";

const TarotCardMeaning = () => {
  const classes = useStyles();

  const [timer, setTimer] = useState<number>(0);

  const handleShowPopup = () => {
    const timeCookie = Cookies.get(AppConstant.KEY_TIME_POPUP);
    if (timeCookie) {
      setTimer(Number(timeCookie));
    } else {
      const now = Math.floor(Date.now() / 1000);
      const minute = AppConstant.COOL_DOWN_TIME + now;
      setTimer(minute);
      Cookies.set(AppConstant.KEY_TIME_POPUP, minute.toString(), { expires: (1 / 1440) * 5.5 });
    }
  };

  useEffect(() => {
    handleShowPopup();
  }, []);

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <MeaningDeskCardList />
      </Container>

      <OrderPopup timer={timer} />
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
