import React from 'react'
import collector from "./collector.png"
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="background" >
            <h3><img className="collector" src={collector} alt="collector"/></h3>
            <br></br>
            <br></br>
        <Link className= "poem-button" to="/login">Login</Link>
        <div class="divider"/>
        <Link className= "poem-button" to="/register">Register</Link>
        </div>
    )
}