import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// import './App.css';
import LocalGuideApp from './pages/LocalGuideApp.js'
import GuideDetails from '../src/pages/GuideDetails.js';
import FilteredGuideList from '../src/pages/FilteredGuideList.js'

import Footer from '../src/cmps/Footer.js'
import Navbar from '../src/cmps/Navbar.js'
import global from '../src/assets/styles/global.scss'
// import Navbar from '../src/cmps/Navbar.js';
// import AddGuide from '../src/pages/AddGuide.js'
// import EditGuide from '../src/pages/EditGuide.js';
import Login from '../src/pages/Login.js'
// const { createBrowserHistory } = History
// const history = createBrowserHistory()


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
