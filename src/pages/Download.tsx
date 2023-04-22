import React, { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { HEADER_HEIGHT_IN_PX } from "layouts/MainLayout/components/MLHeader";
import { FOOTER_HEIGHT_IN_PX } from "layouts/MainLayout/components/Footer";
import { useTranslation } from "react-i18next";
import { AppConstant } from "const";
import { ThemeProps } from "models/types";
import { AppInput } from "components/common";

const Download = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // TODO:update when api
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.background} />
      <Container className={classes.container}>
        <Stack alignItems="center" spacing={6}>
          <Typography className={classes.title}>{AppConstant.TITLE}</Typography>
          <Typography className={classes.subtitle}>
            {getLabel("lComingSoonAppStoreAndGooglePlay")}
          </Typography>
          <Stack spacing={2} alignItems="center" maxWidth="100%">
            <Typography fontWeight={500}>{getLabel("lDoYouWantToBeTheFirstPerson")}</Typography>
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
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,
  },
  container: {
    position: "relative",
    maxWidth: 1360,
  },
  background: {
    position: "absolute",
    inset: 0,
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
  },
  subtitle: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "38px",
    background: "linear-gradient(83.8deg, #CAACF2 -0.96%, #9AA2FF 47.01%, #BBD0FF 98.49%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  inputRoot: {
    width: 668,
    maxWidth: "100%",
    borderRadius: 15,
    minHeight: 54,
    background: theme.palette.gradient.main,

    "&:after,&:before": {
      display: "none",
    },
  },
  input: {
    background: theme.palette.common.white,
    margin: 1,
    height: 52,
    width: "calc(100% - 2px)",
    borderRadius: 15,
    padding: "4px 24px",
  },
  button: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: `no-repeat top left / 100% 100% url(${ImageAssets.ArrowButtonBackground})`,
    position: "absolute",
    right: 25,
  },
  img: {
    width: 175,
    height: 157,
  },
}));
