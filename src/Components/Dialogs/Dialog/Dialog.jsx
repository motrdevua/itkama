import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.scss';

const Dialog = (props) => {
  const { name, id } = props;
  return (
    <div className={s.dialog}>
      <NavLink
        to={`/dialogs/${id}`}
        className={s.dialog__name}
        activeClassName={s.active}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default Dialog;
