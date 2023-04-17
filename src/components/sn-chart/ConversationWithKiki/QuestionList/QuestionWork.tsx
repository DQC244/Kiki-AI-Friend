/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useMemo, memo } from "react";
import { CHOOSE_QUESTION_STEP } from "../ChartConversationKiki";
import { ObjectMultiLanguageProps } from "models";
import { useTranslation } from "react-i18next";
import { Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { OnClickQuestionProps } from ".";
import QuestionBoxButton from "./QuestionBoxButton";

const QuestionWork = ({ onClickQuestion, lastMessage }: QuestionWorkProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const workTopic = useMemo(() => getWorkTopic(getLabel), [getLabel]);

  return (
    <Stack spacing={2}>
      <Grid container columnSpacing={1}>
        {workTopic.slice(0, 3).map((item: any, index: number) => (
          <Grid className="center-root" item key={index} xs={4}>
            <QuestionBoxButton
              className={classes.button}
              onClickQuestionButton={() => onClickQuestion(item.label, item?.type)}
              startIcon={item?.icon}
              isActive={lastMessage === item.label}
              isBlack={true}
            >
              {item.label}
            </QuestionBoxButton>
          </Grid>
        ))}
      </Grid>
      <Grid className="center-root" container columnSpacing={1}>
        {workTopic.slice(3).map((item: any, index: number) => {
          const isLastQuestion = index === workTopic.slice(3).length - 1;
          return (
            <Grid className="center-root" item key={index} xs={4}>
              <QuestionBoxButton
                className={classes.button}
                onClickQuestionButton={() =>
                  onClickQuestion(item.label, item?.type, isLastQuestion)
                }
                startIcon={item?.icon}
                isActive={lastMessage === item.label}
                isItalic={isLastQuestion}
                isBlack={true}
              >
                {item.label}
              </QuestionBoxButton>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export type QuestionWorkProps = {
  lastMessage: string;

  onClickQuestion: OnClickQuestionProps;
};

export default memo(QuestionWork);

const getWorkTopic = (getLabel: (key: string, obj?: object) => ObjectMultiLanguageProps) => {
  const workTopicObj = getLabel("objWorkTopic", { returnObjects: true });

  return [
    { label: workTopicObj.lWhatCareersSuitMeTheMost, step: CHOOSE_QUESTION_STEP.question },
    { label: workTopicObj.lAnyNewOpportunity, step: CHOOSE_QUESTION_STEP.question },
    { label: workTopicObj.lShouldIStart, step: CHOOSE_QUESTION_STEP.question },
    { label: workTopicObj.lShouldIPursue, step: CHOOSE_QUESTION_STEP.question },
    { label: getLabel("lIveChangedMyMind"), step: CHOOSE_QUESTION_STEP.question },
  ];
};

const useStyles = makeStyles(() => ({
  button: {
    minHeight: 54,
  },
}));
