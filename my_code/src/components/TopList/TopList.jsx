import React, { Component } from 'react';
import TopListItem from './TopListItem';

import './TopList.sass';


class TopList extends Component {
  linkGenerator (item) {
    let viewStr = this.props.linkGen;

    for (let key in item) {
      viewStr = viewStr.replace(`{${key}}`, item[key]);
    }
    return viewStr;
  }

  render() {
    const menuButtonClassName = this.props.menuButtonIsActive ? 'top-list__button active' : 'top-list__button';

    return (
        <ul className="top-list">
          
          {this.props.items.map(item => <TopListItem key={item.id} exact={item.exact} link={() => this.linkGenerator(item)}>{item.name}</TopListItem>)}
          
          {this.props.buttonIsVisible && 
          <li className="top-list__item">
            <button onClick={this.props.onMenuButtonClick} className={menuButtonClassName}>+</button>            
          </li>}
          
        </ul>
        
    );
  }
}

export default TopList;