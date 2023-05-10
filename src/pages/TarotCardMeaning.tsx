import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { DeskCardList } from "components/sn-card-meaning";
import { ImageAssets } from "assets";
import { useMobile } from "hooks";
import { ThemeProps } from "models/types";

const TarotCardMeaning = () => {
  const classes = useStyles();
  const isMobile = useMobile();
  const { t: getLabel } = useTranslation();

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.title}>{getLabel("lTarotCardMeaning")}</Typography>
        {isMobile && (
          <Typography className={classes.desc}>{getLabel("lTarotCardMeaningDesc")}</Typography>
        )}
        <DeskCardList mt={{ xs: 2, sm: 12 }} />
      </Container>
    </Box>
  );
};

export default TarotCardMeaning;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    paddingBottom: 120,
    background: `no-repeat top left / 100% auto url(${ImageAssets.CardMeaningBackground})`,

    [theme.breakpoints.down("sm")]: {
      paddingBottom: 14,
    },
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

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "24px",
      marginTop: 16,
    },
  },
  desc: {
    fontSize: 12,
    lineHeight: "20px",
    textAlign: "center",
  },
}));
