import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => (
  <div className={s.posts}>
    <h2 className={s.title}>posts</h2>
    <div className={s.textarea}>
      <textarea name="" id="" cols="50" rows="5" />
      <button type="button">Add post</button>
    </div>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
);

export default Posts;
