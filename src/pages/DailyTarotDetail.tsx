import React, { useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { TitleDaily, CardInfoHead, SealDrinkTeaBackgroundMobile } from "components/sn-daily-tarot";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppActions } from "redux-store";
import { ThemeProps } from "models/types";
import { useMobile } from "hooks";
import clsx from "clsx";

const DailyTarotDetail = () => {
  const dispatch = useDispatch();
  const { t: getLabel } = useTranslation();
  const classes = useStyles();
  const params = useParams();
  const isMobile = useMobile();
  const id = params?.id;

  useEffect(() => {
    if (id) {
      dispatch(AppActions.getTarotCardDetail(id));
    }

    return () => {
      dispatch(AppActions.appReset());
    };
  }, [id]);

  return (
    <Box className={classes.root}>
      <Container>
        <Stack alignItems="center">
          <TitleDaily />
          <CardInfoHead mt={{ xs: 3, sm: 6.5, lg: 8.375 }} />
          {isMobile ? (
            <SealDrinkTeaBackgroundMobile />
          ) : (
            <Box
              src={ImageAssets.SealDrinkTeaBackground}
              component="img"
              className={classes.imgSeal}
              draggable="false"
            />
          )}
          <Typography className={classes.text}>
            {getLabel("lDownloadOurAppToTryReading")}
          </Typography>
          <Box className={clsx("custom-scrollbar", classes.imageDemoWrapper)}>
            <Box
              src={ImageAssets.DemoReadCardBackground}
              component="img"
              className={classes.imgDemo}
              draggable="false"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default DailyTarotDetail;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    padding: "60px 0",
    backgroundPosition: "top 200px left ",
    backgroundSize: "100% auto",
    background: `no-repeat url(${ImageAssets.DailyTarotBackground})`,

    [theme.breakpoints.down("lg")]: {
      padding: "80px 0 40px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "32px 0 12px",
    },
  },
  cardList: {
    marginTop: 104,
  },
  imgSeal: {
    marginTop: 40,
    width: 606,
    maxWidth: "100%",
    height: "auto",
  },
  text: {
    marginTop: 24,
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "38px",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "24px",
    },
  },
  imageDemoWrapper: {
    marginTop: 70,
    width: "100%",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: 55,
      overflowX: "scroll",
    },
  },
  imgDemo: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: 503,
    },
  },
}));
