import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import './App.css';

import Navbar from "./components/layout/Navbar";
import Search from "./components/search";
import Saved from "./components/saved";
import Jumbotron from "./components/jumbotron";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route path="/search" component = {Search} />
            <Route path="/saved" component = {Saved} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;