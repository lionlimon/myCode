import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Tag.sass';

function Tag(props) {
  return (
    <div id={props.id} onClick={props.onClick} className="tag top-list__tag">{props.text}<FontAwesomeIcon className="tag__icon" icon={faTimes} /></div>
  );
}

export default Tag;