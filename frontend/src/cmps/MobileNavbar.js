import { NavLink, Link } from 'react-router-dom';
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Navbar extends Component {

    state = {
        loginUser: ''
    }
    componentDidMount() {
        if (this.props.user) {
            const loginUser = this.props.user

            this.setState({ loginUser })

        }
    }

    render() {



        return <div className="mobile-navbar" >
            <div className=" nav-links">
                <div className="nav-link"><NavLink activeClassName="active" to='/' exact>
                    <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1581443521/po7uylf9yoy2y1k9j1ik.png" className="nav-mobile-icon"></img>
                </NavLink></div>
                <div className="nav-link"><NavLink activeClassName="active" to='/login' exact>
                    <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1581444047/etvgpiyke0xg0yfmmklp.svg" className="nav-mobile-icon"></img>

                </NavLink></div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        guides: state.guides,
        loggedInUser: state.guides.loggedInUser
    }
}

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)


