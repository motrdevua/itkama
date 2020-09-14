import React from 'react';
import s from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => (
  <div className={s.dialogs}>
    <h2 className={s.title}>Dialogs</h2>
    <div className={s.dialogs__wrapper}>
      <div className={s.dialogs__items}>
        <Dialog name="John" id="1" />
        <Dialog name="Anna" id="2" />
        <Dialog name="Jack" id="3" />
      </div>
      <div className={s.messages}>
        <Message text="some message 1 ..." />
        <Message text="some message 2 ..." />
        <Message text="some message 3 ..." />
        <Message text="some message 4 ..." />
      </div>
    </div>
  </div>
);

export default Dialogs;
