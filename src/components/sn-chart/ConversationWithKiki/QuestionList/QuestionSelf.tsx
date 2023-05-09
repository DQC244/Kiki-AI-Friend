/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useMemo, memo } from "react";
import { CHOOSE_QUESTION_STEP } from "../ChartConversationKiki";
import { ObjectMultiLanguageProps } from "models";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import { QuestionWorkProps } from "./QuestionWork";
import QuestionBoxButton from "./QuestionBoxButton";
import { makeStyles } from "@mui/styles";

const QuestionSelf = ({ onClickQuestion, lastMessage }: QuestionWorkProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const selfTopic = useMemo(() => getSelfTopic(getLabel), [getLabel]);

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 4, lg: 8.375 }}>
      {selfTopic.map((item: any, index: number) => {
        const isLastQuestion = index === selfTopic.length - 1;
        return (
          <Grid className="center-root" item key={index} xs={6}>
            <QuestionBoxButton
              onClickQuestionButton={() =>
                onClickQuestion(item.label, item?.type, isLastQuestion, false, undefined, index + 1)
              }
              startIcon={item?.icon}
              isActive={lastMessage === item.label}
              isItalic={isLastQuestion}
              isBlack={true}
              className={classes.button}
            >
              {item.label}
            </QuestionBoxButton>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default memo(QuestionSelf);

const getSelfTopic = (getLabel: (key: string, obj?: object) => ObjectMultiLanguageProps) => {
  const selfTopicObj = getLabel("objSelfTopic", { returnObjects: true });

  return [
    { label: selfTopicObj.lWhatIsMyNutritionalAdvice, step: CHOOSE_QUESTION_STEP.question },
    { label: selfTopicObj.lWhatIsMyStressManagementTips, step: CHOOSE_QUESTION_STEP.question },
    { label: selfTopicObj.lCanYouTellMyPersonality, step: CHOOSE_QUESTION_STEP.question },
    { label: getLabel("lIveChangedMyMind"), step: CHOOSE_QUESTION_STEP.question },
  ];
};

const useStyles = makeStyles(() => ({
  button: {
    minHeight: 54,
  },
}));
