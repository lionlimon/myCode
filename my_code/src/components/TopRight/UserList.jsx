import React, {Fragment, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import './UserList.sass';

const UserList = (props) => {
  const [isOpen, toggleOpen] = useState(false); 
  const className = classNames({
    'user-menu top-content-nav__user-menu': true, 
    'open': isOpen
  });

  function onUserClick() {
    toggleOpen(!isOpen);
  }

  function onListClick(event) {
    if (event.target.closest('.user-menu__link')) 
      toggleOpen(false);
  }

  function logOut() {
    window.localStorage.clear(); 
    window.location.reload();
  }

  return (
    <Fragment>
      <div className="main-user">
        <div onClick={onUserClick} className="main-user__img top-content-nav__user-img"><FontAwesomeIcon icon={faUser}/></div>
      </div>
      <ul onClick={onListClick} className={className}>
        <li className="user-menu__item"><Link className="user-menu__link">Профиль</Link></li>
        <li className="user-menu__item"><Link className="user-menu__link">Настройки</Link></li>
        <li className="user-menu__item user-menu__exit"><Link onClick={logOut} className="user-menu__link user-menu__exit-link">Выход <FontAwesomeIcon icon={faSignOutAlt}/></Link></li>
      </ul>
    </Fragment>
  );
};

export default UserList;