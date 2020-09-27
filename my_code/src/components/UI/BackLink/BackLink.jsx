import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

import './BackLink.sass';

const BackLink = (props) => {
  return (
    <NavLink exact to="/" className="back"><FontAwesomeIcon icon={faChevronLeft} /> К проектам</NavLink>
  );
};

export default BackLink;