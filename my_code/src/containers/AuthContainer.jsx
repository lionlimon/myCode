import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Auth from '../components/Auth/Auth';
import { sendRegisterData, sendLoginData, clearAuthData, getUserData } from '../store/auth/actions';
import { addNotify } from '../store/notify/actions';



class AuthContainer extends Component{
  render() {
    return(
      <Auth history={this.props.history} {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth 
  };
}

const mapDispatchToProps = {
  sendRegisterData,
  sendLoginData,
  clearAuthData,
  addNotify,
  getUserData
}

const AuthContainerWidthRouter = withRouter(AuthContainer);

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainerWidthRouter);