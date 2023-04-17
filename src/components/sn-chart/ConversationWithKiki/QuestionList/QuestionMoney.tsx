/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useMemo, memo } from "react";
import { CHOOSE_QUESTION_STEP } from "../ChartConversationKiki";
import { ObjectMultiLanguageProps } from "models";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import { QuestionWorkProps } from "./QuestionWork";
import QuestionBoxButton from "./QuestionBoxButton";

const QuestionMoney = ({ onClickQuestion, lastMessage }: QuestionWorkProps) => {
  const { t: getLabel } = useTranslation();

  const moneyTopic = useMemo(() => getMoneyTopic(getLabel), [getLabel]);

  return (
    <Grid container rowSpacing={2} columnSpacing={8.375}>
      {moneyTopic.map((item: any, index: number) => {
        const isLastQuestion = index === moneyTopic.length - 1;
        return (
          <Grid className="center-root" item key={index} xs={12}>
            <QuestionBoxButton
              onClickQuestionButton={() => onClickQuestion(item.label, item?.type, isLastQuestion)}
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
  );
};

export default memo(QuestionMoney);

const getMoneyTopic = (getLabel: (key: string, obj?: object) => ObjectMultiLanguageProps) => {
  const moneyTopicObj = getLabel("objMoneyTopic", { returnObjects: true });

  return [
    { label: moneyTopicObj.lWhereCanIGrow, step: CHOOSE_QUESTION_STEP.question },
    { label: getLabel("lIveChangedMyMind"), step: CHOOSE_QUESTION_STEP.question },
  ];
};
