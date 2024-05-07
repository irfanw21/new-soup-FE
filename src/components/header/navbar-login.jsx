import React from 'react';
import './navbar-login.css'; // Importing the CSS file for styling
import navbarLogo from '../../assets/navbar-logo.png';

const Navbar = () => {
  return (
    <div className="navbar-login">
         <div class="navbar-logo">
    <img src={navbarLogo} alt="Logo"/>
  </div>
  <div class="navbar-links">
    <button class="navbar-button login">Login</button>
    <button class="navbar-button register">Register</button>
  </div>
    </div>
  );
};

export default Navbar;