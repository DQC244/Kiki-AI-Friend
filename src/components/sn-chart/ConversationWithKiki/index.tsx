import React, { memo, useMemo, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import ChartConversationKiki, { CHOOSE_QUESTION_STEP } from "./ChartConversationKiki";
import { ImageAssets } from "assets";
import clsx from "clsx";

const ConversationWithKiki = ({ imageProps, labelClassName }: ConversationWithKikiProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [currentStep, setCurrentStep] = useState(CHOOSE_QUESTION_STEP.topic);
  const [contentDolphin, setContentDolphin] = useState("");

  const whaleChatText = useMemo(() => {
    setContentDolphin("");
    switch (currentStep) {
      case CHOOSE_QUESTION_STEP.topic:
        return getLabel("lPleaseChooseTheTopic");
      case CHOOSE_QUESTION_STEP.question:
        return getLabel("lPleaseChooseQuestion");
      case CHOOSE_QUESTION_STEP.end:
        return getLabel("lYouCanClickOnTheArrow");
      default:
        return getLabel("lPleaseChooseTheTopic");
    }
  }, [getLabel, currentStep]);

  return (
    <Stack>
      <Typography className={classes.title}>{getLabel("lWantToTryHave")}</Typography>
      <Stack mt={4} direction="row" spacing={18.25} alignItems="flex-end">
        <ChartConversationKiki
          onSetContentDolphin={setContentDolphin}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <Box position="relative">
          <Box className={clsx("center-root", classes.labelWrapper, labelClassName)}>
            <Typography className={classes.label}>{contentDolphin || whaleChatText}</Typography>
          </Box>
          <Box
            component="img"
            src={imageProps?.imageSrc || ImageAssets.BackgroundBirthChartChat}
            className={clsx(classes.img, imageProps?.className)}
            draggable="false"
          />
        </Box>
      </Stack>
    </Stack>
  );
};

type ConversationWithKikiProps = {
  labelClassName?: string;
  imageProps?: {
    className?: string;
    imageSrc?: string;
  };
};

export default memo(ConversationWithKiki);

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "38px",
    color: "#59518C",
    textAlign: "center",
    zIndex: 0,
  },
  img: {
    width: 376,
    height: 524,
    zIndex: 0,
  },
  labelWrapper: {
    position: "absolute",
    top: 0,
    left: 30,
    right: 30,
    height: 105,
    textAlign: "center",
  },
  label: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "22px",
  },
}));
