import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import Notify from './Notify';

import './NotifyList.sass';

export default class NotifyList extends Component {


  render() {
    
    return ReactDOM.createPortal(
      
      <div onClick={this.props.onClick} className="modal-notify-wrap">
        
        {this.props.notifyList && 
          this.props.notifyList.map((item) => 
            item.isVisible && <Notify hideNotify={this.props.hideNotify} id={item.id} key={item.id}>{item.message}</Notify>
          )}
      </div>,
      document.getElementById('modals')
    );
  }
}