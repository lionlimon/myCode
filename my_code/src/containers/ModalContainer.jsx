import React from 'react';
import Modal from '../components/UI/Modal/Modal';
import {Card} from '../components/UI/Card/Card';
import {connect} from 'react-redux';
import {openPopup, closePopup} from '../store/modal/actions';

function ModalContainer(props) {
  return (
    <Modal 
      openPopup={props.openPopup}
      closePopup={props.closePopup}
      popupIsOpen={props.popupIsOpen}
    >
      {props.content}
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    popupIsOpen: state.modal.popupIsOpen,
    content: state.modal.content
  }
};

const mapDispatchToProps = {
  openPopup,
  closePopup
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);