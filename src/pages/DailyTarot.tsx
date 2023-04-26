import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { TarotCardList, TitleDaily } from "components/sn-daily-tarot";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";

const DailyTarot = () => {
  const classes = useStyles();

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

const useStyles = makeStyles(() => ({
  root: {
    padding: "60px 0",
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundPosition: "top 400px left ",
    backgroundSize: "100% auto",
    background: `url(${ImageAssets.DailyTarotBackground})`,

    animation: "zoom-in-zoom-out 7s linear infinite",
    animationPlayState: "paused",

    "&:hover": {
      animationPlayState: "running",
    },
  },
  cardList: {
    marginTop: 104,
  },
}));
