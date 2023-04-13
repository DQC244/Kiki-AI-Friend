import React, { memo, useMemo } from "react";
import { Box, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import { ObjectMultiLanguageProps } from "models";
import ChatBox from "./ChatBox";
import clsx from "clsx";

const ChartConversationKiki = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const messageDefault = useMemo(() => getDefaultMessage(getLabel), [getLabel]);

  return (
    <Box className={classes.root}>
      <Stack className={clsx("custom-scrollbar", classes.conversation)} spacing={3.75}>
        {messageDefault.map((item, index) => (
          <ChatBox key={index} message={item} />
        ))}
      </Stack>
      <Box className={classes.footer}></Box>
    </Box>
  );
};

export default memo(ChartConversationKiki);

const getDefaultMessage = (getLabel: (key: string, obj: object) => ObjectMultiLanguageProps) => {
  const objContent = getLabel("objChatContentDefault", { returnObjects: true });

  return [objContent.lHiThere, objContent.lMyNameIsKiki, objContent.lWhatBringYouHereToday];
};

const useStyles = makeStyles(() => ({
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
    height: 206,
    background: `no-repeat center center/ auto url(${ImageAssets.BackgroundFooterChat}), rgba(202, 172, 242, 0.7)`,
  },
}));
