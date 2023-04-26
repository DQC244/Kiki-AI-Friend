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

const CardInfoHead = (props: StackProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const cardDetail = useSelector(AppSelector.getCardDetail);

  return (
    <Stack direction="row" spacing={26} width="100%" {...props}>
      <Stack spacing={1.75}>
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

const useStyles = makeStyles(() => ({
  card: {
    height: 490,
  },
  cardName: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
    textAlign: "center",
  },
  infoWrapper: {
    justifyContent: "space-between",
    border: "1px solid #000000",
    padding: "35px 16px 35px 26px",
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
  content: {
    fontSize: 20,
    textAlign: "justify",
  },
  linkBtn: {
    minHeight: 60,
  },
}));
