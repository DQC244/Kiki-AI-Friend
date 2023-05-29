/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import { CHOOSE_QUESTION_STEP } from "../ChartConversationKiki";
import { ObjectMultiLanguageProps } from "models";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import { QuestionWorkProps } from "./QuestionWork";
import QuestionBoxButton from "./QuestionBoxButton";
import { LangConstant } from "const";

const EndQuestion = ({ onClickQuestion, lastMessage }: QuestionWorkProps) => {
  const { t: getLabel, i18n } = useTranslation();

  const questionList = useMemo(() => getEndTopic(getLabel), []);

  return (
    <Grid container rowSpacing={2} columnSpacing={1}>
      {questionList.map((item: any, index: number) => (
        <Grid className="center-root" item xs={12} key={index}>
          <QuestionBoxButton
            onClickQuestionButton={() =>
              onClickQuestion(
                item.label,
                item?.type,
                index === 1,
                index === 0,
                undefined,
                undefined,
                item.labelEn,
                item.labelVi,
              )
            }
            startIcon={item?.icon}
            isActive={lastMessage === item.label}
            isBlack={true}
          >
            {i18n.language === LangConstant.DEFAULT_LANG_CODE ? item.labelEn : item.labelVi}
          </QuestionBoxButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default EndQuestion;

const getEndTopic = (getLabel: (key: string, obj?: object) => ObjectMultiLanguageProps) => {
  const topicObjEn = getLabel("objEndTopic", { lng: "en", returnObjects: true });
  const topicObjVi = getLabel("objEndTopic", { lng: "vn", returnObjects: true });

  return [
    {
      labelEn: topicObjEn.lAskAnotherQuestion,
      labelVi: topicObjVi.lAskAnotherQuestion,
      step: CHOOSE_QUESTION_STEP.end,
    },
    {
      labelEn: topicObjEn.lBackToOtherMainTopics,
      labelVi: topicObjVi.lBackToOtherMainTopics,
      step: CHOOSE_QUESTION_STEP.end,
    },
    {
      labelEn: topicObjEn.lEndConversation,
      labelVi: topicObjVi.lEndConversation,
      step: CHOOSE_QUESTION_STEP.end,
    },
  ];
};
