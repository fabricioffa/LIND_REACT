import cartImg from '../../imgs/cart-modified.png';

export const Cart = () => {
  return (
    <a className="cart-container" href="#">
      <img className="cart" src={cartImg} alt="Shopping cart" />
    </a>
  );
};
