
import { NavLink, Link } from 'react-router-dom';
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '../cmps/Navbar.js'
import { logUser } from '../reducers/guide/actionGuide.js'

class Login extends Component {

    state = { name: '', password: '' }

    inputChange = (ev) => {
        let fieldName = ev.target.name
        this.setState({ [fieldName]: ev.target.value })
    }

    onLogin = async (ev) => {
        ev.preventDefault();
        try {
            await this.props.logUser(this.state)
            this.props.history.push('/')
        } catch (err) { throw err }
    }

    render() {
        const styleNavBar = {
            backgroundColor: '#161f24'
        }
        return (

            <div className="flex column align-center justify-center">
                <Navbar styleNavBar={styleNavBar} ></Navbar>
                <div className="login-header">Login</div>
                <div>
                    <div> <input name="name" onChange={this.inputChange}
                     value={this.state.name} type="text" className="login-input" 
                     placeholder=" Username"></input></div>
                    <div> <input name="password" onChange={this.inputChange} 
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
    logUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)