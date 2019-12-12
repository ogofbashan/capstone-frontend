import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
      <header className="Header">
        <nav className="navbar navbar-dark bg-dark">
          <NavLink to='/' className='navbar-brand'> NBA</NavLink>

        </nav>
      </header>
    );
  }
export default Header;
