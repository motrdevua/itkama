import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';

const Dialogs = () => (
  <div className={s.dialogs}>
    <h2 className={s.title}>Dialogs</h2>
    <div className={s.dialogs__wrapper}>
      <div className={s.dialogs__items}>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/1"
            className={s.dialog__name}
            activeClassName={s.active}
          >
            John
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/2"
            className={s.dialog__name}
            activeClassName={s.active}
          >
            Anna
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/3"
            className={s.dialog__name}
            activeClassName={s.active}
          >
            Jack
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>
          <p className={s.message__text}>some message ...</p>
        </div>
        <div className={s.message}>
          <p className={s.message__text}>some message ...</p>
        </div>
        <div className={s.message}>
          <p className={s.message__text}>some message ...</p>
        </div>
        <div className={s.message}>
          <p className={s.message__text}>some message ...</p>
        </div>
      </div>
    </div>
  </div>
);

export default Dialogs;
