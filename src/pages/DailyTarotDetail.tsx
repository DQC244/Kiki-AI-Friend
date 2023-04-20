import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { TitleDaily, CardInfoHead } from "components/sn-daily-tarot";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";

const DailyTarotDetail = () => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Stack alignItems="center">
          <TitleDaily />
          <CardInfoHead mt={8.375} />
          <Box
            src={ImageAssets.SealDrinkTeaBackground}
            component="img"
            className={classes.imgSeal}
            draggable="false"
          />
          <Typography className={classes.text}>
            {getLabel("lDownloadOurAppToTryReading")}
          </Typography>
          <Box
            src={ImageAssets.DemoReadCardBackground}
            component="img"
            className={classes.imgDemo}
            draggable="false"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default DailyTarotDetail;

const useStyles = makeStyles(() => ({
  root: {
    padding: "60px 0",
    backgroundPosition: "top 200px left ",
    backgroundSize: "100% auto",
    background: `no-repeat url(${ImageAssets.DailyTarotBackground})`,
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
  },
  imgDemo: {
    marginTop: 70,
    width: "100%",
    height: "auto",
  },
}));
