import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import HomePageCompound from './compounds/HomePageCompound'
import SignUpPageCompound from './compounds/SignUpPageCompound'
import LogInPageCompound from './compounds/LogInPageCompound'
import GetStartedPageCompound from './compounds/GetStartedPageCompound'
import AllPostsPageCompound from './compounds/AllPostsPageCompound'
import MyProfilePageCompound from './compounds/MyProfilePageCompound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePageCompound />
        </Route>

        <Route path="/SignUpPageCompound">
          <SignUpPageCompound />
        </Route>

        <Route path="/LogInPageCompound">
          <LogInPageCompound />
        </Route>

        <Route path="/GetStartedPageCompound">
          <GetStartedPageCompound />
        </Route>

        <Route path="/AllPostsPageCompound">
          <AllPostsPageCompound />
        </Route>

        <Route path="/MyProfilePageCompound">
          <MyProfilePageCompound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
