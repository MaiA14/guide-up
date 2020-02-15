
import { NavLink, Link } from 'react-router-dom';
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../cmps/Navbar.js'
import { login } from '../reducers/guide/actionGuide.js'




class Login extends Component {

    state = {
        loginCred: {
            email: '',
            password: ''
        }, msg: ''
    }

    loginHandleChange = ev => {
        const { name, value } = ev.target;
        this.setState(prevState => ({
            loginCred: {
                ...prevState.loginCred,
                [name]: value
            }
        }));
    };

    onLogin = async (ev) => {
        ev.preventDefault();
        const { name, password } = this.state.loginCred;

        if (!name || !password) {
            return this.setState({ msg: 'Please enter user/password' });
        }
        try {
            this.props.login({ name, password });
            this.setState({ loginCred: { email: '', password: '' } });
            this.props.history.push('/')
        } catch (err) { console.log(err) }
    }

    render() {
        const styleNavBar = {
            backgroundColor: '#537580'
        }
        return (

            <div className="flex column align-center justify-center">
                <Navbar styleNavBar={styleNavBar} ></Navbar>
                <div className="login-header">Login</div>
                <div>
                    <div> <input name="name" onChange={this.loginHandleChange}
                        value={this.state.name} type="text" className="login-input"
                        placeholder=" Username"></input></div>
                    <div> <input name="password" onChange={this.loginHandleChange}
                        value={this.state.password} type="password" className="login-input"
                        placeholder=" Password"></input></div>
                    <div className="login-btns-warpper">
                        <div className="btn-container">
                            <button onClick={this.onLogin}
                                className="login-btn">Login</button>
                            <button className="reset-btn">Reset</button>
                        </div>
                        <Link to="/signup"
                            className="join-header">Not a member? Signup!</Link>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {
    login
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)