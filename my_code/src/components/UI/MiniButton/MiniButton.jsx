import React from 'react';
import './MiniButton.sass';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';


function MiniButton(props) {
  const className = classNames({
    'mini-button btnclr': true, 
    'mini-button_red': props.red !== undefined, 
    'mini-button_blue': props.blue !== undefined, 
    [props.mixinClass]: props.mixinClass !== undefined
  });

  switch(props.type) {
    case 'submit': return (
      <button onClick={props.onClick} className={className}>{props.children}</button>
    );

    case 'link': return (
      <NavLink to={props.to}><div onClick={props.onClick} className={className}>{props.children}</div></NavLink>      
    );

    default: return (
      <div onClick={props.onClick} className={className}>{props.children}</div>
    );
  }
}

export default MiniButton;