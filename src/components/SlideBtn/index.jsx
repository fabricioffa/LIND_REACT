import P from 'prop-types';

export const SlideBtn = ({ direction }) => {
  return <i className={`slide-btn fas fa-caret-${direction}`}></i>;
};

SlideBtn.propTypes = {
  direction: P.string.isRequired,
};
