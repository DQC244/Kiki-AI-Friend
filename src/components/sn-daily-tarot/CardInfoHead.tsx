import { Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import TarotCard from "./TarotCardList/TarotCard";
import { AppGradientButton } from "components/common";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { StackProps } from "@mui/system";
import { PathConstant } from "const";

const CardInfoHead = (props: StackProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack direction="row" spacing={26} width="100%" {...props}>
      <Stack spacing={1.75}>
        <TarotCard
          className={classes.card}
          isShowFront
          cardBackground={ImageAssets.TarotCardDailyBackground}
        />
        <Typography className={classes.cardName}>10 of cups</Typography>
      </Stack>
      <Stack flex={1} className={classes.infoWrapper} spacing={2}>
        <Typography className={classes.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
          est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
          lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet
          feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante
          pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
          bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum
          tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a
          convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
          Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
          magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet
          magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget
          mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis
          venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
        </Typography>
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
