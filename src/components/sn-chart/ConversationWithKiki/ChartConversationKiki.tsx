/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { ReactNode, memo, useMemo, useRef, useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { ObjectMultiLanguageProps } from "models";
import { ArrowIcon, ShowIcon } from "components/icons";
import { ThemeProps } from "models/types";
import QuestionList from "./QuestionList";
import ChatBox from "./ChatBox";
import clsx from "clsx";
import PossibilityMessage from "./PossibilityMessage";
import { AppConstant } from "const";

const ChartConversationKiki = ({
  currentStep,
  setCurrentStep,
  onSetContentDolphin,
}: ChartConversationKikiProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const listMessageRef = useRef<HTMLDivElement>(null);

  const [lastMessage, setLastMessage] = useState("");
  const [message, setMessage] = useState<Array<MessageType>>([]);
  const [currentTopic, setCurrentTopic] = useState<TOPIC_TYPE>();
  const [isShowPanel, setIsShowPanel] = useState(true);

  const messageDefault = useMemo(() => getDefaultMessage(getLabel), [getLabel]);

  const scrollTopElement = (debounce?: number) => {
    setTimeout(() => {
      if (listMessageRef?.current) {
        listMessageRef.current.scrollTop = listMessageRef.current.scrollHeight;
      }
    }, debounce || AppConstant.DEBOUNCE_TIME_IN_MILLISECOND);
  };

  const handleChoosePossibilityTopic = () => {
    setTimeout(() => {
      setMessage((preMessage) => [
        ...preMessage,
        {
          label: "",
          contentHOC: (
            <PossibilityMessage
              onSetContentDolphin={onSetContentDolphin}
              refEl={listMessageRef.current}
            />
          ),
        },
      ]);
      setLastMessage("");
      setIsShowPanel(false);
      scrollTopElement(10);
      onSetContentDolphin(getLabel("lGreatClickOnTheButton"));
    }, AppConstant.DEBOUNCE_TIME_IN_MILLISECOND);
  };

  const onClickQuestion = (
    label: string,
    type: TOPIC_TYPE,
    isBackTopic?: boolean,
    isBackQuestion?: boolean,
    icon?: ReactNode,
  ) => {
    let newMessageObj: MessageType = { label, isMyQuestion: true };
    switch (currentStep) {
      case CHOOSE_QUESTION_STEP.topic:
        newMessageObj = { ...newMessageObj, icon };
        if (type === TOPIC_TYPE.no) {
          // TODO: handle logic choose no im good
          setIsShowPanel(false);
        } else if (type === TOPIC_TYPE.possibilities) {
          handleChoosePossibilityTopic();
        } else {
          setCurrentStep(CHOOSE_QUESTION_STEP.question);
          setCurrentTopic(type);
        }
        break;

      case CHOOSE_QUESTION_STEP.question:
        if (isBackTopic) {
          setCurrentTopic(undefined);
          setCurrentStep(CHOOSE_QUESTION_STEP.topic);
        } else {
          setIsShowPanel(false);
          setCurrentStep(CHOOSE_QUESTION_STEP.end);

          // TODO:call api in here
        }
        break;

      case CHOOSE_QUESTION_STEP.end:
        if (isBackQuestion) {
          setCurrentStep(CHOOSE_QUESTION_STEP.question);
        } else if (isBackTopic) {
          setCurrentTopic(undefined);
          setCurrentStep(CHOOSE_QUESTION_STEP.topic);
        } else {
          setIsShowPanel(false);
        }
        break;

      default:
        break;
    }

    setMessage([...message, newMessageObj]);
    setLastMessage(label);

    scrollTopElement(10);
  };

  return (
    <Box className={classes.root}>
      <Box className={clsx(classes.wrapper, isShowPanel && classes.smallWrapper)}>
        <Stack
          className={clsx("custom-scrollbar", classes.conversation)}
          spacing={3.75}
          ref={listMessageRef}
        >
          {messageDefault.map((item, index) => (
            <ChatBox key={index} message={item} />
          ))}
          {message?.map((item, index) => {
            if (item.contentHOC) {
              return item.contentHOC;
            }
            return (
              <ChatBox
                key={index}
                imageSrc={item.isMyQuestion ? ImageAssets.UserLogo : ""}
                message={item.label}
                startIcon={item?.icon}
              />
            );
          })}
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
            <QuestionList
              typeTopic={currentTopic}
              lastMessage={lastMessage}
              onClickQuestion={onClickQuestion}
              currentStep={currentStep}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export enum CHOOSE_QUESTION_STEP {
  topic,
  question,
  end,
}

export enum TOPIC_TYPE {
  work,
  love,
  self,
  money,
  possibilities,
  no,
}

type MessageType = {
  label: string;
  icon?: ReactNode;
  isMyQuestion?: boolean;
  contentHOC?: ReactNode;
};

type ChartConversationKikiProps = {
  currentStep: CHOOSE_QUESTION_STEP;
  setCurrentStep: (step: CHOOSE_QUESTION_STEP) => void;
  onSetContentDolphin: (message: string) => void;
};

export default memo(ChartConversationKiki);

const getDefaultMessage = (getLabel: (key: string, obj: object) => ObjectMultiLanguageProps) => {
  const objContent = getLabel("objChatContentDefault", { returnObjects: true });

  return [objContent.lHiThere, objContent.lMyNameIsKiki, objContent.lWhatBringYouHereToday];
};

const HEIGHT_FOOTER_IN_PX = 206;
const HEIGHT_IN_PX = 940;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "relative",
    width: 719,
    height: HEIGHT_IN_PX,
    background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), white",
    filter:
      "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(4px 0px 10px rgba(0, 0, 0, 0.25))",
    borderRadius: 28,
    overflow: "hidden",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    background: `no-repeat top 14px right 40px / 155px auto url(${ImageAssets.DolphinImage}), no-repeat bottom 6px left 70px / 155px auto url(${ImageAssets.SealBalloonsImage})`,
    transition: "height 0.75s ease-in-out",
  },
  smallWrapper: {
    height: `calc(100% - ${HEIGHT_FOOTER_IN_PX}px)`,
  },
  conversation: {
    height: "100%",
    padding: "54px 70px",
    overflow: "hidden scroll",
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: HEIGHT_FOOTER_IN_PX,
    backgroundColor: theme.palette.common.white,
    overflow: "hidden",
    transition: "all 0.75s ease-in-out",
    borderRadius: "0 0 28px 28px",
  },
  footer: {
    position: "relative",
    height: HEIGHT_FOOTER_IN_PX,
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
