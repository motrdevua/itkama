import React from 'react';
import s from './Content.module.css';
import Posts from './Posts/Posts';

const Content = () => (
  <main className={s.content}>
    <Posts />
  </main>
);

export default Content;
