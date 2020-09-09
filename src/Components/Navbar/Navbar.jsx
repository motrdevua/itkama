import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';

const Navbar = () => (
  <nav className={s.navbar}>
    <ul className={s.list}>
      <li className={s.list__item}>
        <NavLink to="/profile" className={s.list__link} activeClassName={s.active}>
          Profile
        </NavLink>
      </li>
      <li className={s.list__item}>
        <NavLink to="/dialogs" className={s.list__link} activeClassName={s.active}>
          Dialogs
        </NavLink>
      </li>
      <li className={s.list__item}>
        <NavLink to="/news" className={s.list__link} activeClassName={s.active}>
          News
        </NavLink>
      </li>
      <li className={s.list__item}>
        <NavLink to="/settings" className={s.list__link} activeClassName={s.active}>
          Settings
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
