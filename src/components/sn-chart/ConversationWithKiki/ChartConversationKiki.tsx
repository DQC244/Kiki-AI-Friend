/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
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
import { AppConstant, LangConstant } from "const";
import NoImGoodTopic from "./NoImGoodTopic";
import { useSelector } from "react-redux";
import { AppSelector } from "redux-store";
import { useHandleGetAnswerSelf } from "./hooks";
import DelayMessage from "./DelayMessage";

const ChartConversationKiki = ({
  currentStep,
  setCurrentStep,
  onSetContentDolphin,
}: ChartConversationKikiProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const handleGetAnswerSelf = useHandleGetAnswerSelf();

  const chartData = useSelector(AppSelector.getBirthChart);

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

  const handleRefreshChatTopic = () => {
    setLastMessage("");
    setIsShowPanel(false);
    scrollTopElement(10);
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
      onSetContentDolphin(getLabel("lGreatClickOnTheButton"));
      handleRefreshChatTopic();
    }, AppConstant.DEBOUNCE_TIME_IN_MILLISECOND);
  };

  const handleCallQuestion = async (index?: number) => {
    if (currentTopic === TOPIC_TYPE.self && index) {
      const dataEn = {
        city_of_birth: chartData.en?.city_of_birth,
        date_of_birth: chartData.en?.date_of_birth,
        full_name: chartData.en?.full_name,
        nation_of_birth: chartData.en?.nation_of_birth,
        language: LangConstant.DEFAULT_LANG_CODE,
        // stupid api
        question: index,
      };
      const dataVi = {
        city_of_birth: chartData.en?.city_of_birth,
        date_of_birth: chartData.en?.date_of_birth,
        full_name: chartData.en?.full_name,
        nation_of_birth: chartData.en?.nation_of_birth,
        language: "vi",
        // stupid api
        question: index + 3,
      };

      const newMessage = await handleGetAnswerSelf(dataEn, dataVi);

      setMessage((preMessage) => [...preMessage, ...newMessage]);
    }
  };

  const handleChooseNoGood = () => {
    setTimeout(() => {
      setMessage((preMessage) => [...preMessage, { label: "", contentHOC: <NoImGoodTopic /> }]);
      onSetContentDolphin(getLabel("lDownloadOurAppIfYouWant"));
      handleRefreshChatTopic();
    }, AppConstant.DEBOUNCE_TIME_IN_MILLISECOND);
  };

  const onClickQuestion = (
    label: string,
    type: TOPIC_TYPE,
    isBackTopic?: boolean,
    isBackQuestion?: boolean,
    icon?: ReactNode,
    index?: number,
    labelEn?: string,
    labelVi?: string,
  ) => {
    let newMessageObj: MessageType = { labelEn, labelVi, isMyQuestion: true };
    switch (currentStep) {
      case CHOOSE_QUESTION_STEP.topic:
        newMessageObj = { ...newMessageObj, icon };
        if (type === TOPIC_TYPE.no) {
          handleChooseNoGood();
        } else if (type === TOPIC_TYPE.possibilities) {
          handleChoosePossibilityTopic();
        } else {
          setTimeout(() => {
            setMessage((pre) => [
              ...pre,
              {
                labelEn: getLabel("lHereAreSomeTopicsThat", { lng: "en" }),
                labelVi: getLabel("lHereAreSomeTopicsThat", { lng: "vn" }),
              },
            ]);
            scrollTopElement(10);
          }, 1000);
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

          handleCallQuestion(index);
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
          spacing={{ xs: 1.5, lg: 3.75 }}
          ref={listMessageRef}
        >
          {messageDefault.map((item, index) => (
            <ChatBox key={index} message={item} />
          ))}
          {message?.map((item, index) => {
            if (item.contentHOC) {
              return item.contentHOC;
            }
            if (item?.isDelay) {
              return (
                <DelayMessage
                  key={index}
                  waitBeforeShow={(item.orderId || 0) * AppConstant.DEBOUNCE_TIME_IN_MILLISECOND}
                >
                  <ChatBox
                    imageSrc={item.isMyQuestion ? ImageAssets.UserLogo : ""}
                    messageEn={item.labelEn}
                    messageVi={item.labelVi}
                    startIcon={item?.icon}
                  />
                </DelayMessage>
              );
            }
            return (
              <ChatBox
                key={index}
                imageSrc={item.isMyQuestion ? ImageAssets.UserLogo : ""}
                startIcon={item?.icon}
                messageEn={item?.labelEn}
                messageVi={item?.labelVi}
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
  labelEn?: string;
  labelVi?: string;
  icon?: ReactNode;
  isDelay?: boolean;
  orderId?: number;
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
const HEIGHT_IN_TABLET_PX = 700;

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

    [theme.breakpoints.down("lg")]: {
      width: 358,
      height: HEIGHT_IN_TABLET_PX,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  wrapper: {
    width: "100%",
    height: "100%",
    background: `no-repeat top 14px right 40px / 155px auto url(${ImageAssets.DolphinImage}), no-repeat bottom 6px left 70px / 155px auto url(${ImageAssets.SealBalloonsImage})`,
    transition: "height 0.75s ease-in-out",

    [theme.breakpoints.down("lg")]: {
      background: `no-repeat top 4px right 12px / 122px auto url(${ImageAssets.DolphinImage}), no-repeat bottom 6px left 12px / 122px auto url(${ImageAssets.SealBalloonsImage})`,
    },
  },
  smallWrapper: {
    height: `calc(100% - ${HEIGHT_FOOTER_IN_PX}px)`,
  },
  conversation: {
    height: "100%",
    padding: "54px 70px",
    overflow: "hidden scroll",

    [theme.breakpoints.down("lg")]: {
      padding: "24px 12px",
    },
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

    [theme.breakpoints.down("lg")]: {
      padding: "0 40px",
    },
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    right: 6,
    fontSize: 20,
    transform: "translateY(-50%)",

    [theme.breakpoints.down("lg")]: {
      right: 0,
      fontSize: 14,
    },
  },
  showButton: {
    position: "absolute",
    top: "50%",
    left: 6,
    fontSize: 20,
    transform: "translateY(-50%)",

    [theme.breakpoints.down("lg")]: {
      left: 0,
      fontSize: 14,
    },
  },
  hidden: {
    transform: "translateX(calc(100% - 36px))",
    borderRadius: 28,

    [theme.breakpoints.down("lg")]: {
      transform: "translateX(calc(100% - 20px))",
    },
  },
}));
