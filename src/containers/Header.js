import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Home</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item" key={1}>
              <Link className="nav-link" to="/about">about</Link>
            </li>
            <li className="nav-item" key={2}>
              <Link className="nav-link" to="/projects">projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
