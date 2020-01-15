import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import LocalGuideApp from './pages/LocalGuideApp.js'
import GuideDetails from '../src/pages/GuideDetails.js';
import Header from '../src/cmps/Header.js'
import Footer from '../src/cmps/Footer.js'
// import Navbar from '../src/cmps/Navbar.js';
// import AddGuide from '../src/pages/AddGuide.js'
// import EditGuide from '../src/pages/EditGuide.js';
// import Login from '../src/pages/Login.js'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>

        <Switch>
        <Route component={LocalGuideApp} path="/" exact></Route>
        <Route component={GuideDetails} path="/guides/:id" exact></Route>

         {/* <Route component={Login} path="/login" exact></Route>
          <Route component={Signup} path="/signup" exact></Route>
          <Route component={AddGuide} path="/addGuide" exact></Route> */}
          {/* <Route component={EditProfile} path="edit" exact></Route>  */}
        </Switch>
      </Router>


      <Footer></Footer>
    </div>
  );
}

export default App;
