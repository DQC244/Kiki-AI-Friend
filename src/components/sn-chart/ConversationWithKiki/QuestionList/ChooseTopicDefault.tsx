/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useMemo, memo } from "react";
import { CHOOSE_QUESTION_STEP, TOPIC_TYPE } from "../ChartConversationKiki";
import { ObjectMultiLanguageProps } from "models";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import { QuestionWorkProps } from "./QuestionWork";
import {
  // BagIcon,
  BallIcon,
  CrownIcon,
  HandIcon,
  // HeartIcon,
  // PigActiveIcon,
  // PigIcon,
} from "components/icons";
import QuestionBoxButton from "./QuestionBoxButton";
import { LangConstant } from "const";

const ChooseTopicDefault = ({ onClickQuestion, lastMessage }: QuestionWorkProps) => {
  const { t: getLabel, i18n } = useTranslation();

  const topicList = useMemo(() => getListQuestion(getLabel), [getLabel]);

  return (
    <Grid container rowSpacing={2} columnSpacing={8.375} direction={{ xs: "column", lg: "row" }}>
      {topicList.map((item: any, index: number) => (
        <Grid className={"center-root"} item key={index} xs={4}>
          <QuestionBoxButton
            onClickQuestionButton={() =>
              onClickQuestion(
                item.label,
                item?.type,
                false,
                false,
                item.icon,
                undefined,
                item.labelEn,
                item.labelVi,
              )
            }
            startIcon={item?.icon}
            isActive={lastMessage === item.label}
          >
            {i18n.language === LangConstant.DEFAULT_LANG_CODE ? item.labelEn : item.labelVi}
          </QuestionBoxButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(ChooseTopicDefault);

const getListQuestion = (getLabel: (key: string, obj: object) => ObjectMultiLanguageProps) => {
  const objContentEn = getLabel("objQuestionStep1", { lng: "en", returnObjects: true });
  const objContentVi = getLabel("objQuestionStep1", { lng: "vn", returnObjects: true });

  return [
    // {
    //   label: objContent.lLove,
    //   icon: <HeartIcon />,
    //   activeIcon: <HeartIcon />,
    //   step: CHOOSE_QUESTION_STEP.topic,
    //   type: TOPIC_TYPE.love,
    // },
    // {
    //   label: objContent.lMoney,
    //   icon: <PigIcon />,
    //   activeIcon: <PigActiveIcon />,
    //   step: CHOOSE_QUESTION_STEP.topic,
    //   type: TOPIC_TYPE.money,
    // },
    {
      labelEn: objContentEn.lSelf,
      labelVi: objContentVi.lSelf,
      icon: <CrownIcon />,
      activeIcon: <CrownIcon />,
      step: CHOOSE_QUESTION_STEP.topic,
      type: TOPIC_TYPE.self,
    },
    // {
    //   label: objContent.lWorkStudy,
    //   icon: <BagIcon />,
    //   activeIcon: <BagIcon />,
    //   step: CHOOSE_QUESTION_STEP.topic,
    //   type: TOPIC_TYPE.work,
    // },
    {
      labelEn: objContentEn.lPossibilities,
      labelVi: objContentVi.lPossibilities,
      icon: <BallIcon />,
      activeIcon: <BallIcon />,
      step: CHOOSE_QUESTION_STEP.topic,
      type: TOPIC_TYPE.possibilities,
    },
    {
      labelEn: objContentEn.lNoImGood,
      labelVi: objContentVi.lNoImGood,
      icon: <HandIcon />,
      activeIcon: <HandIcon />,
      step: CHOOSE_QUESTION_STEP.topic,
      type: TOPIC_TYPE.no,
    },
  ];
};
