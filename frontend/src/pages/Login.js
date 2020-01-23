
import { NavLink, Link } from 'react-router-dom';
import React, { Component } from 'react'

import Navbar from '../cmps/Navbar.js'


export default class Login extends Component {
    render() {
        const styleNavBar = {
            backgroundColor : '#161f24'
        }
        return (

            <div className="flex column align-center justify-center">
            <Navbar  styleNavBar={styleNavBar} ></Navbar>

                <div className="login-header">Login</div>
                <div>
                    <div> <input type="text" className="login-input" placeholder=" Username"></input></div>
                    <div> <input type="text" className="login-input" placeholder=" Password"></input></div>
                    <div className="login-btns-warpper">
                        <div className="btn-container">
                        <button className="login-btn">Login</button>
                        <button className="reset-btn">Reset</button>
                        </div>
                        <Link to="/signup" className="join-header">Not a member? Signup!</Link>
                    </div>
                </div>
            </div>
        )
    }
}
