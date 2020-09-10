import React from 'react';
import s from './Dialogs.module.scss';

const Dialogs = () => (
  <div className={s.dialogs}>
    <h2 className={s.title}>Dialogs</h2>
    <div className={s.dialogs__wrapper}>
      <div className={s.dialogs__items}>
        <div className={s.dialog}>
          <span className={s.dialog__name}>John</span>
        </div>
        <div className={s.dialog}>
          <span className={s.dialog__name}>Jack</span>
        </div>
        <div className={s.dialog}>
          <span className={s.dialog__name}>Anna</span>
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
