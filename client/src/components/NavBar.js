import React from "react"
import { Nav } from 'react-bootstrap'

export const NavBar = ({ loggedin, handleLogout}) => {

    return (
      <div className="nav">
            <Nav className="nav-links">
            <Nav.Link style={{color: "white"}} href="/">Poems</Nav.Link>
            <Nav.Link style={{color: "white"}} href="/gallery">Gallery</Nav.Link>
            {loggedin ? 
              <>
                <Nav.Link style={{color: "white"}} onClick={handleLogout}>Logout</Nav.Link> 
                <Nav.Link eventKey={2} href="profile">Account</Nav.Link> 
                </>: 
              <>
                <Nav.Link style={{color: "white"}} href="login">Login</Nav.Link>
                <Nav.Link style={{color: "white"}} eventKey={2} href="register">Register</Nav.Link> 
                </>}
            </Nav>
      </div>
    );
}