import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => (
  <nav className={s.navbar}>
    <ul className={s.list}>
      <li className={`${s.list__item} ${s.active}`}>
        <a href="Profile" className={s.list__link}>
          Profile
        </a>
      </li>
      <li className={s.list__item}>
        <a href="Messages" className={s.list__link}>
          Messages
        </a>
      </li>
      <li className={s.list__item}>
        <a href="News" className={s.list__link}>
          News
        </a>
      </li>
      <li className={s.list__item}>
        <a href="Settings" className={s.list__link}>
          Settings
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
