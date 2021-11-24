import P from 'prop-types';

export const Header = ({ text, level }) => {
  switch (level) {
    case 1:
      return <h1 className="header">{text}</h1>;
    case 2:
      return <h2 className="header">{text}</h2>;
    case 3:
      return <h3 className="header">{text}</h3>;
    case 4:
      return <h4 className="header">{text}</h4>;
    case 5:
      return <h5 className="header">{text}</h5>;
    default:
      return <h6 className="header">{text}</h6>;
  }
};

Header.propTypes = {
  text: P.string.isRequired,
  level: P.number.isRequired,
};
