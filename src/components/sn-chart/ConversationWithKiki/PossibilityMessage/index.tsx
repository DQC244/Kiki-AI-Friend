import React, { memo, useMemo, useState } from "react";
import ChatBox from "../ChatBox";
import { useTranslation } from "react-i18next";
import { ImageAssets } from "assets";
import { AppConstant } from "const";
import ChatBoxButton from "./ChatBoxButton";
import DelayMessage from "../DelayMessage";
import StringFormat from "string-format";
import { useSelector } from "react-redux";
import { AppSelector } from "redux-store";

const PossibilityMessage = ({ refEl, onSetContentDolphin }: PossibilityMessageProps) => {
  const { t: getLabel } = useTranslation();

  const chartData = useSelector(AppSelector.getBirthChart);

  const [chatList, setChatList] = useState<Array<ChatType>>([
    {
      messageEn: getLabel("lThinkAboutTheQuestionYouAsk", { lng: "en" }),
      messageVi: getLabel("lThinkAboutTheQuestionYouAsk", { lng: "vn" }),
    },
    {
      messageEn: getLabel("lWhenYouAreDone", { lng: "en" }),
      messageVi: getLabel("lWhenYouAreDone", { lng: "vn" }),
      isAction: true,
    },
  ]);

  const contentList = useMemo(() => getPopupType(getLabel), [getLabel]);

  const randomIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0);

  const handleClose = () => {
    setChatList((preChat) => [
      ...preChat,
      {
        messageEn: StringFormat(getLabel("lJustComeBackAnytimeWith", { lng: "en" }), {
          name: chartData.en?.full_name,
        }),
        messageVi: StringFormat(getLabel("lJustComeBackAnytimeWith", { lng: "vn" }), {
          name: chartData.en?.full_name,
        }),
      },
    ]);
    scrollTopElement(100);
    onSetContentDolphin(getLabel("lDownloadOurAppIfYouWant"));
  };

  const scrollTopElement = (debounce?: number) => {
    setTimeout(() => {
      if (refEl) {
        refEl.scrollTop = refEl.scrollHeight;
      }
    }, debounce || AppConstant.DEBOUNCE_TIME_IN_MILLISECOND);
  };

  const handleClickAnother = () => {
    onSetContentDolphin(getLabel("lGreatClickOnTheButton"));

    setChatList((preChat) => [
      ...preChat,
      {
        messageEn: getLabel("lKeepThinkingAboutAnother", { lng: "en" }),
        messageVi: getLabel("lKeepThinkingAboutAnother", { lng: "vn" }),
      },
    ]);
    scrollTopElement(100);

    setTimeout(() => {
      setChatList((preChat) => [
        ...preChat,
        {
          messageEn: getLabel("lPingMeAgainWhenYouAreReady", { lng: "en" }),
          messageVi: getLabel("lPingMeAgainWhenYouAreReady", { lng: "vn" }),
          isAction: true,
        },
      ]);
      scrollTopElement(100);
    }, AppConstant.DEBOUNCE_TIME_IN_MILLISECOND);
  };

  const handleReadyClick = () => {
    onSetContentDolphin(getLabel("lYouCanThinkAboutAnotherPossibility"));
  };

  return (
    <>
      {chatList.map((item, index) => {
        if (item.isAction) {
          return (
            <DelayMessage key={index} waitBeforeShow={AppConstant.DEBOUNCE_TIME_IN_MILLISECOND}>
              <ChatBox
                key={index}
                messageCustom={
                  <ChatBoxButton
                    randomIndex={randomIndex}
                    label={contentList[randomIndex].label}
                    imageSrc={contentList[randomIndex].image}
                    messageEn={item.messageEn}
                    messageVi={item.messageVi}
                    onClickAnother={handleClickAnother}
                    onClose={handleClose}
                    onReadyClick={handleReadyClick}
                  />
                }
              />
            </DelayMessage>
          );
        }
        return (
          <DelayMessage key={index} waitBeforeShow={0}>
            <ChatBox key={index} messageEn={item.messageEn} messageVi={item.messageVi} />
          </DelayMessage>
        );
      })}
    </>
  );
};

type ChatType = {
  messageEn?: string;
  messageVi?: string;
  isAction?: boolean;
};

type PossibilityMessageProps = {
  refEl: HTMLDivElement | null;
  onSetContentDolphin: (text: string) => void;
};

export default memo(PossibilityMessage);

const getPopupType = (getLabel: (key: string) => string) => [
  { label: getLabel("lJustADayDream"), image: ImageAssets.PopupBackground },
  { label: getLabel("lJustGoIt"), image: ImageAssets.YesPopupBackground },
  { label: getLabel("lItNotRightTime"), image: ImageAssets.MaybePopupBackground },
];
