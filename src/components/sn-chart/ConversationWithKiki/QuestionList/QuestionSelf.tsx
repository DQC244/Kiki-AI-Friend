/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useMemo, memo } from "react";
import { CHOOSE_QUESTION_STEP } from "../ChartConversationKiki";
import { ObjectMultiLanguageProps } from "models";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import { QuestionWorkProps } from "./QuestionWork";
import QuestionBoxButton from "./QuestionBoxButton";
import { makeStyles } from "@mui/styles";
import { LangConstant } from "const";

const QuestionSelf = ({ onClickQuestion, lastMessage }: QuestionWorkProps) => {
  const classes = useStyles();
  const { t: getLabel, i18n } = useTranslation();

  const selfTopic = useMemo(() => getSelfTopic(getLabel), []);

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 4, lg: 8.375 }}>
      {selfTopic.map((item: any, index: number) => {
        const isLastQuestion = index === selfTopic.length - 1;
        return (
          <Grid className="center-root" item key={index} xs={6}>
            <QuestionBoxButton
              onClickQuestionButton={() =>
                onClickQuestion(
                  item.label,
                  item?.type,
                  isLastQuestion,
                  false,
                  undefined,
                  index + 1,
                  item.labelEn,
                  item.labelVi,
                )
              }
              startIcon={item?.icon}
              isActive={lastMessage === item.label}
              isItalic={isLastQuestion}
              isBlack={true}
              className={classes.button}
            >
              {i18n.language === LangConstant.DEFAULT_LANG_CODE ? item.labelEn : item.labelVi}
            </QuestionBoxButton>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default memo(QuestionSelf);

const getSelfTopic = (getLabel: (key: string, obj?: object) => ObjectMultiLanguageProps) => {
  const selfTopicObjEn = getLabel("objSelfTopic", { lng: "en", returnObjects: true });
  const selfTopicObjVi = getLabel("objSelfTopic", { lng: "vn", returnObjects: true });
  const lIveChangedMyMindEn = getLabel("lIveChangedMyMind", { lng: "en" });
  const lIveChangedMyMindVi = getLabel("lIveChangedMyMind", { lng: "vn" });

  return [
    {
      labelVi: selfTopicObjVi.lWhatIsMyNutritionalAdvice,
      labelEn: selfTopicObjEn.lWhatIsMyNutritionalAdvice,
      step: CHOOSE_QUESTION_STEP.question,
    },
    {
      labelVi: selfTopicObjVi.lWhatIsMyStressManagementTips,
      labelEn: selfTopicObjEn.lWhatIsMyStressManagementTips,
      step: CHOOSE_QUESTION_STEP.question,
    },
    {
      labelVi: selfTopicObjVi.lCanYouTellMyPersonality,
      labelEn: selfTopicObjEn.lCanYouTellMyPersonality,
      step: CHOOSE_QUESTION_STEP.question,
    },
    {
      labelVi: lIveChangedMyMindVi,
      labelEn: lIveChangedMyMindEn,
      step: CHOOSE_QUESTION_STEP.question,
    },
  ];
};

const useStyles = makeStyles(() => ({
  button: {
    minHeight: 54,
  },
}));
