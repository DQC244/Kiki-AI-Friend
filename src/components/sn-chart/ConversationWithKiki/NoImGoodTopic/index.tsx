import React, { ReactNode, memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { ImageAssets } from "assets";
import { makeStyles } from "@mui/styles";
import ChatBox from "../ChatBox";

const NoImGoodTopic = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [chatList, setChatList] = useState<Array<ChatType>>([]);

  useEffect(() => {
    setChatList([
      { label: getLabel("lImSorryITryImprove") },
      {
        imageContent: (
          <Box className={classes.image} component="img" src={ImageAssets.ImSorryImage} />
        ),
      },
      { label: getLabel("lInsteadDoYouWantToTryOut") },
    ]);
  }, []);
  return (
    <>
      {chatList.map((item, index) => {
        if (item.imageContent) {
          return <ChatBox key={index} contentCustom={item.imageContent} />;
        }
        return <ChatBox key={index} message={item.label} />;
      })}
    </>
  );
};

type ChatType = {
  label?: string;
  imageContent?: ReactNode;
};

export default memo(NoImGoodTopic);

const useStyles = makeStyles(() => ({
  image: {
    width: 219,
    height: 146,
    objectFit: "cover",
  },
}));
