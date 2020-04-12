import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';


class Header extends React.Component {
  render () {
    return (
      <div>
        <header>
          <div className="top-bar animate-dropdown"></div>
          <div className="main-header">
            <div className="container">
              <h1 className="site-title">React Currency App</h1>
            </div>
          </div>
          <Nav />
        </header>
      </div>
    )
  }
}

export default Header;
