import React from 'react';

export default function MiniBlockForm(props) {
  return (
    <form className="top-list__form" onSubmit={props.onSubmit}> 
      {props.children}
    </form>
  );
}