import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="background" >
        <h1></h1>
        <Link className= "poem-button" to="/login">Login</Link>
        <p>
        </p>
        </div>
    )
}