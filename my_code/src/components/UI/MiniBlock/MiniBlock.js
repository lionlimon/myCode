import React from 'react';
import MiniBlockTitle from './MiniBlockTitle';
import MiniBlockForm from './MiniBlockForm';
import MiniBlockInput from './MiniBlockInput';


import './MiniBlock.sass';
import classNames from 'classnames';

function MiniBlock(props) {
  
  let className = classNames({ 
    'mini-block': true, 
    'mini-block_hidden': props.type === 'hidden', 
    'mini-block_error': props.error, 
  });
  
  className += props.mixinClass ? ' ' + props.mixinClass : ''; 

  return(
    <div id={props.id} className={className}>{props.children}</div>
  );
}

export { MiniBlock,  MiniBlockTitle, MiniBlockForm, MiniBlockInput };