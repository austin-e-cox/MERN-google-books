import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/search";
import Saved from "./pages/saved";

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