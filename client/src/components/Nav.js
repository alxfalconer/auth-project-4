import React from "react"
import { Link } from 'react-router-dom';

export const Nav = ({ loggedIn, handleLogout}) => {

    return (
      <div className="nav">
            <nav className="nav-links">
            <Link style={{color: "white"}} to="/">
              <li>Home</li></Link>
            <Link style={{color: "white"}} to="/gallery">
              <li>Gallery</li></Link>
            {loggedIn ? 
              <>
                <Link style={{color: "white"}} onClick={handleLogout}>Logout</Link> 
                {/* <Link eventKey={2} to="/collection">
                  <li>Collection</li></Link>  */}
                </>: 
              <>
                <Link style={{color: "white"}} to="/login">
                  <li>Login</li></Link>
                </>}
            </nav>
      </div>
    );
}