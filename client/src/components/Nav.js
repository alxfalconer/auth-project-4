import React from "react"
import { Link } from 'react-router-dom';

export const Nav = ({ loggedin, handleLogout}) => {

    return (
      <div className="nav">
            <nav className="nav-links">
            <Link style={{color: "white"}} to="/">
              <li>Poems</li></Link>
            <Link style={{color: "white"}} to="/gallery">
              <li>Gallery</li></Link>
            {loggedin ? 
              <>
                <Link style={{color: "white"}} onClick={handleLogout}>Logout</Link> 
                <Link eventKey={2} to="/profile">
                  <li>Account</li></Link> 
                </>: 
              <>
                <Link style={{color: "white"}} to="/login">
                  <li>Login</li></Link>
                <Link style={{color: "white"}} eventKey={2} to="/register">
                  <li>Register</li></Link> 
                </>}
            </nav>
      </div>
    );
}