import React, { Component } from 'react';
import './Sidebar.sass';
import './_sidebar.js';
import SidebarItem from './SidebarItem.js';
import SidebarButton from './SidebarButton';
import $ from 'jquery';
import { MiniBlock, MiniBlockTitle, MiniBlockInput, MiniBlockForm } from '../UI/MiniBlock/MiniBlock';
import Scrollbars from 'react-custom-scrollbars';


class Sidebar extends Component {

  constructor(props) {
    super(props);
    

    this.state = {
      isHoverd: false
    }
  }

  setHover() { this.setState({ isHoverd: true }) }

  unsetHover() { this.setState({ isHoverd: false }) }


  render(props) {
    let sbClassName = 'sidebar'; 
    let sbButtonClassName = 'sidebar__button';

    if (!this.props.isOpen)
      sbClassName += ' hidden';

    if (this.state.isHoverd) {
      sbClassName += ' hover';
      sbButtonClassName += ' hover';
    }
    
    return (
      <aside className={sbClassName}>
        
        <div className="sidebar__hover-line" 
          onMouseEnter={this.setHover.bind(this)} 
          onMouseLeave={this.unsetHover.bind(this)}
          onClick={this.props.toggleSidebar}
          ></div>
        
        <div className="sidebar__head">
          <span className="sidebar__pre-title">
            Проект:
          </span>
          <h1 className="sidebar__title">{this.props.currentProject && this.props.currentProject.name}</h1>
        </div>

        <nav className="left-menu">
        <Scrollbars thumbSize={100} className="scroll-area" style={{ height: 'calc(100vh - (50px + 67px))' }}>
          <ul className="left-menu__list">
            {this.props.menuItems && this.props.menuItems.map(category => (
              <SidebarItem onComponentDelete={this.props.onComponentDelete} projectId={this.props.projectId} item={category} childs={category.components} key={category.id}/>
            ))}
          </ul>
        </Scrollbars>
        </nav>

          <div 
            className={sbButtonClassName}
            onClick={this.props.toggleSidebar}
            onMouseEnter={this.setHover.bind(this)} 
            onMouseLeave={this.unsetHover.bind(this)}>
            <svg className="sidebar__button-icon" xmlns="http://www.w3.org/2000/svg" width="10.567" height="16.95" viewBox="0 0 10.567 16.95">
              <path d="M314.383,530.331l-8.4,8.058,8.4,7.422" transform="translate(315.076 546.56) rotate(180)" fill="none" stroke="#918f8f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            </svg>
          </div>

          <div className="sidebar__bottom">
            <SidebarButton onClick={this.props.openCreateComponentForm}>Добавить компонент</SidebarButton>
          </div>

        </aside>
    );

  }
}


export default Sidebar;