import P from 'prop-types';

export const Input = ({ type, name }) => {
  return <input type={type} name={name} id={name} />;
};

Input.propTypes = {
  type: P.string.isRequired,
  name: P.string.isRequired,
  id: P.string.isRequired,
};
