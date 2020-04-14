import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
  render () {
    return (
      <div>
        <div className="header-nav">
          <div className="container">
            <nav>
              <ul>
                <Link className="headerLink" to="/">Главная</Link>
                <Link className="headerLink" to="/about">О нас</Link>
                <Link className="headerLink" to="/contacts">Контакты</Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;
