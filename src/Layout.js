import React from 'react';

import {Link} from 'react-router';

export default function Layout(props) {
  return (
    <div className="container">
      <h1 className="title">
        Bulma test
      </h1>
      <nav className="nav">
        <div className="nav-left">
          <Link to="/first" className="nav-item is-tab">first</Link>
          <Link to="/counter" className="nav-item">counter</Link>
          <Link to="/list" className="nav-item">list</Link>
          <Link to="/form" className="nav-item">form</Link>
          <Link to="/model" className="nav-item">model</Link>
        </div>
      </nav>
      {props.children}
    </div>
  );
}
