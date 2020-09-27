import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import classNames from 'classnames';
import './Modal.sass';





const Modal = (props) => {

  const modalOnClick = (event) => {
    if (event.target.classList.value.indexOf('modal-outer') != -1) 
      props.closePopup();

    
  }

  const className = classNames({
    'modal-outer': true, 
    'modal-outer_hidden': !props.popupIsOpen
  });

  return ReactDOM.createPortal( 
    <div className={className} onClick={modalOnClick}>
      <div className="modal">{props.children}</div>
    </div>, 
    document.getElementById('modals')
  );
};

export default Modal;