import React, { Component } from 'react';

class Top extends Component {
  render() {
    return (
      <nav className="top-content-nav">
        {this.props.children}
      </nav>
    );
  }
}

export default Top;