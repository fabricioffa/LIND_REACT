import P from 'prop-types';

export const Question = ({ text }) => {
  return <h4>{text}</h4>;
};

Question.propTypes = {
  text: P.string.isRequired,
};
