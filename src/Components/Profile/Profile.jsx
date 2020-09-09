import React from 'react';
import s from './Profile.module.scss';
import Posts from './Posts/Posts';

const Profile = () => (
  <div className={s.profile}>
    <h2 className={s.title}>Profile</h2>
    <Posts />
  </div>
);

export default Profile;
