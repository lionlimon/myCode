import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideNotify } from '../store/notify/actions';

import NotifyList from '../components/UI/NotifyList/NotifyList';

class NotifyListContainer extends Component {
  render() {
    return (
      <NotifyList hideNotify={this.props.hideNotify} notifyList={this.props.notify.notifyList}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notify: state.notify
  };
}

const mapDispatchToProps = {
  hideNotify
}

export default connect(mapStateToProps, mapDispatchToProps)(NotifyListContainer);