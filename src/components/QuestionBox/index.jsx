import P from 'prop-types';
import { Answer } from '../Answer';
import { Question } from '../Question';

export const QuestionBox = ({ questionText, answerText }) => {
  return (
    <div className="question">
      <Question text={questionText} />
      <Answer text={answerText} />
    </div>
  );
};

QuestionBox.propTypes = {
  questionText: P.string.isRequired,
  answerText: P.string.isRequired,
};
