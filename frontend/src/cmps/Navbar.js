
import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Navbar(props) {

    return <div className="main-navbar">
        <div className="logo">
            <div className="nav-link"><NavLink activeClassName="active" to='/'>

                <img src="https://i.ibb.co/Sc5KnfL/logo.png" alt="logo"></img></NavLink></div>
        </div>
        <div className="nav-links">
            <div className="nav-link"><NavLink activeClassName="active" to='/'>Home</NavLink></div>
            <div className="nav-link"><NavLink activeClassName="active" to='/'>Login</NavLink></div>
            <div className="nav-link"><NavLink activeClassName="active" to='/'>Become a guide</NavLink></div>
        </div>
    </div>

}
// display: flex;
//     justify-content: flex-end;
//     width: 100%;
//     margin-right: 25px;
//     justify-content: flex-end