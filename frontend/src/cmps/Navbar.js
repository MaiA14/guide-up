import { NavLink, Link } from 'react-router-dom';
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

// class GuidePreviewCard extends Component
class Navbar extends Component {


    render() {

        if (!this.props.guides.length) {
            return <h1>loading....</h1>
        }
     

        return <div className="main-navbar" style={this.props.styleNavBar}>
            <Link to="/" > <div className="flex logo">

                {/* <img src="https://i.ibb.co/8BxPMdT/logo.png" alt="logo"></img> */}
                <div className="logo-text">Local Guide</div>
            </div></Link>
            <div>

            </div>
            <div className=" nav-links">
                <div className="nav-link"><NavLink activeClassName="active" to='/' exact>Home</NavLink></div>
                <div className="nav-link"><NavLink activeClassName="active" to='/login' exact>Login</NavLink></div>
                <div className="nav-link"><NavLink activeClassName="active" to='/join_us' exact>Become a guide</NavLink></div>
                <div className="nav-link"><NavLink activeClassName="active" to='/profile' exact>
                    {this.props.user &&
                        <Image size={'mini'} src={this.props.user.imgUrl} circular    ></Image>


                    }


                </NavLink></div>

            </div>
        </div>



    }

}

const mapStateToProps = (state) => {
    return {
        guides: state.guides,
        user: state.user
    }
}
const mapDispatchToProps = {

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)


