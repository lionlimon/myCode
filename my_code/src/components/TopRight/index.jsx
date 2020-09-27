import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserList from './UserList';
import logo from '../../img/logo.svg';

class index extends Component {
  render() {
    return (
      <div className="top-content-nav__right">
        <Link className="logo-wrap" to="/"><img src={logo} alt="mycode"/></Link>
        <UserList auth={this.props.auth} />
      </div>
    );
  }
}

export default index;