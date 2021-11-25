import P from 'prop-types';

export const Form = ({ children }) => {
  return (
    <form>
      {children}
      <button type="submit">Submit</button>
    </form>
  );
};

Form.propTypes = {
  children: P.node.isRequired,
};
