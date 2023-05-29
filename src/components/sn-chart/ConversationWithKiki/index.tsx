import React, { memo, useMemo, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import ChartConversationKiki, { CHOOSE_QUESTION_STEP } from "./ChartConversationKiki";
import { ImageAssets } from "assets";
import clsx from "clsx";
import { useMobile } from "hooks";
import { ThemeProps } from "models/types";

const ConversationWithKiki = ({ imageProps, labelClassName }: ConversationWithKikiProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const isMobile = useMobile();

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
      <Typography className={classes.title}>
        {getLabel("lWantToTryHave", { count: isMobile ? 0 : 1 })}
      </Typography>
      <Stack
        mt={4}
        direction="row"
        spacing={{ xs: 0, lg: 18.25 }}
        alignItems="flex-end"
        justifyContent={{ xs: "space-between", lg: "flex-start" }}
      >
        <ChartConversationKiki
          onSetContentDolphin={setContentDolphin}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        {!isMobile && (
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
        )}
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

const useStyles = makeStyles((theme: ThemeProps) => ({
  title: {
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "38px",
    color: "#59518C",
    textAlign: "center",
    zIndex: 0,

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "24px",
      color: theme.palette.common.black,
    },
  },
  img: {
    width: 376,
    height: 524,
    zIndex: 0,

    [theme.breakpoints.down("lg")]: {
      width: 368,
      height: 512,
    },
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
