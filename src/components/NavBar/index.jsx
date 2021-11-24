import './styles.css';

import { Cart } from '../Cart';
import { Logo } from '../Logo';
import { Menu } from '../Menu';

export const NavBar = () => {
  return (
    <aside className="menu">
      <div className="menu-container">
        <Logo />
        <Menu />
        <Cart />
      </div>
    </aside>
  );
};
