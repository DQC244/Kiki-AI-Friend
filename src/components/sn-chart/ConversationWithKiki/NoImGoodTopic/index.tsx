import React, { ReactNode, memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { ImageAssets } from "assets";
import { makeStyles } from "@mui/styles";
import { AppConstant } from "const";
import ChatBox from "../ChatBox";
import DelayMessage from "../DelayMessage";

const NoImGoodTopic = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [chatList, setChatList] = useState<Array<ChatType>>([]);

  useEffect(() => {
    setChatList([
      {
        labelEn: getLabel("lImSorryITryImprove", { lng: "en" }),
        labelVi: getLabel("lImSorryITryImprove", { lng: "vn" }),
      },
      {
        imageContentEn: (
          <Box className={classes.image} component="img" src={ImageAssets.ImSorryImageEN} />
        ),
        imageContentVi: (
          <Box className={classes.image} component="img" src={ImageAssets.ImSorryImage} />
        ),
      },
      {
        labelEn: getLabel("lInsteadDoYouWantToTryOut", { lng: "en" }),
        labelVi: getLabel("lInsteadDoYouWantToTryOut", { lng: "vn" }),
      },
    ]);
  }, []);
  return (
    <>
      {chatList.map((item, index) => {
        if (item.imageContentEn) {
          return (
            <DelayMessage
              key={index}
              waitBeforeShow={AppConstant.DEBOUNCE_TIME_IN_MILLISECOND * index}
            >
              <ChatBox
                key={index}
                contentCustomEn={item.imageContentEn}
                contentCustomVi={item.imageContentVi}
              />
            </DelayMessage>
          );
        }
        return (
          <DelayMessage
            key={index}
            waitBeforeShow={AppConstant.DEBOUNCE_TIME_IN_MILLISECOND * index}
          >
            <ChatBox key={index} messageEn={item.labelEn} messageVi={item.labelVi} />
          </DelayMessage>
        );
      })}
    </>
  );
};

type ChatType = {
  labelEn?: string;
  labelVi?: string;
  imageContentEn?: ReactNode;
  imageContentVi?: ReactNode;
};

export default memo(NoImGoodTopic);

const useStyles = makeStyles(() => ({
  image: {
    width: 219,
    height: 146,
    objectFit: "cover",
  },
}));
