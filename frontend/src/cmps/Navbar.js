
import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Navbar(props) {

    return <div className="main-navbar">
        <div className="nav-link"><NavLink activeClassName="active" to='/'>
            <img src="https://i.ibb.co/Sc5KnfL/logo.png" alt="logo"></img></NavLink></div>
        <div className="nav-link"><NavLink activeClassName="active" to='/'>Home</NavLink></div>
        <div className="nav-link"><NavLink activeClassName="active" to='/'>Login</NavLink></div>
        <div className="nav-link"><NavLink activeClassName="active" to='/'>Become a guide</NavLink></div>
    </div>

}