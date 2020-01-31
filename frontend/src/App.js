import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import thunk from 'redux-thunk';

import  '../src/assets/css/all.min.css'
import LocalGuideApp from './pages/LocalGuideApp.js'
import GuideDetails from '../src/pages/GuideDetails.js';
import FilteredGuideList from '../src/pages/FilteredGuideList.js'
import Footer from '../src/cmps/Footer.js'
import global from '../src/assets/styles/global.scss'
import Login from '../src/pages/Login.js'
import Signup from '../src/pages/Signup'
import BecomeGuide from './pages/BecomeGuide.js'
import Profile from './pages/Profile.js'
import "react-datepicker/dist/react-datepicker.css";

function App() {


  return (
    <div className="App">
        <Router>
          <Switch>
            <Route component={LocalGuideApp} path="/" exact></Route>
            <Route component={GuideDetails} path="/guides" exact></Route>
            <Route component={FilteredGuideList} path="/location" exact></Route>
            <Route component={Login} path="/login"exact  ></Route>
            <Route component={Signup} path="/signup"exact ></Route>
            <Route component={BecomeGuide} path="/join_us"exact ></Route>
            <Route component={Profile} path="/profile"exact ></Route>


          </Switch>
      </Router>
    </div>
  );
}

export default App;
