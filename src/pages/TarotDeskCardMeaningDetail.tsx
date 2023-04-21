import React from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MeaningDeskCardList } from "components/sn-card-meaning";
import { ImageAssets } from "assets";

const TarotCardMeaning = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <MeaningDeskCardList />
      </Container>
    </Box>
  );
};

export default TarotCardMeaning;

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: 120,
    background: `no-repeat top left / 100% auto url(${ImageAssets.CardMeaningBackground})`,
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
