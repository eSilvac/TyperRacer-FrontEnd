import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Views
import Navbar from '../components/Navbar/Navbar'
import Races from './races/index'
import Login from './users/login'
import Register from './users/register'

function App() {
  return (	
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register" component={Register}  />
        <Route path="/login" component={Login}  />
        <Route path="/" component={Races} />
      </Switch>
    </Router>	
  );
}

export default App;
