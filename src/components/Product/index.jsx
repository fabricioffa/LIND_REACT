import P from 'prop-types';

export const Product = ({ name, imgSrc, imgAlt, price, link }) => {
  return (
    <div className="grid-item">
      <h4>{name}</h4>
      <img src={imgSrc} alt={imgAlt} />
      <p>{price}</p>
      <a href={link}>
        <span className="grid-item-link"></span>
      </a>
    </div>
  );
};

Product.propTypes = {
  name: P.string.isRequired,
  imgSrc: P.string.isRequired,
  imgAlt: P.string.isRequired,
  price: P.string.isRequired,
  link: P.string.isRequired,
};
