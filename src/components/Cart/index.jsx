import cartImg from '../../imgs/cart-modified.png';

export const Cart = () => {
  return (
    <a className="cart-a" href="#">
      <img className="cart" src={cartImg} alt="Shopping cart" />
    </a>
  );
};
