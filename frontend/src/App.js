import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import LocalGuideApp from './pages/LocalGuideApp.js'
import GuideDetails from '../src/pages/GuideDetails.js';
import FilteredGuideList from '../src/pages/FilteredGuideList.js'
import Footer from '../src/cmps/Footer.js'
import Navbar from '../src/cmps/Navbar.js'
import global from '../src/assets/styles/global.scss'
import Login from '../src/pages/Login.js'
import Signup from '../src/pages/Signup'
import {rootReducer} from './reducers/guide/GuideReducer.js'
import BecomeGuide from './pages/BecomeGuide.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

function App() {
  return (
    <div className="App">
        <Router>
      <Navbar></Navbar>       
          <Switch>
            <Route component={LocalGuideApp} path="/" exact></Route>
 
            <Route component={GuideDetails} path="/guides" exact></Route>
            <Route component={FilteredGuideList} path="/location" exact></Route>
            <Route component={Login} path="/login" exact></Route>
            <Route component={Signup} path="/signup" exact></Route>
            <Route component={BecomeGuide} path="/join_us"></Route>

          {/* <Route component={Signup} path="/signup" exact></Route>
          <Route component={AddGuide} path="/addGuide" exact></Route>  */}
            {/* <Route component={EditProfile} path="edit" exact></Route>  */}
          </Switch>
       
      </Router>


      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
