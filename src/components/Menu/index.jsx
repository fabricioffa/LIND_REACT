import { MenuBtn } from '../MenuBtn';

export const Menu = () => {
  return (
    <nav>
      <ul className="menu-btns">
        <MenuBtn url="#courses" text="Courses" />
        <MenuBtn url="#books" text="Books" />
        <MenuBtn url="#podcast" text="Courses" />
        <MenuBtn url="#faq" text="Faq" />
        <MenuBtn url="#contact" text="Contact" />
      </ul>
    </nav>
  );
};
