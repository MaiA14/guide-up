import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div className="flex column align-center justify-center">
                <div className="login-header">Signup</div>
                <div>
                    <div> <input type="text" className="login-input" placeholder=" Name"></input></div>
                    <div> <input type="text" className="login-input" placeholder=" Username"></input></div>
                    <div> <input type="text" className="login-input" placeholder=" Password"></input></div>
                    <div> <input type="text" className="login-input" placeholder="Confirm password"></input></div>
                    <div className="login-btns-warpper">
                        <div className="btn-container">
                            <button className="login-btn">Login</button>
                            <button className="reset-btn">Reset</button>
                        </div>
                        <Link to="/login" className="join-header">Already a member? Login!</Link>
                    </div>
                </div>
            </div>

        )
    }
}
