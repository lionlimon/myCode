import React from 'react';
import './Loader.sass';

function Loader(props) {
  return (
    <div className="loader">
      <div className="loader-item"></div>
      <div className="loader-item"></div>
      <div className="loader-item"></div>
      <div className="loader-item"></div>
      <div className="loader-item accent"></div>
    </div>
  );
}

export default Loader;