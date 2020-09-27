import React from 'react';
import { NavLink } from 'react-router-dom';

function TopListItem (props) {
  return (
    <li className="top-list__item">
      <NavLink activeClassName="active" exact={props.exact} className="top-list__link" to={props.link}>{props.children}</NavLink>
    </li>
  );

}

export default TopListItem;