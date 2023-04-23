import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  AIFriendSection,
  AppDemoSection,
  IntroduceSection,
  MysticZoneSection,
  SeeHarmonySection,
} from "components/sn-home";
import { HomeBackground } from "assets/images";
import { ImageAssets } from "assets";
import AnimationRightToLeft from "components/sn-home/AnimationRightToLeft";

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.background} />
      <Container className={classes.container}>
        <Stack spacing={20}>
          <IntroduceSection />
          <AIFriendSection
            // star={
            //   <Box
            //     className={classes.star}
            //     draggable="false"
            //     component="img"
            //     src={ImageAssets.StarList}
            //   />
            // }
            spaceship={
              // <Box
              //   className={classes.spaceship}
              //   draggable="false"
              //   component="img"
              //   src={ImageAssets.Spaceship}
              // />
              // <Lottie
              //   className={classes.animation}
              //   animationData={StartAnimation}
              //   loop={false}
              //   autoplay={true}
              // />
              <Box className={classes.animation}>
                <AnimationRightToLeft />
              </Box>
            }
          />
          <MysticZoneSection
            star={
              <Box
                className={classes.starMystic}
                draggable="false"
                component="img"
                src={ImageAssets.StarList}
              />
            }
            spaceship={
              <Box
                className={classes.spaceshipMystic}
                draggable="false"
                component="img"
                src={ImageAssets.Spaceship}
              />
            }
          />
          <SeeHarmonySection />
        </Stack>
      </Container>
      <Box className={classes.demo}>
        <Container>
          <AppDemoSection />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  animation: {
    // width: 250,
    // height: 188,
    position: "absolute",
    width: 680,
    bottom: -243,
    left: 40,
    transform: "translateX(-100%)",
  },
  background: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    background: `no-repeat top left / 100% auto url(${HomeBackground})`,
    animation: "zoom-in-zoom-out-home 10s linear infinite",
    animationPlayState: "paused",
    "&:hover": {
      animationPlayState: "running",
    },
  },
  container: {
    position: "relative",
    maxWidth: 1360,
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
  spaceshipMystic: {
    position: "absolute",
    width: 250,
    height: 188,
    bottom: -30,
    right: -20,
    transform: "translateX(100%) scaleX(-1)",
  },
  demo: {
    marginTop: 160,
    background: `no-repeat center center / 1920px auto url(${ImageAssets.AppDemoHomeBackgroundSection})`,
  },
}));
