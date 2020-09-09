import React from 'react';
import s from './Navbar.module.scss';

const Navbar = () => (
  <nav className={s.navbar}>
    <ul className={s.list}>
      <li className={`${s.list__item} ${s.active}`}>
        <a href="/profile" className={s.list__link}>
          Profile
        </a>
      </li>
      <li className={s.list__item}>
        <a href="/posts" className={s.list__link}>
          Posts
        </a>
      </li>
      <li className={s.list__item}>
        <a href="/news" className={s.list__link}>
          News
        </a>
      </li>
      <li className={s.list__item}>
        <a href="/settings" className={s.list__link}>
          Settings
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
