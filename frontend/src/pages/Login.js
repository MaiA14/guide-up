
import { NavLink, Link } from 'react-router-dom';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../cmps/Navbar.js'
import { login , isNotlLoading } from '../reducers/guide/actionGuide.js'
import MobileNavbar from '../cmps/MobileNavbar.js'
import Loading from '../cmps/Loading.js'

class Login extends Component {

    state = {
        loginCred: {
            email: '',
            password: ''
        }, 
        msg: '',
        isMobile: false

    }

    componentDidMount(){
        window.addEventListener(('resize'), this.resize)
        this.props.isNotlLoading()
    }
    componentWillMount() {
        window.removeEventListener(('resize'), this.resize)
    }

    resize = () => {
        this.setState({ isMobile: window.innerWidth < 650 ? true : false })
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
            backgroundColor: '#537580',
          
        }

        if (this.props.isLoading) {
            return <Loading></Loading>
        }
        return (

            <div className="login-container flex column align-center justify-center">

                {this.state.isMobile ?
                    <MobileNavbar /> :
                    <Navbar styleNavBar={styleNavBar} />

                }
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
        user: state.user,
        isLoading: state.system.isLoading
    }
}
const mapDispatchToProps = {
    login,
    isNotlLoading
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)