import React, { useMemo } from "react";
import { CHOOSE_QUESTION_STEP, TOPIC_TYPE } from "../ChartConversationKiki";
import QuestionLove from "./QuestionLove";
import QuestionMoney from "./QuestionMoney";
import QuestionSelf from "./QuestionSelf";
import QuestionWork from "./QuestionWork";
import EndQuestion from "./EndQuestion";
import ChooseTopicDefault from "./ChooseTopicDefault";

const QuestionList = ({
  typeTopic,
  currentStep,
  lastMessage,
  onClickQuestion,
}: QuestionListProps) => {
  const ListQuestion: React.ElementType = useMemo(() => {
    let Question;
    switch (typeTopic) {
      case TOPIC_TYPE.love:
        Question = QuestionLove;
        break;
      case TOPIC_TYPE.money:
        Question = QuestionMoney;
        break;
      case TOPIC_TYPE.self:
        Question = QuestionSelf;
        break;
      case TOPIC_TYPE.work:
        Question = QuestionWork;
        break;
      // case TOPIC_TYPE.no:
      //   Question = EndQuestion;
      //   break;
      // case TOPIC_TYPE.possibilities:
      //   Question= ;
      // TODO:update later
      default:
        Question = ChooseTopicDefault;
    }

    return currentStep === CHOOSE_QUESTION_STEP.end ? EndQuestion : Question;
  }, [typeTopic, currentStep]);

  return (
    <div>
      <ListQuestion onClickQuestion={onClickQuestion} lastMessage={lastMessage} />
    </div>
  );
};

export type OnClickQuestionProps = (
  label: string,
  type: TOPIC_TYPE,
  isBackTopic?: boolean,
  isBackQuestion?: boolean,
) => void;

type QuestionListProps = {
  typeTopic?: TOPIC_TYPE;
  currentStep: CHOOSE_QUESTION_STEP;
  lastMessage: string;
  onClickQuestion: OnClickQuestionProps;
};

export default QuestionList;
