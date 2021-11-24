import P from 'prop-types';

export const MenuBtn = ({ url, text }) => {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
};

MenuBtn.propTypes = {
  url: P.string.isRequired,
  text: P.string.isRequired,
};
