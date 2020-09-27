import React from 'react'; 
import './SimpleButton.sass';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

export default function(props) {
  let className = classNames({
    'simple-button': true, 
    'simple-button_wide': props.width === 'wide',
    'simple-button_loading': props.loading,
    'simple-button_dark': props.dark,
    'simple-button_mint': props.theme === 'mint',
    'simple-button_purple': props.theme === 'purple',

  });

  
  className += props.mixinClass ? ' ' + props.mixinClass: '';

  switch (props.type) {
    case 'link': return(
      <Link exact className={className} to={props.to}>{props.children}</Link>
    );

    case 'submit': return(
      <button type="submit" className={className} onClick={props.onClick ? props.onClick : null}>{props.children}</button>
    );

    default: return(
      <div className={className} onClick={props.onClick ? props.onClick : null}>{props.children}</div>
    );
  }

  
}