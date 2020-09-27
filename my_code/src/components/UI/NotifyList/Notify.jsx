import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';

export default class Notify extends Component {

  constructor(props) {
    super(props);

    this.notfyBlock = React.createRef();

    this.state = {
      isVisible: false
    };
  }

  showComponent() {
    this.setState({isVisible: true});
  }


  hideComponent() {
    const notifyId = this.props.id;

    this.setState({isVisible: false});

    setTimeout(() => this.props.hideNotify(notifyId), 1000)
  }

  componentDidMount() {
    setTimeout(() => this.showComponent(), 10);
    setTimeout(() => this.hideComponent(), 5000);
  }

  render() {
    const className = classNames({
      'modal-notify': true,
      'modal-notify_visible': this.state.isVisible
    });

    return (
      <div className={className}>
        <div className="modal-notify__icon-wrap">
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>
        <div className="modal-notify__info">
          {this.props.children}
        </div>
      </div>
    );
  }
}