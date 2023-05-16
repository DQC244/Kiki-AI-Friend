import { Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import TarotCard from "./TarotCardList/TarotCard";
import { AppGradientButton } from "components/common";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { StackProps } from "@mui/system";
import { ApiConstant, PathConstant } from "const";
import { useSelector } from "react-redux";
import { AppSelector } from "redux-store";
import StringFormat from "string-format";
import { ThemeProps } from "models/types";

const CardInfoHead = (props: StackProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const cardDetail = useSelector(AppSelector.getCardDetail);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2, sm: 14, lg: 26 }}
      width="100%"
      {...props}
    >
      <Stack alignItems="center">
        <TarotCard
          className={classes.card}
          cardBackground={
            cardDetail?.meaning
              ? StringFormat(ApiConstant.URL_IMAGE_ID, { id: cardDetail?.id })
              : ""
          }
        />
        <Typography className={classes.cardName}>{cardDetail?.card_name}</Typography>
      </Stack>
      <Stack flex={1} className={classes.infoWrapper} spacing={2}>
        <Typography className={classes.content}>{cardDetail?.meaning}</Typography>
        <Stack alignItems="flex-end">
          <AppGradientButton
            className={classes.linkBtn}
            href={PathConstant.DAILY_TAROT}
            label={getLabel("lRedrawACard")}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default memo(CardInfoHead);

const useStyles = makeStyles((theme: ThemeProps) => ({
  card: {
    height: 490,

    [theme.breakpoints.down("lg")]: {
      height: 400,
      width: 223,
    },
    [theme.breakpoints.down("sm")]: {
      height: 268,
      width: 151,
    },
  },
  cardName: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
    textAlign: "center",

    [theme.breakpoints.down("lg")]: {
      fontSize: 19,
      lineHeight: "26px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
      lineHeight: "20px",
    },
  },
  infoWrapper: {
    justifyContent: "space-between",
    border: "1px solid #000000",
    padding: "35px 16px 35px 26px",
    borderRadius: 20,
    backgroundColor: "#ffffff",

    [theme.breakpoints.down("lg")]: {
      padding: "20px 16px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 16,
    },
  },
  content: {
    fontSize: 20,
    textAlign: "justify",

    [theme.breakpoints.down("lg")]: {
      fontSize: 14,
      lineHeight: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
  linkBtn: {
    minHeight: 60,

    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      lineHeight: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "30px",
      minWidth: "unset",
      minHeight: "unset",
      borderRadius: 15,
      padding: "7px 18px",
    },
  },
}));
