import React, { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { SlideShow } from "components/sn-shop";
import { AppInput } from "components/common";
import { useTranslation } from "react-i18next";

const Shop = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // TODO:update when api
  };

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Stack alignItems="center" spacing={12} height="100%">
          <Box className={classes.background} />
          <SlideShow />
          <Stack spacing={3} alignItems="center">
            <Typography className={classes.title}>{getLabel("lJoinOurNewsLetters")}</Typography>
            <Typography className={classes.desc}>
              {getLabel("lDoYouWantFirstPersonToExperience")}
            </Typography>
            <AppInput
              onSubmit={handleSubmit}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder={getLabel("lYourMail")}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Shop;

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    paddingTop: 26,
    paddingBottom: 26,
  },
  container: {
    maxWidth: 1360,
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
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "38px",
    textAlign: "center",
    zIndex: 0,
  },
  desc: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: "22px",
    maxWidth: 600,
    zIndex: 0,
  },
}));
