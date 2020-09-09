/* eslint-disable react/prop-types */
import React from 'react';
import s from './Post.module.scss';
import ava from './ava.png';
import Like from './Like';

const Post = (props) => {
  const { name, text, likes } = props;

  return (
    <div className={s.post}>
      <div className={s.wrap}>
        <div className={s.ava}>
          <img src={ava} alt="ava" />
        </div>
        <div className={s.content}>
          <p className={s.name}>{name}</p>
          <p className={s.text}>{text}</p>
        </div>
      </div>
      <div className={s.like}>
        <span className={s.like__button}>
          <Like />
        </span>
        <span className={s.like__counter}>{likes}</span>
      </div>
    </div>
  );
};

export default Post;
