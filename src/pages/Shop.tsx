import React, { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { SlideShow } from "components/sn-shop";
import { AppInput } from "components/common";
import { useTranslation } from "react-i18next";
import { ThemeProps } from "models/types";
import { useMobile, useResponsive } from "hooks";

const Shop = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const isTablet = useResponsive("between", "sm", "lg");
  const isMobile = useMobile();

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // TODO:update when api
  };

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Stack alignItems="center" spacing={{ xs: 5, lg: 12 }} height="100%">
          <Box className={classes.background} />
          <SlideShow />
          <Stack spacing={3} alignItems="center" position="relative">
            <Typography className={classes.title}>{getLabel("lJoinOurNewsLetters")}</Typography>
            <Typography className={classes.desc}>
              {getLabel("lDoYouWantFirstPersonToExperience")}
            </Typography>
            {isTablet && (
              <>
                <Box
                  component="img"
                  draggable="false"
                  src={ImageAssets.RightShopBackground}
                  className={classes.rightImage}
                />
                <Box
                  component="img"
                  draggable="false"
                  src={ImageAssets.LeftShopBackground}
                  className={classes.leftImage}
                />
              </>
            )}
            <AppInput
              onSubmit={handleSubmit}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder={getLabel("lYourMail")}
            />
            {isMobile && (
              <Box className={classes.imageWrapper}>
                <>
                  <Box
                    component="img"
                    draggable="false"
                    src={ImageAssets.LeftShopBackground}
                    className={classes.leftImageMobile}
                  />
                  <Box
                    component="img"
                    draggable="false"
                    src={ImageAssets.RightShopBackground}
                    className={classes.rightImageMobile}
                  />
                </>
              </Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Shop;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "relative",
    paddingTop: 26,
    paddingBottom: 26,
  },
  container: {
    maxWidth: 1360,

    [theme.breakpoints.down("lg")]: {
      maxWidth: 968,
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
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "38px",
    textAlign: "center",
    zIndex: 0,

    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      lineHeight: "30px",
    },
  },
  desc: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: "22px",
    maxWidth: 600,
    zIndex: 0,
  },
  rightImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 87,
    height: 152,
    transform: "translateX(120%)",
  },
  leftImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 150,
    height: 235,
    transform: "translateX(-100%)",
  },
  imageWrapper: {
    position: "relative",
  },
  rightImageMobile: {
    width: 103,
    height: 159,
    marginLeft: -8,
  },
  leftImageMobile: {
    width: 156,
    height: 220,
  },
}));
