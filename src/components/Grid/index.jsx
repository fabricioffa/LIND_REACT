import P from 'prop-types';

export const Grid = ({ children }) => {
  return <div className="intro-grid grid">{children}</div>;
};

Grid.propTypes = {
  children: P.node.isRequired,
};
