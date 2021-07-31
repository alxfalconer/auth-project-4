import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return ( 
    <nav>
      <ul className="nav-links">
         <a href="/">
      </a>
      <Link style={{color: "white"}} to="/">
          <li>Home</li>
        </Link>
      <Link style={{color: "white"}} to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link style={{color: "white"}} to="/gallery">
          <li>Gallery</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;