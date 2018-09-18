import React from "react";
import { Link } from 'react-router-dom'
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Lorem BBQ</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
