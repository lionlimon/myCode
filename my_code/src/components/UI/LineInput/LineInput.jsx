import React from 'react';
import classNames from 'classnames';



export default function MiniBlockInput(props) {

  let className = classNames({
    'bottom-line-input': true, 
    [props.mixinClass]: props.mixinClass
  });


  if (props.type == 'select')
    return (
      <select className="bottom-line-input" name="select" required>
        <option selected>{props.placeholder}</option>
        {props.options.map(item => {
          console.log(item);
          return (
            <option name={item.text}>{item.text}</option>
          );
        })}
      </select>
    );

  return ( 
    <input 
      name={props.name} 
      onChange={props.onChange} 
      value={props.value} 
      className={className}
      type={props.type} placeholder={props.placeholder} 
      required/>
  );
}