import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class SidebarItem extends Component {


  toggleLink() {
    $(this.link).toggleClass('left-menu__link_opened');
		$(this.link).parent().toggleClass('left-menu__item_opened');
		$(this.link).siblings('.left-menu__second-list').stop(true, false).slideToggle();
  }

  render() {
    return (
      <li className="left-menu__item">
        <a className="left-menu__link" href='#' ref={a => this.link = a} onClick={() => this.toggleLink()}>
          {this.props.item.name}
          <FontAwesomeIcon 
            onClick={() => {}}
            className="left-menu__remove-component" 
            icon={faTrash} 
          />
        </a>
          <ul className="left-menu__second-list">
          {this.props.childs.map(child => {
            return(
              <li className="left-menu__second-list-item" key={child.id}>
                <Link 
                  className="left-menu__second-list-link" 
                  to={`/project${this.props.projectId}/component${child.id}`}>
                    {child.name}
                  <FontAwesomeIcon 
                    onClick={() => {this.props.onComponentDelete(child.id)}} 
                    className="left-menu__remove-item" 
                    icon={faTrash} 
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }
}

export default SidebarItem;