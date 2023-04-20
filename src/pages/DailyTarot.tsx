import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { TarotCardList, TitleDaily } from "components/sn-daily-tarot";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";

const DailyTarot = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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
    backgroundPosition: "top 400px left ",
    backgroundSize: "100% auto",
    background: `no-repeat url(${ImageAssets.DailyTarotBackground})`,
  },
  cardList: {
    marginTop: 104,
  },
}));
