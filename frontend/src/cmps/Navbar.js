import { NavLink, Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

import { Image } from "semantic-ui-react";

class Navbar extends Component {
  state = {
    loginUser: "",
  };
  componentDidMount() {
    if (this.props.user) {
      const loginUser = this.props.user;
      this.setState({ loginUser });
    }
  }

  render() {
    const styleImg = {
      bordeRadius: "50%",
      height: "41px",
      width: "45px",
    };
    return (
      <div className="main-navbar" style={this.props.styleNavBar}>
        <Link to="/">
          {" "}
          <div className="flex logo">
            <div className="logo-text">GuideUp</div>
          </div>
        </Link>
        <div></div>
        <div className=" nav-links">
          <div className="nav-link">
            <NavLink activeClassName="active" to="/" exact>
              Home
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink activeClassName="active" to="/login" exact>
              Login
            </NavLink>
          </div>
          {/* <div className="nav-link"><NavLink activeClassName="active"
                to='/join_us' exact>Become a Guide</NavLink></div> */}
          <div className="nav-link">
            <NavLink activeClassName="active" to="/profile" exact>
              {this.props.loggedInUser && (
                <Image
                  style={styleImg}
                  size={"mini"}
                  src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580585567/liivrwjfvseuovfquyxp.png"
                  circular
                ></Image>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    guides: state.guides,
    loggedInUser: state.guides.loggedInUser,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
