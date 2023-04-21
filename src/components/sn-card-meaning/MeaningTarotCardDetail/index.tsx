import React, { memo } from "react";
import { Box, Stack } from "@mui/material";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import MeaningDeskCardListTitle from "../MeaningDeskCardListTitle";
import KeyMeaning from "./KeyMeaning";
import OverView from "./OverView";
import TarotCardFan from "./TarotCardFan";

const MeaningTarotCardDetail = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack alignItems="center" width="100%">
      <MeaningDeskCardListTitle title="The Fool" />
      <Box
        className={classes.img}
        component="img"
        draggable="false"
        src={ImageAssets.DemoDailyCard}
      />
      <Stack spacing={2} mt={4} mb={5} width="100%">
        <KeyMeaning />
        <OverView title={getLabel("lTheFoolOverview")} description={MOCK_DESC} />
        <OverView title={getLabel("lMessageFromTheFool")} description={MOCK_DESC} />
      </Stack>
      <TarotCardFan />
    </Stack>
  );
};

const MOCK_DESC =
  "The Fool Overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.";

export default memo(MeaningTarotCardDetail);

const useStyles = makeStyles(() => ({
  img: {
    width: 204,
    height: 350,
    marginTop: 32,
  },
}));
