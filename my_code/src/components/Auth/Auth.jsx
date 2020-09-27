import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import DefaultHome from '../DefaultHome/DefaultHome';
import Register from './Register';
import Login from './Login';
import { addNotify } from '../../store/notify/actions';

class Auth extends Component {
  
  constructor(props) {
    super(props);

    this.state = { fields: {}, loading: false };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      fields: { ...this.state.fields, [name]: value },
      loading: false, 
      hasRequest: false,
    });
  }

  changeLoading(bool = !this.state.loading) {
    this.setState({ loading: bool });
  }

  registerOnSubmit(e) {
    e.preventDefault();
    this.changeLoading(true);
    this.props.sendRegisterData(this.state.fields);
  }
  
  loginOnSubmit(e) {
    e.preventDefault();
    this.changeLoading(true);
    this.props.sendLoginData(this.state.fields);
  }

  componentDidMount() {
    if (this.props.success === true) {
      this.props.history.push('/');
      this.props.getUserData();
    }
  }

  componentDidUpdate() {
    
    if (this.props.error && this.props.error.length > 0) {
      this.changeLoading(false);
      this.props.addNotify({message: this.props.error});
      this.props.clearAuthData();
    }
  
    if (this.props.success === true) {
      this.props.history.push('/');
      this.props.getUserData();
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path='/auth'>
          <DefaultHome />
        </Route>
        <Route path='/auth/register'>
          <Register loading={this.state.loading} registerOnSubmit={this.registerOnSubmit.bind(this)} handleInputChange={this.handleInputChange.bind(this)}/>
        </Route>
        <Route path='/auth/login'>
          <Login loading={this.state.loading && !this.state.hasRequest} loginOnSubmit={this.loginOnSubmit.bind(this)} handleInputChange={this.handleInputChange.bind(this)} />
        </Route>
      </Switch>
    );
  }
}

export default Auth;