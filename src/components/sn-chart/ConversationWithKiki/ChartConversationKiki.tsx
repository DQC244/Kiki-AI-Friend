/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { memo, useMemo, useRef, useState } from "react";
import { Box, Grid, IconButton, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { ObjectMultiLanguageProps } from "models";
import ChatBox from "./ChatBox";
import clsx from "clsx";
import QuestionBoxButton from "./QuestionBoxButton";
import {
  ArrowIcon,
  BagIcon,
  BallIcon,
  CrownIcon,
  HandIcon,
  HeartIcon,
  PigActiveIcon,
  PigIcon,
  ShowIcon,
} from "components/icons";
import { ThemeProps } from "models/types";

const ChartConversationKiki = ({ currentStep, setCurrentStep }: ChartConversationKikiProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const listMessageRef = useRef<HTMLDivElement>(null);

  const [lastMessage, setLastMessage] = useState("");
  const [message, setMessage] = useState<Array<MessageType>>([]);
  const [isShowPanel, setIsShowPanel] = useState(true);
  const [currentTopic, setCurrentTopic] = useState<TOPIC_TYPE>();

  const {
    messageDefault,
    questionListTopic,
    workTopic,
    loveTopic,
    selfTopic,
    moneyTopic,
    endTopic,
  } = useMemo(() => {
    return {
      messageDefault: getDefaultMessage(getLabel),
      questionListTopic: getListQuestion(getLabel),
      workTopic: getWorkTopic(getLabel),
      loveTopic: getLoveTopic(getLabel),
      selfTopic: getSelfTopic(getLabel),
      moneyTopic: getMoneyTopic(getLabel),
      endTopic: getEndTopic(getLabel),
    };
  }, [getLabel]);

  const getQuestionOfTopic = (type?: TOPIC_TYPE) => {
    switch (type) {
      case TOPIC_TYPE.love:
        return loveTopic;
      case TOPIC_TYPE.money:
        return moneyTopic;
      case TOPIC_TYPE.self:
        return selfTopic;
      case TOPIC_TYPE.work:
        return workTopic;
      case TOPIC_TYPE.no:
        return endTopic;
      // case TOPIC_TYPE.possibilities:
      //   return ;
      // TODO:update later
      default:
        return [];
    }
  };

  const [questionList, setQuestionList] = useState<any>(questionListTopic);

  const onClickQuestion = (label: string, index: number, type?: TOPIC_TYPE) => {
    switch (currentStep) {
      case CHOOSE_QUESTION_STEP.topic:
        if (type === TOPIC_TYPE.no) {
          setIsShowPanel(false);
        } else {
          setCurrentTopic(type);
          setCurrentStep(CHOOSE_QUESTION_STEP.question);
          setQuestionList(getQuestionOfTopic(type));
        }
        break;

      case CHOOSE_QUESTION_STEP.question:
        setIsShowPanel(false);
        setCurrentStep(CHOOSE_QUESTION_STEP.end);
        setQuestionList(endTopic);

        // TODO:call api in here
        break;

      case CHOOSE_QUESTION_STEP.end:
        if (index === 0) {
          setCurrentStep(CHOOSE_QUESTION_STEP.question);
          setQuestionList(getQuestionOfTopic(currentTopic));
        } else if (index === 1) {
          setCurrentStep(CHOOSE_QUESTION_STEP.topic);
          setQuestionList(questionListTopic);
        } else {
          setIsShowPanel(false);
        }
        break;

      default:
        break;
    }
    setMessage([...message, { label, isMyQuestion: true }]);
    setLastMessage(label);

    setTimeout(() => {
      if (listMessageRef?.current) {
        listMessageRef.current.scrollTop = listMessageRef.current.scrollHeight;
      }
    }, 20);
  };

  return (
    <Box className={classes.root}>
      <Stack
        className={clsx("custom-scrollbar", classes.conversation)}
        spacing={3.75}
        ref={listMessageRef}
      >
        {messageDefault.map((item, index) => (
          <ChatBox key={index} message={item} />
        ))}
        {message?.map((item, index) => (
          <ChatBox
            key={index}
            imageSrc={item.isMyQuestion ? ImageAssets.UserLogo : ""}
            message={item.label}
          />
        ))}
      </Stack>
      <Stack className={clsx(classes.footerContainer, !isShowPanel && classes.hidden)}>
        <Box className={clsx("center-root", classes.footer)}>
          <IconButton
            className={classes.arrowButton}
            size="small"
            onClick={() => setIsShowPanel(false)}
          >
            <ArrowIcon />
          </IconButton>
          <IconButton
            className={classes.showButton}
            size="small"
            onClick={() => setIsShowPanel(true)}
          >
            <ShowIcon />
          </IconButton>
          <Grid container rowSpacing={2} columnSpacing={1}>
            {questionList.map((item: any, index: number) => (
              <Grid
                className="center-root"
                item
                xs={getLargeEleRatio(questionList.length)}
                key={index}
              >
                <QuestionBoxButton
                  onClickQuestionButton={() => onClickQuestion(item.label, index, item?.type)}
                  startIcon={item?.icon}
                  isActive={lastMessage === item.label}
                >
                  {item.label}
                </QuestionBoxButton>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export enum CHOOSE_QUESTION_STEP {
  topic,
  question,
  end,
}

enum TOPIC_TYPE {
  work,
  love,
  self,
  money,
  possibilities,
  no,
}

type MessageType = {
  label: string;
  isMyQuestion?: boolean;
};

type ChartConversationKikiProps = {
  currentStep: CHOOSE_QUESTION_STEP;
  setCurrentStep: (step: CHOOSE_QUESTION_STEP) => void;
};

export default memo(ChartConversationKiki);

const getLargeEleRatio = (total: number) => {
  if (total > 4) return 4;
  if (total === 4) return 6;
  if (total < 4) return 12;
};

const getListQuestion = (getLabel: (key: string, obj: object) => ObjectMultiLanguageProps) => {
  const objContent = getLabel("objQuestionStep1", { returnObjects: true });

  return [
    {
      label: objContent.lLove,
      icon: <HeartIcon />,
      activeIcon: <HeartIcon />,
      step: CHOOSE_QUESTION_STEP.topic,
      type: TOPIC_TYPE.love,
    },
    {
      label: objContent.lMoney,
      icon: <PigIcon />,
      activeIcon: <PigActiveIcon />,
      step: CHOOSE_QUESTION_STEP.topic,
      type: TOPIC_TYPE.money,
    },
    {
      label: objContent.lSelf,
      icon: <CrownIcon />,
      activeIcon: <CrownIcon />,
      step: CHOOSE_QUESTION_STEP.topic,
      type: TOPIC_TYPE.self,
    },
    {
      label: objContent.lWorkStudy,
      icon: <BagIcon />,
      activeIcon: <BagIcon />,
      step: CHOOSE_QUESTION_STEP.topic,
      type: TOPIC_TYPE.work,
    },
    {
      label: objContent.lPossibilities,
      icon: <BallIcon />,
      activeIcon: <BallIcon />,
      step: CHOOSE_QUESTION_STEP.topic,
      type: TOPIC_TYPE.possibilities,
    },
    {
      label: objContent.lNoImGood,
      icon: <HandIcon />,
      activeIcon: <HandIcon />,
      step: CHOOSE_QUESTION_STEP.topic,
      type: TOPIC_TYPE.no,
    },
  ];
};

const getWorkTopic = (getLabel: (key: string, obj?: object) => ObjectMultiLanguageProps) => {
  const workTopicObj = getLabel("objWorkTopic", { returnObjects: true });

  return [
    { label: workTopicObj.lWhatCareersSuitMeTheMost, step: CHOOSE_QUESTION_STEP.question },
    { label: workTopicObj.lAnyNewOpportunity, step: CHOOSE_QUESTION_STEP.question },
    {
      label: workTopicObj.lShouldIStart,

      step: CHOOSE_QUESTION_STEP.question,
    },
    { label: workTopicObj.lShouldIPursue, step: CHOOSE_QUESTION_STEP.question },
    { label: getLabel("lIveChangedMyMind"), step: CHOOSE_QUESTION_STEP.question },
  ];
};

const getLoveTopic = (getLabel: (key: string, obj?: object) => ObjectMultiLanguageProps) => {
  const loveTopicObj = getLabel("objLoveTopic", { returnObjects: true });

  return [
    { label: loveTopicObj.lTellMeAbout, step: CHOOSE_QUESTION_STEP.question },
    { label: loveTopicObj.lSignOfMyNextLove, step: CHOOSE_QUESTION_STEP.question },
    { label: loveTopicObj.lWhatIsMyIdealization, step: CHOOSE_QUESTION_STEP.question },
    { label: getLabel("lIveChangedMyMind"), step: CHOOSE_QUESTION_STEP.question },
  ];
};

const getSelfTopic = (getLabel: (key: string, obj?: object) => ObjectMultiLanguageProps) => {
  const selfTopicObj = getLabel("objSelfTopic", { returnObjects: true });

  return [
    { label: selfTopicObj.lWhatIsMyNutritionalAdvice, step: CHOOSE_QUESTION_STEP.question },
    { label: selfTopicObj.lWhatIsMyStressManagementTips, step: CHOOSE_QUESTION_STEP.question },
    { label: selfTopicObj.lCanYouTellMyPersonality, step: CHOOSE_QUESTION_STEP.question },
    { label: getLabel("lIveChangedMyMind"), step: CHOOSE_QUESTION_STEP.question },
  ];
};

const getMoneyTopic = (getLabel: (key: string, obj?: object) => ObjectMultiLanguageProps) => {
  const moneyTopicObj = getLabel("objMoneyTopic", { returnObjects: true });

  return [
    { label: moneyTopicObj.lWhereCanIGrow, step: CHOOSE_QUESTION_STEP.question },
    { label: getLabel("lIveChangedMyMind"), step: CHOOSE_QUESTION_STEP.question },
  ];
};

const getEndTopic = (getLabel: (key: string, obj?: object) => ObjectMultiLanguageProps) => {
  const topicObj = getLabel("objEndTopic", { returnObjects: true });

  return [
    {
      label: topicObj.lAskAnotherQuestion,
      step: CHOOSE_QUESTION_STEP.end,
    },
    { label: topicObj.lBackToOtherMainTopics, step: CHOOSE_QUESTION_STEP.end },
    { label: topicObj.lEndConversation, step: CHOOSE_QUESTION_STEP.end },
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
    height: 940,
    padding: "54px 70px",
    overflow: "hidden scroll",
    background: `no-repeat top right / 100% 725px url(${ImageAssets.BackgroundChatTopRight}), white`,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 206,
    backgroundColor: theme.palette.common.white,
    overflow: "hidden",
    transition: "all 0.25s ease-in-out",
    borderRadius: "0 0 28px 28px",
  },
  footer: {
    position: "relative",
    height: 206,
    width: "100%",
    padding: "0 44px",
    background: `no-repeat center center/ auto url(${ImageAssets.BackgroundFooterChat}), rgba(202, 172, 242, 0.7)`,
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    right: 6,
    fontSize: 20,
    transform: "translateY(-50%)",
  },
  showButton: {
    position: "absolute",
    top: "50%",
    left: 6,
    fontSize: 20,
    transform: "translateY(-50%)",
  },
  hidden: {
    transform: "translateX(calc(100% - 36px))",
    borderRadius: 28,
  },
}));
