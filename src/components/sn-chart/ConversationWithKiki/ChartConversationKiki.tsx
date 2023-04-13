import React, { memo, useMemo } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { ObjectMultiLanguageProps } from "models";
import ChatBox from "./ChatBox";
import clsx from "clsx";
import QuestionBoxButton from "./QuestionBoxButton";
import {
  BagIcon,
  BallIcon,
  CrownIcon,
  HandIcon,
  HeartIcon,
  PigActiveIcon,
  PigIcon,
} from "components/icons";
import { ThemeProps } from "models/types";

const ChartConversationKiki = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const messageDefault = useMemo(() => getDefaultMessage(getLabel), [getLabel]);
  const questionList = useMemo(() => getListQuestion(getLabel), [getLabel]);

  return (
    <Box className={classes.root}>
      <Stack className={clsx("custom-scrollbar", classes.conversation)} spacing={3.75}>
        {messageDefault.map((item, index) => (
          <ChatBox key={index} message={item} />
        ))}
      </Stack>
      <Box className={classes.footer}>
        <Grid container rowSpacing={3} columnSpacing={9}>
          {questionList.map((item, index) => (
            <Grid item xs={4} className="center-root" key={index}>
              <QuestionBoxButton startIcon={item.icon}>{item.label}</QuestionBoxButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default memo(ChartConversationKiki);

const getListQuestion = (getLabel: (key: string, obj: object) => ObjectMultiLanguageProps) => {
  const objContent = getLabel("objQuestionStep1", { returnObjects: true });

  return [
    {
      label: objContent.lLove,
      icon: <HeartIcon />,
      activeIcon: <HeartIcon />,
    },
    {
      label: objContent.lMoney,
      icon: <PigIcon />,
      activeIcon: <PigActiveIcon />,
    },
    {
      label: objContent.lSelf,
      icon: <CrownIcon />,
      activeIcon: <CrownIcon />,
    },
    {
      label: objContent.lWorkStudy,
      icon: <BagIcon />,
      activeIcon: <BagIcon />,
    },
    {
      label: objContent.lPossibilities,
      icon: <BallIcon />,
      activeIcon: <BallIcon />,
    },
    {
      label: objContent.lNoImGood,
      icon: <HandIcon />,
      activeIcon: <HandIcon />,
    },
  ];
};

const getDefaultMessage = (getLabel: (key: string, obj: object) => ObjectMultiLanguageProps) => {
  const objContent = getLabel("objChatContentDefault", { returnObjects: true });

  return [objContent.lHiThere, objContent.lMyNameIsKiki, objContent.lWhatBringYouHereToday];
};

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    width: 719,
    background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
    filter:
      "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(4px 0px 10px rgba(0, 0, 0, 0.25))",
    borderRadius: 28,
    overflow: "hidden",
  },
  conversation: {
    height: 733,
    padding: "54px 70px",
    overflow: "hidden scroll",
    background: `no-repeat top right / 100% 98% url(${ImageAssets.BackgroundChatTopRight}), white`,
  },
  footer: {
    position: "relative",
    height: 206,
    padding: "50px 74px 0",
    background: `no-repeat center center/ auto url(${ImageAssets.BackgroundFooterChat}), rgba(202, 172, 242, 0.7)`,

    "&:before": {
      position: "absolute",
      content: "''",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.white,
      zIndex: -1,
    },
  },
}));
