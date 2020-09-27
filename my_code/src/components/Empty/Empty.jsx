import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import './Empty.sass';


function Empty(props) {
  return (
    <div className="empty">
      <div className="empty-icon">
        <FontAwesomeIcon icon={faFolderOpen} />
      </div>
      <h2 className="empty-title">
        {props.children}
      </h2>
      
    </div>
  );
}

export default Empty;