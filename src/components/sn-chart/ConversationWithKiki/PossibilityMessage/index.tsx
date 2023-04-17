import React, { memo, useMemo, useState } from "react";
import ChatBox from "../ChatBox";
import { useTranslation } from "react-i18next";
import { ImageAssets } from "assets";
import { AppConstant } from "const";
import ChatBoxButton from "./ChatBoxButton";

const PossibilityMessage = ({ refEl, onSetContentDolphin }: PossibilityMessageProps) => {
  const { t: getLabel } = useTranslation();

  const [chatList, setChatList] = useState<Array<ChatType>>([
    { message: getLabel("lThinkAboutTheQuestionYouAsk") },
    { message: getLabel("lWhenYouAreDone"), isAction: true },
  ]);

  const contentList = useMemo(() => getPopupType(getLabel), [getLabel]);

  const randomIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0);

  const handleClose = () => {
    setChatList((preChat) => [...preChat, { message: getLabel("lJustComeBackAnytimeWith") }]);
    scrollTopElement(10);
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

    setChatList((preChat) => [...preChat, { message: getLabel("lKeepThinkingAboutAnother") }]);
    scrollTopElement(10);

    setTimeout(() => {
      setChatList((preChat) => [
        ...preChat,
        { message: getLabel("lPingMeAgainWhenYouAreReady"), isAction: true },
      ]);
      scrollTopElement(10);
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
            <ChatBox
              key={index}
              messageCustom={
                // <Stack spacing={1} justifyContent="flex-start">
                //   {isOpenPopup && (
                //     <ThinkPopup
                //       onClickAnother={handleClickAnother}
                //       message={contentList[randomIndex].label}
                //       imageSrc={contentList[randomIndex].image}
                //       onClose={handleClose}
                //     />
                //   )}
                //   <Typography className={classes.text}>{item.message}</Typography>
                //   <Box>
                //     <Button onClick={handleReadyClick} className={classes.button}>
                //       {getLabel("lImReady")}
                //     </Button>
                //   </Box>
                // </Stack>
                <ChatBoxButton
                  label={contentList[randomIndex].label}
                  imageSrc={contentList[randomIndex].image}
                  message={item.message}
                  onClickAnother={handleClickAnother}
                  onClose={handleClose}
                  onReadyClick={handleReadyClick}
                />
              }
            />
          );
        }
        return <ChatBox key={index} message={item.message} />;
      })}
    </>
  );
};

type ChatType = {
  message?: string;
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
