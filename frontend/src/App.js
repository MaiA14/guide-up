import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import LocalGuideApp from './pages/LocalGuideApp.js'
import GuideDetails from '../src/pages/GuideDetails.js';
import FilteredGuideList from '../src/pages/FilteredGuideList.js'
import Footer from '../src/cmps/Footer.js'
import global from '../src/assets/styles/global.scss'
import Loading from './cmps/Loading.js'
import Login from '../src/pages/Login.js'
import Signup from '../src/pages/Signup'
import BecomeGuide from './pages/BecomeGuide.js'
import Profile from './pages/Profile.js'
import "react-datepicker/dist/react-datepicker.css";
import 'react-notifications/lib/notifications.css';
import { connect } from 'react-redux'
import React, { Component, NavLink } from "react";

class app extends Component {
  state = {
    isMobile: false
  }

  componentDidMount() {
    window.addEventListener(('resize'), this.resize)
    this.setState({ isMobile: window.innerWidth < 650 ? true : false })
  }
  componentWillMount() {
    window.removeEventListener(('resize'), this.resize)
}

  resize = () => {
    this.setState({ isMobile: window.innerWidth < 650 ? true : false })
  }

  render() {
    return (
      <div className="App" >
        <Router>
          <Switch>
            <Route component={LocalGuideApp} path="/" exact></Route>
            <Route component={GuideDetails} path="/guides" exact></Route>
            <Route component={FilteredGuideList} path="/location" exact></Route>
            <Route component={Login} path="/login" exact></Route>
            <Route component={Signup} path="/signup" exact ></Route>
            <Route component={BecomeGuide} path="/" exact ></Route>
            <Route component={Profile} path="/Profile" exact ></Route>
          </Switch>
        </Router>
        {!this.state.isMobile && !this.props.isLoading ?
          <div><Footer></Footer></div> : ''
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.system.isLoading
  }
}

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(app)

