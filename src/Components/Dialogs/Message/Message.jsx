import React from 'react';
import s from './Message.module.scss';

const Message = (props) => {
  const { text } = props;
  return (
    <div className={s.message}>
      <p className={s.message__text}>{text}</p>
    </div>
  );
};

export default Message;
