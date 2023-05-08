import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  AIFriendSection,
  AnimationLeftToRight,
  AnimationRightToLeft,
  AppDemoSection,
  GenerateBirthChart,
  IntroduceSection,
  MysticZoneSection,
  SeeHarmonySection,
} from "components/sn-home";
import { HomeBackground } from "assets/images";
import { ImageAssets } from "assets";
import { ThemeProps } from "models/types";
import { useMobile } from "hooks";
import clsx from "clsx";

const Home = () => {
  const classes = useStyles();
  const isMobile = useMobile();

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Stack spacing={{ xs: 7, sm: 11, lg: 20 }}>
          <Box className={classes.background} />
          <IntroduceSection />
          <AIFriendSection
            spaceship={
              <Box className={classes.animation}>
                <AnimationRightToLeft />
              </Box>
            }
          />
          <MysticZoneSection
            spaceship={
              <Box className={classes.animationRightToLeft}>
                <AnimationLeftToRight />
              </Box>
            }
          />
          <SeeHarmonySection />
        </Stack>
      </Container>
      <Box className={classes.demo}>
        <Container
          className={clsx(classes.container, classes.demoContainer)}
          sx={{ overflow: "hidden" }}
        >
          <AppDemoSection />
          {isMobile && <GenerateBirthChart mt={10} mb={5} />}
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "relative",
  },
  animation: {
    position: "absolute",
    width: 680,
    bottom: -243,
    left: 40,
    transform: "translateX(-100%)",

    [theme.breakpoints.down("lg")]: {
      width: 420,
      bottom: -180,
    },
    [theme.breakpoints.down("sm")]: {
      width: 400,
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%) scaleX(-1)",
    },
  },
  background: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    background: `no-repeat top left / 100% auto url(${HomeBackground})`,
    zIndex: 0,
  },
  container: {
    maxWidth: 1360,

    [theme.breakpoints.down("lg")]: {
      maxWidth: 968,
    },
  },
  star: {
    position: "absolute",
    bottom: 0,
    left: 40,
    transform: "translate(-100%, 50%)",
  },
  spaceship: {
    width: 250,
    height: 188,
    position: "absolute",
    top: 364,
    left: -20,
    transform: "translateX(-100%)",
  },
  starMystic: {
    position: "absolute",
    bottom: 100,
    right: 0,
    transform: "translate(100%, 100%) rotate(185deg) scaleX(-1)",
  },
  animationRightToLeft: {
    position: "absolute",
    width: 680,
    bottom: -300,
    right: 8,
    transform: "translateX(100%)",
    zIndex: 1,

    [theme.breakpoints.down("lg")]: {
      width: 420,
      bottom: -180,
    },
    [theme.breakpoints.down("sm")]: {
      width: 400,
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%) scaleX(-1)",
    },
  },
  demo: {
    paddingTop: 160,
    background: `no-repeat center center / 1920px auto url(${ImageAssets.AppDemoHomeBackgroundSection})`,

    [theme.breakpoints.down("lg")]: {
      background: `no-repeat center center / 100% auto url(${ImageAssets.AppDemoHomeBackgroundSection})`,
    },
    [theme.breakpoints.down("sm")]: {
      background: `no-repeat center center / 100% auto url(${ImageAssets.AppDemoHomeBackgroundSectionMobile})`,
    },
  },
  demoContainer: {
    [theme.breakpoints.between("sm", "lg")]: {
      maxWidth: "100%",
    },
  },
}));
