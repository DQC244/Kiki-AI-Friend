import React, { memo } from "react";
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
import { ApiConstant } from "const";

const MeaningTarotCardDetail = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const cardDetail = useSelector(AppSelector.getCardDetail);

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
      <Stack spacing={2} mt={4} mb={5} width="100%">
        <KeyMeaning data={cardDetail} />
        <OverView title={getLabel("lTheFoolOverview")} description={cardDetail?.overview} />
        <OverView title={getLabel("lMessageFromTheFool")} description={cardDetail?.meaning} />
      </Stack>
      <TarotCardFan />
    </Stack>
  );
};

export default memo(MeaningTarotCardDetail);

const useStyles = makeStyles(() => ({
  img: {
    width: 204,
    height: 350,
    marginTop: 32,
  },
}));
