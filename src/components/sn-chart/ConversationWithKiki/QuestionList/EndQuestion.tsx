/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import { CHOOSE_QUESTION_STEP } from "../ChartConversationKiki";
import { ObjectMultiLanguageProps } from "models";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import { QuestionWorkProps } from "./QuestionWork";
import QuestionBoxButton from "./QuestionBoxButton";

const EndQuestion = ({ onClickQuestion, lastMessage }: QuestionWorkProps) => {
  const { t: getLabel } = useTranslation();

  const questionList = useMemo(() => getEndTopic(getLabel), [getLabel]);

  return (
    <Grid container rowSpacing={2} columnSpacing={1}>
      {questionList.map((item: any, index: number) => (
        <Grid className="center-root" item xs={12} key={index}>
          <QuestionBoxButton
            onClickQuestionButton={() =>
              onClickQuestion(item.label, item?.type, index === 1, index === 0)
            }
            startIcon={item?.icon}
            isActive={lastMessage === item.label}
            isBlack={true}
          >
            {item.label}
          </QuestionBoxButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default EndQuestion;

const getEndTopic = (getLabel: (key: string, obj?: object) => ObjectMultiLanguageProps) => {
  const topicObj = getLabel("objEndTopic", { returnObjects: true });

  return [
    { label: topicObj.lAskAnotherQuestion, step: CHOOSE_QUESTION_STEP.end },
    { label: topicObj.lBackToOtherMainTopics, step: CHOOSE_QUESTION_STEP.end },
    { label: topicObj.lEndConversation, step: CHOOSE_QUESTION_STEP.end },
  ];
};
