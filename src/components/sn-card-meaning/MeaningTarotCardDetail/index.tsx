import React, { memo, useMemo } from "react";
import { Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import MeaningDeskCardListTitle from "../MeaningDeskCardListTitle";
import KeyMeaning from "./KeyMeaning";
import OverView from "./OverView";
import TarotCardFan from "./TarotCardFan";
import { useSelector } from "react-redux";
import { AppSelector } from "redux-store";
import StringFormat from "string-format";
import { ApiConstant, LangConstant } from "const";
import { ThemeProps } from "models/types";

const MeaningTarotCardDetail = () => {
  const classes = useStyles();
  const { t: getLabel, i18n } = useTranslation();

  const { en: cardDetailEn, vi: cardDetailVi } = useSelector(AppSelector.getCardDetail);

  const cardDetail = useMemo(() => {
    if (i18n.language === LangConstant.DEFAULT_LANG_CODE) {
      return cardDetailEn;
    }
    return cardDetailVi;
  }, [i18n.language, cardDetailEn, cardDetailVi]);

  return (
    <Stack alignItems="center" width="100%">
      <MeaningDeskCardListTitle title={cardDetail?.card_name} />
      {cardDetail?.id && (
        <Box
          className={classes.img}
          component="img"
          draggable="false"
          src={StringFormat(ApiConstant.URL_IMAGE_ID, { id: cardDetail?.id })}
        />
      )}
      <Stack spacing={2} mt={{ xs: 2, sm: 4 }} mb={{ xs: 2, sm: 5 }} width="100%">
        <KeyMeaning data={cardDetail} />
        <OverView title={getLabel("lTheFoolOverview")} description={cardDetail?.overview} />
        <OverView title={getLabel("lMessageFromTheFool")} description={cardDetail?.meaning} />
      </Stack>
      <TarotCardFan />
    </Stack>
  );
};

export default memo(MeaningTarotCardDetail);

const useStyles = makeStyles((theme: ThemeProps) => ({
  img: {
    width: 204,
    height: 350,
    marginTop: 32,

    [theme.breakpoints.down("sm")]: {
      width: 139,
      height: 238,
    },
  },
}));
