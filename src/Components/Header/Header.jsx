import React from 'react';
import s from './Header.module.scss';
import logo from './react.svg';

const Header = () => (
  <header className={s.header}>
    <a href="/" className={s.logo}>
      <img src={logo} alt="logo" />
    </a>
  </header>
);

export default Header;
