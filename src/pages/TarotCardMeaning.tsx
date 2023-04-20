import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { DeskCardList } from "components/sn-card-meaning";

const TarotCardMeaning = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Box>
      <Container className={classes.container}>
        <Typography className={classes.title}>{getLabel("lTarotCardMeaning")}</Typography>
        <DeskCardList mt={12} />
      </Container>
    </Box>
  );
};

export default TarotCardMeaning;

const useStyles = makeStyles(() => ({
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
