import React, { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
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
import { useTranslation } from "react-i18next";
import { AppConstant } from "const";
import { ThemeProps } from "models/types";
import { AppInput, AppTrans } from "components/common";
import clsx from "clsx";
import { useMobile } from "hooks";

const Download = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const isMobile = useMobile();

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // TODO:update when api
  };

  return (
    <Box className={classes.root}>
      <Container className={clsx("center-root", classes.container)}>
        <Stack alignItems="center" spacing={{ xs: 1, sm: 6 }} height="100%" maxWidth="100%">
          <Box className={classes.background} />
          <Typography className={classes.title}>{AppConstant.TITLE}</Typography>
          {isMobile ? (
            <Typography className={classes.text}>
              {getLabel("lWelcomeToTheFantasyWorld")}
            </Typography>
          ) : (
            <Typography className={classes.subtitle}>
              {getLabel("lComingSoonAppStoreAndGooglePlay")}
            </Typography>
          )}
          <Stack spacing={2} alignItems="center" maxWidth="100%" zIndex={1}>
            <Typography className={classes.textDownload}>
              <AppTrans
                i18nKey={getLabel("lDoYouWantToBeTheFirstPerson", { count: isMobile ? 0 : 1 })}
              />
            </Typography>
            <AppInput
              onSubmit={handleSubmit}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder={getLabel("lYourMail")}
            />
          </Stack>

          <Box
            component="img"
            src={ImageAssets.SealDownLoadImage}
            className={classes.img}
            draggable="false"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Download;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "relative",
  },
  container: {
    maxWidth: 1360,
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,

    [theme.breakpoints.down("lg")]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT_TABLET_IN_PX + FOOTER_HEIGHT_TABLET_IN_PX}px)`,
    },

    [theme.breakpoints.down("sm")]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT_MOBILE_IN_PX + FOOTER_HEIGHT_MOBILE_IN_PX}px)`,
    },
  },
  background: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
    background: `no-repeat top left / 100% auto url(${ImageAssets.HomeBackground})`,
    animation: "zoom-in-zoom-out-home 10s linear infinite",
    animationPlayState: "paused",
    "&:hover": {
      animationPlayState: "running",
    },
  },
  title: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 90,
    lineHeight: "98px",
    zIndex: 1,

    [theme.breakpoints.down("lg")]: {
      fontSize: 57,
      lineHeight: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      lineHeight: "30px",
    },
  },
  subtitle: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 30,
    zIndex: 1,
    lineHeight: "38px",
    background: "linear-gradient(83.8deg, #CAACF2 -0.96%, #9AA2FF 47.01%, #BBD0FF 98.49%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  input: {
    background: theme.palette.common.white,
    margin: 1,
    height: 52,
    width: "calc(100% - 2px)",
    borderRadius: 15,
    padding: "4px 24px",
  },
  img: {
    width: 175,
    height: 157,
    zIndex: 1,

    [theme.breakpoints.down("sm")]: {
      marginTop: "54px !important",
    },
  },
  text: {
    position: "relative",
    textAlign: "center",
    fontSize: 12,
    lineHeight: "20px",
    marginBottom: "48px !important",
    zIndex: 1,
  },
  textDownload: {
    fontWeight: 500,
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
      lineHeight: "19px",
      fontWeight: 400,
    },
  },
}));
