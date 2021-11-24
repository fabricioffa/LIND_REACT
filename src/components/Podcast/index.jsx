import P from 'prop-types';

export const Podcast = ({ link, text }) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
};

Podcast.propTypes = {
  link: P.string.isRequired,
  text: P.string.isRequired,
};
