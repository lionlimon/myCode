import React from 'react';

export default function MiniBlockInput(props) {
  if (props.type == 'select')
    return (
      <select className="top-list__form-input bottom-line-input" name="select" required>
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
    <input name={props.name} onChange={props.onChange.bind(this)} value={props.newSnippetType} className="top-list__form-input bottom-line-input" type={props.type} placeholder={props.placeholder} required/>
  );
}