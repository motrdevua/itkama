import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.scss';

const Posts = () => (
  <div className={s.posts}>
    <h2 className={s.title}>posts</h2>
    <div className={s.textarea}>
      <textarea name="" id="" />
      <button type="button">Add post</button>
    </div>
    <Post name="John Doe" text="some text..." likes="15" />
    <Post name="Dan" text="some text..." likes="5" />
    <Post name="Jack" text="some text..." likes="7" />
  </div>
);

export default Posts;
