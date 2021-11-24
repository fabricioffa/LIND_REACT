import P from 'prop-types';

export const Grid = ({ gridName, children }) => {
  return <div className={`${gridName}-grid grid`}>{children}</div>;
};

Grid.propTypes = {
  children: P.node.isRequired,
  gridName: P.string.isRequired,
};
