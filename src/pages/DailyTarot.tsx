import React, { useEffect } from "react";
import { Box, Container, Stack } from "@mui/material";
import { TarotCardList, TitleDaily } from "components/sn-daily-tarot";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useDispatch } from "react-redux";
import { AppActions } from "redux-store";
import { ThemeProps } from "models/types";
import {
  HEADER_HEIGHT_IN_PX,
  HEADER_HEIGHT_MOBILE_IN_PX,
  HEADER_HEIGHT_TABLET_IN_PX,
} from "layouts/MainLayout/components/MLHeader";
import {
  FOOTER_HEIGHT_IN_PX,
  FOOTER_HEIGHT_MOBILE_IN_PX,
  FOOTER_HEIGHT_TABLET_IN_PX,
} from "layouts/MainLayout/components/Footer";

const DailyTarot = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AppActions.getTarotCardRandom(24));

    return () => {
      dispatch(AppActions.appReset());
    };
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.background} />
      <Container>
        <Stack>
          <TitleDaily />
          <TarotCardList className={classes.cardList} />
        </Stack>
      </Container>
    </Box>
  );
};

export default DailyTarot;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    padding: "60px 0",
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,

    [theme.breakpoints.down("lg")]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT_TABLET_IN_PX + FOOTER_HEIGHT_TABLET_IN_PX}px)`,
      padding: "80px 0",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT_MOBILE_IN_PX + FOOTER_HEIGHT_MOBILE_IN_PX}px)`,
      padding: "32px 0",
    },
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundPosition: "top 400px left ",
    backgroundSize: "100% auto",
    background: `url(${ImageAssets.DailyTarotBackground})`,
  },
  cardList: {
    marginTop: 104,

    [theme.breakpoints.down("lg")]: {
      marginTop: 60,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
}));
