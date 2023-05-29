import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MeaningTarotCardDetail } from "components/sn-card-meaning";
import { ImageAssets } from "assets";
import { OrderPopup } from "components/common";
import { AppConstant } from "const";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppActions } from "redux-store";
import { ThemeProps } from "models/types";

const TarotCardMeaning = () => {
  const classes = useStyles();

  const params = useParams();
  const dispatch = useDispatch();

  const id = params?.id;

  const [timer, setTimer] = useState<number>(0);

  const handleShowPopup = () => {
    const timeCookie = Cookies.get(AppConstant.KEY_TIME_POPUP);
    if (timeCookie) {
      setTimer(Number(timeCookie));
    } else {
      const now = Math.floor(Date.now() / 1000);
      const minute = AppConstant.COOL_DOWN_TIME + now;
      setTimer(minute);
      Cookies.set(AppConstant.KEY_TIME_POPUP, minute.toString(), { expires: (1 / 1440) * 5.05 });
    }
  };

  useEffect(() => {
    handleShowPopup();
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(AppActions.getTarotCardDetail(id));
      dispatch(AppActions.getTarotCardRandom(8));

      // dispatch(AppActions.getTarotCardRandom(8));
    }
    return () => {
      dispatch(AppActions.appReset());
    };
  }, [id]);

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <MeaningTarotCardDetail />
      </Container>
      <OrderPopup timer={timer} />
    </Box>
  );
};

export default TarotCardMeaning;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    paddingBottom: 120,
    background: `top left / 100% auto url(${ImageAssets.CardMeaningBackground})`,

    [theme.breakpoints.down("lg")]: {
      // paddingBottom: 60,
    },
    // [theme.breakpoints.down("sm")]: {
    //   paddingBottom: 12,
    // },
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
