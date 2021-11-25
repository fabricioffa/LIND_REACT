import P from 'prop-types';

export const Icon = ({ link, imgSrc, imgAlt }) => {
  return (
    <li>
      <a href={link}>
        <img src={imgSrc} alt={imgAlt} />
      </a>
    </li>
  );
};

Icon.propTypes = {
  link: P.string.isRequired,
  imgSrc: P.string.isRequired,
  imgAlt: P.string.isRequired,
};
