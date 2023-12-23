import React from 'react';
import logo from '../../assets/LOGO.svg';
import Nav from '../Nav/Nav';
import './Header.css'; 

function Header() {
  return (
    <header className="headerWrap">
      <figure className="headerWrap_fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <Nav className="nav_header" />
    </header>
  );
}

export default Header;