import P from 'prop-types';

export const Answer = ({ text }) => {
  return <p>{text}</p>;
};

Answer.propTypes = {
  text: P.string.isRequired,
};
