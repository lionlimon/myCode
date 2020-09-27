import React from 'react';

const SidebarButton = (props) => {
  return (
    <button onClick={props.onClick} className="btnclr button-add sidebar__add">
      {props.children}
    </button>
  );
};

export default SidebarButton;