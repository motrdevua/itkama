import React from 'react';
import s from './Post.module.css';
import ava from './ava.png';

const Post = () => (
  <div className={s.post}>
    <div className={s.wrap}>
      <div className={s.ava}>
        <img src={ava} alt="ava" />
      </div>
      <div className={s.content}>
        <p className={s.name}>Name</p>
        <p className={s.text}>some post text...</p>
      </div>
    </div>
    <span className={s.like}>like</span>
  </div>
);

export default Post;
