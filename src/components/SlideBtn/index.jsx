import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import P from 'prop-types';

export const SlideBtn = ({ direction }) => {
  if (direction === 'right') return <FontAwesomeIcon icon={faCaretRight} />;

  return <FontAwesomeIcon icon={faCaretLeft} />;
};

SlideBtn.propTypes = {
  direction: P.string.isRequired,
};
